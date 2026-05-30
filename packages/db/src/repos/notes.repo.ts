import { and, desc, eq } from "drizzle-orm"
import { ulid } from "@lifeos/shared"
import type { Database } from "../client"
import { notes } from "../schema/notes"

// SQL lives only in *.repo.ts. No SELECT *, no raw SQL in routes.
export interface NewNote {
	tenantId: string
	authorId: string
	title?: string
	content?: unknown
}

export async function listNotes(
	tx: Database,
	tenantId: string,
	authorId: string,
) {
	return tx
		.select({
			id: notes.id,
			title: notes.title,
			archived: notes.archived,
			updatedAt: notes.updatedAt,
		})
		.from(notes)
		.where(and(eq(notes.tenantId, tenantId), eq(notes.authorId, authorId)))
		.orderBy(desc(notes.updatedAt))
}

export async function createNote(tx: Database, input: NewNote) {
	const id = ulid()
	const [row] = await tx
		.insert(notes)
		.values({
			id,
			tenantId: input.tenantId,
			authorId: input.authorId,
			title: input.title ?? "",
			content: input.content ?? {},
		})
		.returning()
	return row
}
