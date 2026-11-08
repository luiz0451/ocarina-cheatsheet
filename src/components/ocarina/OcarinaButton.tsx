import { cn } from "@/lib/utils";
import type { OcarinaNote } from "@/lib/ocarina";
import { NoteGlyph } from "./NoteGlyph";

interface OcarinaButtonProps {
  note: OcarinaNote;
  /** Accessible name, e.g. the localized button label. */
  label: string;
  className?: string;
}

/** A single N64 button icon, sized by font-size (1em) unless overridden. */
export function OcarinaButton({ note, label, className }: OcarinaButtonProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label={label}
      className={cn("inline-block size-[1em] shrink-0 align-[-0.15em]", className)}
    >
      <NoteGlyph note={note} cx={12} cy={12} r={12} />
    </svg>
  );
}
