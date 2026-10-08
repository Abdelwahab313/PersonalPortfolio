# ADR 0001: Rebuild on Astro with a terminal identity

**Date:** 2026-10-08

**Status:** Accepted

## Context

The site was a React (CRA `react-scripts`) fork of developerFolio. The 2026-10-05
refresh gave it an ink-on-paper identity and moved case studies to a `/blog` stream
(2026-10-08). SPEC.md section 2 then listed "no framework migration" as a non-goal.

A reference (nkavt.dev) showed that a terminal-flavoured identity with a hero code
card, prompt-style section headers and mono chrome is the same class of site, built
on Astro: zero-JS by default, content collections, and Shiki highlighting at build.
The polyglot signal needs a tab-switching code card in the hero showing one profile
in several languages.

## Decision

Rebuild the site on Astro 5 in the same repo, keeping the content governance system
(CONTEXT.md, CONTENT.md, SPEC.md, docs/BLOG.md, CV sync pointers) and the GitHub Pages
domain (abdelwahab.dev).

- Framework: Astro 5, static output. React kept only for the code-card island
  (`@astrojs/react`, `client:visible`) and for static-rendered diagrams.
- Blog: content collections replace `scripts/gen-blog-index.js`. One `.md` file per
  post, schema-validated with Zod at build time (replaces `blog.test.js`).
  `/blog/{slug}` URLs unchanged. `status: draft` posts render in dev only.
- Code card languages trace to the CV languages row: TypeScript, Ruby, Go, SQL.
  Shell was proposed and rejected because it is not CV-listed, and the CV is the
  source of truth until told otherwise. The card is one profile in four translations;
  it states no new facts.
- Themes: terminal-dark default, paper-light. Light palette carried over from the
  2026-10-05 identity (`_globalColor.scss`), which is where the teal accent survives.
- Deploy: same `gh-pages` branch, but `FOLDER: dist`, and the trigger moves from
  `master` to `main` because `main` carries the content truth (`master` is stale).

## Alternatives considered

- **Restyle in place (keep CRA).** Cuts the framework swap, but keeps the heavy
  client runtime and the custom blog generator that Astro content collections
  replace natively.
- **Next.js.** No server needs. Static content site; Astro ships less.
- **Interactive terminal as the whole site.** Rejected for accessibility: non-technical
  visitors and recruiters read prose, not a prompt.

## Consequences

- CRA app, `fetch.js`, `Dockerfile`, `scripts/` and their devDependencies are gone.
- React now serves exactly two purposes: the code-card island and static diagrams.
  The runtime bundle is a 44 kB gzip island, loaded on scroll only.
- The CV stays the source of truth. The code card adds no facts beyond the CV.
- Font Awesome no longer loads; skill icons are gone, replaced by the `stack.json`
  card (ten CV rows) and mono chips.