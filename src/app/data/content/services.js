// Ydelses- og emnesider (baseret på Search Console-søgninger og kundernes spørgsmål)

export const servicePages = [
  {
    slug: "skraeddersyede-hjemmesider",
    type: "service",
    title: "Skræddersyede hjemmesider – fast pris fra 2.500 kr | WebHjerte",
    description:
      "Skræddersyede hjemmesider og websider til virksomheder: unikt design, hurtig kode og SEO bygget ind. Fast pris, direkte kontakt og levering på 2–10 dage.",
    keywords: ["skræddersyede hjemmesider", "skræddersyede websider", "skræddersyet webdesign", "webudvikler firma", "website firma"],
    name: "Skræddersyede hjemmesider",
    serviceType: "Skræddersyet webdesign",
    eyebrow: "Skræddersyet webdesign",
    h1: "Skræddersyede hjemmesider, der ligner dig – og leverer kunder",
    intro:
      "Ingen færdige skabeloner med dit logo klistret på. Jeg designer og koder din hjemmeside ud fra din virksomhed, dine kunder og dine mål – og leverer den til fast pris.",
    summary:
      "En skræddersyet hjemmeside er designet og bygget specifikt til din virksomhed i stedet for at være en færdig skabelon. Fordelene er unikt udtryk, hurtigere indlæsning, bedre SEO og frihed til at udvide. Hos WebHjerte starter skræddersyede hjemmesider fra 2.500 kr (landingside), og avancerede løsninger fra 14.000 kr.",
    sections: [
      {
        h2: "Hvad betyder “skræddersyet”?",
        paragraphs: [
          "Skræddersyet betyder, at designet og strukturen tegnes fra bunden med udgangspunkt i dit brand, dit tilbud og dine kunders vej mod en henvendelse. Det er modsætningen til skabelonløsninger, hvor du tilpasser farver og tekst i et design, som tusindvis af andre også bruger.",
          "Det betyder ikke, at det nødvendigvis er dyrt eller langsomt. Fordi jeg arbejder med få, gennemprøvede byggesten, kan jeg levere unikke hjemmesider hurtigt – ofte på 2–10 dage.",
        ],
      },
      {
        h2: "Skræddersyet vs. skabelon",
        table: {
          head: ["", "Skræddersyet", "Færdig skabelon"],
          rows: [
            ["Design", "Unikt og tilpasset din virksomhed", "Samme udseende som mange andre"],
            ["Hastighed", "Kun den kode, du har brug for", "Ofte tung med ubrugte funktioner"],
            ["SEO", "Struktur og indhold bygget til dine søgninger", "Generisk opsætning"],
            ["Fleksibilitet", "Kan udvides præcist, som du ønsker", "Begrænset af skabelonens muligheder"],
            ["Pris i starten", "Fra 2.500 kr", "Billigere eller gratis"],
            ["Ejerskab", "Kode og domæne tilhører dig", "Varierer – ofte bundet til platform"],
          ],
        },
      },
      {
        h2: "Min proces",
        steps: [
          { title: "Afklaring", text: "Vi taler om dine kunder, din konkurrence, dine mål og dit budget." },
          { title: "Design inden for 48 timer", text: "Du får et konkret designudkast. Passer det ikke, betaler du 0 kr for designet." },
          { title: "Udvikling", text: "Først når designet er godkendt, bygger jeg siden i hurtig, moderne kode (fx Next.js) eller WordPress." },
          { title: "Test", text: "Jeg tester på forskellige skærme og browsere og tjekker hastighed og tilgængelighed." },
          { title: "Lancering", text: "Siden går live på dit domæne, og du får 30 dages support." },
        ],
      },
      {
        h2: "Hvad er inkluderet?",
        bullets: [
          "Responsivt design til mobil, tablet og desktop.",
          "Teknisk SEO-grundlag og struktureret data.",
          "Kontaktformular, Google Maps og klik-for-at-ringe.",
          "Hurtig indlæsning og optimerede billeder.",
          "SSL-certifikat og grundlæggende sikkerhed.",
          "Mulighed for CMS (WordPress), booking, webshop og integrationer.",
          "Dit domæne og din kode tilhører dig fra dag ét.",
        ],
      },
      {
        h2: "Hvad koster det?",
        paragraphs: [
          "Priserne er faste og afhænger af omfang: Landingside fra 2.500 kr, Basis fra 4.500 kr, Standard fra 7.500 kr og komplekse løsninger (webshop, kundeportal, specialfunktioner) fra 14.000 kr. Alle priser er inkl. moms.",
        ],
        cta: { href: "/hjemmeside-pris", label: "Se alle priser" },
      },
    ],
    faqs: [
      { q: "Hvad er en skræddersyet hjemmeside?", a: "En hjemmeside, der er designet og bygget specifikt til din virksomhed i stedet for at bruge en færdig skabelon." },
      { q: "Er skræddersyede hjemmesider dyre?", a: "Ikke nødvendigvis. Hos WebHjerte starter de fra 2.500 kr for en landingside og 4.500 kr for en Basis-hjemmeside." },
      { q: "Kan jeg selv redigere en skræddersyet hjemmeside?", a: "Ja, hvis den bygges i WordPress eller kobles på et redigeringssystem. Ellers kan jeg stå for rettelser via en vedligeholdelsesaftale." },
      { q: "Hvem ejer hjemmesiden?", a: "Det gør du. Domæne og kode tilhører dig." },
    ],
    related: [
      { href: "/hjemmeside-til-virksomhed", title: "Hjemmeside til virksomhed", desc: "Hvad en erhvervshjemmeside skal kunne." },
      { href: "/wordpress-horsens", title: "WordPress", desc: "Hjemmeside, du selv kan redigere." },
      { href: "/portefolje", title: "Portefølje", desc: "Se eksempler." },
    ],
  },
  {
    slug: "hjemmeside-til-virksomhed",
    type: "service",
    title: "Hjemmeside til virksomhed – fast pris | WebHjerte",
    description:
      "Få en professionel hjemmeside til din virksomhed: struktur, indhold, SEO og kontaktveje, der skaber henvendelser. Fra 2.500 kr og klar på 2–10 dage.",
    keywords: ["hjemmeside til virksomhed", "professionel hjemmeside", "erhvervshjemmesider", "hjemmesider til virksomheder", "ny hjemmeside til virksomhed", "professionelle hjemmesider", "professionel hjemmeside til små virksomheder", "lav en professionel hjemmeside"],
    name: "Hjemmeside til virksomhed",
    serviceType: "Erhvervshjemmeside",
    eyebrow: "Erhvervshjemmeside",
    h1: "Professionel hjemmeside til din virksomhed",
    intro:
      "Din hjemmeside er din vigtigste sælger – den arbejder døgnet rundt. Jeg bygger erhvervshjemmesider, der skaber tillid, rangerer på Google og gør det nemt for kunder at kontakte dig.",
    summary:
      "En god virksomhedshjemmeside forklarer hurtigt, hvad du tilbyder, hvem du hjælper og hvordan kunder kontakter dig. Den indlæses hurtigt på mobil, er søgemaskineoptimeret og viser tillidssignaler som anmeldelser og CVR. Hos WebHjerte koster en professionel hjemmeside fra 2.500 kr, og den kan være klar på 2–10 dage.",
    sections: [
      {
        h2: "Hvad skal en virksomhedshjemmeside kunne?",
        paragraphs: [
          "De fleste besøgende bestemmer sig inden for få sekunder, om de bliver på siden. En virksomhedshjemmeside skal derfor svare på tre spørgsmål hurtigt: Hvad tilbyder I? Er I troværdige? Hvordan kommer jeg i gang? Alt andet er sekundært.",
        ],
        bullets: [
          "Et tydeligt budskab øverst på forsiden: hvem hjælper du, og med hvad?",
          "Synlige kontaktveje: telefon, e-mail og formular på alle sider.",
          "Beviser: anmeldelser, referencer, cases, certificeringer og CVR.",
          "Priser eller prisintervaller, hvis det er muligt – det øger tilliden.",
          "Hurtig indlæsning og perfekt visning på mobil.",
          "Lokale oplysninger, så Google forstår, hvor du arbejder.",
        ],
      },
      {
        h2: "Hvilke sider skal I have?",
        table: {
          head: ["Side", "Formål"],
          rows: [
            ["Forside", "Forklar tilbuddet og led besøgende videre"],
            ["Ydelser (én side pr. hovedydelse)", "Rangér på søgninger og forklar detaljer"],
            ["Om os / om mig", "Skab tillid ved at vise, hvem der står bag"],
            ["Cases eller referencer", "Dokumentér resultater"],
            ["Kontakt", "Gør det nemt at tage fat i jer"],
            ["Blog / guides", "Besvar kundernes spørgsmål og rangér bredere"],
            ["Privatliv og vilkår", "Lovkrav og tryghed"],
          ],
        },
        paragraphs: ["Små virksomheder kommer langt med 3–8 sider. Det er bedre at have få gode sider end mange tynde."],
      },
      {
        h2: "SEO og synlighed fra første dag",
        paragraphs: [
          "Jeg bygger SEO ind i fundamentet: logisk overskriftsstruktur, hurtige billeder, titler og beskrivelser, intern linking, sitemap og struktureret data. Siden er desuden skrevet, så den kan forstås af AI-søgning som ChatGPT og Google AI.",
        ],
        cta: { href: "/geo-ai-synlighed", label: "Læs om AI-synlighed" },
      },
      {
        h2: "Faste priser",
        bullets: [
          "Landingside: fra 2.500 kr (1 side).",
          "Basis: fra 4.500 kr (3–5 sider).",
          "Standard: fra 7.500 kr (op til 8 sider, SEO og analytics, booking).",
          "Skræddersyet: fra 14.000 kr (webshop, kundeportal m.m.).",
        ],
        paragraphs: ["Alle priser inkl. moms. Efter lancering får du 30 dages support."],
      },
      {
        h2: "Typiske fejl på virksomhedshjemmesider",
        bullets: [
          "For meget tekst om “os” og for lidt om kundens problem.",
          "Skjulte kontaktoplysninger eller en formular med for mange felter.",
          "Store, uoptimerede billeder, der gør siden langsom.",
          "Ingen tydelig opfordring til handling.",
          "Forældede priser, åbningstider eller billeder.",
          "Manglende tilpasning til mobil.",
        ],
      },
    ],
    faqs: [
      { q: "Hvor mange sider skal en virksomhedshjemmeside have?", a: "For de fleste små virksomheder er 3–8 sider nok: forside, ydelser, om os, kontakt og evt. cases og blog." },
      { q: "Hvad skal jeg levere af indhold?", a: "Du leverer logo, billeder og gerne en kort beskrivelse. Jeg kan hjælpe med at strukturere og formulere teksterne." },
      { q: "Hvor lang tid tager det?", a: "Typisk 2–10 dage afhængigt af pakke og hvor hurtigt indhold er klart." },
    ],
    related: [
      { href: "/skraeddersyede-hjemmesider", title: "Skræddersyede hjemmesider", desc: "Unikt design, hurtig kode." },
      { href: "/blog/hvor-lang-tid-tager-det-at-lave-en-hjemmeside", title: "Hvor lang tid tager det?", desc: "Realistisk tidsplan." },
      { href: "/hjemmeside-pris", title: "Hjemmeside pris", desc: "Fast pris fra 2.500 kr." },
    ],
  },
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
      "En webshop er en hjemmeside med produkter, kurv og betaling. Hos WebHjerte bygges webshops som skræddersyede løsninger fra 14.000 kr (inkl. moms), typisk i WooCommerce eller som skræddersyet kode. Prisen afhænger af antal produkter, betalingsløsninger, integrationer og fragt.",
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
          "SEO for produkter og kategorier med struktureret data (Product og Offer).",
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
          "En enkel webshop starter fra 14.000 kr inkl. moms og tager typisk 2–4 uger afhængigt af antallet af produkter og integrationer. Transaktionsgebyrer til betalingsudbydere og eventuelle abonnementer betaler du direkte til dem.",
        ],
        cta: { href: "/kontakt", label: "Få et tilbud på din webshop" },
      },
    ],
    faqs: [
      { q: "Hvad koster en webshop?", a: "Hos WebHjerte fra 14.000 kr inkl. moms. Prisen afhænger af antal produkter, betalingsløsninger og integrationer." },
      { q: "Hvilken platform er bedst?", a: "Det afhænger af dit behov. WooCommerce er fleksibelt og uden platformsafgifter, Shopify er hurtigt at komme i gang med, og skræddersyet kode giver størst frihed." },
      { q: "Kan jeg selv tilføje produkter?", a: "Ja. Jeg viser dig, hvordan du opretter og redigerer produkter, priser og lager." },
    ],
    related: [
      { href: "/services", title: "Services", desc: "Alle pakker og ydelser." },
      { href: "/wordpress-horsens", title: "WordPress", desc: "Hjemmeside, du selv kan redigere." },
      { href: "/hjemmeside-pris", title: "Hjemmeside pris", desc: "Pakker og priser." },
    ],
  },
  {
    slug: "baeredygtigt-webdesign",
    type: "service",
    title: "Bæredygtigt webdesign – lette, hurtige hjemmesider | WebHjerte",
    description:
      "Bæredygtigt webdesign: lette sider, optimerede billeder, grønnere hosting og mindre dataforbrug – hurtigere for brugerne, bedre for miljøet.",
    keywords: ["bæredygtigt webbureau", "bæredygtigt webdesign", "grøn hjemmeside", "grøn hosting", "miljøvenlig hjemmeside"],
    name: "Bæredygtigt webdesign",
    serviceType: "Bæredygtigt webdesign",
    eyebrow: "Bæredygtigt webdesign",
    h1: "Bæredygtigt webdesign: lette sider, der belaster mindre",
    intro:
      "Hver gang en side indlæses, bruges der strøm – hos serveren, i netværket og på besøgendes enhed. Jeg bygger lette, hurtige hjemmesider, så dataforbrug og energiforbrug holdes nede uden at gå på kompromis med designet.",
    summary:
      "Bæredygtigt webdesign handler om at bygge hjemmesider, der overfører mindre data, bruger mindre kode og kører på effektiv (gerne grøn) hosting. Det giver samtidig hurtigere indlæsning, bedre brugeroplevelse og bedre SEO. WebHjerte bygger efter disse principper i alle projekter, men er ikke certificeret som miljøvirksomhed.",
    sections: [
      {
        h2: "Hvorfor har websider en miljøpåvirkning?",
        paragraphs: [
          "Internettet kører på datacentre, kabler og enheder, som alle bruger energi. En tung hjemmeside med store billeder, unødvendige scripts og mange eksterne tjenester kræver mere dataoverførsel og mere processorarbejde end en let side. Hver enkelt side betyder lidt – men over tusindvis af besøg bliver det til noget.",
          "Det er svært at give et præcist tal for én hjemmesides CO₂-aftryk, fordi det afhænger af energimix, enheder og forbindelse. Retningen er til gengæld klar: Mindre data og mindre kode giver lavere forbrug.",
        ],
      },
      {
        h2: "Mine principper for lette hjemmesider",
        bullets: [
          "Billeder i moderne formater (AVIF og WebP) i den rigtige størrelse og med lazy loading.",
          "Minimal JavaScript – kun det, der giver værdi for besøgende.",
          "Systemskrifttyper eller få, optimerede webfonts.",
          "Ingen auto-afspillende video og tunge animationer uden grund.",
          "Få eksterne scripts og tredjepartstjenester, og indlæs dem først, når de er nødvendige.",
          "Statisk generering og caching, så siden ikke genopbygges ved hvert besøg.",
          "Enkelt og tydeligt design, der gør det nemt at finde frem og kræver færre sidevisninger.",
        ],
      },
      {
        h2: "Hosting: hvad kan du vælge?",
        paragraphs: [
          "Hosting-udbydere kan have vidt forskellige energiprofiler. Nogle oplyser, at de bruger vedvarende energi eller køber garantier for oprindelse. Jeg anbefaler at vælge udbydere med dokumenteret grøn energi og kort afstand til dine kunder, og jeg hjælper med at vurdere mulighederne. Se mere om drift og hosting på siden om hosting og vedligeholdelse.",
        ],
        cta: { href: "/hosting-og-vedligeholdelse", label: "Hosting og vedligeholdelse" },
      },
      {
        h2: "Bæredygtighed og SEO hænger sammen",
        paragraphs: [
          "Hurtige sider rangerer bedre og konverterer bedre. Derfor er bæredygtigt webdesign sjældent et offer – det er en gevinst på flere fronter: lavere dataforbrug, bedre Core Web Vitals, glade besøgende og bedre synlighed i Google og AI-søgning.",
        ],
      },
      {
        h2: "Ærlighed om grønne claims",
        paragraphs: [
          "Jeg lover ikke, at din hjemmeside er “klimaneutral”. Det er en påstand, der er svær at dokumentere. Jeg lover til gengæld at bygge så let og effektivt som muligt, være transparent om valg af hosting og værktøjer og måle sidens vægt og hastighed, så du kan se forskellen.",
        ],
      },
    ],
    faqs: [
      { q: "Hvad er bæredygtigt webdesign?", a: "Webdesign, der minimerer dataforbrug, kode og energiforbrug – ofte ved lette sider, optimerede billeder og effektiv hosting." },
      { q: "Er jeres hjemmesider klimaneutrale?", a: "Nej, og det påstår jeg ikke. Jeg bygger lette og hurtige sider, men en komplet klimaneutralitet er svær at dokumentere." },
      { q: "Koster det mere?", a: "Nej. Lette sider er ofte billigere at drifte og hurtigere at bygge, fordi jeg undgår unødvendige funktioner." },
    ],
    related: [
      { href: "/hosting-og-vedligeholdelse", title: "Hosting og vedligeholdelse", desc: "Drift fra 195 kr/md." },
      { href: "/skraeddersyede-hjemmesider", title: "Skræddersyede hjemmesider", desc: "Hurtig kode uden overflødige funktioner." },
      { href: "/seo-horsens", title: "SEO Horsens", desc: "Hurtige sider rangerer bedre." },
    ],
  },
  {
    slug: "webstrategi",
    type: "service",
    title: "Webstrategi for små virksomheder | WebHjerte",
    description:
      "Webstrategi for små virksomheder: mål, målgruppe, indhold, SEO og AI-synlighed samlet i en klar plan, du kan handle på. Start med en gratis samtale.",
    keywords: ["webstrategi", "digital strategi", "hjemmeside strategi", "online strategi", "webtjek"],
    name: "Webstrategi",
    serviceType: "Webstrategi",
    eyebrow: "Webstrategi",
    h1: "Webstrategi: en klar plan, før du bygger eller betaler for mere trafik",
    intro:
      "En hjemmeside uden strategi er en brochure. Jeg hjælper dig med at afklare mål, målgruppe, budskab og prioriteringer, så hver krone og hver time på nettet bliver brugt, hvor det betyder mest.",
    summary:
      "En webstrategi er en kort, konkret plan for, hvordan din hjemmeside skal skabe resultater: hvem du taler til, hvad du vil have dem til at gøre, hvilket indhold der skal bygges, og hvordan du måler succes. For små virksomheder kan den skrives på få dage og danne grundlag for en ny hjemmeside eller en optimering af den eksisterende.",
    sections: [
      {
        h2: "Hvad er en webstrategi?",
        paragraphs: [
          "En webstrategi besvarer fem spørgsmål: Hvem er dine bedste kunder? Hvad søger de efter? Hvad skal hjemmesiden få dem til at gøre? Hvilket indhold og hvilke sider skal der til? Og hvordan ved du, om det virker?",
          "Den behøver ikke være et tykt dokument. For små og mellemstore virksomheder er en klar plan på nogle få sider ofte mere værdifuld – fordi den bliver brugt.",
        ],
      },
      {
        h2: "Sådan arbejder jeg med strategien",
        steps: [
          { title: "Status", text: "Jeg gennemgår din nuværende hjemmeside, Search Console og analytics, hvis du har det. Er siden ny, starter vi med dine mål." },
          { title: "Målgruppe og søgemønstre", text: "Hvem er kunderne, og hvilke spørgsmål og søgninger bruger de i Google og AI-assistenter?" },
          { title: "Konkurrenter", text: "Hvem dukker op, når dine kunder søger, og hvad gør de godt – og dårligt?" },
          { title: "Struktur og indhold", text: "Hvilke sider skal der til, og hvad skal hver side besvare? Hvor kan du slå konkurrenterne?" },
          { title: "Prioritering", text: "En køreplan i rækkefølge efter effekt og indsats, med forslag til måling." },
        ],
      },
      {
        h2: "Hvad får du ud af det?",
        bullets: [
          "Et klart overblik over, hvad din hjemmeside skal opnå.",
          "En prioriteret liste over sider, tekster og tekniske forbedringer.",
          "Forslag til søgeord og spørgsmål, der passer til din branche og dit område.",
          "Bedre grundlag for at vælge pakke og budget.",
          "En plan for synlighed i både Google og AI-svar.",
        ],
      },
      {
        h2: "Webtjek: første skridt",
        paragraphs: [
          "Hvis du allerede har en hjemmeside, er det mest effektive første skridt et webtjek. Det er en gratis gennemgang af hastighed, mobilvisning, SEO-grundlag og indhold, som peger på de vigtigste forbedringer. Mange virksomheder opdager her, at en række små rettelser giver mere end en helt ny side.",
        ],
        cta: { href: "/gratis-seo-tjek-horsens", label: "Bestil et gratis webtjek" },
      },
    ],
    faqs: [
      { q: "Hvad koster en webstrategi?", a: "Den indgår i en samtale og et tilbud, når jeg bygger din hjemmeside. Vil du have strategien alene, aftaler vi en fast pris efter en kort samtale." },
      { q: "Er en webstrategi nødvendig for en lille virksomhed?", a: "Du behøver ikke et stort dokument, men en klar plan for mål, målgruppe og indhold sparer tid og penge." },
      { q: "Hvad er forskellen på webstrategi og SEO?", a: "Strategien afklarer mål og prioriteringer. SEO er en del af udførelsen, som får siden til at rangere." },
    ],
    related: [
      { href: "/gratis-seo-tjek-horsens", title: "Gratis SEO-tjek", desc: "Gennemgang af din nuværende side." },
      { href: "/seo-horsens", title: "SEO Horsens", desc: "Lokal SEO." },
      { href: "/geo-ai-synlighed", title: "AI-synlighed", desc: "Blive nævnt i AI-svar." },
    ],
  },
  {
    slug: "hosting-og-vedligeholdelse",
    type: "service",
    title: "Hosting og vedligeholdelse – pris og drift | WebHjerte",
    description:
      "Hvad koster hosting og vedligeholdelse? Se, hvad der er inkluderet i abonnementet fra 195 kr/md, og hvad domæne og hosting koster.",
    keywords: ["hosting pris", "hosting af hjemmeside pris", "webhosting priser", "vedligeholdelse hjemmeside", "hjemmeside abonnement", "hvad koster en hjemmeside om året"],
    name: "Hosting og vedligeholdelse",
    serviceType: "Hosting og webvedligeholdelse",
    eyebrow: "Drift og support",
    h1: "Hosting og vedligeholdelse: hvad koster det at holde en hjemmeside kørende?",
    intro:
      "En hjemmeside er ikke et engangskøb. Domæne, hosting, sikkerhed og små rettelser skal løbende dækkes. Her er et ærligt overblik, og hvad jeg tilbyder fra 195 kr/md.",
    summary:
      "Løbende udgifter til en hjemmeside består af domæne (ca. 100–200 kr/år), hosting (typisk 0–500 kr/md afhængigt af løsning) og eventuelt vedligeholdelse. Hos WebHjerte får du 30 dages gratis support efter lancering og kan derefter vælge et vedligeholdelsesabonnement fra 195 til 395 kr/md (inkl. moms).",
    sections: [
      {
        h2: "De løbende omkostninger ved en hjemmeside",
        table: {
          head: ["Post", "Typisk niveau", "Hvad dækker det?"],
          rows: [
            ["Domæne (.dk, .com)", "ca. 100–200 kr/år", "Din adresse på nettet"],
            ["Hosting", "Fra gratis til ca. 500 kr/md (afhænger af løsning)", "Serverplads, hastighed og oppetid"],
            ["SSL-certifikat", "Ofte inkluderet", "Krypteret forbindelse (https)"],
            ["Vedligeholdelse hos WebHjerte", "195–395 kr/md", "Opdateringer, sikkerhed, rettelser og support"],
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
          "Opsætning af hosting og SSL ved lancering (udbyder og abonnement betales direkte af dig, hvis intet andet er aftalt).",
          "Domæne og kode tilhører dig – du er ikke låst til mig.",
          "Gennemgang af, hvordan siden redigeres og vedligeholdes.",
        ],
      },
      {
        h2: "Vedligeholdelsesabonnement fra 195 kr/md",
        paragraphs: [
          "Vil du ikke selv holde styr på opdateringer og små rettelser, kan jeg gøre det for dig. Abonnementet kan omfatte:",
        ],
        bullets: [
          "Opdatering af system og plugins (WordPress) eller afhængigheder (skræddersyet kode).",
          "Sikkerhedsovervågning og backup.",
          "Små rettelser af tekst, billeder og priser.",
          "Overvågning af oppetid og hastighed.",
          "Hurtig support ved fejl.",
        ],
        cta: { href: "/kontakt", label: "Spørg til vedligeholdelse" },
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
      { q: "Hvad koster en hjemmeside om året?", a: "Udover selve udviklingen skal du regne med domæne (ca. 100–200 kr/år), hosting og evt. vedligeholdelse. Hos WebHjerte fra 195 kr/md for vedligeholdelse." },
      { q: "Er support inkluderet?", a: "Ja. Du får 30 dages gratis support efter lancering." },
      { q: "Er jeg bundet til jer?", a: "Nej. Domæne og kode tilhører dig, og du kan til enhver tid flytte siden eller vælge en anden leverandør." },
      { q: "Kan I flytte min eksisterende hjemmeside?", a: "Ja, i mange tilfælde. Kontakt mig, så vurderer jeg opgaven." },
    ],
    related: [
      { href: "/blog/hvad-koster-en-hjemmeside-om-aaret", title: "Hvad koster en hjemmeside om året?", desc: "Guide til de løbende udgifter." },
      { href: "/hjemmeside-pris", title: "Hjemmeside pris", desc: "Pakker og priser." },
      { href: "/baeredygtigt-webdesign", title: "Bæredygtigt webdesign", desc: "Lette sider og grønnere hosting." },
    ],
  },
];
