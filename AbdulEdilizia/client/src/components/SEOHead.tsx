import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export default function SEOHead({ 
  title, 
  description, 
  keywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage 
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Meta robots: assicura che Google possa indicizzare
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Googlebot specifico
    let metaGooglebot = document.querySelector('meta[name="googlebot"]');
    if (!metaGooglebot) {
      metaGooglebot = document.createElement('meta');
      metaGooglebot.setAttribute('name', 'googlebot');
      document.head.appendChild(metaGooglebot);
    }
    metaGooglebot.setAttribute('content', 'index, follow');

    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute('content', ogTitle || title);

    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute('content', ogDescription || description);

    // Open Graph Site Name
    let ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (!ogSiteName) {
      ogSiteName = document.createElement('meta');
      ogSiteName.setAttribute('property', 'og:site_name');
      document.head.appendChild(ogSiteName);
    }
    ogSiteName.setAttribute('content', 'Abdul Edilizia');

    // Twitter Card Tags
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.setAttribute('name', 'twitter:card');
      document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute('content', 'summary_large_image');

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', ogTitle || title);

    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDesc) {
      twitterDesc = document.createElement('meta');
      twitterDesc.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDesc);
    }
    twitterDesc.setAttribute('content', ogDescription || description);

    if (ogImage) {
      let twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (!twitterImage) {
        twitterImage = document.createElement('meta');
        twitterImage.setAttribute('name', 'twitter:image');
        document.head.appendChild(twitterImage);
      }
      twitterImage.setAttribute('content', ogImage);
    }

    // Open Graph Image
    if (ogImage) {
      let ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (!ogImageMeta) {
        ogImageMeta = document.createElement('meta');
        ogImageMeta.setAttribute('property', 'og:image');
        document.head.appendChild(ogImageMeta);
      }
      ogImageMeta.setAttribute('content', ogImage);
    }

    // Open Graph URL
    if (canonicalUrl) {
      let ogUrlMeta = document.querySelector('meta[property="og:url"]');
      if (!ogUrlMeta) {
        ogUrlMeta = document.createElement('meta');
        ogUrlMeta.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrlMeta);
      }
      ogUrlMeta.setAttribute('content', canonicalUrl);
    }

    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    const businessSchema = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ConstructionCompany"],
      "name": "Abdul Edilizia",
      "image": "https://www.abduledilizia.it/hero-og.png",
      "url": "https://www.abduledilizia.it",
      "logo": "https://www.abduledilizia.it/favicon.png",
      "description": "Impresa edile specializzata in ristrutturazioni economiche di altissima qualità a Muggiò, Monza e Milano. Prezzi competitivi e materiali premium.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via Aldo Moro 6",
        "addressLocality": "Muggiò",
        "addressRegion": "MB",
        "postalCode": "20835",
        "addressCountry": "IT"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 45.5907,
        "longitude": 9.2355
      },
      "telephone": "+393392553291",
      "email": "abdul@abduledilizia.it",
      "priceRange": "€€",
      "areaServed": [
        {
          "@type": "City",
          "name": "Monza"
        },
        {
          "@type": "City",
          "name": "Milano"
        },
        {
          "@type": "City",
          "name": "Muggiò"
        },
        {
          "@type": "City",
          "name": "Bergamo"
        },
        {
          "@type": "City",
          "name": "Brescia"
        },
        {
          "@type": "City",
          "name": "Como"
        }
      ],
      "openingHours": "Mo-Sa 08:00-18:00",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "47"
      }
    };

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Abdul Edilizia",
      "url": "https://www.abduledilizia.it",
      "logo": "https://www.abduledilizia.it/favicon.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+393392553291",
        "contactType": "customer service",
        "email": "abdul@abduledilizia.it",
        "areaServed": "IT",
        "availableLanguage": "Italian"
      },
      "sameAs": []
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"][data-schema="business"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.setAttribute('data-schema', 'business');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(businessSchema);

    let orgScriptTag = document.querySelector('script[type="application/ld+json"][data-schema="organization"]');
    if (!orgScriptTag) {
      orgScriptTag = document.createElement('script');
      orgScriptTag.setAttribute('type', 'application/ld+json');
      orgScriptTag.setAttribute('data-schema', 'organization');
      document.head.appendChild(orgScriptTag);
    }
    orgScriptTag.textContent = JSON.stringify(organizationSchema);
  }, [title, description, keywords, canonicalUrl, ogTitle, ogDescription, ogImage]);

  return null;
}
