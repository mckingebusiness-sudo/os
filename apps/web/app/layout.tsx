import type { Metadata } from "next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
	title: "LifeOS — نظام تشغيل حياتك",
	description:
		"نظام إنتاجية خاص بالخصوصية، مجاني للأبد، يعمل دون اتصال.",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ar" dir="rtl" className="dark">
			<body>
				<SiteHeader />
				{children}
				<SiteFooter />
			</body>
		</html>
	)
}
