export const metadata = { title: "الخصوصية والأمان — LifeOS" }

export default function SecurityPage() {
	return (
		<main style= maxWidth: 760, margin: "0 auto", padding: "4rem 1.5rem" >
			<h1>الخصوصية أولًا</h1>
			<ul style= color: "var(--color-muted)", lineHeight: 2 >
				<li>تشفير طرفي (E2EE) للخزنة والبيانات الحساسة.</li>
				<li>XChaCha20-Poly1305 · Argon2id · X25519 · Ed25519.</li>
				<li>لا نص صريح يصل إلى الذكاء الاصطناعي أو السجلات أو الفهرسة.</li>
				<li>يعمل دون اتصال (Local-First) مع مزامنة مشفّرة.</li>
				<li>تصدير كامل لبياناتك في أي وقت.</li>
			</ul>
		</main>
	)
}
