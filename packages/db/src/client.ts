import { drizzle } from "drizzle-orm/postgres-js"
import { sql } from "drizzle-orm"
import postgres from "postgres"
import * as schema from "./schema"

const connectionString = process.env.DATABASE_URL ?? ""

// One shared connection. Repos (*.repo.ts) are the only place that run SQL.
const queryClient = postgres(connectionString, { max: 10 })

export const db = drizzle(queryClient, { schema })

export type Database = typeof db

// Run a unit of work inside a tenant RLS context. Every tenant-scoped query
// must go through here so Postgres RLS policies can isolate tenants.
export async function withTenant<T>(
	tenantId: string,
	fn: (tx: Database) => Promise<T>,
): Promise<T> {
	return db.transaction(async (tx) => {
		await tx.execute(
			sql`select set_config('app.tenant_id', ${tenantId}, true)`,
		)
		return fn(tx as unknown as Database)
	})
}
