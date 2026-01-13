export const faqItems = [
  {
    id: 1,
    question: "Combien coûte une intervention W4S ?",
    answer: "Les tarifs varient selon le service : à partir de 49 € pour du petit bricolage, 39 € pour un montage de meuble simple, 490 € pour un site web one-page. Tous les devis sont gratuits et communiqués avant intervention, sans surprise.",
    category: "tarifs"
  },
  {
    id: 2,
    question: "Sous quel délai pouvez-vous intervenir ?",
    answer: "En urgence, nos artisans peuvent intervenir sous 2 heures dans les zones couvertes. Pour une demande standard, comptez 24 à 48 heures. Nous confirmons toujours le créneau par téléphone.",
    category: "delais"
  },
  {
    id: 3,
    question: "Comment sont sélectionnés vos artisans ?",
    answer: "Chaque artisan W4S est vérifié : nous contrôlons les certifications professionnelles, les assurances (RC Pro, décennale si applicable), et nous recueillons les avis clients après chaque intervention. Les artisans mal notés sont exclus du réseau.",
    category: "confiance"
  },
  {
    id: 4,
    question: "Intervenez-vous le week-end et les jours fériés ?",
    answer: "Oui, notre service d'urgence fonctionne 24h/24, 7j/7, y compris les week-ends et jours fériés. Les interventions standard sont planifiées du lundi au samedi.",
    category: "delais"
  },
  {
    id: 5,
    question: "Le devis est-il vraiment gratuit ?",
    answer: "Oui, le devis est 100% gratuit et sans engagement. Vous recevez un tarif clair avant toute intervention. Si le devis ne vous convient pas, vous ne payez rien.",
    category: "tarifs"
  },
  {
    id: 6,
    question: "Quelles zones couvrez-vous ?",
    answer: "Pour les services à domicile (bricolage, montage, électricité, maintenance), W4S intervient dans l'Oise (Compiègne, Senlis, Chantilly, Beauvais, Creil...), à Amiens et à Paris. Pour les services digitaux (création de sites web, SEO/ADS), nous travaillons avec des clients dans toute la France.",
    category: "zones"
  },
  {
    id: 7,
    question: "Quels moyens de paiement acceptez-vous ?",
    answer: "Nous acceptons les paiements par carte bancaire, virement, chèque et CESU (Chèque Emploi Service Universel) pour les services éligibles. Le paiement s'effectue après l'intervention.",
    category: "tarifs"
  },
  {
    id: 8,
    question: "Que faire en cas de problème après l'intervention ?",
    answer: "W4S garantit la satisfaction : si le travail n'est pas conforme, nous renvoyons un artisan pour corriger sans frais supplémentaires. Contactez notre support dans les 30 jours suivant l'intervention.",
    category: "confiance"
  },
  {
    id: 9,
    question: "Puis-je demander un artisan spécifique ?",
    answer: "Oui, si vous avez déjà travaillé avec un artisan W4S et souhaitez le recontacter, précisez-le lors de votre demande. Nous ferons notre possible pour vous l'attribuer selon ses disponibilités.",
    category: "confiance"
  },
  {
    id: 10,
    question: "Proposez-vous des contrats de maintenance ?",
    answer: "Oui, W4S propose des contrats de maintenance pour les particuliers et les professionnels (syndics, gestionnaires). Ces contrats incluent des visites préventives et des interventions prioritaires à tarifs préférentiels.",
    category: "services"
  },
  {
    id: 11,
    question: "Comment demander une intervention ?",
    answer: "Vous pouvez demander une intervention via notre formulaire en ligne, par téléphone, ou par email. Décrivez votre besoin, nous vous recontactons sous 30 minutes en heures ouvrées pour confirmer le devis et le créneau.",
    category: "services"
  },
  {
    id: 12,
    question: "Vos artisans sont-ils assurés ?",
    answer: "Oui, tous nos artisans sont assurés en responsabilité civile professionnelle. Pour les travaux concernés, ils disposent également de la garantie décennale.",
    category: "confiance"
  }
];

export const faqCategories = [
  { id: 'all', label: 'Toutes les questions' },
  { id: 'tarifs', label: 'Tarifs & paiement' },
  { id: 'delais', label: 'Délais & disponibilité' },
  { id: 'confiance', label: 'Confiance & garanties' },
  { id: 'services', label: 'Services' },
  { id: 'zones', label: 'Zones d\'intervention' }
];

export function getFaqByCategory(category) {
  if (category === 'all') return faqItems;
  return faqItems.filter(item => item.category === category);
}

export function getFaqPreview(count = 3) {
  return faqItems.slice(0, count);
}
