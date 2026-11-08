import type { Dict } from ".";

export default {
  site: {
    title: "Ocarina Cheatsheet",
    description: "Every ocarina song from The Legend of Zelda: Ocarina of Time, with the buttons to play it.",
  },
  seo: {
    title: "Ocarina of Time Songs Cheat Sheet – All Ocarina Notes",
    description:
      "Every Zelda: Ocarina of Time ocarina song with its notes: Zelda's Lullaby, Song of Storms, Song of Time, all warp songs and more, shown with the N64 A and C buttons.",
  },
  exportImage: { label: "Download as image", busy: "Preparing image…" },
  nav: { notes: "Notes", songs: "Songs", warpSongs: "Warp songs" },
  language: "Language",
  support: "Tip me",
  notes: {
    A: { label: "A", pitch: "D" },
    "C-down": { label: "C-Down", pitch: "F" },
    "C-right": { label: "C-Right", pitch: "A" },
    "C-left": { label: "C-Left", pitch: "B" },
    "C-up": { label: "C-Up", pitch: "D" },
  },
  songs: {
    "zeldas-lullaby": {
      title: "Zelda's Lullaby",
      description: "Opens doors marked with the Triforce and proves your tie to the royal family.",
    },
    "eponas-song": { title: "Epona's Song", description: "Calls Epona to you and makes cows give milk." },
    "sarias-song": { title: "Saria's Song", description: "Talks to Saria from anywhere and cheers up Darunia." },
    "suns-song": { title: "Sun's Song", description: "Skips to the next noon or midnight and freezes ReDeads." },
    "song-of-time": {
      title: "Song of Time",
      description: "Opens the Door of Time and makes blue Song of Time blocks appear or vanish.",
    },
    "song-of-storms": {
      title: "Song of Storms",
      description: "Makes it rain, opens hidden grottos, and drains the Kakariko well.",
    },
    "minuet-of-forest": { title: "Minuet of Forest", description: "Warps to the Sacred Forest Meadow." },
    "bolero-of-fire": { title: "Bolero of Fire", description: "Warps to Death Mountain Crater." },
    "serenade-of-water": { title: "Serenade of Water", description: "Warps to Lake Hylia." },
    "nocturne-of-shadow": { title: "Nocturne of Shadow", description: "Warps to the Kakariko Village graveyard." },
    "requiem-of-spirit": { title: "Requiem of Spirit", description: "Warps to the Desert Colossus." },
    "prelude-of-light": { title: "Prelude of Light", description: "Warps to the Temple of Time." },
  },
  scarecrow:
    "Scarecrow's Song has no fixed notes: compose your own eight-note tune for Bonooru at Lake Hylia as a child, play it back to him as an adult, then play it wherever Pierre can appear to summon him.",
} satisfies Dict;
