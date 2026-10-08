# CONTEXT

Glossary of canonical terms for this portfolio's content. The site's copy (src/portfolio.js, public/index.html meta tags, resume) must agree with these terms. Canonical facts, tone rules and paste-ready copy live in CONTENT.md.

## Terms

### Positioning
The one-line professional identity used in the greeting, SEO meta, and resume. Canonical: **"Senior Software Engineer · Full-stack & Platform"**, eight years in (career start: Jan 2018). The years figure is derived from the career start date and must be re-checked yearly — never hardcoded in more than one place mentally; the greeting is its single on-site source.

### Experience
A full-time employment entry in the Work Experience section. Ordered newest-first. Every Experience has a real (non-placeholder) description. OnTheGoSystems is current; every earlier entry is past tense. Timeline: OnTheGoSystems (WPML — WordPress plugins) (Dec 2024 – Present) → Dailymealz (Dec 2021 – Dec 2024) → Nformacy → DevSquads (formerly Fikr Labs). Four entries, not five. Company names exactly as in CONTENT.md section 1.

### Voice
All site copy reads as human-written: no em dashes, no symmetrical buzzword bullets, no stock AI phrasing ("Design and ship", "Drive product decisions"). Short sentences, first person, concrete over abstract. Matches the site's existing casual tone. Company and product names taken verbatim from the CV are exempt from the em dash rule.

### Big Project
A showcased product the user helped build, in the "Big Projects" section — one card per product with description and link. Distinct from an Experience: an Experience is the job; a Big Project is the artifact.

### Case study
A Situation / Decision / Trade-off / Outcome write-up about one system, published as a post under `/blog/{slug}`. It carries a real system diagram where one exists. A Case study may go deeper than the two-page CV; numbers in it trace to the CV or to the fact-trace table in SPEC.md. Distinct from a Blog post only by `kind: "case-study"`.

### Blog post
One entry in the single `/blog` stream. Authored as exactly one file in `src/content/blog/{slug}.md` and discovered automatically by Astro content collections—never by editing a registry. Two kinds: `case-study` and `note`. A post with `status: "draft"` is visible in development only. Authoring contract: `docs/BLOG.md`.

### Code Card
The hero widget that shows one profile translated into several programming languages, switched by Language tabs. It is identity, not a work artifact: the languages must trace to the CV languages row and the card must state no facts the CV does not carry. Currently TypeScript, Ruby, Go and SQL.

### Language tabs
The tab switcher on the Code Card, one tab per language. The code is highlighted at build time by Shiki, so the island only swaps pre-built HTML.

### prompt chrome
The terminal-style section headers that frame each section (`$ whoami`, `git log --career`, `cat stack.json`, `zsh · contact`). Decoration, not prose, so it is exempt from the Voice rules—but it must not introduce facts that are not in the CV.
