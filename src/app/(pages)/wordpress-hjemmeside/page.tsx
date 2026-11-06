import PageHero, { PrimaryLink, GhostLink } from "../../components/ui/PageHero";
import ProblemLoesning from "./_components/ProblemLoesning";
import FormToLead from "../../components/ui/FormToLead";
import CasesCarousel from "../../components/home/CasesCarousel";
import Questions from "../../components/Questions";
import PackagesBlock from "../services/_components/PackagesBlock";

export const metadata = {
  title: "WordPress hjemmeside fra 4.500 kr – hurtig & nem at redigere | WebHjerte",
  description:
    "Professionel WordPress-hjemmeside, du selv kan opdatere. Skræddersyet design, SEO og hurtig levering fra Horsens. Også WooCommerce og AI-chatbot.",
  keywords:
    "wordpress hjemmeside, hjemmeside med wordpress, wordpress webbureau, wordpress horsens, wordpress midtjylland, wordpress pris",
  robots: "index, follow",
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "WebHjerte – webbureau i Horsens" }],
    title: "WordPress Hjemmeside til Din Virksomhed | WebHjerte",
    description:
      "Professionel WordPress-hjemmeside, du selv kan redigere. Hurtig og billig løsning fra WebHjerte.",
    url: "https://www.webhjerte.dk/wordpress-hjemmeside",
    type: "website",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "WordPress Hjemmeside – Hurtig & Billig",
    description:
      "Få en WordPress-hjemmeside, du selv kan opdatere. Professionelt setup fra WebHjerte.",
  },
  alternates: {
    canonical: "https://www.webhjerte.dk/wordpress-hjemmeside",
  },
};

const WordpressHjemmeside = () => {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Forside", href: "/" }, { label: "WordPress hjemmeside" }]}
        eyebrow="WordPress"
        titleLines={["WordPress hjemmeside –", "hurtig og til fast pris"]}
        lead="Få en WordPress-hjemmeside, du selv kan opdatere. Professionelt setup, hurtig levering og direkte kontakt med udvikleren."
        actions={
          <>
            <PrimaryLink href="/kontakt">Få et gratis tilbud</PrimaryLink>
            <GhostLink href="/hjemmeside-pris">Se priser</GhostLink>
          </>
        }
      />
      <ProblemLoesning />
{/*       <WordpressFordele />
 */}      <CasesCarousel />
      <PackagesBlock />
      <FormToLead
        titleLine="Klar til din WordPress-hjemmeside?"
        description="Skriv til mig, og få et uforpligtende tilbud på din nye WordPress-side inden for 24 timer."
      />
      <Questions />
    </>
  );
};

export default WordpressHjemmeside;