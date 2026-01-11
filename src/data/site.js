export const siteConfig = {
  name: 'W4S',
  tagline: 'Dépannage et bricolage, simplifié.',
  description: 'W4S met en relation particuliers et artisans vérifiés pour vos travaux de bricolage, plomberie, électricité, serrurerie. Devis gratuit, intervention rapide.',
  url: 'https://w4s.fr',
  
  // Contact - À COMPLÉTER
  contact: {
    phone: '01 XX XX XX XX', // À remplacer
    phoneFormatted: '+33XXXXXXXXX', // À remplacer
    email: 'contact@w4s.fr',
    address: {
      street: '[Adresse à compléter]',
      city: 'Paris',
      postalCode: '[Code postal]',
      region: 'Île-de-France',
      country: 'FR'
    },
    // Coordonnées GPS - À COMPLÉTER
    geo: {
      latitude: '48.8566',
      longitude: '2.3522'
    }
  },

  // Horaires
  hours: {
    standard: {
      days: 'Lundi - Vendredi',
      hours: '8h00 - 20h00'
    },
    saturday: {
      days: 'Samedi',
      hours: '9h00 - 18h00'
    },
    emergency: '24h/24, 7j/7'
  },

  // Zones d'intervention
  zones: [
    'Paris (75)',
    'Hauts-de-Seine (92)',
    'Seine-Saint-Denis (93)',
    'Val-de-Marne (94)',
    'Seine-et-Marne (77)',
    'Yvelines (78)',
    'Essonne (91)',
    'Val-d\'Oise (95)'
  ],

  // Réseaux sociaux - À COMPLÉTER
  social: {
    facebook: 'https://www.facebook.com/w4sfr',
    instagram: 'https://www.instagram.com/w4sfr',
    linkedin: 'https://www.linkedin.com/company/w4s'
  },

  // Statistiques (à ajuster)
  stats: {
    rating: '4.8',
    reviewCount: '250',
    interventions: '+2 000',
    artisans: '85'
  },

  // Moyens de paiement
  payment: ['Carte bancaire', 'Virement', 'Chèque', 'CESU'],

  // Promesses / USPs
  promises: [
    {
      icon: 'shield-check',
      title: 'Artisans vérifiés',
      description: 'Chaque professionnel est sélectionné, formé et certifié.'
    },
    {
      icon: 'file-text',
      title: 'Devis gratuit',
      description: 'Prix transparent avant toute intervention, sans engagement.'
    },
    {
      icon: 'clock',
      title: 'Intervention rapide',
      description: 'Sous 24h en standard, ou le jour même en urgence.'
    },
    {
      icon: 'thumbs-up',
      title: 'Garantie satisfaction',
      description: 'Travail non conforme ? On revient corriger, sans frais.'
    },
    {
      icon: 'headphones',
      title: 'Support 7j/7',
      description: 'Une équipe disponible pour répondre à vos questions.'
    },
    {
      icon: 'credit-card',
      title: 'Paiement sécurisé',
      description: 'CB, virement, CESU — vous choisissez.'
    }
  ],

  // Témoignages
  testimonials: [
    {
      id: 1,
      text: "Fuite d'eau un dimanche soir. Intervention en 45 minutes, travail impeccable, prix annoncé respecté. Je recommande !",
      author: 'Marie L.',
      location: 'Paris 11e',
      rating: 5,
      service: 'plomberie'
    },
    {
      id: 2,
      text: "Montage de ma cuisine IKEA en une journée. Propre, carré, pro. Exactement ce que je cherchais.",
      author: 'Thomas R.',
      location: 'Boulogne',
      rating: 5,
      service: 'montage'
    },
    {
      id: 3,
      text: "Porte claquée à 23h. Le serrurier est arrivé en 30 min, sans majoration abusive. Parfait.",
      author: 'Sophie M.',
      location: 'Paris 15e',
      rating: 5,
      service: 'serrurerie'
    },
    {
      id: 4,
      text: "Électricien très compétent, a diagnostiqué ma panne en 10 minutes. Tarif conforme au devis.",
      author: 'Laurent D.',
      location: 'Neuilly',
      rating: 5,
      service: 'electricite'
    },
    {
      id: 5,
      text: "J'utilise W4S pour mon immeuble depuis 6 mois. Réactivité top, artisans sérieux. Mon syndic est ravi.",
      author: 'Catherine P.',
      location: 'Paris 16e',
      rating: 5,
      service: 'maintenance'
    },
    {
      id: 6,
      text: "Site vitrine livré en 10 jours, design moderne et pro. Mes clients me trouvent facilement sur Google maintenant.",
      author: 'Marc B.',
      location: 'Versailles',
      rating: 5,
      service: 'creation-site-web'
    },
    {
      id: 7,
      text: "Grâce au référencement local, mon cabinet dentaire apparaît en première page. +40% de nouveaux patients en 4 mois.",
      author: 'Dr. Nadia K.',
      location: 'Paris 8e',
      rating: 5,
      service: 'seo-ads'
    }
  ]
};

export const navigation = {
  main: [
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Comment ça marche', href: '/comment-ca-marche' },
    { name: 'Nos artisans', href: '/nos-artisans' },
    { name: 'FAQ', href: '/faq' }
  ],
  services: [
    { name: 'Bricolage', href: '/services/bricolage' },
    { name: 'Plomberie', href: '/services/plomberie' },
    { name: 'Électricité', href: '/services/electricite' },
    { name: 'Serrurerie', href: '/services/serrurerie' },
    { name: 'Montage meubles', href: '/services/montage-meubles' },
    { name: 'Maintenance', href: '/services/maintenance' },
    { name: 'Création site web', href: '/services/creation-site-web' },
    { name: 'SEO & ADS', href: '/services/seo-ads' }
  ],
  footer: {
    services: [
      { name: 'Bricolage', href: '/services/bricolage' },
      { name: 'Plomberie', href: '/services/plomberie' },
      { name: 'Électricité', href: '/services/electricite' },
      { name: 'Serrurerie', href: '/services/serrurerie' },
      { name: 'Montage meubles', href: '/services/montage-meubles' },
      { name: 'Maintenance', href: '/services/maintenance' },
      { name: 'Création site web', href: '/services/creation-site-web' },
      { name: 'SEO & ADS', href: '/services/seo-ads' }
    ],
    info: [
      { name: 'Comment ça marche', href: '/comment-ca-marche' },
      { name: 'Nos artisans', href: '/nos-artisans' },
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
