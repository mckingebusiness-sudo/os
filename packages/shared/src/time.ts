// All timestamps are TIMESTAMPTZ in UTC. Never read the wall clock directly;
// inject a Clock so time is testable and deterministic.
export interface Clock {
	now(): Date
	nowMs(): number
	todayLocal(timeZone: string): string
}

export const systemClock: Clock = {
	now: () => new Date(),
	nowMs: () => Date.now(),
	todayLocal(timeZone: string): string {
		const fmt = new Intl.DateTimeFormat("en-CA", {
			timeZone,
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
		})
		return fmt.format(new Date())
	},
}

export function fixedClock(at: Date): Clock {
	return {
		now: () => new Date(at),
		nowMs: () => at.getTime(),
		todayLocal(timeZone: string): string {
			return new Intl.DateTimeFormat("en-CA", {
				timeZone,
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
			}).format(at)
		},
	}
}
