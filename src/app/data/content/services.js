// Ydelses- og emnesider (baseret på Search Console-søgninger og kundernes spørgsmål)

export const servicePages = [
  {
    slug: "webshop-hjemmeside",
    type: "service",
    title: "Hjemmeside med webshop – pris og løsninger | WebHjerte",
    description:
      "Hjemmeside med webshop til små virksomheder: WooCommerce, Shopify eller skræddersyet løsning. Betaling, lager og SEO. Fra 14.000 kr til fast pris.",
    keywords: ["professionel hjemmeside med webshop", "webshop pris", "lav webshop", "woocommerce", "shopify"],
    name: "Hjemmeside med webshop",
    serviceType: "Webshop",
    eyebrow: "Webshop",
    h1: "Hjemmeside med webshop – sælg online uden bøvl",
    intro:
      "Jeg bygger webshops til små og mellemstore virksomheder: enkle at administrere, hurtige for kunderne og klar til søgemaskiner. Du får en fast pris og en løsning, du ejer selv.",
    summary:
      "En webshop er en hjemmeside med produkter, kurv og betaling. Hos WebHjerte bygges webshops som skræddersyede løsninger fra 14.000 kr, typisk i WooCommerce eller som skræddersyet kode. Prisen afhænger af antal produkter, betalingsløsninger, integrationer og fragt.",
    sections: [
      {
        h2: "Hvilken webshop skal jeg vælge?",
        table: {
          head: ["Løsning", "Passer til", "Bemærkninger"],
          rows: [
            ["WooCommerce (WordPress)", "Små og mellemstore shops med behov for fleksibilitet", "Ingen platformsafgifter, men kræver vedligeholdelse"],
            ["Shopify", "Hurtig start, mange apps", "Månedligt abonnement og transaktionsgebyrer"],
            ["Skræddersyet", "Specielle behov, bookinger, abonnementer", "Højeste fleksibilitet og hastighed, højere startpris"],
          ],
        },
        paragraphs: ["Jeg vurderer sammen med dig, hvad der passer til dit sortiment og din økonomi, og anbefaler ærligt – også hvis det betyder, at du ikke behøver mig."],
      },
      {
        h2: "Hvad indgår i en webshop?",
        bullets: [
          "Produktsider med billeder, beskrivelser, varianter og priser.",
          "Kategorier, søgning og filtrering.",
          "Kurv og kasse med betaling via fx MobilePay, kort og faktura (afhænger af udbyder).",
          "Fragt og levering efter dine regler.",
          "Lager- og ordrehåndtering.",
          "SEO for produkter og kategorier, så pris og lagerstatus kan vises direkte i Google.",
          "Handelsbetingelser, privatlivspolitik og cookie-samtykke (GDPR).",
          "Analytics, så du kan se, hvad der sælger.",
        ],
      },
      {
        h2: "Vigtige ting at have styr på",
        paragraphs: [
          "En webshop har lovkrav, som en almindelig hjemmeside ikke har: fortrydelsesret, tydelig prisvisning inklusive moms, oplysning om levering og betalingsmetoder samt korrekt behandling af persondata. Jeg hjælper med at sætte det op efter gældende regler, men du bør altid have dine handelsbetingelser vurderet, hvis du er i tvivl om juraen.",
        ],
      },
      {
        h2: "Pris og tid",
        paragraphs: [
          "En enkel webshop starter fra 14.000 kr og tager typisk 2–4 uger afhængigt af antallet af produkter og integrationer. Transaktionsgebyrer til betalingsudbydere og eventuelle abonnementer betaler du direkte til dem.",
        ],
        cta: { href: "/kontakt", label: "Få et tilbud på din webshop" },
      },
    ],
    faqs: [
      { q: "Hvad koster en webshop?", a: "Hos WebHjerte fra 14.000 kr. Prisen afhænger af antal produkter, betalingsløsninger og integrationer." },
      { q: "Hvilken platform er bedst?", a: "Det afhænger af dit behov. WooCommerce er fleksibelt og uden platformsafgifter, Shopify er hurtigt at komme i gang med, og skræddersyet kode giver størst frihed." },
      { q: "Kan jeg selv tilføje produkter?", a: "Ja. Jeg viser dig, hvordan du opretter og redigerer produkter, priser og lager." },
    ],
    related: [
      { href: "/services", title: "Services", desc: "Alle pakker og ydelser." },
      { href: "/wordpress-hjemmeside", title: "WordPress", desc: "Hjemmeside, du selv kan redigere." },
      { href: "/hjemmeside-pris", title: "Hjemmeside pris", desc: "Pakker og priser." },
    ],
  },
  {
    slug: "hosting-og-vedligeholdelse",
    type: "service",
    title: "Hosting og vedligeholdelse – pris og drift | WebHjerte",
    description:
      "Hvad koster hosting og vedligeholdelse? Se, hvad der er inkluderet i abonnementet fra 249 kr/md, og hvad domæne og hosting koster.",
    keywords: ["hosting pris", "hosting af hjemmeside pris", "webhosting priser", "vedligeholdelse hjemmeside", "hjemmeside abonnement", "hvad koster en hjemmeside om året"],
    name: "Hosting og vedligeholdelse",
    serviceType: "Hosting og webvedligeholdelse",
    eyebrow: "Drift og support",
    h1: "Hosting og vedligeholdelse: hvad koster det at holde en hjemmeside kørende?",
    intro:
      "En hjemmeside er ikke et engangskøb. Domæne, hosting, sikkerhed og små rettelser skal løbende dækkes. Her er et ærligt overblik, og hvad jeg tilbyder fra 249 kr/md.",
    summary:
      "Løbende udgifter til en hjemmeside består af domæne (ca. 100–200 kr/år), hosting (typisk 0–500 kr/md afhængigt af løsning) og eventuelt vedligeholdelse. Hos WebHjerte får du 30 dages gratis support efter lancering og kan derefter vælge et vedligeholdelsesabonnement fra 249 til 799 kr/md.",
    sections: [
      {
        h2: "De løbende omkostninger ved en hjemmeside",
        table: {
          head: ["Post", "Typisk niveau", "Hvad dækker det?"],
          rows: [
            ["Domæne (.dk, .com)", "ca. 100–200 kr/år", "Din adresse på nettet"],
            ["Hosting", "Fra gratis til ca. 500 kr/md (afhænger af løsning)", "Serverplads, hastighed og oppetid"],
            ["SSL-certifikat", "Ofte inkluderet", "Krypteret forbindelse (https)"],
            ["Vedligeholdelse hos WebHjerte", "249–799 kr/md", "Opdateringer, sikkerhed, rettelser og support"],
            ["Tredjepartsværktøjer", "Varierer", "Fx booking, nyhedsbreve, betalingsløsning"],
          ],
        },
        paragraphs: [
          "Beløbene er vejledende og varierer med udbyder. Når jeg sender et tilbud, får du overblik over de poster, der er relevante for netop din løsning.",
        ],
      },
      {
        h2: "Hvad er inkluderet i mit tilbud?",
        bullets: [
          "30 dages gratis support efter lancering.",
          "Opsætning af hosting og SSL ved lancering. Med et vedligeholdelsesabonnement står jeg for hosting – ellers betaler du udbyderen direkte.",
          "Domæne og kode tilhører dig – du er ikke låst til mig.",
          "Gennemgang af, hvordan siden redigeres og vedligeholdes.",
        ],
      },
      {
        h2: "Vedligeholdelsesabonnement fra 249 kr/md",
        paragraphs: [
          "Vil du ikke selv holde styr på hosting, opdateringer og små rettelser, gør jeg det for dig. Der er tre niveauer – alle priser er inkl. moms, løbende måned med 30 dages opsigelse og uden binding.",
        ],
        table: {
          head: ["Abonnement", "Pris", "Indhold"],
          rows: [
            ["Basis", "249 kr/md", "Hosting, SSL, daglig backup, opdateringer, overvågning af oppetid og fornyelse af domæne"],
            ["Standard", "449 kr/md", "Alt i Basis + op til 30 min. ændringer pr. måned og månedlig statusrapport"],
            ["Pro", "799 kr/md", "Alt i Standard + op til 2 timers ændringer, SEO-rapport, Google-anmeldelser og Google Business Profile"],
          ],
        },
        bullets: [
          "Ubrugte minutter overføres ikke til næste måned.",
          "Større opgaver aftales til fast pris, før jeg går i gang.",
        ],
        cta: { href: "/services#vedligeholdelse", label: "Se abonnementerne" },
      },
      {
        h2: "Hvorfor vedligeholdelse er vigtig",
        paragraphs: [
          "Forældede systemer og plugins er den hyppigste årsag til sikkerhedsproblemer. Dertil kommer, at priser, åbningstider og tilbud skal være aktuelle – både for kundernes skyld og for søgemaskinerne. En side, der aldrig opdateres, mister gradvist både tillid og synlighed.",
          "Jeg anbefaler at planlægge mindst en gennemgang hvert kvartal: tjek links, formularer, priser og indhold, og kig i Search Console for fejl.",
        ],
      },
    ],
    faqs: [
      { q: "Hvad koster en hjemmeside om året?", a: "Udover selve udviklingen skal du regne med domæne (ca. 100–200 kr/år), hosting og evt. vedligeholdelse. Hos WebHjerte fra 249 kr/md for vedligeholdelse." },
      { q: "Er support inkluderet?", a: "Ja. Du får 30 dages gratis support efter lancering." },
      { q: "Er jeg bundet til jer?", a: "Nej. Domæne og kode tilhører dig, og du kan til enhver tid flytte siden eller vælge en anden leverandør." },
      { q: "Kan I flytte min eksisterende hjemmeside?", a: "Ja, i mange tilfælde. Kontakt mig, så vurderer jeg opgaven." },
    ],
    related: [
      { href: "/blog/hvad-koster-en-hjemmeside-om-aaret", title: "Hvad koster en hjemmeside om året?", desc: "Guide til de løbende udgifter." },
      { href: "/hjemmeside-pris", title: "Hjemmeside pris", desc: "Pakker og priser." },
    ],
  },
];
