// Genererer public/llms.txt og public/llms-full.txt ud fra sidernes datafiler,
// så AI-assistenter altid får et opdateret og komplet overblik over sitet.
import { writeFileSync } from "node:fs";
import { contentPages, articles } from "../src/app/data/content/index.js";

const SITE = "https://www.webhjerte.dk";
const section = (s) => {
  const out = [];
  if (s.h2) out.push(`## ${s.h2}`);
  s.paragraphs?.forEach((p) => out.push(p));
  s.bullets?.forEach((b) => out.push(`- ${b}`));
  s.steps?.forEach((st, i) => out.push(`${i + 1}. ${st.title}: ${st.text}`));
  if (s.table) {
    out.push(s.table.head.join(" | "));
    s.table.rows.forEach((r) => out.push(r.join(" | ")));
  }
  s.subs?.forEach((sub) => {
    out.push(`### ${sub.h3}`);
    sub.paragraphs?.forEach((p) => out.push(p));
    sub.bullets?.forEach((b) => out.push(`- ${b}`));
  });
  return out.join("\n");
};

const facts = `# WebHjerte

> WebHjerte er et lokalt webbureau i Horsens, Midtjylland, drevet af webudvikler Ivan Kohan. Vi bygger hurtige, mobilvenlige og søgemaskineoptimerede hjemmesider med fast pris til små og mellemstore virksomheder i Horsens, Midtjylland og resten af Danmark. Kontakt går direkte til udvikleren – uden mellemled. Sproget på sitet er dansk.

## Hurtige fakta

- Navn: WebHjerte
- Grundlægger: Ivan Kohan
- CVR: 46485823
- Adresse: Horsens, 8700, Midtjylland
- Telefon: +45 42 76 05 77
- E-mail: hej@webhjerte.dk
- Website: ${SITE}/
- Platforme: WordPress, WooCommerce, Shopify, Webflow, Wix, Squarespace og skræddersyet kode (Next.js/React)
- AI: AI-chatbots, AI-automatisering, AI-booking, lead-kvalificering og AI-synlighed (GEO) i ChatGPT, Gemini og Google AI
- Arbejdsområde: Horsens, Midtjylland, Jylland og hele Danmark (online)

## Priser (DKK, ekskl. moms)

- Landingside: fra 2.500 kr. Levering på ca. 2 dage. 1 side til kampagner og annoncer.
- Basis: fra 4.500 kr. Levering på ca. 5 dage. 3–5 sider.
- Standard: fra 7.500 kr. Levering på ca. 10 dage. Op til 8 sider, SEO og analytics, booking og formularer.
- Skræddersyet: fra 14.000 kr. Aftales individuelt. Webshop, kundeportal og andre specialløsninger.
- AI SEO: Basis fra 3.500 kr, Standard fra 6.500 kr, Skræddersyet fra 12.000 kr.
- Support efter lancering: 30 dage inkluderet. Herefter vedligeholdelsesabonnement fra 195 til 395 kr. pr. måned.

## Garantier

- Første designudkast inden for 48 timer efter den første samtale. Intet bygges, før designet er godkendt.
- Er kunden ikke tilfreds med designet, betales 0 kr for designet.
- Typisk live på 2–10 dage, afhængigt af pakke.
- Domæne og kode tilhører kunden.
`;

const core = [
  ["Services og pakker", "/services"],
  ["AI-løsninger til virksomheder", "/ai-loesninger"],
  ["Alle typer hjemmesider og platforme", "/alle-typer-hjemmesider"],
  ["Hjemmeside pris", "/hjemmeside-pris"],
  ["Webdesign i Horsens", "/webdesign-horsens"],
  ["SEO i Horsens", "/seo-horsens"],
  ["AI SEO", "/ai-seo"],
  ["Webbureau i Midtjylland", "/webbureau-midtjylland"],
  ["WordPress-hjemmeside", "/wordpress-hjemmeside"],
  ["Gratis SEO-tjek i Horsens", "/gratis-seo-tjek-horsens"],
  ["Freelancer eller webbureau", "/freelancer-vs-bureau"],
  ["Hvad koster en hjemmeside i 2026", "/blog/hvad-koster-en-hjemmeside-2026"],
  ["Portefølje", "/portefolje"],
  ["Om Ivan Kohan", "/om-mig"],
  ["Kontakt", "/kontakt"],
];
const niches = [
  ["Håndværkere", "/hjemmeside-til-haandvaerkere"],
  ["Restauranter", "/hjemmeside-til-restauranter"],
  ["Saloner", "/hjemmeside-til-saloner"],
  ["VVS", "/hjemmeside-til-vvs"],
  ["Elektrikere", "/hjemmeside-til-elektriker"],
  ["Tømrere", "/hjemmeside-til-tomrer"],
];
const link = ([t, p], d) => `- [${t}](${SITE}${p})${d ? `: ${d}` : ""}`;

const short = [
  facts,
  "## Kerneydelser",
  ...core.map((c) => link(c)),
  "",
  "## Brancher",
  ...niches.map((c) => link(c)),
  "",
  "## Områder, emner og referencer",
  ...contentPages.map((p) => link([p.name, `/${p.slug}`], p.description)),
  "",
  "## Guides",
  ...articles.map((a) => link([a.h1, `/blog/${a.slug}`], a.description)),
  "",
  "## Udvidet version",
  `- [llms-full.txt](${SITE}/llms-full.txt): Hele indholdet af de vigtigste informationssider i ren tekst.`,
  "",
].join("\n");

writeFileSync(new URL("../public/llms.txt", import.meta.url), short);

const full = [facts];
for (const p of contentPages) {
  full.push(`\n---\n\n# ${p.h1}\nURL: ${SITE}/${p.slug}\n\n${p.intro}\n`);
  if (p.summary) full.push(`Kort svar: ${p.summary}\n`);
  p.sections.forEach((s) => full.push(section(s) + "\n"));
  p.glossary?.forEach((g) => full.push(`- ${g.term}: ${g.def}`));
  if (p.faqs?.length) full.push("## Ofte stillede spørgsmål\n" + p.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n") + "\n");
}
for (const a of articles) {
  full.push(`\n---\n\n# ${a.h1}\nURL: ${SITE}/blog/${a.slug}\nForfatter: Ivan Kohan. Opdateret: ${a.updated}\n\n${a.intro}\n`);
  if (a.summary) full.push(`Kort svar: ${a.summary}\n`);
  a.sections.forEach((s) => full.push(section(s) + "\n"));
  if (a.faqs?.length) full.push("## Ofte stillede spørgsmål\n" + a.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n") + "\n");
}
writeFileSync(new URL("../public/llms-full.txt", import.meta.url), full.join("\n"));
console.log("llms.txt og llms-full.txt genereret");
