# Ocarina Cheatsheet

Ocarina songs from *The Legend of Zelda: Ocarina of Time*, drawn on the in-game staff with the N64 buttons used to play them.

Live at <https://ocarina.luizlab.com.br/>.

Built with Astro, React, Tailwind CSS, and shadcn/ui.

## Commands

| Command        | Action                                 |
| :------------- | :------------------------------------- |
| `pnpm install` | Install dependencies                   |
| `pnpm dev`     | Dev server at `localhost:4321`         |
| `pnpm build`   | Build the static site to `./dist/`     |
| `pnpm preview` | Preview the build                      |

## Layout

- `src/lib/ocarina.ts` – note model (`OcarinaNote`, staff positions).
- `src/data/songs.ts` – button sequence of every song.
- `src/i18n/` – one dictionary per language (`en`, `pt-br`) with all UI text, note names, and song titles/descriptions; `index.ts` registers the locales.
- `src/components/CheatsheetPage.astro` – the page, rendered once per locale by `src/pages/index.astro` (English, `/`) and `src/pages/[locale]/index.astro` (`/pt-br/`).
- `src/components/ocarina/` – `OcarinaButton` (single button icon), `Staff` (song partition), `SongCard`.
- `src/components/ExportImageButton.tsx` – "Download as image": renders the cheatsheet (`#cheatsheet`) at a fixed 1040px width to PNG with `html-to-image`, in the visitor's current theme.
- `src/components/ui/` – shadcn/ui components.
- `src/layouts/Layout.astro` – `<head>` SEO: title/description (`seo` in each dictionary), canonical, hreflang, Open Graph/Twitter cards, JSON-LD.
- `src/lib/site.ts` – GitHub profile link and the `url()` helper that applies the configured base path.

## Adding a language

1. Copy `src/i18n/en.ts` to `src/i18n/<code>.ts` and translate it (the `Dict` type flags missing keys).
2. Register it in `LOCALES` in `src/i18n/index.ts` (with its `ogLocale`).
3. Add the code to `i18n.locales` and to the sitemap `locales` in `astro.config.mjs`.
4. Add a `public/og-<code>.png` social preview (1200×630).

## SEO

- `@astrojs/sitemap` emits `sitemap-index.xml` with hreflang alternates.
- `public/og-<locale>.png` are screenshots of each page (1200×630, light theme); retake them after visual changes.
- Submit `https://ocarina.luizlab.com.br/sitemap-index.xml` in Google Search Console.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`. In the repo settings, set **Pages → Source** to **GitHub Actions**.
