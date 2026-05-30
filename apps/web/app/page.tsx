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
		<main>
			<section style= padding: "6rem 1.5rem", textAlign: "center" >
				<p style= color: "var(--color-accent)", fontWeight: 600 >
					خصوصية أولًا · مجاني للأبد · يعمل دون اتصال
				</p>
				<h1 style= fontSize: "3rem", margin: "1rem 0", maxWidth: 760, marginInline: "auto" >
					LifeOS — نظام تشغيل حياتك الكامل
				</h1>
				<p style= color: "var(--color-muted)", maxWidth: 620, marginInline: "auto", fontSize: "1.15rem" >
					ملاحظات، مهام، أهداف، عادات، تركيز، ومعرفة — كلها في مكان واحد، تحت سيطرتك الكاملة.
				</p>
				<div style= marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center" >
					<Link href="/app" style= background: "var(--color-accent)", color: "#fff", padding: "0.85rem 1.6rem", borderRadius: 10, fontWeight: 600 >
						ابدأ الآن
					</Link>
					<Link href="/features" style= border: "1px solid #2a2a2e", padding: "0.85rem 1.6rem", borderRadius: 10 >
						المميزات
					</Link>
				</div>
			</section>
			<section style= padding: "2rem 1.5rem 6rem", maxWidth: 1080, marginInline: "auto" >
				<div style= display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" >
					{features.map((f) => (
						<div key={f.title} style= background: "var(--color-surface)", padding: "1.5rem", borderRadius: 14, border: "1px solid #1f1f23" >
							<div style= fontSize: "1.8rem" >{f.icon}</div>
							<h3 style= margin: "0.6rem 0 0.3rem" >{f.title}</h3>
							<p style= color: "var(--color-muted)", margin: 0 >{f.desc}</p>
						</div>
					))}
				</div>
			</section>
		</main>
	)
}
