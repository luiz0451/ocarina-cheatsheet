import { getRelativeLocaleUrl } from "astro:i18n";
import type { SongId } from "@/data/songs";
import type { OcarinaNote } from "@/lib/ocarina";
import en from "./en";
import ptBr from "./pt-br";

export interface Dict {
  site: { title: string; description: string };
  /** Search-engine title/description: keyword-rich, ~60 / ~155 characters. */
  seo: { title: string; description: string };
  exportImage: { label: string; busy: string };
  nav: { notes: string; songs: string; warpSongs: string };
  language: string;
  support: string;
  notes: Record<OcarinaNote, { label: string; pitch: string }>;
  songs: Record<SongId, { title: string; description: string }>;
  scarecrow: string;
}

/** Keys must match `i18n.locales` in astro.config.mjs. */
export const LOCALES = {
  en: { name: "English", lang: "en", ogLocale: "en_US", dict: en },
  "pt-br": { name: "Português (Brasil)", lang: "pt-BR", ogLocale: "pt_BR", dict: ptBr },
} as const satisfies Record<string, { name: string; lang: string; ogLocale: string; dict: Dict }>;

export type Locale = keyof typeof LOCALES;

export const DEFAULT_LOCALE: Locale = "en";

/** Locale-prefixed URL (base path included) for `path`, e.g. `/pt-br/` or `/pt-br/#songs`. */
export function localeUrl(locale: Locale, path = ""): string {
  const [route, hash] = path.split("#");
  const href = getRelativeLocaleUrl(locale, route);
  return hash ? `${href}#${hash}` : href;
}
