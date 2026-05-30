import { describe, expect, it } from "vitest"
import { money, formatMoney } from "./money"
import { ulid, isUlid } from "./ulid"

describe("money", () => {
	it("stores cents as bigint and uppercases currency", () => {
		const m = money(1999, "usd")
		expect(m.amountCents).toBe(1999n)
		expect(m.currency).toBe("USD")
	})
	it("formats from cents", () => {
		expect(formatMoney(money(1999, "USD"), "en-US")).toContain("19.99")
	})
})

describe("ulid", () => {
	it("generates a valid 26-char ULID", () => {
		const id = ulid()
		expect(id).toHaveLength(26)
		expect(isUlid(id)).toBe(true)
	})
})
