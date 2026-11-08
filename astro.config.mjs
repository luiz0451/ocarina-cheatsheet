// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site: https://luizlisps.github.io/ocarina-cheatsheet/
  site: 'https://luizlisps.github.io',
  base: '/ocarina-cheatsheet',

  i18n: {
    locales: ['en', 'pt-br'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false }
  },

  integrations: [
    react(),
    // Emits sitemap-index.xml with hreflang alternates for every locale.
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', 'pt-br': 'pt-BR' }
      }
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
