export const metadata = { title: "الخصوصية والأمان — LifeOS" }

export default function SecurityPage() {
	return (
		<main className="mx-auto max-w-3xl px-6 py-16">
			<h1 className="mb-6 text-3xl font-bold">الخصوصية أولًا</h1>
			<ul className="list-disc space-y-3 pe-6 text-[var(--color-muted)]">
				<li>تشفير طرفي (E2EE) للخزنة والبيانات الحساسة.</li>
				<li>XChaCha20-Poly1305 · Argon2id · X25519 · Ed25519.</li>
				<li>لا نص صريح يصل إلى الذكاء الاصطناعي أو السجلات أو الفهرسة.</li>
				<li>يعمل دون اتصال (Local-First) مع مزامنة مشفّرة.</li>
				<li>تصدير كامل لبياناتك في أي وقت.</li>
			</ul>
		</main>
	)
}
