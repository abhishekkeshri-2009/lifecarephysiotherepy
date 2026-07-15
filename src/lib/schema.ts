import { business, formatFullAddress } from "@/src/config/business";

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: business.businessName,
  url: business.domain,
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: business.businessName,
  url: business.domain,
  description:
    "Home physiotherapy service in Gaur City 2, Greater Noida focused on pain management, mobility support, rehabilitation, and recovery at home.",
  areaServed: business.serviceAreas,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.addressLine,
    addressLocality: business.city,
    addressRegion: business.state,
    postalCode: business.postalCode,
    addressCountry: business.country,
  },
  telephone: business.phoneE164,
  email: business.email,
};

export function breadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "HealthAndBeautyBusiness",
      name: business.businessName,
      areaServed: business.serviceAreas,
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${business.domain}${path}`,
      serviceLocation: formatFullAddress(),
    },
    areaServed: business.serviceAreas,
  };
}

export function articleSchema({
  headline,
  description,
  path,
  publishedAt,
  updatedAt,
}: {
  headline: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    datePublished: publishedAt,
    dateModified: updatedAt,
    mainEntityOfPage: `${business.domain}${path}`,
    publisher: {
      "@type": "Organization",
      name: business.businessName,
      url: business.domain,
    },
  };
}
