// Flere brancher: klinikker, køreskoler, fitness, rengøring, værksteder og rådgivere.
// Samme opbygning som niches.js. Hver side har sin egen hero og interaktive blok (se variants/registry.jsx).
// Priser står kun i prisguiden – siderne her beskriver, hvad branchen har brug for, ikke hvad det koster.

const rel = {
  klinik: { href: "/hjemmeside-til-klinik", title: "Hjemmeside til klinik", desc: "Booking, behandlinger og tryghed før første besøg." },
  koereskole: { href: "/hjemmeside-til-koereskole", title: "Hjemmeside til køreskole", desc: "Hold, priser og tilmelding – uden telefonkø." },
  fitness: { href: "/hjemmeside-til-fitness", title: "Hjemmeside til fitness", desc: "Prøvetime, holdplan og medlemskab online." },
  rengoering: { href: "/hjemmeside-til-rengoering", title: "Hjemmeside til rengøring", desc: "Prisberegner og faste aftaler." },
  vaerksted: { href: "/hjemmeside-til-vaerksted", title: "Hjemmeside til værksted", desc: "Fra symptom til booket tid." },
  raadgivere: { href: "/hjemmeside-til-raadgivere", title: "Hjemmeside til rådgivere", desc: "Tillid, speciale og første samtale." },
  saloner: { href: "/hjemmeside-til-saloner", title: "Hjemmeside til saloner", desc: "Booking, prisliste og billeder, der sælger tider." },
  restauranter: { href: "/hjemmeside-til-restauranter", title: "Hjemmeside til restauranter", desc: "Menu, booking og bestilling uden mellemled." },
  haandvaerkere: { href: "/hjemmeside-til-haandvaerkere", title: "Hjemmeside til håndværkere", desc: "Flere opkald fra lokale kunder." },
  brancher: { href: "/brancher", title: "Alle brancher", desc: "Find den side, der passer til din virksomhed." },
  gratisTjek: { href: "/gratis-seo-tjek-horsens", title: "Gratis SEO-tjek", desc: "Få en gennemgang af din nuværende hjemmeside." },
  blogSeo: { href: "/blog/seo-tjekliste-lokale-virksomheder", title: "SEO-tjekliste til lokale virksomheder", desc: "Det, der betyder mest for lokal synlighed." },
  pris: { href: "/hjemmeside-pris", title: "Hvad koster en hjemmeside?", desc: "Faste priser og hvad der er med." },
};

const pricingTable = (rows) => ({
  head: ["Situation", "Typisk løsning", "Hvorfor"],
  rows,
});

export const nichePagesMore = [
  /* ─────────────────────────── Klinik ─────────────────────────── */
  {
    slug: "hjemmeside-til-klinik",
    nichePackage: "klinikker",
    type: "service",
    title: "Hjemmeside til klinik og behandlere i Horsens | WebHjerte",
    description:
      "Hjemmeside til fysioterapeuter, kiropraktorer, tandlæger og andre behandlere: online booking, tydelige behandlinger og tryghed før første besøg.",
    keywords: ["hjemmeside klinik", "hjemmeside fysioterapeut", "hjemmeside kiropraktor", "hjemmeside tandlæge", "klinik hjemmeside booking", "webdesign klinik Horsens"],
    name: "Hjemmeside til klinik og behandlere",
    serviceType: "Webdesign",
    eyebrow: "Til klinikker og behandlere",
    h1: "Hjemmeside til klinik: Patienten booker, før de ombestemmer sig",
    intro:
      "Den, der søger en behandler, har ofte ondt, er usikker eller har udskudt det længe. Hver ekstra tvivl – koster det noget? skal jeg have henvisning? hvad sker der første gang? – er en grund til at lade være. Din side skal fjerne tvivlen og lade patienten booke.",
    summary:
      "En klinikside skal besvare det, patienten ellers ville ringe og spørge om: behandlinger, pris, henvisning, hvad der sker ved første besøg og hvordan man booker. Når de svar står klart, og booking er ét tryk væk, får du flere nye patienter og færre tidsrøvende telefonopkald.",
    facts: [
      { num: "Online booking", label: "Tider booket uden at ringe" },
      { num: "1. besøg", label: "Forklaret, så tvivlen forsvinder" },
      { num: "DA + EN", label: "Mulighed for to sprog" },
    ],
    sections: [
      {
        h2: "Hvad patienten leder efter, før de booker",
        paragraphs: [
          "Patienter vælger behandler på tillid. De sammenligner et par klinikker og leder efter tegn på, at de bliver taget alvorligt: uddannelse, speciale, en rolig tone og et klart billede af, hvordan forløbet er.",
          "Derfor er de bedste klinikhjemmesider ikke fyldt med fagudtryk. De forklarer på almindeligt dansk, hvad man kan hjælpe med, og hvad der sker, når man kommer.",
        ],
        cards: [
          { title: "Hvad hjælper I med?", text: "Skriv problemerne, som patienten selv ville beskrive dem: 'ondt i skulderen', 'knæet efter fodbold', 'spændt nakke'." },
          { title: "Hvem er behandleren?", text: "Billede, uddannelse, speciale og et par ord om, hvem du arbejder bedst med. Patienter booker et menneske, ikke en klinik." },
          { title: "Skal jeg have henvisning?", text: "Svar tydeligt: hvilke behandlinger kræver det, og hvilke kan man booke direkte. Det sparer mange opkald." },
          { title: "Hvad koster det?", text: "Priser på første konsultation og opfølgning, og hvad tilskud eller forsikring evt. dækker." },
          { title: "Hvad sker der første gang?", text: "Varighed, hvad du skal medbringe, og hvad behandleren gør. Tre linjer fjerner mest af nervøsiteten." },
        ],
      },
      {
        h2: "Siden bygget til at fylde kalenderen",
        steps: [
          { title: "Øverst: problem, behandler og book tid", text: "En overskrift, der siger, hvad du hjælper med, og en tydelig 'Book tid'-knap. Ingen slideshows." },
          { title: "Behandlinger i klare kategorier", text: "Hver behandling får kort beskrivelse, varighed og pris – og helst egen side, så den kan findes på Google." },
          { title: "Dit team", text: "Billede og speciale for hver behandler, så patienten kan vælge den rigtige." },
          { title: "Første besøg", text: "Et kort afsnit om forløbet fra første konsultation til afslutning." },
          { title: "Resultater og anmeldelser", text: "Rigtige anmeldelser fra Google. Husk samtykke, hvis du viser patientforløb, og undgå følsomme oplysninger." },
          { title: "Find os og kontakt", text: "Adresse, parkering, åbningstider og kontaktmuligheder – opdateret." },
        ],
      },
      {
        h2: "Gør – og undgå",
        compare: {
          good: {
            title: "Det virker",
            items: [
              "Behandlinger beskrevet på patientens sprog",
              "Booking synlig på alle sider, især på mobilen",
              "Priser, varighed og henvisningskrav, der er nemme at finde",
              "Billeder af klinikken og de rigtige behandlere",
              "Tosproget side, hvis du får internationale patienter",
            ],
          },
          bad: {
            title: "Det koster bookinger",
            items: [
              "Fagudtryk uden forklaring",
              "Booking, der kun kan ske via telefon i åbningstiden",
              "Stockfotos af smilende modeller i hvide kitler",
              "Priser, som patienten først opdager ved ankomst",
              "Oplysninger om patienter eller forløb uden samtykke",
            ],
          },
        },
      },
      {
        h2: "Online booking og privatliv",
        paragraphs: [
          "Har du allerede et bookingsystem til klinikken, bygger jeg siden, så den fungerer sammen med det. Er der brug for en enkel forespørgselsformular, kan den også sættes op. Hvis formularen modtager oplysninger om helbred, kræver det et ekstra omhyggeligt design, så der kun indsamles det, der er nødvendigt.",
        ],
        bullets: [
          "Kobling til dit eksisterende bookingsystem – du behøver ikke skifte",
          "Formularer, der kun spørger om det nødvendige",
          "Cookie-samtykke og privatlivspolitik, der passer til sitet",
          "Hurtig side på mobil, hvor de fleste patienter booker",
        ],
        callout: {
          tone: "warning",
          title: "Følsomme oplysninger",
          text: "Skriv ikke helbredsoplysninger i en almindelig kontaktformular, som sendes som mail. Brug dit bookingsystem eller en løsning, der er lavet til formålet.",
        },
      },
      {
        h2: "Lokal synlighed for klinikker",
        cards: [
          { title: "Google Virksomhedsprofil", text: "Rigtig kategori, behandlinger, åbningstider, billeder og booking-link. Svar på alle anmeldelser." },
          { title: "Én side pr. behandling", text: "'Fysioterapeut Horsens', 'sportsskader' og 'rygbehandling' er tre forskellige søgninger." },
          { title: "Korrekt på Google", text: "Jeg sørger for, at Google og ChatGPT kender din klinik, dine behandlinger og dit område." },
          { title: "Anmeldelser som rutine", text: "Bed tilfredse patienter om en kort anmeldelse, når forløbet er afsluttet." },
        ],
        cta: { href: "/blog/seo-tjekliste-lokale-virksomheder", label: "SEO-tjekliste til lokale virksomheder" },
      },
      {
        h2: "Hvilken løsning passer til klinikken?",
        table: pricingTable([
          ["Enkeltmandsklinik med få behandlinger", "Landingside eller Basis", "Behandlinger, pris og booking på en hurtig side."],
          ["Flere behandlere og behandlinger", "Basis eller Standard", "Egne sider til behandlinger og team med booking."],
          ["Flere sprog eller flere afdelinger", "Standard eller skræddersyet", "Plads til to sprog og lokale sider."],
        ]),
        after: ["Priserne står i prisguiden. Du får et fast tilbud inden for 24 timer."],
        cta: { href: "/hjemmeside-pris", label: "Se prisguiden" },
      },
    ],
    faqs: [
      {
        q: "Kan patienter booke tid direkte på hjemmesiden?",
        a: "Ja. Jeg kan koble siden til dit eksisterende bookingsystem eller bygge en forespørgselsformular, hvor du bekræfter tiden.",
      },
      {
        q: "Må jeg vise billeder og historier fra patienter?",
        a: "Kun med skriftligt samtykke, og uden følsomme oplysninger. Mange klinikker bruger i stedet anmeldelser fra Google og billeder af klinikken og behandlerne.",
      },
      {
        q: "Kan siden være på dansk og engelsk?",
        a: "Ja. Jeg har bygget en tosproget klinikside, hvor patienter kan skifte sprog uden at miste booking-flowet.",
      },
      {
        q: "Hvordan får jeg flere nye patienter?",
        a: "Med en side, der svarer på patientens spørgsmål, en opdateret Google Virksomhedsprofil, anmeldelser og booking, der er nem på mobilen.",
      },
      {
        q: "Hvad hvis jeg allerede har en side?",
        a: "Så starter jeg med at kigge på den. Ofte er det nok at forbedre behandlingssider, booking og hastighed i stedet for at starte forfra.",
      },
    ],
    related: [rel.saloner, rel.fitness, rel.blogSeo],
  },

  /* ─────────────────────────── Køreskole ─────────────────────────── */
  {
    slug: "hjemmeside-til-koereskole",
    type: "service",
    title: "Hjemmeside til køreskole i Horsens | WebHjerte",
    description:
      "Hjemmeside til køreskoler: tydelige hold, forløb og priser, tilmelding online og tryghed for nye elever og forældre.",
    keywords: ["hjemmeside køreskole", "køreskole hjemmeside", "webdesign køreskole", "køreskole tilmelding online", "kørekort hjemmeside"],
    name: "Hjemmeside til køreskole",
    serviceType: "Webdesign",
    eyebrow: "Til køreskoler",
    h1: "Hjemmeside til køreskole: Fra interesseret til tilmeldt",
    intro:
      "Et kørekort er en stor beslutning, ofte betalt af forældre. Eleven og de voksne sammenligner køreskoler på pris, hold, tryghed og hvor hurtigt man kommer i gang. Din side skal vise forløbet klart og gøre det let at skrive sig op.",
    summary:
      "En god køreskoleside viser hele vejen til kørekortet i ét overblik: hvad der sker, hvad det koster, hvornår næste hold starter, og hvordan man tilmelder sig. Når eleven kan se næste skridt, bliver en tvivlende besøgende til en tilmelding.",
    facts: [
      { num: "Forløb", label: "Fra teori til køreprøve i ét overblik" },
      { num: "Hold", label: "Næste start synlig på forsiden" },
      { num: "Tilmelding", label: "Online – uden telefonkø" },
    ],
    sections: [
      {
        h2: "Hvem vælger køreskole – og hvorfor",
        paragraphs: [
          "Der er to beslutningstagere: eleven, der vil have det til at føles let, og forældre, der vil have tryghed. Begge sammenligner en håndfuld køreskoler, og både pris og indtryk fylder.",
          "Derfor virker det, når siden er ærlig om, hvad forløbet indeholder, og hvad der er med i prisen. Vil du ikke være billigst, skal siden forklare, hvorfor kunden får noget særligt for pengene.",
        ],
        callout: {
          tone: "tip",
          title: "Tommelfingerregel",
          text: "Hvis en besøgende ikke kan se, hvornår næste hold starter, og hvordan man tilmelder sig, før de har scrollet to gange, ringer de ikke – de prøver næste køreskole.",
        },
      },
      {
        h2: "Det skal en køreskoleside indeholde",
        cards: [
          { title: "Forløbet trin for trin", text: "Teori, manøvrebane, glatbane, kørsel og køreprøve. Vis, hvad der sker i hvert trin, og hvor lang tid det typisk tager." },
          { title: "Hold og datoer", text: "Næste teorihold og ledige pladser. Opdaterede datoer fortæller, at I er aktive." },
          { title: "Priser og pakker", text: "Det kunden betaler for, og hvad der er med. Skjulte tillæg er den hurtigste vej til dårlige anmeldelser." },
          { title: "Instruktører", text: "Billeder og to linjer om hver instruktør. Elever vil vide, hvem de skal sidde ved siden af." },
          { title: "Tilmelding", text: "En kort formular, hvor eleven vælger kategori (fx B) og ønsket hold – og får en bekræftelse med det samme." },
          { title: "Spørgsmål og svar", text: "Hvornår kan jeg starte? Hvad skal jeg medbringe? Hvad hvis jeg dumper? Svar åbent." },
        ],
      },
      {
        h2: "Siden bygget til at få tilmeldinger",
        steps: [
          { title: "Øverst: kørekort, by og næste hold", text: "En overskrift med kategori og område, næste holdstart og en tydelig tilmeldingsknap." },
          { title: "Forløbet", text: "En visuel køreplan fra teori til køreprøve, så eleven ser slutmålet." },
          { title: "Pris og indhold", text: "En tydelig oversigt over, hvad der er med og ikke er med." },
          { title: "Hold og tilmelding", text: "Ledige hold med dato og sted og en tilmeldingsformular på samme side." },
          { title: "Anmeldelser og resultater", text: "Rigtige anmeldelser fra elever og forældre. Brug fornavn og eventuelt by." },
          { title: "Kontakt", text: "Telefon, adresse og kort – også til dem, der hellere vil ringe." },
        ],
      },
      {
        h2: "Gør – og undgå",
        compare: {
          good: {
            title: "Det virker",
            items: [
              "Næste holdstart synlig uden at scrolle",
              "Priser og pakker med klar forklaring",
              "Billeder af rigtige instruktører og biler",
              "Tilmelding på under to minutter, også fra mobilen",
              "Ærlighed om, hvad forløbet kræver",
            ],
          },
          bad: {
            title: "Det koster tilmeldinger",
            items: [
              "Gamle datoer og hold, der allerede er startet",
              "Priser, der først afsløres via telefon",
              "Stockfotos af biler og skilte",
              "En lang tekst om virksomhedens historie øverst",
              "Tilmelding kun med tryk på en e-mailadresse",
            ],
          },
        },
      },
      {
        h2: "Lokal synlighed for køreskoler",
        cards: [
          { title: "Google Virksomhedsprofil", text: "Kategori, kørekortstyper, åbningstider, billeder og anmeldelser. Det er her, mange eleverne finder jer første gang." },
          { title: "Søgninger, du kan vinde", text: "'Køreskole Horsens', 'kørekort B', 'teorihold' og 'prøve i kørekort' – hver med egen side eller sektion." },
          { title: "Anmeldelser", text: "Bed elever om en anmeldelse, mens glæden over bestået prøve er frisk." },
          { title: "Hurtig på mobil", text: "Næsten alle unge søger fra mobilen. Siden bygges til at åbne hurtigt." },
        ],
        cta: { href: "/blog/seo-tjekliste-lokale-virksomheder", label: "SEO-tjekliste til lokale virksomheder" },
      },
      {
        h2: "Hvilken løsning passer til køreskolen?",
        table: pricingTable([
          ["Lille køreskole med få hold", "Landingside eller Basis", "Forløb, priser, hold og kontakt på en hurtig side."],
          ["Flere kategorier og instruktører", "Basis eller Standard", "Sider pr. kørekortstype, hold og tilmelding."],
          ["Flere afdelinger eller stort holdsystem", "Standard eller skræddersyet", "Integration med dit holdsystem og tilmeldingsflow."],
        ]),
        after: ["Priserne står i prisguiden. Du får et fast tilbud inden for 24 timer."],
        cta: { href: "/hjemmeside-pris", label: "Se prisguiden" },
      },
    ],
    faqs: [
      {
        q: "Kan eleverne tilmelde sig online?",
        a: "Ja. Jeg bygger en tilmeldingsformular til hold og kørekortstype, og sender tilmeldingen til din mail – eller kobler den til dit eksisterende system.",
      },
      {
        q: "Kan siden vise ledige hold og datoer?",
        a: "Ja. Holdene kan opdateres nemt, så de altid er aktuelle. Det er et af de punkter, der giver flest tilmeldinger.",
      },
      {
        q: "Hvad hvis jeg ikke er billigst?",
        a: "Så skal siden forklare, hvad eleven får for pengene: tryghed, kvalitet, instruktører og et forløb, der virker. Det er den måde, du vinder uden at sænke prisen.",
      },
      {
        q: "Skal prisen stå på siden?",
        a: "Ja, gerne. Elever og forældre sammenligner, og skjulte priser giver mistillid. En ærlig prisoversigt filtrerer de forkerte henvendelser fra.",
      },
      {
        q: "Hvordan bliver jeg fundet på Google?",
        a: "Med en opdateret Google Virksomhedsprofil, anmeldelser og sider, der nævner din by og dine kørekortstyper.",
      },
    ],
    related: [rel.klinik, rel.vaerksted, rel.blogSeo],
  },

  /* ─────────────────────────── Fitness ─────────────────────────── */
  {
    slug: "hjemmeside-til-fitness",
    type: "service",
    title: "Hjemmeside til fitnesscenter og træning i Horsens | WebHjerte",
    description:
      "Hjemmeside til fitnesscentre, studios og trænere: holdplan, prøvetime og medlemskab online, så besøgende bliver til betalende medlemmer.",
    keywords: ["hjemmeside fitness", "hjemmeside fitnesscenter", "hjemmeside personlig træner", "hjemmeside yoga studio", "webdesign fitness"],
    name: "Hjemmeside til fitness og træning",
    serviceType: "Webdesign",
    eyebrow: "Til fitness og træning",
    h1: "Hjemmeside til fitness: Fra nysgerrig til medlem",
    intro:
      "Folk beslutter sig for at træne – og ombestemmer sig lige så hurtigt. Din side skal fange motivationen, mens den er der: vis stemningen, holdene og prisen, og lad dem booke en prøvetime med det samme.",
    summary:
      "En god fitnesside viser stemningen, ugens holdplan, hvad et medlemskab koster, og hvordan man kommer i gang. Det hurtigste vindende træk er en prøvetime, der kan bookes på 30 sekunder – det er det, der fører flest nye medlemmer ind ad døren.",
    facts: [
      { num: "Prøvetime", label: "Booket på få sekunder" },
      { num: "Holdplan", label: "Opdateret hver uge" },
      { num: "Medlemskab", label: "Tegnes online" },
    ],
    sections: [
      {
        h2: "Hvad en fitnesskunde leder efter",
        paragraphs: [
          "Nye medlemmer er usikre. Passer stedet til mig? Er jeg for dårlig? Hvor meget binder jeg mig? Jo hurtigere siden fjerner de tvivl, jo flere tager springet.",
          "Derfor vinder de sider, der viser rigtige mennesker, rigtige hold og en ærlig pris – og gør første skridt så lille som muligt: en gratis prøvetime.",
        ],
        cards: [
          { title: "Stemning og mennesker", text: "Rigtige billeder og korte videoer fra holdene. Ingen stockfotos af modeller med perfekt belysning." },
          { title: "Holdplan", text: "Ugens hold med tid, niveau og instruktør. Opdaterede planer viser, at stedet er aktivt." },
          { title: "Pris og binding", text: "Hvad koster et medlemskab, og hvad hvis man vil stoppe? Klarhed vinder tillid." },
          { title: "Prøvetime", text: "En stor knap, der fører til booking uden at oprette en konto." },
          { title: "Trænerne", text: "Billede, speciale og et par ord om hver træner." },
          { title: "Resultater og anmeldelser", text: "Citater fra medlemmer. Brug fornavn og eventuelt, hvor længe de har trænet hos jer." },
        ],
      },
      {
        h2: "Siden bygget til at fylde holdene",
        steps: [
          { title: "Øverst: stemning og prøvetime", text: "Et godt billede eller en kort video og en tydelig 'Book prøvetime'-knap." },
          { title: "Holdplan", text: "Uge-oversigt, hvor man kan trykke på et hold og se detaljer og ledige pladser." },
          { title: "Medlemskaber", text: "To til tre muligheder med pris og indhold – gerne med en anbefalet." },
          { title: "Trænere og værdier", text: "Hvem er I, og hvem passer I bedst til?" },
          { title: "Anmeldelser og resultater", text: "Rigtige historier, som nye medlemmer kan genkende sig selv i." },
          { title: "Kom i gang", text: "Adresse, parkering, åbningstider og en kort tilmelding." },
        ],
      },
      {
        h2: "Gør – og undgå",
        compare: {
          good: {
            title: "Det virker",
            items: [
              "Prøvetime synlig overalt på siden",
              "Ugens holdplan, der opdateres fast",
              "Priser og bindingsperiode i klar tekst",
              "Billeder af rigtige medlemmer (med samtykke)",
              "Tilmelding på under to minutter",
            ],
          },
          bad: {
            title: "Det koster medlemmer",
            items: [
              "Holdplan som billede, der ikke kan læses på mobil",
              "Skjult pris eller 'ring for pris'",
              "Alt for mange tilbud og kampagner på én gang",
              "En side, der er langsom på grund af tunge videoer",
              "Gamle åbningstider og forkert adresse",
            ],
          },
        },
      },
      {
        h2: "Lokal synlighed for fitness",
        cards: [
          { title: "Google Virksomhedsprofil", text: "Billeder, åbningstider og anmeldelser er det, folk ser først. Hold dem opdateret." },
          { title: "Søgninger, du kan vinde", text: "'Fitness Horsens', 'crossfit', 'yoga' og 'personlig træner' – hver med egen side." },
          { title: "Prøveperiode som indgang", text: "En landingside til prøvetimen kan bruges i annoncer og på sociale medier." },
          { title: "Hurtig på mobil", text: "De fleste kigger på holdplanen fra mobilen. Siden skal være let at bruge med én hånd." },
        ],
        cta: { href: "/blog/seo-tjekliste-lokale-virksomheder", label: "SEO-tjekliste til lokale virksomheder" },
      },
      {
        h2: "Hvilken løsning passer?",
        table: pricingTable([
          ["Personlig træner eller lille studio", "Landingside eller Basis", "Tilbud, træner og booking på en hurtig side."],
          ["Studio med flere hold og medlemskaber", "Basis eller Standard", "Holdplan, medlemskaber og prøvetime-booking."],
          ["Større center med mange hold", "Standard eller skræddersyet", "Online medlemskab og integration med dit system."],
        ]),
        after: ["Priserne står i prisguiden. Du får et fast tilbud inden for 24 timer."],
        cta: { href: "/hjemmeside-pris", label: "Se prisguiden" },
      },
    ],
    faqs: [
      {
        q: "Kan medlemmer tegne abonnement online?",
        a: "Ja. Jeg kan bygge en tilmelding og koble den til betaling – eller til det system, du allerede bruger til medlemmer.",
      },
      {
        q: "Kan holdplanen opdateres nemt?",
        a: "Ja. Holdplanen bygges, så du selv kan ændre tid, hold og instruktør, uden at jeg skal hjælpe.",
      },
      {
        q: "Skal der være video på siden?",
        a: "Kort video kan være stærkt, men den skal være optimeret, så siden stadig åbner hurtigt. Jeg hjælper med at få det rigtige format.",
      },
      {
        q: "Hvordan får jeg flere til at booke en prøvetime?",
        a: "Ved at gøre knappen synlig på hver side, holde formularen kort og vise, hvad man kan forvente i timen.",
      },
      {
        q: "Kan siden bruges til kampagner?",
        a: "Ja. En separat landingside til fx januar eller en kampagne giver dig noget at henvise til fra annoncer og sociale medier.",
      },
    ],
    related: [rel.klinik, rel.saloner, rel.pris],
  },

  /* ─────────────────────────── Rengøring ─────────────────────────── */
  {
    slug: "hjemmeside-til-rengoering",
    nichePackage: "rengøringsfirmaer",
    type: "service",
    title: "Hjemmeside til rengøringsfirma i Horsens | WebHjerte",
    description:
      "Hjemmeside til rengøringsfirmaer og servicevirksomheder: prisberegner, faste aftaler og tryghed, så kunderne beder om tilbud.",
    keywords: ["hjemmeside rengøring", "hjemmeside rengøringsfirma", "webdesign rengøring", "rengøring hjemmeside Horsens", "rengøringsfirma tilbud online"],
    name: "Hjemmeside til rengøringsfirma",
    serviceType: "Webdesign",
    eyebrow: "Til rengøring og service",
    h1: "Hjemmeside til rengøringsfirma: Tillid og tilbud på ét minut",
    intro:
      "Kunden lukker dig ind i sit hjem eller sin virksomhed. Derfor er tillid vigtigere end alt andet – og så skal det være let at få en pris. Din side skal gøre begge dele.",
    summary:
      "En god rengøringsside viser, hvem du er, hvad der er med, og hvad det cirka koster. En enkel prisberegner eller tilbudsformular, der kan udfyldes på under et minut, giver flere henvendelser – og færre opkald om ting, kunden kunne have læst.",
    facts: [
      { num: "Prisberegner", label: "Et overslag på under et minut" },
      { num: "Faste aftaler", label: "Tilbud på ugentlig og hver 14. dag" },
      { num: "Tryghed", label: "Forsikring og referencer synlige" },
    ],
    sections: [
      {
        h2: "Hvad kunden leder efter",
        paragraphs: [
          "Privatkunder vil vide, om de kan stole på dig, og hvad det koster. Erhvervskunder vil vide, om du kan levere stabilt, har forsikring og kan lave en aftale, der passer.",
          "I begge tilfælde vinder du, når siden gør det nemt at få en pris og viser, at du er til at stole på.",
        ],
        cards: [
          { title: "Hvad er med?", text: "Skriv, hvad en normal rengøring indeholder, og hvad der kan tilkøbes – fx vinduer, ovn og flytterengøring." },
          { title: "Hvad koster det?", text: "Et prisoverslag eller en enkel beregner. Skjult pris giver færre henvendelser." },
          { title: "Kan jeg stole på jer?", text: "Forsikring, faste medarbejdere, referencer og anmeldelser. Fortæl, hvordan I behandler nøgler og hjem." },
          { title: "Hvor kommer I?", text: "Byer og områder med navn, så kunden kan se, at I dækker dem." },
          { title: "Hvordan kommer jeg i gang?", text: "Et kort formular med boligtype, størrelse og ønsket frekvens." },
        ],
      },
      {
        h2: "Siden bygget til at give tilbudsforespørgsler",
        steps: [
          { title: "Øverst: ydelse, område og få pris", text: "En overskrift, der siger, hvad du laver og hvor, og en tydelig 'Få et tilbud'-knap." },
          { title: "Ydelser", text: "Fast rengøring, flytterengøring, vinduespolering og erhverv – hver med kort beskrivelse." },
          { title: "Prisberegner", text: "Kunden vælger størrelse og hyppighed og får et overslag." },
          { title: "Tillid", text: "Forsikring, uddannelse, faste medarbejdere og anmeldelser." },
          { title: "Før og efter", text: "Billeder af rigtige opgaver (med samtykke), især flytterengøring og erhverv." },
          { title: "Kontakt", text: "Telefonnummer og formular, hvor kunden kan beskrive opgaven." },
        ],
      },
      {
        h2: "Gør – og undgå",
        compare: {
          good: {
            title: "Det virker",
            items: [
              "Et prisoverslag eller en beregner",
              "Tydelig forklaring af, hvad der er med",
              "Forsikring og referencer i toppen",
              "Før/efter-billeder fra rigtige opgaver",
              "Svar inden for én arbejdsdag",
            ],
          },
          bad: {
            title: "Det koster henvendelser",
            items: [
              "Skjulte priser og 'ring for tilbud'",
              "Stockfotos af smilende rengøringsassistenter",
              "En lang formular med alt for mange felter",
              "Uklare løfter om kvalitet uden bevis",
              "Gamle telefonnumre eller områder",
            ],
          },
        },
      },
      {
        h2: "Lokal synlighed for rengøring",
        cards: [
          { title: "Google Virksomhedsprofil", text: "Kategori, ydelser, serviceområde og anmeldelser. Det er her mange henvendelser starter." },
          { title: "Søgninger, du kan vinde", text: "'Rengøring Horsens', 'flytterengøring', 'erhvervsrengøring' og 'vinduespolering'." },
          { title: "Anmeldelser", text: "Bed kunder om en anmeldelse efter første rengøring – ikke efter et år." },
          { title: "Faste aftaler", text: "En side til faste aftaler gør det nemt at vælge dig og blive hos dig." },
        ],
        cta: { href: "/blog/seo-tjekliste-lokale-virksomheder", label: "SEO-tjekliste til lokale virksomheder" },
      },
      {
        h2: "Hvilken løsning passer?",
        table: pricingTable([
          ["Lille firma med få ydelser", "Landingside eller Basis", "Ydelser, pris og tilbudsformular på en hurtig side."],
          ["Både privat og erhverv", "Basis eller Standard", "Egne sider til private og erhverv med prisberegner."],
          ["Flere byer og mange ydelser", "Standard", "Lokale sider, galleri og måling af, hvad der giver henvendelser."],
        ]),
        after: ["Priserne står i prisguiden. Du får et fast tilbud inden for 24 timer."],
        cta: { href: "/hjemmeside-pris", label: "Se prisguiden" },
      },
    ],
    faqs: [
      {
        q: "Kan kunden få en pris direkte på siden?",
        a: "Ja. Jeg kan bygge en enkel prisberegner, der giver et overslag ud fra størrelse og hyppighed, og sender forespørgslen til dig.",
      },
      {
        q: "Skal jeg skrive mine priser på siden?",
        a: "Det anbefaler jeg. Kunden sammenligner alligevel. Skriv enten 'fra'-priser eller en ramme, så de forkerte henvendelser filtreres fra.",
      },
      {
        q: "Kan jeg vise før/efter-billeder?",
        a: "Ja, hvis kunden har givet samtykke, og billederne ikke viser private ting. Det er et af de stærkeste beviser på kvalitet.",
      },
      {
        q: "Hvordan skiller jeg mig ud fra de store kæder?",
        a: "Med lokalt kendskab, faste medarbejdere og personlig service. En side, der fortæller det, vinder ofte over kæderne hos kunder, der vil have trygge rammer.",
      },
      {
        q: "Hvordan får jeg flere erhvervskunder?",
        a: "Med en side til erhverv, hvor du forklarer aftaler, forsikring og dokumentation – og gør det nemt at bede om et tilbud.",
      },
    ],
    related: [rel.haandvaerkere, rel.vaerksted, rel.blogSeo],
  },

  /* ─────────────────────────── Værksted ─────────────────────────── */
  {
    slug: "hjemmeside-til-vaerksted",
    nichePackage: "værksteder",
    type: "service",
    title: "Hjemmeside til autoværksted i Horsens | WebHjerte",
    description:
      "Hjemmeside til autoværksteder og dækfirmaer: tidsbestilling, tydelige services og lokal synlighed, så bilejerne vælger dig.",
    keywords: ["hjemmeside værksted", "hjemmeside autoværksted", "værksted hjemmeside booking", "webdesign autoværksted", "dækværksted hjemmeside"],
    name: "Hjemmeside til værksted",
    serviceType: "Webdesign",
    eyebrow: "Til værksteder",
    h1: "Hjemmeside til værksted: Fra lyd i bilen til booket tid",
    intro:
      "Bilejere kommer sjældent med en perfekt beskrivelse. De har en lyd, en lampe i instrumentbrættet eller en syn-dato, der nærmer sig. Din side skal møde dem dér og føre dem til en booket tid.",
    summary:
      "En god værkstedsside oversætter bilejerens problem til en service og en tid. Den viser, hvad I tilbyder, hvor lang tid det tager, hvad det cirka koster, og lader kunden booke uden at ringe i åbningstiden.",
    facts: [
      { num: "Booking", label: "Døgnet rundt – også uden for åbningstid" },
      { num: "Services", label: "Forklaret på kundens sprog" },
      { num: "SMS", label: "Besked, når bilen er klar" },
    ],
    sections: [
      {
        h2: "Hvad bilejeren leder efter",
        paragraphs: [
          "De fleste vælger værksted ud fra tre ting: beliggenhed, tillid og hvor hurtigt de kan få en tid. Prisen kommer bagefter – og er ofte lidt mindre vigtig, end værkstedet tror.",
          "Det betyder, at hjemmesiden skal gøre det nemt at finde adresse, åbningstid og booking, og forklare, hvad der sker, når bilen er afleveret.",
        ],
        cards: [
          { title: "Hvad kan I?", text: "Service, syn, bremser, dæk, aircondition, udstødning. Hver service får kort tekst og en 'Book'-knap." },
          { title: "Hvad koster det?", text: "Faste priser på det, I kan fastsætte (service, dækskift), og 'fra'-priser på resten." },
          { title: "Kan I min bil?", text: "Nævn de mærker, I har erfaring med, og om I arbejder med garanti, leasing og forsikringsskader." },
          { title: "Hvor lang tid tager det?", text: "Siger du 'samme dag' eller '2–3 dage', så skriv det. Det gør planlægningen nem for kunden." },
          { title: "Kan jeg få en lånebil?", text: "Hvis I tilbyder lånebil eller afhentning, så fortæl det tydeligt." },
        ],
      },
      {
        h2: "Siden bygget til at fylde værkstedet",
        steps: [
          { title: "Øverst: services og 'book tid'", text: "En overskrift med by og værksted, og en tydelig bookingknap. Telefonnummer til akutte problemer." },
          { title: "Services med egne sider", text: "'Syn i Horsens', 'dækskift' og 'service af bil' er tre forskellige søgninger." },
          { title: "Fra symptom til service", text: "Hjælp kunden: 'Lyd fra bremser' → bremsetjek. Det oversætter bilejerens sprog til din service." },
          { title: "Tillid", text: "Mærker, certificeringer, garanti og anmeldelser." },
          { title: "Sådan foregår det", text: "Fra aflevering til afhentning – og hvordan I kontakter kunden undervejs." },
          { title: "Find os", text: "Adresse, kort, åbningstider og parkering." },
        ],
      },
      {
        h2: "Gør – og undgå",
        compare: {
          good: {
            title: "Det virker",
            items: [
              "Booking til de mest almindelige services",
              "Adresse og åbningstider synlige på alle sider",
              "Services forklaret med bilejerens egne ord",
              "SMS-besked, når bilen er klar",
              "Billeder af værkstedet og medarbejderne",
            ],
          },
          bad: {
            title: "Det koster bookinger",
            items: [
              "Kun telefonbooking i åbningstiden",
              "Fagudtryk uden forklaring",
              "Gamle åbningstider og forkert adresse",
              "En lang liste af mærker uden forklaring",
              "En hjemmeside, der er langsom eller ikke virker på mobil",
            ],
          },
        },
      },
      {
        h2: "Lokal synlighed for værksteder",
        cards: [
          { title: "Google Virksomhedsprofil", text: "Rigtig kategori, services, åbningstider og anmeldelser. Næsten alle bilister slår værkstedet op på kortet." },
          { title: "Søgninger, du kan vinde", text: "'Autoværksted Horsens', 'syn', 'dækskift' og 'bremser' – hver med egen side." },
          { title: "Sæsonkampagner", text: "En side til dækskift forud for vinteren eller sommerservice giver trafik, når efterspørgslen er størst." },
          { title: "Anmeldelser", text: "Bed om en anmeldelse, når kunden henter bilen." },
        ],
        cta: { href: "/blog/seo-tjekliste-lokale-virksomheder", label: "SEO-tjekliste til lokale virksomheder" },
      },
      {
        h2: "Hvilken løsning passer til værkstedet?",
        table: pricingTable([
          ["Lille værksted med få services", "Landingside eller Basis", "Services, åbningstider og booking på en hurtig side."],
          ["Flere services og mærker", "Basis eller Standard", "Egne sider til services og booking."],
          ["Flere afdelinger eller stort sortiment", "Standard eller skræddersyet", "Lokale sider, booking og integration med dit system."],
        ]),
        after: ["Priserne står i prisguiden. Du får et fast tilbud inden for 24 timer."],
        cta: { href: "/hjemmeside-pris", label: "Se prisguiden" },
      },
    ],
    faqs: [
      {
        q: "Kan kunder booke tid online?",
        a: "Ja. Jeg kan bygge en bookingformular til de mest almindelige services og koble den til dit eksisterende system.",
      },
      {
        q: "Skal prisen stå på siden?",
        a: "Det anbefaler jeg for standardservices som service, syn og dækskift. Skriv 'fra'-pris for resten, så kunden ved, hvad de kan forvente.",
      },
      {
        q: "Hvordan bliver jeg fundet af folk, der ikke kender mig?",
        a: "Med en opdateret Google Virksomhedsprofil, anmeldelser og sider til de services, folk søger på sammen med din by.",
      },
      {
        q: "Kan jeg sende en SMS, når bilen er klar?",
        a: "Ja. Det kræver et system, der kan sende beskeder – nogle værkstedssystemer kan det i forvejen. Jeg kan hjælpe med at koble det til siden.",
      },
      {
        q: "Hvad med dækhotel og sæsonskift?",
        a: "En separat side til dækskift og dækhotel kan trække kunder ind, netop når de har brug for det, og kan genbruges hvert år.",
      },
    ],
    related: [rel.haandvaerkere, rel.rengoering, rel.blogSeo],
  },

  /* ─────────────────────────── Rådgivere ─────────────────────────── */
  {
    slug: "hjemmeside-til-raadgivere",
    type: "service",
    title: "Hjemmeside til rådgivere, advokater og konsulenter | WebHjerte",
    description:
      "Hjemmeside til advokater, revisorer, konsulenter og coaches: vis speciale og tillid, og gør den første samtale nem at booke.",
    keywords: ["hjemmeside rådgiver", "hjemmeside advokat", "hjemmeside revisor", "hjemmeside konsulent", "hjemmeside coach", "webdesign rådgivning"],
    name: "Hjemmeside til rådgivere",
    serviceType: "Webdesign",
    eyebrow: "Til rådgivere og konsulenter",
    h1: "Hjemmeside til rådgivere: Vis dit speciale, vind den første samtale",
    intro:
      "Rådgivning sælges på tillid. Kunden kan ikke se produktet på forhånd, så din side skal vise, hvem du hjælper, hvad du er god til, og hvordan det er at arbejde med dig – og gøre den første samtale uforpligtende at bestille.",
    summary:
      "En god rådgiverside er specifik: den siger, hvem du hjælper, med hvad, og hvad der sker, når kunden tager kontakt. Et tydeligt speciale, rigtige referencer og en nem booking af den første samtale slår enhver generel præsentation af virksomheden.",
    facts: [
      { num: "Speciale", label: "Hvem du hjælper – og hvem ikke" },
      { num: "1. samtale", label: "Bookes online" },
      { num: "Tillid", label: "Referencer og forløb synlige" },
    ],
    sections: [
      {
        h2: "Hvorfor tillid er alt for en rådgiver",
        paragraphs: [
          "Kunden betaler for din tid og dit råd – og kan ikke vide, om du er den rigtige, før de har talt med dig. Derfor handler siden om at gøre usikkerheden mindre: Hvad hjælper du med? Hvordan foregår det? Hvad koster det cirka?",
          "Rådgivere, der er specifikke, vinder over dem, der er generelle. 'Skat og moms for små virksomheder' slår 'regnskab og rådgivning'.",
        ],
        callout: {
          tone: "tip",
          title: "Tommelfingerregel",
          text: "Hvis siden kan bruges af enhver anden rådgiver ved at bytte navn og logo, er den for generel. Skriv til de kunder, du vil have flere af.",
        },
      },
      {
        h2: "Det skal en rådgiverside indeholde",
        cards: [
          { title: "Hvem hjælper du?", text: "Privat, selvstændig, lille eller større virksomhed. Hver gruppe får sin egen indgang med sin egen tekst." },
          { title: "Hvad er dit speciale?", text: "Tre til fem konkrete områder frem for en lang liste af alt, du kan." },
          { title: "Hvordan foregår det?", text: "Første samtale, afklaring, tilbud, forløb. Når kunden kender trinnene, føles det mere trygt at begynde." },
          { title: "Hvad koster det?", text: "En ramme eller en model: timepris, fast pris eller abonnement. Åbenhed filtrerer de forkerte henvendelser fra." },
          { title: "Referencer og resultater", text: "Anonymiserede cases, anmeldelser og typiske opgaver. Aldrig kundenavne uden tilladelse." },
          { title: "Dig som person", text: "Billede, baggrund og et par linjer om, hvordan du arbejder." },
        ],
      },
      {
        h2: "Siden bygget til at få den første samtale",
        steps: [
          { title: "Øverst: speciale og kontakt", text: "En overskrift, der siger, hvem du hjælper og hvad du hjælper med, og en knap til at booke en samtale." },
          { title: "Fire indgange", text: "Privat, selvstændig, lille virksomhed og større virksomhed – hver med egen forklaring." },
          { title: "Ydelser", text: "Korte beskrivelser af de ydelser, kunderne oftest spørger efter." },
          { title: "Forløbet", text: "Fra første samtale til færdigt forløb, med tidsrammer." },
          { title: "Tillid", text: "Uddannelse, medlemskaber, referencer og anmeldelser." },
          { title: "Kontakt og booking", text: "En kalender til en kort første samtale – gerne 15–30 minutter." },
        ],
      },
      {
        h2: "Gør – og undgå",
        compare: {
          good: {
            title: "Det virker",
            items: [
              "Et klart speciale og en tydelig målgruppe",
              "Booking af første samtale uden forpligtelse",
              "Et ægte billede af dig – ikke et stockfoto",
              "Forløb og tidsrammer forklaret enkelt",
              "Artikler eller svar, der viser, hvad du kan",
            ],
          },
          bad: {
            title: "Det koster henvendelser",
            items: [
              "Alt for generelle sætninger som 'vi tilbyder skræddersyede løsninger'",
              "Fagjargon, som kunden ikke forstår",
              "Ingen pris eller ramme overhovedet",
              "Kontaktoplysninger gemt i bunden af siden",
              "En side, der ikke er opdateret i flere år",
            ],
          },
        },
      },
      {
        h2: "Synlighed for rådgivere",
        cards: [
          { title: "Google Virksomhedsprofil", text: "Hvis du har kunder i et lokalområde, er profilen det første, mange ser." },
          { title: "Artikler og svar", text: "Korte, praktiske svar på de spørgsmål, kunderne stiller, bygger tillid og placeringer på Google." },
          { title: "Korrekt på Google og i AI", text: "Jeg sørger for, at din profil, dit speciale og dit område er klart for Google og ChatGPT." },
          { title: "Anbefalinger", text: "Anmeldelser og anbefalinger fra rigtige kunder, hvor reglerne tillader det." },
        ],
        cta: { href: "/blog/seo-tjekliste-lokale-virksomheder", label: "SEO-tjekliste til lokale virksomheder" },
      },
      {
        h2: "Hvilken løsning passer til rådgiveren?",
        table: pricingTable([
          ["Enkeltmand med få ydelser", "Landingside eller Basis", "Speciale, forløb og booking af første samtale."],
          ["Flere ydelser og målgrupper", "Basis eller Standard", "Egne sider til målgrupper og ydelser."],
          ["Flere medarbejdere og mange ydelser", "Standard eller skræddersyet", "Team-sider, artikler og integration med kalender."],
        ]),
        after: ["Priserne står i prisguiden. Du får et fast tilbud inden for 24 timer."],
        cta: { href: "/hjemmeside-pris", label: "Se prisguiden" },
      },
    ],
    faqs: [
      {
        q: "Må jeg vise kundenavne og cases?",
        a: "Kun med kundens tilladelse, og for nogle fag (fx advokater og revisorer) gælder særlige regler om tavshedspligt. Brug anonymiserede cases, hvis du er i tvivl.",
      },
      {
        q: "Skal prisen stå på siden?",
        a: "Du behøver ikke lægge dig fast, men en ramme eller en forklaring på prismodellen filtrerer de forkerte henvendelser fra og gør de rigtige mere trygge.",
      },
      {
        q: "Hvordan booker kunder en første samtale?",
        a: "Med en kalender, der er koblet til din egen, eller en enkel formular, hvor du svarer inden for en hverdag. Jeg sætter det op, så det passer til dit arbejde.",
      },
      {
        q: "Bør jeg skrive artikler?",
        a: "Ja, hvis du vil findes på det, folk søger efter. Korte praktiske svar på almindelige spørgsmål bygger både tillid og placeringer over tid.",
      },
      {
        q: "Kan siden have flere sprog?",
        a: "Ja. Hvis du har internationale kunder, kan siden bygges på dansk og engelsk.",
      },
    ],
    related: [rel.klinik, rel.fitness, rel.pris],
  },
];
