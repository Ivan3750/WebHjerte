// Lokale og regionale landingssider (baseret på Search Console-søgninger)

const relatedCore = [
  { href: "/hjemmeside-pris", title: "Hjemmeside pris", desc: "Faste pakker fra 2.500 kr uden skjulte gebyrer." },
  { href: "/portefolje", title: "Portefølje", desc: "Se eksempler på færdige hjemmesider." },
  { href: "/gratis-seo-tjek-horsens", title: "Gratis SEO-tjek", desc: "Få en gennemgang af din nuværende hjemmeside." },
];

export const localPages = [
  {
    slug: "webbureau-jylland",
    type: "service",
    title: "Webbureau i Jylland – hjemmesider til fast pris | WebHjerte",
    description:
      "Webbureau til virksomheder i hele Jylland – fra Skagen til Kolding. Fast pris fra 2.500 kr og direkte kontakt med udvikleren.",
    keywords: ["webbureau Jylland", "webbureau i Jylland", "webbureau Østjylland", "webbureau Nordjylland", "webbureau Djursland", "webbureau Vestjylland"],
    name: "Webbureau i Jylland",
    serviceType: "Webbureau",
    eyebrow: "Webbureau · Jylland",
    h1: "Webbureau i Jylland – fra Skagen til Kolding",
    intro:
      "WebHjerte er et lille webbureau med base i Horsens. Jeg bygger hurtige, søgemaskineoptimerede hjemmesider til virksomheder over hele Jylland – til fast pris og med direkte kontakt til den, der bygger siden.",
    summary:
      "WebHjerte er et webbureau i Horsens, som arbejder for virksomheder i hele Jylland. Samarbejdet foregår online (video, telefon, e-mail), så afstanden ingen rolle spiller. Priserne er faste: Landingside fra 2.500 kr, Basis fra 4.500 kr, Standard fra 8.500 kr og skræddersyede løsninger fra 14.000 kr.",
    city: "jylland",
    facts: [
      { num: "Hele Jylland", label: "Fra Skagen til Kolding" },
      { num: "Online", label: "Video, telefon og mail" },
      { num: "48 timer", label: "Til første designudkast" },
    ],
    sections: [
      {
        h2: "Et webbureau, der dækker hele Jylland",
        paragraphs: [
          "Jylland er en lang halvø med mange lokale markeder: håndværkere i Vestjylland, restauranter i Aarhus, turistvirksomheder i Nordjylland og servicefirmaer i trekantsområdet. Fælles for dem er, at de skal findes af kunder i deres eget område – og her er en lokal, hurtig og velstruktureret hjemmeside det vigtigste redskab.",
          "Jeg er baseret i Horsens, centralt placeret i Østjylland, og arbejder med virksomheder i hele regionen. Alt kan klares online: kickoff-møde på video, designgodkendelse via link, løbende afstemning i telefon eller mail. Og kommer det til at give mening at mødes, kan vi aftale et fysisk møde.",
        ],
      },
      {
        h2: "Områder i Jylland",
        visual: { name: "vindmoller", caption: "Vestjylland – vindmøller ved kysten" },
        subs: [
          {
            h3: "Østjylland og Djursland",
            paragraphs: [
              "Horsens, Aarhus, Odder, Skanderborg, Ebeltoft og Grenaa. Her er konkurrencen om lokale søgninger størst, og forskellen på en gennemsnitlig og en god hjemmeside viser sig hurtigt i antallet af henvendelser.",
            ],
          },
          {
            h3: "Midtjylland",
            paragraphs: [
              "Silkeborg, Viborg, Herning, Ikast, Randers og Skive. Mange virksomheder her mangler en moderne, mobilvenlig side og et ordentligt Google-fundament.",
            ],
          },
          {
            h3: "Trekantområdet og Sydjylland",
            paragraphs: [
              "Vejle, Fredericia, Kolding, Middelfart og Esbjerg. God placering for virksomheder, der betjener både private og erhverv på tværs af kommunegrænser.",
            ],
          },
          {
            h3: "Vest- og Nordjylland",
            paragraphs: [
              "Ringkøbing, Holstebro, Thisted, Hjørring, Aalborg og Frederikshavn. Her er onlinesamarbejdet en fordel: du slipper for at betale for kørsel og mødetid.",
            ],
          },
        ],
      },
      {
        h2: "Lokale søgninger fra Skagen til Kolding",
        paragraphs: [
          "Uanset hvor i Jylland du holder til, søger dine kunder på samme måde: en ydelse plus en by. Forskellen er, hvor mange konkurrenter du har. I Aarhus og Aalborg er der mange; i mindre byer kan en god side hurtigt gøre dig til det oplagte valg.",
        ],
        visual: { name: "search-typing", queries: ["tømrer Aalborg", "frisør Herning", "VVS Esbjerg", "hjemmeside Silkeborg", "webbureau Jylland"], caption: "Eksempler på lokale søgninger rundt om i Jylland" },
        callout: {
          tone: "warning",
          title: "Pas på kopisider",
          text: "Ti næsten ens sider med forskellige bynavne hjælper sjældent – og kan skade. Jeg laver lokale sider, hvor det giver mening, med indhold, der passer til netop den by.",
        },
      },
      {
        h2: "Hvad får du som kunde?",
        bullets: [
          "Fast pris aftalt på forhånd – ingen timebaseret overraskelse bagefter.",
          "Første designudkast inden for 48 timer, og 0 kr for designet, hvis det ikke passer.",
          "Typisk levering på 2–10 dage afhængigt af pakke.",
          "SEO, mobiloptimering og hurtig indlæsning bygget ind fra første dag.",
          "Indhold, der også bliver fundet, når kunder spørger ChatGPT eller Googles AI.",
          "Domæne og kode tilhører dig – ingen bindinger.",
          "30 dages support efter lancering og herefter vedligeholdelse fra 249 kr/md.",
        ],
      },
      {
        h2: "Priser på hjemmesider i Jylland",
        table: {
          head: ["Pakke", "Fra pris", "Levering", "Omfang"],
          rows: [
            ["Landingside", "2.500 kr", "ca. 2 dage", "1 side til kampagne eller én ydelse"],
            ["Basis", "4.500 kr", "ca. 5 dage", "3–5 sider, kontaktformular, Google Maps, basis-SEO"],
            ["Standard", "8.500 kr", "ca. 10 dage", "Op til 8 sider, SEO og analytics, booking, 30 dages support"],
            ["Skræddersyet", "14.000 kr", "Aftales", "Webshop, kundeportal eller specialfunktioner"],
          ],
        },
        paragraphs: ["Alle priser er vejledende startpriser. Du får et konkret, fast tilbud inden for 24 timer, når jeg har hørt om dit projekt."],
      },
      {
        h2: "Hvorfor vælge et lille webbureau frem for et stort?",
        paragraphs: [
          "Store bureauer er gode til store organisationer med komplekse behov. Men for en lokal virksomhed med 1–30 ansatte betyder lagene af projektledere, account managers og møder ofte en højere pris og længere svartid. Hos WebHjerte taler du direkte med den, der designer og bygger – og beslutninger tages på minutter, ikke uger.",
          "Til gengæld er jeg ikke det rette valg til meget store enterprise-projekter med flere teams og lange procesforløb. Det siger jeg ærligt fra start.",
        ],
        cta: { href: "/freelancer-vs-bureau", label: "Freelancer eller webbureau?" },
      },
      {
        h2: "Sådan kommer vi i gang",
        steps: [
          { title: "Gratis samtale", text: "Du fortæller om din virksomhed, dine kunder og dine mål. Det tager 15–30 minutter." },
          { title: "Tilbud inden for 24 timer", text: "Du modtager en fast pris og en tidsplan." },
          { title: "Designudkast inden for 48 timer", text: "Du ser og godkender designet, før der bygges noget." },
          { title: "Bygning og test", text: "Jeg bygger siden, tester på mobil og desktop og indarbejder dine rettelser." },
          { title: "Lancering og support", text: "Siden går live, og du har 30 dages support, hvis noget skal justeres." },
        ],
      },
    ],
    faqs: [
      {
        q: "Hvilke dele af Jylland arbejder I i?",
        a: "Hele Jylland – og resten af Danmark. Samarbejdet foregår online, så der er ingen geografiske begrænsninger.",
      },
      {
        q: "Skal jeg møde jer fysisk?",
        a: "Nej, men det er muligt i mange tilfælde. De fleste kunder foretrækker video eller telefon, fordi det er hurtigere.",
      },
      {
        q: "Hvad koster en hjemmeside hos et webbureau i Jylland?",
        a: "Hos WebHjerte fra 2.500 kr for en landingside, 4.500 kr for Basis, 8.500 kr for Standard og 14.000 kr for skræddersyede løsninger.",
      },
      {
        q: "Kan I hjælpe med at blive fundet lokalt i min by?",
        a: "Ja. Jeg bygger lokal SEO ind i hjemmesiden og kan hjælpe med Google Virksomhedsprofil og lokale landingssider.",
      },
    ],
    related: [
      { href: "/webbureau-midtjylland", title: "Webbureau Midtjylland", desc: "Hjemmesider til hele regionen." },
      { href: "/webbureau-aarhus", title: "Webbureau Aarhus", desc: "Hjemmesider til virksomheder i Aarhus." },
      ...relatedCore.slice(0, 1),
    ],
  },
  {
    slug: "webbureau-aarhus",
    type: "service",
    title: "Webbureau Aarhus – hjemmesider til fast pris | WebHjerte",
    description:
      "Webbureau til virksomheder i Aarhus: hjemmesider fra 2.500 kr, lokal SEO og direkte kontakt. Baseret i Horsens, ca. 45 minutter væk.",
    keywords: ["webbureau Aarhus", "webdesign Aarhus", "webdesign århus", "billig hjemmeside Aarhus", "hjemmeside Aarhus"],
    name: "Webbureau Aarhus",
    serviceType: "Webbureau",
    eyebrow: "Webbureau · Aarhus",
    h1: "Webbureau til virksomheder i Aarhus",
    intro:
      "Du behøver ikke et dyrt bureau midt i Aarhus for at få en god hjemmeside. Jeg sidder i Horsens, kender Østjylland og leverer professionelle hjemmesider til fast pris – ofte klar på 2–10 dage.",
    summary:
      "WebHjerte hjælper virksomheder i Aarhus med hjemmesider, SEO og AI-synlighed til fast pris fra 2.500 kr. Jeg er baseret i Horsens, cirka 45 minutter fra Aarhus, og arbejder online eller ved fysiske møder, når det giver mening.",
    city: "aarhus",
    facts: [
      { num: "ca. 45 min", label: "Fra Horsens til Aarhus" },
      { num: "Direkte", label: "Kontakt med den, der bygger" },
      { num: "48 timer", label: "Til første designudkast" },
    ],
    sections: [
      {
        h2: "Hjemmeside i Aarhus: stor by, hård konkurrence",
        paragraphs: [
          "Aarhus er Danmarks næststørste by, og online er konkurrencen derefter. Søger en kunde efter “frisør Aarhus”, “VVS Aarhus” eller “restaurant Aarhus C”, vælger Google blandt hundredvis af virksomheder. Det er derfor ikke nok at have en hjemmeside – den skal være hurtig, tydelig og bygget til lokale søgninger.",
          "Jeg designer sider, hvor de vigtigste informationer er synlige med det samme: hvad du tilbyder, hvor du holder til, hvad det koster, og hvordan man kontakter dig. Besøgende i en storby har travlt, og siden skal arbejde for dig på få sekunder."
        ],
        visual: { name: "isbjerget", caption: "Isbjerget på Aarhus Ø – Aarhus vokser ud mod vandet" },
        callout: {
          tone: "tip",
          title: "Tænk i bydele",
          text: "I en storby søger mange på bydel eller postnummer – fx Aarhus C, Aarhus N eller Viby J. Skriv de bydele, du dækker, på din side, så du også findes på de mere præcise søgninger.",
        },
      },
      {
        h2: "Sådan søger kunderne i Aarhus",
        paragraphs: [
          "Aarhus-kunder er vant til mange valgmuligheder. De søger hurtigt, sammenligner to-tre resultater og vælger den, der svarer tydeligst. Eksemplerne her er typiske søgninger – de viser, hvad din side skal kunne svare på.",
        ],
        visual: { name: "search-typing", queries: ["frisør Aarhus C", "VVS Aarhus", "webbureau Aarhus", "restaurant Aarhus", "tandlæge Aarhus N"], caption: "Eksempler på lokale søgninger i Aarhus" },
        cards: [
          { title: "Ydelse + bydel", tag: "Præcis", text: "'Frisør Aarhus C', 'tømrer Viby J'. Jo mere præcis søgningen er, jo tættere på et køb er kunden." },
          { title: "I nærheden – lige nu", tag: "Mobil", text: "Mange søger på farten. Åbningstider, adresse og et telefonnummer, der kan trykkes på, afgør, om de vælger dig." },
          { title: "Sammenligning", tag: "Mange valg", text: "Kunden har flere faner åbne. Tydelige priser, anmeldelser og billeder af dit arbejde gør dig til det lette valg." },
          { title: "Spørgsmål til AI", tag: "Nyt", text: "Flere spørger ChatGPT eller Googles AI om anbefalinger. Klare svar på din hjemmeside og en opdateret Google-profil øger chancen for at blive nævnt." },
        ],
      },
      {
        h2: "Hvorfor vælge et webbureau fra Horsens?",
        bullets: [
          "Samme kvalitet som bureauer i Aarhus, men uden store byoverhead i prisen.",
          "Direkte kontakt med udvikleren – ingen account managers.",
          "Fast pris og klar tidsplan fra dag ét.",
          "Cirka 45 minutter fra Aarhus, når et fysisk møde giver værdi.",
          "Online workflow, så du kan godkende design og rettelser, når det passer dig.",
        ],
      },
      {
        h2: "Brancher i Aarhus, jeg hjælper",
        paragraphs: [
          "Mange af mine opgaver kommer fra lokale servicevirksomheder, men jeg bygger til alle brancher, der har brug for at blive fundet. Her er de mest almindelige – med konkrete råd:",
        ],
        cards: [
          { title: "Restauranter og caféer", tag: "Branche", text: "Menu som tekst, booking og egen bestilling – vigtigt i en by med mange spisesteder.", href: "/hjemmeside-til-restauranter", cta: "Se rådene" },
          { title: "Saloner og klinikker", tag: "Branche", text: "Online booking, prisliste og billeder, der får nye kunder til at vælge dig.", href: "/kontakt", cta: "Få et tilbud" },
          { title: "Håndværkere", tag: "Branche", text: "VVS, el og tømrer: ydelser, områder og en nem vej til tilbud.", href: "/hjemmeside-til-haandvaerkere", cta: "Se rådene" },
          { title: "Webshops og detailhandel", tag: "Løsning", text: "Små webshops, der er nemme at drive – og hurtige at handle i.", href: "/webshop-hjemmeside", cta: "Læs om webshops" },
        ],
      },
      {
        h2: "Lokal SEO i Aarhus",
        paragraphs: [
          "En del af arbejdet er at sikre, at Google forstår, at du hører til i Aarhus. Det gør jeg med lokale oplysninger i markup, tydelig omtale af bydele og opland, en optimeret Google Virksomhedsprofil og indhold, der svarer på spørgsmål, kunder faktisk stiller.",
          "Vil du i toppen for søgninger som “[ydelse] Aarhus”, er der som regel brug for både en god hjemmeside og løbende arbejde med indhold og omtaler. Jeg fortæller ærligt, hvor realistisk din målsætning er, og hvad det kræver."
        ],
        visual: { name: "localpack", caption: "Googles kortresultater – her vælger mange Aarhus-kunder" },
        steps: [
          { title: "Google Virksomhedsprofil", text: "Rigtig kategori, bydele som serviceområde, billeder og svar på anmeldelser." },
          { title: "Sider pr. ydelse og bydel", text: "Egne sider, hvor det giver mening – med eget indhold, ikke kopier." },
          { title: "Omtaler og anmeldelser", text: "Lokale omtaler og nye anmeldelser holder dig synlig i en by med hård konkurrence." },
        ],
        cta: { href: "/seo-horsens", label: "Læs om lokal SEO" },
      },
      {
        h2: "Hvad koster det?",
        paragraphs: [
          "Priserne ligger fast og er de samme, uanset om du sidder i Aarhus eller Horsens. Du får et konkret, fast tilbud inden for 24 timer, når jeg har hørt om dit projekt.",
        ],
        cta: { href: "/hjemmeside-pris", label: "Se prisguiden" },
      },
    ],
    faqs: [
      { q: "Har I kontor i Aarhus?", a: "Nej, jeg er baseret i Horsens. Cirka 45 minutter fra Aarhus kan jeg komme ud ved behov, og ellers foregår alt online." },
      { q: "Er I billigere end bureauer i Aarhus?", a: "Ofte ja, fordi jeg ikke har dyre kontorer eller lange led af projektledere. Du betaler for selve arbejdet." },
      { q: "Kan I lave en hjemmeside til min Aarhus-virksomhed på under en uge?", a: "Ja, en landingside tager typisk ca. 2 dage og en Basis-hjemmeside ca. 5 dage, når tekst og billeder er klar." },
    ],
    related: [
      { href: "/webbureau-jylland", title: "Webbureau Jylland", desc: "Hele Jylland dækket online." },
      { href: "/webdesign-horsens", title: "Webdesign Horsens", desc: "Hjemmesider fra Horsens-baseret webdesigner." },
      ...relatedCore.slice(0, 1),
    ],
  },
  {
    slug: "webbureau-vejle",
    type: "service",
    title: "Webbureau Vejle – hjemmesider fra 2.500 kr | WebHjerte",
    description:
      "Webbureau til virksomheder i Vejle og trekantsområdet: Fredericia, Kolding og Horsens. Hjemmesider til fast pris, SEO og direkte kontakt med udvikleren.",
    keywords: ["webbureau Vejle", "webdesign Vejle", "hjemmeside Vejle", "webbureau Kolding", "webbureau Fredericia"],
    name: "Webbureau Vejle",
    serviceType: "Webbureau",
    eyebrow: "Webbureau · Vejle",
    h1: "Webbureau i Vejle og trekantsområdet",
    intro:
      "Vejle ligger 25 minutter fra Horsens, og mange af mine kunder findes i hele trekantsområdet. Jeg bygger hurtige hjemmesider til fast pris, med lokal SEO og direkte kontakt til udvikleren.",
    summary:
      "WebHjerte er et webbureau med base i Horsens, ca. 25–30 minutter fra Vejle. Jeg bygger hjemmesider til virksomheder i Vejle, Fredericia, Kolding og omegn fra 2.500 kr, med levering på 2–10 dage. Et eksempel i porteføljen er Lønbæks Køreskole i Vejle.",
    city: "vejle",
    facts: [
      { num: "25–30 min", label: "Fra Horsens til Vejle" },
      { num: "Trekanten", label: "Vejle, Fredericia og Kolding" },
      { num: "48 timer", label: "Til første designudkast" },
    ],
    sections: [
      {
        h2: "Fra Horsens til Vejle: 25 minutter og en fjord",
        paragraphs: [
          "Jeg sidder i Horsens, og Vejle er min nærmeste store nabo mod syd. Fra Horsens følger du E45 sydpå, over Vejlefjordbroen, og er i Vejle på cirka 25–30 minutter. Det betyder, at jeg både kan arbejde med dig online og – hvis det giver mening – mødes med dig ansigt til ansigt.",
          "Vejle er en by i vækst med et stærkt erhvervsliv, en travl havn og et tæt samspil med resten af trekantsområdet. Kunderne søger lokalt, og de forventer at kunne se ydelser, priser og kontaktoplysninger på få sekunder. Min opgave er at gøre din virksomhed nem at finde og nem at vælge.",
        ],
        visual: { name: "boelgen", caption: "Bølgen ved Vejle Havn – et af byens mest kendte vartegn" },
        callout: {
          tone: "fact",
          title: "Godt at vide",
          text: "Du behøver ikke komme til Horsens. Kickoff, designgodkendelse og rettelser foregår på video, telefon og mail – og skal vi mødes, kommer jeg gerne forbi.",
        },
      },
      {
        h2: "Sådan søger virksomheder og kunder i Vejle",
        paragraphs: [
          "Lokale søgninger følger et fast mønster: en ydelse plus et stednavn. Eksemplerne herunder er typiske formuleringer – og det er dem, din hjemmeside skal kunne svare på, hvis du vil findes af kunder i Vejle.",
        ],
        visual: { name: "search-typing", queries: ["webbureau Vejle", "hjemmeside Vejle", "VVS Vejle", "frisør Vejle", "køreskole Vejle"], caption: "Eksempler på lokale søgninger – ydelse plus by" },
        cards: [
          { title: "Ydelse + by", tag: "Mest almindelig", text: "'Elektriker Vejle', 'tømrer Vejle'. Kunden ved, hvad de har brug for, og vælger blandt de første resultater." },
          { title: "I nærheden", tag: "Mobil", text: "Søgninger fra telefonen på farten. Her afgør Google Virksomhedsprofil og en hurtig side, om du kommer med." },
          { title: "Pris og anmeldelser", tag: "Sammenligning", text: "Kunderne tjekker, hvad noget koster, og hvad andre mener, før de ringer. Det skal stå klart på din side." },
          { title: "Sammenligning af leverandører", tag: "Større køb", text: "'Webbureau Vejle', 'hjemmeside pris Vejle'. Her vinder dem, der svarer ærligt og konkret." },
        ],
      },
      {
        h2: "Brancher, jeg bygger til i og omkring Vejle",
        paragraphs: [
          "Jeg arbejder med små og mellemstore virksomheder på tværs af brancher. I min portefølje finder du blandt andet Lønbæks Køreskole i Vejle. Her er de brancher, jeg oftest bygger til – med egne sider med konkrete råd:",
        ],
        cards: [
          { title: "Håndværkere", tag: "Branche", text: "VVS, el, tømrer og maler: ydelser, område, billeder og en nem vej til tilbud.", href: "/hjemmeside-til-haandvaerkere", cta: "Se rådene" },
          { title: "Køreskoler og undervisning", tag: "Case i Vejle", text: "Se, hvordan Lønbæks Køreskole i Vejle fik en side, der viser værdien i grundig undervisning – og leder eleven frem til den første køretime.", href: "/portefolje/loenbaeks-koereskole", cta: "Se casen" },
          { title: "Saloner og klinikker", tag: "Branche", text: "Booking, prisliste og billeder, der får nye kunder til at vælge dig.", href: "/kontakt", cta: "Få et tilbud" },
          { title: "Restauranter og caféer", tag: "Branche", text: "Menu som tekst, booking og egen bestilling – uden at betale kommission.", href: "/hjemmeside-til-restauranter", cta: "Se rådene" },
        ],
      },
      {
        h2: "Lokal synlighed i Vejle: tre ting, der flytter mest",
        paragraphs: [
          "Når kunder i Vejle søger efter dig, ser de ofte først Googles kortresultater. Derfor starter jeg med det, der giver mest effekt for en lokal virksomhed:",
        ],
        visual: { name: "localpack", caption: "Googles kortresultater: sådan kan din virksomhed stå øverst" },
        steps: [
          { title: "Google Virksomhedsprofil i orden", text: "Rigtig kategori, ydelser, åbningstider, billeder og Vejle som serviceområde. Svar på alle anmeldelser." },
          { title: "En side pr. ydelse – med Vejle i teksten", text: "Hver ydelse får sin egen side med egne ord, så du findes på de konkrete søgninger i stedet for én samlet 'ydelser'-side." },
          { title: "Anmeldelser fra kunder i området", text: "Bed om en anmeldelse, når en opgave er færdig. Lokale anmeldelser betyder meget for placeringen i kortet." },
        ],
      },
      {
        h2: "Trekantsområdet: Vejle, Fredericia og Kolding",
        paragraphs: [
          "Mange virksomheder i området betjener kunder på tværs af de tre byer. Derfor bygger jeg sider med serviceområde, ikke kun én adresse: du kan omtale alle de byer, du dækker, uden at ende med tynde duplikatsider. Det styrker din lokale synlighed og giver kunderne et klart billede af, hvor du kommer.",
        ],
        bullets: [
          "Vejle og omegn: Børkop, Give, Egtved, Jelling og Bredsten.",
          "Fredericia og Middelfart.",
          "Kolding og Christiansfeld.",
          "Horsens og Hedensted – mit hjemmemarked.",
        ],
      },
      {
        h2: "Hvad får du som kunde i Vejle?",
        bullets: [
          "Fast pris og aftalt tidsplan.",
          "Responsivt design, der virker på mobil, tablet og desktop.",
          "Basis-SEO i alle pakker, så Google forstår din side.",
          "Kontaktformularer, Google Maps og klik-for-at-ringe.",
          "30 dages support efter lancering.",
          "Mulighed for WordPress, hvis du selv vil redigere indholdet.",
        ],
        after: [
          "Jeg prissætter efter omfang – ikke efter timer – og du får et fast tilbud, før vi går i gang. Alle priser står i prisguiden.",
        ],
        cta: { href: "/hjemmeside-pris", label: "Se prisguiden" },
      },
    ],
    faqs: [
      { q: "Arbejder I med virksomheder i Vejle?", a: "Ja. Jeg arbejder med virksomheder i Vejle, Fredericia, Kolding og hele Jylland. Alt kan foregå online." },
      { q: "Hvor hurtigt kan en hjemmeside være klar?", a: "En landingside ca. 2 dage, Basis ca. 5 dage og Standard ca. 10 dage – når indhold og billeder er klar." },
      { q: "Kan jeg få en hjemmeside, jeg selv kan redigere?", a: "Ja. Jeg bygger i WordPress, hvis du vil kunne rette tekster og billeder selv." },
    ],
    related: [
      { href: "/webbureau-jylland", title: "Webbureau Jylland", desc: "Hele Jylland dækket online." },
      { href: "/webbureau-aarhus", title: "Webbureau Aarhus", desc: "Hjemmesider til Aarhus-virksomheder." },
      { href: "/portefolje/loenbaeks-koereskole", title: "Case: Lønbæks Køreskole", desc: "Hjemmeside til køreskole i Vejle." },
    ],
  },
];
