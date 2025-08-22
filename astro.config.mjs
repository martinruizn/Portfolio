// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://martinruiz.dev',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true,
    }),
    mdx(),
    sitemap(),
  ],
  image: {
    // Prefer sharp by default for best quality/performance
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  // If Bun has issues building native sharp, use Squoosh fallback:
  // image: { service: { entrypoint: 'astro/assets/services/squoosh' } }
});
