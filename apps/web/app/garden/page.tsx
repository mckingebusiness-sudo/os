"use client"

import { useState } from "react"
import { createGarden, plant, nurture, type Garden } from "@lifeos/garden"
import { systemClock } from "@lifeos/shared"

const plantEmoji: Record<string, string> = {
	seed: "🌱",
	sprout: "🌿",
	sapling: "🪴",
	blooming: "🌸",
	flourishing: "🌳",
}

export default function GardenPage() {
	const [garden, setGarden] = useState<Garden>(() => {
		let g = createGarden(systemClock, "demo")
		g = plant(g, "القراءة", systemClock, "p1")
		g = plant(g, "الرياضة", systemClock, "p2")
		g = plant(g, "التأمل", systemClock, "p3")
		return g
	})

	return (
		<main className="mx-auto max-w-3xl px-6 py-16">
			<h1 className="mb-2 text-3xl font-bold">شجرة الحياة 🌳</h1>
			<p className="mb-10 text-[var(--color-muted)]">
				تنمو نباتاتك مع أفعالك الحقيقية. الإهمال يجعلها ترتاح بلطف — لا تذبل ولا تموت أبدًا.
			</p>
			<div className="grid gap-6 sm:grid-cols-3">
				{garden.plants.map((p) => (
					<div key={p.id} className="rounded-xl bg-surface p-6 text-center">
						<div className="mb-3 text-6xl">{plantEmoji[p.stage]}</div>
						<h3 className="mb-1 font-semibold">{p.name}</h3>
						<p className="mb-4 text-sm text-[var(--color-muted)]">
							{p.stage} · {p.points} نقطة
						</p>
						<button
							onClick={() => setGarden(nurture(garden, p.id, 20))}
							className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold"
						>
							اعتنِ به +20
						</button>
					</div>
				))}
			</div>
		</main>
	)
}
