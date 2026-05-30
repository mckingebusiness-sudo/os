export const metadata = { title: "المميزات — LifeOS" }

const groups = [
	{ title: "الأساس", items: ["محرر بلوكات", "ملاحظات يومية", "بحث فوري", "رسم بياني للعادات"] },
	{ title: "الإنتاجية", items: ["مهام ومشاريع", "أهداف", "تقويم", "جلسات تركيز"] },
	{ title: "المتعة", items: ["رفيق يكبر 🐉", "شجرة الحياة 🌳", "إنجازات XP", "كبسولة الزمن"] },
	{ title: "التعاون", items: ["تعليقات", "غرف تدفق مشترك", "لوح لانهائي 🎨", "مزامنة لحظية"] },
]

export default function FeaturesPage() {
	return (
		<main style= maxWidth: 980, margin: "0 auto", padding: "4rem 1.5rem" >
			<h1>كل المميزات</h1>
			<div style= display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", marginTop: "2rem" >
				{groups.map((g) => (
					<div key={g.title} style= background: "var(--color-surface)", padding: "1.5rem", borderRadius: 14, border: "1px solid #1f1f23" >
						<h3 style= marginTop: 0 >{g.title}</h3>
						<ul style= color: "var(--color-muted)", paddingInlineStart: "1.2rem", margin: 0 >
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
