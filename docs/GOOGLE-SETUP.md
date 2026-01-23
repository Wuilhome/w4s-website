# Configuration Google Business Profile & Google Tag Manager

Ce guide explique comment configurer Google Business Profile et Google Tag Manager pour le site W4S.

## 1. Google Business Profile

### Étape 1 : Créer votre fiche

1. Aller sur https://business.google.com/
2. Cliquer sur "Gérer maintenant"
3. Entrer le nom de l'entreprise : **W4S**
4. Choisir la catégorie principale : **Service de bricolage à domicile** ou **Prestataire de services informatiques**
5. Ajouter des catégories secondaires :
   - Entreprise d'électricité
   - Agence web
   - Consultant SEO

### Étape 2 : Informations de contact

Remplir avec les informations suivantes :

- **Nom** : W4S
- **Adresse** : 15 rue Henri Sainte-Claire Deville, 60550 Verneuil-en-Halatte
- **Téléphone** : 03 44 26 12 98
- **Site web** : https://w4s.fr
- **Email** : contact@w4service.fr

### Étape 3 : Zones de service

Ajouter les zones d'intervention :
- Oise (60) - Zone principale
- Somme (80) - Amiens
- Paris et Île-de-France - Interventions ponctuelles

### Étape 4 : Horaires d'ouverture

- Lundi - Vendredi : 8h00 - 19h00
- Samedi : 9h00 - 17h00
- Urgences : Sur demande (24h/24)

### Étape 5 : Services proposés

Ajouter les services :
1. Création de sites web
2. Référencement SEO & Google Ads
3. Bricolage à domicile
4. Montage de meubles
5. Dépannage électrique
6. Maintenance à domicile

### Étape 6 : Photos

Télécharger :
- Logo de l'entreprise
- Photos de réalisations (sites web créés)
- Photos d'interventions (avec autorisation des clients)

### Étape 7 : Vérification

Google enverra un code de vérification par courrier postal à l'adresse indiquée. Une fois reçu, entrer le code pour activer la fiche.

---

## 2. Google Tag Manager (GTM)

### Étape 1 : Créer un compte GTM

1. Aller sur https://tagmanager.google.com/
2. Créer un compte avec le nom "W4S"
3. Créer un conteneur nommé "w4s.fr" (type : Web)
4. Copier l'ID du conteneur (format : GTM-XXXXXXX)

### Étape 2 : Configurer le site

Remplacer `GTM-XXXXXXX` par votre ID réel dans :
- `src/layouts/BaseLayout.astro` (ligne ~94 et ~113)

```javascript
window.GTM_ID = 'GTM-VOTRE-ID'; // Remplacer GTM-XXXXXXX
```

Et dans le noscript :
```html
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-VOTRE-ID" ...>
```

### Étape 3 : Configurer les tags dans GTM

#### Tag Google Analytics 4 (GA4)

1. Dans GTM, créer un nouveau tag
2. Type : Google Analytics : Événement GA4
3. ID de mesure : Votre ID GA4 (G-XXXXXXXXXX)
4. Déclencheur : All Pages

#### Tag de conversion Google Ads

Si vous utilisez Google Ads :
1. Créer un tag "Conversion Google Ads"
2. Ajouter l'ID de conversion et le libellé
3. Déclencheur : Sur soumission du formulaire de contact

#### Événements personnalisés

Configurer ces événements :
- `form_submission` - Quand un formulaire est soumis
- `phone_click` - Quand un numéro de téléphone est cliqué
- `email_click` - Quand l'email est cliqué

### Étape 4 : Publier

1. Prévisualiser les modifications
2. Tester sur le site
3. Publier la version

---

## 3. Liaison Google Business Profile + Google Ads

Pour suivre les performances :

1. Dans Google Ads, lier votre fiche Google Business Profile
2. Activer les extensions de lieu
3. Les appels depuis la fiche seront trackés automatiquement

---

## 4. Schémas JSON-LD (déjà configurés)

Le site inclut déjà les schémas suivants qui aident Google Business Profile :

- `LocalBusiness` - Informations de l'entreprise
- `Service` - Description des services
- `FAQPage` - Questions fréquentes
- `BreadcrumbList` - Fil d'Ariane

Ces schémas sont automatiquement générés dans `src/utils/seo.js`.

---

## Checklist finale

- [ ] Fiche Google Business Profile créée
- [ ] Adresse vérifiée par courrier postal
- [ ] Photos ajoutées
- [ ] Compte GTM créé
- [ ] ID GTM ajouté au site (remplacer GTM-XXXXXXX)
- [ ] Tag GA4 configuré dans GTM
- [ ] Site déployé avec les modifications
- [ ] GTM publié

---

## Support

Pour toute question sur la configuration :
- Documentation GTM : https://support.google.com/tagmanager
- Documentation Business Profile : https://support.google.com/business
