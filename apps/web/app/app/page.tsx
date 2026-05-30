export const metadata = { title: "التطبيق — LifeOS" }

export default function AppShellPage() {
	return (
		<main style= display: "grid", gridTemplateColumns: "240px 1fr", minHeight: "70vh" >
			<aside style= borderInlineEnd: "1px solid #1f1f23", padding: "1.5rem" >
				<nav style= display: "flex", flexDirection: "column", gap: "0.75rem", color: "var(--color-muted)" >
					<span>🏠 الرئيسية</span>
					<span>📝 الملاحظات</span>
					<span>✅ المهام</span>
					<span>🎯 الأهداف</span>
					<span>🎨 اللوح</span>
					<span>🐉 الرفيق</span>
				</nav>
			</aside>
			<section style= padding: "2rem" >
				<h1>مرحبًا في LifeOS</h1>
				<p style= color: "var(--color-muted)" >هيكل التطبيق — ستُبنى الوحدات هنا على المراحل.</p>
			</section>
		</main>
	)
}
