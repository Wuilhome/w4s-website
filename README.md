# W4S - Site Vitrine

Site web vitrine pour W4S, plateforme de services à domicile (dépannage, bricolage, plomberie, électricité, serrurerie).

## 🚀 Stack Technique

- **Framework** : [Astro 4.x](https://astro.build)
- **Styling** : [Tailwind CSS 3.4](https://tailwindcss.com)
- **Déploiement** : Vercel / Netlify / Cloudflare Pages

## 📁 Structure du Projet

```
w4s-website/
├── public/              # Assets statiques
│   ├── images/          # Images, logo, og-image
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Footer, Breadcrumb
│   │   ├── sections/    # Hero, ServicesGrid, Testimonials...
│   │   └── ui/          # Button, Card, Input, Icon...
│   ├── data/            # Données (services, FAQ, config)
│   ├── layouts/         # BaseLayout
│   ├── pages/           # Pages du site
│   ├── styles/          # CSS global
│   └── utils/           # Utilitaires SEO
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🛠 Installation

```bash
# Cloner le repo
git clone <repo-url>
cd w4s-website

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build production
npm run build

# Preview du build
npm run preview
```

## 📄 Pages Générées

| Page | URL | Description |
|------|-----|-------------|
| Accueil | `/` | Page principale |
| Services | `/services/` | Hub des services |
| Bricolage | `/services/bricolage/` | Service bricolage |
| Plomberie | `/services/plomberie/` | Service plomberie |
| Électricité | `/services/electricite/` | Service électricité |
| Serrurerie | `/services/serrurerie/` | Service serrurerie |
| Montage | `/services/montage-meubles/` | Service montage |
| Maintenance | `/services/maintenance/` | Service maintenance |
| Urgence | `/urgence/` | Page urgence 24/7 |
| Comment ça marche | `/comment-ca-marche/` | Processus |
| Nos artisans | `/nos-artisans/` | Réseau d'artisans |
| Zones | `/zones/` | Zones d'intervention |
| FAQ | `/faq/` | Questions fréquentes |
| Contact | `/contact/` | Formulaire de contact |
| Mentions légales | `/mentions-legales/` | Légal |
| Confidentialité | `/politique-confidentialite/` | RGPD |

## ⚙️ Configuration

### Données à personnaliser

Éditez `src/data/site.js` pour modifier :

```javascript
contact: {
  phone: '01 XX XX XX XX',       // Numéro de téléphone
  phoneFormatted: '+33XXXXXXXXX',
  email: 'contact@w4s.fr',
  address: { ... }              // Adresse
}
```

### Formulaires

Les formulaires utilisent [Formspree](https://formspree.io). Remplacez `YOUR_FORM_ID` dans :
- `src/components/sections/ContactForm.astro`
- `src/pages/contact.astro`
- `src/pages/urgence.astro`

### Analytics

Activez Plausible dans `src/layouts/BaseLayout.astro` :

```html
<script defer data-domain="w4s.fr" src="https://plausible.io/js/script.js"></script>
```

## 🚀 Déploiement

### GitHub Pages (recommandé pour test)

1. **Créez un repo GitHub** et poussez le code :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/VOTRE_USERNAME/w4s-website.git
   git push -u origin main
   ```

2. **Configurez GitHub Pages** :
   - Allez dans **Settings** > **Pages**
   - Source : sélectionnez **GitHub Actions**
   - Le workflow se lance automatiquement

3. **Modifiez `astro.config.mjs`** :
   ```javascript
   site: 'https://VOTRE_USERNAME.github.io',
   base: '/w4s-website',  // Nom de votre repo
   ```

4. **Votre site sera en ligne sur** :
   `https://VOTRE_USERNAME.github.io/w4s-website/`

### Domaine personnalisé (production)

Pour utiliser `w4s.fr` :

1. Modifiez `astro.config.mjs` :
   ```javascript
   site: 'https://w4s.fr',
   base: '/',
   ```

2. Créez `public/CNAME` avec :
   ```
   w4s.fr
   ```

3. Configurez votre DNS :
   - Type A : `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Ou CNAME : `VOTRE_USERNAME.github.io`

### Vercel (alternative)

1. Connectez le repo GitHub à Vercel
2. Framework preset: `Astro`
3. Build command: `npm run build`
4. Output directory: `dist`

### Netlify

1. Connectez le repo GitHub à Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Cloudflare Pages

1. Connectez le repo GitHub
2. Build command: `npm run build`
3. Build output directory: `dist`

## ✅ Checklist Pré-Production

- [ ] Remplacer les coordonnées dans `src/data/site.js`
- [ ] Configurer Formspree (ID du formulaire)
- [ ] Ajouter les vraies images (logo, artisans, services)
- [ ] Activer les analytics
- [ ] Tester les formulaires
- [ ] Vérifier le sitemap.xml
- [ ] Configurer le domaine + SSL
- [ ] Soumettre sitemap à Google Search Console

## 📊 Performance

Le site est optimisé pour d'excellents Core Web Vitals :

- **0 KB JavaScript** côté client (hors formulaires)
- **CSS minimal** via Tailwind purge
- **Images optimisées** (formats modernes, lazy loading)
- **Fonts préchargées**

Target Lighthouse : **95+** sur tous les scores

## 🎨 Design System

### Couleurs

```css
--w4s-navy: #0A1A2F      /* Primary */
--w4s-white: #FFFFFF
--w4s-steel: #A9B0B8
--w4s-concrete: #CED2D4
--w4s-accent: #2563EB    /* Blue accent */
--w4s-urgent: #DC2626    /* Red emergency */
--w4s-success: #16A34A   /* Green success */
```

### Composants UI

- `Button` : primary, secondary, urgent, ghost, outline
- `Card` : avec hover effect
- `Input`, `Select`, `Textarea` : formulaires stylisés
- `Icon` : icônes SVG inline (Lucide-like)
- `Badge` : labels colorés

## 📝 Licence

Propriétaire - W4S

---

Développé avec ❤️ pour W4S
