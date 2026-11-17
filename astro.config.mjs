import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://yamashita-shingo.github.io',
  base: process.env.PREVIEW_BASE || '/ai-news',
  vite: { plugins: [tailwindcss()] },
});
