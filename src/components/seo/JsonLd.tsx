import { companyData } from "@/data/company";
import type { Project } from "@/data/projects";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyData.name,
    url: "https://foxley.cl",
    logo: "https://foxley.cl/images/logo.png",
    description: companyData.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Providencia 1234, Oficina 501",
      addressLocality: "Santiago",
      addressCountry: "CL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyData.phone,
      contactType: "sales",
      areaServed: "CL",
      availableLanguage: "Spanish",
    },
    sameAs: [companyData.social.linkedin, companyData.social.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  service,
}: {
  service: { name: string; description: string };
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: companyData.name,
    },
    serviceType: "Digital Signage",
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function VideoJsonLd({ project }: { project: Project }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: project.title,
    description: project.description,
    thumbnailUrl: `https://foxley.cl${project.videoThumbnail}`,
    uploadDate: project.date,
    contentUrl: `https://foxley.cl${project.videoUrl}`,
    duration: project.videoDuration,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebPageJsonLd({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    publisher: {
      "@type": "Organization",
      name: companyData.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
