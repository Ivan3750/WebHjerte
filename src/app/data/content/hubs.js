// Hub-side: ofte stillede spørgsmål

const faqGroups = [
  {
    h2: "Priser og betaling",
    items: [
      ["Hvad koster en hjemmeside hos WebHjerte?", "Priserne starter fra 2.500 kr for en landingside, 4.500 kr for Basis (3–5 sider), 8.500 kr for Standard (op til 8 sider med SEO, analytics og booking) og 14.000 kr for skræddersyede løsninger som webshop og kundeportal. Alle priser er inkl. moms."],
      ["Er priserne faste?", "Ja. Du får et fast tilbud inden for 24 timer, og prisen ændres kun, hvis vi aftaler at udvide opgaven."],
      ["Er der skjulte gebyrer?", "Nej. Eventuelle udgifter til domæne, hosting og tredjepartsværktøjer fremgår af tilbuddet, og betales typisk direkte til udbyderne."],
      ["Hvad koster vedligeholdelse?", "Efter 30 dages gratis support kan du vælge et vedligeholdelsesabonnement fra 249 til 799 kr/md inkl. moms."],
      ["Betaler jeg, hvis jeg ikke kan lide designet?", "Nej. Er du ikke tilfreds med designudkastet, betaler du 0 kr for designet."],
    ],
  },
  {
    h2: "Tid og forløb",
    items: [
      ["Hvor lang tid tager det at få en hjemmeside?", "Typisk 2–10 dage: ca. 2 dage for en landingside, ca. 5 dage for Basis og ca. 10 dage for Standard – forudsat at tekster og billeder er klar."],
      ["Hvornår får jeg første designudkast?", "Inden for 48 timer efter vores første samtale. Intet bygges, før du har godkendt designet."],
      ["Hvad skal jeg selv levere?", "Logo, billeder og gerne en kort beskrivelse af din virksomhed og dine ydelser. Jeg hjælper med at strukturere og formulere teksterne."],
      ["Kan jeg få rettelser undervejs?", "Ja. Justeringer er inkluderet, indtil du er tilfreds med designet."],
    ],
  },
  {
    h2: "Teknik og ejerskab",
    items: [
      ["Hvem ejer hjemmesiden?", "Du. Domæne og kode tilhører dig, og du er ikke bundet til WebHjerte."],
      ["Kan jeg selv redigere hjemmesiden?", "Ja, hvis den bygges i WordPress. Ellers kan jeg stå for rettelser via en vedligeholdelsesaftale."],
      ["Bygger I i WordPress eller skræddersyet kode?", "Begge dele. Jeg anbefaler det, der passer til dit behov – WordPress, hvis du vil redigere selv, og skræddersyet kode (fx Next.js), hvis hastighed og fleksibilitet er vigtigst."],
      ["Er hjemmesiden mobilvenlig?", "Ja. Alle sider designes responsivt og testes på mobil, tablet og desktop."],
      ["Er jeres løsninger GDPR-kompatible?", "Ja. Jeg sætter cookie-samtykke, privatlivspolitik og dataminimering op efter gældende regler. Har du specielle juridiske krav, bør du få dem vurderet af en jurist."],
    ],
  },
  {
    h2: "SEO og AI-synlighed",
    items: [
      ["Er SEO inkluderet i hjemmesiden?", "Ja. Basis-SEO (titler, beskrivelser, struktur og hastighed) er indbygget. Standard indeholder desuden SEO og analytics-opsætning."],
      ["Hvad er AI SEO / GEO?", "AI SEO eller GEO (Generative Engine Optimization) gør din hjemmeside nem at forstå og citere for AI-systemer som ChatGPT, Gemini, Perplexity og Google AI-oversigter."],
      ["Hvor meget koster AI SEO?", "Basis fra 3.500 kr, Standard fra 6.500 kr og Skræddersyet fra 12.000 kr (inkl. moms)."],
      ["Hvor hurtigt kan jeg se resultater af SEO?", "Det afhænger af branche og konkurrence. Teknisk forbedring kan ses hurtigt, men synlighed i søgeresultater opbygges typisk over 2–3 måneder eller mere."],
      ["Tilbyder I et gratis SEO-tjek?", "Ja. Et gratis SEO- og web-tjek gennemgår hastighed, mobilvisning og SEO-grundlag og peger på de vigtigste forbedringer."],
    ],
  },
  {
    h2: "Samarbejde og område",
    items: [
      ["Hvor holder WebHjerte til?", "WebHjerte er baseret i Horsens (8700), Midtjylland."],
      ["Arbejder I kun i Horsens?", "Nej. Jeg arbejder med virksomheder i hele Midtjylland, Jylland og Danmark. Samarbejdet foregår online, og fysiske møder kan aftales, når det giver værdi."],
      ["Hvem arbejder jeg sammen med?", "Du har direkte kontakt med Ivan Kohan, som designer og bygger din hjemmeside – uden mellemled."],
      ["Hvilke brancher arbejder I med?", "Primært små og mellemstore virksomheder: håndværkere, VVS og el, tømrere, restauranter, saloner, klinikker, konsulenter og andre lokale servicevirksomheder."],
      ["Hvordan kontakter jeg jer?", "Ring på +45 42 76 05 77, skriv til hej@webhjerte.dk eller brug kontaktformularen på hjemmesiden. Du får svar inden for 24 timer."],
    ],
  },
];

const flatFaqs = faqGroups.flatMap((g) => g.items.map(([q, a]) => ({ q, a })));

export const hubPages = [
  {
    slug: "ofte-stillede-spoergsmaal",
    type: "page",
    title: "FAQ om hjemmesider, priser og SEO | WebHjerte",
    description:
      "Svar på de mest stillede spørgsmål om hjemmesider hos WebHjerte: priser, tid, ejerskab, WordPress, SEO, AI-synlighed og samarbejde.",
    keywords: ["hjemmeside spørgsmål", "hvad koster en hjemmeside", "hvor lang tid tager en hjemmeside", "FAQ webbureau"],
    name: "Ofte stillede spørgsmål",
    eyebrow: "FAQ",
    h1: "Ofte stillede spørgsmål om hjemmesider, priser og SEO",
    intro:
      "Her finder du korte, ærlige svar på det, de fleste spørger om, før de får lavet en hjemmeside – samlet på ét sted.",
    summary:
      "WebHjerte bygger hjemmesider fra 2.500 kr (inkl. moms) med levering på 2–10 dage. Du får første designudkast inden for 48 timer, betaler 0 kr for designet, hvis du ikke er tilfreds, og ejer selv domæne og kode. WebHjerte er baseret i Horsens og arbejder i hele Danmark.",
    withForm: false,
    sections: faqGroups.map((g) => ({
      h2: g.h2,
      subs: g.items.map(([q, a]) => ({ h3: q, paragraphs: [a] })),
    })),
    faqs: flatFaqs.slice(0, 10),
    related: [
      { href: "/kontakt", title: "Kontakt", desc: "Stil dit spørgsmål direkte." },
      { href: "/hjemmeside-pris", title: "Hjemmeside pris", desc: "Se pakker og priser." },
      { href: "/blog", title: "Blog og guides", desc: "Praktiske guides om hjemmesider og SEO." },
    ],
  },
];
