import Link from "next/link"

const links = [
	{ href: "/features", label: "المميزات" },
	{ href: "/security", label: "الخصوصية" },
	{ href: "/donate", label: "ادعمنا" },
]

export function SiteHeader() {
	return (
		<header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
			<Link href="/" className="text-xl font-bold">
				LifeOS
			</Link>
			<nav className="flex gap-6 text-[var(--color-muted)]">
				{links.map((l) => (
					<Link key={l.href} href={l.href}>
						{l.label}
					</Link>
				))}
			</nav>
		</header>
	)
}
