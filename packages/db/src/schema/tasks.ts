import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core"

export const tasks = pgTable("tasks", {
	id: text("id").primaryKey(),
	tenantId: text("tenant_id").notNull(),
	authorId: text("author_id").notNull(),
	title: text("title").notNull(),
	status: text("status").notNull().default("todo"),
	priority: integer("priority").notNull().default(0),
	dueAt: timestamp("due_at", { withTimezone: true }),
	completedAt: timestamp("completed_at", { withTimezone: true }),
	createdAt: timestamp("created_at", { withTimezone: true })
		.notNull()
		.defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true })
		.notNull()
		.defaultNow(),
})
