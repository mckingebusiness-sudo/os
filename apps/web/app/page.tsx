import Link from "next/link"

const features = [
	{ icon: "📝", title: "محرر بلوكات", desc: "صفحات وملاحظات غنية بأسلوب بلوك." },
	{ icon: "✅", title: "مهام وعادات", desc: "نظام مهام ضخم مع عادات وأهداف." },
	{ icon: "🎨", title: "لوح لانهائي", desc: "Whiteboard وCanvas تعاوني لحظي." },
	{ icon: "🐉", title: "رفيق يكبر", desc: "Living Companion يتطور مع إنجازاتك دون عقاب." },
	{ icon: "🌳", title: "شجرة الحياة", desc: "تحفيز إنساني بدون إدمان." },
	{ icon: "🔒", title: "خزنة صفرية المعرفة", desc: "تشفير طرفي E2EE وعمل دون اتصال." },
]

export default function HomePage() {
	return (
		<main className="mx-auto max-w-5xl px-6">
			<section className="py-24 text-center">
				<p className="mb-4 text-[var(--color-muted)]">
					خصوصية أولًا · مجاني للأبد · يعمل دون اتصال
				</p>
				<h1 className="mb-6 text-4xl font-bold md:text-5xl">
					LifeOS — نظام تشغيل حياتك الكامل
				</h1>
				<p className="mx-auto mb-8 max-w-2xl text-[var(--color-muted)]">
					ملاحظات، مهام، أهداف، عادات، تركيز، ومعرفة — كلها في مكان واحد، تحت سيطرتك الكاملة.
				</p>
				<div className="flex justify-center gap-4">
					<Link href="/app" className="rounded-lg bg-accent px-6 py-3 font-semibold">
						ابدأ الآن
					</Link>
					<Link href="/features" className="rounded-lg border border-surface px-6 py-3">
						المميزات
					</Link>
				</div>
			</section>
			<section className="py-12">
				<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
					{features.map((f) => (
						<div key={f.title} className="rounded-xl bg-surface p-6">
							<div className="mb-3 text-3xl">{f.icon}</div>
							<h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
							<p className="text-[var(--color-muted)]">{f.desc}</p>
						</div>
					))}
				</div>
			</section>
		</main>
	)
}
