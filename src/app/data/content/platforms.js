// Platforme (Shopify, webshop, drift) og AI-løsninger til virksomheder

const aiRelated = [
  { href: "/ai-loesninger", title: "AI-løsninger til virksomheder", desc: "Chatbot, automatisering og AI-agenter." },
  { href: "/ai-seo", title: "AI SEO", desc: "Bliv fundet i Google og nævnt i ChatGPT." },
];

export const platformPages = [
  {
    slug: "shopify-hjemmeside",
    type: "service",
    title: "Shopify webshop – opsætning, design og SEO | WebHjerte",
    description:
      "Shopify-webshop til danske virksomheder: opsætning, design, betaling, fragt og SEO – for nye og eksisterende butikker.",
    keywords: ["shopify", "shopify webshop", "shopify udvikler", "shopify opsætning", "webshop shopify pris", "shopify danmark"],
    name: "Shopify webshop",
    serviceType: "Shopify-udvikling",
    eyebrow: "Shopify",
    h1: "Shopify webshop: fra idé til driftssikker butik",
    intro:
      "Jeg hjælper små og mellemstore virksomheder med at opsætte, designe og optimere Shopify-butikker – og med at flytte en eksisterende webshop til Shopify uden at miste placeringer.",
    summary:
      "Shopify er en abonnementsbaseret webshop-platform, hvor betaling, lager og fragt er indbygget. WebHjerte opsætter og designer Shopify-butikker, tilknytter danske betalingsmetoder og fragt, optimerer produktsider til Google og kan tilføje AI-funktioner som chatbot og produktanbefalinger. Skræddersyede webshops starter fra 14.000 kr inkl. moms.",
    sections: [
      {
        h2: "Hvornår er Shopify det rigtige valg?",
        paragraphs: [
          "Shopify passer til virksomheder, der vil i gang hurtigt og have en driftssikker løsning uden at tænke på servere og sikkerhed. Du betaler et månedligt abonnement og gebyrer, men får til gengæld en løsning, der er bygget til at sælge.",
        ],
        bullets: [
          "Du vil sælge fysiske eller digitale produkter online og vil hurtigt i luften.",
          "Du ønsker minimal teknisk drift og indbygget sikkerhed.",
          "Du har brug for mange betalings- og fragtmuligheder.",
          "Du vil koble webshoppen på sociale medier og markedspladser.",
        ],
      },
      {
        h2: "Hvad jeg laver i Shopify",
        bullets: [
          "Opsætning af butik, produkter, kategorier og lager.",
          "Tilpasning af tema og design, så butikken matcher dit brand.",
          "Betaling (fx kort og MobilePay via betalingsudbydere), fragt og momsindstillinger.",
          "SEO for produkter og kategorier, så pris og lagerstatus kan vises i Google, og hurtig indlæsning.",
          "Migrering fra WooCommerce, Wix eller andre platforme med omdirigeringer, så du bevarer SEO-værdi.",
          "Apps og integrationer (regnskab, lager, nyhedsbreve).",
          "Handelsbetingelser, privatlivspolitik og cookie-samtykke.",
        ],
      },
      {
        h2: "Shopify vs WooCommerce",
        table: {
          head: ["", "Shopify", "WooCommerce (WordPress)"],
          rows: [
            ["Opstart", "Hurtig", "Kræver hosting og opsætning"],
            ["Drift og sikkerhed", "Håndteres af Shopify", "Din eller min opgave"],
            ["Omkostninger", "Abonnement og transaktionsgebyrer", "Hosting, plugins og betalingsgebyrer"],
            ["Fleksibilitet", "Høj via apps og tema", "Meget høj, fuld kontrol"],
            ["Passer til", "Hurtig og driftssikker shop", "Shops med særlige behov eller blog og indhold"],
          ],
        },
      },
      {
        h2: "Shopify og AI",
        paragraphs: [
          "En moderne webshop kan bruge AI til at hjælpe kunderne: en chatbot, der svarer på spørgsmål om levering og returnering, automatisk produktbeskrivelse, anbefalinger og lead-opsamling. Jeg integrerer AI i din butik, så du sparer tid på kundeservice og øger salget.",
        ],
        cta: { href: "/ai-loesninger", label: "AI til din webshop" },
      },
      {
        h2: "Pris",
        paragraphs: [
          "Shopify-butikker prissættes efter omfang og starter som skræddersyede løsninger fra 14.000 kr inkl. moms. Abonnement, apps og gebyrer betaler du direkte til udbyderne. Du får et fast tilbud, før vi starter.",
        ],
        cta: { href: "/kontakt", label: "Få et tilbud på din Shopify-butik" },
      },
    ],
    faqs: [
      { q: "Hvad koster en Shopify webshop?", a: "Hos WebHjerte starter webshops fra 14.000 kr inkl. moms. Shopifys abonnement og apps kommer oveni og betales til Shopify." },
      { q: "Kan I flytte min webshop til Shopify?", a: "Ja. Jeg flytter produkter, kategorier og indhold og sætter omdirigeringer op, så du bevarer SEO-værdi." },
      { q: "Kan jeg få MobilePay i Shopify?", a: "Ja, via betalingsudbydere, der understøtter MobilePay. Jeg hjælper med opsætningen." },
      { q: "Kan en Shopify-butik få en AI-chatbot?", a: "Ja. Jeg kan integrere en chatbot, der besvarer kundespørgsmål og hjælper med bestillinger." },
    ],
    related: [
      { href: "/webshop-hjemmeside", title: "Webshop", desc: "Alle typer webshops." },
      { href: "/ai-loesninger", title: "AI-løsninger", desc: "Chatbot og automatisering." },
    ],
  },
  {
    slug: "ai-loesninger",
    type: "service",
    title: "AI-løsninger til små virksomheder | WebHjerte",
    description:
      "AI i din virksomhed: chatbot på hjemmesiden, automatisk booking og kundeservice, lead-kvalificering og synlighed i ChatGPT og Google.",
    keywords: ["AI løsninger virksomhed", "AI chatbot hjemmeside", "AI automatisering", "AI agent virksomhed", "AI integration", "AI Horsens", "kunstig intelligens virksomhed"],
    name: "AI-løsninger til virksomheder",
    serviceType: "AI-integration og automatisering",
    eyebrow: "AI-løsninger",
    h1: "AI i din virksomhed: kundeservice, booking og automatisering – implementeret",
    intro:
      "AI er ikke kun noget for store virksomheder. Jeg implementerer praktiske AI-løsninger, der sparer dig timer hver uge, svarer kunder døgnet rundt og gør din virksomhed synlig i både Google og AI-assistenter som ChatGPT.",
    summary:
      "WebHjerte implementerer AI i små og mellemstore virksomheder: AI-chatbot på hjemmesiden, automatisk besvarelse og booking, lead-kvalificering, automatiserede arbejdsgange og AI-synlighed (GEO) i ChatGPT, Gemini og Google AI. AI-funktioner indgår i skræddersyede løsninger fra 14.000 kr, og AI SEO starter fra 3.500 kr (inkl. moms). Du får et fast tilbud inden for 24 timer.",
    sections: [
      {
        h2: "Hvad kan AI konkret gøre for din virksomhed?",
        paragraphs: [
          "De fleste lokale virksomheder bruger mange timer på de samme opgaver: besvare de samme spørgsmål, bekræfte bookinger, sortere henvendelser og skrive ensartede mails. Det er præcis den slags opgaver, AI er god til. Målet er ikke at erstatte dig, men at give dig tid til arbejdet, der kræver et menneske – og sikre, at ingen kunde ender uden svar.",
        ],
        bullets: [
          "Svar kunderne med det samme – også om aftenen og i weekenden.",
          "Kvalificér henvendelser, så du kun bruger tid på relevante kunder.",
          "Book møder og tider automatisk og send påmindelser.",
          "Spar tid på gentagne opgaver: tilbud, bekræftelser, opfølgning.",
          "Bliv nævnt, når kunder spørger ChatGPT, Gemini og Google AI.",
        ],
      },
      {
        h2: "Hvad jeg implementerer",
        subs: [
          {
            h3: "AI-chatbot på hjemmesiden",
            paragraphs: [
              "En chatbot trænet på din virksomheds egne oplysninger – priser, ydelser, åbningstider og typiske spørgsmål. Den svarer dine besøgende, indsamler kontaktoplysninger og sender dig en beskrivelse af henvendelsen. Du bestemmer tone og grænser, og kan altid overtage samtalen.",
            ],
          },
          {
            h3: "Automatisk booking og kundeservice",
            paragraphs: [
              "AI, der hjælper kunden med at vælge tid, bekræfter bookingen og håndterer ændringer. Det sparer telefonopkald og reducerer udeblivelser. Kan kobles på din kalender og dit bookingsystem.",
            ],
          },
          {
            h3: "Lead-kvalificering",
            paragraphs: [
              "AI stiller de rigtige spørgsmål (budget, behov, tidsramme) og leverer en kvalificeret henvendelse direkte til dig – via mail, SMS eller en besked i den kanal, du bruger.",
            ],
          },
          {
            h3: "Automatiserede arbejdsgange",
            paragraphs: [
              "Forbind dine værktøjer, så information flytter sig af sig selv: kontaktformular → CRM → bekræftelsesmail → påmindelse. Jeg sætter workflows op med AI, hvor det giver mening, og simple regler, hvor det er nok.",
            ],
          },
          {
            h3: "AI i webshop og indhold",
            paragraphs: [
              "Produktanbefalinger, automatiske produktbeskrivelser, hjælp til kundeservice om levering og returnering og assistance til indholdsproduktion – med din gennemgang før noget publiceres.",
            ],
          },
          {
            h3: "AI-synlighed (GEO / AI SEO)",
            paragraphs: [
              "Gør din virksomhed let at finde og anbefale, når kunder spørger ChatGPT, Gemini eller Googles AI.",
            ],
          },
        ],
      },
      {
        h2: "Min tilgang: praktisk, ærlig og sikker",
        bullets: [
          "Start med et behov, ikke en teknologi: hvilken opgave koster dig mest tid eller kunder?",
          "Små, målbare skridt – fx en chatbot til de 20 mest stillede spørgsmål.",
          "Mennesket bestemmer: du kan altid gennemgå, justere og overtage.",
          "Datasikkerhed og GDPR: jeg fortæller, hvilke data AI-værktøjet behandler, og sætter samtykke og privatlivspolitik op.",
          "Ingen overdrevne løfter: AI kan tage fejl, så vi tester grundigt og sætter klare rammer.",
        ],
      },
      {
        h2: "Sådan foregår et AI-projekt",
        steps: [
          { title: "Gratis behovsafklaring", text: "Vi gennemgår dine opgaver og finder de steder, hvor AI giver størst effekt." },
          { title: "Konkret forslag og fast pris", text: "Du får en beskrivelse af løsningen, tidsplan og pris inden for 24 timer." },
          { title: "Opsætning og træning", text: "Jeg sætter løsningen op og træner den på dine egne oplysninger." },
          { title: "Test", text: "Vi tester sammen med typiske kundespørgsmål og justerer svar og grænser." },
          { title: "Lancering og opfølgning", text: "Løsningen går live, og jeg følger op på brug og kvalitet, så den bliver bedre over tid." },
        ],
      },
      {
        h2: "For hvem giver AI mest mening?",
        bullets: [
          "Håndværkere og servicevirksomheder, der får mange gentagne forespørgsler og tilbudsønsker.",
          "Saloner, klinikker og restauranter med tidsbestilling og spørgsmål om åbningstider og priser.",
          "Webshops med mange spørgsmål om levering, retur og produkter.",
          "Konsulenter og rådgivere, der vil kvalificere henvendelser, før de bruger tid.",
          "Virksomheder, der vil findes i ChatGPT og Google AI.",
        ],
      },
      {
        h2: "Pris",
        paragraphs: [
          "AI-funktioner indgår i skræddersyede løsninger fra 14.000 kr (inkl. moms). Mindre tilføjelser, fx en chatbot til en eksisterende hjemmeside, aftales individuelt efter behov – du får et fast tilbud inden for 24 timer. AI SEO-pakker starter fra 3.500 kr. Løbende udgifter til AI-værktøjer (fx brug af sprogmodeller) afhænger af omfang og oplyses på forhånd.",
        ],
        cta: { href: "/kontakt", label: "Få et gratis forslag" },
      },
    ],
    faqs: [
      { q: "Hvad koster det at få en AI-chatbot?", a: "AI-funktioner indgår i skræddersyede løsninger fra 14.000 kr inkl. moms. En chatbot til en eksisterende side aftales individuelt, og du får et fast tilbud inden for 24 timer." },
      { q: "Kan AI erstatte min kundeservice?", a: "AI kan overtage de gentagne spørgsmål og give kunden svar med det samme, men du bør altid kunne overtage samtalen. Jeg bygger løsningen, så mennesker stadig har kontrollen." },
      { q: "Er AI-løsninger GDPR-kompatible?", a: "De kan være det, hvis de sættes korrekt op. Jeg gennemgår, hvilke data der behandles, og sætter samtykke og privatlivspolitik op. Har du særlige krav, bør du få dem vurderet af en jurist." },
      { q: "Virker det på min eksisterende hjemmeside?", a: "I de fleste tilfælde ja – uanset om den er bygget i WordPress, Shopify, Webflow eller kode." },
      { q: "Kan jeg se, hvad kunderne spørger om?", a: "Ja. Samtalerne giver værdifuld viden om, hvad kunderne efterspørger, og bruges til at forbedre både svar og hjemmesidens indhold." },
      { q: "Hvad er forskellen på AI-løsninger og AI SEO?", a: "AI-løsninger er funktioner i din virksomhed (chatbot, booking, automatisering). AI SEO handler om at blive fundet og nævnt i Google og AI-assistenter." },
    ],
    related: aiRelated.slice(1).concat([{ href: "/kontakt", title: "Få et tilbud", desc: "Svar inden for 24 timer." }]),
  },
];
