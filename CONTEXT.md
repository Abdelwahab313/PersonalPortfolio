# CONTEXT

Glossary of canonical terms for this portfolio's content. The site's copy (src/data/portfolio.ts, public/index.html meta tags, resume) must agree with these terms. Canonical facts, tone rules and paste-ready copy live in CONTENT.md.

## Terms

### Positioning
The one-line professional identity used in the greeting, SEO meta, and resume. Canonical: **"Senior Software Engineer · Full-stack & Platform"**, eight years in (career start: Jan 2018). The years figure is derived from the career start date and must be re-checked yearly — never hardcoded in more than one place mentally; the greeting is its single on-site source.

### Experience
A full-time employment entry in the Work Experience section. Ordered newest-first. Every Experience has a real (non-placeholder) description. All four entries are past tense; no role is current. Timeline: OnTheGoSystems (WPML — WordPress plugins) (Dec 2024 – Sep 2026) → Dailymealz (Dec 2021 – Dec 2024) → Nformacy → DevSquads (formerly Fikr Labs). Four entries, not five. Company names exactly as in CONTENT.md section 1.

### Voice
All site copy reads as human-written: no em dashes, no symmetrical buzzword bullets, no stock AI phrasing ("Design and ship", "Drive product decisions"). Short sentences, first person, concrete over abstract. Matches the site's existing casual tone. Company and product names taken verbatim from the CV are exempt from the em dash rule.

### Big Project
A showcased product the user helped build, in the "Products" section — one dossier card per product (badge, tagline, overview, scale, timeframe, stack, website link). Distinct from an Experience: an Experience is the job; a Big Project is the artifact.

### Case study
A Situation / Decision / Trade-off / Outcome write-up about one system, published as a post under `/blog/{slug}`. It carries a real system diagram where one exists. A Case study may go deeper than the two-page CV. It is the four-part `kind: "case-study"` shape; a longer write-up that carries the same arc across `sections` headings is a Blog post (`kind: "note"`), which is how the four migrated posts are published.

### Blog post
One entry in the single `/blog` stream. Authored as exactly one file in `src/content/blog/{slug}.md` and discovered automatically by Astro content collections—never by editing a registry. Two kinds: `case-study` and `note`. A post with `status: "draft"` is visible in development only. Authoring contract: `docs/BLOG.md`.

### Section head
The serif heading that titles each homepage section (`About`, `Writing`, … `Education`). Decoration, not prose, so it is exempt from the Voice rules — but it must not introduce facts that are not in the CV.
