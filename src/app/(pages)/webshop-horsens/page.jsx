import LocalLandingPage from "../../components/seo/LocalLandingPage";

const path = "/webshop-horsens";

export const metadata = {
  title: "Webshop Horsens – professionel webshop til fast pris | WebHjerte",
  description: "Få en hurtig og overskuelig webshop i Horsens. Fast pris, nem betaling og levering, og SEO fra start. Få et gratis og uforpligtende tilbud.",
  keywords: [
  "webshop Horsens",
  "lav en webshop",
  "webshop pris",
  "webshop til små virksomheder"
],
  alternates: { canonical: `https://www.webhjerte.dk${path}` },
  openGraph: {
    title: "Webshop Horsens – professionel webshop til fast pris | WebHjerte",
    description: "Få en hurtig og overskuelig webshop i Horsens. Fast pris, nem betaling og levering, og SEO fra start. Få et gratis og uforpligtende tilbud.",
    url: `https://www.webhjerte.dk${path}`,
    type: "website",
  },
};

const faqs = [
  {
    "q": "Hvad koster en webshop?",
    "a": "Prisen afhænger af antal produkter og funktioner. Kontakt mig for et fast tilbud, typisk efter en kort samtale om dine behov."
  },
  {
    "q": "Kan jeg selv tilføje produkter?",
    "a": "Ja. Jeg sætter shoppen op, så du selv kan oprette og rette produkter, priser og lager."
  },
  {
    "q": "Hvilke betalingsløsninger kan jeg bruge?",
    "a": "Typisk kort og MobilePay via en dansk betalingsudbyder. Vi vælger sammen den løsning, der passer til din forretning."
  },
  {
    "q": "Hvor lang tid tager det?",
    "a": "En enkel webshop er ofte klar på 3-5 uger, afhængigt af antal produkter og hvor hurtigt du leverer billeder og tekster."
  }
];

const sections = [
  {
    "h2": "En webshop der sælger",
    "paragraphs": [
      "En god webshop gør det nemt at finde produktet, forstå prisen og gennemføre købet. Jeg bygger shops med klar struktur, hurtige sider og en enkel kassefunktion, så færre kunder falder fra undervejs."
    ]
  },
  {
    "h2": "Det kan din webshop",
    "bullets": [
      "Produktsider med billeder, varianter og lagerstatus",
      "Sikker betaling med kort og MobilePay via din betalingsudbyder",
      "Mobilvenligt design, hvor de fleste køber",
      "SEO-venlige produkt- og kategorisider",
      "Nem administration, så du selv kan tilføje og rette produkter",
      "Opsætning af fragt og moms efter danske regler"
    ]
  },
  {
    "h2": "Fra idé til åben butik",
    "paragraphs": [
      "Vi starter med en uforpligtende snak om dine produkter og din målgruppe. Derefter får du et designudkast, jeg bygger shoppen, og vi tester hele købsforløbet sammen, før den åbner. Efter lancering får du 30 dages gratis support."
    ]
  }
];

const related = [
  {
    "href": "/wordpress-hjemmeside",
    "title": "WordPress hjemmeside",
    "desc": "Fleksibel løsning du selv kan redigere."
  },
  {
    "href": "/hjemmeside-pris",
    "title": "Hjemmeside pris",
    "desc": "Se priser og pakker."
  },
  {
    "href": "/seo-horsens",
    "title": "SEO Horsens",
    "desc": "Bliv fundet på Google."
  }
];

export default function WebshopHorsensPage() {
  return (
    <LocalLandingPage
      path={path}
      name="Webshop Horsens"
      serviceType="Webshop"
      area="Horsens"
      eyebrow="Webshop i Horsens"
      h1="Webshop i Horsens – nem at drive, nem at købe i"
      intro="Jeg bygger overskuelige webshops til små og mellemstore virksomheder. Du får en hurtig butik med nem betaling, mobilvenligt design og SEO fra start – til en pris du kender på forhånd."
      sections={sections}
      faqs={faqs}
      related={related}
    />
  );
}
