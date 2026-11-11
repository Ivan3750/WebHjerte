// Sider om synlighed i AI-søgning (GEO / AI Overviews / ChatGPT / Perplexity)

export const aiPages = [
];

export const aiArticles = [
  {
    slug: "saadan-bliver-du-nevnt-af-chatgpt-og-google-ai",
    title: "Bliv nævnt af ChatGPT og Google AI: 12 tiltag | WebHjerte",
    description:
      "Praktisk guide til lokale virksomheder: 12 konkrete tiltag, der gør din hjemmeside nem at citere for ChatGPT, Google AI Overviews, Gemini og Perplexity.",
    keywords: ["ChatGPT synlighed", "AI Overviews", "GEO guide", "blive nævnt i ChatGPT"],
    name: "Bliv nævnt af ChatGPT og Google AI",
    category: "AI-synlighed",
    h1: "Sådan bliver din virksomhed nævnt af ChatGPT og Google AI",
    intro:
      "Flere og flere kunder spørger ChatGPT i stedet for at google. Her er de 12 ting, jeg selv gør på mine kunders hjemmesider – og på min egen – for at blive nævnt i svaret.",
    summary:
      "For at blive nævnt i AI-svar skal din hjemmeside besvare kundernes spørgsmål klart og tidligt, have korrekte og ensartede virksomhedsoplysninger, bruge struktureret data (schema.org), være hurtig og tillade AI-crawlere i robots.txt. Der findes ingen garanti, men disse tiltag øger sandsynligheden markant.",
    published: "2026-11-06",
    updated: "2026-11-10",
    readMinutes: 10,
    sections: [
      {
        h2: "Hvorfor skal du overhovedet bekymre dig om AI-svar?",
        paragraphs: [
          "Når en potentiel kunde spørger en AI-assistent om en lokal leverandør, får de ét sammenhængende svar – ikke en liste, de selv skal vurdere. Det betyder, at færre virksomheder får opmærksomhed, men dem, der bliver nævnt, får den til gengæld ofte i form af en anbefaling. At være med i svaret er derfor mere værdifuldt end en placering som nummer seks i søgeresultaterne.",
          "Den gode nyhed er, at mange af tiltagene er enkle, og at de også forbedrer din almindelige SEO. Du behøver ikke vælge mellem Google og AI – de to trækker i samme retning.",
        ],
        quote: "I AI-søgning findes der ingen side 2. Enten bliver du nævnt, eller også gør du ikke.",
      },
      {
        h2: "Hvad jeg selv har set virke",
        paragraphs: [
          "WebHjerte er et ungt firma fra 2026. Alligevel kan jeg i Google Search Console se, at siden allerede bliver vist på lange spørgsmål som “hvilket bureau er specialist i AI SEO?” og “hvordan får jeg min virksomhed nævnt i AI-svar som Perplexity og Google AI?” – ofte i top 3–6. Ikke fordi jeg har et stort budget, men fordi siderne svarer direkte på præcis de spørgsmål.",
          "Det er den vigtigste lære: AI-systemer belønner ikke den største virksomhed. De belønner den, der har det klareste, mest konkrete svar – med pris, sted og en tydelig afsender. Det kan en lokal tømrer i Horsens sagtens konkurrere på.",
        ],
      },
      {
        h2: "De 12 tiltag",
        subs: [
          {
            h3: "1. Skriv svaret først",
            paragraphs: [
              "Start hver vigtig side med et kort svar på spørgsmålet, siden handler om. “Hvad koster en hjemmeside? Hos os starter priserne fra 2.500 kr.” AI-systemer henter ofte de første sætninger, så placér dit bedste svar der.",
            ],
          },
          {
            h3: "2. Brug kundernes egne ord",
            paragraphs: [
              "Lyt efter, hvordan dine kunder formulerer sig i telefonen og i mails, og brug de samme ord i overskrifter og FAQ. Search Console viser desuden, hvilke søgninger din side allerede vises på.",
            ],
          },
          {
            h3: "3. Lav en rigtig FAQ",
            paragraphs: [
              "Saml 6–10 reelle spørgsmål med korte, ærlige svar. Marker dem som FAQPage i struktureret data. FAQ-formatet passer perfekt til hvordan AI-assistenter bygger svar.",
            ],
          },
          {
            h3: "4. Gør afsenderen tydelig",
            paragraphs: [
              "Skriv, hvem I er, hvor I holder til, CVR-nummer, telefon og e-mail. Vis en forfatter på guides, og link til en om-side. Troværdighed (E-E-A-T) handler om at kunne dokumentere, hvem der står bag.",
            ],
          },
          {
            h3: "5. Hold dine oplysninger ens overalt",
            paragraphs: [
              "Navn, adresse, telefon og åbningstider skal være identiske på hjemmesiden, Google Virksomhedsprofil, Facebook, LinkedIn og i kataloger. Modstridende oplysninger gør AI-systemer usikre.",
            ],
          },
          {
            h3: "6. Tilføj struktureret data",
            paragraphs: [
              "Brug schema.org-markup (JSON-LD) til Organization/LocalBusiness, Service, Offer, FAQPage, Article og BreadcrumbList. Det er ikke synligt for besøgende, men giver maskiner et præcist kort over indholdet.",
            ],
          },
          {
            h3: "7. Vis priser og fakta i tabeller",
            paragraphs: [
              "AI-systemer elsker klare tal. En simpel tabel med pakker, priser og leveringstid er lettere at citere end tre afsnit med omskrivninger.",
            ],
          },
          {
            h3: "8. Gør hjemmesiden hurtig og ren",
            paragraphs: [
              "Langsomme sider med tung JavaScript bliver crawlet dårligere. Optimer billeder, brug moderne format (WebP/AVIF) og undgå, at vigtigt indhold først dukker op efter klik eller scroll.",
            ],
          },
          {
            h3: "9. Tillad AI-crawlere",
            paragraphs: [
              "Tjek din robots.txt. Blokerer du GPTBot, ClaudeBot, PerplexityBot eller Google-Extended, kan de ikke læse din side. Det er en bevidst beslutning – men mange blokerer ved en fejl via en sikkerhedsplugin.",
            ],
          },
          {
            h3: "10. Opret llms.txt",
            paragraphs: [
              "En llms.txt er en kort, læsbar opsummering af virksomheden og dine vigtigste sider. Den er endnu ikke en officiel standard, men er enkel at lave og bruges af flere værktøjer.",
            ],
          },
          {
            h3: "11. Byg interne links og emneklynger",
            paragraphs: [
              "Lav en hovedside om dit emne (fx “Webdesign Horsens”) og understøt den med guides om pris, tid og sammenligning. Link imellem dem, så det er tydeligt, at du dækker emnet i dybden.",
            ],
          },
          {
            h3: "12. Opdater og datér indholdet",
            paragraphs: [
              "Vis, hvornår en side sidst er opdateret, og gennemgå dine priser og fakta mindst en gang om kvartalet. Forældede tal er en af de hyppigste årsager til, at gode sider bliver fravalgt.",
            ],
          },
        ],
      },
      {
        h2: "Sådan tjekker du, om det virker",
        paragraphs: [
          "Stil dine kunders spørgsmål i ChatGPT, Gemini, Perplexity og Google, og notér, hvilke virksomheder der bliver nævnt og hvilke kilder der vises. Gentag hver måned med de samme spørgsmål, så du kan sammenligne. Brug samtidig Google Search Console til at se, hvilke sider der vises, og hvilke søgninger der giver klik.",
          "Husk, at AI-svar varierer fra gang til gang. Se på tendensen over tid frem for på enkelte svar.",
        ],
      },
      {
        h2: "Brug for hjælp?",
        paragraphs: [
          "Jeg gennemgår gerne din hjemmeside og siger ærligt, hvad der mangler. Det er gratis og uden binding. Vil du have det hele bygget ind fra start, indeholder alle nye hjemmesider fra WebHjerte de tekniske elementer fra listen ovenfor.",
        ],
        cta: { href: "/gratis-seo-tjek-horsens", label: "Få et gratis SEO-tjek" },
      },
    ],
    faqs: [
      {
        q: "Kan en lille lokal virksomhed blive nævnt af ChatGPT?",
        a: "Ja. AI-assistenter nævner ofte lokale virksomheder, når de har klare oplysninger om sted, ydelser og priser. Størrelsen er mindre vigtig end tydelighed og troværdighed.",
      },
      {
        q: "Skal jeg blokere AI-crawlere for at beskytte mit indhold?",
        a: "Det er et valg. Vil du have trafik og omtale fra AI-søgning, skal crawlerne tillades. Vil du ikke have, at indholdet bruges til træning, kan du styre det med specifikke regler i robots.txt.",
      },
      {
        q: "Hvad er det vigtigste enkelte tiltag?",
        a: "At besvare kundernes spørgsmål klart og tidligt på siden og at have korrekte, ens virksomhedsoplysninger overalt.",
      },
    ],
    related: [
      { href: "/ai-seo", title: "AI SEO", desc: "Min metode til at blive fundet i Google og nævnt i AI-svar." },
      { href: "/blog/seo-tjekliste-lokale-virksomheder", title: "SEO-tjekliste", desc: "Lokal SEO trin for trin." },
    ],
  },
];
