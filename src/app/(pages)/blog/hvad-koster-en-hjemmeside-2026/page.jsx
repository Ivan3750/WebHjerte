import ContentPage from "../../../components/seo/ContentPage";
import PriceCalculator from "../../../components/ui/PriceCalculator";
import { pageMetadata } from "../../../data/content";

const path = "/blog/hvad-koster-en-hjemmeside-2026";

// Search Console: siden får flest visninger på hele sitet (pris-søgninger), men lå på side 5.
// Derfor en komplet prisguide med markedspriser, typer, årlige udgifter, tilbudstjekliste og prisberegner.
const article = {
  title: "Hvad koster en hjemmeside i 2026? Priser + prisberegner | WebHjerte",
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
    h2: "Priser på hjemmesider i Danmark – overblik",
    paragraphs: [
      "Prisen på en hjemmeside spænder vidt, fordi “en hjemmeside” kan være alt fra én side, du selv klikker sammen, til en webshop med integrationer. Tabellen viser de typiske prisniveauer i Danmark i 2026 for en lille eller mellemstor virksomhed. Beløbene er vejledende og ekskl. moms.",
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
    subs: [
      {
        h3: "Landingside (1 side)",
        paragraphs: [
          "En landingside samler ét tilbud på én side – godt til kampagner, Google Ads eller en ny ydelse. Typisk pris: 2.000–10.000 kr. Hos WebHjerte: 2.500 kr, klar på ca. 2 dage.",
        ],
      },
      {
        h3: "Firmahjemmeside (3–8 sider)",
        paragraphs: [
          "Den klassiske hjemmeside til en virksomhed: forside, ydelser, om os, referencer og kontakt. Typisk pris: 8.000–40.000 kr. Hos WebHjerte: Basis 4.500 kr (3–5 sider) eller Standard 7.500 kr (op til 8 sider med SEO, analytics og booking).",
        ],
        cta: { href: "/hjemmeside-til-virksomhed", label: "Hjemmeside til virksomhed" },
      },
      {
        h3: "WordPress-hjemmeside",
        paragraphs: [
          "WordPress koster ikke noget i licens, men du betaler for design, opsætning, plugins og hosting. En professionel WordPress-hjemmeside koster typisk 8.000–50.000 kr. Hos WebHjerte starter flersidede WordPress-sider fra 4.500 kr, og du kan selv redigere tekster og billeder bagefter.",
        ],
      },
      {
        h3: "Webshop (WooCommerce eller Shopify)",
        paragraphs: [
          "En webshop kræver produkter, betaling, fragt, handelsbetingelser og ofte integrationer til lager eller bogføring. Typisk pris: 15.000–100.000+ kr plus platformsgebyrer. Hos WebHjerte starter skræddersyede webshops fra 14.000 kr til fast pris.",
        ],
      },
      {
        h3: "Skræddersyet løsning",
        paragraphs: [
          "Kundeportal, bookingsystem, AI-chatbot eller automatiseringer bygges efter behov. Prisen aftales ud fra omfanget – hos WebHjerte fra 14.000 kr – og du får altid en fast pris, før arbejdet starter.",
        ],
      },
    ],
  },
  {
    h2: "Hvad påvirker prisen?",
    bullets: [
      "Antal sider og skabeloner – hver ny sidetype kræver design og udvikling.",
      "Tekster og billeder – skal de skrives, oversættes eller fotograferes?",
      "Funktioner – booking, webshop, login, betaling, flersprog og integrationer.",
      "Design – færdigt tema er billigere end et unikt, skræddersyet design.",
      "SEO og AI-synlighed – om siden bare skal findes eller aktivt kæmpe om placeringer på Google og i ChatGPT.",
      "Hvem der bygger – bureauer har flere led (projektleder, designer, udvikler) og dermed højere timepris.",
    ],
  },
  {
    h2: "Hvad koster en hjemmeside om året?",
    paragraphs: [
      "Ud over engangsprisen skal du regne med løbende udgifter. For en lille virksomhed ligger de typisk på 2.500–6.000 kr om året.",
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
    paragraphs: ["Når du sammenligner tilbud, så tjek at de indeholder det samme. Et godt tilbud på en hjemmeside skal mindst svare på:"],
    bullets: [
      "Fast pris eller timepris – og hvad sker der, hvis omfanget ændrer sig?",
      "Præcis hvilke sider og funktioner, der er med.",
      "Om tekster, billeder og SEO-opsætning er inkluderet.",
      "Hvem der ejer domæne, kode og indhold (det bør være dig).",
      "Leveringstid og hvor mange rettelsesrunder, der er med.",
      "Hvad support, hosting og vedligeholdelse koster efter lancering.",
      "Om du kan opsige løbende aftaler fra måned til måned.",
    ],
  },
  {
    h2: "Kan det betale sig at bruge en hjemmesidebygger?",
    paragraphs: [
      "Hjemmesidebyggere som Wix, Squarespace og 123hjemmeside er billige at starte på, men du betaler hver måned, så længe siden findes, og du ejer sjældent selve løsningen. Over tre år betaler mange 4.000–14.000 kr – og har stadig en skabelon, der ligner konkurrenternes og er svær at få til at rangere lokalt.",
      "Har du brug for kunder fra Google, er en professionelt bygget hjemmeside til fast pris ofte billigere på sigt: Hos WebHjerte koster en Basis-side 4.500 kr én gang, og du ejer den selv.",
    ],
  },
  {
    h2: "WebHjertes faste priser",
    paragraphs: ["Alle priser er faste og ekskl. moms. Du får et skriftligt tilbud, før vi går i gang."],
    table: {
      head: ["Pakke", "Pris", "Indhold", "Levering"],
      rows: [
        ["Landingside", "2.500 kr", "1 side til kampagner eller én ydelse", "ca. 2 dage"],
        ["Basis", "4.500 kr", "3–5 sider, kontaktformular, Google Maps og basis-SEO", "ca. 5 dage"],
        ["Standard", "7.500 kr", "Op til 8 sider, SEO, analytics, booking og 30 dages support", "ca. 10 dage"],
        ["Skræddersyet", "fra 14.000 kr", "Webshop, kundeportal, AI-chatbot eller specialfunktioner", "Aftales"],
      ],
    },
    cta: { href: "/kontakt", label: "Få et gratis tilbud inden for 24 timer" },
  },
  {
    h2: "Sådan kommer du i gang",
    steps: [
      { title: "Gratis samtale", text: "Vi taler om din virksomhed, dine kunder og hvad siden skal kunne. Du får en fast pris." },
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
      eyebrow="Guide · Priser · 7 min. læsning"
      h1="Hvad koster en hjemmeside i 2026? Priser, eksempler og prisberegner"
      intro="Et ærligt overblik over, hvad en hjemmeside koster i Danmark – hos en hjemmesidebygger, en freelancer og et webbureau – og hvad du skal betale om året bagefter."
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
