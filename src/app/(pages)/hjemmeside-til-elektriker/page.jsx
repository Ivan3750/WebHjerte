import LocalLandingPage from "../../components/seo/LocalLandingPage";

const path = "/hjemmeside-til-elektriker";

export const metadata = {
  title: "Hjemmeside til elektriker i Horsens | WebHjerte",
  description:
    "Hjemmeside til elektrikere i Horsens: vis dine ydelser og få henvendelser fra kunder i dit område. Fast pris fra 2.500 kr, første udkast på 48 timer.",
  keywords: [
    "hjemmeside elektriker",
    "elektriker hjemmeside Horsens",
    "elektriker webdesign",
    "elektrikerfirma hjemmeside",
  ],
  alternates: { canonical: `https://www.webhjerte.dk${path}` },
  openGraph: {
    title: "Hjemmeside til elektriker i Horsens | WebHjerte",
    description:
      "Få en hjemmeside, der viser dine ydelser og får kunder til at kontakte dig. Fast pris fra 2.500 kr.",
    url: `https://www.webhjerte.dk${path}`,
    type: "website",
  },
};

const sections = [
  {
    h2: "Tillid afgør, hvem kunden ringer til",
    paragraphs: [
      "Ved elinstallationer vil kunden have en elektriker, de kan stole på. En hjemmeside, der tydeligt viser, hvad du laver, hvor du arbejder, og hvordan man kontakter dig, skaber den tillid, før første opkald.",
    ],
  },
  {
    h2: "Det skal med på din elektriker-side",
    bullets: [
      "Dine ydelser: installation, fejlfinding, tavleudskiftning, belysning og elbil-lader",
      "Dit arbejdsområde i Horsens og omegn",
      "Et telefonnummer, der kan trykkes direkte på mobilen",
      "En formular til tilbud, så kunden kan beskrive opgaven",
      "Billeder af færdige opgaver, når du har dem klar",
    ],
  },
  {
    h2: "Bliv fundet af kunder i dit område",
    paragraphs: [
      "Jeg optimerer siden til søgninger som 'elektriker Horsens' og 'elektriker i nærheden', og strukturerer den, så den passer til din Google Business-profil.",
    ],
  },
];

const related = [
  {
    href: "/hjemmeside-til-vvs",
    title: "Hjemmeside til VVS",
    desc: "Til VVS-firmaer, der vil have flere lokale henvendelser.",
  },
  {
    href: "/hjemmeside-til-haandvaerkere",
    title: "Hjemmeside til håndværkere",
    desc: "Løsninger til tømrere, malere og andre håndværkere.",
  },
  {
    href: "/seo-horsens",
    title: "SEO Horsens",
    desc: "Bliv fundet af kunder, der søger efter dig lokalt på Google.",
  },
];

const faqs = [
  {
    q: "Hvad koster en hjemmeside til en elektriker?",
    a: "Priserne starter fra 2.500 kr for en landingside, 4.500 kr for Basis (3–5 sider) og 7.500 kr for Standard (op til 8 sider). Alle priser er ekskl. moms.",
  },
  {
    q: "Hvornår er siden klar?",
    a: "En landingside er klar på 5 dage, Basis på 10 dage og Standard på 18 dage. Du ser et første udkast inden for 48 timer.",
  },
  {
    q: "Kan jeg selv opdatere siden?",
    a: "Ja, hvis du vælger WordPress kan du selv redigere tekster og billeder. Ellers kan jeg opdatere den for dig med et vedligeholdelsesabonnement fra 195 til 395 kr. pr. måned.",
  },
];

export default function HjemmesideTilElektrikerPage() {
  return (
    <LocalLandingPage
      path={path}
      name="Hjemmeside til elektriker"
      serviceType="Webdesign"
      eyebrow="Til elektrikere"
      h1="Hjemmeside til elektriker i Horsens – få flere henvendelser"
      intro="En hjemmeside til din elektrikervirksomhed, der viser dine ydelser og dit område tydeligt, og gør det nemt for kunderne at tage kontakt. Fast pris, direkte kontakt med mig."
      sections={sections}
      faqs={faqs}
      related={related}
    />
  );
}
