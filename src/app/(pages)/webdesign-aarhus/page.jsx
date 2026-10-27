import LocalLandingPage from "../../components/seo/LocalLandingPage";

const path = "/webdesign-aarhus";

export const metadata = {
  title: "Webdesign Aarhus – fast pris fra 2.500 kr | WebHjerte",
  description: "Webdesign til virksomheder i Aarhus: moderne, hurtige hjemmesider til fast pris fra 2.500 kr. Første udkast på 48 timer og direkte kontakt med udvikleren.",
  keywords: [
  "webdesign Aarhus",
  "webbureau Aarhus",
  "hjemmeside Aarhus",
  "webdesigner Aarhus"
],
  alternates: { canonical: `https://www.webhjerte.dk${path}` },
  openGraph: {
    title: "Webdesign Aarhus – fast pris fra 2.500 kr | WebHjerte",
    description: "Webdesign til virksomheder i Aarhus: moderne, hurtige hjemmesider til fast pris fra 2.500 kr. Første udkast på 48 timer og direkte kontakt med udvikleren.",
    url: `https://www.webhjerte.dk${path}`,
    type: "website",
  },
};

const faqs = [
  {
    "q": "Arbejder du med virksomheder i Aarhus?",
    "a": "Ja. Mange af mine kunder er uden for Horsens. Det meste foregår via video, mail og telefon, og jeg kan komme til Aarhus, hvis du ønsker et fysisk møde."
  },
  {
    "q": "Hvad koster en hjemmeside i Aarhus?",
    "a": "Priserne er de samme uanset hvor du bor: fra 2.500 kr for en landingside, 4.500 kr for Basis og 7.500 kr for Standard. Skræddersyede løsninger starter fra 14.000 kr."
  },
  {
    "q": "Hvor hurtigt kan hjemmesiden være klar?",
    "a": "Du får et designudkast inden for 48 timer, og en komplet hjemmeside er typisk live på 10-18 dage."
  },
  {
    "q": "Kan I hjælpe med SEO i Aarhus?",
    "a": "Ja. Grundlæggende SEO er med i alle pakker, og jeg kan hjælpe med lokal SEO, så du bliver fundet af kunder i Aarhus."
  }
];

const sections = [
  {
    "h2": "Webdesign til Aarhus' virksomheder",
    "paragraphs": [
      "Aarhus er et konkurrencepræget marked, hvor en hjemmeside skal skille sig ud for at få opmærksomhed. Jeg designer sider, der forklarer dit tilbud hurtigt, bygger tillid og gør det nemt for kunderne at tage kontakt.",
      "Jeg er baseret i Horsens, kun en halv time fra Aarhus, og arbejder primært online. Vil du mødes, kommer jeg gerne forbi."
    ]
  },
  {
    "h2": "Det får du med",
    "bullets": [
      "Skræddersyet design uden genbrugte skabeloner",
      "Mobilvenligt layout og hurtig indlæsning",
      "SEO bygget ind fra start, så du kan blive fundet i Aarhus",
      "Kontaktformular og tydelige call-to-actions",
      "SSL og sikker opsætning",
      "30 dages gratis support efter lancering"
    ]
  },
  {
    "h2": "Fast pris og hurtig levering",
    "paragraphs": [
      "Priserne starter fra 2.500 kr for en landingside og 4.500 kr for en Basis-hjemmeside. Du kender prisen, før jeg går i gang, og en komplet hjemmeside er typisk klar på 10-18 dage."
    ]
  }
];

const related = [
  {
    "href": "/webdesign-horsens",
    "title": "Webdesign Horsens",
    "desc": "Webdesign fra webbureauet i Horsens."
  },
  {
    "href": "/webbureau-midtjylland",
    "title": "Webbureau Midtjylland",
    "desc": "Hjemmesider til hele regionen."
  },
  {
    "href": "/hjemmeside-pris",
    "title": "Hjemmeside pris",
    "desc": "Se faste priser og pakker."
  }
];

export default function WebdesignAarhusPage() {
  return (
    <LocalLandingPage
      path={path}
      name="Webdesign Aarhus"
      serviceType="Webdesign"
      area="Aarhus"
      eyebrow="Webdesign i Aarhus"
      h1="Webdesign i Aarhus – moderne hjemmesider til fast pris"
      intro="Jeg designer og bygger hurtige hjemmesider til virksomheder i Aarhus og omegn. Du får første designudkast på 48 timer, en fast pris fra 2.500 kr og direkte kontakt med mig – ingen mellemled."
      sections={sections}
      faqs={faqs}
      related={related}
    />
  );
}
