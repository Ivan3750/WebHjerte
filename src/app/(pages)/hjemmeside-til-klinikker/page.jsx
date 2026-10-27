import LocalLandingPage from "../../components/seo/LocalLandingPage";

const path = "/hjemmeside-til-klinikker";

export const metadata = {
  title: "Hjemmeside til klinikker i Horsens | WebHjerte",
  description: "Hjemmeside til klinikker, tandlæger, fysioterapeuter og behandlere i Horsens. Skab tillid, få flere bookinger og bliv fundet lokalt. Fast pris fra 2.500 kr.",
  keywords: [
  "hjemmeside til klinikker",
  "hjemmeside til fysioterapeut",
  "hjemmeside til tandlæge",
  "hjemmeside til behandler"
],
  alternates: { canonical: `https://www.webhjerte.dk${path}` },
  openGraph: {
    title: "Hjemmeside til klinikker i Horsens | WebHjerte",
    description: "Hjemmeside til klinikker, tandlæger, fysioterapeuter og behandlere i Horsens. Skab tillid, få flere bookinger og bliv fundet lokalt. Fast pris fra 2.500 kr.",
    url: `https://www.webhjerte.dk${path}`,
    type: "website",
  },
};

const faqs = [
  {
    "q": "Kan hjemmesiden have online booking?",
    "a": "Ja. Jeg kan integrere dit eksisterende bookingsystem eller sætte en enkel bookingformular op."
  },
  {
    "q": "Hvad koster en hjemmeside til en klinik?",
    "a": "Fra 4.500 kr for en Basis-hjemmeside på 3-5 sider. Behov for flere ydelsessider eller booking giver en skræddersyet pris."
  },
  {
    "q": "Er hjemmesiden GDPR-sikker?",
    "a": "Jeg opsætter cookiesamtykke og en privatlivspolitik og undgår at indsamle unødige data."
  },
  {
    "q": "Hjælper du med at blive fundet lokalt?",
    "a": "Ja. Lokal SEO er en vigtig del af opgaven, så patienter i Horsens kan finde dig."
  }
];

const sections = [
  {
    "h2": "Tillid er alt i sundhedsbranchen",
    "paragraphs": [
      "Nye patienter vil hurtigt vide, hvem du er, hvad du behandler, og hvad det koster. Jeg strukturerer siden, så de svar findes med få klik, og så din faglighed kommer tydeligt frem."
    ]
  },
  {
    "h2": "Det får din klinik",
    "bullets": [
      "Tydelig præsentation af behandlere og uddannelser",
      "Side for hver ydelse, der også hjælper dig på Google",
      "Online booking eller link til dit bookingsystem",
      "Praktisk info: adresse, åbningstider, kort og parkering",
      "Hurtig, mobilvenlig og tilgængelig hjemmeside",
      "GDPR-venlig opsætning med cookiesamtykke"
    ]
  },
  {
    "h2": "Lokal synlighed i Horsens",
    "paragraphs": [
      "De fleste patienter søger lokalt, fx 'fysioterapeut Horsens'. Jeg bygger lokal SEO ind fra start og hjælper dig med at komme op i søgeresultater og på kortet."
    ]
  }
];

const related = [
  {
    "href": "/seo-horsens",
    "title": "SEO Horsens",
    "desc": "Bliv fundet lokalt på Google."
  },
  {
    "href": "/hjemmeside-pris",
    "title": "Hjemmeside pris",
    "desc": "Se faste priser."
  },
  {
    "href": "/portefolje",
    "title": "Portefølje",
    "desc": "Se tidligere projekter."
  }
];

export default function HjemmesideKlinikkerPage() {
  return (
    <LocalLandingPage
      path={path}
      name="Hjemmeside til klinikker"
      serviceType="Webdesign til klinikker"
      area="Horsens"
      eyebrow="Til klinikker og behandlere"
      h1="Hjemmeside til klinikker – skab tillid og få flere bookinger"
      intro="Patienter vælger ofte klinik efter, hvor professionel og tryg hjemmesiden virker. Jeg bygger hjemmesider til klinikker og behandlere, der forklarer dine ydelser klart og gør det nemt at booke tid."
      sections={sections}
      faqs={faqs}
      related={related}
    />
  );
}
