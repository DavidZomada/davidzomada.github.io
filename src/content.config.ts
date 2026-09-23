import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    appId: z.string(),
    locale: z.enum(['en', 'es']),
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    platform: z.string(),
    status: z.string(),
    role: z.string(),
    storeUrl: z.string().url(),
    order: z.number(),
    points: z.array(z.string()),
  }),
});

export const collections = { apps };
