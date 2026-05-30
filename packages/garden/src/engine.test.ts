import { describe, expect, it } from "vitest"
import { fixedClock } from "@lifeos/shared"
import { createGarden, plant, nurture, rest, stageForPoints } from "./engine"

const clock = fixedClock(new Date("2026-01-01T00:00:00Z"))

describe("garden", () => {
	it("plants a seed", () => {
		let g = createGarden(clock, "g")
		g = plant(g, "هدفي", clock, "p1")
		expect(g.plants).toHaveLength(1)
		expect(g.plants[0]?.stage).toBe("seed")
	})

	it("grows with nurture", () => {
		let g = createGarden(clock, "g")
		g = plant(g, "هدفي", clock, "p1")
		g = nurture(g, "p1", 120)
		expect(g.plants[0]?.stage).toBe("sapling")
	})

	it("rests gently without losing progress and wakes on nurture", () => {
		let g = createGarden(clock, "g")
		g = plant(g, "هدفي", clock, "p1")
		g = nurture(g, "p1", 80)
		g = rest(g, "p1")
		expect(g.plants[0]?.resting).toBe(true)
		g = nurture(g, "p1", 10)
		expect(g.plants[0]?.resting).toBe(false)
		expect(g.plants[0]?.points).toBe(90)
	})
})

describe("stageForPoints", () => {
	it("maps thresholds", () => {
		expect(stageForPoints(0)).toBe("seed")
		expect(stageForPoints(350)).toBe("flourishing")
	})
})
