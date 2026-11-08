import { cn } from "@/lib/utils";
import { STAFF_STEP, type OcarinaNote } from "@/lib/ocarina";
import { NoteGlyph } from "./NoteGlyph";

// Geometry in SVG units.
const LINE_GAP = 10; // distance between staff lines
const TOP = 16; // y of the top line
const BOTTOM = TOP + LINE_GAP * 4; // y of the bottom line
const NOTE_R = 8.5;
const NOTE_SPACING = 26;
const PAD_X = 12;
const HEIGHT = BOTTOM + LINE_GAP + NOTE_R; // room for notes below the bottom line

interface StaffProps {
  notes: readonly OcarinaNote[];
  /** Localized name of each button, used for the accessible name. */
  noteLabels: Record<OcarinaNote, string>;
  /** Accessible name prefix, e.g. the song title. */
  label?: string;
  className?: string;
}

/** The in-game five-line staff with each note drawn as its N64 button. */
export function Staff({ notes, noteLabels, label, className }: StaffProps) {
  const width = PAD_X * 2 + notes.length * NOTE_SPACING;
  const sequence = notes.map((n) => noteLabels[n]).join(", ");

  return (
    <svg
      viewBox={`0 0 ${width} ${HEIGHT}`}
      role="img"
      aria-label={label ? `${label}: ${sequence}` : sequence}
      className={cn("h-auto w-full", className)}
      style={{ maxWidth: `${width * 1.6}px` }}
    >
      <g className="stroke-border" strokeWidth={1}>
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1={0} x2={width} y1={TOP + i * LINE_GAP} y2={TOP + i * LINE_GAP} />
        ))}
      </g>
      {notes.map((note, i) => (
        <NoteGlyph
          key={i}
          note={note}
          cx={PAD_X + NOTE_SPACING / 2 + i * NOTE_SPACING}
          cy={BOTTOM - STAFF_STEP[note] * (LINE_GAP / 2)}
          r={NOTE_R}
        />
      ))}
    </svg>
  );
}
