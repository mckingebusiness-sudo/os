import { boolean, integer, pgTable, text, timestamp } from "drizzle-orm/pg-core"

export const gardens = pgTable("gardens", {
	id: text("id").primaryKey(),
	tenantId: text("tenant_id").notNull(),
	ownerId: text("owner_id").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true })
		.notNull()
		.defaultNow(),
})

export const plants = pgTable("plants", {
	id: text("id").primaryKey(),
	tenantId: text("tenant_id").notNull(),
	gardenId: text("garden_id").notNull(),
	name: text("name").notNull(),
	points: integer("points").notNull().default(0),
	stage: text("stage").notNull().default("seed"),
	resting: boolean("resting").notNull().default(false),
	plantedAt: timestamp("planted_at", { withTimezone: true })
		.notNull()
		.defaultNow(),
})
