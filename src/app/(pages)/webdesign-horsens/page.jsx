import LocalLandingPage from "../../components/seo/LocalLandingPage";

const path = "/webdesign-horsens";

export const metadata = {
  title: "Webdesign Horsens – design på 48 timer, fra 2.500 kr | WebHjerte",
  description:
    "Webdesigner i Horsens: skræddersyet design, hurtig kode og SEO til fast pris fra 2.500 kr. Første udkast på 48 timer – 0 kr, hvis du ikke kan lide det.",
  keywords: [
    "webdesign Horsens",
    "webdesigner Horsens",
    "webdesign firma Horsens",
    "hjemmeside Horsens",
    "professionelt webdesign",
  ],
  alternates: { canonical: `https://www.webhjerte.dk${path}` },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "WebHjerte – webbureau i Horsens" }],
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
    a: "Du får et første designudkast inden for 48 timer efter vores samtale. En komplet hjemmeside er typisk klar på 2–10 dage, afhængigt af pakke og hvor hurtigt du leverer tekster og billeder.",
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
    h2: "Din webdesigner i Horsens – helt bogstaveligt",
    paragraphs: [
      "Jeg sidder selv i Horsens. Det betyder, at jeg kender byen, oplandet og de virksomheder, dine kunder sammenligner dig med. Og vil du hellere tage snakken ansigt til ansigt end på video, kan vi mødes over en kop kaffe i byen.",
      "Horsens er en by med et stærkt lokalt erhvervsliv – fra håndværkere og butikker i midtbyen til virksomheder ude omkring Hedensted, Brædstrup og Gedved. Fælles for dem er, at kunderne søger lokalt, og at den, der er nemmest at finde og forstå, får opkaldet.",
    ],
    visual: { name: "fjord", caption: "Horsens Fjord – hjemmebane for WebHjerte" },
    callout: {
      tone: "fact",
      title: "Godt at vide",
      text: "Du taler med den, der designer og bygger din side – fra første samtale til lancering. Ingen projektledere og ingen mellemled.",
    },
  },
  {
    h2: "Sådan søger kunderne i Horsens og omegn",
    paragraphs: [
      "De fleste lokale søgninger er korte: en ydelse og et bynavn. Eksemplerne herunder viser, hvad dine kunder typisk skriver – og hvad din hjemmeside skal kunne svare på med det samme.",
    ],
    visual: { name: "search-typing", queries: ["webdesign Horsens", "frisør Horsens", "tømrer Horsens", "VVS Hedensted", "restaurant Horsens"], caption: "Eksempler på lokale søgninger i Horsens" },
    cards: [
      { title: "Horsens by", tag: "Midtbyen", text: "Butikker, restauranter og klinikker, hvor åbningstider, adresse og booking skal stå klart." },
      { title: "Oplandet", tag: "Omegn", text: "Brædstrup, Gedved, Østbirk, Hovedgård – og Hedensted og Juelsminde lige ved siden af. Nævn de byer, du dækker." },
      { title: "Håndværk og service", tag: "Ude hos kunden", text: "Når du kører ud til kunden, er dit område vigtigere end din adresse. Skriv det tydeligt på siden." },
      { title: "Brancher med egne råd", tag: "Læs mere", text: "Se de konkrete råd til håndværkere, saloner og restauranter.", href: "/hjemmeside-til-haandvaerkere", cta: "Se branchesiderne" },
    ],
  },
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
  {
    h2: "Hvad er godt webdesign i 2026?",
    paragraphs: [
      "Godt webdesign handler ikke om at have flest effekter, men om at gøre det nemt for den rigtige besøgende at forstå dit tilbud og tage kontakt. I 2026 betyder det en hurtig side på mobil, et klart budskab øverst, tydelige knapper og tillidssignaler som anmeldelser, referencer og CVR-nummer.",
      "Designet skal også være gennemtænkt til søgemaskiner og AI-assistenter: logisk overskriftsstruktur, hurtig indlæsning og tekst, der besvarer spørgsmål. Et flot design, som ingen finder, er spild af penge.",
    ],
  },
  {
    h2: "Mine designprincipper",
    bullets: [
      "Mobile first: over halvdelen af besøgende kommer fra telefon, så jeg designer til den lille skærm først.",
      "Ét tydeligt mål pr. side: ring, book eller skriv.",
      "Klar typografi og luft, så teksten er let at læse.",
      "Få farver og et konsekvent udtryk, der matcher dit brand.",
      "Billeder i den rigtige størrelse og format, så siden ikke bliver langsom.",
      "Tilgængelighed: kontrast, læsbare skrifter og tastaturnavigation.",
    ],
  },
  {
    h2: "Webdesign til forskellige typer virksomheder",
    paragraphs: [
      "En håndværker har brug for at vise ydelser, områder og referencer og gøre det nemt at ringe. En restaurant skal vise menu, åbningstider og booking. En salon har brug for tidsbestilling og billeder, der sælger. Jeg tilpasser designet til din branche og din målgruppe i stedet for at bruge samme skabelon til alle.",
    ],
    cta: { href: "/hjemmeside-til-haandvaerkere", label: "Se hjemmesider til brancher" },
  },
  {
    h2: "Priser på webdesign i Horsens",
    table: {
      head: ["Pakke", "Fra pris (ekskl. moms)", "Levering"],
      rows: [
        ["Landingside", "2.500 kr", "ca. 2 dage"],
        ["Basis (3–5 sider)", "4.500 kr", "ca. 5 dage"],
        ["Standard (op til 8 sider)", "7.500 kr", "ca. 10 dage"],
        ["Skræddersyet", "14.000 kr", "Aftales"],
      ],
    },
    paragraphs: ["Du får en fast pris, før vi går i gang. Se også guiden til, hvad en hjemmeside koster om året, hvis du vil have overblik over de løbende udgifter."],
    cta: { href: "/blog/hvad-koster-en-hjemmeside-om-aaret", label: "Hvad koster en hjemmeside om året?" },
  },
  {
    h2: "Webdesign i Horsens og resten af Jylland",
    paragraphs: [
      "Jeg sidder i Horsens og arbejder med virksomheder i hele Jylland. Se siderne om webbureau i Midtjylland, Jylland, Aarhus og Vejle, hvis du vil se, hvordan jeg arbejder i dit område.",
    ],
    cta: { href: "/webbureau-jylland", label: "Webbureau Jylland" },
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
      city="horsens"
      facts={[
        { num: "0 km", label: "Jeg sidder selv i Horsens" },
        { num: "Direkte", label: "Kontakt med den, der bygger" },
        { num: "48 timer", label: "Til første designudkast" },
      ]}
      name="Webdesign Horsens"
      serviceType="Webdesign"
      eyebrow="Webdesign i Horsens"
      h1="Webdesign i Horsens – professionelt design til fast pris"
      intro="Jeg designer og bygger moderne, hurtige hjemmesider til virksomheder i Horsens. Du får et første designudkast på 48 timer, fast pris fra 2.500 kr og direkte kontakt med mig – ingen mellemled."
      summary="WebHjerte er en webdesigner i Horsens, der designer og bygger hurtige, mobilvenlige hjemmesider til fast pris fra 2.500 kr. Du får første designudkast inden for 48 timer, betaler 0 kr for designet, hvis det ikke passer, og ejer selv domæne og kode."
      sections={sections}
      faqs={faqs}
      related={related}
    />
  );
}
