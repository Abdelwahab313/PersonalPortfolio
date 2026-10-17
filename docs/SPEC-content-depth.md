# Spec: content depth and site hardening

Date: 2026-10-16. Branch: `feat/seo-schema-blog-ux` (uncommitted work is the
baseline; do not revert it). Supersedes nothing; extends `docs/BLOG.md` and
`CONTEXT.md`, both of which must be updated as part of this work.

## Why

Assessment of abdelwahab.dev against two reference sites (shahidyousuf.dev and
faizakram.com) on 2026-10-16. The engineering is ahead of both references
(JSON-LD, RSS + Atom, sitemap, tag pages, TOC, strict Zod schema, build-time
invariants). The gap is content depth and positioning proof:

- Every post is 250 to 507 words and renders "1 to 3 min read". References run
  1,500 to 5,000 words with code, tables and callouts.
- Posts cannot contain code, tables or images. The schema stores all prose as
  frontmatter strings (`sections[].paragraphs[]`, or the four case-study parts).
  Markdown bodies are empty on all seven posts.
- The hero carries no proof number. CV-verified figures exist in `CONTENT.md`.
- `src/components/Diagrams.jsx` (436 lines) and `@astrojs/react` ship but no post
  sets `diagram`, so nothing renders them.
- Three deploy paths exist. One is live.

## Explicit non-goals

Taken from the reference sites and rejected. Do not add any of these:

- "Hire me", "Book a call", "Let's Talk" buttons or any availability signal.
  `CONTENT.md` tone rules forbid availability signals; the contact section stays
  email + resume + GitHub + LinkedIn.
- Cookie consent banner. Keep GA4 as is.
- Stock photos or illustrated hero graphics. Covers stay line-art SVG.
- FAQ sections, "Key insight" bold callouts, share buttons, newsletter.
- Services grid ("How I can help your business"). This is a portfolio, not an
  agency page.
- New numbers about the author's own work. Every figure comes from the CV via
  `CONTENT.md` (rule in `docs/BLOG.md`, "Rules" 1).

## Verified baseline

Each line below was read from the raw source on 2026-10-16.

| Claim | Where |
|---|---|
| Schema is a strict discriminated union on `kind`; `note` requires `sections[].{heading, paragraphs[]}`; `case-study` requires `situation/decision/tradeoff/outcome` strings | `src/content.config.ts:21-48` |
| Post page renders `data.sections` or `data[part.key]`, never a Markdown body | `src/pages/blog/[slug].astro:117-148` |
| `.post-body` is nested inside `.post-body` for notes | `src/pages/blog/[slug].astro:117` and `:139` |
| Breadcrumb reads `data.tags[0]` without a guard; `tags` defaults to `[]` | `src/pages/blog/[slug].astro:56`, `src/content.config.ts:12` |
| `readingMinutes` and `postAnchors` compute from frontmatter fields only | `src/lib/blog.ts:76-109` |
| Consumers of `readingMinutes`: blog index (2 call sites), tag page, work page | `src/pages/blog/index.astro:113,166`, `src/pages/blog/tag/[tag].astro:61`, `src/pages/work.astro:100` |
| No `pre`, `code`, `astro-code` or `shiki` rule exists in the stylesheet | `src/styles/global.css` (grep, 0 matches) |
| `astro.config.mjs` has no `markdown` block | `astro.config.mjs` (10 lines) |
| Hero `valueProp` and `chips` carry no proof number beyond "8+ years" | `src/data/portfolio.ts:8-10` |
| `deploy.yml` builds on push to `main` and deploys `dist` to `gh-pages` | `.github/workflows/deploy.yml` |
| `netlify.toml` also builds to `dist` | `netlify.toml` |
| `npm run deploy` is `gh-pages -d dist` | `package.json` scripts |
| Pre-commit pins `mirrors-prettier v2.4.1`; package has `prettier ^3.3.3` | `.pre-commit-config.yaml`, `package.json` |
| `robots.txt` has `User-agent: *` with no `Allow`/`Disallow` line | `public/robots.txt` |
| Footer says "hosted on github pages" | `src/layouts/Base.astro:153` |
| Astro `render(entry)` returns `{Content, headings, remarkPluginFrontmatter}`; `markdown.shikiConfig.themes {light, dark}` plus `defaultColor: false` emits dual-theme CSS variables | Astro docs, `reference/modules/astro-content` and `guides/syntax-highlighting`, fetched 2026-10-16 |

Assumed, not verified: `entry.body` on a glob-loaded Markdown entry is the raw
Markdown string (Astro 5 content layer). Verify with one `console.log` in dev
before relying on it for reading time. If false, use
`remarkPluginFrontmatter` with a small remark plugin that writes `words`.

## Changes

Ordered. Each is one commit or one small series. Finish and verify one before
starting the next.

### 1. Markdown body for posts

Goal: a post is frontmatter metadata plus a Markdown body. Code, tables,
images and headings come from Markdown. The `sections` and four-part shapes go
away.

Schema (`src/content.config.ts`):

- Keep `baseFields` unchanged: `title`, `status`, `date`, `order`, `lede`,
  `tags`, `featured`, `cover`, `coverAlt`.
- Keep `kind: "case-study" | "note"` as a plain enum field on one object, not a
  discriminated union. It only drives the label on the page and the `/work`
  grid filter.
- Remove `sections`, `situation`, `decision`, `tradeoff`, `outcome`, `product`,
  `link`, `diagram`, `diagramCaption`. Remove the related `superRefine` branches.
  Keep the `cover`/`coverAlt` pairing check.
- Keep `.strict()`.

Post page (`src/pages/blog/[slug].astro`):

- `const {Content, headings} = await render(post)`.
- TOC comes from `headings.filter(h => h.depth === 2)`. Delete `postAnchors`.
- Body is `<div class="post-body"><Content /></div>`. One wrapper, not two.
- Breadcrumb: render the tag crumb only when `data.tags.length > 0`.
- Delete the `Diagram` import, the `case-parts` `<dl>`, and the `post-product`
  link.

Reading time (`src/lib/blog.ts`):

- `readingMinutes(post)` counts `post.body` words plus `lede`. Keep 200 wpm.
  Keep the signature so the four call sites do not change.

Case studies keep their arc as four `##` headings: `Situation`, `Decision`,
`Trade-off`, `Outcome`. A build-time check in `src/lib/blog.ts`
(`assertCaseStudyHeadings`) reads `headings` for every `kind: "case-study"`
post and fails the build if any of the four is missing, in that order. Call it
from `[slug].astro` `getStaticPaths` after rendering, or from `work.astro`.

Migration of the seven posts in `src/content/blog/`: move each `sections[]`
heading to `## heading` and each paragraph to a paragraph, in order. Move each
case-study part to its `##` heading. Prose must not change in this step; diff
the rendered text before and after (see Verification, text diff). Delete
`src/components/Diagrams.jsx` and remove `@astrojs/react`, `react`,
`react-dom`, `@types/react`, `@types/react-dom`, and the `vite.ssr.external`
block from `astro.config.mjs`, only after confirming no other file imports from
`react` (`grep -rn "from \"react\"" src`).

Docs: rewrite the template, field table and "Kinds" section of `docs/BLOG.md`.
Update the "Case study" and "Blog post" entries in `CONTEXT.md`. Remove the
`diagram` registry sentence.

### 2. Code block styling

`astro.config.mjs`:

```js
markdown: {
  shikiConfig: {
    themes: {light: "github-light", dark: "github-dark-dimmed"},
    defaultColor: false,
    wrap: false
  }
}
```

`src/styles/global.css`, new block after `.post-section p` (around line 1800):

- `.post-body pre.astro-code`: `overflow-x: auto`, `max-width: 100%`,
  `padding: 1rem 1.25rem`, `border: 1px solid var(--border)`, `border-radius`
  from the existing radius token, `font-family: var(--font-mono)`,
  `font-size: 0.875rem`, `line-height: 1.6`, `tab-size: 2`.
- Theme switch: with `defaultColor: false` Shiki emits `--shiki-light` and
  `--shiki-dark` custom properties per token. Add:

```css
html[data-theme="dark"] .astro-code,
html[data-theme="dark"] .astro-code span {
  color: var(--shiki-dark);
  background-color: var(--shiki-dark-bg);
}
html[data-theme="light"] .astro-code,
html[data-theme="light"] .astro-code span {
  color: var(--shiki-light);
  background-color: var(--shiki-light-bg);
}
```

- Inline `code` inside `.post-body p, li, td`: mono, `0.9em`, surface
  background, 2px 5px padding, radius 4px.
- `.post-body table`: `display: block; overflow-x: auto; border-collapse:
  collapse; width: 100%`, header row bold, cell padding 0.5rem 0.75rem, 1px
  border rows.
- `.post-body img`: `max-width: 100%; height: auto`.
- `.post-body blockquote`: left border 3px accent, muted colour, no italics.
- `.post-body h2` and `h3`: reuse `.post-section-title` rules; `h2` gets
  `scroll-margin-top: 5rem` so TOC anchors clear the sticky header.

Mobile: at the 600px breakpoint `pre.astro-code` keeps horizontal scroll;
never let it widen the page. Verified by the overflow check in Verification.

### 3. Expand two posts to depth

Targets: `aurora.md` and `fargate.md` (strongest CV-backed material).

Each ends at 1,200 words or more and contains at least: one code block that is
real (an `EXPLAIN` output shape, a Terraform resource, a SQL statement, a shell
command), one table (before/after figures from the CV only), and the existing
cover. Figures allowed are exactly those already on the page or in `CONTENT.md`.
No new numbers. No em dashes.

Use the pipeline in `docs/BLOG-WORKFLOW.md` if available; otherwise write and
review by hand against the two rules in `docs/BLOG.md`.

Then publish `docs/drafts/redis-lua-scripts-race-conditions.md` as
`src/content/blog/redis-lua-race-conditions.md`, `kind: note`, `status:
published`, with a lede under 160 characters and tags `[redis, lua,
concurrency]`. It is a learning post about an external system; any number in it
must trace to a first-party source per the standing decision in
`docs/BLOG-WORKFLOW.md`. Numbers without a source get removed, not kept.

### 4. Hero proof line

`src/data/portfolio.ts` `greeting`: add one field `proof: string[]` with three
items, each a CV figure already in `CONTENT.md`. Candidates present on the
site today: "100K daily users", "1,013 queries to about 100 per broadcast",
"30-minute RTO". Confirm each against `CONTENT.md` section 1 before use; if a
figure is not there, do not use it.

`src/pages/index.astro` hero: render `proof` as a mono-font row under the
chips, same visual weight as the chips, separated by " · ". No icons, no
counters, no animation.

### 5. One deploy path

Determine which is live: `dig +short abdelwahab.dev` and compare to GitHub
Pages and Netlify ranges, then `curl -sI https://abdelwahab.dev | grep -i
server`. Record the answer in `docs/adr/0002-deploy-path.md` (three lines:
decision, evidence, date).

Then delete the two losing paths. If GitHub Pages: delete `netlify.toml` and
the `deploy`/`predeploy` scripts and `gh-pages` dependency. If Netlify: delete
`.github/workflows/deploy.yml`, the `deploy`/`predeploy` scripts, `gh-pages`,
and `public/CNAME`, and change the footer line in `Base.astro`.

### 6. Small fixes

- `.pre-commit-config.yaml`: either bump `mirrors-prettier` to a v3 tag and add
  `astro,ts` to `files`, or delete the file since `prettier.yml` already runs
  `prettier -c` in CI. Prefer delete.
- `public/robots.txt`: add `Allow: /` under `User-agent: *`.
- `src/lib/schema.ts` BlogPosting: add `image` (absolute URL of `cover` when
  set, else `/og.png`). Leave `dateModified` equal to `datePublished` until an
  `updated` frontmatter field exists; do not add that field now.
- Tag links: `src/pages/blog/index.astro` and `src/pages/work.astro` build
  `/blog/tag/${tag}/`; `[slug].astro` builds `/blog/tag/${tagSlug(tag)}`. Use
  `tagSlug` everywhere and no trailing slash, matching the `[tag].astro` route.
- `CONTENT.md:121` still references `public/index.html`. Point it at
  `src/layouts/Base.astro`.

## Verification

Run the full set after every change in the list above, not once at the end.
A change is done only when every line passes.

### Static

```sh
npm run build          # 0 errors; page count stays 28 + new posts
npx astro check        # 0 errors, 0 warnings
npm run check-format   # clean
grep -rn "—" src/content/blog/ src/data/portfolio.ts && echo "EM DASH FOUND" || true
```

### Text diff for the migration (change 1 only)

Before touching posts, build and save the visible text of every post:

```sh
for p in dist/blog/*/index.html; do
  python3 -c "import sys,html,re;t=open('$p').read();t=re.sub(r'<script.*?</script>|<style.*?</style>','',t,flags=re.S);t=re.sub(r'<[^>]+>',' ',t);print(re.sub(r'\s+',' ',html.unescape(t)))" > "/tmp/before-$(basename $(dirname $p)).txt"
done
```

After migration, repeat into `/tmp/after-*.txt` and `diff` each pair. The only
allowed differences are whitespace and the removed `Situation/Decision/...`
`<dt>` labels now appearing as `h2` text. Any other word change is a migration
bug.

### Layout, in a browser

Run `npm run preview` and drive it with Playwright (the MCP tools in this
workspace, or a script). For each page in the matrix, at each width, in each
theme:

Pages: `/`, `/blog`, `/blog/aurora` (long note with code), `/blog/zero-to-launch`
(case study), `/blog/tag/aws`, `/work`, `/404`.
Widths: 375, 768, 1280.
Themes: dark, light (toggle via the header button; it writes `localStorage`).

Checks, each one a `browser_evaluate` or snapshot assertion:

1. No horizontal overflow:
   `document.documentElement.scrollWidth <= window.innerWidth`.
   This is the check that catches wide code blocks and tables.
2. No element wider than the viewport:
   `[...document.querySelectorAll('*')].filter(e => e.getBoundingClientRect().right > window.innerWidth + 1).length === 0`,
   excluding elements inside a `pre` or `table` (those scroll by design).
3. Console has 0 errors. The `/@vite/client` 404 under `astro preview` is a
   known false positive; anything else fails.
4. Network has 0 responses with status 400 or above.
5. Every TOC link resolves: for each `.post-toc a`, `document.querySelector(href)`
   is not null.
6. Heading order: one `h1`, then `h2` before any `h3`, no skipped level.
7. Every `img` has `width` and `height` attributes (CLS).
8. Code block contrast in both themes: the first `.astro-code span` colour is
   not equal to the `pre` background colour.
9. Full-page screenshot per cell, named `shot-{page}-{width}-{theme}.png`,
   saved outside the repo (`/tmp/portfolio-shots/`). Eyeball every one. Look
   for: text touching the edge, overlapping TOC and body, cut-off tables,
   a code block that forces the page wider, light-theme code with dark
   background or the reverse, footer not at the bottom on short pages.

### Lighthouse

`npx lighthouse http://localhost:4321/blog/aurora --preset=desktop --quiet
--chrome-flags="--headless" --output=json --output-path=/tmp/lh.json`, then
read `categories.{performance,accessibility,best-practices,seo}.score`. Each
must be 0.95 or above. Also run mobile (drop `--preset=desktop`). The site was
at 97/100/100 on mobile before this work (`SPEC.md`, status 2026-10-05); do not
regress.

### Schema

Paste the built `/blog/aurora/index.html` JSON-LD into
https://validator.schema.org and confirm 0 errors. Confirm `BlogPosting.image`
is present after change 6.

## Done when

- All six changes merged on `feat/seo-schema-blog-ux` or follow-up branches,
  each with its own commit.
- `docs/BLOG.md`, `CONTEXT.md` and `CONTENT.md` describe the new contract and
  no longer mention `sections`, `situation`, `diagram`, or `public/index.html`.
- Verification matrix passes with screenshots reviewed.
- Nothing from "Explicit non-goals" exists on the site.
