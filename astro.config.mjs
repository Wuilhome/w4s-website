import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Domaine personnalisé pour GitHub Pages
export default defineConfig({
  site: 'https://w4service.fr',
  base: '/',

  integrations: [
    tailwind()
  ],
  prefetch: true,
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssMinify: true
    }
  },
  trailingSlash: 'ignore'
});
