// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://martinruiz.dev',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true,
    }),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-EC',
          en: 'en-US',
        },
      },
    }),
  ],
  image: {
    // Prefer sharp by default for best quality/performance
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  // If Bun has issues building native sharp, use Squoosh fallback:
  // image: { service: { entrypoint: 'astro/assets/services/squoosh' } }
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});
