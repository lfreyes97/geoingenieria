import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.string(),
      location: z.string(),
      year: z.number().int(),
      featured: z.boolean().default(false),
      order: z.number().int().default(99),
      cover: image(),
      coverAlt: z.string(),
      stats: z
        .array(
          z.object({
            label: z.string(),
            value: z.string(),
          }),
        )
        .default([]),
    }),
});

export const collections = {
  projects,
};
