import {defineCollection, z} from "astro:content";
import {glob} from "astro/loaders";

const blog = defineCollection({
  loader: glob({pattern: "**/*.{md,mdx}", base: "./src/content/blog"}),
  schema: z
    .object({
      title: z.string(),
      kind: z.enum(["case-study", "note"]),
      status: z.enum(["draft", "published"]),
      date: z.date(),
      order: z.number().int().nonnegative().default(0),
      lede: z.string().max(160),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      cover: z.string().optional(),
      coverAlt: z.string().optional()
    })
    .strict()
    .superRefine((post, ctx) => {
      if (post.cover === undefined && post.coverAlt !== undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "coverAlt requires a cover"
        });
      }
      if (post.cover !== undefined && post.coverAlt === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "cover must come with a coverAlt"
        });
      }
    })
});

export const collections = {blog};
