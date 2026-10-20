# Dents Landing

Landing page for **Centro Odontológico Dents** (Villa María, Córdoba). Static site built with
[Astro](https://astro.build): no backend, plain HTML/CSS output.

- Preview: https://mateo-zarza.github.io/dents-landing/
- Final domain (pending): www.dents.com.ar

## Develop

```sh
npm install
npm run dev       # http://localhost:4321/dents-landing/
npm run build     # outputs dist/
```

## Content

| What | Where |
| --- | --- |
| Phone, email, address, Instagram, coverages | `src/data/site.ts` |
| Hero photo | `src/assets/hero.jpg` (replace the file) |
| Gallery photos | drop `.jpg/.png/.webp` into `src/assets/gallery/` |
| Logo, isologo, favicon | `src/assets/brand/` (vectors from the brand manual) |

Gallery photos are sorted by filename and resized/converted to WebP at build time. The alt text
comes from the filename (`02-sala-de-espera.jpg` → "Sala de espera"); the first one gets the big
tile. With no photos the gallery shows branded placeholders.

"Reserva tu turno" opens WhatsApp (`wa.me/5493534138771`) with a prefilled message. The map is a
keyless Google Maps embed.

## Deploy

Every push to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`.

The github.io build adds `noindex` so the preview never competes with the real domain in search.
For dents.com.ar, build with the real site URL and root base, then upload `dist/` to the DonWeb
hosting:

```sh
SITE=https://www.dents.com.ar BASE=/ npm run build
```
