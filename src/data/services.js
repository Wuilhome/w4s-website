export const services = [
  {
    id: 'creation-site-web',
    slug: 'creation-site-web',
    title: 'Création de sites web',
    shortTitle: 'Sites web',
    icon: 'globe',
    emoji: '🌐',
    description: 'Sites vitrines, e-commerce, sur mesure',
    longDescription: 'Création de sites web professionnels adaptés à vos besoins. Du site vitrine simple au e-commerce complet, nous concevons des sites modernes, rapides et optimisés pour le référencement.',
    heroText: 'Besoin d\'un site web professionnel ? Du site vitrine au e-commerce, nous créons votre présence en ligne sur mesure.',
    zone: 'France entière',
    prestations: [
      {
        title: 'Site one-page',
        description: 'Design personnalisé, jusqu\'à 5 sections, responsive mobile/tablette, formulaire de contact, SEO de base. Idéal pour présenter une activité simple.',
        delay: '5-7 jours'
      },
      {
        title: 'Site vitrine (3-5 pages)',
        description: 'Pages Accueil, Services, À propos, Contact + 1 optionnelle. Design sur mesure, SEO optimisé, formulaire + Google Maps, sécurité & performances.',
        delay: '10-15 jours'
      },
      {
        title: 'Site vitrine avancé (5-10 pages)',
        description: 'Arborescence complète, SEO avancé, animations légères, UX optimisée, blog ou actualités, optimisation Core Web Vitals.',
        delay: '3-4 semaines'
      },
      {
        title: 'Site e-commerce starter',
        description: 'Boutique en ligne clé en main jusqu\'à 50 produits. Paiement CB, Stripe, PayPal. Gestion stocks & commandes, SEO e-commerce, formation incluse.',
        delay: '4-6 semaines'
      },
      {
        title: 'Site e-commerce complet',
        description: 'Produits illimités, variantes, promos, codes promo. Tunnel de vente optimisé, SEO avancé, sécurité renforcée, accompagnement & formation complète.',
        delay: '6-8 semaines'
      },
      {
        title: 'Maintenance mensuelle',
        description: 'Modifications mineures incluses, support technique. Recommandé pour garder votre site à jour et sécurisé.',
        delay: 'Optionnel'
      }
    ],
    tarifs: [
      { prestation: 'Site one-page', prix: 'À partir de 600 € HT', delai: '5-7 jours' },
      { prestation: 'Site vitrine (3-5 pages)', prix: 'À partir de 1 200 € HT', delai: '10-15 jours' },
      { prestation: 'Site vitrine avancé (5-10 pages)', prix: 'À partir de 2 000 € HT', delai: '3-4 semaines' },
      { prestation: 'Site e-commerce starter (jusqu\'à 50 produits)', prix: 'À partir de 3 000 € HT', delai: '4-6 semaines' },
      { prestation: 'Site e-commerce complet (produits illimités)', prix: 'À partir de 5 000 € HT', delai: '6-8 semaines' },
      { prestation: 'Maintenance mensuelle', prix: '49 € HT/mois', delai: 'Optionnel' }
    ],
    faq: [
      {
        question: 'Quelles technologies utilisez-vous ?',
        answer: 'Nous utilisons des technologies modernes et performantes : HTML/CSS/JavaScript pour les sites basiques, Astro ou Next.js pour les sites plus avancés. Tous nos sites sont optimisés pour la vitesse, le SEO et l\'accessibilité.'
      },
      {
        question: 'Le nom de domaine et l\'hébergement sont-ils inclus ?',
        answer: 'Le nom de domaine (.fr ou .com) est offert la première année. L\'hébergement est inclus dans nos forfaits maintenance ou proposé séparément dès 9€/mois.'
      },
      {
        question: 'Puis-je modifier mon site moi-même après livraison ?',
        answer: 'Les modifications de contenu (textes, images) sont incluses dans nos forfaits maintenance. Pour les clients souhaitant être autonomes, nous proposons des solutions avec interface d\'administration simple en option.'
      },
      {
        question: 'Proposez-vous le design graphique ?',
        answer: 'Oui, la création du design est incluse. Nous vous proposons 2 maquettes au choix, puis affinons selon vos retours. Vous pouvez aussi fournir votre propre charte graphique.'
      },
      {
        question: 'Proposez-vous des options supplémentaires ?',
        answer: 'Oui, nous proposons plusieurs options en supplément : SEO avancé (à partir de 500 €), site multilingue (+400 €), connexion CRM ou outils métiers (sur devis). Contactez-nous pour un devis personnalisé.'
      }
    ],
    metaTitle: 'Création de site web professionnel — Vitrine & e-commerce | W4S',
    metaDescription: 'Création de sites web sur mesure : site vitrine, e-commerce, refonte. Design moderne, SEO optimisé, tarifs transparents. Devis gratuit avec W4S.'
  },
  {
    id: 'seo-ads',
    slug: 'seo-ads',
    title: 'Gestion Google Ads & SEO',
    shortTitle: 'ADS & SEO',
    icon: 'trending-up',
    emoji: '📈',
    description: 'Google Ads, Microsoft Ads, référencement',
    longDescription: 'Boostez votre visibilité en ligne avec nos experts certifiés Google Partner. Gestion complète de vos campagnes publicitaires Google Ads et Microsoft Ads, optimisation SEO. Sans engagement, résultats mesurables.',
    heroText: 'Vous voulez plus de clients via Google ? Nos experts certifiés gèrent vos campagnes publicitaires et maximisent votre retour sur investissement.',
    zone: 'France entière',
    prestations: [
      {
        title: 'Audit gratuit de vos campagnes',
        description: 'Analyse de vos campagnes existantes ou étude de faisabilité. Identification des opportunités, estimation du budget et des résultats attendus.',
        delay: 'Sous 48h'
      },
      {
        title: 'Google Ads - Recherche',
        description: 'Campagnes sur le réseau de recherche Google. Rédaction des annonces, sélection des mots-clés, optimisation continue du coût par clic et des conversions.',
        delay: 'Lancement sous 1 semaine'
      },
      {
        title: 'Google Ads - Display & YouTube',
        description: 'Campagnes visuelles sur le réseau Display et YouTube. Création des bannières, ciblage d\'audience, remarketing.',
        delay: 'Lancement sous 1 semaine'
      },
      {
        title: 'Microsoft Advertising (Bing)',
        description: 'Campagnes sur le réseau Microsoft/Bing. Audience complémentaire à Google, souvent moins concurrentielle et moins chère.',
        delay: 'Lancement sous 1 semaine'
      },
      {
        title: 'SEO - Référencement naturel',
        description: 'Optimisation technique, création de contenu, netlinking. Pour une visibilité durable et gratuite sur Google.',
        delay: 'Résultats sous 3-6 mois'
      },
      {
        title: 'Référencement local',
        description: 'Optimisation Google Business Profile, avis clients, citations locales. Idéal pour artisans et commerces de proximité.',
        delay: 'Résultats sous 1-3 mois'
      }
    ],
    tarifs: [
      { prestation: 'Audit de campagnes', prix: 'Gratuit', delai: 'Sous 48h' },
      { prestation: 'Gestion Google Ads (TPE)', prix: '290 €/mois', delai: 'Sans engagement' },
      { prestation: 'Gestion Google Ads (PME)', prix: '490 €/mois', delai: 'Sans engagement' },
      { prestation: 'Gestion Microsoft Ads', prix: '190 €/mois', delai: 'Sans engagement' },
      { prestation: 'Pack Google + Microsoft Ads', prix: '390 €/mois', delai: 'Sans engagement' },
      { prestation: 'SEO - Référencement local', prix: '250 €/mois', delai: 'Engagement 3 mois' },
      { prestation: 'SEO - Pack starter', prix: '450 €/mois', delai: 'Engagement 6 mois' },
      { prestation: 'SEO - Pack croissance', prix: '790 €/mois', delai: 'Engagement 6 mois' }
    ],
    faq: [
      {
        question: 'Êtes-vous certifiés Google Partner ?',
        answer: 'Oui, nous sommes certifiés Google Partner et Microsoft Advertising Partner. Nos experts sont formés et certifiés sur les dernières fonctionnalités des plateformes publicitaires.'
      },
      {
        question: 'Y a-t-il un engagement minimum ?',
        answer: 'Non, nos forfaits Google Ads et Microsoft Ads sont sans engagement. Vous pouvez arrêter quand vous voulez. Seuls les forfaits SEO nécessitent un engagement minimum car les résultats prennent du temps.'
      },
      {
        question: 'Quel budget publicitaire prévoir ?',
        answer: 'Le budget dépend de votre secteur et objectifs. Pour un artisan local, comptez 300-500€/mois de budget pub. Pour un e-commerce, 1000€/mois minimum. Nous optimisons chaque euro pour maximiser votre ROI.'
      },
      {
        question: 'Comment suivre les performances ?',
        answer: 'Vous avez accès à un tableau de bord en temps réel. Nous vous envoyons un rapport mensuel détaillé avec les clics, conversions, coût par acquisition, et recommandations. Un point téléphonique mensuel est inclus.'
      },
      {
        question: 'Quelle différence entre SEO et Google Ads ?',
        answer: 'Google Ads donne des résultats immédiats mais payants. Le SEO prend 3-6 mois mais génère du trafic gratuit et durable. L\'idéal est de combiner les deux : Ads pour le court terme, SEO pour le long terme.'
      }
    ],
    metaTitle: 'Gestion Google Ads & SEO — Agence certifiée | W4S',
    metaDescription: 'Agence Google Ads certifiée. Gestion de campagnes publicitaires, SEO, référencement local. Sans engagement, résultats mesurables. Audit gratuit avec W4S.'
  },
  {
    id: 'bricolage',
    slug: 'bricolage',
    title: 'Petit bricolage',
    shortTitle: 'Bricolage',
    icon: 'hammer',
    emoji: '🔨',
    description: 'Fixations, montage, réparations diverses',
    longDescription: 'Travaux de petit bricolage à domicile : fixations murales, montage de meubles, réparations diverses, installations simples. Nos bricoleurs polyvalents interviennent pour tous vos petits travaux.',
    heroText: 'Fixation, montage, réparation ? Nos bricoleurs interviennent rapidement pour tous vos petits travaux à domicile.',
    zone: 'Oise, Amiens, Paris',
    prestations: [
      {
        title: 'Fixations murales',
        description: 'Étagères, cadres, tringles, TV murale, miroirs. Tous supports : placo, béton, brique.',
        delay: 'Sous 24-48h'
      },
      {
        title: 'Petites réparations',
        description: 'Poignées, charnières, joints, petite menuiserie, stores et volets.',
        delay: 'Sous 24-48h'
      },
      {
        title: 'Montage simple',
        description: 'Meubles en kit, étagères, accessoires de salle de bain, luminaires.',
        delay: 'Sous 24-48h'
      },
      {
        title: 'Travaux divers',
        description: 'Peinture retouche, joints silicone, petits travaux sur demande.',
        delay: 'Sur devis'
      }
    ],
    tarifs: [
      { prestation: 'Intervention 1h', prix: '49 €', delai: 'Sous 24h' },
      { prestation: 'Demi-journée (4h)', prix: '149 €', delai: 'Sous 48h' },
      { prestation: 'Journée complète', prix: '269 €', delai: 'Sur RDV' }
    ],
    faq: [
      {
        question: 'Quels types de fixations réalisez-vous ?',
        answer: 'Nous réalisons tous types de fixations : étagères, cadres, miroirs, TV murales, tringles à rideaux, barres de douche, sur tous supports (placo, béton, brique, bois).'
      },
      {
        question: 'Fournissez-vous le matériel ?',
        answer: 'Nos bricoleurs disposent de l\'outillage nécessaire. Pour le matériel spécifique (vis, chevilles, accessoires), nous pouvons l\'inclure sur devis ou vous fournissez.'
      }
    ],
    metaTitle: 'Bricoleur à domicile — Fixations & petits travaux | W4S',
    metaDescription: 'Besoin d\'un bricoleur ? Fixations murales, montage, petites réparations. Intervention rapide, devis gratuit, artisans vérifiés. Réservez avec W4S.'
  },
  {
    id: 'electricite',
    slug: 'electricite',
    title: 'Électricité',
    shortTitle: 'Électricité',
    icon: 'zap',
    emoji: '⚡',
    description: 'Pannes, installations, mises aux normes',
    longDescription: 'Dépannage électrique et installations par des électriciens certifiés. Panne de courant, disjoncteur, prises et interrupteurs, éclairage, tableau électrique.',
    heroText: 'Panne électrique, installation, mise aux normes ? Nos électriciens certifiés interviennent en toute sécurité.',
    zone: 'Oise, Amiens, Paris',
    prestations: [
      {
        title: 'Dépannage électrique',
        description: 'Diagnostic et réparation de pannes, courts-circuits, disjoncteurs défaillants.',
        delay: 'Intervention urgence sous 2h'
      },
      {
        title: 'Prises & interrupteurs',
        description: 'Remplacement, ajout de prises, interrupteurs, variateurs. Mise en conformité.',
        delay: 'Sous 24-48h'
      },
      {
        title: 'Éclairage',
        description: 'Installation luminaires, spots, appliques, éclairage LED, domotique.',
        delay: 'Sous 48h'
      },
      {
        title: 'Tableau électrique',
        description: 'Mise aux normes, remplacement, ajout de lignes. Attestation de conformité.',
        delay: 'Sur devis'
      }
    ],
    tarifs: [
      { prestation: 'Diagnostic panne', prix: '69 €', delai: 'Sous 24h' },
      { prestation: 'Remplacement prise/interrupteur', prix: '49 €', delai: 'Sous 24h' },
      { prestation: 'Installation luminaire', prix: '59 €', delai: 'Sous 48h' },
      { prestation: 'Mise aux normes tableau', prix: 'Sur devis', delai: '3-5 jours' }
    ],
    faq: [
      {
        question: 'Vos électriciens sont-ils certifiés ?',
        answer: 'Oui, tous nos électriciens possèdent les habilitations électriques obligatoires (BR, B2V) et sont assurés en responsabilité civile professionnelle.'
      },
      {
        question: 'Pouvez-vous faire une mise aux normes ?',
        answer: 'Oui, nous réalisons les mises aux normes NF C 15-100 avec délivrance d\'une attestation de conformité si nécessaire.'
      }
    ],
    metaTitle: 'Électricien à domicile — Dépannage & installation | W4S',
    metaDescription: 'Panne électrique, installation, mise aux normes. Électriciens certifiés, intervention rapide, devis gratuit. Contactez W4S.'
  },
  {
    id: 'montage-meubles',
    slug: 'montage-meubles',
    title: 'Montage de meubles',
    shortTitle: 'Montage',
    icon: 'package',
    emoji: '🪑',
    description: 'IKEA, cuisine, dressing',
    longDescription: 'Service de montage de meubles en kit : IKEA, Leroy Merlin, But, Conforama, cuisines, dressings. Monteurs expérimentés, travail soigné.',
    heroText: 'Meubles IKEA, cuisine, dressing à monter ? Nos monteurs professionnels s\'en chargent proprement et rapidement.',
    zone: 'Oise, Amiens, Paris',
    prestations: [
      {
        title: 'Meubles en kit',
        description: 'Montage de tout meuble en kit : IKEA, But, Conforama, Maisons du Monde, etc.',
        delay: 'Sous 24-48h'
      },
      {
        title: 'Cuisine',
        description: 'Montage et installation de cuisines complètes. Raccordements eau et électricité inclus si besoin.',
        delay: 'Sur RDV, 1-3 jours'
      },
      {
        title: 'Dressing & rangements',
        description: 'Montage de dressings, placards, armoires sur mesure.',
        delay: 'Sur RDV'
      },
      {
        title: 'Démontage & remontage',
        description: 'Pour déménagement : démontage soigneux et remontage dans votre nouveau logement.',
        delay: 'Sur devis'
      }
    ],
    tarifs: [
      { prestation: 'Meuble simple (étagère, table)', prix: '39 €', delai: 'Sous 24h' },
      { prestation: 'Meuble moyen (lit, armoire)', prix: '69 €', delai: 'Sous 48h' },
      { prestation: 'Meuble complexe (dressing)', prix: '129 €', delai: 'Sur RDV' },
      { prestation: 'Cuisine complète', prix: 'Sur devis', delai: '1-3 jours' }
    ],
    faq: [
      {
        question: 'Montez-vous tous les types de meubles ?',
        answer: 'Oui, nos monteurs sont formés sur toutes les marques : IKEA, But, Conforama, Leroy Merlin, Castorama, etc. Envoyez-nous la référence pour un devis précis.'
      },
      {
        question: 'Évacuez-vous les emballages ?',
        answer: 'Oui, sur demande nous évacuons les cartons et emballages (supplément de 15 € pour l\'évacuation).'
      }
    ],
    metaTitle: 'Montage de meubles à domicile — IKEA, cuisine, dressing | W4S',
    metaDescription: 'Service de montage de meubles IKEA, cuisines, dressings. Monteurs professionnels, tarifs fixes, intervention rapide. Réservez avec W4S.'
  },
  {
    id: 'maintenance',
    slug: 'maintenance',
    title: 'Maintenance générale',
    shortTitle: 'Maintenance',
    icon: 'home',
    emoji: '🏠',
    description: 'Entretien régulier, contrats',
    longDescription: 'Services de maintenance pour particuliers et professionnels. Contrats d\'entretien, visites préventives, interventions prioritaires. Idéal pour syndics et gestionnaires.',
    heroText: 'Besoin d\'un entretien régulier de votre logement ou immeuble ? Découvrez nos contrats de maintenance sur mesure.',
    zone: 'Oise, Amiens, Paris',
    prestations: [
      {
        title: 'Visite d\'entretien',
        description: 'Contrôle général : plomberie, électricité, serrures, joints, petites réparations préventives.',
        delay: 'Sur RDV'
      },
      {
        title: 'Contrat particulier',
        description: 'Forfait annuel avec visites préventives et interventions prioritaires à tarif réduit.',
        delay: 'Sur devis'
      },
      {
        title: 'Contrat syndic/gestionnaire',
        description: 'Maintenance des parties communes, interventions rapides, interlocuteur dédié.',
        delay: 'Sur devis'
      },
      {
        title: 'Intervention ponctuelle',
        description: 'Tout type de petits travaux de maintenance non urgents.',
        delay: 'Sous 48h'
      }
    ],
    tarifs: [
      { prestation: 'Visite d\'entretien (1h)', prix: '79 €', delai: 'Sur RDV' },
      { prestation: 'Contrat annuel particulier', prix: 'Dès 299 €/an', delai: 'Sur devis' },
      { prestation: 'Contrat syndic', prix: 'Sur devis', delai: 'Sur devis' }
    ],
    faq: [
      {
        question: 'Que comprend le contrat annuel ?',
        answer: 'Le contrat annuel inclut 2 visites préventives, des interventions prioritaires sous 24h, et une remise de 15% sur toutes les prestations supplémentaires.'
      },
      {
        question: 'Proposez-vous des contrats pour les copropriétés ?',
        answer: 'Oui, nous travaillons avec de nombreux syndics et gestionnaires. Nous proposons des contrats adaptés avec interlocuteur dédié et reporting mensuel.'
      }
    ],
    metaTitle: 'Maintenance à domicile — Contrats & entretien | W4S',
    metaDescription: 'Contrats de maintenance pour particuliers et professionnels. Visites préventives, interventions prioritaires, tarifs préférentiels. W4S.'
  }
];

export function getServiceBySlug(slug) {
  return services.find(s => s.slug === slug);
}

export function getAllServices() {
  return services;
}
