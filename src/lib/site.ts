export const GITHUB_PROFILE = { handle: "luizlisps", url: "https://github.com/luizlisps" } as const;
export const KOFI_URL = "https://ko-fi.com/luizcarvalho";

/** Prefix an absolute site path with the configured `base` (GitHub Pages serves under /<repo>/). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
