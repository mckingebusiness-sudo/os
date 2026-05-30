// ULID identifiers everywhere. No UUID, no SERIAL.
const ENCODING = "0123456789ABCDEFGHJKMNPQRSTVWXYZ"
const ENCODING_LEN = ENCODING.length
const TIME_LEN = 10
const RANDOM_LEN = 16

function encodeTime(now: number, len: number): string {
	let str = ""
	for (let i = len - 1; i >= 0; i--) {
		const mod = now % ENCODING_LEN
		str = ENCODING[mod] + str
		now = (now - mod) / ENCODING_LEN
	}
	return str
}

function encodeRandom(len: number): string {
	const bytes = new Uint8Array(len)
	crypto.getRandomValues(bytes)
	let str = ""
	for (let i = 0; i < len; i++) {
		str += ENCODING[bytes[i] % ENCODING_LEN]
	}
	return str
}

export function ulid(now: number = Date.now()): string {
	return encodeTime(now, TIME_LEN) + encodeRandom(RANDOM_LEN)
}

const ULID_REGEX = /^[0-9A-HJKMNP-TV-Z]{26}$/
export function isUlid(value: string): boolean {
	return ULID_REGEX.test(value)
}
