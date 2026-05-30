import Link from "next/link"

export function SiteFooter() {
	return (
		<footer className="mx-auto mt-16 flex max-w-5xl flex-col items-center justify-between gap-4 border-t border-surface px-6 py-10 text-[var(--color-muted)] sm:flex-row">
			<span>© 2026 LifeOS — مجاني للأبد · AGPL-3.0</span>
			<span className="flex gap-4">
				<Link href="/legal/privacy">الخصوصية</Link>
				<Link href="/legal/terms">الشروط</Link>
			</span>
		</footer>
	)
}
