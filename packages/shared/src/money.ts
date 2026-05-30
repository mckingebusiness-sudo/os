// Money is always integer cents + ISO-4217 currency code. Never use floats.
export interface Money {
	amountCents: bigint
	currency: string
}

export function money(amountCents: bigint | number, currency: string): Money {
	return { amountCents: BigInt(amountCents), currency: currency.toUpperCase() }
}

export function formatMoney(m: Money, locale = "ar-EG"): string {
	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency: m.currency,
	}).format(Number(m.amountCents) / 100)
}
