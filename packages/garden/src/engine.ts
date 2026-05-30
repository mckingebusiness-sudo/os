import { ulid, type Clock } from "@lifeos/shared"
import type { Garden, Plant, GrowthStage } from "./types"

// Humane engagement: plants grow from real actions. Neglect makes a plant
// gently "rest" — it never withers, dies, or shames the user.
export const POINTS_PER_STAGE = 50

export function stageForPoints(points: number): GrowthStage {
	if (points < POINTS_PER_STAGE) return "seed"
	if (points < POINTS_PER_STAGE * 2) return "sprout"
	if (points < POINTS_PER_STAGE * 4) return "sapling"
	if (points < POINTS_PER_STAGE * 7) return "blooming"
	return "flourishing"
}

export function createGarden(clock: Clock, id: string = ulid()): Garden {
	return { id, plants: [], createdAt: clock.now().toISOString() }
}

export function plant(
	garden: Garden,
	name: string,
	clock: Clock,
	id: string = ulid(),
): Garden {
	const newPlant: Plant = {
		id,
		name,
		points: 0,
		stage: "seed",
		resting: false,
		plantedAt: clock.now().toISOString(),
	}
	return { ...garden, plants: [...garden.plants, newPlant] }
}

function mapPlant(
	garden: Garden,
	plantId: string,
	fn: (p: Plant) => Plant,
): Garden {
	return {
		...garden,
		plants: garden.plants.map((p) => (p.id === plantId ? fn(p) : p)),
	}
}

export function nurture(garden: Garden, plantId: string, points = 10): Garden {
	return mapPlant(garden, plantId, (p) => {
		const total = Math.max(0, p.points + Math.max(0, points))
		return {
			...p,
			points: total,
			stage: stageForPoints(total),
			resting: false,
		}
	})
}

// Gentle rest instead of death. Progress is preserved; one nurture wakes it.
export function rest(garden: Garden, plantId: string): Garden {
	return mapPlant(garden, plantId, (p) => ({ ...p, resting: true }))
}
