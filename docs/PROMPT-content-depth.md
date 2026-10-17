# Kickoff prompt

Paste everything below the line into a fresh agent session opened in
`/Users/abdelwahab/projects/playground/portfolio`.

---

You are implementing `docs/SPEC-content-depth.md` in this Astro 5 portfolio
(abdelwahab.dev). Read that file first, in full, then `docs/BLOG.md`,
`CONTEXT.md`, and `CONTENT.md` sections 1 and 2. Those four files are the
contract. Do not start editing before you have read all four.

Context you need:

- Branch `feat/seo-schema-blog-ux` has uncommitted work that is the baseline.
  Run `git status` first. Do not revert, stash or reset anything. Commit on
  this branch, one commit per spec change (six commits minimum), with messages
  in the repo's conventional style (`feat(blog): ...`, `fix(seo): ...`).
- The spec's "Verified baseline" table has `file:line` refs. Re-read each line
  before you change it; line numbers may have drifted.
- Work the six changes in order. Do not start change N+1 until change N passes
  the full "Verification" section of the spec, including the browser matrix.
  Treat "build passes" as the start of verification, not the end.
- After change 1, before writing any prose, run the text-diff procedure in the
  spec and show me the diff output. A migration that changes a single word of
  existing post prose is a bug.
- Numbers about the author's own work come only from `CONTENT.md`. If you want
  to write a figure and cannot point to its line in `CONTENT.md`, do not write
  it. For the Redis post, any external number without a first-party source gets
  removed.
- No em dashes anywhere in site prose. Grep for them before every commit.
- The "Explicit non-goals" list in the spec is absolute. No "Hire me", no
  "Book a call", no cookie banner, no stock images, no services grid, no FAQ,
  no share buttons. If you find yourself adding a button that is not email,
  resume, GitHub or LinkedIn, stop.
- Layout bugs are the failure mode I care about most. The browser matrix in
  the spec (7 pages x 3 widths x 2 themes) is mandatory for changes 1, 2, 3
  and 4. Save screenshots to `/tmp/portfolio-shots/`, open every one, and
  report any cell that fails a check with the page, width, theme and the
  measured value (for example "`/blog/aurora` 375 dark: scrollWidth 412 >
  innerWidth 375, caused by `table` in section What changed"). Fix, re-run that
  cell, then re-run the whole matrix once more before committing.
- Lighthouse on `/blog/aurora` mobile and desktop must stay at 0.95 or above in
  all four categories. Report the four scores in the commit message of change 2
  and change 3.
- Ask me before: deleting `netlify.toml` or `deploy.yml` (change 5 needs my
  confirmation of which host is live even if your `dig` result looks clear),
  and before removing the React dependency if any file outside
  `Diagrams.jsx` imports it.
- When all six are done, give me: the list of commits, the final verification
  matrix as a table of pass/fail per cell, the Lighthouse scores, and the
  shortest list of anything you could not verify.

Start with `git status`, then read the spec.
