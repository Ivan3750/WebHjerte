// Brancheside: hjemmesider til håndværkere og andre lokale servicevirksomheder.
// Skrevet som praktisk viden – hvad kunderne leder efter, hvad siden skal indeholde, og hvilke fejl man skal undgå.
// Priser nævnes kun kort og peger videre til prisguiden, så siderne ikke gentager de samme tal.

const rel = {
  haandvaerkere: {
    href: "/hjemmeside-til-haandvaerkere",
    title: "Hjemmeside til håndværkere",
    desc: "Overblikket: hvad alle håndværkere bør have på deres side.",
  },
  vvs: { href: "/hjemmeside-til-vvs", title: "Hjemmeside til VVS", desc: "Akutte opkald, serviceaftaler og lokale søgninger." },
  el: { href: "/hjemmeside-til-elektriker", title: "Hjemmeside til elektriker", desc: "Tillid, autorisation og elbil-ladere." },
  tomrer: { href: "/hjemmeside-til-tomrer", title: "Hjemmeside til tømrer", desc: "Vis projekterne, så kunden kan se kvaliteten." },
  saloner: { href: "/hjemmeside-til-saloner", title: "Hjemmeside til saloner", desc: "Booking, prisliste og billeder, der sælger tider." },
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
      "Hjemmeside til håndværkere: sådan får du flere opkald fra lokale kunder. Hvad kunderne leder efter, hvad siden skal indeholde, og de fejl, der koster dig henvendelser.",
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
          "Håndværkerfirmaer har forskellige kunder og forskellige søgninger. Her er de brancher, jeg har skrevet særskilt om – med konkrete råd til netop dem.",
        ],
        cards: [
          { title: "VVS", tag: "Branche", text: "Akutte opkald, serviceaftaler og de søgninger, der kommer, når der er vand i kælderen.", href: "/hjemmeside-til-vvs", cta: "Se VVS-siden" },
          { title: "Elektriker", tag: "Branche", text: "Autorisation, tavler, fejlfinding og den hastigt voksende efterspørgsel på elbil-ladere.", href: "/hjemmeside-til-elektriker", cta: "Se elektrikerens side" },
          { title: "Tømrer", tag: "Branche", text: "Store projekter, hvor kunden vil se kvaliteten, før de ringer: terrasser, tilbygninger og køkkener.", href: "/hjemmeside-til-tomrer", cta: "Se tømrerens side" },
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
    related: [rel.vvs, rel.el, rel.tomrer],
  },

  /* ─────────────────────────── VVS ─────────────────────────── */
  {
    slug: "hjemmeside-til-vvs",
    type: "service",
    title: "Hjemmeside til VVS-firma i Horsens | WebHjerte",
    description:
      "Hjemmeside til VVS-firmaer: sådan får du akutte opkald og tilbudskunder fra lokale søgninger. Opbygning, tekster og de fejl, der koster VVS-firmaer henvendelser.",
    keywords: ["hjemmeside VVS", "VVS hjemmeside Horsens", "VVS-firma hjemmeside", "webdesign VVS", "VVS installatør hjemmeside"],
    name: "Hjemmeside til VVS-firma",
    serviceType: "Webdesign",
    eyebrow: "Til VVS-firmaer",
    h1: "Hjemmeside til VVS-firma i Horsens – akutte opkald og gode projekter",
    intro:
      "Et VVS-firma har to meget forskellige kunder: den, der har vand på gulvet lige nu, og den, der planlægger et nyt badeværelse om tre måneder. Din hjemmeside skal tale til begge – og gøre det klart, hvilken vej hver af dem skal gå.",
    summary:
      "VVS-kunder søger ofte under pres. Siden skal derfor have et synligt akut-nummer øverst, en rolig tilbudsvej til de planlagte projekter og tydelige bevis for, at du er autoriseret og arbejder i kundens område. Resten er detaljer, der gør forskellen mellem et opkald og et tilbagetryk.",
    facts: [
      { num: "2 kunde-typer", label: "Akut og planlagt – på samme side" },
      { num: "Under 3 sek.", label: "Hvor længe siden må være om at åbne" },
      { num: "48 timer", label: "Til første designudkast" },
    ],
    sections: [
      {
        h2: "To kunder – to veje igennem siden",
        paragraphs: [
          "Den akutte kunde har hast, er ofte stresset og kigger på mobilen. De leder efter ét sted: et telefonnummer og en bekræftelse på, at du kommer ud i deres område. Hver ekstra sætning eller menu er en grund til at trykke tilbage og prøve det næste firma.",
          "Den planlagte kunde har tid og vil sammenligne. De læser om dine ydelser, kigger på billeder af tidligere badeværelser og varmepumper og skriver, når de føler sig trygge. Her vinder du på detaljer, tillid og et let tilbudsflow.",
        ],
        callout: {
          tone: "tip",
          title: "Sådan løses det på siden",
          text: "Øverst: et tydeligt valg mellem 'Akut hjælp' og 'Få et tilbud'. Den første ringer, den anden åbner en kort formular. Så får begge kunder præcis det, de kom efter.",
        },
      },
      {
        h2: "De ydelser, kunderne søger på",
        paragraphs: [
          "VVS dækker mange ting, men kunderne søger på meget konkrete problemer. Hver ydelse, du tilbyder, bør have sin egen overskrift – og helst sin egen side, hvis du vil findes på specifikke søgninger.",
        ],
        cards: [
          { title: "Akut og service", tag: "Hurtig kontakt", text: "Vandskade, brudt rør, stoppede afløb, manglende varme. Her tæller svartid og tydeligt nummer mere end lange tekster." },
          { title: "Badeværelser", tag: "Større projekt", text: "Kunden vil se projekter. Vis før/efter, materialer og hvad opgaven omfattede – gerne med ca. tidsforbrug." },
          { title: "Varmepumper og varme", tag: "Større projekt", text: "Mange kunder undersøger i flere måneder. Forklar, hvad installationen indebærer, og hvad kunden skal forberede." },
          { title: "Vandinstallationer og renovering", tag: "Planlagt", text: "Nye installationer, udskiftning af rør, køkkener og tilslutninger. Her handler det om tryghed og tydelige trin." },
          { title: "Serviceaftaler", tag: "Tilbagevendende", text: "Fyr, varmepumpe og vandvarmer, der tjekkes hvert år. En god side for serviceaftaler giver dig stabil omsætning." },
        ],
      },
      {
        h2: "Siden bygget som en vej til opkaldet",
        steps: [
          { title: "Øverst: akut-knap og tilbudsknap", text: "Telefonnummeret er til at trykke på, og der står, hvilke områder og tider du dækker. Formularen er kort: navn, telefon, hvad det drejer sig om." },
          { title: "Dine ydelser med egne overskrifter", text: "Brug kundens ord: 'stoppet afløb', 'ny varmepumpe', 'nyt badeværelse'. Hver får et kort afsnit og en handling." },
          { title: "Bevis: autorisation, forsikring og anmeldelser", text: "Skriv, at du er autoriseret VVS-installatør, hvis du er det, og vis rigtige anmeldelser fra kunder i området." },
          { title: "Projekter og billeder", text: "Tre til seks gennemarbejdede cases med før/efter, hvad der blev lavet, og hvor lang tid det tog." },
          { title: "Område og åbningstid", text: "Nævn byerne med navn og skriv, hvornår man kan få fat i dig, og hvad der gælder for akutte henvendelser uden for normal tid." },
          { title: "Spørgsmål og svar", text: "Hvad koster et opkald? Hvor hurtigt kan I komme? Svar åbent på det, kunderne alligevel spørger om i telefonen." },
        ],
      },
      {
        h2: "Det, der får VVS-sider til at give opkald",
        bullets: [
          "Telefonnummer og tilbudsknap synlige uden at scrolle, især på mobil",
          "Ydelser beskrevet som kunden ville søge dem – ikke som branchens fagsprog",
          "Områder og byer skrevet ud, så kunden ved, at du kommer til dem",
          "Autorisation, forsikring og garanti nævnt tydeligt og tidligt",
          "Billeder fra rigtige opgaver – gerne fra køkken, badeværelse og teknikrum",
          "Et svar på 'hvad koster det cirka?' – også hvis det kun er en ramme",
          "En formular, hvor man kan vedhæfte et billede af problemet",
        ],
        callout: {
          tone: "warning",
          title: "Pas på",
          text: "Skriv ikke 'døgnvagt' eller 'ude på 30 minutter', hvis du ikke kan holde det. Kunder sammenligner løftet med virkeligheden – og anmeldelserne viser forskellen.",
        },
      },
      {
        h2: "Lokal SEO: bliv fundet, når det brænder på",
        paragraphs: [
          "VVS er en af de brancher, hvor lokale søgninger afgør meget. Folk skriver 'VVS Horsens', 'vvs akut' eller 'stoppet afløb Horsens' – og vælger et af de første resultater, ofte i Googles kortvisning.",
        ],
        cards: [
          { title: "Søgeord, der skal dækkes", text: "VVS + by, akut VVS, stoppet afløb, badeværelse og varmepumpe – hver med egen side eller eget afsnit." },
          { title: "Google Virksomhedsprofil", text: "Rigtig kategori, ydelser, område, åbningstider og billeder. Svar på alle anmeldelser, også de kritiske." },
          { title: "Strukturerede data", text: "Jeg tilføjer det, Google og AI-søgning bruger til at forstå, hvem du er, og hvor du arbejder." },
          { title: "Anmeldelser som fast rutine", text: "Bed om en anmeldelse, når en opgave er færdig – ikke måneder senere. Det er den billigste måde at klatre i kortresultaterne." },
        ],
        cta: { href: "/seo-horsens", label: "Læs om lokal SEO i Horsens" },
      },
      {
        h2: "Hvilken løsning passer til et VVS-firma?",
        table: {
          head: ["Situation", "Typisk løsning", "Hvorfor"],
          rows: [
            ["Mest akut og service, få ydelser", "Landingside eller Basis", "Hurtig side med nummer, ydelser og område – klar på få dage."],
            ["Både service og større projekter", "Basis eller Standard", "Egne sider til badeværelser og varmepumper med billeder og tilbudsformular."],
            ["Flere byer og mange ydelser", "Standard", "Plads til lokale sider, galleri og måling af, hvilke sider der giver opkald."],
          ],
        },
        after: ["Alle priser og hvad der er med står i prisguiden. Du får et fast tilbud inden for 24 timer."],
        cta: { href: "/hjemmeside-pris", label: "Se prisguiden" },
      },
    ],
    faqs: [
      {
        q: "Hvad skal et VVS-firma have på sin hjemmeside?",
        a: "Et tydeligt telefonnummer til akutte opkald, dine ydelser, dit område, autorisation og forsikring, billeder af udført arbejde, anmeldelser og en kort formular til tilbud.",
      },
      {
        q: "Hvordan får et VVS-firma flere akutte opkald fra Google?",
        a: "Ved at have en hurtig side med et synligt telefonnummer, en optimeret Google Virksomhedsprofil med korrekte oplysninger og mange nylige anmeldelser, samt tekster, der nævner de byer, du dækker.",
      },
      {
        q: "Bør akutte opkald og tilbud have hver sin vej på siden?",
        a: "Ja. Den akutte kunde vil ringe nu, den planlagte kunde vil læse og skrive. To tydelige knapper øverst gør, at begge får, hvad de leder efter, uden at lede.",
      },
      {
        q: "Kan siden vise et galleri af badeværelser og varmepumper?",
        a: "Ja. Billeder fra rigtige opgaver er det stærkeste bevis på kvalitet. Jeg sætter galleriet op, så du nemt kan tilføje nye projekter bagefter.",
      },
      {
        q: "Hvad hvis jeg også arbejder uden for Horsens?",
        a: "Så får hvert område sin egen lokale side eller sektion, så du kan blive fundet i flere byer uden at kopiere tekster.",
      },
    ],
    related: [rel.haandvaerkere, rel.el, rel.seo],
  },

  /* ─────────────────────────── Elektriker ─────────────────────────── */
  {
    slug: "hjemmeside-til-elektriker",
    type: "service",
    title: "Hjemmeside til elektriker i Horsens | WebHjerte",
    description:
      "Hjemmeside til elektrikere: byg tillid med autorisation, vis opgaver og få henvendelser på elbil-ladere, tavler og fejlfinding. Praktiske råd og lokal SEO.",
    keywords: ["hjemmeside elektriker", "elektriker hjemmeside Horsens", "webdesign elektriker", "elinstallatør hjemmeside", "elbil lader elektriker"],
    name: "Hjemmeside til elektriker",
    serviceType: "Webdesign",
    eyebrow: "Til elektrikere",
    h1: "Hjemmeside til elektriker i Horsens – tillid først, så opkaldet",
    intro:
      "Kunder lader en elektriker gå ind i deres hjem og røre ved noget, der kan være farligt. Derfor handler en elektrikersides vigtigste opgave om tillid: at vise, at du er autoriseret, hvad du laver, og at der er et rigtigt menneske bag.",
    summary:
      "En elektrikers hjemmeside vinder på tillid og tydelighed. Skriv, hvad du er autoriseret til, vis rigtige opgaver, forklar forløbet fra henvendelse til færdigt arbejde, og gør det nemt at beskrive opgaven med et billede. Elbil-ladere, tavler og fejlfinding er de emner, flest kunder leder efter.",
    facts: [
      { num: "Tillid", label: "Autorisation og forsikring synligt øverst" },
      { num: "Elbil-lader", label: "Et af de mest søgte emner lige nu" },
      { num: "48 timer", label: "Til første designudkast" },
    ],
    sections: [
      {
        h2: "Hvorfor tillid er alt for en elektriker",
        paragraphs: [
          "Elarbejde handler om sikkerhed. Kunden ved, at fejl kan give brand eller stød, og vil derfor ikke bare have den billigste – men en, de kan stole på. Det gør hjemmesiden til en tillidsmaskine: den skal vise, at du er professionel, autoriseret og til at få fat i.",
          "Det er også derfor, de bedste elektrikersider ikke er de mest flotte, men de mest tydelige: de siger direkte, hvad de laver, hvor, og hvad kunden kan forvente.",
        ],
        callout: {
          tone: "fact",
          title: "Godt at vide",
          text: "Skriv præcist, hvad din autorisation dækker, og vis eventuelle brancheforeninger og forsikringer. Kunder verificerer ofte – og værdsætter, at du har gjort det nemt.",
        },
      },
      {
        h2: "Det søger kunderne efter",
        cards: [
          { title: "Elbil-lader", tag: "Voksende efterspørgsel", text: "Mange spørger om pris, tidsforbrug, kompatibilitet og tilskud. En side, der forklarer forløbet, får de seriøse henvendelser." },
          { title: "Fejlfinding og service", tag: "Hurtig kontakt", text: "Udfaldne sikringer, defekte stikkontakter, lysproblemer. Her skal nummeret være lige ved hånden." },
          { title: "Tavle og opgradering", tag: "Større projekt", text: "Udskiftning af tavle og HPFI/HFI-afbryder. Kunden vil forstå, hvorfor, og hvad der sker – gerne med et eksempel." },
          { title: "Belysning og installationer", tag: "Planlagt", text: "Spots, udendørs lys, smart home og renovering. Visuelle eksempler og tydelige trin gør forskellen." },
          { title: "Solceller og varmepumper (el-del)", tag: "Planlagt", text: "Hvis du laver de tilknyttede elinstallationer, så skriv det – kunderne søger netop på kombinationen." },
        ],
      },
      {
        h2: "Siden bygget til at skabe tillid",
        steps: [
          { title: "Øverst: hvem, hvad og hvor", text: "En klar overskrift, dit område og to knapper: ring eller beskriv opgaven. Autorisation vises som et lille, tydeligt mærke." },
          { title: "Ydelser med forklaring", text: "Hver ydelse får et afsnit, der forklarer, hvad den indebærer, og hvornår kunden skal ringe i stedet for at vente." },
          { title: "Rigtige opgaver", text: "Fotos af færdige installationer, tavler og ladere, med kort tekst om opgaven. Det viser dit håndværk og din ryddelighed." },
          { title: "Anmeldelser og referencer", text: "Citater med fornavn og by, links til Google-anmeldelser og eventuelle erhvervskunder, du må nævne." },
          { title: "Sådan foregår et forløb", text: "Henvendelse → besigtigelse → tilbud → udførelse → dokumentation. Kunder bliver trygge, når de kan se forløbet." },
          { title: "Nem kontakt med billede", text: "Formularen lader kunden beskrive opgaven og vedhæfte et billede af tavlen eller stedet – så du kan give et mere præcist svar." },
        ],
      },
      {
        h2: "Gør – og undgå",
        compare: {
          good: {
            title: "Det virker",
            items: [
              "Autorisation, forsikring og eventuelle certificeringer nævnt tidligt og tydeligt",
              "Billeder af ryddelige, færdige installationer",
              "Forklaring af forløbet og dokumentationen, kunden får bagefter",
              "En formular, hvor kunden kan vedhæfte et billede",
              "Konkrete tekster om elbil-ladere, tavler og fejlfinding",
            ],
          },
          bad: {
            title: "Det skader tilliden",
            items: [
              "Vage løfter som 'professionelt og pålideligt' uden bevis",
              "Skjult eller manglende autorisation",
              "Billeder, der tydeligt er stockfotos",
              "Lange fagtekster, som kunden ikke forstår",
              "En side, der ikke virker på mobilen",
            ],
          },
        },
      },
      {
        h2: "Elbil-lader: den side, der kan give flest projekter",
        paragraphs: [
          "Efterspørgslen på elbil-ladere vokser, og kunderne har mange spørgsmål, før de ringer: hvad koster det, hvor lang tid tager det, passer lederen til min bil, og skal der nyt i tavlen? En side, der besvarer dem ærligt, får henvendelser fra kunder, der allerede er langt i processen.",
        ],
        bullets: [
          "Forklar, hvad en installation typisk indebærer, og hvad kunden selv skal gøre først",
          "Skriv, hvilke ladere og mærker du arbejder med – og hvad der afgør valget",
          "Vis et eksempel på et færdigt projekt med billede",
          "Fortæl, hvad der afgør prisen, så kunden forstår et tilbud",
          "Giv mulighed for at sende et billede af tavlen og placeringen",
        ],
        callout: {
          tone: "tip",
          title: "Tip",
          text: "Lav en selvstændig side til elbil-ladere. Den kan findes på sine egne søgninger og er den nemmeste måde at få nye, kvalificerede kunder.",
        },
      },
      {
        h2: "Lokal synlighed for elektrikere",
        cards: [
          { title: "Søgninger, du skal findes på", text: "Elektriker + by, elbil-lader + by, tavleskift og fejlfinding. Hver med egen tekst, ikke kopieret fra en anden side." },
          { title: "Google Virksomhedsprofil", text: "Vælg de rigtige kategorier og ydelser, og tilføj billeder fra opgaver. Anmeldelser er især vigtige i elektrikerbranchen." },
          { title: "Konsistente oplysninger", text: "Navn, adresse, telefon og autorisation skal passe på tværs af hjemmeside, Google og kataloger." },
          { title: "Strukturerede data", text: "Jeg tilføjer data, så Google og AI-assistenter forstår, hvem du er, og hvad du tilbyder." },
        ],
        cta: { href: "/seo-horsens", label: "Læs om lokal SEO i Horsens" },
      },
      {
        h2: "Hvilken løsning passer?",
        table: {
          head: ["Situation", "Typisk løsning", "Hvorfor"],
          rows: [
            ["Enkeltmand med service og fejlfinding", "Landingside eller Basis", "Tydelig side med ydelser, tillid og kontakt."],
            ["Du vil have projekter som elbil-ladere og tavler", "Basis eller Standard", "Egne sider til de store projekter og galleri."],
            ["Flere medarbejdere og flere områder", "Standard", "Lokale sider, formularer og måling af henvendelser."],
          ],
        },
        after: ["Se prisguiden for faste priser og hvad der er med. Du får et konkret tilbud inden for 24 timer."],
        cta: { href: "/hjemmeside-pris", label: "Se prisguiden" },
      },
    ],
    faqs: [
      {
        q: "Hvad skal en elektrikers hjemmeside indeholde?",
        a: "Dine ydelser, dit område, autorisation og forsikring, billeder af udført arbejde, anmeldelser, forløbet fra henvendelse til færdigt arbejde og en nem måde at kontakte dig på – gerne med mulighed for at vedhæfte billeder.",
      },
      {
        q: "Skal jeg skrive priser på siden?",
        a: "Du behøver ikke lægge dig fast, men en forklaring på, hvad der afgør prisen – eller en vejledende ramme – filtrerer uforpligtende henvendelser fra og skaber tillid.",
      },
      {
        q: "Er en side om elbil-ladere en god idé?",
        a: "Ja, hvis du installerer dem. Kunderne søger konkret på emnet og har mange spørgsmål. En selvstændig side kan fange søgninger, som en generel side ikke dækker.",
      },
      {
        q: "Hvordan viser jeg, at jeg er autoriseret?",
        a: "Skriv tydeligt, hvad din autorisation dækker, og vis den som et synligt mærke øverst og på kontaktsiden. Nævn også brancheforeninger og forsikringer.",
      },
      {
        q: "Hvor hurtigt er siden klar?",
        a: "Efter den første samtale får du et designudkast inden for 48 timer. Når du har godkendt det, er siden typisk live på 2–10 dage, afhængigt af omfang.",
      },
    ],
    related: [rel.haandvaerkere, rel.vvs, rel.seo],
  },

  /* ─────────────────────────── Tømrer ─────────────────────────── */
  {
    slug: "hjemmeside-til-tomrer",
    type: "service",
    title: "Hjemmeside til tømrer i Horsens | WebHjerte",
    description:
      "Hjemmeside til tømrere: vis projekterne, forklar forløbet og få henvendelser på terrasser, tilbygninger og køkkener. Praktiske råd til tømrerfirmaer.",
    keywords: ["hjemmeside tømrer", "tømrer hjemmeside Horsens", "webdesign tømrer", "tømrerfirma hjemmeside", "tømrer og snedker hjemmeside"],
    name: "Hjemmeside til tømrer",
    serviceType: "Webdesign",
    eyebrow: "Til tømrere",
    h1: "Hjemmeside til tømrer i Horsens – vis projekterne, få de gode opgaver",
    intro:
      "Tømrerarbejde er store beslutninger. Kunden vil bygge en terrasse, en tilbygning eller et nyt køkken og vil se, hvad du har bygget, før de ringer. Din hjemmeside er dit portfolio – og din første besigtigelse.",
    summary:
      "En tømrerside vinder på billeder, forløb og tillid. Vis færdige projekter med kort tekst om opgaven, forklar processen fra første samtale til afleveret arbejde, og gør det nemt at beskrive et projekt. Så filtrerer du de uforpligtende fra og får de opgaver, du helst vil have.",
    facts: [
      { num: "Projekter", label: "Dit arbejde er dit stærkeste argument" },
      { num: "Før / efter", label: "Billeder, der overbeviser" },
      { num: "48 timer", label: "Til første designudkast" },
    ],
    sections: [
      {
        h2: "Kunden vil se, før de vælger",
        paragraphs: [
          "Til store opgaver vælger kunden ud fra tillid og kvalitet. De spørger vennerne, søger på Google og kigger billeder. En hjemmeside, der viser dine projekter tydeligt – med de rigtige billeder og kort tekst – flytter dig fra 'et firma blandt mange' til 'den vi har lyst til at ringe til'.",
          "Det betyder også, at tømrersider ikke skal være lange og fyldt med tekst. De skal være visuelle, rolige og fortælle, hvad du bygger, hvordan du arbejder, og hvem man skriver til.",
        ],
        callout: {
          tone: "tip",
          title: "Tommelfingerregel",
          text: "Ti gode billeder fra fem projekter slår tyve billeder fra tilfældige opgaver. Vælg de projekter, der repræsenterer de opgaver, du helst vil have flere af.",
        },
      },
      {
        h2: "De opgaver, kunderne søger på",
        cards: [
          { title: "Terrasser og udendørs", tag: "Sæsonopgave", text: "Mange søger forår og sommer. Vis materialer, løsninger og eksempler, og forklar tidsforbrug og forberedelse." },
          { title: "Tilbygninger og renovering", tag: "Stort projekt", text: "Her tæller tillid mest. Forklar processen: tegning, byggetilladelse, tidsplan, aflevering – og hvem kunden snakker med." },
          { title: "Køkken, gulve og indvendigt", tag: "Planlagt", text: "Billeder af færdige rum og detaljer fortæller om dit håndværk bedre end ord." },
          { title: "Tag, vinduer og facade", tag: "Vedligehold", text: "Kunderne søger konkret. Forklar, hvornår noget skal skiftes, og hvad en løsning typisk indebærer." },
          { title: "Småopgaver og reparationer", tag: "Hurtigt", text: "Hvis du tager dem, så skriv det – de fylder i søgninger og er en nem vej til faste kunder." },
        ],
      },
      {
        h2: "Siden bygget som et portfolio",
        steps: [
          { title: "Øverst: et stærkt billede og en klar linje", text: "Ét godt projektbillede, hvad du laver og hvor, og en tydelig knap til at beskrive opgaven." },
          { title: "Ydelser i få, klare grupper", text: "Terrasser, tilbygninger, køkkener, tag og vinduer. Hver gruppe med et eksempel og et link til flere billeder." },
          { title: "Udvalgte projekter", text: "Tre til seks cases med billeder, kort beskrivelse, materialer og tidsforbrug. Én side pr. projekt, hvis du vil findes på specifikke søgninger." },
          { title: "Sådan arbejder jeg", text: "Fra første samtale over besigtigelse og tilbud til aflevering. Kunden bliver tryg, når de kan se forløbet." },
          { title: "Anmeldelser og tillid", text: "Citater fra kunder, eventuel mesterbrev eller medlemskab, og referencer, du må nævne." },
          { title: "Nem kontakt", text: "En formular, hvor kunden kan beskrive projektet, vedhæfte skitser eller billeder og skrive ønsket tidsramme." },
        ],
      },
      {
        h2: "Gør – og undgå",
        compare: {
          good: {
            title: "Det virker",
            items: [
              "Dine egne billeder af rigtige projekter, helst fra flere vinkler",
              "Kort tekst om opgaven, materialerne og tidsforbruget",
              "Forklaring af forløbet og hvem kunden har kontakt med",
              "En formular til at beskrive projektet med billeder",
              "En side pr. hovedydelse og pr. større projekttype",
            ],
          },
          bad: {
            title: "Det koster opgaver",
            items: [
              "Mørke, uskarpe eller få billeder",
              "Lange fagtekster uden eksempler",
              "Intet svar på, hvad der sker efter henvendelsen",
              "En galleri-side uden forklaring på projekterne",
              "En side, der er langsom, fordi billederne er for store",
            ],
          },
        },
      },
      {
        h2: "Billeder, der sælger – uden at ødelægge hastigheden",
        paragraphs: [
          "Billeder er tømrerens vigtigste redskab, men tunge billeder gør siden langsom. Jeg komprimerer og indlæser dem, så de fylder minimalt, men ser skarpe ud. Siden åbner hurtigt – også på mobilen på byggepladsen.",
          "For at få mest ud af det kan du tage billeder under og efter projektet: før, undervejs, færdigt, og en detalje. Selv telefonbilleder i godt lys duer, så længe de er rene og viser, hvad opgaven gik ud på.",
        ],
        bullets: [
          "Tag billeder i dagslys og med ryddet område",
          "Tag både overblik og detaljer (samlinger, afslutninger)",
          "Skriv kort, hvad opgaven var, og hvad der var særligt",
          "Bed om lov, før du bruger billeder af kundens bolig",
        ],
      },
      {
        h2: "Lokal SEO for tømrere",
        cards: [
          { title: "Konkrete søgninger", text: "Tømrer + by, terrasse + by, tilbygning + by. Hver med egen side og egen tekst." },
          { title: "Google Virksomhedsprofil", text: "Billeder fra projekter, ydelser og område. Anmeldelser er især vigtige til store opgaver." },
          { title: "Projekter som sider", text: "En side pr. større projekt kan findes på sine egne søgninger og viser dit håndværk i detaljer." },
          { title: "Strukturerede data", text: "Jeg tilføjer data, så Google og AI-assistenter forstår, hvem du er, og hvad du bygger." },
        ],
        cta: { href: "/blog/seo-tjekliste-lokale-virksomheder", label: "SEO-tjekliste til lokale virksomheder" },
      },
      {
        h2: "Hvilken løsning passer?",
        table: {
          head: ["Situation", "Typisk løsning", "Hvorfor"],
          rows: [
            ["Få ydelser og begrænset billedmateriale", "Landingside eller Basis", "En samlet side med projekter og kontakt kommer hurtigt i gang."],
            ["Du vil vise mange projekter", "Basis eller Standard", "Galleri og egne projektsider med billeder og tekst."],
            ["Flere medarbejdere og store opgaver", "Standard", "Lokale sider, formularer og måling af, hvilke sider der giver opgaver."],
          ],
        },
        after: ["Se prisguiden for faste priser. Du får et konkret tilbud inden for 24 timer."],
        cta: { href: "/hjemmeside-pris", label: "Se prisguiden" },
      },
    ],
    faqs: [
      {
        q: "Hvad skal en tømrers hjemmeside indeholde?",
        a: "Dine ydelser, udvalgte projekter med billeder og kort tekst, en forklaring på forløbet, anmeldelser, dit område og en nem måde at beskrive et projekt på.",
      },
      {
        q: "Hvor mange billeder har jeg brug for?",
        a: "Start med tre til seks gode projekter, hver med fire-otte billeder. Det er bedre end mange tilfældige billeder. Du kan altid tilføje flere.",
      },
      {
        q: "Kan jeg selv tilføje nye projekter?",
        a: "Ja, hvis siden bygges i WordPress, kan du selv tilføje projekter med billeder og tekst. Ellers kan jeg gøre det for dig via en aftale.",
      },
      {
        q: "Bliver siden langsom af mange billeder?",
        a: "Ikke hvis den er bygget rigtigt. Jeg komprimerer og indlæser billederne, så siden åbner hurtigt, også på mobil.",
      },
      {
        q: "Hvordan får jeg flere store opgaver?",
        a: "Ved at vise de opgaver, du vil have flere af, og ved at gøre det let at beskrive et projekt. Lokale sider og Google-anmeldelser hjælper de rigtige kunder med at finde dig.",
      },
    ],
    related: [rel.haandvaerkere, rel.vvs, rel.portefolje],
  },

  /* ─────────────────────────── Restauranter ─────────────────────────── */
  {
    slug: "hjemmeside-til-restauranter",
    type: "service",
    title: "Hjemmeside til restaurant og café i Horsens | WebHjerte",
    description:
      "Hjemmeside til restauranter og caféer: menu, booking og bestilling, som du selv ejer. Sådan får du flere gæster direkte uden at betale kommission til platforme.",
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
          { title: "Strukturerede data", text: "Jeg tilføjer data om åbningstider, menu og adresse, så Google og AI-assistenter kan svare korrekt om dig." },
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
    related: [rel.saloner, rel.haandvaerkere, rel.seo],
  },

  /* ─────────────────────────── Saloner ─────────────────────────── */
  {
    slug: "hjemmeside-til-saloner",
    type: "service",
    title: "Hjemmeside til salon i Horsens | WebHjerte",
    description:
      "Hjemmeside til frisørsaloner, skønhedssaloner og barbers: online booking, prisliste og billeder, der fylder kalenderen. Praktiske råd til saloner.",
    keywords: ["hjemmeside salon", "frisør hjemmeside Horsens", "salon hjemmeside", "booking frisør hjemmeside", "barber hjemmeside"],
    name: "Hjemmeside til saloner",
    serviceType: "Webdesign",
    eyebrow: "Til saloner",
    h1: "Hjemmeside til salon i Horsens – fyld kalenderen",
    intro:
      "Dine kunder vil se resultaterne, finde en tid og booke uden at ringe. En god salonside gør det på under et minut – og får nye kunder til at vælge dig frem for salonen på den anden side af gaden.",
    summary:
      "En salonside vinder på billeder, tydelige priser og nem booking. Vis dit arbejde, forklar ydelserne og hvad de koster, og lad kunden booke direkte. Så sparer du telefontid, får flere nye kunder og bliver fundet, når folk søger på din type behandling i området.",
    facts: [
      { num: "Booking", label: "Direkte fra Google og forsiden" },
      { num: "Prisliste", label: "Klar og ærlig – færre spørgsmål" },
      { num: "48 timer", label: "Til første designudkast" },
    ],
    sections: [
      {
        h2: "Hvad kunder tjekker, før de booker",
        paragraphs: [
          "Nye kunder vælger salon ud fra billeder, anmeldelser og tillid. De kigger på dit arbejde, tjekker priser, og vil kunne booke med det samme. Hvis de skal ringe eller vente på svar, mister du dem ofte til en salon, hvor det er nemmere.",
        ],
        callout: {
          tone: "tip",
          title: "Tommelfingerregel",
          text: "Hver gang en kunde skal ringe for at få en tid, er der en chance for, at de ikke gør det. Et bookingknap, der altid er synligt, er den billigste måde at fylde kalenderen.",
        },
      },
      {
        h2: "Det skal være på forsiden",
        cards: [
          { title: "Bookingknap", tag: "Øverst", text: "Synlig på forsiden og på mobilen, forbundet til dit bookingsystem eller en enkel formular." },
          { title: "Dit arbejde i billeder", tag: "Resultater", text: "Før/efter, farver, klip og stilarter. Det er det, nye kunder vil se – og det, der får dem til at vælge dig." },
          { title: "Ydelser og priser", tag: "Klarhed", text: "En ærlig prisliste, der forklarer, hvad behandlingen indebærer. Det filtrerer de forkerte henvendelser fra og skaber tillid." },
          { title: "Team og stemning", tag: "Tillid", text: "Hvem er dine stylister? Billeder og en kort præsentation gør kunden tryg ved at komme første gang." },
          { title: "Anmeldelser", tag: "Tillid", text: "Rigtige citater og link til Google. Anmeldelser er salonens vigtigste markedsføring." },
          { title: "Adresse og åbningstider", tag: "Praktisk", text: "Kort, parkering og åbningstider. Gør det nemt at finde dig og planlægge besøget." },
        ],
      },
      {
        h2: "Siden bygget til at fylde kalenderen",
        steps: [
          { title: "Øverst: stemning, booking og ydelser", text: "Et godt billede af salonen eller et resultat, hvad du tilbyder, og en tydelig 'Book tid'-knap." },
          { title: "Ydelser og priser", text: "Gruppér efter behandling og vis varighed og pris. Forklar kort, hvad der er med." },
          { title: "Galleri med resultater", text: "Før/efter og stilarter, gerne opdelt efter behandling. Opdater løbende – det viser, at I er aktive." },
          { title: "Dit team", text: "Billeder og en kort tekst om hver stylist, deres speciale og hvem man booker hos." },
          { title: "Anmeldelser", text: "Rigtige citater med fornavn og link til Google. Placér dem tæt på booking-knappen." },
          { title: "Find os og kontakt", text: "Adresse, parkering, åbningstider og kontaktmuligheder. Hold dem opdaterede." },
        ],
      },
      {
        h2: "Online booking: sådan bruger du det klogt",
        paragraphs: [
          "Online booking sparer telefontid og giver kunden frihed til at vælge tid, når de har lyst – ofte om aftenen. Det kan enten være dit eksisterende bookingsystem, som jeg linker til eller indlejrer på siden, eller en enkel forespørgselsformular, hvor du bekræfter tiden.",
        ],
        bullets: [
          "Gør bookingknappen synlig på alle sider, især på mobilen",
          "Vis behandlingens varighed og pris, før kunden booker",
          "Send en bekræftelse og eventuelt en påmindelse, så færre udebliver",
          "Lad nye kunder booke uden at oprette en konto",
          "Giv mulighed for at skrive en note, fx til farvebehandlinger",
        ],
        callout: {
          tone: "fact",
          title: "Godt at vide",
          text: "Har du allerede et bookingsystem, behøver du ikke skifte. Jeg bygger siden, så den fungerer sammen med det system, du bruger i forvejen.",
        },
      },
      {
        h2: "Gør – og undgå",
        compare: {
          good: {
            title: "Det virker",
            items: [
              "Rigtige billeder af dit arbejde og dit team",
              "Priser og varighed, der er nemme at finde",
              "Booking med ét tryk på mobilen",
              "Anmeldelser tæt på bookingknappen",
              "Opdaterede åbningstider og adresse",
            ],
          },
          bad: {
            title: "Det koster bookinger",
            items: [
              "Stockfotos, der ikke ligner din salon",
              "Skjulte priser eller gamle prislister",
              "Booking, der kun kan ske via telefon",
              "En side, der er langsom eller svær at bruge på mobil",
              "Gamle billeder, der ikke viser dit nuværende arbejde",
            ],
          },
        },
      },
      {
        h2: "Lokal synlighed for saloner",
        cards: [
          { title: "Google Virksomhedsprofil", text: "Det vigtigste for saloner. Billeder, ydelser, åbningstider og booking-link. Svar på alle anmeldelser." },
          { title: "Søgninger, du kan vinde", text: "Frisør + by, farve + by, herreklip, bryllupsfrisure. Egne sider til behandlinger, du vil have flere af." },
          { title: "Billeder med beskrivelse", text: "Giv billeder navne og beskrivelser, så Google forstår, hvad de viser." },
          { title: "Strukturerede data", text: "Jeg tilføjer data om åbningstider, ydelser og adresse, så Google og AI-assistenter kan svare korrekt om dig." },
        ],
        cta: { href: "/blog/seo-tjekliste-lokale-virksomheder", label: "SEO-tjekliste til lokale virksomheder" },
      },
      {
        h2: "Hvilken løsning passer?",
        table: {
          head: ["Situation", "Typisk løsning", "Hvorfor"],
          rows: [
            ["Mindre salon med få behandlinger", "Landingside eller Basis", "Ydelser, priser, billeder og booking på en hurtig side."],
            ["Flere behandlinger og stylister", "Basis eller Standard", "Egne sider til behandlinger og team, galleri og booking."],
            ["Salon med særlige behandlinger og kurser", "Standard", "Booking, formularer og måling af, hvilke sider der giver bookinger."],
          ],
        },
        after: ["Se prisguiden for faste priser. Du får et konkret tilbud inden for 24 timer."],
        cta: { href: "/hjemmeside-pris", label: "Se prisguiden" },
      },
    ],
    faqs: [
      {
        q: "Kan kunder booke tider direkte på hjemmesiden?",
        a: "Ja. Jeg kan bygge en bookingfunktion eller koble siden til dit eksisterende bookingsystem, så kunder kan booke uden at ringe.",
      },
      {
        q: "Skal prislisten stå på siden?",
        a: "Ja, helst. Kunder vil vide, hvad en behandling koster, før de booker. En ærlig prisliste filtrerer de forkerte henvendelser fra og skaber tillid.",
      },
      {
        q: "Kan jeg selv opdatere galleriet?",
        a: "Ja, hvis siden bygges i WordPress, kan du selv tilføje billeder og tekster. Ellers kan jeg opdatere det for dig via en aftale.",
      },
      {
        q: "Kan jeg beholde mit nuværende bookingsystem?",
        a: "Ja. Jeg bygger siden, så den fungerer sammen med det system, du bruger – du behøver ikke skifte.",
      },
      {
        q: "Hvordan får jeg flere nye kunder?",
        a: "Med en opdateret Google Virksomhedsprofil, billeder af dit arbejde, anmeldelser og en side, der er nem at booke fra. Det er de tre ting, der får nye kunder til at vælge dig.",
      },
    ],
    related: [rel.restauranter, rel.haandvaerkere, rel.seo],
  },
];
