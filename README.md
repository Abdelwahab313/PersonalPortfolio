# portfolio

Personal site at [abdelwahab.dev](https://abdelwahab.dev), rebuilt on Astro
(branch `astro-rebrand`, ADR `docs/adr/0001-astro-rebrand.md`).

## Stack

- Astro 5, static output, GitHub Pages (`gh-pages` branch, `dist/` folder)
- React kept for one island: the hero Code card (language tabs, Shiki highlighted
  at build time)
- IBM Plex Sans + Mono, two themes (terminal-dark default, paper-light)
- Blog: Astro content collections (`src/content/blog/*.md`), Zod schema in
  `src/content.config.ts`

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Dev server on `http://localhost:4321` |
| `npm run build` | Production build to `dist/` (schema-checked) |
| `npm run preview` | Serve the built site locally |
| `npm run format` / `npm run check-format` | Prettier write / check |

## Content governance

- **CV is the source of truth for facts.** Site wording lives in `CONTENT.md` and
  mirrors the CV; facts and copy are updated by editing `CONTENT.md` and
  `src/data/portfolio.ts`, never by inventing new numbers.
- Terms are defined in `CONTEXT.md` (glossary) and decisions in `docs/adr/`.
- Blog authoring contract: `docs/BLOG.md`. One `.md` file per post, discovered
  automatically.
- `public/resume.pdf` is copied from the CV build (`~/projects/playground/Awesome-CV`,
  `make resume.pdf`) and redeployed whenever the CV changes.

## Deploy

Pushes to `main` build and deploy to `gh-pages` via `.github/workflows/deploy.yml`.
Custom domain `abdelwahab.dev` is carried by `public/CNAME`.