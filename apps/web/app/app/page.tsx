export const metadata = { title: "التطبيق — LifeOS" }

const nav = [
	"🏠 الرئيسية",
	"📝 الملاحظات",
	"✅ المهام",
	"🎯 الأهداف",
	"🎨 اللوح",
	"🐉 الرفيق",
]

export default function AppShellPage() {
	return (
		<main className="mx-auto flex max-w-6xl gap-6 px-6 py-10">
			<aside className="w-56 shrink-0 rounded-xl bg-surface p-4">
				<nav className="flex flex-col gap-3 text-[var(--color-muted)]">
					{nav.map((item) => (
						<span key={item}>{item}</span>
					))}
				</nav>
			</aside>
			<section className="flex-1">
				<h1 className="mb-3 text-2xl font-bold">مرحبًا في LifeOS</h1>
				<p className="text-[var(--color-muted)]">هيكل التطبيق — ستُبنى الوحدات هنا على المراحل.</p>
			</section>
		</main>
	)
}
