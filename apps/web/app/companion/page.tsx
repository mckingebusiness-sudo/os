"use client"

import { useState } from "react"
import {
	createCompanion,
	addXp,
	interact,
	XP_PER_LEVEL,
	BOND_MAX,
	HEALTH_MAX,
	type Companion,
} from "@lifeos/companion"
import { systemClock } from "@lifeos/shared"

const stageEmoji: Record<string, string> = {
	egg: "🥚",
	hatchling: "🐣",
	juvenile: "🦎",
	adult: "🐉",
	radiant: "✨",
}

const stageLabel: Record<string, string> = {
	egg: "بيضة",
	hatchling: "فقس",
	juvenile: "يافع",
	adult: "بالغ",
	radiant: "متوهّج",
}

function barStyle(pct: number) {
	const clamped = Math.max(0, Math.min(100, pct))
	return { width: `${clamped}%` }
}

function Meter(props: { label: string; value: number; max: number }) {
	const pct = (props.value / props.max) * 100
	return (
		<div>
			<div className="mb-1 flex justify-between text-sm text-[var(--color-muted)]">
				<span>{props.label}</span>
				<span>
					{props.value} / {props.max}
				</span>
			</div>
			<div className="h-2 w-full overflow-hidden rounded bg-surface">
				<div className="h-full rounded bg-accent" style={barStyle(pct)} />
			</div>
		</div>
	)
}

export default function CompanionPage() {
	const [c, setC] = useState<Companion>(() =>
		createCompanion("رفيقي", systemClock),
	)

	const xpIntoLevel = c.xp % XP_PER_LEVEL

	return (
		<main className="mx-auto max-w-xl px-6 py-16 text-center">
			<div className="mb-4 text-8xl">{stageEmoji[c.stage]}</div>
			<h1 className="mb-1 text-2xl font-bold">{c.name}</h1>
			<p className="mb-8 text-[var(--color-muted)]">
				{stageLabel[c.stage]} · المستوى {c.level}
			</p>

			<div className="space-y-4 text-right">
				<Meter label="الخبرة" value={xpIntoLevel} max={XP_PER_LEVEL} />
				<Meter label="الترابط" value={c.bond} max={BOND_MAX} />
				<Meter label="الصحة" value={c.health} max={HEALTH_MAX} />
			</div>

			<div className="mt-8 flex justify-center gap-3">
				<button
					onClick={() => setC(addXp(c, 40))}
					className="rounded-lg bg-accent px-5 py-2 font-semibold"
				>
					+ خبرة
				</button>
				<button
					onClick={() => setC(interact(c, systemClock))}
					className="rounded-lg border border-surface px-5 py-2"
				>
					داعِبه 💛
				</button>
			</div>

			<p className="mt-8 text-sm text-[var(--color-muted)]">
				لا موت · لا عقاب · أدنى صحة 10 — الرفيق ينمو معك بلطف.
			</p>
		</main>
	)
}
