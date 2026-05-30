import { boolean, jsonb, pgTable, text, timestamp } from "drizzle-orm/pg-core"

export const notes = pgTable("notes", {
	id: text("id").primaryKey(),
	tenantId: text("tenant_id").notNull(),
	authorId: text("author_id").notNull(),
	title: text("title").notNull().default(""),
	content: jsonb("content").notNull().default({}),
	archived: boolean("archived").notNull().default(false),
	createdAt: timestamp("created_at", { withTimezone: true })
		.notNull()
		.defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true })
		.notNull()
		.defaultNow(),
})
