/** The five N64 buttons the ocarina is played with. */
export type OcarinaNote = "A" | "C-down" | "C-right" | "C-left" | "C-up";

/**
 * Vertical position of each note on the five-line staff, in half-line steps
 * above the bottom line (0 = bottom line, 1 = first space, 2 = second line, …).
 */
export const STAFF_STEP: Record<OcarinaNote, number> = {
  A: -1, // D
  "C-down": 1, // F
  "C-right": 3, // A
  "C-left": 4, // B
  "C-up": 6, // D
};

/** Low to high, the order the notes appear on the staff. */
export const NOTE_ORDER: OcarinaNote[] = ["A", "C-down", "C-right", "C-left", "C-up"];
