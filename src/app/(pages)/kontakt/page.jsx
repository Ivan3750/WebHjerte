import { Suspense } from "react";
import KontaktClient from "./_components/KontaktClient";
import AfterMessageBlock from "./_components/AfterMessageBlock";
import Questions from "../../components/Questions";

export const metadata = {
  title: "Kontakt WebHjerte | Webdesign i Horsens",
  description:
    "Kontakt WebHjerte og få hjælp til en professionel hjemmeside. Webdesign, udvikling og SEO til virksomheder i Horsens og Midtjylland.",
  alternates: {
    canonical: "https://webhjerte.dk/kontakt",
  },
  openGraph: {
    title: "Kontakt WebHjerte | Webdesign i Horsens",
    description:
      "Kontakt WebHjerte om din næste hjemmeside, webdesign eller SEO.",
    url: "https://webhjerte.dk/kontakt",
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://webhjerte.dk/kontakt#contactpage",
  url: "https://webhjerte.dk/kontakt",
  name: "Kontakt WebHjerte",
  description:
    "Kontakt WebHjerte om webdesign, hjemmesideudvikling og SEO i Horsens og Midtjylland.",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://webhjerte.dk/#website",
    url: "https://webhjerte.dk/",
    name: "WebHjerte",
  },
  about: {
    "@type": "Organization",
    "@id": "https://webhjerte.dk/",
    name: "WebHjerte",
    url: "https://webhjerte.dk/",
  },
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

      <Suspense fallback={null}>
        <KontaktClient />
        <AfterMessageBlock />
        <Questions />
      </Suspense>
    </>
  );
}