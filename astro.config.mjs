import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://yamashita-shingo.github.io',
  base: '/ai-news',
  vite: { plugins: [tailwindcss()] },
});
