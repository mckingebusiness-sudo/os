import Link from "next/link"

const links = [
	{ href: "/features", label: "المميزات" },
	{ href: "/companion", label: "الرفيق" },
	{ href: "/garden", label: "شجرة الحياة" },
	{ href: "/whiteboard", label: "اللوح" },
	{ href: "/security", label: "الخصوصية" },
	{ href: "/donate", label: "ادعمنا" },
]

export function SiteHeader() {
	return (
		<header className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-5">
			<Link href="/" className="text-xl font-bold">
				LifeOS
			</Link>
			<nav className="flex flex-wrap gap-5 text-[var(--color-muted)]">
				{links.map((l) => (
					<Link key={l.href} href={l.href}>
						{l.label}
					</Link>
				))}
			</nav>
		</header>
	)
}
