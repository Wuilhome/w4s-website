import { siteConfig } from '../data/site.js';

/**
 * Génère les métadonnées SEO pour une page
 */
export function generateSEO({
  title,
  description,
  canonical,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  noindex = false
}) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.tagline}`;
  const fullCanonical = canonical ? `${siteConfig.url}${canonical}` : siteConfig.url;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteConfig.url}${ogImage}`;

  return {
    title: fullTitle,
    description: description || siteConfig.description,
    canonical: fullCanonical,
    ogImage: fullOgImage,
    ogType,
    noindex
  };
}

/**
 * Génère le JSON-LD pour l'organisation
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    "name": siteConfig.name,
    "alternateName": "W4S Dépannage",
    "url": siteConfig.url,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteConfig.url}/images/logo-w4s.png`,
      "width": 400,
      "height": 100
    },
    "image": `${siteConfig.url}/images/og-image.jpg`,
    "description": siteConfig.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.street,
      "addressLocality": siteConfig.contact.address.city,
      "postalCode": siteConfig.contact.address.postalCode,
      "addressRegion": siteConfig.contact.address.region,
      "addressCountry": siteConfig.contact.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.contact.geo.latitude,
      "longitude": siteConfig.contact.geo.longitude
    },
    "telephone": siteConfig.contact.phoneFormatted,
    "email": siteConfig.contact.email,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": siteConfig.payment.join(", "),
    "areaServed": siteConfig.zones.map(zone => ({
      "@type": "AdministrativeArea",
      "name": zone
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": siteConfig.stats.rating,
      "reviewCount": siteConfig.stats.reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": Object.values(siteConfig.social)
  };
}

/**
 * Génère le JSON-LD pour le site web
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    "url": siteConfig.url,
    "name": siteConfig.name,
    "description": siteConfig.description,
    "publisher": {
      "@id": `${siteConfig.url}/#organization`
    }
  };
}

/**
 * Génère le JSON-LD pour un fil d'Ariane
 */
export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url ? `${siteConfig.url}${item.url}` : undefined
    }))
  };
}

/**
 * Génère le JSON-LD pour une page FAQ
 */
export function generateFAQSchema(faqItems) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

/**
 * Génère le JSON-LD pour une page service
 */
export function generateServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/services/${service.slug}#service`,
    "name": service.title,
    "serviceType": service.title,
    "description": service.longDescription,
    "provider": {
      "@id": `${siteConfig.url}/#organization`
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Île-de-France"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Prestations ${service.shortTitle}`,
      "itemListElement": service.tarifs.map(tarif => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": tarif.prestation
        },
        "priceSpecification": tarif.prix !== 'Sur devis' ? {
          "@type": "PriceSpecification",
          "price": tarif.prix.replace(/[^0-9]/g, ''),
          "priceCurrency": "EUR",
          "valueAddedTaxIncluded": true
        } : undefined
      }))
    }
  };
}

/**
 * Génère le schéma complet pour la page d'accueil
 */
export function generateHomePageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      generateWebsiteSchema(),
      generateOrganizationSchema()
    ]
  };
}
