import Link from "next/link"

export function SiteFooter() {
	return (
		<footer style= borderTop: "1px solid #1f1f23", padding: "2rem 1.5rem", color: "var(--color-muted)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" >
			<span>© 2026 LifeOS — مجاني للأبد · AGPL-3.0</span>
			<span style= display: "flex", gap: "1rem" >
				<Link href="/legal/privacy">الخصوصية</Link>
				<Link href="/legal/terms">الشروط</Link>
			</span>
		</footer>
	)
}
