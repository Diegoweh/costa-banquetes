import { ContentSection } from "@/components/content-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";
import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

const pageTitle = "Bodas en la Playa en Mazatlan";
const pageDescription =
  "Descubre paquetes de boda y banquetes frente al mar en Hotel Costa de Oro, Mazatlan. Agenda con nuestra wedding planner y celebra tu boda en la Zona Dorada.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: `${pageTitle} | Hotel Costa de Oro`,
      description: pageDescription,
      inLanguage: "es-MX",
    },
    {
      "@type": "Hotel",
      "@id": `${SITE_URL}/#hotel`,
      name: "Hotel Costa de Oro",
      description:
        "Hotel frente al mar en la Zona Dorada de Mazatlan con paquetes para bodas, banquetes y hospedaje para invitados.",
      url: `${SITE_URL}/`,
      telephone: "+52-669-913-5344",
      email: "info@hotelcostadeoro.mx",
      image: [
        `${SITE_URL}/img/costa-hero.webp`,
        `${SITE_URL}/img/hero-img.webp`,
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Camaron Sabalo 710",
        addressLocality: "Mazatlan",
        addressRegion: "Sinaloa",
        postalCode: "82110",
        addressCountry: "MX",
      },
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Ceremonias frente al mar",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Wedding planner",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Hospedaje para invitados",
          value: true,
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <HeroSection />
        <ContentSection />
      </main>
      <Footer />
    </div>
  );
}
