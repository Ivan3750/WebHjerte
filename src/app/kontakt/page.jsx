import Contact from "../components/Contact";
import Logo from "../../../public/W.png";

export const metadata = {
  title: "Kontakt WebHjerte – Gratis Første Samtale | Horsens",
  description: "Tag fat i mig – svar inden for 24 timer. Gratis og uforpligtende samtale om din nye hjemmeside. Lokal webudvikler i Horsens, arbejder i hele Danmark.",
  keywords: "kontakt webbureau horsens, gratis webdesign samtale, bestil hjemmeside horsens, webudvikler kontakt midtjylland",
  openGraph: {
    title: "Kontakt WebHjerte – Kom i gang med din nye hjemmeside",
    description: "Skriv til mig – jeg svarer inden for 24 timer. Første samtale er gratis og uforpligtende. Baseret i Horsens, arbejder online i hele Danmark.",
    url: "https://www.webhjerte.dk/kontakt",
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt WebHjerte – Gratis samtale | Horsens",
    description: "Svar inden for 24 timer. Gratis og uforpligtende. Lokal webudvikler i Horsens.",
  },
  alternates: {
    canonical: "https://www.webhjerte.dk/kontakt",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Kontakt WebHjerte",
      url: "https://www.webhjerte.dk/kontakt",
      description: "Kontaktside for WebHjerte – lokal webudvikler i Horsens",
    }),
  },
};

const Kontakt = () => {
    return ( <>
    <Contact/>
    </> );
}
 
export default Kontakt;