// Platforme (alle typer hjemmesider) og AI-løsninger til virksomheder

const aiRelated = [
  { href: "/ai-loesninger", title: "AI-løsninger til virksomheder", desc: "Chatbot, automatisering og AI-agenter." },
  { href: "/geo-ai-synlighed", title: "AI-synlighed (GEO)", desc: "Bliv nævnt i ChatGPT og Google AI." },
  { href: "/ai-seo", title: "AI SEO-pakker", desc: "Fra 3.500 kr." },
];

export const platformPages = [
  {
    slug: "alle-typer-hjemmesider",
    type: "service",
    title: "Hjemmesider på alle platforme: WordPress, Shopify, Webflow og kode | WebHjerte",
    description:
      "WebHjerte bygger og optimerer alle typer hjemmesider: WordPress, WooCommerce, Shopify, Webflow, Wix, Squarespace og skræddersyet kode (Next.js/React). Vi vælger platformen efter dit behov.",
    keywords: ["wordpress", "shopify", "webflow", "wix", "squarespace", "next.js", "hjemmeside platform", "hvilken platform hjemmeside", "webudvikler"],
    name: "Alle typer hjemmesider",
    serviceType: "Webudvikling på alle platforme",
    eyebrow: "Alle platforme",
    h1: "Vi bygger alle typer hjemmesider – på den platform, der passer til dig",
    intro:
      "WordPress, Shopify, Webflow, Wix eller skræddersyet kode? Jeg arbejder på tværs af platforme og vælger ikke efter vane, men efter hvad din virksomhed, dit budget og din hverdag kræver. Og er du allerede på en platform, optimerer eller flytter jeg gerne.",
    summary:
      "WebHjerte bygger hjemmesider og webshops i WordPress, WooCommerce, Shopify, Webflow, Wix, Squarespace og skræddersyet kode (fx Next.js og React). Platformen vælges efter behov: WordPress til selvredigering, Shopify til hurtig webshop, Webflow til designfrihed og skræddersyet kode til maksimal hastighed og specialfunktioner. Priser fra 2.500 kr (ekskl. moms), og alle løsninger kan udvides med AI-funktioner.",
    sections: [
      {
        h2: "Hvilken platform skal jeg vælge?",
        table: {
          head: ["Platform", "Bedst til", "Styrker", "Vær opmærksom på"],
          rows: [
            ["WordPress", "Virksomhedssider, blogs, selvredigering", "Fleksibelt, stort økosystem, nemt at redigere", "Kræver opdateringer og få, gode plugins"],
            ["WooCommerce", "Webshops på WordPress", "Ingen platformsafgift, fuld kontrol", "Kræver vedligeholdelse og hosting"],
            ["Shopify", "Hurtig, driftssikker webshop", "Betaling, lager og apps er indbygget", "Månedligt abonnement og gebyrer"],
            ["Webflow", "Designstærke sider og kampagner", "Visuel frihed, hurtig hosting", "Mere begrænset til avancerede funktioner"],
            ["Wix / Squarespace", "Meget enkle sider og portfolier", "Hurtig opstart, lav startpris", "Begrænset SEO-kontrol og fleksibilitet"],
            ["Skræddersyet kode (Next.js, React)", "Hastighed, unikke funktioner, integrationer", "Meget hurtig, fuld frihed, lav vedligeholdelse", "Indhold redigeres via CMS eller af udvikler"],
          ],
        },
        paragraphs: ["Tabellen er en tommelfingerregel. Jeg gennemgår dit behov og anbefaler ærligt – også hvis det betyder en enklere og billigere løsning, end du forventede."],
      },
      {
        h2: "Jeg arbejder med både nye og eksisterende sider",
        bullets: [
          "Ny hjemmeside eller webshop på den platform, der passer bedst.",
          "Redesign af en eksisterende side – med bevarelse af indhold og SEO-værdi.",
          "Migrering mellem platforme (fx fra Wix til WordPress eller fra WooCommerce til Shopify) uden at miste placeringer.",
          "Optimering af hastighed, SEO og konvertering på din nuværende platform.",
          "Tilpasninger, plugins, integrationer og fejlretning.",
          "Overtagelse af drift og vedligeholdelse fra en tidligere leverandør.",
        ],
      },
      {
        h2: "WordPress og WooCommerce",
        paragraphs: [
          "WordPress er det mest udbredte redigeringssystem og et godt valg, hvis du selv vil rette tekster, billeder og priser. Jeg bygger skræddersyede designs, optimerer hastighed og SEO og sørger for sikkerhed og opdateringer. Til webshops bruger jeg WooCommerce, når du vil have fuld kontrol og ingen platformsafgift.",
        ],
        cta: { href: "/wordpress-horsens", label: "Læs om WordPress" },
      },
      {
        h2: "Shopify",
        paragraphs: [
          "Shopify er ofte den hurtigste vej til en driftssikker webshop: betaling, lager, fragt og skatteregler er klar fra start. Jeg opsætter butikken, tilpasser design, forbinder betaling og fragt og gør produktsiderne klar til Google.",
        ],
        cta: { href: "/shopify-hjemmeside", label: "Læs om Shopify" },
      },
      {
        h2: "Webflow, Wix og Squarespace",
        paragraphs: [
          "Har du allerede en Webflow-, Wix- eller Squarespace-side, hjælper jeg med design, SEO og tilpasninger. Webflow er et stærkt valg til designdrevne sider og kampagner, mens Wix og Squarespace passer til meget enkle behov. Når din virksomhed vokser ud af platformen, hjælper jeg med at flytte til noget mere fleksibelt.",
        ],
      },
      {
        h2: "Skræddersyet kode: Next.js og React",
        paragraphs: [
          "Til maksimal hastighed, særlige funktioner og integrationer bygger jeg i moderne kode, fx Next.js og React. Siderne er forudgenereret og leveres hurtigt, hvilket giver bedre Core Web Vitals, bedre SEO og lav vedligeholdelse. Det er den teknik, som WebHjerte selv er bygget i.",
        ],
        cta: { href: "/skraeddersyede-hjemmesider", label: "Læs om skræddersyede hjemmesider" },
      },
      {
        h2: "Alle platforme kan få AI",
        paragraphs: [
          "Uanset platform kan jeg tilføje AI: en chatbot, der svarer kunder døgnet rundt, automatisk lead-kvalificering, AI-baseret booking eller automatiske arbejdsgange. Se hvad jeg kan implementere på siden om AI-løsninger.",
        ],
        cta: { href: "/ai-loesninger", label: "AI-løsninger til din virksomhed" },
      },
      {
        h2: "Priser",
        paragraphs: [
          "Priserne er faste og afhænger af omfang, ikke af platform: Landingside fra 2.500 kr, Basis fra 4.500 kr, Standard fra 7.500 kr og skræddersyede løsninger (webshop, kundeportal, AI-funktioner) fra 14.000 kr. Alle priser ekskl. moms. Abonnementer og gebyrer til platforme som Shopify og Webflow betales direkte til udbyderen.",
        ],
        cta: { href: "/hjemmeside-pris", label: "Se alle priser" },
      },
    ],
    faqs: [
      { q: "Hvilke platforme arbejder I med?", a: "WordPress, WooCommerce, Shopify, Webflow, Wix, Squarespace og skræddersyet kode (Next.js og React). Jeg vælger platformen efter dit behov." },
      { q: "Kan I overtage min eksisterende hjemmeside?", a: "Ja. Jeg kan optimere, videreudvikle eller flytte din side til en anden platform – med fokus på at bevare dine placeringer i Google." },
      { q: "Hvilken platform er bedst til SEO?", a: "Alle de nævnte kan give god SEO, hvis de sættes rigtigt op. Skræddersyet kode og WordPress giver mest kontrol, mens Wix og Squarespace er mere begrænsede." },
      { q: "Koster det mere at bygge i Shopify end i WordPress?", a: "Selve udviklingsprisen afhænger af omfang. Shopify har dog løbende abonnement og gebyrer, som du betaler til Shopify." },
      { q: "Kan en hvilken som helst platform få en AI-chatbot?", a: "I de fleste tilfælde ja. Jeg kan integrere en chatbot og andre AI-funktioner på WordPress, Shopify, Webflow og skræddersyede sider." },
    ],
    related: [
      { href: "/wordpress-horsens", title: "WordPress", desc: "Hjemmeside, du selv kan redigere." },
      { href: "/shopify-hjemmeside", title: "Shopify", desc: "Webshop hurtigt og driftssikkert." },
      { href: "/ai-loesninger", title: "AI-løsninger", desc: "Chatbot og automatisering." },
    ],
  },
  {
    slug: "shopify-hjemmeside",
    type: "service",
    title: "Shopify webshop – opsætning, design og SEO | WebHjerte",
    description:
      "Shopify-webshop til danske virksomheder: opsætning, tilpasset design, betaling, fragt og SEO. Hjælp til nye og eksisterende butikker, migrering og AI-funktioner.",
    keywords: ["shopify", "shopify webshop", "shopify udvikler", "shopify opsætning", "webshop shopify pris", "shopify danmark"],
    name: "Shopify webshop",
    serviceType: "Shopify-udvikling",
    eyebrow: "Shopify",
    h1: "Shopify webshop: fra idé til driftssikker butik",
    intro:
      "Jeg hjælper små og mellemstore virksomheder med at opsætte, designe og optimere Shopify-butikker – og med at flytte en eksisterende webshop til Shopify uden at miste placeringer.",
    summary:
      "Shopify er en abonnementsbaseret webshop-platform, hvor betaling, lager og fragt er indbygget. WebHjerte opsætter og designer Shopify-butikker, tilknytter danske betalingsmetoder og fragt, optimerer produktsider til Google og kan tilføje AI-funktioner som chatbot og produktanbefalinger. Skræddersyede webshops starter fra 14.000 kr ekskl. moms.",
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
          "SEO for produkter og kategorier, struktureret data og hastighedsoptimering.",
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
        cta: { href: "/ai-chatbot-til-hjemmeside", label: "AI-chatbot til din webshop" },
      },
      {
        h2: "Pris",
        paragraphs: [
          "Shopify-butikker prissættes efter omfang og starter som skræddersyede løsninger fra 14.000 kr ekskl. moms. Abonnement, apps og gebyrer betaler du direkte til udbyderne. Du får et fast tilbud, før vi starter.",
        ],
        cta: { href: "/kontakt", label: "Få et tilbud på din Shopify-butik" },
      },
    ],
    faqs: [
      { q: "Hvad koster en Shopify webshop?", a: "Hos WebHjerte starter webshops fra 14.000 kr ekskl. moms. Shopifys abonnement og apps kommer oveni og betales til Shopify." },
      { q: "Kan I flytte min webshop til Shopify?", a: "Ja. Jeg flytter produkter, kategorier og indhold og sætter omdirigeringer op, så du bevarer SEO-værdi." },
      { q: "Kan jeg få MobilePay i Shopify?", a: "Ja, via betalingsudbydere, der understøtter MobilePay. Jeg hjælper med opsætningen." },
      { q: "Kan en Shopify-butik få en AI-chatbot?", a: "Ja. Jeg kan integrere en chatbot, der besvarer kundespørgsmål og hjælper med bestillinger." },
    ],
    related: [
      { href: "/webshop-hjemmeside", title: "Webshop", desc: "Alle typer webshops." },
      { href: "/alle-typer-hjemmesider", title: "Alle platforme", desc: "WordPress, Webflow, kode og mere." },
      { href: "/ai-loesninger", title: "AI-løsninger", desc: "Chatbot og automatisering." },
    ],
  },
  {
    slug: "ai-loesninger",
    type: "service",
    title: "AI-løsninger til virksomheder: chatbot, automatisering og AI-agenter | WebHjerte",
    description:
      "Vi implementerer AI i din virksomhed: chatbot på hjemmesiden, automatisk booking og kundeservice, lead-kvalificering, workflows og AI-synlighed i ChatGPT og Google. Baseret i Horsens.",
    keywords: ["AI løsninger virksomhed", "AI chatbot hjemmeside", "AI automatisering", "AI agent virksomhed", "AI integration", "AI Horsens", "kunstig intelligens virksomhed"],
    name: "AI-løsninger til virksomheder",
    serviceType: "AI-integration og automatisering",
    eyebrow: "AI-løsninger",
    h1: "AI i din virksomhed: kundeservice, booking og automatisering – implementeret",
    intro:
      "AI er ikke kun noget for store virksomheder. Jeg implementerer praktiske AI-løsninger, der sparer dig timer hver uge, svarer kunder døgnet rundt og gør din virksomhed synlig i både Google og AI-assistenter som ChatGPT.",
    summary:
      "WebHjerte implementerer AI i små og mellemstore virksomheder: AI-chatbot på hjemmesiden, automatisk besvarelse og booking, lead-kvalificering, automatiserede arbejdsgange og AI-synlighed (GEO) i ChatGPT, Gemini og Google AI. AI-funktioner indgår i skræddersyede løsninger fra 14.000 kr, og AI SEO starter fra 3.500 kr (ekskl. moms). Du får et fast tilbud inden for 24 timer.",
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
              "Gør din hjemmeside nem at citere for ChatGPT, Gemini, Perplexity og Google AI-oversigter med struktureret data, svar-først-indhold og llms.txt.",
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
          "AI-funktioner indgår i skræddersyede løsninger fra 14.000 kr (ekskl. moms). Mindre tilføjelser, fx en chatbot til en eksisterende hjemmeside, aftales individuelt efter behov – du får et fast tilbud inden for 24 timer. AI SEO-pakker starter fra 3.500 kr. Løbende udgifter til AI-værktøjer (fx brug af sprogmodeller) afhænger af omfang og oplyses på forhånd.",
        ],
        cta: { href: "/kontakt", label: "Få et gratis forslag" },
      },
    ],
    faqs: [
      { q: "Hvad koster det at få en AI-chatbot?", a: "AI-funktioner indgår i skræddersyede løsninger fra 14.000 kr ekskl. moms. En chatbot til en eksisterende side aftales individuelt, og du får et fast tilbud inden for 24 timer." },
      { q: "Kan AI erstatte min kundeservice?", a: "AI kan overtage de gentagne spørgsmål og give kunden svar med det samme, men du bør altid kunne overtage samtalen. Jeg bygger løsningen, så mennesker stadig har kontrollen." },
      { q: "Er AI-løsninger GDPR-kompatible?", a: "De kan være det, hvis de sættes korrekt op. Jeg gennemgår, hvilke data der behandles, og sætter samtykke og privatlivspolitik op. Har du særlige krav, bør du få dem vurderet af en jurist." },
      { q: "Virker det på min eksisterende hjemmeside?", a: "I de fleste tilfælde ja – uanset om den er bygget i WordPress, Shopify, Webflow eller kode." },
      { q: "Kan jeg se, hvad kunderne spørger om?", a: "Ja. Samtalerne giver værdifuld viden om, hvad kunderne efterspørger, og bruges til at forbedre både svar og hjemmesidens indhold." },
      { q: "Hvad er forskellen på AI-løsninger og AI SEO?", a: "AI-løsninger er funktioner i din virksomhed (chatbot, booking, automatisering). AI SEO handler om at blive fundet og nævnt i Google og AI-assistenter." },
    ],
    related: aiRelated.slice(1).concat([{ href: "/ai-chatbot-til-hjemmeside", title: "AI-chatbot", desc: "Svar kunder døgnet rundt." }]),
  },
  {
    slug: "ai-chatbot-til-hjemmeside",
    type: "service",
    title: "AI-chatbot til hjemmeside: svar kunder 24/7 | WebHjerte",
    description:
      "AI-chatbot til din hjemmeside eller webshop: svarer på kundespørgsmål, kvalificerer leads og booker tider – trænet på din virksomheds egne oplysninger. Fast pris og GDPR-opsætning.",
    keywords: ["AI chatbot hjemmeside", "chatbot til hjemmeside", "chatbot virksomhed", "chatbot webshop", "AI kundeservice", "AI booking"],
    name: "AI-chatbot til hjemmeside",
    serviceType: "AI-chatbot",
    eyebrow: "AI-chatbot",
    h1: "AI-chatbot til din hjemmeside: svar kunderne, mens du arbejder",
    intro:
      "En chatbot, der kender din virksomhed, svarer på kundernes spørgsmål med det samme, indsamler henvendelser og booker tider – også uden for åbningstid.",
    summary:
      "En AI-chatbot er en samtaleassistent på din hjemmeside, der besvarer spørgsmål ud fra din virksomheds egne oplysninger, kvalificerer leads og kan booke tider. WebHjerte implementerer chatbots på WordPress, Shopify, Webflow og skræddersyede sider med GDPR-opsætning. Chatbots indgår i skræddersyede løsninger fra 14.000 kr, mindre opsætninger tilbydes efter individuelt tilbud.",
    sections: [
      {
        h2: "Hvad er en AI-chatbot?",
        paragraphs: [
          "En AI-chatbot er et lille vindue på din hjemmeside, hvor besøgende kan stille spørgsmål i almindeligt sprog. Den bruger en sprogmodel (samme teknologi som ChatGPT), men besvarer kun ud fra de oplysninger, du giver den: priser, ydelser, åbningstider, levering, ofte stillede spørgsmål og kontaktveje.",
          "Det adskiller den fra gamle “regelbaserede” chatbots, som kun kunne give faste svar. En AI-chatbot forstår spørgsmålet, selv når det er formuleret på mange måder, og kan svare naturligt.",
        ],
      },
      {
        h2: "Hvad kan chatbotten?",
        bullets: [
          "Besvare spørgsmål om priser, ydelser, åbningstider, levering og returnering.",
          "Indsamle navn, kontaktoplysninger og beskrivelse af behovet.",
          "Kvalificere leads ved at stille opfølgende spørgsmål.",
          "Hjælpe kunden med at booke en tid eller et opkald.",
          "Henvise til de rigtige sider, produkter eller kontaktpersoner.",
          "Overdrage samtalen til dig, når spørgsmålet kræver et menneske.",
          "Svare på dansk og andre sprog.",
        ],
      },
      {
        h2: "Hvad får du ud af det?",
        table: {
          head: ["Fordel", "Forklaring"],
          rows: [
            ["Svar 24/7", "Kunden får hjælp med det samme – også aften og weekend"],
            ["Flere henvendelser", "Besøgende, der ellers forlader siden, bliver fanget"],
            ["Tidsbesparelse", "Gentagne spørgsmål bliver besvaret automatisk"],
            ["Bedre leads", "Du modtager henvendelser med relevant information"],
            ["Indsigt", "Du lærer, hvad kunderne egentlig spørger om"],
          ],
        },
      },
      {
        h2: "Sikkerhed, GDPR og kontrol",
        paragraphs: [
          "Jeg sætter chatbotten op, så den tydeligt oplyser, at den er en AI, og så besøgende kender til databehandlingen. Privatlivspolitikken opdateres, så den beskriver, hvilke data chatbotten behandler. Du bestemmer, hvad den må og ikke må svare på, og kan til enhver tid se samtalerne.",
          "AI kan i sjældne tilfælde tage fejl. Derfor tester jeg den grundigt på typiske spørgsmål, sætter klare grænser og sørger for, at kunder altid kan nå et menneske.",
        ],
      },
      {
        h2: "Hvilke platforme?",
        paragraphs: [
          "Chatbotten kan integreres på WordPress, WooCommerce, Shopify, Webflow og skræddersyede Next.js-sider. Har du allerede en hjemmeside, tilføjer jeg den uden at bygge siden om.",
        ],
        cta: { href: "/alle-typer-hjemmesider", label: "Se platforme" },
      },
      {
        h2: "Pris og forløb",
        paragraphs: [
          "AI-chatbots indgår i skræddersyede løsninger fra 14.000 kr ekskl. moms. En chatbot til en eksisterende hjemmeside aftales individuelt efter, hvor meget den skal kunne – du får et fast tilbud inden for 24 timer. De fleste chatbots kan sættes op på få dage, når dine oplysninger er samlet.",
        ],
        cta: { href: "/kontakt", label: "Få et gratis forslag" },
      },
    ],
    faqs: [
      { q: "Hvad koster en AI-chatbot til hjemmesiden?", a: "AI-funktioner indgår i skræddersyede løsninger fra 14.000 kr ekskl. moms. En chatbot til en eksisterende hjemmeside aftales individuelt, og du får et fast tilbud inden for 24 timer." },
      { q: "Kan chatbotten finde på forkerte svar?", a: "Det kan ske i sjældne tilfælde. Derfor begrænser jeg den til dine egne oplysninger, tester grundigt og sætter regler for, hvad den ikke må svare på." },
      { q: "Kan jeg selv rette i, hvad chatbotten ved?", a: "Ja. Jeg viser, hvordan du opdaterer viden, priser og svar, så chatbotten altid er aktuel." },
      { q: "Er det GDPR-kompatibelt?", a: "Det kan det være, når det er sat korrekt op med information om AI, samtykke og opdateret privatlivspolitik. Jeg hjælper med opsætningen." },
    ],
    related: [
      { href: "/ai-loesninger", title: "AI-løsninger", desc: "Alt det AI kan hjælpe med." },
      { href: "/shopify-hjemmeside", title: "Shopify", desc: "Webshop med AI." },
      { href: "/geo-ai-synlighed", title: "AI-synlighed", desc: "Bliv nævnt i AI-svar." },
    ],
  },
  {
    slug: "ai-automatisering-virksomhed",
    type: "service",
    title: "AI-automatisering for små virksomheder: spar tid hver uge | WebHjerte",
    description:
      "Automatiser gentagne opgaver med AI: tilbud, bookinger, opfølgning, kundeservice og rapporter. Praktiske eksempler og fast pris til små og mellemstore virksomheder.",
    keywords: ["AI automatisering", "automatisering virksomhed", "AI agent", "workflow automatisering", "AI til små virksomheder", "Zapier Make n8n"],
    name: "AI-automatisering",
    serviceType: "AI-automatisering",
    eyebrow: "AI-automatisering",
    h1: "AI-automatisering: lad systemerne klare de kedelige opgaver",
    intro:
      "Hver uge går der timer med at flytte information rundt, sende de samme mails og følge op på henvendelser. Jeg automatiserer det – med AI, hvor det giver mening, og med simple regler, hvor det er nok.",
    summary:
      "AI-automatisering betyder, at software overtager gentagne arbejdsopgaver: fra kontaktformular til CRM og bekræftelsesmail, automatiske påmindelser, opsamling af leads, rapporter og besvarelse af standardspørgsmål. WebHjerte designer og implementerer automatiseringer for små og mellemstore virksomheder, typisk som en del af en skræddersyet løsning fra 14.000 kr eller som mindre projekter efter individuelt tilbud.",
    sections: [
      {
        h2: "Hvad kan automatiseres?",
        table: {
          head: ["Område", "Eksempel på automatisering"],
          rows: [
            ["Henvendelser", "Kontaktformular → AI vurderer behov → besked til dig og bekræftelsesmail til kunden"],
            ["Booking", "Kunden vælger tid → kalender opdateres → SMS-påmindelse dagen før"],
            ["Kundeservice", "Chatbot besvarer standardspørgsmål og sender komplekse sager videre"],
            ["Salg", "Ny lead → registreres i CRM → opfølgningsmail efter 3 dage"],
            ["Anmeldelser", "Efter udført opgave → automatisk anmodning om Google-anmeldelse"],
            ["Indhold", "Udkast til tekster og opslag, som du gennemgår og godkender"],
            ["Rapportering", "Ugentlig oversigt over henvendelser, trafik og bookinger"],
          ],
        },
      },
      {
        h2: "Min tilgang",
        steps: [
          { title: "Kortlæg tidsslugerne", text: "Vi finder de 3–5 opgaver, der koster mest tid eller giver flest tabte kunder." },
          { title: "Vælg værktøjer", text: "Jeg bruger gennemprøvede værktøjer og egne integrationer – og vælger den enkleste løsning, der virker." },
          { title: "Byg og test", text: "Automatiseringen sættes op og testes med virkelige eksempler." },
          { title: "Overlevér", text: "Du får en kort dokumentation og ved præcis, hvad der sker i baggrunden." },
          { title: "Følg op", text: "Vi justerer, når vi har set den i brug." },
        ],
      },
      {
        h2: "Hvad er en AI-agent?",
        paragraphs: [
          "En AI-agent er en assistent, der ikke kun besvarer spørgsmål, men også udfører opgaver – fx at slå en tid op i kalenderen, oprette en kunde i systemet eller sende en mail. For små virksomheder giver agenter mest værdi i afgrænsede opgaver med klare regler. Jeg bygger dem med rammer og godkendelser, så du altid har kontrollen.",
        ],
      },
      {
        h2: "Realistiske forventninger",
        bullets: [
          "AI er et værktøj, ikke et trylleslag – de bedste resultater kommer, når processen er klar.",
          "Alt, der påvirker kunder eller økonomi, bør kunne gennemgås af et menneske.",
          "Du betaler for brug af AI-tjenester løbende – jeg oplyser forventede omkostninger på forhånd.",
          "Start småt og udvid, når du ser effekten.",
        ],
      },
      {
        h2: "Pris",
        paragraphs: [
          "Automatiseringer indgår i skræddersyede løsninger fra 14.000 kr ekskl. moms. Mindre automatiseringer aftales individuelt, og du får et fast tilbud inden for 24 timer.",
        ],
        cta: { href: "/kontakt", label: "Fortæl, hvad du vil automatisere" },
      },
    ],
    faqs: [
      { q: "Hvad kan jeg spare med automatisering?", a: "Det afhænger af opgaverne, men mange virksomheder sparer flere timer om ugen på bookinger, opfølgning og kundespørgsmål." },
      { q: "Skal jeg skifte mine nuværende systemer?", a: "Normalt ikke. Jeg forbinder de værktøjer, du allerede bruger." },
      { q: "Er det sikkert at bruge AI med kundedata?", a: "Det kan det være med korrekt opsætning, databehandleraftaler og information til kunderne. Jeg hjælper med at vælge sikre løsninger." },
    ],
    related: aiRelated.concat([]),
  },
];
