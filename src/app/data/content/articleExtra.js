/**
 * Ekstra afsnit til blogartiklerne, så hver guide kan læses og bruges i ca. 10 minutter.
 * Afsnittene sættes ind før artiklens sidste "Brug for hjælp?"-afsnit (se enrichArticle nederst).
 * Tal og priser er de samme som resten af sitet (packages.js, supportPlans.js). Eksempler er markeret som eksempler.
 */

import { articleDeep, articleDeepFaqs } from "./articleDeep.js";

export const articleMore = {
  /* ───────────────────── Sådan bliver du nævnt af ChatGPT og Google AI ───────────────────── */
  "saadan-bliver-du-nevnt-af-chatgpt-og-google-ai": {
    sections: [
      {
        h2: "Sådan finder AI-assistenter deres svar",
        paragraphs: [
          "Det hjælper at forstå, hvor svarene kommer fra. En AI-assistent har to kilder: det, den lærte, da modellen blev trænet, og det, den slår op på nettet, mens du venter. Den første kilde ændrer sig langsomt – måske en gang om året. Den anden ændrer sig hele tiden.",
          "Når en kunde spørger om noget lokalt og aktuelt – “hvem laver badeværelser i Horsens?” – bruger de fleste assistenter i dag den anden kilde. De søger, læser et udvalg af sider og skriver et svar med henvisninger. Google gør det samme i sine AI-oversigter, bare med sit eget søgeindeks.",
          "Konsekvensen er enkel: Hvis din side ikke kan findes og læses af en søgemaskine, kan den heller ikke blive citeret af en AI. AI-synlighed er derfor ikke en erstatning for almindelig SEO – det er en forlængelse af den.",
        ],
        callout: { tone: "tip", title: "Det vigtigste at huske", text: "AI citerer det, den kan finde, forstå og stole på. Arbejd på alle tre – i den rækkefølge." },
      },
      {
        h2: "Skriv sider, der kan citeres",
        paragraphs: [
          "En AI-assistent leder efter korte, præcise svar, den kan løfte direkte ind i sin tekst. Marketingsprog som “vi brænder for kvalitet” giver den intet at arbejde med. Konkrete oplysninger gør.",
          "Den bedste opskrift er at stille spørgsmålet i overskriften og svare i første sætning. Uddybningen kommer bagefter. Det er også sådan, mennesker læser på nettet: de skimmer overskrifterne og stopper, når de har fået svar.",
        ],
        table: {
          head: ["Svært at citere", "Let at citere"],
          rows: [
            ["Vi tilbyder professionelle løsninger til konkurrencedygtige priser.", "Et nyt badeværelse koster typisk fra 85.000 kr inkl. moms (eksempel). Du får en fast pris efter besigtigelse."],
            ["Vi dækker et stort område.", "Vi arbejder i Horsens, Hedensted, Brædstrup og Gedved."],
            ["Kontakt os for mere information.", "Ring på 12 34 56 78 hverdage kl. 7–16, eller skriv – vi svarer samme dag."],
          ],
        },
        after: ["Eksemplerne til højre er opdigtede, men pointen er reel: tal, steder og tider er det, der bliver citeret."],
      },
      {
        h2: "Din virksomhed som én tydelig “enhed”",
        paragraphs: [
          "Søgemaskiner og AI forsøger at forstå din virksomhed som én ting med ét navn, én adresse og én beskrivelse. Hvis navnet staves forskelligt tre steder, eller telefonnummeret er gammelt på et af dem, bliver billedet uklart – og en uklar kilde bliver sjældent anbefalet.",
          "Gå derfor de steder igennem, hvor din virksomhed er nævnt: hjemmesiden, Google Virksomhedsprofil, Facebook, LinkedIn og danske kataloger som Krak og De Gule Sider. Sørg for, at navn, adresse, telefon og den korte beskrivelse er ens overalt.",
        ],
        bullets: [
          "Samme virksomhedsnavn overalt – også med eller uden “ApS”",
          "Samme adresse og telefonnummer på hjemmesiden og i Google",
          "En “Om”-side, der fortæller, hvem der står bag, og hvor længe I har eksisteret",
          "Anmeldelser på Google, som du svarer på",
          "Omtale andre steder: lokale foreninger, leverandører og lokalmedier",
        ],
      },
      {
        h2: "Struktureret data i praksis",
        paragraphs: [
          "Struktureret data er en lille blok kode på siden, som fortæller maskiner præcis, hvad der står: dette er en virksomhed, den ligger her, den tilbyder disse ydelser, og her er svarene på de mest stillede spørgsmål. Den bruges af Google og læses også af mange andre systemer.",
          "Du behøver ikke kunne kode for at forstå princippet. Det vigtige er, at de oplysninger, der står i koden, også står synligt på siden – ellers kan Google se bort fra dem.",
        ],
        subs: [
          { h3: "LocalBusiness / Organization", paragraphs: ["Navn, adresse, telefon, åbningstider og links til dine profiler. Grundlaget for, at du bliver forstået som en rigtig virksomhed."] },
          { h3: "Service", paragraphs: ["Hvad du tilbyder, hvor, og gerne fra hvilken pris. Gør det lettere at matche dig med konkrete spørgsmål."] },
          { h3: "FAQPage", paragraphs: ["Spørgsmål og svar, der også står synligt på siden. Et af de formater, AI-assistenter har lettest ved at bruge."] },
          { h3: "BreadcrumbList", paragraphs: ["Viser, hvor siden ligger i strukturen. Lille ting, men det hjælper søgemaskiner med at forstå sammenhængen."] },
        ],
      },
      {
        h2: "Fejl, der gør dig usynlig",
        paragraphs: ["Nogle af de mest almindelige problemer har intet med indhold at gøre. De handler om, at maskinerne slet ikke kan komme til."],
        bullets: [
          "AI-crawlere er blokeret i robots.txt – ofte uden at ejeren ved det",
          "Vigtige oplysninger står kun i billeder eller PDF-filer",
          "Siden viser først indhold, når JavaScript er kørt færdigt, og nogle crawlere ser en tom side",
          "Priser og åbningstider er forskellige på hjemmesiden og i Google",
          "Der er ingen side om, hvem der står bag virksomheden",
          "Hundredvis af næsten ens sider med skiftende bynavne",
        ],
      },
      {
        h2: "En plan for de næste 30 dage",
        paragraphs: ["Du behøver ikke gøre det hele på én gang. Her er en rækkefølge, der giver mest for indsatsen."],
        steps: [
          { title: "Uge 1: Kan du findes?", text: "Tjek robots.txt, opret Google Search Console, og søg på dit eget firmanavn i Google, ChatGPT og Perplexity. Skriv ned, hvad der står." },
          { title: "Uge 2: Ens oplysninger", text: "Ret navn, adresse, telefon og beskrivelse på hjemmesiden, i Google Virksomhedsprofil og i de vigtigste kataloger." },
          { title: "Uge 3: Svar på spørgsmålene", text: "Skriv de ti spørgsmål, kunderne oftest stiller, og svar på dem kort og konkret – på de sider, de hører til." },
          { title: "Uge 4: Struktur og måling", text: "Tilføj struktureret data, bed fem kunder om en anmeldelse, og gentag søgningerne fra uge 1 for at se forskellen." },
        ],
      },
    ],
    faqs: [
      { q: "Hvad er llms.txt, og skal jeg have den?", a: "llms.txt er en foreslået fil, der giver AI-systemer en kort oversigt over dit indhold. Det er ikke en officiel standard, og ingen kan love, at den bliver brugt. Den er billig at lave, så jeg tilføjer den, men den erstatter ikke god tekst og en sund hjemmeside." },
      { q: "Hvor hurtigt ændrer AI-svarene sig, når jeg forbedrer siden?", a: "Svar, der bygger på søgning, kan ændre sig inden for dage eller uger, når siden er blevet læst igen. Det, modellen har lært under træningen, ændrer sig langsomt. Tjek derfor flere assistenter og gentag søgningen jævnligt." },
    ],
  },

  /* ───────────────────── AI i små virksomheder: 10 eksempler ───────────────────── */
  "ai-i-smaa-virksomheder-10-eksempler": {
    sections: [
      {
        h2: "Sådan vælger du det første AI-projekt",
        paragraphs: [
          "Det mest almindelige fejltrin er at starte for stort. “Vi skal have AI i hele forretningen” ender som regel med et halvt projekt, ingen bruger. Start i stedet med én opgave, der gentager sig ofte, følger faste regler og ikke koster dyrt, hvis den en dag går galt.",
          "Skriv tre kandidater ned og giv dem point fra 1 til 3 på fire spørgsmål. Den med flest point er dit første projekt.",
        ],
        table: {
          head: ["Spørgsmål", "Hvorfor det betyder noget"],
          rows: [
            ["Hvor ofte sker opgaven?", "Dagligt giver mere effekt end en gang om måneden."],
            ["Følger den faste regler?", "Jo mere fast, jo bedre kan AI hjælpe."],
            ["Hvad sker der, hvis den går galt?", "Lav risiko først – fx et udkast, du selv læser igennem."],
            ["Kan du måle effekten?", "Minutter sparet eller flere henvendelser gør det let at se, om det virker."],
          ],
        },
      },
      {
        h2: "Regn på det, før du starter",
        paragraphs: [
          "AI er kun interessant, hvis den sparer tid eller giver flere kunder. Det kan du regne på med et enkelt stykke papir. Skriv, hvor mange minutter opgaven tager om dagen, og gang med antal arbejdsdage.",
          "Et eksempel: Bruger du 20 minutter om dagen på at svare på de samme spørgsmål i telefonen og på mail, er det over et år med ca. 220 arbejdsdage omkring 73 timer. Kan en chatbot tage halvdelen, har du fået mere end en arbejdsuge tilbage.",
          "Sammenlign det med, hvad løsningen koster at sætte op og drive. Er gevinsten ikke tydelig på papiret, bliver den det sjældent i virkeligheden.",
        ],
        callout: { tone: "tip", title: "Mål før og efter", text: "Notér i en uge, hvor lang tid opgaven tager i dag. Uden et udgangspunkt kan du ikke se, om AI har hjulpet." },
      },
      {
        h2: "Værktøjer – uden at binde dig",
        paragraphs: [
          "Du behøver ikke købe en stor platform. De fleste små virksomheder kan komme langt med værktøjer i fire kategorier – og mange har allerede noget af det i de programmer, de bruger.",
        ],
        subs: [
          { h3: "AI-assistenter", paragraphs: ["ChatGPT, Claude og Gemini kan skrive udkast, opsummere og omformulere. Brug en erhvervsversion, hvis du arbejder med kundedata."] },
          { h3: "Automatisering", paragraphs: ["Zapier, Make og n8n forbinder dine systemer: en ny henvendelse kan fx automatisk lande i kalenderen og udløse en bekræftelse."] },
          { h3: "AI i det, du allerede har", paragraphs: ["Microsoft 365 og Google Workspace har AI-funktioner til mail, dokumenter og møder. Tjek, hvad du allerede betaler for."] },
          { h3: "Chatbot på hjemmesiden", paragraphs: ["En chatbot, der kun svarer ud fra dine egne oplysninger, og som sender henvendelserne videre til dig."], cta: { href: "/ai-chatbot-til-hjemmeside", label: "Se hvordan en chatbot virker" } },
        ],
      },
      {
        h2: "GDPR og AI – det korte overblik",
        paragraphs: [
          "Den vigtigste regel er enkel: Kopiér ikke personoplysninger om kunder ind i et gratis AI-værktøj, medmindre du ved, hvordan data behandles. Erhvervsversioner har typisk bedre vilkår og en databehandleraftale – læs dem.",
          "Har du en chatbot på hjemmesiden, skal besøgende kunne se, at de taler med en AI, og din privatlivspolitik skal beskrive, hvilke oplysninger der gemmes. EU's AI-forordning stiller netop krav om, at folk får at vide, når de taler med en AI.",
        ],
        bullets: [
          "Brug erhvervsversioner med databehandleraftale til kundedata",
          "Fortæl tydeligt, når kunden taler med en AI",
          "Opdatér privatlivspolitikken, før du går live",
          "Gem ikke mere, end du har brug for",
          "Lad et menneske tage beslutninger, der har betydning for kunden",
        ],
      },
      {
        h2: "Når AI ikke er svaret",
        paragraphs: [
          "Nogle gange er det rigtige svar en bedre hjemmeside, en enklere proces eller en telefon, der bliver taget. Hvis kunderne ringer, fordi prisen ikke står nogen steder, er løsningen at skrive prisen – ikke at bygge en chatbot, der fortæller den.",
          "Det samme gælder opgaver, hvor tillid og personlig kontakt er hele pointen: et svært kundeforløb, en klage eller en stor ordre. Her er AI bedst som hjælper i baggrunden, fx til at skrive et første udkast, du selv gør færdigt.",
        ],
      },
    ],
    faqs: [
      { q: "Skal jeg betale for ChatGPT til min virksomhed?", a: "Du kan sagtens teste med en gratis version. Men arbejder du med kundeoplysninger, bør du bruge en erhvervsversion med klare vilkår for, hvordan data behandles." },
      { q: "Kan AI skrive teksterne til min hjemmeside?", a: "AI kan skrive et godt første udkast, men du bør altid rette det til, så det lyder som dig og indeholder dine egne fakta. Google vurderer, om teksten er nyttig for læseren – ikke hvem der har skrevet den." },
    ],
  },

  /* ───────────────────── Hvad koster en hjemmeside om året? ───────────────────── */
  "hvad-koster-en-hjemmeside-om-aaret": {
    sections: [
      {
        h2: "Domænet: lille udgift, stor betydning",
        paragraphs: [
          "Et .dk-domæne koster ca. 100–200 kr om året. Det er den billigste post på listen, men den vigtigste at have styr på. Domænet er din adresse på nettet – og din mail, hvis du bruger navn@dinvirksomhed.dk.",
          "Sørg for, at domænet står i dit eget eller virksomhedens navn, og at fornyelsen sker automatisk. Udløber et domæne, holder hjemmesiden og mailen op med at virke, og i værste fald kan andre registrere det.",
        ],
        callout: { tone: "warning", title: "Tjek det i dag", text: "Find ud af, hvem der står som ejer af dit domæne. Står bureauet eller en tidligere medarbejder som ejer, så få det flyttet til dig." },
      },
      {
        h2: "Hosting forklaret uden fagsprog",
        paragraphs: [
          "Hosting er den computer, hjemmesiden ligger på. Prisen afhænger mest af, hvilken slags side du har. En enkel, kodet side kan ligge næsten gratis, mens en WordPress-side med mange plugins kræver mere – og en webshop endnu mere.",
        ],
        table: {
          head: ["Type", "Passer til", "Typisk pris"],
          rows: [
            ["Statisk / kodet side (fx Vercel eller Netlify)", "Hurtige sider uden login og webshop", "0–200 kr/md"],
            ["Delt webhotel", "Mindre WordPress-sider", "30–150 kr/md"],
            ["Administreret WordPress-hosting", "WordPress med daglig backup og hastighed", "150–500 kr/md"],
            ["Shopify", "Webshop – hosting er med i abonnementet", "Afhænger af plan"],
          ],
        },
        after: ["Priserne er vejledende markedspriser og kan variere fra udbyder til udbyder."],
      },
      {
        h2: "Udgifter, mange glemmer",
        paragraphs: ["Det er sjældent domæne og hosting, der overrasker. Det er de små abonnementer, der kommer til undervejs."],
        bullets: [
          "Mail på eget domæne: betales typisk pr. bruger pr. måned (fx Microsoft 365 eller Google Workspace)",
          "Premium-plugins og temaer til WordPress: licenser fornyes ofte hvert år",
          "Bookingsystem eller nyhedsbrev: månedligt abonnement",
          "Cookie-banner: nogle løsninger koster pr. måned",
          "Billeder: købte billeder kan have licensvilkår",
          "Betalingsløsning i en webshop: gebyr pr. transaktion",
        ],
      },
      {
        h2: "Tre års regnestykke: byg selv eller få bygget",
        paragraphs: [
          "Den rigtige måde at sammenligne på er over flere år, ikke kun det første. En hjemmesidebygger ser billig ud, fordi du betaler lidt hver måned. En hjemmeside, du får bygget, koster mere den første dag, men så ejer du den.",
        ],
        table: {
          head: ["Over 3 år (vejledende)", "Hjemmesidebygger", "Basis-hjemmeside hos WebHjerte"],
          rows: [
            ["Start", "0 kr", "4.500 kr (én gang)"],
            ["Abonnement / hosting", "ca. 3.600–14.400 kr", "ca. 0–5.400 kr"],
            ["Domæne", "ofte med i abonnement", "ca. 300–600 kr"],
            ["Vedligeholdelse", "du gør det selv", "valgfrit, fra 249 kr/md"],
            ["Du ejer siden", "nej", "ja"],
          ],
        },
        after: ["Hjemmesidebyggerens tal bygger på 100–400 kr om måneden. Vælger du vedligeholdelse hos mig, kommer den oven i – men så er opdateringer, backup og små rettelser også klaret."],
      },
      {
        h2: "Sådan læser du et tilbud på drift",
        paragraphs: ["Når du får et tilbud på hosting eller vedligeholdelse, så stil disse spørgsmål. Svarene fortæller dig, om prisen er fair."],
        steps: [
          { title: "Hvad er med?", text: "Hosting, SSL, backup, opdateringer, overvågning – og hvor mange minutters rettelser?" },
          { title: "Hvor hurtigt svarer de?", text: "Inden for en hverdag er rimeligt. “Hurtigst muligt” er ikke et svar." },
          { title: "Hvad koster ekstra?", text: "Spørg efter timeprisen for opgaver uden for aftalen." },
          { title: "Kan du opsige?", text: "Løbende måned og kort opsigelse er bedst. Lange bindinger er et rødt flag." },
          { title: "Får du dine data med?", text: "Domæne, filer og logins skal kunne flyttes, hvis du vil skifte." },
        ],
      },
    ],
    faqs: [
      { q: "Er SSL-certifikatet en ekstra udgift?", a: "Sjældent i dag. De fleste moderne hostingudbydere giver et gratis certifikat, der fornyes automatisk. Betaler du ekstra for SSL, er det værd at spørge hvorfor." },
      { q: "Kan jeg flytte min hjemmeside til billigere hosting?", a: "Ofte ja. Det kræver adgang til domænet og hjemmesidens filer og database. Planlæg flytningen, så siden og mailen ikke er nede, og tjek bagefter i Google Search Console, at alt virker." },
    ],
  },

  /* ───────────────────── SEO-tjekliste til lokale virksomheder ───────────────────── */
  "seo-tjekliste-lokale-virksomheder": {
    sections: [
      {
        h2: "Søgeordsanalyse på 30 minutter",
        paragraphs: [
          "Du behøver ikke dyre værktøjer for at finde de vigtigste søgninger. Kunderne søger næsten altid efter en ydelse kombineret med et sted, og det kan du finde ud af på en halv time.",
        ],
        steps: [
          { title: "Lav en liste", text: "Skriv dine ydelser i én kolonne og de byer, du arbejder i, i en anden. Kombinationerne er dine første søgeord." },
          { title: "Spørg Google", text: "Skriv begyndelsen af en søgning og se forslagene. Kig også på “Andre søger også efter” nederst i resultaterne." },
          { title: "Brug dine egne data", text: "Har du Google Search Console, så se under “Effektivitet”, hvilke søgninger du allerede vises på." },
          { title: "Vælg én pr. side", text: "Giv hver side ét hovedsøgeord. To sider, der kæmper om samme søgning, svækker hinanden." },
        ],
      },
      {
        h2: "Sådan skriver du en ydelsesside, der rangerer",
        paragraphs: [
          "En god ydelsesside besvarer kundens spørgsmål i den rækkefølge, de opstår: Hvad er det? Gør I det her? Hvad koster det? Hvordan kommer jeg videre? Det er samtidig den rækkefølge, Google belønner.",
        ],
        bullets: [
          "Titel: ydelse + by + en konkret fordel, fx “Nyt badeværelse i Horsens – fast pris efter besigtigelse”",
          "Én overskrift (H1), der siger det samme med andre ord",
          "Første afsnit: hvad du laver, for hvem og hvor",
          "Pris eller prisniveau – også selvom det er “fra”",
          "Billeder af rigtigt udført arbejde",
          "Svar på de 3–5 spørgsmål, kunderne oftest stiller",
          "Én tydelig handling: ring, skriv eller book",
        ],
      },
      {
        h2: "Google Virksomhedsprofil: felterne, folk springer over",
        paragraphs: [
          "De fleste har udfyldt navn og adresse. Færre har brugt tid på resten – og det er dér, du kan komme foran.",
        ],
        subs: [
          { h3: "Primær kategori", paragraphs: ["Den vigtigste enkeltindstilling. Vælg den, der præcist beskriver din hovedydelse, og tilføj sekundære kategorier."] },
          { h3: "Ydelser med beskrivelse", paragraphs: ["Skriv hver ydelse ind med et par sætninger. Det hjælper Google med at matche dig med konkrete søgninger."] },
          { h3: "Særlige åbningstider", paragraphs: ["Helligdage og ferier. Forkerte åbningstider giver dårlige anmeldelser."] },
          { h3: "Billeder", paragraphs: ["Rigtige billeder af jer, bilerne, butikken og arbejdet. Tilføj nye løbende."] },
        ],
      },
      {
        h2: "Anmeldelser – sådan får du flere",
        paragraphs: [
          "Anmeldelser er både et signal til Google og den første ting, en ny kunde læser. Den bedste metode er kedelig, men den virker: spørg hver gang, på det rigtige tidspunkt, og gør det let.",
          "Det rigtige tidspunkt er, når kunden er tilfreds – lige efter opgaven er færdig. Send en kort besked med et direkte link til din profil. Giv aldrig rabat eller gaver for en anmeldelse; det er imod Googles regler.",
        ],
        callout: { tone: "tip", title: "Svar på alle anmeldelser", text: "Tak for de gode, og svar sagligt på de dårlige. Kommende kunder læser dine svar lige så nøje som anmeldelserne." },
      },
      {
        h2: "Lokale links og omtale",
        paragraphs: [
          "Links fra andre hjemmesider fortæller Google, at du er en rigtig og kendt virksomhed. For en lokal virksomhed er de bedste links lokale: sportsklubben, du sponsorerer, leverandøren, der nævner dig som samarbejdspartner, eller lokalavisen, der skrev om dit nye værksted.",
        ],
        bullets: [
          "Sponsorater i lokale foreninger med link til din side",
          "Leverandører og samarbejdspartnere, der viser deres forhandlere",
          "Brancheforeninger og autorisationsregistre",
          "Lokale kataloger som Krak og De Gule Sider",
          "Lokale medier, når du har en historie at fortælle",
        ],
      },
      {
        h2: "Det kan du roligt ignorere",
        paragraphs: ["Der findes mange gamle SEO-råd, som enten ikke virker længere eller kan skade dig."],
        bullets: [
          "At gentage søgeordet et bestemt antal gange",
          "Meta-keywords – Google bruger dem ikke",
          "Købte links og linkpakker",
          "Hundredvis af næsten ens sider, hvor kun bynavnet skifter",
          "At ændre titlerne hver uge for at “teste”",
        ],
      },
    ],
    faqs: [
      { q: "Skal jeg lave en side for hver by?", a: "Kun for de byer, hvor du reelt arbejder og kan skrive noget unikt – fx om opgaver, du har lavet dér, eller særlige forhold. Mange næsten ens sider med skiftende bynavne kan gøre mere skade end gavn." },
      { q: "Hvor ofte skal jeg opdatere min hjemmeside for SEO?", a: "Der er ingen fast regel. Opdatér, når noget ændrer sig – priser, ydelser, nye cases – og gennemgå de vigtigste sider et par gange om året. Rigtige ændringer betyder mere end hyppige." },
    ],
  },
  /* ───────────────────── Vælg webbureau: 10 spørgsmål ───────────────────── */
  "vaelg-webbureau-10-spoergsmaal": {
    sections: [
      {
        h2: "Sådan sammenligner du tre tilbud",
        paragraphs: [
          "Tre tilbud på “en ny hjemmeside” kan dække over tre helt forskellige ting. Det ene er en skabelon med dit logo, det andet et unikt design med tekster, og det tredje indeholder måske både SEO og et års drift. Derfor er prisen alene næsten umulig at sammenligne.",
          "Læg tilbuddene ved siden af hinanden i et skema som det her, og udfyld de felter, der mangler, ved at spørge. Et tilbud, der ikke kan svare klart, siger også noget.",
        ],
        table: {
          head: ["Sammenlign", "Det skal du spørge om"],
          rows: [
            ["Antal sider", "Hvor mange sider er med, og hvad koster en ekstra?"],
            ["Design", "Unikt design eller tilpasset tema? Hvor mange rettelsesrunder?"],
            ["Tekster og billeder", "Skriver de teksterne, eller skal du levere dem?"],
            ["SEO", "Hvad betyder “SEO” helt konkret i tilbuddet?"],
            ["Tidsplan", "Hvornår ser du første udkast, og hvornår er siden live?"],
            ["Drift", "Hvad koster hosting og vedligeholdelse om måneden – og kan det opsiges?"],
            ["Ejerskab", "Står domæne og kode i dit navn?"],
          ],
        },
      },
      {
        h2: "Det skal stå i aftalen",
        paragraphs: [
          "Mange uenigheder opstår, fordi noget aldrig blev skrevet ned. Du behøver ikke en lang kontrakt, men de vigtigste punkter skal stå sort på hvidt – også i en mail.",
        ],
        bullets: [
          "Hvad der leveres: sider, funktioner og hvem der skaffer tekster og billeder",
          "Pris og betalingsplan – og hvad der koster ekstra",
          "Antal rettelsesrunder i design og indhold",
          "Leveringstid og hvad der sker, hvis den skrider",
          "Support efter lancering: hvor længe og hvad er med",
          "Ejerskab af domæne, kode, tekster og billeder",
          "Overdragelse af logins, hvis samarbejdet stopper",
        ],
      },
      {
        h2: "Referencer – sådan spørger du rigtigt",
        paragraphs: [
          "Et flot porteføljebillede fortæller, hvordan siden ser ud. Det fortæller ikke, hvordan samarbejdet var. Bed om én eller to kunder, du må ringe til, og stil de spørgsmål, der ikke står på hjemmesiden.",
        ],
        steps: [
          { title: "Holdt de tidsplanen?", text: "Og hvis ikke – hvordan fortalte de det?" },
          { title: "Var prisen den aftalte?", text: "Kom der ekstraregninger undervejs?" },
          { title: "Hvordan var kommunikationen?", text: "Hvem talte de med, og hvor hurtigt fik de svar?" },
          { title: "Hvad skete der efter lanceringen?", text: "Fik de hjælp, når noget skulle rettes?" },
          { title: "Ville de vælge dem igen?", text: "Det enkleste spørgsmål giver ofte det ærligste svar." },
        ],
      },
      {
        h2: "Ejerskab: domæne, kode og logins",
        paragraphs: [
          "Det er det punkt, der oftest giver problemer år senere. Står domænet i bureauets navn, eller ligger siden på en platform, kun bureauet har adgang til, kan det blive dyrt og besværligt at skifte – også selvom du har betalt for det hele.",
          "Spørg derfor direkte: Står domænet i mit navn? Får jeg adgang til hosting og administration? Kan jeg tage koden med, hvis jeg skifter? Svaret bør være ja til alle tre.",
        ],
        callout: { tone: "warning", title: "Rødt flag", text: "Hvis et bureau vil registrere domænet i eget navn “for nemheds skyld”, så sig nej tak. Det kan altid sættes op, så du ejer det." },
      },
      {
        h2: "Pris eller værdi?",
        paragraphs: [
          "Den billigste hjemmeside er ikke nødvendigvis den billigste løsning. Hvis en side til 4.500 kr giver to nye kunder om måneden, og en til 1.500 kr ingen giver, er det let at regne ud, hvilken der var dyrest.",
          "Spørg dig selv: Hvad er én ny kunde værd for mig? Hvor mange skal hjemmesiden give, før den har betalt sig hjem? Det gør det lettere at vurdere, om et tilbud er for dyrt – eller for billigt til at kunne levere det, du har brug for.",
        ],
      },
    ],
    faqs: [
      { q: "Skal jeg betale alt på forhånd?", a: "Det er almindeligt at dele betalingen op, fx en del ved start og resten ved lancering. Vær forsigtig, hvis hele beløbet skal betales, før du har set et design." },
      { q: "Hvad hvis jeg ikke er tilfreds med designet?", a: "Aftal på forhånd, hvor mange rettelsesrunder der er med, og hvad der sker, hvis designet slet ikke rammer. Hos mig betaler du 0 kr for designet, hvis det ikke passer." },
    ],
  },

  /* ───────────────────── WordPress eller skræddersyet? ───────────────────── */
  "wordpress-eller-skraeddersyet": {
    sections: [
      {
        h2: "Hvad WordPress egentlig er",
        paragraphs: [
          "WordPress er et system til at lave og redigere hjemmesider. Selve programmet er gratis, og det bruges af en stor del af alle hjemmesider i verden. Udseendet styres af et tema, og ekstra funktioner – fx kontaktformular, booking eller webshop – kommer fra plugins.",
          "Styrken er, at du selv kan rette tekster, billeder og priser i en administration, der minder om et tekstbehandlingsprogram. Svagheden er, at hvert plugin er et stykke kode, der skal opdateres, og som kan gøre siden langsommere eller mere sårbar, hvis der er for mange af dem.",
        ],
      },
      {
        h2: "Hvad “skræddersyet” betyder hos mig",
        paragraphs: [
          "En skræddersyet hjemmeside er bygget fra bunden i kode – hos mig i Next.js og React, de samme teknologier, som denne hjemmeside er lavet i. Der er ingen tema og ingen plugins; siden indeholder kun det, den skal bruge.",
          "Det giver høj hastighed og stor frihed i designet. Til gengæld retter du ikke selv i koden. Små ændringer klarer jeg, fx via en vedligeholdelsesaftale, og har du brug for selv at redigere meget, kan en skræddersyet side kobles på et redigeringssystem (et såkaldt headless CMS).",
        ],
      },
      {
        h2: "Hastighed og Core Web Vitals",
        paragraphs: [
          "Google måler, hvordan en side opleves af rigtige brugere. Målingerne kaldes Core Web Vitals og handler om tre ting: hvor hurtigt det vigtigste indhold vises, hvor hurtigt siden reagerer på et klik, og om tingene hopper rundt, mens siden indlæses.",
          "En skræddersyet side har som udgangspunkt en fordel, fordi der ikke er ubrugt kode. Men en WordPress-side kan også være hurtig, hvis den er bygget med omtanke: et let tema, få plugins, optimerede billeder og god hosting. Det dårligste udgangspunkt er en tung sidebygger med mange plugins på billig hosting.",
        ],
        table: {
          head: ["Målepunkt", "Hvad det betyder", "Typisk fælde"],
          rows: [
            ["Indlæsning (LCP)", "Hvor hurtigt det største element vises", "Store billeder og video øverst"],
            ["Reaktion (INP)", "Hvor hurtigt siden svarer på et klik", "Mange scripts og plugins"],
            ["Stabilitet (CLS)", "Om indholdet hopper, mens siden indlæses", "Billeder uden fast størrelse og sene bannere"],
          ],
        },
      },
      {
        h2: "Sikkerhed og vedligeholdelse",
        paragraphs: [
          "Fordi WordPress er så udbredt, er det også et populært mål for automatiske angreb. Det er ikke farligt i sig selv, men det betyder, at WordPress, tema og plugins skal opdateres jævnligt, og at der skal tages backup.",
          "En kodet side har færre steder, der kan angribes, og kræver færre opdateringer. Backup og overvågning er dog stadig en god idé – uanset hvad siden er bygget i.",
        ],
        bullets: [
          "WordPress: opdatér kerne, tema og plugins, og fjern plugins, du ikke bruger",
          "Begge: daglig backup, der ligger et andet sted end selve siden",
          "Begge: stærke adgangskoder og to-trins-login, hvor det er muligt",
        ],
      },
      {
        h2: "Fem spørgsmål, der afgør det",
        paragraphs: ["Svar ærligt på de fem spørgsmål. Svarer du mest “ja” i venstre side, er WordPress det rigtige. Mest i højre side peger på skræddersyet."],
        subs: [
          { h3: "Skal du selv rette hver uge?", paragraphs: ["Ja → WordPress. Kun et par gange om året → skræddersyet er fint."] },
          { h3: "Skal du have en stor webshop?", paragraphs: ["Mange produkter, du selv lægger ind → WooCommerce eller Shopify. Særlige krav → skræddersyet."] },
          { h3: "Hvor vigtig er hastighed?", paragraphs: ["Meget vigtig, fx fordi du konkurrerer hårdt på Google → skræddersyet har en fordel."] },
          { h3: "Har du brug for særlige funktioner?", paragraphs: ["Booking med egne regler, kundelogin eller integrationer → skræddersyet giver mest frihed."] },
          { h3: "Hvad er dit budget på sigt?", paragraphs: ["Tænk både start og drift. Se regnestykket i guiden om løbende udgifter."], cta: { href: "/blog/hvad-koster-en-hjemmeside-om-aaret", label: "Hvad koster en hjemmeside om året?" } },
        ],
      },
    ],
    faqs: [
      { q: "Kan en skræddersyet side få et redigeringssystem?", a: "Ja. En kodet side kan kobles på et headless CMS, så du selv kan rette tekster og billeder, mens resten af siden forbliver hurtig og let." },
      { q: "Er WordPress for gammeldags?", a: "Nej. WordPress er stadig et godt valg til mange virksomheder, især hvis du selv vil redigere meget. Det afgørende er, hvordan siden er bygget – ikke systemet i sig selv." },
    ],
  },

  /* ───────────────────── Hvor lang tid tager det at lave en hjemmeside? ───────────────────── */
  "hvor-lang-tid-tager-det-at-lave-en-hjemmeside": {
    sections: [
      {
        h2: "Det skal du have klar, før vi starter",
        paragraphs: [
          "Den største faktor for, hvor hurtigt en hjemmeside bliver færdig, er ikke udvikleren – det er materialet. Har du det her klar, kan de fleste projekter køre uden pauser.",
        ],
        bullets: [
          "Logo i god kvalitet (gerne som vektorfil, fx SVG eller PDF)",
          "En liste over dine ydelser og gerne priser eller prisniveauer",
          "Tekster – eller stikord, jeg kan skrive ud fra",
          "Billeder af dig, dine medarbejdere og dit arbejde",
          "Adgang til domænet (eller oplysninger om, hvor det er købt)",
          "Tre hjemmesider, du kan lide – og gerne én, du ikke kan lide",
        ],
      },
      {
        h2: "Tekster: den største tidsrøver",
        paragraphs: [
          "I de fleste projekter er det teksterne, der får tidsplanen til at skride. Det er forståeligt: det er svært at skrive om sig selv, og det bliver let til “det tager jeg i weekenden”.",
          "Det hjælper at bruge den samme skabelon til hver ydelse. Så skal du kun svare på fem spørgsmål ad gangen – og det kan du gøre i stikord.",
        ],
        steps: [
          { title: "Hvad er det?", text: "Beskriv ydelsen med dine egne ord, som du ville forklare den i telefonen." },
          { title: "Hvem er det til?", text: "Privatkunder, virksomheder – eller begge?" },
          { title: "Hvad koster det?", text: "En fast pris, et prisniveau eller hvad der påvirker prisen." },
          { title: "Hvor arbejder du?", text: "Byer og område, så kunderne ved, om du kommer til dem." },
          { title: "Hvordan bestiller man?", text: "Ring, skriv, book – og hvad der sker bagefter." },
        ],
        after: ["Har du svært ved at skrive, kan vi også tage en samtale på 30 minutter, hvor jeg stiller spørgsmålene og skriver teksten bagefter."],
      },
      {
        h2: "Billeder uden fotograf",
        paragraphs: [
          "En professionel fotograf er altid godt, men mange gode hjemmesider er lavet med billeder fra en mobiltelefon. Rigtige billeder af dit arbejde er næsten altid bedre end flotte stockfotos, fordi kunderne kan se, at det er dig.",
        ],
        bullets: [
          "Fotografér i dagslys, og sluk blitzen",
          "Tag billederne vandret – de passer bedst på en hjemmeside",
          "Ryd op i baggrunden, før du tager billedet",
          "Tag før- og efterbilleder fra samme vinkel",
          "Tag mange – det er let at vælge de bedste bagefter",
        ],
      },
      {
        h2: "De sidste 48 timer før lancering",
        paragraphs: [
          "Lige før siden går live, gennemgår jeg en fast tjekliste. Det er de små ting, der ellers bliver opdaget af en kunde – og det er de ting, Google lægger mærke til fra første dag.",
        ],
        bullets: [
          "Kontaktformularen er testet, og beskederne lander det rigtige sted",
          "Telefonnumre og mails kan klikkes på mobilen",
          "Gamle adresser sender videre til de nye (301-omdirigeringer)",
          "Titler og beskrivelser er skrevet til hver side",
          "Google Search Console er sat op, og sitemap er indsendt",
          "Siden er testet på mobil, tablet og computer",
        ],
      },
      {
        h2: "De første 30 dage efter lancering",
        paragraphs: [
          "En ny hjemmeside skal først findes af Google. Det tager typisk fra nogle dage til et par uger, før siderne er indekseret, og længere, før de har fundet deres plads i søgeresultaterne. Det er normalt, at placeringerne svinger i starten.",
          "I den første måned holder jeg øje med Search Console, retter de fejl, der dukker op, og justerer titler og tekster, hvis siden vises på andre søgninger end forventet.",
        ],
      },
    ],
    faqs: [
      { q: "Hvornår kan jeg ses på Google efter lanceringen?", a: "Siderne bliver typisk indekseret inden for dage til et par uger. Gode placeringer tager længere – ofte 2–6 måneder, afhængigt af konkurrencen." },
      { q: "Kan du skrive teksterne for mig?", a: "Ja. Vi tager en samtale, hvor jeg stiller spørgsmålene, og jeg skriver teksterne bagefter. Du godkender alt, før det går live." },
    ],
  },

  /* ───────────────────── Bæredygtigt webdesign ───────────────────── */
  "baeredygtigt-webdesign": {
    sections: [
      {
        h2: "Hvor kommer energiforbruget fra?",
        paragraphs: [
          "En hjemmeside bruger strøm tre steder: i datacentret, hvor den ligger, i netværket, der sender den til brugeren, og på brugerens egen telefon eller computer. Jo flere data siden sender, og jo mere arbejde telefonen skal gøre for at vise den, jo mere strøm bruges der.",
          "Det betyder, at den mest effektive måde at gøre en hjemmeside grønnere på er den samme som at gøre den hurtigere: send mindre, og lad telefonen arbejde mindre.",
        ],
      },
      {
        h2: "Sådan måler du din hjemmesides vægt",
        paragraphs: [
          "Du kan selv se, hvor tung din hjemmeside er. Det tager fem minutter og giver et godt udgangspunkt.",
        ],
        steps: [
          { title: "PageSpeed Insights", text: "Indtast din adresse på Googles gratis værktøj. Se især forslagene om billeder og ubrugt kode." },
          { title: "Browserens værktøjer", text: "Åbn udviklerværktøjerne, vælg fanen Netværk, og genindlæs siden. Nederst står, hvor mange data der blev hentet." },
          { title: "CO₂-beregnere", text: "Værktøjer som Website Carbon Calculator giver et estimat. Brug tallet til at sammenligne – ikke som en eksakt måling." },
        ],
        callout: { tone: "fact", title: "Godt at vide", text: "Alle CO₂-tal for hjemmesider er skøn, der bygger på antagelser. Det, du kan stole på, er sidens størrelse og hastighed." },
      },
      {
        h2: "Billeder: den største gevinst",
        paragraphs: [
          "På de fleste hjemmesider er billederne langt den største del af det, der sendes. Et enkelt foto taget med en ny telefon kan fylde flere megabyte, mens det på skærmen kun behøver at fylde en brøkdel.",
          "Moderne billedformater som AVIF og WebP kan gøre billederne markant mindre uden synligt kvalitetstab. På de sider, jeg bygger, sker det automatisk: billedet laves i den rigtige størrelse til den skærm, det vises på, og billeder længere nede på siden hentes først, når man scroller hen til dem.",
        ],
        bullets: [
          "Brug AVIF eller WebP i stedet for store JPG- og PNG-filer",
          "Vis billedet i den størrelse, det faktisk har brug for",
          "Hent billeder længere nede på siden først, når de skal bruges",
          "Spørg dig selv, om billedet tilføjer noget – ellers fjern det",
        ],
      },
      {
        h2: "Video, skrifttyper og scripts",
        paragraphs: [
          "Video, der starter automatisk i toppen af siden, er en af de tungeste ting, en hjemmeside kan indeholde. Ofte ser brugeren den slet ikke. Vis i stedet et billede, og lad brugeren starte videoen selv.",
          "Skrifttyper og tredjeparts-scripts – fx chatwidgets, sporingskoder og indlejrede sociale medier – er de næste store poster. Hver enkelt virker måske lille, men tilsammen kan de fordoble sidens vægt.",
        ],
        bullets: [
          "Ingen autoplay-video øverst på siden",
          "Brug få skrifttyper og få vægte (fx normal og fed)",
          "Fjern sporingskoder, du ikke bruger",
          "Indlæs chat og sociale medier først, når brugeren skal bruge dem",
        ],
      },
      {
        h2: "Grøn hosting – hvad betyder det?",
        paragraphs: [
          "Mange hostingudbydere kalder sig grønne. Det kan betyde, at datacentret bruger strøm fra vedvarende energi, at udbyderen køber certifikater, der svarer til forbruget, eller at der kompenseres på anden vis. Det er ikke det samme.",
          "Spørg din udbyder, hvad de konkret gør, og om de kan dokumentere det. Green Web Foundation har en offentlig oversigt over udbydere, der har dokumenteret deres brug af grøn strøm. Husk samtidig, at en let hjemmeside på almindelig hosting ofte gør mere for miljøet end en tung side på grøn hosting.",
        ],
      },
      {
        h2: "Tjekliste til en lettere hjemmeside",
        bullets: [
          "Billeder i moderne formater og den rigtige størrelse",
          "Ingen automatisk video øverst",
          "Få skrifttyper og få scripts",
          "Ingen sider, ingen besøger eller har brug for",
          "Enkel navigation, så brugerne finder det hurtigt – færre sidevisninger på vejen",
          "Hosting med dokumenteret grøn strøm, hvor det er muligt",
          "Mål sidens vægt før og efter ændringer",
        ],
      },
    ],
    faqs: [
      { q: "Er mørk tilstand mere bæredygtig?", a: "Kun en smule – og kun på skærme med OLED-teknologi, hvor sorte pixels bruger mindre strøm. Det er ikke dér, den store gevinst ligger. Lettere billeder og færre scripts betyder langt mere." },
      { q: "Bliver min hjemmeside hurtigere af at blive grønnere?", a: "Ja, næsten altid. Det meste af det, der gør en side lettere, gør den også hurtigere – og hastighed er godt for både brugerne og Google." },
    ],
  },

  /* ───────────────────── Webstrategi ───────────────────── */
  webstrategi: {
    sections: [
      {
        h2: "Start med målet – ikke med designet",
        paragraphs: [
          "Det første spørgsmål er ikke, hvilken farve hjemmesiden skal have. Det er: Hvad skal den få besøgende til at gøre? For de fleste små virksomheder er svaret ét af fire: ringe, skrive, booke eller købe.",
          "Når målet er på plads, bliver resten lettere. Hver side og hver knap kan vurderes ud fra ét spørgsmål: Hjælper det kunden tættere på at ringe, skrive, booke eller købe?",
        ],
        callout: { tone: "tip", title: "Ét primært mål", text: "Vælg én hovedhandling for hele siden. Alt andet er sekundært og må ikke stå i vejen for den." },
      },
      {
        h2: "Kend dine kunder med tre spørgsmål",
        paragraphs: [
          "Du behøver ikke en stor analyse. Svar på tre spørgsmål – og find svarene ved at spørge dine seneste fem kunder, læse dine anmeldelser og kigge i Google Search Console.",
        ],
        subs: [
          { h3: "Hvem er de?", paragraphs: ["Privatpersoner eller virksomheder? Lokale eller i hele landet? Unge eller ældre? Det afgør tone, billeder og hvilke oplysninger der skal stå først."] },
          { h3: "Hvilket problem har de?", paragraphs: ["Kunder køber ikke en ydelse – de køber en løsning. Skriv om problemet med deres ord, ikke med jeres fagudtryk."] },
          { h3: "Hvorfor vælger de jer?", paragraphs: ["Pris, hurtighed, kvalitet, at de kender jer? Det, kunderne nævner, skal stå tydeligt på forsiden."] },
        ],
      },
      {
        h2: "Hvilke sider skal du have?",
        paragraphs: [
          "En god struktur er enkel. Kunden skal kunne finde det, de leder efter, med ét klik fra forsiden, og Google skal kunne se, hvad hver side handler om.",
        ],
        table: {
          head: ["Side", "Formål"],
          rows: [
            ["Forside", "Hvad I laver, for hvem og hvor – og den vigtigste handling"],
            ["En side pr. ydelse", "Svar på kundens spørgsmål om netop den ydelse – og bliv fundet på den søgning"],
            ["Priser", "Fjern den største tvivl, før kunden kontakter jer"],
            ["Cases / referencer", "Bevis på, at I kan det, I lover"],
            ["Om os", "Hvem står bag – tillid og personlighed"],
            ["Kontakt", "Telefon, mail, adresse og en kort formular"],
          ],
        },
      },
      {
        h2: "Budskabet på fem sekunder",
        paragraphs: [
          "En ny besøgende beslutter sig hurtigt for, om de er havnet det rigtige sted. Overskriften øverst på forsiden skal derfor svare på tre ting: hvad laver I, for hvem, og hvor. Undertitlen fortæller, hvorfor de skal vælge jer, og knappen fortæller, hvad de skal gøre nu.",
        ],
        table: {
          head: ["Uklart", "Tydeligt (eksempel)"],
          rows: [
            ["Velkommen til vores hjemmeside", "Tømrer i Horsens – nye terrasser, tagvinduer og tilbygninger"],
            ["Kvalitet og service siden 1998", "Fast pris efter besigtigelse. Svar inden for én arbejdsdag."],
            ["Læs mere", "Få et tilbud"],
          ],
        },
      },
      {
        h2: "Kanaler: Google, sociale medier og AI",
        paragraphs: [
          "Hjemmesiden er centrum, men kunderne kommer fra forskellige steder. For de fleste lokale virksomheder er Google den vigtigste kilde – både de almindelige resultater og kortet. Sociale medier er gode til at holde kontakten med eksisterende kunder, og flere og flere spørger i dag også en AI-assistent om råd.",
          "Prioritér ud fra, hvor jeres kunder faktisk er. Det er bedre at gøre én kanal ordentligt end fem halvt.",
        ],
        cta: { href: "/blog/saadan-bliver-du-nevnt-af-chatgpt-og-google-ai", label: "Sådan bliver du nævnt af ChatGPT" },
      },
      {
        h2: "Mål det, der betyder noget",
        paragraphs: [
          "Antal besøgende er rart at kende, men det betaler ikke regningerne. Mål i stedet de handlinger, der giver forretning – og kig på tallene én gang om måneden.",
        ],
        bullets: [
          "Henvendelser via formularen",
          "Klik på telefonnummer og mail",
          "Bookinger eller køb",
          "Søgninger, I vises på, og jeres placering (Google Search Console)",
          "Hvilke sider kunderne besøger, før de tager kontakt",
        ],
      },
    ],
    faqs: [
      { q: "Hvor ofte skal strategien opdateres?", a: "Gennemgå den en gang om året, eller når der sker noget stort – nye ydelser, et nyt område eller et fald i henvendelser. Små justeringer kan du lave løbende ud fra tallene." },
    ],
  },
};

/** Ord i en artikel (tekst, punkter, tabeller, trin og FAQ) – bruges til at beregne læsetid. */
export function countWords(a) {
  const out = [];
  const walk = (v) => {
    if (v == null) return;
    if (typeof v === "string") out.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (typeof v === "object") Object.entries(v).forEach(([k, x]) => !["href", "slug", "visual", "tone", "id"].includes(k) && walk(x));
  };
  walk([a.intro, a.summary, a.sections, a.faqs]);
  return out.join(" ").split(/\s+/).filter((w) => /[a-zæøå0-9]/i.test(w)).length;
}

// Ca. 200 ord i minuttet for en grundig læser, der også ser på tabeller og eksempler
export const readingMinutes = (a) => Math.max(1, Math.round(countWords(a) / 200));

const isHelp = (s) => !!s?.cta; // sidste afsnit med en handling ("Brug for hjælp?", "Min anbefaling" osv.) bliver stående sidst

/** Sætter de ekstra afsnit ind før artiklens afsluttende "hjælp"-afsnit og regner læsetiden ud. */
export function enrichArticle(a) {
  const m = articleMore[a.slug];
  const extra = [...(m?.sections || []), ...(articleDeep[a.slug] || [])];
  let sections = a.sections || [];
  if (extra.length) {
    const last = sections[sections.length - 1];
    sections = isHelp(last) ? [...sections.slice(0, -1), ...extra, last] : [...sections, ...extra];
  }
  const out = {
    ...a,
    sections,
    faqs: [...(a.faqs || []), ...(m?.faqs || []), ...(articleDeepFaqs[a.slug] || [])],
    ...(extra.length ? { updated: "2026-11-16" } : {}),
  };
  return { ...out, readMinutes: readingMinutes(out) };
}
