import LocalLandingPage from "../../components/seo/LocalLandingPage";

const path = "/webdesign-horsens";

export const metadata = {
  title: "Webdesign Horsens – professionelt webdesign fra 2.500 kr | WebHjerte",
  description:
    "Webdesigner i Horsens: moderne, hurtigt webdesign der får besøgende til at kontakte dig. Fast pris fra 2.500 kr, første udkast på 48 timer. Få et gratis tilbud.",
  keywords: [
    "webdesign Horsens",
    "webdesigner Horsens",
    "webdesign firma Horsens",
    "hjemmeside Horsens",
    "professionelt webdesign",
  ],
  alternates: { canonical: `https://www.webhjerte.dk${path}` },
  openGraph: {
    title: "Webdesign i Horsens – professionelt og til fast pris | WebHjerte",
    description:
      "Moderne webdesign til virksomheder i Horsens. Fast pris fra 2.500 kr og første designudkast på 48 timer.",
    url: `https://www.webhjerte.dk${path}`,
    type: "website",
  },
};

const faqs = [
  {
    q: "Hvad koster webdesign i Horsens?",
    a: "Priserne starter fra 2.500 kr for en landingside. En Basis-hjemmeside på 3-5 sider koster 4.500 kr, og Standard med op til 8 sider koster 7.500 kr. Større og skræddersyede løsninger starter fra 14.000 kr. Prisen er fast og aftales, før vi går i gang.",
  },
  {
    q: "Hvor hurtigt kan I levere et webdesign?",
    a: "Du får et første designudkast inden for 48 timer efter vores samtale. En komplet hjemmeside er typisk klar på 10-18 dage, afhængigt af pakke og hvor hurtigt du leverer tekster og billeder.",
  },
  {
    q: "Skal jeg møde op fysisk i Horsens?",
    a: "Det er ikke nødvendigt. Det meste foregår via video, mail og telefon, men er du i Horsens-området, mødes jeg gerne til en kop kaffe, hvis du foretrækker det.",
  },
  {
    q: "Kan jeg selv rette i hjemmesiden bagefter?",
    a: "Ja. Med en WordPress- eller CMS-løsning kan du selv opdatere tekster og billeder. Ellers kan jeg stå for opdateringer til en fast månedlig pris. Du får 30 dages gratis support efter lancering.",
  },
  {
    q: "Hvad hvis jeg ikke bryder mig om designet?",
    a: "Du godkender designet, før jeg bygger hjemmesiden. Er du ikke tilfreds med det første udkast, betaler du 0 kr for designet.",
  },
];

const sections = [
  {
    h2: "Webdesign, der arbejder for din virksomhed",
    paragraphs: [
      "Et godt webdesign handler ikke kun om, hvordan siden ser ud. Det handler om, at en besøgende på få sekunder forstår, hvad du tilbyder, stoler på dig og ved, hvordan de kontakter dig. Derfor starter jeg altid med at forstå din virksomhed og dine kunder, før jeg åbner en designfil.",
      "Som webdesigner i Horsens kender jeg det lokale marked. Jeg designer til virksomheder, der gerne vil findes af kunder i Horsens og omegn, og som vil have en hjemmeside, der er enkel at bruge både på mobil og computer.",
    ],
  },
  {
    h2: "Det får du med i dit webdesign",
    bullets: [
      "Skræddersyet design tilpasset dit brand, dine farver og din målgruppe – ikke en genbrugt skabelon",
      "Mobilvenligt layout, der fungerer på alle skærme",
      "Hurtig indlæsning, som både kunder og Google belønner",
      "Grundlæggende SEO bygget ind: titler, beskrivelser, overskrifter og struktur",
      "Kontaktformular og tydelige call-to-actions, der gør det nemt at få fat i dig",
      "Sikker hosting-opsætning og SSL, så hjemmesiden er tryg at besøge",
      "30 dages gratis support efter lancering",
    ],
  },
  {
    h2: "Hvorfor vælge en lokal webdesigner i Horsens?",
    paragraphs: [
      "Hos mig taler du direkte med den person, der designer og bygger din hjemmeside. Der er ingen projektledere, ingen mellemled og ingen ventetid på svar. Det gør processen hurtigere, og det betyder, at dine ønsker ender på hjemmesiden i stedet for at gå tabt undervejs.",
      "Jeg bruger moderne værktøjer, herunder AI, til at arbejde hurtigere. Det betyder, at du betaler for resultatet frem for for timer – og derfor kan jeg tilbyde faste priser fra 2.500 kr.",
    ],
  },
  {
    h2: "Sådan foregår et webdesignprojekt",
    paragraphs: [
      "Først tager vi en uforpligtende snak om dine mål. Derefter får du et designudkast inden for 48 timer, som vi tilretter, indtil du er tilfreds. Når designet er godkendt, bygger jeg hjemmesiden, tester den på mobil og computer og sætter den i luften. Du kan se eksempler på tidligere projekter i min portefølje.",
    ],
  },
];

const related = [
  {
    href: "/hjemmeside-pris",
    title: "Hjemmeside pris",
    desc: "Se de faste priser og hvad hver pakke indeholder.",
  },
  {
    href: "/portefolje",
    title: "Portefølje",
    desc: "Se eksempler på hjemmesider, jeg har lavet.",
  },
  {
    href: "/seo-horsens",
    title: "SEO Horsens",
    desc: "Bliv fundet på Google af kunder i dit lokalområde.",
  },
];

export default function WebdesignHorsensPage() {
  return (
    <LocalLandingPage
      path={path}
      name="Webdesign Horsens"
      serviceType="Webdesign"
      eyebrow="Webdesign i Horsens"
      h1="Webdesign i Horsens – professionelt design til fast pris"
      intro="Jeg designer og bygger moderne, hurtige hjemmesider til virksomheder i Horsens. Du får et første designudkast på 48 timer, fast pris fra 2.500 kr og direkte kontakt med mig – ingen mellemled."
      sections={sections}
      faqs={faqs}
      related={related}
    />
  );
}
