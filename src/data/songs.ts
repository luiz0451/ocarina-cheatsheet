import type { OcarinaNote } from "@/lib/ocarina";

/** Button sequence of every song; titles and descriptions live in `src/i18n`. */
export const SONG_NOTES = {
  "zeldas-lullaby": ["C-left", "C-up", "C-right", "C-left", "C-up", "C-right"],
  "eponas-song": ["C-up", "C-left", "C-right", "C-up", "C-left", "C-right"],
  "sarias-song": ["C-down", "C-right", "C-left", "C-down", "C-right", "C-left"],
  "suns-song": ["C-right", "C-down", "C-up", "C-right", "C-down", "C-up"],
  "song-of-time": ["C-right", "A", "C-down", "C-right", "A", "C-down"],
  "song-of-storms": ["A", "C-down", "C-up", "A", "C-down", "C-up"],
  "minuet-of-forest": ["A", "C-up", "C-left", "C-right", "C-left", "C-right"],
  "bolero-of-fire": ["C-down", "A", "C-down", "A", "C-right", "C-down", "C-right", "C-down"],
  "serenade-of-water": ["A", "C-down", "C-right", "C-right", "C-left"],
  "nocturne-of-shadow": ["C-left", "C-right", "C-right", "A", "C-left", "C-right", "C-down"],
  "requiem-of-spirit": ["A", "C-down", "A", "C-right", "C-down", "A"],
  "prelude-of-light": ["C-up", "C-right", "C-up", "C-right", "C-left", "C-up"],
} satisfies Record<string, OcarinaNote[]>;

export type SongId = keyof typeof SONG_NOTES;

export const SONGS: SongId[] = [
  "zeldas-lullaby",
  "eponas-song",
  "sarias-song",
  "suns-song",
  "song-of-time",
  "song-of-storms",
];

export const WARP_SONGS: SongId[] = [
  "minuet-of-forest",
  "bolero-of-fire",
  "serenade-of-water",
  "nocturne-of-shadow",
  "requiem-of-spirit",
  "prelude-of-light",
];
