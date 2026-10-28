import LocalLandingPage from "../../components/seo/LocalLandingPage";

const path = "/hjemmeside-til-vvs";

export const metadata = {
  title: "Hjemmeside til VVS-firma i Horsens | WebHjerte",
  description:
    "Hjemmeside til VVS-firmaer i Horsens: få flere opkald fra kunder i dit område. Fast pris fra 2.500 kr, første udkast på 48 timer. Få et gratis tilbud.",
  keywords: [
    "hjemmeside VVS",
    "VVS hjemmeside Horsens",
    "VVS-firma hjemmeside",
    "webdesign VVS",
  ],
  alternates: { canonical: `https://www.webhjerte.dk${path}` },
  openGraph: {
    title: "Hjemmeside til VVS-firma i Horsens | WebHjerte",
    description:
      "Få en hjemmeside, der får kunder til at ringe. Fast pris fra 2.500 kr og første udkast på 48 timer.",
    url: `https://www.webhjerte.dk${path}`,
    type: "website",
  },
};

const sections = [
  {
    h2: "Kunderne søger på Google, før de ringer",
    paragraphs: [
      "Når en vandhane brister eller varmtvandsbeholderen svigter, søger folk hurtigt efter en VVS-installatør i nærheden. Står du ikke tydeligt på Google med dit navn, dine ydelser og dit område, ringer de til den, der gør.",
      "En hjemmeside gør det let for kunden at forstå, hvad du kan, hvor du arbejder, og hvordan de kontakter dig – uden at skulle lede efter et telefonnummer.",
    ],
  },
  {
    h2: "Det skal med på din VVS-side",
    bullets: [
      "Dine ydelser: service, reparation, installation, varmepumper og badeværelser",
      "Dit arbejdsområde i Horsens og omegn",
      "Et tydeligt telefonnummer, som kan trykkes på mobilen",
      "En kort formular til ikke-akutte henvendelser og tilbud",
      "Billeder af dit arbejde, når du har dem klar",
    ],
  },
  {
    h2: "Lokal SEO fra dag ét",
    paragraphs: [
      "Jeg optimerer siden til søgninger som 'VVS Horsens' og 'VVS-installatør Horsens', og sætter den op, så den er klar til at blive tilføjet til din Google Business-profil.",
    ],
  },
];

const related = [
  {
    href: "/hjemmeside-til-elektriker",
    title: "Hjemmeside til elektriker",
    desc: "Til elektrikere, der vil have flere forespørgsler fra lokale kunder.",
  },
  {
    href: "/hjemmeside-til-haandvaerkere",
    title: "Hjemmeside til håndværkere",
    desc: "Løsninger til VVS, tømrere, malere og andre håndværkere.",
  },
  {
    href: "/seo-horsens",
    title: "SEO Horsens",
    desc: "Bliv fundet af kunder, der søger efter dig lokalt på Google.",
  },
];

const faqs = [
  {
    q: "Hvad koster en hjemmeside til et VVS-firma?",
    a: "Priserne starter fra 2.500 kr for en landingside med dine ydelser, 4.500 kr for Basis (3–5 sider) og 7.500 kr for Standard (op til 8 sider). Alle priser er ekskl. moms.",
  },
  {
    q: "Hvor hurtigt er hjemmesiden klar?",
    a: "En landingside er klar på 5 dage, Basis på 10 dage og Standard på 18 dage. Du ser altid et første udkast inden for 48 timer.",
  },
  {
    q: "Kan jeg få hjemmesiden til at virke på mobil?",
    a: "Ja. Alle sider er mobilvenlige, og telefonnummeret kan trykkes direkte på telefonen, så kunden kan ringe med ét tryk.",
  },
];

export default function HjemmesideTilVvsPage() {
  return (
    <LocalLandingPage
      path={path}
      name="Hjemmeside til VVS-firma"
      serviceType="Webdesign"
      eyebrow="Til VVS-firmaer"
      h1="Hjemmeside til VVS-firma i Horsens – få kunder til at ringe"
      intro="En professionel hjemmeside til dit VVS-firma i Horsens, der viser dine ydelser og dit område tydeligt. Fast pris, og du taler direkte med mig fra første samtale."
      sections={sections}
      faqs={faqs}
      related={related}
    />
  );
}
