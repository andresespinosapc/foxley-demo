import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { CTA } from "@/components/sections/CTA";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { companyData } from "@/data/company";

export default function Home() {
  return (
    <>
      <WebPageJsonLd
        title={`${companyData.name} | Soluciones de Cartelería Digital`}
        description={companyData.description}
        url="https://foxley.cl"
      />
      <Hero />
      <Services />
      <Portfolio />
      <CTA />
    </>
  );
}
