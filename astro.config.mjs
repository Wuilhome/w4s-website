import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub Pages config
// Pour un repo nommé "w4s-website" sur github.com/USERNAME/w4s-website
// Le site sera accessible sur https://USERNAME.github.io/w4s-website/

export default defineConfig({
  // IMPORTANT: Changez ces valeurs selon votre configuration
  // Option 1: Site de projet (username.github.io/repo-name/)
  // site: 'https://USERNAME.github.io',
  // base: '/w4s-website',

  // Option 2: Domaine personnalisé
  site: 'https://w4s.fr',
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
  }
});
