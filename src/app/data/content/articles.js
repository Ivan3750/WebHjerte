import { aiArticles } from "./ai.js";

// Blogartikler og guides. Hver artikel bliver til /blog/<slug>.

const base = { published: "2026-11-06", updated: "2026-11-06" };

const own = [
  {
    ...base,
    slug: "ai-i-smaa-virksomheder-10-eksempler",
    title: "AI i små virksomheder: 10 konkrete eksempler, der virker | WebHjerte",
    description:
      "10 praktiske eksempler på, hvordan små virksomheder bruger AI: chatbot, booking, tilbud, opfølgning, anmeldelser og synlighed i ChatGPT. Med tips til at komme i gang.",
    keywords: ["AI små virksomheder", "AI eksempler virksomhed", "AI chatbot", "AI automatisering", "kunstig intelligens virksomhed"],
    name: "AI i små virksomheder: 10 eksempler",
    category: "AI",
    h1: "AI i små virksomheder: 10 konkrete eksempler, der virker",
    intro:
      "Glem store buzzwords. Her er ti praktiske måder, hvorpå en lokal virksomhed kan bruge AI i dag – og hvad du skal være opmærksom på.",
    summary:
      "Små virksomheder får mest ud af AI på afgrænsede opgaver: chatbot til kundespørgsmål, automatisk booking, kvalificering af leads, opfølgning, anmodning om anmeldelser, udkast til tekster og synlighed i AI-søgning. Start med den opgave, der koster mest tid, og sørg for, at et menneske altid kan gribe ind.",
    readMinutes: 7,
    sections: [
      {
        h2: "De 10 eksempler",
        subs: [
          { h3: "1. Chatbot til de mest stillede spørgsmål", paragraphs: ["Priser, åbningstider, levering, retur: en AI-chatbot besvarer dem med det samme, så du undgår de samme opkald hver dag."] },
          { h3: "2. Automatisk booking og påmindelser", paragraphs: ["Kunden vælger tid selv, kalenderen opdateres, og en påmindelse sendes automatisk. Det reducerer udeblivelser."] },
          { h3: "3. Kvalificering af henvendelser", paragraphs: ["AI stiller opfølgende spørgsmål om behov, tidsramme og budget og leverer en færdig oversigt til dig, så du kun bruger tid på relevante kunder."] },
          { h3: "4. Udkast til tilbud og mails", paragraphs: ["AI skriver første udkast ud fra dine skabeloner og kundens oplysninger. Du gennemgår og sender."] },
          { h3: "5. Opfølgning på tilbud", paragraphs: ["Automatisk påmindelse efter få dage øger chancen for et svar – uden at du skal huske det."] },
          { h3: "6. Anmodning om anmeldelser", paragraphs: ["Efter udført opgave sendes et venligt link til Google-anmeldelse. Flere anmeldelser styrker din lokale synlighed."] },
          { h3: "7. Indhold og opslag", paragraphs: ["AI kan hjælpe med udkast til blogindlæg, beskrivelser og opslag. Brug det som udgangspunkt og tilføj dine egne erfaringer."] },
          { h3: "8. Produktbeskrivelser og anbefalinger i webshop", paragraphs: ["Hurtigere oprettelse af produkter og relevante forslag til kunderne."] },
          { h3: "9. Oversættelse og flersproget kundeservice", paragraphs: ["Gør det nemt at hjælpe turister, tilflyttere og udenlandske kunder."] },
          { h3: "10. Synlighed i AI-søgning", paragraphs: ["Gør din hjemmeside nem at citere for ChatGPT, Gemini og Google AI med svar-først-indhold og struktureret data."] },
        ],
      },
      {
        h2: "Sådan kommer du i gang",
        steps: [
          { title: "Find tidsslugeren", text: "Hvilken opgave gør du igen og igen? Start dér." },
          { title: "Definér rammerne", text: "Hvad må AI gøre selv, og hvad skal du godkende?" },
          { title: "Test i lille skala", text: "Prøv med de 20 mest almindelige spørgsmål eller én proces." },
          { title: "Mål og justér", text: "Se på brugen og kvaliteten og forbedr løbende." },
        ],
      },
      {
        h2: "Hvad skal du passe på?",
        bullets: [
          "AI kan tage fejl – lad aldrig kritiske beslutninger køre uden kontrol.",
          "Overvej GDPR: hvilke persondata behandles, og er kunden informeret?",
          "Vær ærlig overfor kunder om, at de taler med en AI.",
          "Hold dine oplysninger opdaterede, så AI ikke giver forkerte priser eller tider.",
        ],
      },
      {
        h2: "Få hjælp til at implementere",
        paragraphs: [
          "Jeg implementerer AI-løsninger som chatbot, booking, lead-kvalificering og automatisering – med fast pris og fokus på praktisk effekt. Fortæl, hvad der koster dig mest tid, så finder vi den rigtige løsning.",
        ],
        cta: { href: "/ai-loesninger", label: "Se AI-løsninger" },
      },
    ],
    faqs: [
      { q: "Er AI dyrt for små virksomheder?", a: "Det behøver det ikke være. Mange løsninger kan sættes op til en fast pris, og de løbende udgifter til AI-tjenester er ofte beskedne." },
      { q: "Hvor starter jeg?", a: "Med den opgave, der koster mest tid eller giver flest tabte kunder – ofte kundespørgsmål eller booking." },
      { q: "Mister jeg kontrollen?", a: "Nej, hvis løsningen er sat rigtigt op. Du bestemmer reglerne og kan altid gribe ind." },
    ],
    related: [
      { href: "/ai-loesninger", title: "AI-løsninger", desc: "Chatbot, booking og automatisering." },
      { href: "/ai-chatbot-til-hjemmeside", title: "AI-chatbot", desc: "Svar kunderne døgnet rundt." },
      { href: "/geo-ai-synlighed", title: "AI-synlighed", desc: "Bliv nævnt i ChatGPT." },
    ],
  },
  {
    ...base,
    slug: "hvad-koster-en-hjemmeside-om-aaret",
    title: "Hvad koster en hjemmeside om året? Drift, domæne og hosting | WebHjerte",
    description:
      "Hvad koster en hjemmeside om året? Gennemgang af domæne, hosting, vedligeholdelse og andre løbende udgifter – med konkrete tal og eksempler.",
    keywords: ["hvad koster en hjemmeside om året", "hosting pris", "domæne pris", "hjemmeside abonnement", "hvad koster det at have en hjemmeside"],
    name: "Hvad koster en hjemmeside om året?",
    category: "Priser",
    h1: "Hvad koster en hjemmeside om året?",
    intro:
      "Prisen på selve hjemmesiden er kun starten. Her er et ærligt overblik over de løbende udgifter, du skal regne med, og hvor du kan spare.",
    summary:
      "Ud over selve udviklingen koster en hjemmeside typisk 100–200 kr om året i domæne, 0–500 kr om måneden i hosting og 195–395 kr om måneden, hvis du vil have vedligeholdelse og support. For en lille virksomhed lander de samlede løbende udgifter ofte på 2.500–6.000 kr om året.",
    readMinutes: 6,
    sections: [
      {
        h2: "De fire typer udgifter",
        table: {
          head: ["Udgift", "Typisk beløb", "Bemærkning"],
          rows: [
            ["Domæne", "100–200 kr/år", ".dk er billigst; .com og andre endelser kan koste mere"],
            ["Hosting", "0–500 kr/md", "Afhænger af trafik og platform; statiske sider kan ligge billigt eller gratis"],
            ["Vedligeholdelse", "195–395 kr/md hos WebHjerte", "Opdateringer, sikkerhed, backup og små rettelser"],
            ["Værktøjer", "Varierer", "Booking, nyhedsbreve, betalingsløsninger og premium-plugins"],
          ],
        },
        paragraphs: ["Tallene er vejledende og afhænger af udbyder og løsning. Få altid oplyst alle løbende poster, før du siger ja til et tilbud."],
      },
      {
        h2: "Eksempler på årlige omkostninger",
        subs: [
          {
            h3: "Lille lokal virksomhed med en enkel hjemmeside",
            paragraphs: ["Domæne ca. 150 kr, enkel hosting ca. 600–1.500 kr om året og evt. vedligeholdelse fra 195 kr/md (2.340 kr/år). I alt typisk ca. 3.000–4.000 kr om året."],
          },
          {
            h3: "Servicevirksomhed med booking og analytics",
            paragraphs: ["Domæne, hosting og bookingværktøj (typisk 100–300 kr/md) og vedligeholdelse. Ofte 5.000–8.000 kr om året."],
          },
          {
            h3: "Webshop",
            paragraphs: ["Her kommer transaktionsgebyrer, evt. platformsabonnement og lagersystemer oven i. Beløbet afhænger i høj grad af omsætningen."],
          },
        ],
      },
      {
        h2: "Hvordan kan du spare?",
        bullets: [
          "Vælg et .dk-domæne og forny automatisk, så du undgår dyre gendannelsesgebyrer.",
          "Vælg en let hjemmeside uden tunge plugins – den kræver mindre hosting og vedligeholdelse.",
          "Undgå bindinger: sørg for, at domæne og kode tilhører dig.",
          "Tag stilling til, om du selv vil opdatere siden, eller om du vil have en vedligeholdelsesaftale.",
          "Spørg efter total cost of ownership over tre år, ikke kun startprisen.",
        ],
      },
      {
        h2: "Hvad er inkluderet hos WebHjerte?",
        paragraphs: [
          "Hos WebHjerte får du 30 dages support efter lancering. Derefter kan du vælge et vedligeholdelsesabonnement fra 195 til 395 kr/md ekskl. moms eller selv stå for driften. Domæne og kode tilhører dig, så du kan skifte, når du vil.",
        ],
        cta: { href: "/hosting-og-vedligeholdelse", label: "Læs om hosting og vedligeholdelse" },
      },
    ],
    faqs: [
      { q: "Skal jeg betale for en hjemmeside hvert år?", a: "Du skal som minimum forny domænet hvert år og dække hosting. Selve udviklingen er normalt en engangsudgift." },
      { q: "Hvad sker der, hvis jeg stopper med at betale hosting?", a: "Siden bliver utilgængelig. Derfor er det vigtigt at have domæne og hosting i dit eget navn." },
      { q: "Er vedligeholdelse nødvendig?", a: "Anbefalet. Opdateringer og sikkerhed er afgørende, især for WordPress." },
    ],
    related: [
      { href: "/hosting-og-vedligeholdelse", title: "Hosting og vedligeholdelse", desc: "Drift fra 195 kr/md." },
      { href: "/blog/hvad-koster-en-hjemmeside-2026", title: "Hvad koster en hjemmeside i 2026?", desc: "Priser på selve hjemmesiden." },
      { href: "/hjemmeside-pris", title: "Hjemmeside pris", desc: "Pakker og priser." },
    ],
  },
  {
    ...base,
    slug: "seo-tjekliste-lokale-virksomheder",
    title: "SEO-tjekliste for lokale virksomheder: 25 punkter | WebHjerte",
    description:
      "Praktisk SEO-tjekliste til lokale virksomheder i Horsens og Midtjylland: teknik, indhold, Google Virksomhedsprofil og lokale signaler. Gå listen igennem på en time.",
    keywords: ["seo tjekliste", "lokal seo", "seo tjek af hjemmeside", "seo horsens", "webtjek"],
    name: "SEO-tjekliste for lokale virksomheder",
    category: "SEO",
    h1: "SEO-tjekliste for lokale virksomheder: 25 punkter du kan tjekke i dag",
    intro:
      "Brug listen som et hurtigt webtjek af din egen hjemmeside. Du behøver ingen særlige værktøjer ud over Google Search Console og en mobil.",
    summary:
      "Lokal SEO handler om at have en hurtig, mobilvenlig hjemmeside med klare ydelses- og lokalitetsoplysninger, en opdateret Google Virksomhedsprofil, konsistente kontaktoplysninger og indhold, der svarer på kundernes spørgsmål. Listen herunder samler 25 konkrete punkter inden for teknik, indhold og lokale signaler.",
    readMinutes: 9,
    sections: [
      {
        h2: "Teknik",
        bullets: [
          "Siden bruger https og har gyldigt SSL-certifikat.",
          "Den indlæses hurtigt på mobil (test med PageSpeed Insights).",
          "Der er kun én version af hjemmesiden (www eller uden www – med omdirigering).",
          "Der findes et sitemap, og det er indsendt til Google Search Console.",
          "robots.txt blokerer ikke vigtige sider eller scripts.",
          "Hver side har en canonical-tag.",
          "Der er ingen døde links eller mange 404-sider.",
          "Siden virker uden fejl i Chrome, Safari og på både iPhone og Android.",
        ],
      },
      {
        h2: "Indhold",
        bullets: [
          "Hver ydelse har sin egen side med en klar overskrift (H1).",
          "Titel (ca. 50–60 tegn) og beskrivelse (ca. 140–160 tegn) er unikke og indeholder ydelse + sted.",
          "Overskrifterne følger en logisk rækkefølge (H1 → H2 → H3).",
          "Siden svarer på de spørgsmål, kunderne faktisk stiller.",
          "Der er en FAQ-sektion med 5–10 spørgsmål.",
          "Billeder har beskrivende filnavne og alt-tekst.",
          "Der er interne links mellem relaterede sider.",
          "Priser eller prisintervaller er tydelige (øger tillid og klik).",
        ],
      },
      {
        h2: "Lokale signaler",
        bullets: [
          "Din Google Virksomhedsprofil er oprettet, verificeret og opdateret.",
          "Kategori, åbningstider, telefon og adresse er korrekte.",
          "Navn, adresse og telefon (NAP) er ens på hjemmesiden, i Google, Facebook og kataloger.",
          "Du har fået anmeldelser og svarer på dem.",
          "Siden nævner by, bydele og opland naturligt i teksterne.",
          "Der er struktureret data for LocalBusiness og Organization.",
          "Du er opført i relevante lokale kataloger og brancheforeninger.",
        ],
      },
      {
        h2: "Måling og AI-synlighed",
        bullets: [
          "Google Search Console er sat op, og du følger søgninger og klik.",
          "Google Analytics (eller tilsvarende) måler henvendelser, ikke kun besøg.",
          "robots.txt tillader seriøse AI-crawlere, hvis du vil findes i AI-svar.",
          "Vigtige sider har et kort svar øverst og en FAQ med struktureret data.",
        ],
      },
      {
        h2: "Sådan prioriterer du",
        paragraphs: [
          "Start med teknikken (hastighed, mobil, https), fordi den påvirker alt andet. Derefter Google Virksomhedsprofil og dine tre vigtigste ydelsessider. Når fundamentet er på plads, kan du arbejde videre med indhold og AI-synlighed. Mangler du tid, tilbyder jeg et gratis SEO- og webtjek, hvor jeg gennemgår listen for dig.",
        ],
        cta: { href: "/gratis-seo-tjek-horsens", label: "Få et gratis SEO-tjek" },
      },
    ],
    faqs: [
      { q: "Hvor lang tid tager det at se effekt af SEO?", a: "Tekniske rettelser kan have effekt på uger. Placeringer på konkurrenceprægede søgninger opbygges typisk over 2–6 måneder." },
      { q: "Hvad er vigtigst i lokal SEO?", a: "Google Virksomhedsprofil, konsistente oplysninger, anmeldelser og en hurtig hjemmeside med tydelige ydelsessider." },
      { q: "Kan jeg lave SEO selv?", a: "Ja, de fleste punkter kan du selv tage fat på. Mangler du tid eller viden, kan jeg hjælpe." },
    ],
    related: [
      { href: "/seo-horsens", title: "SEO Horsens", desc: "Lokal SEO i praksis." },
      { href: "/gratis-seo-tjek-horsens", title: "Gratis SEO-tjek", desc: "Få din side gennemgået." },
      { href: "/geo-ai-synlighed", title: "AI-synlighed", desc: "Bliv nævnt i AI-svar." },
    ],
  },
  {
    ...base,
    slug: "vaelg-webbureau-10-spoergsmaal",
    title: "Sådan vælger du webbureau: 10 spørgsmål du bør stille | WebHjerte",
    description:
      "Skal du vælge webbureau? Stil de 10 spørgsmål, der afslører, om bureauet passer til dig: pris, ejerskab, tid, SEO, support og referencer.",
    keywords: ["vælg webbureau", "hvornår kan det betale sig at bruge et bureau", "webbureau pris", "freelancer til bureau", "webbureau til små virksomheder"],
    name: "10 spørgsmål til dit webbureau",
    category: "Guides",
    h1: "Sådan vælger du webbureau: 10 spørgsmål, du bør stille",
    intro:
      "Det er svært at sammenligne tilbud, hvis du ikke ved, hvad du skal spørge om. Brug disse ti spørgsmål, så du får svar, der betyder noget.",
    summary:
      "Når du vælger webbureau, så spørg ind til fast pris, leveringstid, ejerskab af domæne og kode, SEO, mobilvenlighed, support efter lancering, referencer og hvem du reelt taler med. Gode bureauer svarer klart og skriftligt – og siger fra, hvis en opgave ikke passer dem.",
    readMinutes: 7,
    sections: [
      {
        h2: "De 10 spørgsmål",
        subs: [
          { h3: "1. Er prisen fast, og hvad er inkluderet?", paragraphs: ["Få et skriftligt tilbud med antal sider, funktioner, antal rettelsesrunder og evt. løbende udgifter. Timeprisbaserede løsninger kan blive dyre uden forvarsel."] },
          { h3: "2. Hvornår er hjemmesiden klar?", paragraphs: ["Få en konkret tidsplan, og spørg, hvad der kan forsinke projektet (fx tekster og billeder fra dig)."] },
          { h3: "3. Hvem ejer domæne, kode og indhold?", paragraphs: ["Svaret skal være: dig. Undgå aftaler, hvor du ikke kan tage siden med dig, hvis du skifter leverandør."] },
          { h3: "4. Hvem arbejder konkret på min hjemmeside?", paragraphs: ["Spørg, om du taler med udvikleren eller et salgsled. Mange mellemled betyder længere svartid og højere pris."] },
          { h3: "5. Hvordan håndterer I SEO og hastighed?", paragraphs: ["Basis-SEO bør være en del af leverancen: titler, struktur, mobil, hastighed og struktureret data. Spørg efter konkrete mål (fx PageSpeed)."] },
          { h3: "6. Er hjemmesiden redigerbar for mig?", paragraphs: ["Vil du selv ændre indhold? Så skal der bygges i et CMS som WordPress. Hvis ikke, kan skræddersyet kode give højere hastighed."] },
          { h3: "7. Hvad sker der efter lancering?", paragraphs: ["Spørg om support, vedligeholdelse og pris på rettelser. Få det på skrift."] },
          { h3: "8. Kan jeg se referencer og eksempler?", paragraphs: ["Se på porteføljen, tal med tidligere kunder, og tjek, om projekterne ligner dit."] },
          { h3: "9. Hvad hvis jeg ikke bryder mig om designet?", paragraphs: ["Spørg om designgodkendelse og hvad det koster, hvis designet ikke rammer rigtigt. Hos WebHjerte er det 0 kr for designet, hvis du ikke er tilfreds."] },
          { h3: "10. Hvad kan I ikke hjælpe med?", paragraphs: ["Et godt bureau kender sine grænser og siger fra. Hvis svaret altid er “alt”, så vær på vagt."] },
        ],
      },
      {
        h2: "Røde flag",
        bullets: [
          "Garanti for placering nr. 1 på Google.",
          "Uklar pris eller “vi vender tilbage med en pris efter projektstart”.",
          "Domæne eller hosting registreret i bureauets navn uden din accept.",
          "Ingen skriftlig aftale om rettigheder og vilkår.",
          "Presset til at beslutte hurtigt uden tid til at sammenligne.",
        ],
      },
      {
        h2: "Hvornår kan det betale sig med et bureau frem for en freelancer?",
        paragraphs: [
          "Et bureau er typisk bedre, hvis du har brug for flere kompetencer (design, udvikling, tekst, SEO) og en stabil leverandør over tid. En freelancer er ofte hurtigere og billigere til afgrænsede opgaver. Et lille bureau som WebHjerte kombinerer det bedste fra begge verdener: direkte kontakt med udvikleren og en struktureret proces.",
        ],
        cta: { href: "/freelancer-vs-bureau", label: "Freelancer eller webbureau?" },
      },
    ],
    faqs: [
      { q: "Hvad bør et tilbud indeholde?", a: "Pris, omfang, tidsplan, ejerskab af kode og domæne, support efter lancering samt løbende udgifter." },
      { q: "Er et stort bureau bedre end et lille?", a: "Ikke nødvendigvis. Store bureauer er gode til komplekse projekter, mens små bureauer ofte er hurtigere og billigere for mindre virksomheder." },
      { q: "Hvordan ser jeg, om et bureau er seriøst?", a: "Se efter klare priser, referencer, skriftlige aftaler og ærlige svar – også om, hvad de ikke kan." },
    ],
    related: [
      { href: "/freelancer-vs-bureau", title: "Freelancer vs bureau", desc: "Hvad passer til dig?" },
      { href: "/om-webhjerte", title: "Fakta om WebHjerte", desc: "Priser, garantier og arbejdsmåde." },
      { href: "/portefolje", title: "Portefølje", desc: "Se cases." },
    ],
  },
  {
    ...base,
    slug: "wordpress-eller-skraeddersyet",
    title: "WordPress eller skræddersyet hjemmeside? Sådan vælger du | WebHjerte",
    description:
      "WordPress eller skræddersyet kode? Sammenligning af pris, hastighed, sikkerhed, redigering og SEO – og en simpel guide til at vælge den rigtige løsning.",
    keywords: ["wordpress eller skræddersyet", "wordpress pris", "wordpress vs next.js", "skræddersyet hjemmeside", "cms valg"],
    name: "WordPress eller skræddersyet?",
    category: "Guides",
    h1: "WordPress eller skræddersyet hjemmeside? Sådan vælger du",
    intro:
      "Begge løsninger kan give en god hjemmeside. Forskellen ligger i, hvem der skal redigere den, hvor vigtig hastighed er, og hvad du vil bruge den til.",
    summary:
      "Vælg WordPress, hvis du vil redigere indhold selv, vil have en blog eller en simpel webshop. Vælg skræddersyet kode (fx Next.js), hvis du prioriterer maksimal hastighed, unik funktionalitet og lav vedligeholdelse. Prisen starter hos WebHjerte fra 2.500 kr for en landingside og 4.500 kr for en Basis-hjemmeside.",
    readMinutes: 6,
    sections: [
      {
        h2: "Sammenligning",
        table: {
          head: ["", "WordPress", "Skræddersyet kode"],
          rows: [
            ["Redigering", "Nem for ikke-tekniske brugere", "Kræver udvikler eller et tilkoblet CMS"],
            ["Hastighed", "God, hvis optimeret – kan blive langsom med mange plugins", "Meget høj, fordi der kun indlæses det nødvendige"],
            ["Sikkerhed", "Kræver løbende opdatering af kerne og plugins", "Mindre angrebsflade, især ved statiske sider"],
            ["Fleksibilitet", "Stort plugin-økosystem", "Ubegrænset, men hver funktion skal bygges"],
            ["Startpris", "Fra 4.500 kr (Basis)", "Fra 2.500 kr (landingside)"],
            ["Vedligeholdelse", "Jævnlige opdateringer", "Få opdateringer"],
            ["SEO", "God med korrekt opsætning", "God med korrekt opsætning"],
          ],
        },
      },
      {
        h2: "Vælg WordPress, hvis…",
        bullets: [
          "du selv vil rette tekster, billeder og priser uden udvikler.",
          "du vil have en blog eller nyhedssektion, der opdateres ofte.",
          "flere i teamet skal kunne redigere indhold.",
          "du vil bygge en enkel webshop med WooCommerce.",
        ],
      },
      {
        h2: "Vælg skræddersyet, hvis…",
        bullets: [
          "hastighed og Core Web Vitals er afgørende for din forretning.",
          "du har specielle funktioner (beregnere, kundeportal, integrationer).",
          "du ikke har brug for selv at ændre indhold ofte.",
          "du vil have færrest mulige vedligeholdelsesopgaver.",
        ],
      },
      {
        h2: "Min anbefaling",
        paragraphs: [
          "Start med spørgsmålet: Hvem skal opdatere siden, og hvor ofte? Svaret afgør som regel valget. Jeg bygger begge dele og fortæller ærligt, hvad der giver bedst værdi for dig – også selvom det betyder en billigere løsning.",
        ],
        cta: { href: "/wordpress-horsens", label: "Læs om WordPress hos WebHjerte" },
      },
    ],
    faqs: [
      { q: "Er WordPress dårligt til SEO?", a: "Nej. Med ren opsætning, hurtig hosting og få plugins er WordPress en god platform for SEO." },
      { q: "Kan jeg skifte fra WordPress til skræddersyet senere?", a: "Ja, men indhold og design skal migreres. Planlæg derfor valget fra start." },
      { q: "Hvad er billigst?", a: "En enkelt landingside i skræddersyet kode starter fra 2.500 kr. Flersidede WordPress-sites starter fra 4.500 kr." },
    ],
    related: [
      { href: "/wordpress-horsens", title: "WordPress Horsens", desc: "WordPress-løsninger hos WebHjerte." },
      { href: "/skraeddersyede-hjemmesider", title: "Skræddersyede hjemmesider", desc: "Unikt design og hurtig kode." },
      { href: "/hjemmeside-pris", title: "Hjemmeside pris", desc: "Se pakker." },
    ],
  },
  {
    ...base,
    slug: "hvor-lang-tid-tager-det-at-lave-en-hjemmeside",
    title: "Hvor lang tid tager det at lave en hjemmeside? | WebHjerte",
    description:
      "Hvor lang tid tager det at lave en hjemmeside? Realistisk tidsplan for landingside, Basis og Standard – og hvad der kan forsinke projektet.",
    keywords: ["hvor lang tid tager det at lave en hjemmeside", "få lavet din hjemmeside", "hjemmeside hurtigt", "levering hjemmeside"],
    name: "Hvor lang tid tager en hjemmeside?",
    category: "Guides",
    h1: "Hvor lang tid tager det at lave en hjemmeside?",
    intro:
      "Det korte svar: 2–10 dage hos WebHjerte, hvis indhold og billeder er klar. Her er tidsplanen trin for trin – og hvad der typisk skaber forsinkelser.",
    summary:
      "En landingside tager typisk ca. 2 dage, en Basis-hjemmeside ca. 5 dage og en Standard-hjemmeside ca. 10 dage hos WebHjerte. Større løsninger som webshops tager 2–4 uger. Den største årsag til forsinkelser er manglende tekster og billeder fra kunden.",
    readMinutes: 5,
    sections: [
      {
        h2: "Typisk tidsplan",
        table: {
          head: ["Pakke", "Leveringstid", "Hvad tager tid?"],
          rows: [
            ["Landingside", "ca. 2 dage", "Design og én side, tekst og formular"],
            ["Basis (3–5 sider)", "ca. 5 dage", "Design, bygning og test af flere sider"],
            ["Standard (op til 8 sider)", "ca. 10 dage", "SEO, analytics, booking og flere sider"],
            ["Webshop / skræddersyet", "2–4 uger", "Produkter, betaling, integrationer og test"],
          ],
        },
        paragraphs: ["Tiderne regnes fra, at designet er godkendt, og indhold er afleveret."],
      },
      {
        h2: "Faserne i et projekt",
        steps: [
          { title: "Første samtale (15–30 min.)", text: "Mål, målgruppe, ønsker og budget afklares." },
          { title: "Design (inden for 48 timer)", text: "Du modtager et konkret designudkast. Intet bygges, før du har godkendt det." },
          { title: "Indhold", text: "Tekster, billeder og logo samles. Jeg hjælper med struktur og formuleringer." },
          { title: "Udvikling", text: "Siden bygges, SEO og analytics sættes op, og formularer testes." },
          { title: "Test og rettelser", text: "Mobil, tablet og desktop gennemgås, og dine rettelser indarbejdes." },
          { title: "Lancering", text: "Siden sættes live på dit domæne." },
        ],
      },
      {
        h2: "Hvad kan forsinke projektet?",
        bullets: [
          "Tekster og billeder, der leveres sent eller ændres undervejs.",
          "Mange rettelsesrunder i designfasen.",
          "Afhængighed af tredjepart (fx adgang til domæne eller eksisterende hosting).",
          "Ønsker om ekstra funktioner midt i projektet.",
          "Juridiske tekster, der skal vurderes af en jurist.",
        ],
      },
      {
        h2: "Sådan får du hurtigst en hjemmeside",
        bullets: [
          "Saml logo, billeder og en kort tekst om dine ydelser inden første samtale.",
          "Vælg en pakke, der passer til det mest nødvendige – du kan altid udvide senere.",
          "Giv hurtig feedback på designet.",
          "Udpeg én kontaktperson i din virksomhed.",
        ],
        cta: { href: "/kontakt", label: "Start med en gratis samtale" },
      },
    ],
    faqs: [
      { q: "Kan jeg få en hjemmeside på 2 dage?", a: "Ja, en landingside kan ofte leveres på ca. 2 dage, når indhold og billeder er klar." },
      { q: "Hvorfor tager andre bureauer flere uger?", a: "Mange bureauer har flere led og længere processer. Mindre omfang og direkte kontakt kan gøre forløbet kortere." },
      { q: "Kan siden gå live, før den er helt færdig?", a: "Ja. Vi kan lancere kernen først og udvide løbende." },
    ],
    related: [
      { href: "/hjemmeside-pris", title: "Hjemmeside pris", desc: "Se pakker og leveringstider." },
      { href: "/hjemmeside-til-virksomhed", title: "Hjemmeside til virksomhed", desc: "Hvad en erhvervshjemmeside skal kunne." },
      { href: "/kontakt", title: "Kontakt", desc: "Få et tilbud inden for 24 timer." },
    ],
  },
];

export const articles = [...aiArticles.map((a) => ({ ...a })), ...own];
