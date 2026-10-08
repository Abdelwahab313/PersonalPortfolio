# Writing a post

One post is one file: `src/content/blog/<slug>.md`. The slug is the filename
(gone is the old `slug` field and the `scripts/gen-blog-index.js` registry
step). Drop the file in and `npm run build` picks it up. Schema is validated at
build time by `src/content.config.ts`; a bad field names the exact problem.

## Template

```md
---
title: Queue depth beats CPU percentage
kind: note
status: draft
date: 2026-11-02
order: 0
lede: One line, at most 160 characters, shown on the index and used as the page description.
tags: [aws, ecs]
sections:
  - heading: What broke
    paragraphs:
      - One paragraph.
      - Then another.
---
```

## Fields

| Field | Required | Notes |
|---|---|---|
| Filename | yes | Becomes `/blog/<slug>`. Must match the frontmatter contract: no space, no uppercase. |
| `title` | yes | Page heading and index row. |
| `kind` | yes | `"case-study"` or `"note"`. |
| `status` | yes | `"draft"` or `"published"`. |
| `date` | yes | `YYYY-MM-DD`. Index sorts by this, newest first. |
| `order` | no | Integer, ascending. Only breaks ties inside the same `date`. |
| `lede` | yes | At most 160 characters. Index row and meta description. |
| `tags` | no | Array of short lowercase strings, rendered as `#tag`. |
| `sections` | for `note` | `{heading, paragraphs[]}`. |
| `situation` `decision` `tradeoff` `outcome` | for `case-study` | The four parts. |
| `diagram` `diagramCaption` | for `case-study` | Optional. `diagram` must be one of `fargate`, `engine`, `aurora`, `triage` (the registry lives in `src/components/Diagrams.jsx`). A `diagram` without a caption, or a caption without a diagram, fails the schema. |
| `product` `link` | for `case-study` | Optional outbound link to the product. |

## Kinds

**`case-study`** - Situation / Decision / Trade-off / Outcome about one
system, with a real diagram where one exists. The four migrated posts are
`fargate`, `engine`, `aurora` and `triage`. Read one of them before writing
the next.

**`note`** - anything else. Sections of prose. No diagram, no product link.

## Rules

Tone rules live in `CONTENT.md` section 2. The two that catch most drafts:

1. Every number has to be in the CV. No new figures.
2. No em dashes in site prose. Full stops and commas only.

Case studies may be deeper than the two-page CV. That is the point of the
section: the CV is the summary, the case study is the reasoning.

## Previewing a draft

```sh
npm run dev
```

Open `http://localhost:4321/blog/<slug>`. A draft shows a `Draft` badge and
is listed on `/blog`.

Drafts are filtered out when the build runs in production, so `npm run build`
and the deployed site never include them. If you set `status` back to `draft`,
the post disappears from the deployed site.

## Publishing

1. Flip `status` to `"published"`.
2. `npm run build` - the content schema names the exact field that failed.
3. `npm preview` and confirm `http://localhost:4321/blog/<slug>` renders with
   a `200`.
4. Deploy.

## Adding a diagram

Diagrams are hand-authored inline SVG React components in
`src/components/Diagrams.jsx`, styled by the `.dgm-*` classes in
`src/styles/global.css`. Add a component, register it in the `diagrams` map at
the bottom of that file, then set `diagram` on your post. The schema enum is
the list of registered names, so a typo fails the build instead of rendering a
blank figure.