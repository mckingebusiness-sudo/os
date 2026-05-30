"use client"

import { Tldraw } from "tldraw"
import "tldraw/tldraw.css"

// Infinite canvas + whiteboard. persistenceKey keeps it local-first (IndexedDB),
// so the board works fully offline and survives reloads.
export function WhiteboardCanvas() {
	return (
		<div className="h-[calc(100vh-80px)] w-full">
			<Tldraw persistenceKey="lifeos-whiteboard" />
		</div>
	)
}
