/**
 * Byer med egen, personlig side (se components/city/CityPage.jsx).
 * Fokus er virksomhedens resultat – kunder, Google, tillid og økonomi – ikke fakta om byen.
 * Bynavn, bydele og eksempler gør siden personlig; alt andet handler om, hvad en hjemmeside skal kunne.
 */
export const cities = {
  aarhus: {
    slug: "webbureau-aarhus",
    name: "Aarhus",
    path: "/webbureau-aarhus",
    serviceName: "Webbureau Aarhus",
    breadcrumb: "Webbureau Aarhus",

    // 1. Hero
    h1: "Webbureau til virksomheder i Aarhus",
    lead:
      "Din hjemmeside skal ikke bare se godt ud – den skal få telefonen til at ringe. Jeg bygger sider til Aarhus-virksomheder, der bliver fundet på Google, overbeviser på mobilen og betaler sig hjem.",
    secondary: { href: "/portefolje", label: "Se mine projekter" },
    aside: {
      title: "Det får du som Aarhus-virksomhed",
      items: [
        { num: "Fra 2.500 kr", label: "fast pris – du kender regningen, før vi går i gang" },
        { num: "48 timer", label: "til du ser det første designudkast – 0 kr, hvis det ikke passer" },
        { num: "45 min", label: "fra Horsens – jeg kommer gerne til Aarhus, når det giver værdi" },
      ],
    },

    // 2. Editorial
    editorial: {
      title: ["I Aarhus bliver du ikke valgt", "på din adresse – men på Google"],
      paragraphs: [
        "Der er mange dygtige virksomheder i samme branche i Aarhus. Kunden kender dem ikke – så hun søger, sammenligner tre resultater på mobilen og ringer til den, der virker mest troværdig og er nemmest at få fat i.",
        "Det gør din hjemmeside til din vigtigste sælger. Den arbejder, mens du arbejder: Den fortæller, hvad du laver, hvad det koster og hvordan man kontakter dig – på under fem sekunder.",
        "Min opgave er at bygge den side. Ikke et pænt visitkort, men et værktøj, der hver uge flytter flere henvendelser til din indbakke.",
      ],
      punch: ["Tre resultater.", "Fem sekunder.", "Ét opkald."],
    },

    // 3. Google-simulator
    serp: {
      title: ["Sådan ryger du fra plads 6", "til plads 1 på Google"],
      lead: "Vælg din branche og din bydel – og slå forbedringerne til én ad gangen. Se, hvad der flytter dig, når kunden søger i Aarhus.",
      branches: ["frisør", "VVS", "restaurant", "tandlæge", "revisor"],
      districts: ["Aarhus C", "Aarhus N", "Viby J", "Højbjerg", "Brabrand"],
      improvements: [
        { key: "district", title: "Bydel i overskrift og tekst", text: "Siden skriver tydeligt, hvor du holder til og hvilke kvarterer du dækker." },
        { key: "reviews", title: "Google-profil med anmeldelser", text: "Din profil er udfyldt, har billeder og stjerner – og du svarer på anmeldelser." },
        { key: "speed", title: "Hurtig og mobilvenlig side", text: "Siden åbner på et splitsekund, også på 4G i Letbanen." },
        { key: "action", title: "Pris og klik-for-at-ringe", text: "Kunden kan se en pris og ringe med ét tryk – uden at lede efter et nummer." },
      ],
    },

    // 4. Tre ting en side skal gøre (skiftevis venstre/højre)
    pillars: {
      title: ["Tre ting, din side skal gøre", "for din virksomhed"],
      items: [
        {
          n: "01",
          title: "Få telefonen til at ringe",
          text: "De fleste besøgende bestemmer sig på få sekunder. Derfor er der en tydelig knap til at ringe eller bede om et tilbud, hvor tommelfingeren er – ikke på en kontaktside, man skal lede efter.",
          example: { label: "Eksempel · tømrer i Risskov", text: "“Ring nu”-knap øverst på mobilen og “få et tilbud på 1 minut” i stedet for en lang formular. Flere henvendelser fra de samme besøgende." },
        },
        {
          n: "02",
          title: "Vise, at man kan stole på dig",
          text: "Kunden kender dig ikke. Rigtige billeder af dit arbejde, anmeldelser, tydelige priser og et ansigt gør, at de vælger dig frem for en, der ser billigere ud.",
          example: { label: "Eksempel · klinik på Aarhus Ø", text: "Billeder af teamet, faste priser og Google-anmeldelser lige ved bookingknappen. Kunden behøver ikke tænke sig om." },
        },
        {
          n: "03",
          title: "Blive fundet, når kunden søger",
          text: "En side, ingen finder, er spildt. Jeg bygger siden, så Google forstår, hvad du laver, og hvor du hører til – på bydel, ikke kun på by.",
          example: { label: "Eksempel · restaurant på Aarhus C", text: "Egen side til “brunch Aarhus C”, åbningstider direkte i Google og en profil, der svarer på anmeldelser." },
        },
      ],
    },

    // 5. Brancher (bento)
    industries: {
      title: ["Hvad siden skal gøre", "i din branche"],
      lead: "Samme by, helt forskellige kunder. Derfor får hver branche sin egen opbygning.",
      big: {
        title: "Håndværkere",
        text: "Aarhus bygges og renoveres hele tiden, og kunderne googler “tømrer”, “VVS” eller “elektriker” med det samme. Siden skal vise, hvad du kan, hvor du kører, og hvordan man får et tilbud – på mobilen, mens de står med problemet.",
        goal: "Mål: flere tilbudsforespørgsler",
        href: "/hjemmeside-til-haandvaerkere",
        cta: "Se håndværkerløsningen",
      },
      small: [
        { title: "Restauranter og caféer", text: "Menu, stemning og bordbestilling med det samme – og egen bestilling i stedet for gebyrer til platforme.", goal: "Mål: flere direkte bookinger", href: "/hjemmeside-til-restauranter", cta: "Se restaurantløsningen" },
        { title: "Klinikker og saloner", text: "Online booking, faste priser og rigtige billeder. Tillid sælger, når det handler om krop og udseende.", goal: "Mål: fyldte kalendere", href: "/hjemmeside-til-saloner", cta: "Se salonløsningen" },
      ],
      wide: {
        title: "Kreative, IT og start-ups",
        text: "Din side skal bevise, at I er seriøse – over for kunder, investorer og dem, I gerne vil ansætte. Skræddersyet design, hurtig kode og plads til at vokse.",
        goal: "Mål: troværdighed og rekruttering",
        href: "/skraeddersyede-hjemmesider",
        cta: "Se skræddersyede sider",
      },
    },

    // 6. Hjemtjent-beregner
    breakeven: {
      title: ["Hvornår har siden", "betalt sig hjem?"],
      lead: "Fortæl, hvad en ny kunde er værd for dig, og vælg en pakke. Så ser du, hvor få kunder der skal til.",
    },

    // 7. Sammenligning
    compare: {
      title: ["Aarhus-bureau eller", "udvikler fra Horsens?"],
      lead: "Store bureauer i Aarhus er dygtige – men du betaler også for adressen. Her er forskellen i praksis.",
      agencyLabel: "Bureau i Aarhus",
      rows: [
        { topic: "Hvor mødes vi?", agency: "På deres kontor – og du bruger tid på at komme derhen i myldretiden.", me: "På video fra din stol – eller jeg kommer til Aarhus C, når det giver værdi." },
        { topic: "Prisen", agency: "Husleje i Aarhus C og Aarhus Ø bliver en del af din regning.", me: "Fast pris fra 2.500 kr. Ingen bykontor i prisen." },
        { topic: "Første udkast", agency: "Efter uger – når projektlederen har fundet plads i kalenderen.", me: "Efter 48 timer. Passer det ikke, betaler du 0 kr for designet." },
        { topic: "Fokus", agency: "Flotte løsninger til mange kunder på samme tid.", me: "Din side bygges til at give dig henvendelser – og måles på dem." },
        { topic: "Hvem svarer?", agency: "Sælger, projektleder og så udvikleren.", me: "Mig – den, der bygger din side. Svar samme dag." },
      ],
    },

    // 8. Forløb (zig-zag)
    collab: {
      title: ["Fra første snak", "til din første nye kunde"],
      lead: "Jeg sidder i Horsens, men du mærker det ikke som afstand. Det meste klares på video, og ellers tager jeg toget til Aarhus H.",
      steps: [
        { when: "Dag 0", title: "Første snak", text: "Vi tager en uforpligtende snak – på video eller over en kop kaffe i Aarhus C. Jeg spørger ind til dine kunder, ikke til farver." },
        { when: "Dag 2", title: "Dit designudkast", text: "Du ser noget konkret efter 48 timer. Passer det ikke, betaler du 0 kr for designet." },
        { when: "Dag 5–10", title: "Siden går live", text: "Alt er testet på mobil og computer, og lokal SEO er sat op, så Google kan finde dig fra dag ét." },
        { when: "Bagefter", title: "Jeg er stadig tæt på", text: "30 dages support er med. Og skal noget ses på stedet, er jeg 45 minutter væk." },
      ],
    },

    formTitle: "Skal din virksomhed i Aarhus have flere kunder fra nettet?",
    formDescription: "Skriv til mig, så får du et fast tilbud inden for 24 timer – og et konkret bud på, hvordan din side kan give flere henvendelser.",
  },
};

export const getCity = (key) => cities[key] || null;
