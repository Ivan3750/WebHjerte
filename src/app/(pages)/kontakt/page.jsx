import KontaktClient from "./_components/KontaktClient";
import AfterMessageBlock from "./_components/AfterMessageBlock";
import Questions from "../../components/Questions";
import { breadcrumbLd, SITE_URL } from "../../lib/seo";

export const metadata = {
  title: "Kontakt – gratis tilbud inden for 24 timer | WebHjerte",
  description:
    "Kontakt WebHjerte i Horsens: ring +45 42 76 05 77 eller skriv. Få et gratis, uforpligtende tilbud på hjemmeside, SEO eller AI-løsning inden for 24 timer.",
  alternates: {
    canonical: "https://www.webhjerte.dk/kontakt",
  },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "WebHjerte – webbureau i Horsens" }],
    title: "Kontakt WebHjerte | Webdesign i Horsens",
    description:
      "Kontakt WebHjerte om din næste hjemmeside, webdesign eller SEO.",
    url: "https://www.webhjerte.dk/kontakt",
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Kontakt WebHjerte | Webdesign i Horsens",
    description: "Få et gratis tilbud på din næste hjemmeside – svar inden for 24 timer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${SITE_URL}/kontakt#contactpage`,
      url: `${SITE_URL}/kontakt`,
      name: "Kontakt WebHjerte",
      description:
        "Kontakt WebHjerte om webdesign, hjemmesideudvikling og SEO i Horsens og Midtjylland.",
      inLanguage: "da-DK",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      breadcrumb: { "@id": `${SITE_URL}/kontakt#breadcrumb` },
      mainEntity: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "WebHjerte",
        url: `${SITE_URL}/`,
        email: "hej@webhjerte.dk",
        telephone: "+45 42 76 05 77",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "hej@webhjerte.dk",
          telephone: "+45 42 76 05 77",
          areaServed: "DK",
          availableLanguage: ["da", "en"],
        },
      },
    },
    { ...breadcrumbLd([{ name: "Forside", path: "/" }, { name: "Kontakt", path: "/kontakt" }]), "@id": `${SITE_URL}/kontakt#breadcrumb` },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <KontaktClient />
      <AfterMessageBlock />
      <Questions />
    </>
  );
}