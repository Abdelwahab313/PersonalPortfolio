# Writing a post

One post is one file: `src/content/blog/<slug>.js`.

Drop the file in, run `npm start` (or `npm test`, or `npm run build`), and
`scripts/gen-blog-index.js` picks it up and rewrites
`src/content/blog/index.js`. There is no registry to edit and no list to
append to.

## Template

```js
/* Note. Authoring contract: docs/BLOG.md */

module.exports = {
  slug: "queue-depth-autoscaling",
  title: "Queue depth beats CPU percentage",
  kind: "note",
  status: "draft",
  date: "2026-11-02",
  order: 0,
  lede: "One line, at most 160 characters, shown on the index and used as the page description.",
  tags: ["aws", "ecs"],
  sections: [
    {
      heading: "What broke",
      paragraphs: ["One paragraph. Then another."]
    }
  ]
};
```

Use `module.exports`, not `export`. The generator runs in plain Node, before
babel, and reads your file with `require()`.

## Fields

| Field | Required | Notes |
|---|---|---|
| `slug` | yes | Must equal the filename minus `.js`. Becomes `/blog/<slug>`. |
| `title` | yes | Page heading and index row. |
| `kind` | yes | `"case-study"` or `"note"`. |
| `status` | yes | `"draft"` or `"published"`. |
| `date` | yes | `YYYY-MM-DD`. Index sorts by this, newest first. |
| `order` | no | Integer, ascending. Only breaks ties inside the same `date`. |
| `lede` | yes | At most 160 characters. Index row and meta description. |
| `tags` | no | Array of short lowercase strings, rendered as `#tag`. |
| `sections` | for `note` | `{heading, paragraphs[]}`. |
| `situation` `decision` `tradeoff` `outcome` | for `case-study` | The four parts. |
| `diagram` `diagramCaption` | for `case-study` | Optional. `diagram` must name a component in `src/components/diagrams/Diagram.js`. |
| `product` `link` | for `case-study` | Optional outbound link to the product. |

## Kinds

**`case-study`** — Situation / Decision / Trade-off / Outcome about one
system, with a real diagram where one exists. The four migrated posts are
`fargate`, `engine`, `aurora` and `triage`. Read one of them before writing
the next.

**`note`** — anything else. Sections of prose. No diagram, no product link.

## Rules

Tone rules live in `CONTENT.md` section 2. The two that catch most drafts:

1. Every number has to be in the CV. No new figures.
2. No em dashes in site prose. Full stops and commas only.

Case studies may be deeper than the two-page CV. That is the point of the
section: the CV is the summary, the case study is the reasoning.

## Previewing a draft

```sh
npm start
```

Open `http://localhost:3000/blog/<slug>`. A draft shows a `Draft` badge and
is listed on `/blog`.

Drafts are filtered out when `NODE_ENV === "production"`, so
`npm run build` and the deployed site never include them.

## Publishing

1. Flip `status` to `"published"`.
2. `npm test` — the schema test names the exact field that failed.
3. `npm run build`.
4. `node scripts/static-routes.js` runs automatically as `postbuild` and
   writes `build/blog/<slug>/index.html` with that post's title and
   description. Confirm it exists.
5. Deploy.

## Adding a diagram

Diagrams are hand-authored inline SVG React components in
`src/components/diagrams/Diagram.js`, styled by the `.dgm-*` classes in
`src/containers/blog/blog.scss`. Add a component, register it in the
`diagrams` map at the bottom of that file, then set `diagram` on your post.
The schema test reads that map, so a typo fails the test instead of
rendering a blank figure.
