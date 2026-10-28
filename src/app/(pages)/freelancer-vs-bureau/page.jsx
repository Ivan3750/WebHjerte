import LocalLandingPage from "../../components/seo/LocalLandingPage";

const path = "/freelancer-vs-bureau";

export const metadata = {
  title: "Freelancer eller webbureau? Sådan vælger du | WebHjerte",
  description:
    "Freelancer eller webbureau til din hjemmeside? Se forskellene på ansvar, pris, kommunikation og support, og hvilken løsning der passer til din virksomhed.",
  keywords: [
    "freelancer eller bureau hjemmeside",
    "webbureau eller freelancer",
    "hvem skal bygge min hjemmeside",
  ],
  alternates: { canonical: `https://www.webhjerte.dk${path}` },
  openGraph: {
    title: "Freelancer eller webbureau? | WebHjerte",
    description:
      "Forskellen på en freelancer og et webbureau, og hvordan du vælger den rigtige til din hjemmeside.",
    url: `https://www.webhjerte.dk${path}`,
    type: "article",
  },
};

const sections = [
  {
    h2: "Hvem har ansvaret for din hjemmeside?",
    paragraphs: [
      "En freelancer er typisk én person, der både designer, bygger og vedligeholder siden. Et webbureau har ofte flere roller: en projektleder, en designer og en udvikler. Begge modeller kan fungere, men de giver forskellig kontakt.",
      "Hos WebHjerte er der én person fra første samtale til lancering. Du taler direkte med den, der bygger siden, og får ikke videreført dine ønsker gennem flere led.",
    ],
  },
  {
    h2: "Pris og gennemsigtighed",
    paragraphs: [
      "Et større bureau har typisk højere faste omkostninger, som også skal dækkes af prisen. En freelancer arbejder ofte timebaseret, hvilket gør det svært at vide det endelige beløb på forhånd.",
      "Hos WebHjerte starter pakkerne på fast pris: 2.500 kr for en landingside, 4.500 kr for Basis og 7.500 kr for Standard, alle ekskl. moms.",
    ],
  },
  {
    h2: "Kommunikation og tid til første udkast",
    bullets: [
      "Freelancer: direkte kontakt, men kapacitet og tilgængelighed kan variere",
      "Større bureau: fast team og proces, men ofte længere svartider og flere godkendelsestrin",
      "WebHjerte: direkte kontakt med udvikleren og første udkast inden for 48 timer",
    ],
  },
  {
    h2: "Hvad du bør spørge om, uanset valg",
    bullets: [
      "Ejer jeg domæne og kode, og kan jeg tage dem med, hvis jeg skifter leverandør?",
      "Hvad er inkluderet efter lancering, og hvad koster vedligeholdelse?",
      "Hvem svarer, når jeg har et problem, og hvor hurtigt?",
      "Godkender jeg designet, før der bygges?",
    ],
  },
];

const related = [
  {
    href: "/webbureau-midtjylland",
    title: "Webbureau Midtjylland",
    desc: "Hjemmesider til virksomheder i hele Midtjylland.",
  },
  {
    href: "/hjemmeside-pris",
    title: "Hvad koster en hjemmeside?",
    desc: "Se de faste priser og hvad de dækker.",
  },
  {
    href: "/om-mig",
    title: "Om mig",
    desc: "Læs hvem der står bag WebHjerte og hvordan vi arbejder.",
  },
];

const faqs = [
  {
    q: "Er en freelancer billigere end et webbureau?",
    a: "Ikke nødvendigvis. Prisen afhænger af omfanget og af, om den er fast eller timebaseret. Hos WebHjerte får du en fast pris, så du ved det endelige beløb, før vi går i gang.",
  },
  {
    q: "Hvad sker der, hvis jeg skifter leverandør senere?",
    a: "Domæne og kode tilhører dig. Det skal stå klart i aftalen, og det er et af de første punkter, du bør tjekke hos alle leverandører.",
  },
  {
    q: "Hvem bør vælge et større webbureau?",
    a: "Store virksomheder med komplekse behov, flere afdelinger og et internt team, der skal koordinere arbejdet, har ofte gavn af et bureau. For de fleste små og mellemstore virksomheder er en direkte løsning enklere.",
  },
];

export default function FreelancerVsBureauPage() {
  return (
    <LocalLandingPage
      path={path}
      name="Freelancer eller webbureau"
      serviceType="Webdesign"
      eyebrow="Guide til valg af leverandør"
      h1="Freelancer eller webbureau? Sådan vælger du til din hjemmeside"
      intro="Begge valg kan give en god hjemmeside. Her er forskellene på ansvar, pris og kommunikation, og de spørgsmål du bør stille, før du beslutter dig."
      sections={sections}
      faqs={faqs}
      related={related}
    />
  );
}
