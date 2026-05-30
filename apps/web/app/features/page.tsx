export const metadata = { title: "المميزات — LifeOS" }

const groups = [
	{ title: "الأساس", items: ["محرر بلوكات", "ملاحظات يومية", "بحث فوري", "رسم بياني للعادات"] },
	{ title: "الإنتاجية", items: ["مهام ومشاريع", "أهداف", "تقويم", "جلسات تركيز"] },
	{ title: "المتعة", items: ["رفيق يكبر 🐉", "شجرة الحياة 🌳", "إنجازات XP", "كبسولة الزمن"] },
	{ title: "التعاون", items: ["تعليقات", "غرف تدفق مشترك", "لوح لانهائي 🎨", "مزامنة لحظية"] },
]

export default function FeaturesPage() {
	return (
		<main className="mx-auto max-w-5xl px-6 py-16">
			<h1 className="mb-8 text-3xl font-bold">كل المميزات</h1>
			<div className="grid gap-6 sm:grid-cols-2">
				{groups.map((g) => (
					<div key={g.title} className="rounded-xl bg-surface p-6">
						<h3 className="mb-3 text-lg font-semibold text-accent">{g.title}</h3>
						<ul className="list-disc space-y-1 pe-6 text-[var(--color-muted)]">
							{g.items.map((it) => (
								<li key={it}>{it}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</main>
	)
}
