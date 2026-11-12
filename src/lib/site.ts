export const GITHUB_PROFILE = { handle: "luiz0451", url: "https://github.com/luiz0451" } as const;
export const KOFI_URL = "https://ko-fi.com/luizcarvalho";

/** Prefix an absolute site path with the configured `base`. */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
