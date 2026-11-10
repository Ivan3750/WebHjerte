import PageHero, { PrimaryLink, GhostLink } from "../../components/ui/PageHero";
import CtaSearchBlock from "../../components/ui/CTA";
import PortfolioRows from "./_components/PortfolioRows";
import { projects } from "../../data/projects";
import { breadcrumbLd, orgRef, SITE_URL } from "../../lib/seo";

export const metadata = {
  title: "Portefølje – Webdesign cases fra Horsens | WebHjerte",
  description:
    "Se hjemmesider, jeg har bygget: fysioterapi, køreskole, produktkataloger, rideklub og lokale virksomheder – hurtige og mobilvenlige.",
  keywords:
    "webdesign cases horsens, portefølje webbureau horsens, hjemmeside eksempler, webdesign referencer midtjylland",
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "WebHjerte – webbureau i Horsens" }],
    title: "Portefølje – Webdesign til lokale virksomheder | WebHjerte",
    description:
      "Se eksempler på mit arbejde – hjemmesider til køreskole, fitnesscenter, rideklub og mere. Alle projekter leveret til aftalt tid og pris.",
    url: `${SITE_URL}/portefolje`,
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Portefølje – Webdesign cases | WebHjerte Horsens",
    description: "Se eksempler på hjemmesider bygget til lokale virksomheder i Danmark.",
  },
  alternates: { canonical: `${SITE_URL}/portefolje` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/portefolje#webpage`,
      url: `${SITE_URL}/portefolje`,
      name: "WebHjerte Portefølje",
      description: "Webdesignprojekter til lokale virksomheder i Danmark",
      inLanguage: "da-DK",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: orgRef,
      breadcrumb: { "@id": `${SITE_URL}/portefolje#breadcrumb` },
      mainEntity: { "@id": `${SITE_URL}/portefolje#list` },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/portefolje#list`,
      numberOfItems: projects.length,
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/portefolje/${p.slug}`,
        name: `${p.title} – ${p.subtitle}`,
      })),
    },
    { ...breadcrumbLd([{ name: "Forside", path: "/" }, { name: "Portefølje", path: "/portefolje" }]), "@id": `${SITE_URL}/portefolje#breadcrumb` },
  ],
};

export default function Portefolje() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        breadcrumbs={[{ href: "/", label: "Forside" }, { label: "Portefølje" }]}
        eyebrow={`${projects.length} udvalgte projekter`}
        titleLines={["Portefølje –", <span key="s" className="text-[#00a8e8]">hjemmesider der virker</span>]}
        lead="Hjemmesider leveret til lokale virksomheder i Horsens og resten af Danmark - til aftalt tid og pris."
        actions={
          <>
            <PrimaryLink href="/kontakt">Book gratis samtale</PrimaryLink>
            <GhostLink href="/services#priser">Se priser</GhostLink>
          </>
        }
        size="md"
      />

      <PortfolioRows projects={projects} />
      <CtaSearchBlock />
    </>
  );
}
