export const siteConfig = {
  name: 'W4S',
  tagline: 'Services à domicile et digital, simplifié.',
  description: 'W4S propose des services de bricolage, montage de meubles, électricité, maintenance à domicile, ainsi que création de sites web et référencement SEO. Devis gratuit.',
  url: 'https://w4s.fr',

  // Contact - À COMPLÉTER
  contact: {
    phone: '01 XX XX XX XX', // À remplacer
    phoneFormatted: '+33XXXXXXXXX', // À remplacer
    email: 'contact@w4s.fr',
    address: {
      street: '[Adresse à compléter]',
      city: 'Compiègne',
      postalCode: '60200',
      region: 'Hauts-de-France',
      country: 'FR'
    },
    // Coordonnées GPS Compiègne
    geo: {
      latitude: '49.4178',
      longitude: '2.8262'
    }
  },

  // Horaires
  hours: {
    standard: {
      days: 'Lundi - Vendredi',
      hours: '8h00 - 19h00'
    },
    saturday: {
      days: 'Samedi',
      hours: '9h00 - 17h00'
    },
    emergency: 'Sur demande'
  },

  // Zones d'intervention - Services à domicile
  zonesPhysiques: [
    {
      region: 'Oise (60)',
      villes: ['Compiègne', 'Senlis', 'Chantilly', 'Clermont', 'Beauvais', 'Creil', 'Liancourt', 'Cauffry', 'Nogent-sur-Oise', 'Pont-Sainte-Maxence']
    },
    {
      region: 'Somme (80)',
      villes: ['Amiens']
    },
    {
      region: 'Paris & Île-de-France',
      villes: ['Paris', 'Proche banlieue']
    }
  ],

  // Zones pour services digitaux
  zonesDigitales: 'France entière',

  // Liste simplifiée pour affichage rapide
  zones: [
    'Oise (60) - Compiègne, Senlis, Chantilly...',
    'Amiens (80)',
    'Paris & Île-de-France'
  ],

  // Réseaux sociaux - À COMPLÉTER
  social: {
    facebook: 'https://www.facebook.com/w4sfr',
    instagram: 'https://www.instagram.com/w4sfr',
    linkedin: 'https://www.linkedin.com/company/w4s'
  },

  // Moyens de paiement
  payment: ['Carte bancaire', 'Virement', 'Chèque', 'CESU'],

  // Promesses / USPs
  promises: [
    {
      icon: 'shield-check',
      title: 'Professionnels qualifiés',
      description: 'Chaque intervenant est sélectionné pour son expertise.'
    },
    {
      icon: 'file-text',
      title: 'Devis gratuit',
      description: 'Prix transparent avant toute intervention, sans engagement.'
    },
    {
      icon: 'clock',
      title: 'Réactivité',
      description: 'Réponse rapide et intervention selon vos disponibilités.'
    },
    {
      icon: 'thumbs-up',
      title: 'Satisfaction garantie',
      description: 'Travail soigné et conforme à vos attentes.'
    }
  ]
};

export const navigation = {
  main: [
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Comment ça marche', href: '/comment-ca-marche' },
    { name: 'FAQ', href: '/faq' }
  ],
  // Services principaux (prioritaires)
  services: [
    { name: 'Création site web', href: '/services/creation-site-web', category: 'digital' },
    { name: 'SEO & ADS', href: '/services/seo-ads', category: 'digital' },
    { name: 'Bricolage', href: '/services/bricolage', category: 'domicile' },
    { name: 'Montage meubles', href: '/services/montage-meubles', category: 'domicile' },
    { name: 'Électricité', href: '/services/electricite', category: 'domicile' },
    { name: 'Maintenance', href: '/services/maintenance', category: 'domicile' }
  ],
  footer: {
    services: [
      { name: 'Création site web', href: '/services/creation-site-web' },
      { name: 'SEO & ADS', href: '/services/seo-ads' },
      { name: 'Bricolage', href: '/services/bricolage' },
      { name: 'Montage meubles', href: '/services/montage-meubles' },
      { name: 'Électricité', href: '/services/electricite' },
      { name: 'Maintenance', href: '/services/maintenance' }
    ],
    info: [
      { name: 'Comment ça marche', href: '/comment-ca-marche' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact', href: '/contact' },
      { name: 'Zones d\'intervention', href: '/zones' }
    ],
    legal: [
      { name: 'Mentions légales', href: '/mentions-legales' },
      { name: 'Politique de confidentialité', href: '/politique-confidentialite' }
    ]
  }
};
