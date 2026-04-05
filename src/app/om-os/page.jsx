import Image from "next/image";
import Questions from "../components/Questions";
import Eko from "../../../public/eko.png";
import Kvalitet from "../../../public/kvalitet.png";
import Transparens from "../../../public/transparens.png";
import WorkProcess from "../components/WorkProcess";
import AnimatedInView from "../components/AnimatedInView";
import Logo from "../../../public/W.png";
import DirekteBlock from "../components/om-os/DirekteBlock";
import IntroOmOs from "../components/om-os/IntroOmOs";
import MiljoeBlock from "../components/om-os/MiljoeBlock";
import ValuesBlock from "../components/om-os/ValuesBlock";

export const metadata = {
  title: "Om Ivan – Webudvikleren bag WebHjerte i Horsens",
  description: "Jeg hedder Ivan og er webudvikleren bag WebHjerte. Jeg bygger hjemmesider til lokale virksomheder i Horsens med fokus på enkelhed, hastighed og resultater.",
  keywords: "webudvikler horsens, freelance webdesign horsens, lokal webdesigner midtjylland, ivan webhjerte",
  openGraph: {
    title: "Om Ivan – Webudvikleren bag WebHjerte",
    description: "Direkte kontakt med den person der bygger din hjemmeside – fra første samtale til lancering. Baseret i Horsens, arbejder i hele Danmark.",
    url: "https://www.webhjerte.dk/om-mig",
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Ivan – Webudvikler bag WebHjerte i Horsens",
    description: "Lokal webudvikler i Horsens. Direkte kontakt, ingen mellemled, levering på 14 dage.",
  },
  alternates: {
    canonical: "https://www.webhjerte.dk/om-mig",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Ivan Kohan",
      jobTitle: "Webudvikler",
      worksFor: {
        "@type": "Organization",
        name: "WebHjerte",
        url: "https://www.webhjerte.dk",
      },
      url: "https://www.webhjerte.dk/om-mig",
      sameAs: ["https://www.linkedin.com/in/ivankohan"],
    }),
  },
};

const OmOs = () => {
  return (
    <>


      <IntroOmOs />
      <DirekteBlock/>
      <MiljoeBlock />
      <Questions/>
    </>
  );
};

export default OmOs;
