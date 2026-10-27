import LocalLandingPage from "../../components/seo/LocalLandingPage";

const path = "/hjemmeside-vedligeholdelse";

export const metadata = {
  title: "Hjemmeside vedligeholdelse og support | WebHjerte",
  description: "Fast månedlig vedligeholdelse af din hjemmeside: opdateringer, backup, sikkerhed og hurtig hjælp. Slip for bekymringer og hold sitet hurtigt og sikkert.",
  keywords: [
  "hjemmeside vedligeholdelse",
  "hjemmeside support",
  "wordpress vedligeholdelse",
  "websupport"
],
  alternates: { canonical: `https://www.webhjerte.dk${path}` },
  openGraph: {
    title: "Hjemmeside vedligeholdelse og support | WebHjerte",
    description: "Fast månedlig vedligeholdelse af din hjemmeside: opdateringer, backup, sikkerhed og hurtig hjælp. Slip for bekymringer og hold sitet hurtigt og sikkert.",
    url: `https://www.webhjerte.dk${path}`,
    type: "website",
  },
};

const faqs = [
  {
    "q": "Hvad koster vedligeholdelse?",
    "a": "Prisen afhænger af hjemmesidens størrelse og behov. Kontakt mig for en fast månedlig pris."
  },
  {
    "q": "Kan I også overtage en hjemmeside, I ikke har bygget?",
    "a": "Ja, efter et kort gennemsyn af sitet kan jeg overtage vedligeholdelsen."
  },
  {
    "q": "Kan jeg opsige aftalen?",
    "a": "Ja. Aftalen kan opsiges med kort varsel, så du er ikke bundet."
  },
  {
    "q": "Hvad hvis min hjemmeside er blevet hacket?",
    "a": "Kontakt mig hurtigst muligt. Jeg hjælper med at rense og gendanne sitet og lukke sikkerhedshullet."
  }
];

const sections = [
  {
    "h2": "Hvorfor vedligeholde din hjemmeside?",
    "paragraphs": [
      "Forældede plugins og systemer er den hyppigste årsag til hackede hjemmesider. Regelmæssig vedligeholdelse beskytter dit site, holder det hurtigt og sikrer, at alt virker, når kunderne kommer forbi."
    ]
  },
  {
    "h2": "Det er med i aftalen",
    "bullets": [
      "Opdatering af WordPress, temaer og plugins",
      "Automatisk backup og mulighed for gendannelse",
      "Overvågning af oppetid og sikkerhed",
      "Små rettelser af tekster og billeder",
      "Hastighedstjek og løbende optimering",
      "Direkte hjælp ved problemer"
    ]
  },
  {
    "h2": "Fast pris, ingen overraskelser",
    "paragraphs": [
      "Du betaler en fast månedlig pris, der aftales på forhånd. Er noget uden for aftalen, får du altid besked og et tilbud, før jeg går i gang."
    ]
  }
];

const related = [
  {
    "href": "/wordpress-hjemmeside",
    "title": "WordPress hjemmeside",
    "desc": "Fleksibel hjemmeside du kan redigere."
  },
  {
    "href": "/gratis-seo-tjek-horsens",
    "title": "Gratis SEO-tjek",
    "desc": "Få en gratis gennemgang af dit site."
  },
  {
    "href": "/kontakt",
    "title": "Kontakt",
    "desc": "Skriv til mig om en aftale."
  }
];

export default function HjemmesideVedligeholdelsePage() {
  return (
    <LocalLandingPage
      path={path}
      name="Hjemmeside vedligeholdelse"
      serviceType="Vedligeholdelse af hjemmeside"
      area="Danmark"
      eyebrow="Vedligeholdelse og support"
      h1="Hjemmeside vedligeholdelse – hold dit site sikkert og hurtigt"
      intro="En hjemmeside er ikke færdig ved lancering. Med en fast månedlig aftale sørger jeg for opdateringer, backup, sikkerhed og rettelser, så du kan koncentrere dig om din forretning."
      summary={[["Hvad", "Fast månedlig vedligeholdelse af hjemmesider fra WebHjerte i Horsens."], ["Indhold", "Opdateringer, backup, sikkerhedsovervågning, små rettelser og hastighedstjek."], ["Pris", "Fast månedlig pris, aftalt på forhånd."], ["Binding", "Ingen lang binding – aftalen kan opsiges med kort varsel."], ["Område", "Hele Danmark."]]}
      sections={sections}
      faqs={faqs}
      related={related}
    />
  );
}
