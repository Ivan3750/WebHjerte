import LocalLandingPage from "../../components/seo/LocalLandingPage";

const path = "/seo-horsens";

export const metadata = {
  title: "SEO Horsens – flere lokale kunder fra Google & AI | WebHjerte",
  description:
    "SEO i Horsens: lokal SEO, teknisk optimering og AI-synlighed, så kunder finder dig i Google og ChatGPT. Start med et gratis SEO-tjek.",
  keywords: [
    "SEO Horsens",
    "SEO bureau Horsens",
    "lokal SEO Horsens",
    "horsens SEO",
    "søgemaskineoptimering Horsens",
  ],
  alternates: { canonical: `https://www.webhjerte.dk${path}` },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "WebHjerte – webbureau i Horsens" }],
    title: "SEO i Horsens – bliv fundet af lokale kunder | WebHjerte",
    description:
      "Lokal SEO og teknisk optimering til virksomheder i Horsens. Start med et gratis SEO-tjek.",
    url: `https://www.webhjerte.dk${path}`,
    type: "website",
  },
};

const faqs = [
  {
    q: "Hvad er SEO, og hvorfor har min virksomhed brug for det?",
    a: "SEO (søgemaskineoptimering) er arbejdet med at gøre din hjemmeside lettere at finde, når potentielle kunder søger på Google. Søger folk efter fx 'tømrer Horsens' eller 'frisør Horsens', er det de virksomheder, der er synlige i søgeresultaterne, som får henvendelserne.",
  },
  {
    q: "Kan I love mig en førsteplads på Google?",
    a: "Nej, og vær skeptisk over for alle, der gør det. Google bestemmer selv placeringerne. Det jeg kan gøre, er at sørge for, at din hjemmeside er teknisk i orden, har det rigtige indhold og er optimeret til lokale søgninger – så du har de bedste forudsætninger for at stige.",
  },
  {
    q: "Hvor lang tid går der, før SEO virker?",
    a: "Typisk begynder man at se bevægelse efter 2-3 måneder, og mere markante resultater kommer efter 6 måneder eller mere, afhængigt af konkurrencen og hvor din side starter fra.",
  },
  {
    q: "Hvad koster et SEO-tjek?",
    a: "Det første SEO- og web-tjek er gratis og uforpligtende. Du får et overblik over, hvad der virker, og hvad der bør rettes – uden binding.",
  },
  {
    q: "Skal jeg have en ny hjemmeside for at få gavn af SEO?",
    a: "Ikke nødvendigvis. Mange hjemmesider kan forbedres markant med de rigtige tekniske rettelser og nyt indhold. Er hjemmesiden derimod meget langsom eller forældet, kan en ny hjemmeside med SEO bygget ind være den hurtigste vej.",
  },
];

const sections = [
  {
    h2: "SEO, der giver lokale kunder – ikke bare trafik",
    paragraphs: [
      "De fleste kunder til en lokal virksomhed starter med en søgning på Google. Er du ikke synlig, når de søger, vælger de en konkurrent. Med SEO sørger jeg for, at din hjemmeside bliver fundet af de personer i Horsens og omegn, der aktivt leder efter det, du tilbyder.",
      "Jeg fokuserer på søgninger, der faktisk fører til henvendelser, frem for tomme besøgstal. En hjemmeside med få, men relevante besøgende, der ringer eller skriver, er mere værd end tusind tilfældige klik.",
    ],
  },
  {
    h2: "Det indeholder min SEO-indsats",
    bullets: [
      "Gratis SEO- og web-tjek, der afdækker de vigtigste problemer og muligheder",
      "Søgeordsanalyse tilpasset din branche og dit lokalområde",
      "Teknisk SEO: hastighed, mobilvisning, sitemap og at Google kan finde alle dine sider",
      "On-page SEO: titler, beskrivelser, overskrifter og interne links",
      "Lokal SEO: Google Virksomhedsprofil, lokale oplysninger og konsistente kontaktdata",
      "Indhold, der besvarer dine kunders spørgsmål og styrker din troværdighed",
      "Opfølgning på data fra Google Search Console, så vi ser, hvad der virker",
    ],
  },
  {
    h2: "Start med et gratis SEO-tjek",
    paragraphs: [
      "Er du i tvivl om, hvor din hjemmeside står, er det bedste første skridt et gratis SEO-tjek. Du får en gennemgang af hastighed, mobilvenlighed, tekniske fejl og synlighed – og et konkret billede af, hvad der bør prioriteres først.",
    ],
  },
  {
    h2: "SEO og AI-søgning",
    paragraphs: [
      "Flere og flere finder svar via AI-assistenter og AI-oversigter i søgeresultaterne. Derfor bygger jeg også hjemmesider, så de er lette for både Google og AI at forstå: tydelig struktur, klare svar og korrekte oplysninger om din virksomhed. Læs mere om AI SEO nedenfor.",
    ],
  },
  {
    h2: "Hvad er lokal SEO?",
    paragraphs: [
      "Lokal SEO er søgemaskineoptimering med fokus på søgninger, hvor kunden leder efter noget i nærheden – “VVS Horsens”, “frisør Horsens”, “webbureau Horsens”. Google viser typisk et kort med tre virksomheder og derefter de almindelige resultater. For at komme med skal Google forstå, hvad du tilbyder, hvor du holder til, og at du er troværdig.",
      "De vigtigste faktorer er relevans (passer din side til søgningen?), afstand (hvor tæt er du på kunden?) og prominens (hvor kendt og anmeldt er du?). Du kan påvirke relevans og prominens markant – og det er dér, jeg hjælper.",
    ],
  },
  {
    h2: "Fire trin i min SEO-proces",
    steps: [
      { title: "Gratis SEO-tjek", text: "Jeg gennemgår hastighed, mobilvisning, indeksering og indhold og fortæller ærligt, hvad der skal ordnes først." },
      { title: "Søgeordsanalyse", text: "Jeg finder de søgninger, dine kunder bruger, og vurderer, hvor realistisk det er at ranke på dem." },
      { title: "Optimering og indhold", text: "Titler, overskrifter, ydelsessider, FAQ og lokale oplysninger sættes op, så siden matcher søgningerne." },
      { title: "Måling og justering", text: "Jeg følger Google Search Console og analytics og justerer løbende, så du ser, hvad der virker." },
    ],
  },
  {
    h2: "Google Virksomhedsprofil og lokale signaler",
    paragraphs: [
      "Din Google Virksomhedsprofil er ofte det første, en lokal kunde ser. Den skal være verificeret og komplet, med rigtige kategorier, åbningstider, billeder og svar på anmeldelser. Samtidig skal navn, adresse og telefonnummer være identiske på hjemmesiden og i kataloger.",
    ],
    bullets: [
      "Vælg primær og sekundære kategorier med omhu.",
      "Bed tilfredse kunder om anmeldelser og besvar dem alle.",
      "Brug samme navn og kontaktoplysninger overalt.",
      "Opret ydelsessider for hver hovedydelse og omtal dit serviceområde.",
    ],
  },
  {
    h2: "Typiske SEO-fejl hos lokale virksomheder",
    bullets: [
      "Kun én side, der forsøger at ranke på alle ydelser.",
      "Titler som “Forside” eller kun firmanavnet.",
      "Langsom mobilside med tunge billeder.",
      "Manglende eller forkert Google Virksomhedsprofil.",
      "Ingen interne links mellem siderne.",
      "Ingen måling – man ved ikke, hvad der virker.",
    ],
    cta: { href: "/blog/seo-tjekliste-lokale-virksomheder", label: "Gå SEO-tjeklisten igennem" },
  },
  {
    h2: "Realistiske forventninger",
    paragraphs: [
      "SEO er ikke en knap, man trykker på. Ingen kan love en bestemt placering på en bestemt dato. Til gengæld kan du forvente, at en teknisk sund hjemmeside med klare ydelsessider og en opdateret Google Virksomhedsprofil bliver mere synlig over 2–6 måneder. Jeg fortæller dig ærligt, hvilke søgninger der er realistiske, og hvilke der kræver mere tid og indsats.",
    ],
  },
];

const related = [
  {
    href: "/gratis-seo-tjek-horsens",
    title: "Gratis SEO-tjek",
    desc: "Få en gratis gennemgang af din hjemmeside.",
  },
  {
    href: "/ai-seo",
    title: "AI SEO",
    desc: "Bliv fundet i AI-søgning og AI-oversigter.",
  },
  {
    href: "/webdesign-horsens",
    title: "Webdesign Horsens",
    desc: "Hjemmesider med SEO bygget ind fra start.",
  },
];

export default function SeoHorsensPage() {
  return (
    <LocalLandingPage
      path={path}
      name="SEO Horsens"
      serviceType="Søgemaskineoptimering"
      eyebrow="SEO i Horsens"
      h1="SEO i Horsens – bliv fundet af kunder, der søger efter dig"
      intro="Lokal SEO og teknisk optimering til små og mellemstore virksomheder i Horsens. Jeg sørger for, at din hjemmeside er hurtig, korrekt opsat og relevant for de søgninger, dine kunder foretager."
      summary="SEO i Horsens handler om at blive fundet af lokale kunder, når de søger på Google og i AI-assistenter. WebHjerte hjælper med teknisk SEO, lokal SEO, indhold og AI-synlighed – og starter altid med et gratis SEO-tjek. AI SEO-pakker starter fra 3.500 kr."
      sections={sections}
      faqs={faqs}
      related={related}
    />
  );
}
