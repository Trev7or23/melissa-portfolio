# Melissa Gutiérrez — Portfolio

Personal portfolio and commission site for Melissa Gutiérrez, a visual artist
specialising in realistic black-and-white graphite and charcoal portraits.

Built with [Astro](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com)
and Zod-validated Markdown content collections.

## Stack

| Concern   | Choice                                               |
| --------- | ---------------------------------------------------- |
| Framework | Astro 7 (static output)                              |
| Styling   | Tailwind CSS v4 — design tokens live in `@theme`     |
| Content   | Astro content collections (glob loader) + Zod schema |
| Runtime   | [Bun](https://bun.sh)                                |

## Getting started

```bash
bun install
bun run dev      # dev server
bun run build    # static build into dist/
bun run preview  # serve the production build
```

## Project structure

```
src/
├── components/
│   ├── description/   # artwork detail components
│   ├── home/          # landing page sections
│   └── shared/        # header and footer
├── content/
│   └── artworks/      # one Markdown file per artwork
├── layouts/           # page shell (fonts, header, footer)
├── pages/
│   ├── index.astro    # landing page
│   └── pintura/       # /pintura/[slug] detail route
├── styles/global.css  # Tailwind entry point and design tokens
└── content.config.ts  # artworks collection and Zod schema
designs/               # visual brief the implementation was built from
```

## Adding an artwork

1. Create `src/content/artworks/<slug>.md`.
2. Fill in the frontmatter. It is validated by the Zod schema in
   `src/content.config.ts`, so a missing or malformed field fails the build
   with the exact validation error.

   | Field                 | Type                                                | Required |
   | --------------------- | --------------------------------------------------- | -------- |
   | `title`               | string                                              | yes      |
   | `slug`                | string                                              | yes      |
   | `year`                | number                                              | yes      |
   | `series`              | string                                              | yes      |
   | `kind`                | `obra-maestra` \| `serie` \| `estudio` \| `encargo` | yes      |
   | `technique`           | string                                              | yes      |
   | `support`             | string                                              | yes      |
   | `dimensions`          | string                                              | yes      |
   | `availability`        | string                                              | yes      |
   | `description`         | string                                              | no       |
   | `curatorialStatement` | string                                              | no       |
   | `image`               | string (URL)                                        | no       |
   | `order`               | number                                              | no       |

3. Run `bun run build`.

The artwork is picked up automatically: it appears in the gallery and gets its
own page at `/pintura/<slug>`.

## Design system

"Nocturne & Silver" — a dark theme with violet accents. Every colour, font and
surface token from the brief is declared as a Tailwind theme variable in
`src/styles/global.css`, so utilities such as `bg-surface-lowest`,
`text-on-surface-variant` or `font-display` resolve straight from the design
tokens. There is no hand-written CSS outside that file: components are styled
exclusively with Tailwind utilities.
