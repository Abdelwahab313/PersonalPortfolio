# Portfolio refresh spec

Status: implemented 2026-10-05, one commit. Decisions: RTO figure is
30-minute, four case studies (Aurora and triage platform both), enrichment
conservative (no "solo in 12 weeks", no "first shipping step merged"
phrasing). Measured results (production build, Lighthouse mobile emulation,
fresh profile): performance 61 → 97 (LCP 8209 → ~2370 ms, FCP 4724 → 1808 ms,
TBT 177 → 70 ms, CLS 0.003), accessibility 88 → 100, best-practices 96 → 100,
SEO 100. Desktop preset: performance 100, accessibility 100, LCP 508 ms.
Main JS bundle 248.37 kB → 73.66 kB gzip. Follow-ups same day: Nformacy
link moved to `https://nformacy.com/` (old beta origin 522), og.png regenerated
without the diagram strip (typographic only), and `public/resume.pdf` rebuilt
from `cv/post-ptc` with the same resolved OTGS bullets so PDF and site agree
(verified by programmatic text extraction: 65%, 16 months, 90% Spot, 7.33M,
1,013, 7 ms, four ADRs, 30-minute RTO present; 2-hour RTO, 12,500 study,
"Present" absent; five entries; 2 pages). The CV change is committed as
`f08eb3a` on `cv/post-ptc`. Automated layout and interaction checks (Chrome,
1280 and 375, both themes): 20/20 pass, no horizontal overflow, diagrams sized
inside the viewport, hamburger menu opens, dark mode toggles, all anchors
scroll, bullets toggle expands. Screenshots for human review under
`/var/folders/n1/v51q37kn1_14gnysspx392xw0000gn/T/opencode/shots/`. Known costs, measured: Google tag
script ~71 kB unused at first paint (analytics, kept by choice), Font Awesome
CDN stylesheet 12.7 kB of which most is unused for the 20 icons in use. og.png
generated (PIL + IBM Plex, identity palette); needs a human eyeball pass.
Canonical inputs: `CONTEXT.md`, `CONTENT.md`, CV repo at
`~/projects/playground/Awesome-CV`.

## 1. Goals

- The site reads as a senior backend and platform engineer's site. Judgment and
  ownership, not tool lists.
- Three defensible case studies that show how product work is followed down into
  queues, infrastructure, databases and production behavior.
- Concise career history, product links, resume, clear contact. Nothing else.
- A distinct, restrained visual identity built on real system diagrams and
  decision detail.
- Measured performance, reported honestly. No invented numbers anywhere.

## 2. Non-goals

- No framework migration. The site stays on `react-scripts` (CRA). A Vite move is
  a possible later follow-up only if a measured benefit justifies it.
- No trend sections: no blogs, talks, podcast, twitter timeline, achievements,
  open-source grid, "Ask AI". All are already `display: false`.
- No generic terminal or dashboard decoration. No Lottie. No badges from
  third parties. No cityscapes or desk illustrations.
- No claims about performance problems until measured (section 6).

## 3. CV/site discrepancy: resolution from source evidence

The CV repo has several targeted branches. Two matter:

| Branch | Date | OTGS bullets |
|---|---|---|
| `cv/post-ptc` (canonical per CONTENT.md) | 2026-09-10 | 6 bullets: engine layer, EC2 to Fargate, queue-depth autoscaler, credits and billing, ISO 27001 and DR, agent triage |
| `cv/procore-senior-backend-cairo` (newest) | 2026-10-05 | 8 bullets: adds Langfuse and 65% review failures, solo 12 weeks, AI agent tooling, 90% Spot and 16 months, Aurora 7.33M rows, 4 ADRs, 30-minute RTO |

Resolution (mirroring the CV, which is the source of truth for facts):

1. **Drop the 12,500-job capacity study bullet.** It is in no current CV branch.
2. **Keep the Aurora bullet** (7.33M rows, 1,013 to about 100 calls). The newest
   CV branch restored it with a cause: a status broadcast query plan.
3. **Add the ISO 27001 / disaster recovery bullet.** It is in both CV branches.
   The site lacks it.
4. **Enrich four bullets with the newest sourced detail**: Langfuse tracing and
   the rate-limit errors behind 65% of review failures; solo in 12 weeks on the
   triage platform; 90% Spot and 16 months of platform ownership; one
   authorization architecture with 4 ADRs.

Conflicts found in the CV branches, resolved by canonical rules:

- End date: newest branch says "Dec. 2024 - Present". `CONTEXT.md` says the job
  ended Sep 2026 and no job is current. The site keeps **Dec 2024 – Sep 2026**.
- Fikr Labs: newest branch merges it into "DevSquads (formerly Fikr Labs)".
  `CONTENT.md` lists five separate entries. The site keeps **five entries**.
- RTO figure: `cv/post-ptc` says 2-hour RTO, newest branch says 30-minute RTO.
  Open question 1 below.

## 4. Information architecture

One page, anchor nav. Order:

1. **Header.** Name, anchor links, dark mode toggle. No hamburger maze on
   desktop.
2. **Hero.** Canonical `greeting.title` and `subTitle` from CONTENT.md, resume
   button, contact button, social row. Text only. The Lottie person goes.
3. **Case studies** (new, the core of the refresh). Three cases, each with:
   - a real system diagram, hand-authored inline SVG, styled like an engineering
     doc (boxes, arrows, small mono labels, measured numbers as annotations);
   - a short narrative in a fixed shape: Situation, Decision, Trade-off, Outcome.
     Borrowed from hassanrazanini.com, where the trade-off honesty is the
     clearest seniority signal among the references;
   - only verified facts from the CV branches (section 3 and the table in
     section 8 of this spec).
4. **Career history.** The existing vertical timeline, kept. OTGS bullets
   resolved per section 3. Durations, locations, tags and the "Show N more"
   toggle stay.
5. **Products I helped build.** The four cards, copy unchanged.
6. **What I do.** Skills copy and icon subset unchanged.
7. **Education.** One entry, unchanged.
8. **Contact.** Canonical copy, email, timezone.
9. **Footer.** Theme credit, one small line.

The three case studies:

**A. Draining, not stopping.** The move off a single EC2 host onto ECS Fargate,
and the queue-depth autoscaler on Lambda that drains workers instead of stopping
them, because these jobs run from 30 seconds to 2 hours. Includes 90% Spot and 16
months of platform ownership with its Terraform. Diagram: queue, worker fleet,
autoscaler loop, drain-then-stop annotation.

**B. One engine, three providers.** The provider-agnostic engine layer over
Claude on Bedrock, OpenAI and Gemini: ordered fallback chains, rate limits
treated as reschedules not failures, JSON repair, Langfuse tracing, the errors
behind 65% of review failures. Plus metered credits and billing correctness,
including the 7 millisecond check-then-act race and the one authorization
architecture that replaced the scattered credit checks (4 ADRs). Diagram:
request, engine, ordered provider chain with fallback arrows, credits metering
on the side.

**C. 7.33 million rows per call.** The Aurora CPU saturation: 100% CPU traced to
a status broadcast whose query plan examined 7.33M rows per call, the join
dropped, the caller throttled from 1,013 calls to about 100. Framed as
root-cause investigation: what was verified, what was inferred, what changed.
Diagram: broadcast fan-out to clients, database, row-scan annotation.

Open question 2: the agent-driven triage platform (solo in 12 weeks, pass/fail
call in code not the prompt, caught three false passes, audit log, human-only
write gate) is a strong fourth case or an alternate for C. Default: keep the
three above, mention the triage platform in the OTGS bullets only.

## 5. Visual direction

The current look is the developerFolio template default: purple, Lottie, emoji
headers. It reads as a tutorial portfolio (brittanychiang.com's lesson: widely
cloned templates now signal exactly that). The refresh replaces it.

- **Palette.** Near-monochrome ink on paper, one accent. Light theme: warm paper
  background, near-black ink, restrained teal accent. Dark theme: near-black,
  soft off-white, the same accent brightened. The current purple goes.
- **Typography.** A grotesk for headings and body, monospace for numbers, tags,
  diagram labels and dates. Self-hosted via `@fontsource` packages, no font CDN.
  The Font Awesome stylesheet from jsdelivr gets measured, then either kept,
  subset or replaced with inline SVG icons for the 13 skill icons.
- **Diagrams.** The identity carrier. Hand-authored inline SVG components, real
  system topology, mono labels, verified numbers as annotations. Not
  screenshots, not dashboard mockups, not ASCII gimmicks.
- **Motion.** Effectively none. Hover and focus states only.
  `prefers-reduced-motion` respected. The `react-reveal` fade wrappers go.
- **Surfaces.** The timeline and cards stay structurally, restyled to the new
  palette and type scale. Numbered entries, ledger feel, a restrained nod to
  kamran.sh's archival style without copying it.

Reference lessons applied, one line each:

- thomasbonderup.com: proof trail. Case studies carry decision rationale, the
  strongest judgment display among the references.
- hassanrazanini.com: the Situation, Decision, Trade-off, Outcome shape for
  cases. Avoid its nine-item nav and theme gimmicks.
- kamran.sh: metrics woven into prose, ledger restraint. Avoid its AI-generated
  imagery and badge.
- brittanychiang.com: clean timeline with tech tags (already present). Avoid its
  cloned-template look and shallow per-role depth.
- arpitbhayani.me: specificity over volume. Avoid its eight content types.

## 6. Acceptance criteria

Content:

- Every number on the page traces to a CV branch. The bullet-level trace table
  lives in this spec (section 8) and stays true through review.
- All copy obeys CONTENT.md tone rules: past tense, no em dashes, no template
  voice, no emoji in prose, no self-assessment percentages.
- Names, titles, dates exactly per CONTENT.md section 1.
- CONTENT.md is updated as part of the work: resolved OTGS bullets, a new Case
  Studies section with paste-ready copy, open items list refreshed.

Engineering:

- `npm run build`, `npm test` and `npm run check-format` pass.
- Lighthouse, production build, mobile and desktop: actual scores recorded
  before and after, reported. No pre-claimed numbers.
- Keyboard: nav, toggles, links reachable, visible focus on both themes.
- Contrast AA on both themes.
- `prefers-reduced-motion` respected.
- All links checked: product links, social, `/resume.pdf` (fresh copy from the
  CV build per the CONTENT.md field map) return 200.
- Mobile spot-check at 375px: hero, case studies, diagrams scale or scroll
  cleanly.
- `og:image` added, 1200x630, static, matching the new identity.
- Dead sections (blogs, talks, podcast, twitter, achievement, codersrank)
  removed from the render tree and their imports pruned. Bundle size reported
  before and after, measured, not assumed.

## 7. Implementation plan

Small steps, each ending in a build and test run:

1. Content model: resolve OTGS bullets, update CONTENT.md, mirror into
   `src/portfolio.js`.
2. Case study copy: new CONTENT.md section, paste-ready.
3. Diagram components: three inline SVGs, drawn against the verified facts.
4. Case studies container, integrated into `Main.js`, anchor in nav.
5. Restyle: palette tokens in `_globalColor.scss`, typography via fontsource,
   remove Lottie and `react-reveal`, reduced-motion handling.
6. Prune dead sections and unused containers.
7. Meta: `og:image`, title/description check against CONTENT.md.
8. Verification: build, tests, format, Lighthouse before/after, manual
   keyboard, contrast, link and 375px passes.
9. Report: measured results plus unresolved content questions.

No commits unless asked. Deploy stays manual (`gh-pages`) and out of scope
unless requested.

## 8. Fact trace (case studies and OTGS bullets)

| Fact | Source branch |
|---|---|
| Single EC2 host to ECS Fargate, Terraform owned | both |
| Queue-depth autoscaler on Lambda, drain not stop, 30 s to 2 h jobs | both |
| 90% Spot, 16 months platform ownership | procore |
| Engine layer over Bedrock, OpenAI, Gemini, ordered fallback chains | both |
| Rate limits treated as reschedules, JSON repair, Langfuse tracing | procore |
| Rate-limit errors behind 65% of review failures | procore |
| Credits and billing correctness, 7 ms check-then-act race | site (CONTENT.md) + CV credits bullet |
| One authorization architecture, 4 ADRs, first step merged | procore |
| Aurora 100% CPU, status broadcast, 7.33M rows, 1,013 to about 100 | procore |
| Agent triage platform, solo 12 weeks, pass/fail in code, three false passes | procore |
| ISO 27001 checklist, DR and DLP, RTO/RPO | both, figures conflict |
| 12,500-job capacity study | no current branch, dropped |

## 9. Open questions

1. RTO figure for the ISO 27001 bullet: 2-hour (cv/post-ptc) or 30-minute
   (newest branch)?
2. Third case study: Aurora investigation (default) or the agent-driven triage
   platform?
3. Enrich OTGS bullets with the newest CV detail (65%, Langfuse, solo 12 weeks,
   90% Spot, 4 ADRs)? Default yes.
4. Commits: per step, one at the end, or none until you say so?
