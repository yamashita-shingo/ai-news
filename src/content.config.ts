import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const articles = defineCollection({
  loader: (() => {
    const articleGlob = glob({ pattern: '*/article.md', base: './src/content/articles', generateId: ({ entry }) => entry.split('/')[0] });
    return {
      ...articleGlob,
      async load(context) {
        await articleGlob.load(context);
        // The glob loader can retain cached entries when its last file is removed.
        const root = resolve(fileURLToPath(context.config.root), 'src/content/articles');
        for (const id of context.store.keys()) {
          if (!existsSync(resolve(root, id, 'article.md'))) context.store.delete(id);
        }
      },
    };
  })(),
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
