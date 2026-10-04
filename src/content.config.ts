import { defineCollection, z } from 'astro:content';

const category = z.enum(['music', 'art', 'writing']);

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // One category or a list, e.g. `category: art` or `category: [art, music]`.
    // Always normalised to an array.
    category: z
      .union([category, z.array(category).min(1)])
      .transform((value) => (Array.isArray(value) ? value : [value])),
    thumbnail: z.string().optional(),
    images: z.array(z.string()).optional(),
    externalUrl: z.string().optional(),
    order: z.number(),
    year: z.string().optional(),
    description: z.string(),
  }),
});

export const collections = { projects };
