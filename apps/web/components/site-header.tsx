import Link from "next/link"

const links = [
	{ href: "/features", label: "المميزات" },
	{ href: "/security", label: "الخصوصية" },
	{ href: "/donate", label: "ادعمنا" },
]

export function SiteHeader() {
	return (
		<header style= display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.1rem 1.5rem", borderBottom: "1px solid #1f1f23" >
			<Link href="/" style= fontWeight: 700, fontSize: "1.2rem" >
				LifeOS
			</Link>
			<nav style= display: "flex", gap: "1.5rem" >
				{links.map((l) => (
					<Link key={l.href} href={l.href} style= color: "var(--color-muted)" >
						{l.label}
					</Link>
				))}
			</nav>
		</header>
	)
}
