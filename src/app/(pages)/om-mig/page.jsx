import IntroOmOs from "./_components/IntroOmOs";
import HistorieBlock from "./_components/HistorieBlock";
import WhyEasyToWorkWithMe from "./_components/WhyEasyToWorkWithMe";
import Questions from "../../components/Questions";
import CtaSearchBlock from "../../components/ui/CTA";
import { breadcrumbLd, SITE_URL } from "../../lib/seo";

export const metadata = {
  title: "Om Ivan – Webudvikleren bag WebHjerte i Horsens",
  description: "Jeg hedder Ivan og er webudvikleren bag WebHjerte. Jeg bygger hjemmesider til lokale virksomheder i Horsens med fokus på enkelhed, hastighed og resultater.",
  keywords: "webudvikler horsens, freelance webdesign horsens, lokal webdesigner midtjylland, ivan webhjerte",
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "WebHjerte – webbureau i Horsens" }],
    title: "Om Ivan – Webudvikleren bag WebHjerte",
    description: "Direkte kontakt med den person der bygger din hjemmeside – fra første samtale til lancering. Baseret i Horsens, arbejder i hele Danmark.",
    url: "https://www.webhjerte.dk/om-mig",
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "profile",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Om Ivan – Webudvikler bag WebHjerte i Horsens",
    description: "Lokal webudvikler i Horsens. Direkte kontakt, ingen mellemled, levering på 14 dage.",
  },
  alternates: {
    canonical: "https://www.webhjerte.dk/om-mig",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/om-mig#webpage`,
      url: `${SITE_URL}/om-mig`,
      name: "Om Ivan – Webudvikleren bag WebHjerte i Horsens",
      inLanguage: "da-DK",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/om-mig#ivan` },
      breadcrumb: { "@id": `${SITE_URL}/om-mig#breadcrumb` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/om-mig#ivan`,
      name: "Ivan Kohan",
      jobTitle: "Webudvikler og stifter af WebHjerte",
      description:
        "Webudvikler i Horsens, der bygger hjemmesider, webshops og SEO til lokale virksomheder i Midtjylland og resten af Danmark.",
      image: `${SITE_URL}/ivan-kohan.jpg`,
      url: `${SITE_URL}/om-mig`,
      email: "hej@webhjerte.dk",
      telephone: "+45 42 76 05 77",
      address: { "@type": "PostalAddress", addressLocality: "Horsens", postalCode: "8700", addressCountry: "DK" },
      knowsAbout: ["Webdesign", "Webudvikling", "SEO", "Next.js", "WordPress", "AI-integration"],
      worksFor: { "@id": `${SITE_URL}/#organization` },
      sameAs: [
        "https://www.linkedin.com/company/webhjerte",
        "https://www.facebook.com/profile.php?id=61575549052729",
        "https://www.instagram.com/webhjerte",
      ],
    },
    { ...breadcrumbLd([{ name: "Forside", path: "/" }, { name: "Om mig", path: "/om-mig" }]), "@id": `${SITE_URL}/om-mig#breadcrumb` },
  ],
};

const OmOs = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IntroOmOs />
      <HistorieBlock />
      <WhyEasyToWorkWithMe />
      <Questions />
      <CtaSearchBlock />
    </>
  );
};

export default OmOs;
