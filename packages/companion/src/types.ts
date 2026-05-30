export type EvolutionStage =
	| "egg"
	| "hatchling"
	| "juvenile"
	| "adult"
	| "radiant"

export interface Companion {
	id: string
	name: string
	stage: EvolutionStage
	level: number
	xp: number
	bond: number
	health: number
	createdAt: string
	lastInteractionAt: string
}
