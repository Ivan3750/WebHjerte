import PageHero, { PrimaryLink, GhostLink } from "../../components/ui/PageHero";
import PackagesBlock from "../services/_components/PackagesBlock";
 import FormToLead from "../../components/ui/FormToLead";
import SocialProof from "../../components/home/SocialProof";
import CasesCarousel from "../../components/home/CasesCarousel";

export const metadata = {
  title: "Ny Professionel Hjemmeside | WebHjerte",
  description:
    "Få en ny, professionel hjemmeside, der ser godt ud og virker. Hurtig levering, fast pris og fuld hjælp fra start til slut – uden binding.",
  keywords:
    "professionel hjemmeside, ny hjemmeside, ny hjemmeside pris, professionel hjemmeside design, webbureau horsens",
  // Reklame-landingsside: duplikerer forsiden/services, så den holdes ude af Google
  robots: { index: false, follow: true },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "WebHjerte – webbureau i Horsens" }],
    title: "Ny Professionel Hjemmeside | WebHjerte",
    description:
      "Få en ny, professionel hjemmeside, der ser godt ud og virker. Hurtig levering, fast pris.",
    url: "https://www.webhjerte.dk/ny-professionel-hjemmeside",
    type: "website",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Ny Professionel Hjemmeside – WebHjerte",
    description:
      "Få en ny, professionel hjemmeside, der ser godt ud og virker. Hurtig levering, fast pris.",
  },
  alternates: {
    canonical: "https://www.webhjerte.dk/ny-professionel-hjemmeside",
  },
};

const NyProfessionelHjemmeside = () => {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Forside", href: "/" }, { label: "Ny hjemmeside" }]}
        eyebrow="Ny hjemmeside"
        titleLines={["Få en ny, professionel", "hjemmeside"]}
        lead="En hurtig, moderne og mobilvenlig hjemmeside, der er klar til at tage imod nye kunder – til fast pris og uden binding."
        actions={
          <>
            <PrimaryLink href="/kontakt">Få et gratis tilbud</PrimaryLink>
            <GhostLink href="/hjemmeside-pris">Se priser</GhostLink>
          </>
        }
      />
      <SocialProof />
      <PackagesBlock />
      <CasesCarousel />
       <FormToLead
        titleLine="Klar til din nye hjemmeside?"
        description="Fortæl os lidt om dit projekt, så vender vi tilbage med et konkret tilbud inden for 24 timer – helt uforpligtende."
      />
    </>
  );
};

export default NyProfessionelHjemmeside;