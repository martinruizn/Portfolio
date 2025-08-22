# Portafolio — Martin Ruiz

Portafolio estático construido con Astro + Tailwind + MD/MDX + islas React opcionales, SEO sólido (JSON-LD + OG/Twitter), RSS y sitemap listos para deploy.

## Requisitos

- Node 18+
- npm o bun

## Scripts

```bash
npm i && npm run dev
npm run build && npm run preview
# o
bun install && bun run dev
bun run build && bun run preview
```

## Notas de imagen (sharp vs squoosh)

Se usa `sharp` por defecto. Si Bun falla con `sharp`, puedes cambiar el servicio de imágenes:

```js
// astro.config.mjs (alternativa)
export default defineConfig({
  image: { service: { entrypoint: 'astro/assets/services/squoosh' } },
});
```

## Estructura

- `src/layouts/BaseLayout.astro` — Metadatos, JSON-LD, OG/Twitter.
- `src/components/Nav.astro`, `ProjectCard.astro`
- `src/content/config.ts` + `src/content/projects/*`
- `src/pages/*` — Home, About, Contact, Projects list/detail, RSS (`/rss.xml`).

## Configuración Tailwind

- `tailwind.config.cjs` con `theme.extend.colors.brand = '#a15929'`.
- `src/styles/global.css` incluye Inter Variable, tema oscuro, utilidades `.container`, `.card`, `.btn`.

## Deploy (Vercel)

- Build command: `astro build`
- Output dir: `dist`
- Apuntar DNS del dominio `https://martin.dev`
- Verificar: `/sitemap-index.xml`, `/robots.txt`, `/rss.xml`
