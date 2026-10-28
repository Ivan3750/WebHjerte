import LocalLandingPage from "../../components/seo/LocalLandingPage";

const path = "/hjemmeside-til-tomrer";

export const metadata = {
  title: "Hjemmeside til tømrer i Horsens | WebHjerte",
  description:
    "Hjemmeside til tømrere i Horsens: vis dine opgaver og få henvendelser fra kunder i dit område. Fast pris fra 2.500 kr, første udkast på 48 timer.",
  keywords: [
    "hjemmeside tømrer",
    "tømrer hjemmeside Horsens",
    "tømrerfirma hjemmeside",
    "webdesign tømrer",
  ],
  alternates: { canonical: `https://www.webhjerte.dk${path}` },
  openGraph: {
    title: "Hjemmeside til tømrer i Horsens | WebHjerte",
    description:
      "Vis dine opgaver og få flere henvendelser. Fast pris fra 2.500 kr og første udkast på 48 timer.",
    url: `https://www.webhjerte.dk${path}`,
    type: "website",
  },
};

const sections = [
  {
    h2: "Kunden vil se, hvad du har bygget",
    paragraphs: [
      "Til tømrerarbejde vælger kunden ofte ud fra tidligere opgaver. En hjemmeside, hvor dine ydelser og dit arbejde er let at finde, gør det nemmere at sige ja til at kontakte dig.",
    ],
  },
  {
    h2: "Det skal med på din tømrer-side",
    bullets: [
      "Dine ydelser: nybyg, tilbygning, terrasse, altan, køkken og indretning",
      "Dit arbejdsområde i Horsens og omegn",
      "Et telefonnummer, der kan trykkes direkte på mobilen",
      "En formular, hvor kunden kan beskrive opgaven og få et tilbud",
      "Et galleri med billeder af dit arbejde, når du har dem klar",
    ],
  },
  {
    h2: "Lokal synlighed på Google",
    paragraphs: [
      "Jeg optimerer siden til søgninger som 'tømrer Horsens' og 'tømrer i nærheden', og sætter den op, så den passer sammen med din Google Business-profil.",
    ],
  },
];

const related = [
  {
    href: "/hjemmeside-til-haandvaerkere",
    title: "Hjemmeside til håndværkere",
    desc: "Løsninger til VVS, elektrikere, malere og andre håndværkere.",
  },
  {
    href: "/hjemmeside-til-vvs",
    title: "Hjemmeside til VVS",
    desc: "Til VVS-firmaer, der vil have flere lokale henvendelser.",
  },
  {
    href: "/seo-horsens",
    title: "SEO Horsens",
    desc: "Bliv fundet af kunder, der søger efter dig lokalt på Google.",
  },
];

const faqs = [
  {
    q: "Hvad koster en hjemmeside til et tømrerfirma?",
    a: "Priserne starter fra 2.500 kr for en landingside, 4.500 kr for Basis (3–5 sider) og 7.500 kr for Standard (op til 8 sider). Alle priser er ekskl. moms.",
  },
  {
    q: "Hvor lang tid tager det?",
    a: "En landingside er klar på 5 dage, Basis på 10 dage og Standard på 18 dage. Du ser altid et første udkast inden for 48 timer.",
  },
  {
    q: "Kan jeg få et galleri med mine opgaver?",
    a: "Ja. Basis og Standard kan indeholde et galleri af dit arbejde. Du sender billederne, og jeg sætter dem op i siden.",
  },
];

export default function HjemmesideTilTomrerPage() {
  return (
    <LocalLandingPage
      path={path}
      name="Hjemmeside til tømrer"
      serviceType="Webdesign"
      eyebrow="Til tømrere"
      h1="Hjemmeside til tømrer i Horsens – vis dit arbejde og få henvendelser"
      intro="En hjemmeside til dit tømrerfirma i Horsens, der viser dine opgaver og dit område tydeligt. Fast pris, og du taler direkte med mig fra start til lancering."
      sections={sections}
      faqs={faqs}
      related={related}
    />
  );
}
