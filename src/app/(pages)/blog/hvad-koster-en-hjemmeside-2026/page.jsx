import ContentPage from "../../../components/seo/ContentPage";
import PriceCalculator from "../../../components/ui/PriceCalculator";
import { pageMetadata } from "../../../data/content";

const path = "/blog/hvad-koster-en-hjemmeside-2026";

// Search Console: siden får flest visninger på hele sitet (pris-søgninger), men lå på side 5.
// Derfor en komplet prisguide med markedspriser, typer, årlige udgifter, tilbudstjekliste og prisberegner.
const article = {
  title: "Hvad koster en hjemmeside i 2026? | WebHjerte",
  description:
    "Hvad koster en hjemmeside i 2026? Se priser hos hjemmesidebygger, freelancer og webbureau, priser på WordPress og webshop, årlige udgifter – og beregn din egen pris.",
  keywords: [
    "hvad koster en hjemmeside",
    "hvad koster en hjemmeside 2026",
    "hjemmeside pris",
    "hjemmesidepriser",
    "priser hjemmeside",
    "hjemmeside tilbud",
    "hvad koster det at få lavet en hjemmeside",
    "hvad koster en professionel hjemmeside",
    "wordpress hjemmeside pris",
    "hvad koster det at lave en webshop",
    "beregn hjemmeside pris",
    "prisberegner hjemmeside",
  ],
  published: "2026-10-28",
  updated: "2026-11-10",
};

const sections = [
  {
    h2: "Det første spørgsmål, alle stiller",
    paragraphs: [
      "“Hvad koster det?” er næsten altid det første, jeg bliver spurgt om – og det er et fair spørgsmål. Problemet er, at svaret på nettet ofte er “det kommer an på”. Det hjælper ingen, når man skal lægge et budget.",
      "Så her får du rigtige tal. Både hvad det typisk koster i Danmark i 2026, og hvad det koster hos mig. Jeg har selv kigget på mange tilbud, som kunder har fået andre steder, og priserne nedenfor er dem, jeg oftest ser.",
    ],
  },
  {
    h2: "Priser på hjemmesider i Danmark – overblik",
    paragraphs: [
      "Prisen spænder vidt, fordi “en hjemmeside” kan være alt fra én side, du selv klikker sammen, til en webshop med integrationer til lager og bogføring. Tabellen viser de typiske prisniveauer for en lille eller mellemstor virksomhed. Beløbene er vejledende og ekskl. moms.",
    ],
    table: {
      head: ["Løsning", "Engangspris", "Løbende", "Passer til"],
      rows: [
        ["Hjemmesidebygger (gør det selv)", "0 kr", "ca. 100–400 kr/md", "Hobby og helt nystartede, der har tid til selv at bygge"],
        ["Freelancer", "ca. 5.000–30.000 kr", "0–400 kr/md", "Små virksomheder, der vil have hjælp uden bureau-pris"],
        ["Webbureau", "ca. 25.000–150.000+ kr", "300–2.000 kr/md", "Større virksomheder med mange interessenter"],
        ["Webshop (bureau/freelancer)", "ca. 15.000–100.000+ kr", "300–1.500 kr/md + platform", "Når du vil sælge online"],
        ["WebHjerte", "2.500–14.000+ kr (fast pris)", "0, 195 eller 395 kr/md", "Små og mellemstore virksomheder, der vil have bureau-kvalitet til fast pris"],
      ],
    },
    cta: { href: "#prisberegner", label: "Beregn din egen pris" },
  },
  {
    h2: "Hvad koster de forskellige typer hjemmesider?",
    paragraphs: ["Her er de fem typer, jeg oftest bygger – med typisk markedspris og min egen faste pris."],
    subs: [
      {
        h3: "Landingside (1 side)",
        paragraphs: [
          "Én side med ét tilbud – perfekt til en kampagne, Google Ads eller en ny ydelse, du vil teste. Typisk pris: 2.000–10.000 kr. Hos mig: 2.500 kr, klar på ca. 2 dage.",
        ],
      },
      {
        h3: "Firmahjemmeside (3–8 sider)",
        paragraphs: [
          "Den klassiske: forside, ydelser, om os, referencer og kontakt. Det er den, de fleste håndværkere, klinikker og konsulenter har brug for. Typisk pris: 8.000–40.000 kr. Hos mig: Basis 4.500 kr (3–5 sider) eller Standard 7.500 kr (op til 8 sider med SEO, analytics og booking).",
        ],
        cta: { href: "/hjemmeside-til-virksomhed", label: "Hjemmeside til virksomhed" },
      },
      {
        h3: "WordPress-hjemmeside",
        paragraphs: [
          "WordPress er gratis, men design, opsætning, plugins og hosting er ikke. En professionel WordPress-side koster typisk 8.000–50.000 kr. Hos mig starter flersidede WordPress-sider fra 4.500 kr – og du kan selv rette tekster og billeder bagefter.",
        ],
        cta: { href: "/wordpress-hjemmeside", label: "Professionel WordPress-hjemmeside" },
      },
      {
        h3: "Webshop (WooCommerce eller Shopify)",
        paragraphs: [
          "En webshop kræver produkter, betaling, fragt, handelsbetingelser og ofte integrationer. Typisk pris: 15.000–100.000+ kr plus platformsgebyrer. Hos mig starter skræddersyede webshops fra 14.000 kr til fast pris.",
        ],
        cta: { href: "/webshop-hjemmeside", label: "Se webshop" },
      },
      {
        h3: "Skræddersyet løsning",
        paragraphs: [
          "Kundeportal, bookingsystem, AI-chatbot eller automatiseringer bygges efter behov. Prisen aftales ud fra omfanget – hos mig fra 14.000 kr – og du får altid en fast pris, før jeg går i gang.",
        ],
      },
    ],
  },
  {
    h2: "Hvorfor er der så stor forskel på priserne?",
    paragraphs: [
      "Det er sjældent selve koden, der gør en hjemmeside dyr. Det er alt omkring den. Hos et typisk bureau skal projektet igennem en sælger, en projektleder, en designer og en udvikler. Der er møder, statusmails og interne overleveringer – og alle timerne ender på din regning. Dertil kommer kontorer og administration.",
      "Jeg har bevidst valgt at arbejde alene. Det betyder, at du taler direkte med den, der bygger siden, og at pengene går til arbejdet – ikke til overhead. Det er hele forklaringen på, at jeg kan levere en Basis-hjemmeside til 4.500 kr, som et bureau ville tage 25.000 kr for.",
    ],
    quote: "Du skal betale for din hjemmeside – ikke for bureauets kontor i midtbyen.",
  },
  {
    h2: "Hvad påvirker prisen?",
    paragraphs: ["Uanset hvem du vælger, er det de samme ting, der får prisen til at stige:"],
    bullets: [
      "Antal sider og sidetyper – hver ny type skal designes og udvikles.",
      "Tekster og billeder – skal de skrives, oversættes eller fotograferes?",
      "Funktioner – booking, webshop, login, betaling, flere sprog og integrationer.",
      "Design – et færdigt tema er billigere end et unikt, skræddersyet design.",
      "SEO og AI-synlighed – om siden bare skal findes, eller aktivt kæmpe om placeringer på Google og i ChatGPT.",
      "Hvem der bygger – flere led betyder flere timer.",
    ],
    after: [
      "Mit bedste råd: start med det, du har brug for nu, og byg på senere. En god Basis-side, der er live om en uge, giver flere kunder end en perfekt side, der aldrig bliver færdig.",
    ],
  },
  {
    h2: "Hvad koster en hjemmeside om året?",
    paragraphs: [
      "Ud over engangsprisen er der løbende udgifter. For en lille virksomhed ligger de typisk på 2.500–6.000 kr om året – men en simpel, kodet side kan koste under 1.000 kr om året at have kørende.",
    ],
    table: {
      head: ["Udgift", "Typisk pris", "Bemærkning"],
      rows: [
        ["Domæne (.dk)", "ca. 100–200 kr/år", "Skal altid stå i dit eget navn"],
        ["Hosting", "0–500 kr/md", "Kodede sider kan ofte hostes billigt; WordPress kræver mere"],
        ["Vedligeholdelse", "195–395 kr/md hos WebHjerte", "Opdateringer, sikkerhed, backup og små rettelser"],
        ["Plugins og værktøjer", "0–300 kr/md", "Fx booking, nyhedsbrev eller premium-plugins"],
      ],
    },
    cta: { href: "/blog/hvad-koster-en-hjemmeside-om-aaret", label: "Læs hele guiden til årlige udgifter" },
  },
  {
    h2: "Sådan får du et godt hjemmeside-tilbud",
    paragraphs: ["Når du sammenligner tilbud, så sørg for, at de indeholder det samme. Et godt tilbud skal mindst svare på:"],
    bullets: [
      "Er prisen fast, eller betaler du pr. time – og hvad sker der, hvis omfanget ændrer sig?",
      "Præcis hvilke sider og funktioner er med?",
      "Er tekster, billeder og SEO-opsætning inkluderet?",
      "Hvem ejer domæne, kode og indhold? (Det bør være dig.)",
      "Hvornår er siden færdig, og hvor mange rettelsesrunder er med?",
      "Hvad koster support, hosting og vedligeholdelse efter lancering?",
      "Kan løbende aftaler opsiges fra måned til måned?",
    ],
    cta: { href: "/blog/vaelg-webbureau-10-spoergsmaal", label: "10 spørgsmål til dit webbureau" },
  },
  {
    h2: "Kan det betale sig at bruge en hjemmesidebygger?",
    paragraphs: [
      "Wix, Squarespace og 123hjemmeside er billige at starte på, men du betaler hver måned, så længe siden findes – og du ejer den sjældent. Over tre år betaler mange 4.000–14.000 kr og har stadig en skabelon, der ligner konkurrenternes og er svær at få til at rangere lokalt.",
      "Det er helt fint til en hobbyside. Men har du brug for kunder fra Google, er en professionelt bygget hjemmeside til fast pris ofte billigere på sigt: En Basis-side hos mig koster 4.500 kr én gang, og du ejer den selv.",
    ],
  },
  {
    h2: "Et eksempel: når hjemmesiden tjener sig hjem",
    paragraphs: [
      "En pizzeria i Horsens, jeg har bygget hjemmeside til, betalte op mod 30 % i gebyr til Wolt og JustEat af hver eneste bestilling. Sælger man for 10.000 kr om måneden via apps, er det op til 3.000 kr – hver måned.",
      "Med en hurtig hjemmeside, hvor kunderne kan bestille direkte, og som er optimeret til søgninger som “pizza Horsens”, bliver en del af de penge i forretningen. Det er den måde, jeg synes, man skal tænke på prisen: ikke hvad hjemmesiden koster, men hvad den tjener.",
    ],
    cta: { href: "/portefolje/pizzaria", label: "Se pizzeria-projektet" },
  },
  {
    h2: "WebHjertes faste priser",
    paragraphs: ["Alle priser er faste og ekskl. moms. Du får et skriftligt tilbud, før jeg går i gang."],
    table: {
      head: ["Pakke", "Pris", "Indhold", "Levering"],
      rows: [
        ["Landingside", "2.500 kr", "1 side til kampagner eller én ydelse", "ca. 2 dage"],
        ["Basis", "4.500 kr", "3–5 sider, kontaktformular, Google Maps og basis-SEO", "ca. 5 dage"],
        ["Standard", "7.500 kr", "Op til 8 sider, SEO, analytics, booking og 30 dages support", "ca. 10 dage"],
        ["Skræddersyet", "fra 14.000 kr", "Webshop, kundeportal, AI-chatbot eller specialfunktioner", "Aftales"],
      ],
    },
    cta: { href: "/hjemmeside-pris", label: "Se alt, hvad pakkerne indeholder" },
  },
  {
    h2: "Sådan kommer du i gang",
    steps: [
      { title: "Gratis samtale", text: "Vi taler om din virksomhed, dine kunder og hvad siden skal kunne. Du får en fast pris – ingen forpligtelser." },
      { title: "Design på 48 timer", text: "Du ser et konkret designudkast. Passer det ikke, betaler du 0 kr for designet." },
      { title: "Udvikling og lancering", text: "Når designet er godkendt, bygger jeg siden – typisk på 2–10 dage – og sætter den live på dit domæne." },
    ],
  },
];

const faqs = [
  { q: "Hvad koster en hjemmeside til en lille virksomhed?", a: "En professionel hjemmeside til en lille virksomhed koster typisk 5.000–40.000 kr afhængigt af hvem der bygger den. Hos WebHjerte koster en landingside 2.500 kr, en Basis-hjemmeside (3–5 sider) 4.500 kr og en Standard-hjemmeside (op til 8 sider) 7.500 kr – alle ekskl. moms og til fast pris." },
  { q: "Hvad koster det at få lavet en webshop?", a: "En webshop koster typisk 15.000–100.000+ kr plus løbende platformsgebyrer. Hos WebHjerte starter skræddersyede webshops i WooCommerce eller Shopify fra 14.000 kr ekskl. moms." },
  { q: "Hvad koster en WordPress-hjemmeside?", a: "WordPress er gratis software, men design og opsætning koster typisk 8.000–50.000 kr. Hos WebHjerte starter flersidede WordPress-hjemmesider fra 4.500 kr, og du kan selv redigere indholdet." },
  { q: "Hvad koster en hjemmeside om året?", a: "Regn med ca. 100–200 kr om året for et .dk-domæne, 0–500 kr om måneden for hosting og 195–395 kr om måneden, hvis du vil have vedligeholdelse. For en lille virksomhed lander det typisk på 2.500–6.000 kr om året." },
  { q: "Er prisen fast, eller betaler jeg pr. time?", a: "Hos WebHjerte er prisen fast. Du får et skriftligt tilbud, før arbejdet starter, og betaler ikke mere, medmindre du selv ønsker flere sider eller funktioner." },
  { q: "Hvor hurtigt kan jeg få et tilbud?", a: "Du får et konkret tilbud inden for 24 timer og et første designudkast inden for 48 timer efter vores samtale – og betaler 0 kr for designet, hvis det ikke passer." },
];

const related = [
  { href: "/hjemmeside-pris", title: "Alle priser og pakker", desc: "Se præcis hvad hver pakke indeholder." },
  { href: "/blog/hvad-koster-en-hjemmeside-om-aaret", title: "Hvad koster en hjemmeside om året?", desc: "Domæne, hosting og vedligeholdelse." },
  { href: "/freelancer-vs-bureau", title: "Freelancer eller bureau?", desc: "Hvad får du for pengene?" },
  { href: "/wordpress-hjemmeside", title: "Professionel WordPress-hjemmeside", desc: "Fra 4.500 kr – du redigerer selv." },
  { href: "/webshop-hjemmeside", title: "Webshop", desc: "Sælg online fra 14.000 kr." },
  { href: "/portefolje", title: "Portefølje", desc: "Se hjemmesider, jeg har bygget." },
];

export const metadata = pageMetadata(article, path, "article");

export default function HvadKosterEnHjemmesidePage() {
  return (
    <ContentPage
      path={path}
      type="article"
      name="Hvad koster en hjemmeside i 2026?"
      eyebrow="Guide · Priser · 10 min. læsning"
      h1="Hvad koster en hjemmeside i 2026? Priser, eksempler og prisberegner"
      intro="Rigtige tal i stedet for “det kommer an på”. Hvad en hjemmeside koster hos en hjemmesidebygger, en freelancer og et bureau – og hvad den koster hos mig."
      summary="En hjemmeside til en lille virksomhed koster typisk 5.000–40.000 kr hos en freelancer og 25.000–150.000 kr hos et webbureau. En webshop koster typisk 15.000–100.000+ kr. Hos WebHjerte koster en landingside 2.500 kr, en Basis-hjemmeside 4.500 kr, en Standard-hjemmeside 7.500 kr og webshops eller skræddersyede løsninger fra 14.000 kr – alle til fast pris ekskl. moms. Løbende udgifter er typisk 2.500–6.000 kr om året."
      afterSummary={<PriceCalculator />}
      sections={sections}
      faqs={faqs}
      related={related}
      breadcrumbs={[{ label: "Blog", href: "/blog" }]}
      withForm={false}
      description={article.description}
      published={article.published}
      updated={article.updated}
    />
  );
}
