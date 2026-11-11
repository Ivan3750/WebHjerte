// Brancheside: hjemmesider til håndværkere og andre lokale servicevirksomheder.
// Skrevet som praktisk viden – hvad kunderne leder efter, hvad siden skal indeholde, og hvilke fejl man skal undgå.
// Priser nævnes kun kort og peger videre til prisguiden, så siderne ikke gentager de samme tal.

const rel = {
  haandvaerkere: {
    href: "/hjemmeside-til-haandvaerkere",
    title: "Hjemmeside til håndværkere",
    desc: "Overblikket: hvad alle håndværkere bør have på deres side.",
  },
  restauranter: { href: "/hjemmeside-til-restauranter", title: "Hjemmeside til restauranter", desc: "Menu, booking og bestilling uden mellemled." },
  seo: { href: "/seo-horsens", title: "SEO Horsens", desc: "Sådan bliver du fundet af kunder i dit område." },
  gratisTjek: { href: "/gratis-seo-tjek-horsens", title: "Gratis SEO-tjek", desc: "Få en gennemgang af din nuværende hjemmeside." },
  blogSeo: { href: "/blog/seo-tjekliste-lokale-virksomheder", title: "SEO-tjekliste til lokale virksomheder", desc: "Trin for trin: det, der betyder mest for lokal synlighed." },
  portefolje: { href: "/portefolje", title: "Se eksempler", desc: "Færdige hjemmesider og hvordan de er bygget." },
};

export const nichePages = [
  /* ─────────────────────────── Håndværkere (overblik) ─────────────────────────── */
  {
    slug: "hjemmeside-til-haandvaerkere",
    type: "service",
    title: "Hjemmeside til håndværkere i Horsens | WebHjerte",
    description:
      "Hjemmeside til håndværkere: sådan får du flere opkald fra lokale kunder – hvad siden skal indeholde, og de fejl, der koster henvendelser.",
    keywords: ["hjemmeside håndværker", "hjemmeside til håndværkere", "håndværker hjemmeside Horsens", "webdesign håndværker", "hjemmeside tømrer VVS elektriker maler"],
    name: "Hjemmeside til håndværkere",
    serviceType: "Webdesign",
    eyebrow: "Til håndværkere",
    h1: "Hjemmeside til håndværkere, der får telefonen til at ringe",
    intro:
      "Dine kunder finder dig ikke på reklamer – de finder dig, når vandet løber, lyset går, eller terrassen skal bygges. En hjemmeside til en håndværker skal derfor ikke være pæn først og fremmest. Den skal gøre det let at vælge dig og endnu lettere at kontakte dig.",
    summary:
      "En god håndværkerside besvarer tre spørgsmål på få sekunder: Hvad laver du? Arbejder du hos mig? Hvordan kommer jeg i kontakt med dig? Resten – billeder, anmeldelser, autorisation og pris – er det, der får kunden til at vælge dig frem for de to andre, vedkommende har åbnet i andre faner.",
    facts: [
      { num: "3 sekunder", label: "Så lang tid har siden til at svare kunden" },
      { num: "1 tryk", label: "Fra Google til opkald på mobilen" },
      { num: "48 timer", label: "Til første designudkast" },
    ],
    sections: [
      {
        h2: "Sådan vælger kunderne en håndværker",
        paragraphs: [
          "Når nogen skal have en håndværker, åbner de sjældent kun én side. De søger, åbner tre-fire resultater og vælger hurtigt – ofte på mobilen, ofte mens de har et problem, der skal løses. Den side, der først gør det klart, at du kan det, de har brug for, og arbejder i deres område, vinder samtalen.",
          "Det betyder, at en håndværkerside fungerer bedst, når den er bygget om kundens spørgsmål og ikke om firmaets historie. Kunden spørger sig selv: Kan de hjælpe mig? Er de til at stole på? Hvor hurtigt kan jeg få fat i dem? Kan jeg se, hvad de har lavet før?",
        ],
        callout: {
          tone: "tip",
          title: "Tommelfingerregel",
          text: "Hvis en fremmed ikke kan se dine ydelser, dit område og en måde at kontakte dig på, før de har scrollet én gang, mister du kunder – også selvom resten af siden er fin.",
        },
      },
      {
        h2: "Det leder dine kunder efter",
        cards: [
          { title: "Hvad laver I – og hvad laver I ikke?", text: "Kunden vil have et ja eller nej hurtigt. Skriv dine ydelser som kunden ville sige dem: 'nyt badeværelse', 'fejl på varmepumpen', 'tilbygning'." },
          { title: "Arbejder I hos mig?", text: "Nævn byer og områder med navn. Det beroliger kunden og hjælper dig på Google, hvor folk søger på 'håndværker + by'." },
          { title: "Kan jeg stole på jer?", text: "Autorisation, forsikring, anmeldelser og rigtige billeder af jeres arbejde. Ingen stockfotos af mænd med hjelm." },
          { title: "Hvad sker der, hvis jeg skriver?", text: "Fortæl, hvor hurtigt du svarer, og hvad der sker bagefter: besigtigelse, tilbud, tidsplan. Det tager usikkerheden af at kontakte dig." },
          { title: "Hvad koster det cirka?", text: "Du behøver ikke lægge dig fast, men et 'typisk fra – til' eller en forklaring på, hvordan du prissætter, filtrerer de forkerte henvendelser fra." },
          { title: "Hvad har I lavet før?", text: "Før/efter-billeder med en kort beskrivelse slår enhver tekst om kvalitet. Det er det, kunden husker og viser videre til sin partner." },
        ],
      },
      {
        h2: "Opbygningen, der virker på de fleste håndværkersider",
        steps: [
          { title: "Øverst: ydelse, område og handling", text: "En overskrift, der siger, hvad du laver og hvor, og en tydelig knap til at ringe eller skrive. Ingen slideshow, ingen velkomsttekst." },
          { title: "Dine ydelser i korte afsnit", text: "Hver ydelse får sin egen kort beskrivelse – og gerne sin egen side, når du vil findes på de specifikke søgninger." },
          { title: "Dit arbejde – med billeder", text: "Tre til seks projekter, hver med et før/efter-billede, hvad opgaven gik ud på, og hvor lang tid den tog." },
          { title: "Tillid: anmeldelser, autorisation og garanti", text: "Rigtige citater fra kunder med fornavn og by. Skriv, hvilken autorisation og forsikring du har." },
          { title: "Sådan foregår det", text: "Tre-fire korte trin fra første kontakt til færdigt arbejde. Det fjerner det, der gør kunder nervøse." },
          { title: "Kontakt, der er nem", text: "Telefonnummer, der kan trykkes, og en kort formular, hvor kunden kan beskrive opgaven og vedhæfte et billede." },
        ],
      },
      {
        h2: "Gør – og undgå",
        compare: {
          good: {
            title: "Det virker",
            items: [
              "Dine egne billeder af rigtige opgaver, også selvom de ikke er perfekte",
              "Byer og områder skrevet ud i overskrifter og tekst",
              "Korte tekster med de ord, kunderne selv bruger",
              "Et telefonnummer, der er til at trykke på – og et svar inden for én arbejdsdag",
              "En side pr. hovedydelse, hvis du vil findes på specifikke søgninger",
            ],
          },
          bad: {
            title: "Det koster henvendelser",
            items: [
              "Stockfotos og tomme sætninger som 'kvalitet i hver detalje'",
              "En lang 'om os'-historie, før kunden kan se, hvad du laver",
              "Kontaktoplysninger, der kun står i bunden af siden",
              "En side, der er langsom på mobilen eller først åbner efter flere sekunder",
              "Gamle priser, åbningstider eller billeder, som ikke passer længere",
            ],
          },
        },
      },
      {
        h2: "Fundet lokalt: Google, kort og anmeldelser",
        paragraphs: [
          "Håndværkere bliver især fundet på tre måder: i Googles kortresultater (Google Virksomhedsprofil), i almindelige søgeresultater og via anbefalinger. Hjemmesiden er det, der binder det sammen: den bekræfter, hvem du er, og giver Google noget at forstå dit område ud fra.",
        ],
        cards: [
          { title: "Google Virksomhedsprofil", text: "Udfyld alt: ydelser, område, åbningstider, billeder. Bed tilfredse kunder om en anmeldelse, mens arbejdet stadig er friskt." },
          { title: "Én side pr. ydelse og by", text: "'Tømrer i Horsens' og 'terrasse i Horsens' er to forskellige søgninger. Egne sider med egne tekster giver dig begge." },
          { title: "Ensartede oplysninger", text: "Navn, adresse og telefonnummer skal være ens på hjemmeside, Google, kataloger og sociale medier." },
          { title: "Hurtig på mobil", text: "Langsomme sider mister både besøgende og placeringer. Siden bygges til at åbne hurtigt, også med dårlig dækning." },
        ],
        cta: { href: "/blog/seo-tjekliste-lokale-virksomheder", label: "SEO-tjekliste til lokale virksomheder" },
      },
      {
        h2: "Find din branche",
        paragraphs: [
          "Håndværkerfirmaer har forskellige kunder og forskellige søgninger. Her er, hvad der typisk virker for de største fag.",
        ],
        cards: [
          { title: "VVS", tag: "Branche", text: "Akutte opkald, serviceaftaler og de søgninger, der kommer, når der er vand i kælderen." },
          { title: "Elektriker", tag: "Branche", text: "Autorisation, tavler, fejlfinding og den hastigt voksende efterspørgsel på elbil-ladere." },
          { title: "Tømrer", tag: "Branche", text: "Store projekter, hvor kunden vil se kvaliteten, før de ringer: terrasser, tilbygninger og køkkener." },
          { title: "Maler, murer, gulvlægger m.fl.", tag: "Også muligt", text: "Samme principper gælder: ydelser, område, billeder og en nem vej til tilbud. Kontakt mig, så tilpasser jeg til dit fag." },
        ],
      },
      {
        h2: "Hvilken løsning passer til dig?",
        paragraphs: [
          "Den rigtige størrelse afhænger af, hvor mange ydelser og områder du vil findes på – ikke af, hvor stort dit firma er. Det er min typiske anbefaling:",
        ],
        table: {
          head: ["Situation", "Typisk løsning", "Hvorfor"],
          rows: [
            ["Enkeltmandsfirma med få ydelser", "Landingside eller Basis", "Én samlet side med ydelser, billeder og kontakt er nok til at komme i gang."],
            ["Flere ydelser og flere byer", "Basis eller Standard", "Egne sider pr. ydelse giver flere måder at blive fundet på."],
            ["Mange projekter og behov for booking/tilbud", "Standard", "Galleri, formularer og måling af, hvilke sider der giver henvendelser."],
          ],
        },
        after: ["Priserne ligger fast og står i prisguiden. Du får et konkret, fast tilbud inden for 24 timer, når jeg har hørt om dit firma."],
        cta: { href: "/hjemmeside-pris", label: "Se prisguiden" },
      },
    ],
    faqs: [
      {
        q: "Skal en håndværker overhovedet have en hjemmeside – er Facebook ikke nok?",
        a: "Facebook er godt til at vise dit arbejde, men kunder, der søger på Google efter en håndværker, ender oftest på hjemmesider og i Googles kort. En hjemmeside giver dig også din egen, stabile placering uden at være afhængig af, hvad en platform viser.",
      },
      {
        q: "Hvad skal der stå på en håndværkers hjemmeside?",
        a: "Dine ydelser, dit arbejdsområde, billeder af udført arbejde, anmeldelser, autorisation og en nem måde at kontakte dig på. Resten er bonus.",
      },
      {
        q: "Kan jeg selv opdatere billeder og tekster?",
        a: "Ja, hvis siden bygges i WordPress. Ellers kan jeg opdatere for dig via en aftale. Det vigtigste er, at billederne bliver ved med at komme til – det er dem, der overbeviser kunderne.",
      },
      {
        q: "Hvor hurtigt kan jeg få flere henvendelser?",
        a: "Det afhænger af, hvor godt dit lokale marked er dækket. En ny, hurtig side med klare ydelser kan give flere kontakter fra de første uger, men placeringer på Google bygges typisk op over 2–3 måneder.",
      },
      {
        q: "Hvad er forskellen på dig og de landsdækkende håndværkerportaler?",
        a: "Portaler tager ofte betaling pr. lead og deler dem med dine konkurrenter. Din egen hjemmeside og Google-profil giver kunder, der selv har valgt dig – og du ejer relationen.",
      },
    ],
    related: [rel.restauranter, rel.seo, rel.gratisTjek],
  },

  /* ─────────────────────────── Restauranter ─────────────────────────── */
  {
    slug: "hjemmeside-til-restauranter",
    type: "service",
    title: "Hjemmeside til restaurant og café i Horsens | WebHjerte",
    description:
      "Hjemmeside til restauranter og caféer: menu, booking og egen bestilling. Få flere gæster direkte – uden kommission til platforme.",
    keywords: ["hjemmeside restaurant", "restaurant hjemmeside Horsens", "café hjemmeside", "online bestilling restaurant", "booking restaurant hjemmeside"],
    name: "Hjemmeside til restauranter",
    serviceType: "Webdesign",
    eyebrow: "Til restauranter og caféer",
    h1: "Hjemmeside til restauranter og caféer i Horsens",
    intro:
      "Dine gæster skal kunne se menuen, finde åbningstiderne og booke bord eller bestille mad – uden at skulle leje sig ind hos en platform. En god restaurantside gør det på få sekunder, og giver dig kunderelationen tilbage.",
    summary:
      "En restaurantside skal besvare gæstens tre spørgsmål hurtigt: Hvad serverer I? Hvornår har I åbent, og hvor ligger I? Hvordan booker eller bestiller jeg? Med menu som tekst (ikke kun PDF), en synlig bookingknap og egen bestilling beholder du både gæsten og marginen.",
    facts: [
      { num: "Direkte", label: "Gæster og bestillinger uden mellemled" },
      { num: "Menu som tekst", label: "Kan læses af Google og på mobilen" },
      { num: "48 timer", label: "Til første designudkast" },
    ],
    sections: [
      {
        h2: "Hvad gæster tjekker, før de vælger dig",
        paragraphs: [
          "De fleste vælger restaurant på mobilen, ofte samme dag. De kigger på billeder, læser menuen, tjekker åbningstider og kigger på anmeldelser – og beslutter på få minutter. Er menuen en tung PDF, åbningstiderne forkerte eller bookingen svær at finde, tager de det næste sted.",
        ],
        callout: {
          tone: "fact",
          title: "Godt at vide",
          text: "Åbningstider er det mest tjekkede og det mest forkerte på restaurantsider. Hold dem ens på hjemmeside, Google og Facebook – og opdater dem før helligdage og ferier.",
        },
      },
      {
        h2: "Det skal være på forsiden",
        cards: [
          { title: "Åbningstider og adresse", tag: "Øverst", text: "Et sted, hvor gæsten finder dem på to sekunder. Inkluder særlige åbningstider og køkkenets lukketid." },
          { title: "Menu som tekst", tag: "Vigtigt", text: "Ikke kun PDF. Menu som tekst kan læses på mobilen, findes af Google og er nem at opdatere." },
          { title: "Billeder af mad og sted", tag: "Stemning", text: "Rigtige billeder af retter og rum. Gæsterne vil vide, hvordan der ser ud, og hvilken stemning de kan forvente." },
          { title: "Bookingknap", tag: "Handling", text: "Synlig på forsiden og på mobilen. Forbind den til dit bookingsystem eller en enkel formular." },
          { title: "Bestilling og take away", tag: "Valgfrit", text: "Hvis du tilbyder det, kan gæsten bestille direkte på din side – uden kommission til en platform." },
          { title: "Anmeldelser", tag: "Tillid", text: "Et par rigtige citater og link til Google-anmeldelser. Det beroliger gæster, der ikke kender dig." },
        ],
      },
      {
        h2: "Egen bestilling vs. platforme",
        paragraphs: [
          "Platforme som Wolt og Just Eat giver synlighed, men tager en kommission, som kan være op til omkring 30 %, afhængigt af aftalen. Samtidig ejer platformen kundeforholdet: du ser sjældent kundens navn eller kontaktinfo, og kan ikke bygge relationen selv.",
          "Egen bestilling på hjemmesiden betyder, at du beholder marginen og kunderne. Det kræver, at gæsterne ved, du findes – derfor bør du bruge begge dele: platforme til at blive opdaget og egen side til de gæster, der kender dig.",
        ],
        stats: [
          { value: "Op til ca. 30 %", label: "Kommission hos mange platforme", note: "Afhænger af aftalen med platformen." },
          { value: "Din relation", label: "Du beholder gæsten", note: "Navn, historik og mulighed for at kontakte dem igen." },
          { value: "Din margin", label: "Prisen er din egen", note: "Ingen mellemled på hver ordre." },
        ],
        callout: {
          tone: "tip",
          title: "Tip",
          text: "Læg et lille kort eller en QR-kode med i hver take away-pose, der peger på din egen side. Det flytter gæster fra platformen til din egen bestilling over tid.",
        },
      },
      {
        h2: "Siden bygget til gæster på mobilen",
        steps: [
          { title: "Øverst: stemning, åbningstid og booking", text: "Et godt billede, hvad du serverer, og to knapper: book bord og se menuen." },
          { title: "Menuen som tekst", text: "Opdelt i forretter, hovedretter og desserter, med allergener og vegetarretter tydeligt markeret." },
          { title: "Din historie og dit sted", text: "Kort om, hvem I er, og hvad der gør jer særlige. Fortæl, hvad gæsten kan forvente." },
          { title: "Booking og bestilling", text: "En enkel booking-formular eller link til dit system. Valgfrit: bestilling af take away og udlevering." },
          { title: "Anmeldelser og billeder", text: "Rigtige citater, galleri og link til Google. Det er det, der får nye gæster til at tage chancen." },
          { title: "Find os og kontakt", text: "Kort, parkering, åbningstider og telefon. Gør det nemt at finde vej og kontakte jer." },
        ],
      },
      {
        h2: "Lokal synlighed for restauranter",
        cards: [
          { title: "Google Virksomhedsprofil", text: "Det vigtigste for restauranter. Åbningstider, billeder, menu, booking-link og svar på anmeldelser." },
          { title: "Menu som tekst", text: "Gør, at Google kan læse dine retter og vise dig på søgninger som 'brunch Horsens' eller 'pizza i nærheden'." },
          { title: "Søgninger, du kan vinde", text: "Typen af mad + by, 'frokost', 'brunch', 'selskab' og 'take away'. Egne sider til store emner som selskaber." },
          { title: "Korrekt på Google", text: "Åbningstider, menu og adresse vises korrekt, når kunder søger på Google eller spørger ChatGPT." },
        ],
        cta: { href: "/blog/seo-tjekliste-lokale-virksomheder", label: "SEO-tjekliste til lokale virksomheder" },
      },
      {
        h2: "Gør – og undgå",
        compare: {
          good: {
            title: "Det virker",
            items: [
              "Menu som tekst med priser og allergener",
              "Rigtige billeder af retter og lokale",
              "Booking og bestilling med ét tryk på mobilen",
              "Rigtige åbningstider – også i ferier og på helligdage",
              "Anmeldelser og link til Google",
            ],
          },
          bad: {
            title: "Det koster gæster",
            items: [
              "Menu som tung PDF, der er svær at læse på mobil",
              "Gamle åbningstider og priser",
              "Bookingen gemt væk eller kun via telefon",
              "Stockfotos af retter, I ikke serverer",
              "En side, der kun virker godt på computer",
            ],
          },
        },
      },
      {
        h2: "Hvilken løsning passer?",
        table: {
          head: ["Situation", "Typisk løsning", "Hvorfor"],
          rows: [
            ["Café eller restaurant med fast menu", "Landingside eller Basis", "Menu, billeder, booking og kontakt på en samlet, hurtig side."],
            ["Flere menuer, selskaber og begivenheder", "Basis eller Standard", "Egne sider til selskaber, brunch og arrangementer."],
            ["Take away og online bestilling", "Standard eller skræddersyet", "Bestillingsfunktion, betaling og integration til dit køkken."],
          ],
        },
        after: ["Se prisguiden for faste priser. Du får et konkret tilbud inden for 24 timer."],
        cta: { href: "/hjemmeside-pris", label: "Se prisguiden" },
      },
    ],
    faqs: [
      {
        q: "Skal menuen være som tekst eller PDF?",
        a: "Som tekst. Den kan læses på mobilen, findes af Google og er nem at opdatere. Du kan altid tilbyde en PDF til print ved siden af.",
      },
      {
        q: "Kan gæster bestille mad direkte på hjemmesiden?",
        a: "Ja, jeg kan bygge en bestillingsfunktion, så gæster kan bestille take away uden at ringe. Du undgår kommission til platforme og beholder kundekontakten.",
      },
      {
        q: "Kan jeg selv opdatere menuen?",
        a: "Ja, hvis siden bygges i WordPress, kan du selv redigere menu, priser og åbningstider. Ellers kan jeg gøre det for dig via en aftale.",
      },
      {
        q: "Hvordan kobler jeg booking til siden?",
        a: "Enten ved at linke til dit eksisterende bookingsystem eller ved at bygge en enkel formular, der sender forespørgsler til dig. Begge dele virker godt på mobil.",
      },
      {
        q: "Hvordan bliver jeg fundet på Google?",
        a: "Med en opdateret Google Virksomhedsprofil, menu som tekst, lokale tekster og anmeldelser. Det er de tre ting, der betyder mest for restauranter.",
      },
    ],
    related: [rel.haandvaerkere, rel.seo, rel.portefolje],
  },

];
