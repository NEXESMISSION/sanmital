// Structured Data (JSON-LD) for SEO
// This helps Google understand your business and show rich snippets in search results

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "San Metal by Ben Amor",
  "alternateName": "San Metal",
  "url": "https://sanmetal.com.tn",
  "logo": "https://i.ibb.co/RkLrLqXk/logod.png",
  "description": "Fournisseur de référence en aciers et métaux en Tunisie depuis 35 ans. Spécialisé dans la vente de produits métallurgiques de qualité supérieure.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "PPWX+CFX",
    "addressLocality": "Sfax",
    "addressRegion": "Sfax",
    "postalCode": "3000",
    "addressCountry": "TN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.74901",
    "longitude": "10.74796"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+216-74-456-789",
    "contactType": "customer service",
    "areaServed": "TN",
    "availableLanguage": ["French", "Arabic"]
  },
  "sameAs": [
    "https://www.facebook.com/sanmetal",
    "https://www.linkedin.com/company/sanmetal"
  ],
  "foundingDate": "1990",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "San Metal by Ben Amor",
  "image": "https://i.ibb.co/RkLrLqXk/logod.png",
  "@id": "https://sanmetal.com.tn",
  "url": "https://sanmetal.com.tn",
  "telephone": "+216-74-456-789",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "PPWX+CFX",
    "addressLocality": "Sfax",
    "addressRegion": "Sfax",
    "postalCode": "3000",
    "addressCountry": "TN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.74901,
    "longitude": 10.74796
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  }
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://sanmetal.com.tn${item.url}`
  }))
});

export const productSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "image": product.image,
  "description": product.description,
  "brand": {
    "@type": "Brand",
    "name": "San Metal by Ben Amor"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "price": product.price || "0",
    "priceCurrency": "TND",
    "seller": {
      "@type": "Organization",
      "name": "San Metal by Ben Amor"
    }
  }
});

export const serviceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": "San Metal by Ben Amor"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Tunisia"
  },
  "serviceType": service.type
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "San Metal by Ben Amor",
  "url": "https://sanmetal.com.tn",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://sanmetal.com.tn/products?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};
