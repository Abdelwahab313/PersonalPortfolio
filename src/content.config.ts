import {defineCollection, z} from "astro:content";
import {glob} from "astro/loaders";

const CASE_HEADINGS = ["situation", "decision", "tradeoff", "outcome"];

const baseFields = {
  title: z.string(),
  status: z.enum(["draft", "published"]),
  date: z.date(),
  order: z.number().int().nonnegative().default(0),
  lede: z.string().max(160),
  tags: z.array(z.string()).default([])
};

const blog = defineCollection({
  loader: glob({pattern: "**/*.{md,mdx}", base: "./src/content/blog"}),
  schema: z
    .discriminatedUnion("kind", [
      z
        .object({
          kind: z.literal("case-study"),
          ...baseFields,
          product: z.string().optional(),
          link: z.string().url().optional(),
          diagram: z.enum(["fargate", "engine", "aurora", "triage"]).optional(),
          diagramCaption: z.string().optional(),
          situation: z.string(),
          decision: z.string(),
          tradeoff: z.string(),
          outcome: z.string()
        })
        .strict(),
      z
        .object({
          kind: z.literal("note"),
          ...baseFields,
          sections: z
            .array(
              z.object({
                heading: z.string(),
                paragraphs: z.array(z.string())
              })
            )
            .min(1)
        })
        .strict()
    ])
    .superRefine((post, ctx) => {
      if (post.kind === "case-study") {
        for (const key of CASE_HEADINGS) {
          if (post[key as keyof typeof post] === undefined) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: `case-study is missing ${key}`
            });
          }
        }
        if (post.diagram === undefined && post.diagramCaption !== undefined) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "diagramCaption requires a registered diagram"
          });
        }
        if (post.diagram !== undefined && post.diagramCaption === undefined) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "diagram must come with a diagramCaption"
          });
        }
      }
    })
});

export const collections = {blog};
