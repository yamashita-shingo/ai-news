import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '*/article.md', base: './src/content/articles', generateId: ({ entry }) => entry.split('/')[0] }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    date: z.coerce.date(),
    category: z.string().min(1),
    image: z.string().regex(/^image\.(png|jpe?g|webp)$/i),
    imageAlt: z.string().min(1),
    sources: z.array(z.object({ title: z.string().min(1), url: z.string().url().refine(value => /^https?:\/\//.test(value)) })).min(1),
    comments: z.object({ a: z.string().min(1), b: z.string().min(1), c: z.string().min(1) }),
  }),
});

export const collections = { articles };
