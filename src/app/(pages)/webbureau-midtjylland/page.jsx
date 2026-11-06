import LocalLandingPage from "../../components/seo/LocalLandingPage";

const path = "/webbureau-midtjylland";

export const metadata = {
  title: "Webbureau Midtjylland – hjemmesider & AI fra 2.500 kr | WebHjerte",
  description:
    "Webbureau til virksomheder i Midtjylland: Aarhus, Silkeborg, Vejle og resten af regionen. Fast pris fra 2.500 kr, AI-løsninger og direkte kontakt med udvikleren.",
  keywords: [
    "webbureau Midtjylland",
    "webbureau Jylland",
    "webbureau i Jylland",
    "webbureau Østjylland",
    "hjemmeside Midtjylland",
  ],
  alternates: { canonical: `https://www.webhjerte.dk${path}` },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "WebHjerte – webbureau i Horsens" }],
    title: "Webbureau i Midtjylland | WebHjerte",
    description:
      "Hjemmesider og SEO til virksomheder i hele Midtjylland. Fast pris fra 2.500 kr og direkte kontakt med udvikleren.",
    url: `https://www.webhjerte.dk${path}`,
    type: "website",
  },
};

const faqs = [
  {
    q: "Arbejder I kun med virksomheder i Horsens?",
    a: "Nej. Jeg er baseret i Horsens, men arbejder med virksomheder i hele Midtjylland og resten af Danmark. Samarbejdet foregår online via video, telefon og mail, så afstand er ikke en hindring.",
  },
  {
    q: "Hvad koster en hjemmeside fra et webbureau i Midtjylland?",
    a: "Hos WebHjerte starter priserne fra 2.500 kr for en landingside, 4.500 kr for Basis og 7.500 kr for Standard. Skræddersyede løsninger starter fra 14.000 kr. Alle priser er faste og aftales på forhånd.",
  },
  {
    q: "Kan I møde mig fysisk, hvis jeg bor uden for Horsens?",
    a: "I mange tilfælde kan jeg komme ud til jer i Midtjylland, hvis et fysisk møde giver mest værdi. Ellers klarer vi det hele online, hvilket de fleste kunder foretrækker, fordi det er hurtigere.",
  },
  {
    q: "Hvorfor vælge et lille webbureau frem for et stort?",
    a: "Du får direkte kontakt med den, der bygger din hjemmeside, hurtigere svar og lavere priser, fordi du ikke betaler for projektledere og overhead. Til gengæld er jeg ikke det rette valg til meget store enterprise-projekter.",
  },
];

const sections = [
  {
    h2: "Et webbureau for hele Midtjylland",
    paragraphs: [
      "WebHjerte er et lille, lokalt webbureau med base i Horsens – midt i Midtjylland. Jeg hjælper håndværkere, restauranter, saloner og andre små og mellemstore virksomheder med at få en hjemmeside, der er hurtig, flot og synlig på Google.",
      "Fordi samarbejdet foregår digitalt, kan jeg hjælpe virksomheder i hele regionen – og er du i nærheden, mødes jeg gerne ansigt til ansigt.",
    ],
  },
  {
    h2: "Områder jeg arbejder i",
    bullets: [
      "Horsens og omegn",
      "Aarhus og Østjylland",
      "Silkeborg, Skanderborg og Ry",
      "Vejle, Fredericia og Kolding",
      "Randers, Viborg og Herning",
      "Resten af Jylland og hele Danmark – online",
    ],
  },
  {
    h2: "Hvad får du som kunde?",
    bullets: [
      "Professionel hjemmeside til fast pris fra 2.500 kr",
      "Første designudkast inden for 48 timer",
      "Levering typisk på 2–10 dage",
      "SEO og mobiloptimering bygget ind fra start",
      "Direkte kontakt med udvikleren – ingen mellemled",
      "30 dages gratis support efter lancering",
    ],
  },
  {
    h2: "Hvorfor små virksomheder vælger WebHjerte",
    paragraphs: [
      "Mange større bureauer er bygget til store budgetter og lange forløb. Jeg har valgt det modsatte: enkle processer, klare priser og hurtig levering. Du ved, hvad det koster, hvornår det er klar, og hvem du skal ringe til, hvis du har et spørgsmål.",
    ],
  },
  {
    h2: "Hvad er forskellen på et lokalt og et stort webbureau?",
    table: {
      head: ["", "WebHjerte (lokalt, lille)", "Stort bureau"],
      rows: [
        ["Kontakt", "Direkte med udvikleren", "Via projektleder eller account manager"],
        ["Pris", "Fast pris fra 2.500 kr", "Ofte timebaseret, højere startpris"],
        ["Svartid", "Inden for 24 timer", "Varierer"],
        ["Tidsplan", "2–10 dage", "Uger til måneder"],
        ["Bedst til", "Små og mellemstore virksomheder", "Store organisationer og komplekse projekter"],
      ],
    },
  },
  {
    h2: "SEO i Midtjylland",
    paragraphs: [
      "Mange virksomheder i Midtjylland betjener kunder i flere byer. Derfor bygger jeg SEO med både et lokalt og et regionalt perspektiv: ydelsessider, serviceområder og indhold, der svarer på det, kunderne spørger om. Det giver bedre synlighed end én enkelt generel forside.",
    ],
    cta: { href: "/seo-horsens", label: "Læs om lokal SEO" },
  },
  {
    h2: "Find dit område",
    bullets: [
      "Hele Jylland – Skagen til Kolding",
      "Aarhus og Østjylland",
      "Vejle og trekantsområdet",
      "Horsens – mit hjemmemarked",
    ],
    cta: { href: "/webbureau-jylland", label: "Se webbureau Jylland" },
  },
];

const related = [
  {
    href: "/webdesign-horsens",
    title: "Webdesign Horsens",
    desc: "Professionelt webdesign til fast pris.",
  },
  {
    href: "/hjemmeside-pris",
    title: "Hjemmeside pris",
    desc: "Se pakker og priser uden skjulte gebyrer.",
  },
  {
    href: "/portefolje",
    title: "Portefølje",
    desc: "Se eksempler på færdige hjemmesider.",
  },
];

export default function WebbureauMidtjyllandPage() {
  return (
    <LocalLandingPage
      path={path}
      name="Webbureau Midtjylland"
      serviceType="Webbureau"
      eyebrow="Webbureau i Midtjylland"
      h1="Webbureau i Midtjylland – hjemmesider til fast pris"
      intro="WebHjerte er et lokalt webbureau fra Horsens, der bygger hurtige og professionelle hjemmesider til virksomheder i hele Midtjylland. Direkte kontakt med udvikleren og levering på 2–10 dage."
      summary="WebHjerte er et webbureau i Horsens, der bygger hjemmesider til virksomheder i hele Midtjylland: Aarhus, Silkeborg, Vejle, Skanderborg, Randers, Viborg og Herning. Priser fra 2.500 kr, levering på 2–10 dage og direkte kontakt med udvikleren."
      sections={sections}
      faqs={faqs}
      related={related}
    />
  );
}
