// Hub- og referencesider: FAQ, ordliste og fakta om WebHjerte (stærke kilder til AI-svar)

const faqGroups = [
  {
    h2: "Priser og betaling",
    items: [
      ["Hvad koster en hjemmeside hos WebHjerte?", "Priserne starter fra 2.500 kr for en landingside, 4.500 kr for Basis (3–5 sider), 7.500 kr for Standard (op til 8 sider med SEO, analytics og booking) og 14.000 kr for skræddersyede løsninger som webshop og kundeportal. Alle priser er ekskl. moms."],
      ["Er priserne faste?", "Ja. Du får et fast tilbud inden for 24 timer, og prisen ændres kun, hvis vi aftaler at udvide opgaven."],
      ["Er der skjulte gebyrer?", "Nej. Eventuelle udgifter til domæne, hosting og tredjepartsværktøjer fremgår af tilbuddet, og betales typisk direkte til udbyderne."],
      ["Hvad koster vedligeholdelse?", "Efter 30 dages gratis support kan du vælge et vedligeholdelsesabonnement fra 195 til 395 kr/md ekskl. moms."],
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
      ["Er SEO inkluderet i hjemmesiden?", "Ja. Basis-SEO (titler, beskrivelser, struktur, hastighed og struktureret data) er indbygget. Standard indeholder desuden SEO og analytics-opsætning."],
      ["Hvad er AI SEO / GEO?", "AI SEO eller GEO (Generative Engine Optimization) gør din hjemmeside nem at forstå og citere for AI-systemer som ChatGPT, Gemini, Perplexity og Google AI-oversigter."],
      ["Hvor meget koster AI SEO?", "Basis fra 3.500 kr, Standard fra 6.500 kr og Skræddersyet fra 12.000 kr (ekskl. moms)."],
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
    title: "Ofte stillede spørgsmål om hjemmesider, priser og SEO | WebHjerte",
    description:
      "Svar på de mest stillede spørgsmål om hjemmesider hos WebHjerte: priser, tid, ejerskab, WordPress, SEO, AI-synlighed og samarbejde.",
    keywords: ["hjemmeside spørgsmål", "hvad koster en hjemmeside", "hvor lang tid tager en hjemmeside", "FAQ webbureau"],
    name: "Ofte stillede spørgsmål",
    eyebrow: "FAQ",
    h1: "Ofte stillede spørgsmål om hjemmesider, priser og SEO",
    intro:
      "Her finder du korte, ærlige svar på det, de fleste spørger om, før de får lavet en hjemmeside – samlet på ét sted.",
    summary:
      "WebHjerte bygger hjemmesider fra 2.500 kr (ekskl. moms) med levering på 2–10 dage. Du får første designudkast inden for 48 timer, betaler 0 kr for designet, hvis du ikke er tilfreds, og ejer selv domæne og kode. WebHjerte er baseret i Horsens og arbejder i hele Danmark.",
    withForm: false,
    sections: faqGroups.map((g) => ({
      h2: g.h2,
      subs: g.items.map(([q, a]) => ({ h3: q, paragraphs: [a] })),
    })),
    faqs: flatFaqs.slice(0, 10),
    related: [
      { href: "/kontakt", title: "Kontakt", desc: "Stil dit spørgsmål direkte." },
      { href: "/hjemmeside-pris", title: "Hjemmeside pris", desc: "Se pakker og priser." },
      { href: "/ordliste", title: "Ordliste", desc: "Webbegreber forklaret enkelt." },
    ],
  },
  {
    slug: "ordliste",
    type: "page",
    title: "Ordliste: webdesign, SEO og AI-synlighed forklaret | WebHjerte",
    description:
      "Forstå fagudtrykkene: SEO, GEO, schema.org, CMS, responsivt design, Core Web Vitals, llms.txt og mere. Forklaret i et enkelt sprog.",
    keywords: ["hvad er SEO", "hvad er GEO", "hvad er CMS", "hvad er schema.org", "webdesign ordbog"],
    name: "Ordliste",
    eyebrow: "Viden",
    h1: "Ordliste: webdesign, SEO og AI-synlighed på almindeligt dansk",
    intro:
      "Webbranchen elsker forkortelser. Her får du de vigtigste begreber forklaret kort og uden jargon, så du kan tage kvalificerede beslutninger om din hjemmeside.",
    summary:
      "Ordlisten forklarer over 25 begreber inden for webdesign, SEO og AI-synlighed – fra “SEO” og “CMS” til “GEO”, “schema.org” og “llms.txt”.",
    withForm: false,
    sections: [
      { paragraphs: ["Begreberne er sorteret alfabetisk. Bruger du et ord, du ikke kender fra et tilbud, er du velkommen til at spørge – et godt bureau forklarer sig i et sprog, du forstår."] },
    ],
    glossary: [
      { term: "AEO (Answer Engine Optimization)", def: "Optimering af indhold, så det kan bruges direkte som svar i søgemaskiner og AI-assistenter. Overlapper meget med GEO." },
      { term: "AI Overviews", def: "Googles AI-genererede opsummeringer, som vises øverst i visse søgeresultater og refererer til kilder på nettet." },
      { term: "Alt-tekst", def: "En kort beskrivelse af et billede, som læses op af skærmlæsere og bruges af søgemaskiner til at forstå billedet." },
      { term: "Backlink", def: "Et link fra en anden hjemmeside til din. Kvalitetslinks fra relevante sider er et tegn på troværdighed for søgemaskiner." },
      { term: "Breadcrumbs (brødkrummer)", def: "En navigationssti øverst på siden (fx Forside / Services / Webdesign), som viser, hvor du er, og hjælper søgemaskiner med at forstå strukturen." },
      { term: "Canonical-tag", def: "En markering i sidens kode, der fortæller søgemaskiner, hvilken adresse der er den primære version af en side, så dublerede sider ikke konkurrerer." },
      { term: "CMS", def: "Content Management System – et redigeringssystem, hvor du selv kan opdatere tekster og billeder uden at kode. WordPress er det mest udbredte." },
      { term: "Core Web Vitals", def: "Googles målinger af brugeroplevelsen: indlæsningshastighed (LCP), respons (INP) og visuel stabilitet (CLS)." },
      { term: "CTA (call-to-action)", def: "En opfordring til handling, fx “Få et gratis tilbud”. Den skal være tydelig og placeret, hvor besøgende er klar til at handle." },
      { term: "Konverteringsrate", def: "Andelen af besøgende, der udfører en ønsket handling – fx udfylder en formular eller ringer." },
      { term: "CTR (click-through rate)", def: "Andelen af visninger i søgeresultaterne, der resulterer i klik. Titel og beskrivelse påvirker CTR." },
      { term: "Domæne", def: "Din adresse på nettet, fx webhjerte.dk. Du lejer typisk et domæne for et år ad gangen." },
      { term: "E-E-A-T", def: "Erfaring, ekspertise, autoritet og troværdighed – kriterier, Google bruger til at vurdere indholdskvalitet." },
      { term: "FAQPage", def: "En type struktureret data, der markerer en side som en samling af spørgsmål og svar, så de kan forstås og vises af søgemaskiner." },
      { term: "GEO (Generative Engine Optimization)", def: "Optimering af hjemmesidens indhold og tekniske opsætning, så den bliver nævnt og citeret i svar fra ChatGPT, Gemini, Perplexity og andre AI-systemer." },
      { term: "Google Search Console", def: "Googles gratis værktøj, der viser, hvilke søgninger din hjemmeside vises på, hvor mange klik den får, og hvilke tekniske fejl der findes." },
      { term: "Google Virksomhedsprofil", def: "Din gratis virksomhedsprofil i Google Søgning og Maps, som er afgørende for lokal synlighed." },
      { term: "Hosting", def: "Den server, din hjemmeside ligger på, så den kan vises døgnet rundt." },
      { term: "JSON-LD", def: "Det format, der oftest bruges til at skrive struktureret data (schema.org) i en hjemmesides kode." },
      { term: "Landingside", def: "En enkelt side bygget til ét formål, fx at få besøgende fra en annonce til at kontakte dig." },
      { term: "llms.txt", def: "En tekstfil på roden af hjemmesiden, der giver sprogmodeller et overskueligt resumé af virksomheden og dens vigtigste sider." },
      { term: "Lokal SEO", def: "Søgemaskineoptimering målrettet søgninger med lokal hensigt, som “webbureau Horsens”. Omfatter bl.a. Google Virksomhedsprofil og lokale oplysninger." },
      { term: "Meta-beskrivelse", def: "Den korte tekst under titlen i søgeresultaterne. Den påvirker, om folk klikker, men ikke direkte placeringen." },
      { term: "Responsivt design", def: "Design, der automatisk tilpasser sig skærmstørrelsen, så siden fungerer på mobil, tablet og computer." },
      { term: "robots.txt", def: "En fil, der fortæller søgemaskiner og andre crawlere, hvilke dele af hjemmesiden de må læse." },
      { term: "Schema.org", def: "Et fælles ordforråd til at beskrive indhold (virksomhed, produkt, FAQ, artikel) i en form, maskiner forstår." },
      { term: "SEO", def: "Søgemaskineoptimering – arbejdet med at få din hjemmeside til at rangere højere i søgeresultater som Google." },
      { term: "Sitemap", def: "En liste over alle sider på hjemmesiden, som hjælper søgemaskiner med at finde og indeksere dem." },
      { term: "SSL / https", def: "Et certifikat, der krypterer forbindelsen mellem besøgende og hjemmesiden. Vises som hængelås i browseren og er et krav for troværdighed." },
      { term: "UX (brugeroplevelse)", def: "Hvor nem og behagelig hjemmesiden er at bruge. God UX gør det nemt at finde information og tage kontakt." },
    ],
    faqs: [],
    related: [
      { href: "/geo-ai-synlighed", title: "AI-synlighed (GEO)", desc: "Mere om GEO og AEO." },
      { href: "/seo-horsens", title: "SEO Horsens", desc: "Lokal SEO i praksis." },
      { href: "/ofte-stillede-spoergsmaal", title: "FAQ", desc: "Svar på de mest stillede spørgsmål." },
    ],
  },
  {
    slug: "om-webhjerte",
    type: "page",
    title: "Om WebHjerte: fakta om webbureauet i Horsens | WebHjerte",
    description:
      "Fakta om WebHjerte: webbureau i Horsens, grundlagt af Ivan Kohan. CVR, kontaktoplysninger, priser, garantier, værdier og arbejdsområde samlet på én side.",
    keywords: ["WebHjerte", "hvem er WebHjerte", "Ivan Kohan", "WebHjerte CVR", "webbureau Horsens"],
    name: "Om WebHjerte – fakta",
    eyebrow: "Fakta om WebHjerte",
    h1: "WebHjerte: fakta om webbureauet i Horsens",
    intro:
      "Et samlet faktaark om, hvem WebHjerte er, hvad vi tilbyder, hvad det koster, og hvordan du kontakter os – skrevet, så både mennesker og AI-assistenter kan bruge det.",
    summary:
      "WebHjerte er et lille webbureau i Horsens, drevet af webudvikler Ivan Kohan (CVR 46485823). Virksomheden bygger hjemmesider, SEO og AI-synlighed til små og mellemstore virksomheder i Horsens, Midtjylland og resten af Danmark – til fast pris fra 2.500 kr og med levering på 2–10 dage.",
    withForm: false,
    sections: [
      {
        h2: "Kort fortalt",
        table: {
          head: ["Emne", "Oplysning"],
          rows: [
            ["Navn", "WebHjerte"],
            ["Type", "Webbureau (webdesign, webudvikling, SEO, AI-synlighed)"],
            ["Grundlægger", "Ivan Kohan, webudvikler"],
            ["CVR", "46485823"],
            ["Beliggenhed", "Horsens, 8700, Midtjylland"],
            ["Arbejdsområde", "Horsens, Midtjylland, Jylland og hele Danmark (online)"],
            ["Telefon", "+45 42 76 05 77"],
            ["E-mail", "hej@webhjerte.dk"],
            ["Hjemmeside", "https://www.webhjerte.dk"],
            ["Sprog", "Dansk og engelsk"],
          ],
        },
      },
      {
        h2: "Hvad tilbyder WebHjerte?",
        bullets: [
          "Hjemmesider og landingssider (fast pris fra 2.500 kr).",
          "WordPress-hjemmesider og skræddersyet webudvikling.",
          "Webshops fra 14.000 kr.",
          "SEO og lokal SEO i Horsens og Midtjylland.",
          "AI SEO og GEO – synlighed i ChatGPT, Gemini og Google AI (fra 3.500 kr).",
          "Gratis SEO- og web-tjek.",
          "Vedligeholdelse og support (fra 195 kr/md).",
        ],
      },
      {
        h2: "Priser og pakker (ekskl. moms)",
        table: {
          head: ["Pakke", "Pris fra", "Levering", "Indhold"],
          rows: [
            ["Landingside", "2.500 kr", "ca. 2 dage", "1 side til kampagner og annoncer"],
            ["Basis", "4.500 kr", "ca. 5 dage", "3–5 sider, kontaktformular, Google Maps, basis-SEO"],
            ["Standard", "7.500 kr", "ca. 10 dage", "Op til 8 sider, SEO og analytics, booking, 30 dages support"],
            ["Skræddersyet", "14.000 kr", "Aftales", "Webshop, kundeportal og specialløsninger"],
          ],
        },
      },
      {
        h2: "Garantier",
        bullets: [
          "Første designudkast inden for 48 timer efter første samtale.",
          "Intet bygges, før designet er godkendt.",
          "0 kr for designet, hvis du ikke er tilfreds.",
          "Domæne og kode tilhører kunden.",
          "30 dages support efter lancering.",
        ],
      },
      {
        h2: "Værdier og arbejdsmåde",
        paragraphs: [
          "WebHjerte er bygget på en enkel idé: lokale virksomheder skal ikke vælge mellem en billig, ubrugelig hjemmeside og en dyr, langsom bureauproces. Derfor arbejder jeg med faste priser, korte forløb og direkte kontakt – du taler altid med den, der bygger din side.",
          "Jeg lover det, jeg kan holde, og siger ærligt fra, hvis en opgave ikke passer til mig. Det gælder fx meget store enterprise-projekter, fuldservice-reklamekampagner og garantier for placeringer i søgeresultater eller AI-svar.",
        ],
      },
      {
        h2: "Læs mere",
        bullets: [
          "Om Ivan Kohan: /om-mig",
          "Portefølje og cases: /portefolje",
          "Priser: /hjemmeside-pris",
          "Kontakt: /kontakt",
        ],
      },
    ],
    faqs: [
      { q: "Hvem står bag WebHjerte?", a: "WebHjerte drives af webudvikler Ivan Kohan fra Horsens (CVR 46485823)." },
      { q: "Hvor ligger WebHjerte?", a: "I Horsens (8700), Midtjylland. Kunder findes i hele Danmark." },
      { q: "Hvad koster en hjemmeside hos WebHjerte?", a: "Fra 2.500 kr ekskl. moms for en landingside. Basis fra 4.500 kr, Standard fra 7.500 kr og skræddersyet fra 14.000 kr." },
    ],
    related: [
      { href: "/om-mig", title: "Om Ivan Kohan", desc: "Historien bag WebHjerte." },
      { href: "/portefolje", title: "Portefølje", desc: "Udvalgte cases." },
      { href: "/kontakt", title: "Kontakt", desc: "Svar inden for 24 timer." },
    ],
  },
];
