import { describe, expect, it } from "vitest"
import { fixedClock } from "@lifeos/shared"
import {
	createCompanion,
	addXp,
	applyGentleDecay,
	interact,
	HEALTH_FLOOR,
} from "./engine"

const clock = fixedClock(new Date("2026-01-01T00:00:00Z"))

describe("companion", () => {
	it("starts as an egg at level 1", () => {
		const c = createCompanion("رفيقي", clock, "test")
		expect(c.stage).toBe("egg")
		expect(c.level).toBe(1)
	})

	it("grows and evolves as it gains xp", () => {
		let c = createCompanion("رفيقي", clock, "test")
		c = addXp(c, 250)
		expect(c.level).toBe(3)
		expect(c.stage).toBe("hatchling")
	})

	it("never drops below the health floor and never dies", () => {
		let c = createCompanion("رفيقي", clock, "test")
		c = applyGentleDecay(c, 9999)
		expect(c.health).toBe(HEALTH_FLOOR)
	})

	it("recovers and bonds when you interact", () => {
		let c = createCompanion("رفيقي", clock, "test")
		c = applyGentleDecay(c, 10)
		const before = c.health
		c = interact(c, clock)
		expect(c.health).toBeGreaterThan(before)
		expect(c.bond).toBe(5)
	})
})
