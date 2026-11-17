import { getCollection } from 'astro:content';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

export async function getStaticPaths() {
  const articles = await getCollection('articles');
  return articles.map(article => ({
    params: { slug: article.id, filename: article.data.image },
    props: { slug: article.id, filename: article.data.image },
  }));
}

export async function GET({ props }: { props: { slug: string; filename: string } }) {
  const path = resolve('src/content/articles', props.slug, props.filename);
  const bytes = await readFile(path);
  const extension = props.filename.split('.').pop()?.toLowerCase();
  const contentType = extension === 'png' ? 'image/png' : extension === 'webp' ? 'image/webp' : 'image/jpeg';
  return new Response(new Uint8Array(bytes), { headers: { 'Content-Type': contentType } });
}
