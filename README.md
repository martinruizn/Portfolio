# Portafolio — Martin Ruiz

Portafolio estático en Astro + Tailwind. One-pager bilingüe (`/` español, `/en` inglés) con SEO en el HTML: canonical, hreflang, Open Graph, Twitter Card y JSON-LD.

## Requisitos

- Node 18+ (recomendado: 22 LTS)
- pnpm (vía Corepack, incluido en Node)

## Scripts

```bash
corepack enable
pnpm install && pnpm run dev
pnpm run build && pnpm run preview
# alternativa
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

- `src/layouts/BaseLayout.astro` — canonical, hreflang, OG/Twitter, JSON-LD.
- `src/components/HomePage.astro` — contenido del home, traducido en servidor.
- `src/i18n/` — diccionarios `es` / `en` y helpers de rutas.
- `src/pages/index.astro` — español (`/`).
- `src/pages/en/index.astro` — inglés (`/en`).

## Configuración Tailwind

- `tailwind.config.cjs` con `theme.extend.colors.brand = '#a15929'`.
- `src/styles/global.css` incluye tema oscuro, utilidades `.container`, `.card`, `.btn`.

## Deploy (Vercel)

- Build command: `astro build`
- Output dir: `dist`
- Dominio: `https://martinruiz.dev`
- Verificar: `/sitemap-index.xml`, `/robots.txt`, `/` y `/en`
