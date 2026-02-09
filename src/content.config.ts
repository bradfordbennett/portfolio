import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['music', 'art', 'writing']),
    thumbnail: z.string().optional(),
    images: z.array(z.string()).optional(),
    externalUrl: z.string().optional(),
    order: z.number(),
    year: z.string().optional(),
    description: z.string(),
  }),
});

export const collections = { projects };
