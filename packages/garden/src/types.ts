export type GrowthStage =
	| "seed"
	| "sprout"
	| "sapling"
	| "blooming"
	| "flourishing"

export interface Plant {
	id: string
	name: string
	points: number
	stage: GrowthStage
	resting: boolean
	plantedAt: string
}

export interface Garden {
	id: string
	plants: Plant[]
	createdAt: string
}
