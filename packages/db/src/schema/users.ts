import { pgTable, text, timestamp } from "drizzle-orm/pg-core"

// All ids are ULID strings (no UUID, no SERIAL). All timestamps are TIMESTAMPTZ.
export const users = pgTable("users", {
	id: text("id").primaryKey(),
	tenantId: text("tenant_id").notNull(),
	email: text("email").notNull().unique(),
	displayName: text("display_name").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true })
		.notNull()
		.defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true })
		.notNull()
		.defaultNow(),
})
