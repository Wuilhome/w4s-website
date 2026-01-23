import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Détecte l'environnement de développement
const isDev = process.env.NODE_ENV === 'development' || process.argv.includes('dev');

// GitHub Pages config
// Pour un repo nommé "w4s-website" sur github.com/USERNAME/w4s-website
// Le site sera accessible sur https://USERNAME.github.io/w4s-website/

export default defineConfig({
  // En dev local: pas de base path pour accéder facilement à /admin
  // En production: base path pour GitHub Pages
  site: isDev ? 'http://localhost:4321' : 'https://Wuilhome.github.io',
  base: isDev ? '/' : '/w4s-website',

  // Option 2: Domaine personnalisé (décommenter si vous avez un domaine)
  // site: 'https://w4s.fr',
  // base: '/',

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
