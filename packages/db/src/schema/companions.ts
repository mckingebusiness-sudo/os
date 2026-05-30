import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core"

// Persisted state for the Living Companion. Health floor and no-death rules
// live in @lifeos/companion; the column simply stores the current value.
export const companions = pgTable("companions", {
	id: text("id").primaryKey(),
	tenantId: text("tenant_id").notNull(),
	ownerId: text("owner_id").notNull(),
	name: text("name").notNull(),
	stage: text("stage").notNull().default("egg"),
	level: integer("level").notNull().default(1),
	xp: integer("xp").notNull().default(0),
	bond: integer("bond").notNull().default(0),
	health: integer("health").notNull().default(100),
	createdAt: timestamp("created_at", { withTimezone: true })
		.notNull()
		.defaultNow(),
	lastInteractionAt: timestamp("last_interaction_at", { withTimezone: true })
		.notNull()
		.defaultNow(),
})
