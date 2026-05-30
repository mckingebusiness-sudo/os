import { ulid, type Clock } from "@lifeos/shared"
import type { Companion, EvolutionStage } from "./types"

// Humane invariants: the companion never dies and never guilt-trips.
export const HEALTH_FLOOR = 10
export const HEALTH_MAX = 100
export const XP_PER_LEVEL = 100
export const BOND_MAX = 100

export function levelForXp(xp: number): number {
	return 1 + Math.floor(Math.max(0, xp) / XP_PER_LEVEL)
}

export function stageForLevel(level: number): EvolutionStage {
	if (level <= 1) return "egg"
	if (level <= 3) return "hatchling"
	if (level <= 6) return "juvenile"
	if (level <= 9) return "adult"
	return "radiant"
}

function clamp(value: number, min: number, max: number): number {
	return Math.max(min, Math.min(max, value))
}

export function createCompanion(
	name: string,
	clock: Clock,
	id: string = ulid(),
): Companion {
	const now = clock.now().toISOString()
	return {
		id,
		name,
		stage: "egg",
		level: 1,
		xp: 0,
		bond: 0,
		health: HEALTH_MAX,
		createdAt: now,
		lastInteractionAt: now,
	}
}

function withProgress(c: Companion): Companion {
	const level = levelForXp(c.xp)
	return { ...c, level, stage: stageForLevel(level) }
}

export function addXp(c: Companion, amount: number): Companion {
	const xp = Math.max(0, c.xp + Math.max(0, amount))
	return withProgress({ ...c, xp })
}

export function strengthenBond(c: Companion, amount: number): Companion {
	return { ...c, bond: clamp(c.bond + amount, 0, BOND_MAX) }
}

// Gentle decay: health drifts down slowly but never past the floor.
// There is no death and no penalty to xp, level, or bond.
export function applyGentleDecay(c: Companion, daysAway: number): Companion {
	const drop = Math.max(0, Math.floor(daysAway)) * 3
	return { ...c, health: clamp(c.health - drop, HEALTH_FLOOR, HEALTH_MAX) }
}

export function interact(c: Companion, clock: Clock): Companion {
	const healed = clamp(c.health + 15, HEALTH_FLOOR, HEALTH_MAX)
	return {
		...strengthenBond(c, 5),
		health: healed,
		lastInteractionAt: clock.now().toISOString(),
	}
}
