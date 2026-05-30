import { and, asc, eq } from "drizzle-orm"
import { ulid, type Clock } from "@lifeos/shared"
import type { Database } from "../client"
import { tasks } from "../schema/tasks"

export interface NewTask {
	tenantId: string
	authorId: string
	title: string
	priority?: number
	dueAt?: Date | null
}

export async function listOpenTasks(
	tx: Database,
	tenantId: string,
	authorId: string,
) {
	return tx
		.select({
			id: tasks.id,
			title: tasks.title,
			status: tasks.status,
			priority: tasks.priority,
			dueAt: tasks.dueAt,
		})
		.from(tasks)
		.where(and(eq(tasks.tenantId, tenantId), eq(tasks.authorId, authorId)))
		.orderBy(asc(tasks.priority))
}

export async function createTask(tx: Database, input: NewTask) {
	const id = ulid()
	const [row] = await tx
		.insert(tasks)
		.values({
			id,
			tenantId: input.tenantId,
			authorId: input.authorId,
			title: input.title,
			priority: input.priority ?? 0,
			dueAt: input.dueAt ?? null,
		})
		.returning()
	return row
}

export async function completeTask(
	tx: Database,
	tenantId: string,
	id: string,
	clock: Clock,
) {
	const [row] = await tx
		.update(tasks)
		.set({ status: "done", completedAt: clock.now(), updatedAt: clock.now() })
		.where(and(eq(tasks.tenantId, tenantId), eq(tasks.id, id)))
		.returning()
	return row
}
