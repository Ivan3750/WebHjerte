/**
 * Byer med egen, personlig side (se components/city/CityPage.jsx).
 * Alt indhold er skrevet til netop den by: bydele, søgninger, brancher, afstand og konkurrence.
 * Tal og steder er holdt til det, der er almindeligt kendt – ingen opdigtede kundetal.
 */
export const cities = {
  aarhus: {
    slug: "webbureau-aarhus",
    name: "Aarhus",
    path: "/webbureau-aarhus",
    serviceName: "Webbureau Aarhus",
    h1: "Webbureau til virksomheder i Aarhus",
    lead:
      "Aarhus er Danmarks næststørste by – og konkurrencen om Google-søgningen er derefter. Jeg bygger hjemmesider, der vinder de lokale søgninger fra Aarhus C til Brabrand, til fast pris og med en udvikler, der kun sidder 45 minutter væk.",
    secondary: { href: "/portefolje", label: "Se mine projekter" },

    // 1. Hero-kort: afstand og tempo
    distance: {
      title: "Din webudvikler, tæt på Aarhus",
      items: [
        { num: "45 min", label: "fra Horsens til Aarhus C – i bil eller med toget" },
        { num: "48 timer", label: "til du ser det første designudkast" },
        { num: "Samme pris", label: "som i Horsens – uden bykontor i regningen" },
      ],
    },

    // 2. Byen i tal
    stats: {
      title: ["Aarhus i tal –", "og hvad de betyder for din side"],
      lead: "En storby gør din hjemmeside både mere værd og sværere at blive set på. Det er de fire ting, jeg altid tænker ind.",
      items: [
        { text: "Nr. 2", label: "Danmarks næststørste by", meaning: "Mange virksomheder kæmper om de samme søgninger. Små detaljer afgør, hvem der får opkaldet." },
        { to: 360000, suffix: "+", label: "indbyggere i Aarhus Kommune", meaning: "Flere mulige kunder lige ved siden af dig – hvis Google viser dig, og siden er let at forstå." },
        { to: 35000, suffix: "+", label: "studerende på Aarhus Universitet", meaning: "Byens yngre kunder søger og sammenligner på mobilen. En langsom side bliver forladt på få sekunder." },
        { text: "2017", label: "Europæisk kulturhovedstad", meaning: "Aarhus er vant til oplevelser og godt design. Din side skal føles gennemtænkt, ikke bare udfyldt." },
      ],
    },

    // 3. Bydele
    districts: {
      title: ["Vælg din bydel –", "og se, hvad kunderne leder efter"],
      lead: "I en storby søger folk på kvarter, ikke kun på by. Her er, hvordan jeg skriver til de enkelte dele af Aarhus.",
      items: [
        {
          name: "Aarhus C",
          area: "Latinerkvarteret, Åboulevarden og Møllestien",
          search: "frisør Aarhus C eller restaurant Åboulevarden",
          who: "Studerende, turister og folk på arbejde i midtbyen. Mange søger fra mobilen, mens de går forbi.",
          tip: "Gadenavn og 'midt i Latinerkvarteret' skal stå i første afsnit, og åbningstiderne helt øverst.",
        },
        {
          name: "Aarhus Ø",
          area: "Isbjerget, havnen og de nye kvarterer",
          search: "brunch Aarhus Ø eller fysioterapeut Aarhus Ø",
          who: "Nye beboere og virksomheder, der lige er flyttet ind. De kender ikke de lokale endnu og googler alt.",
          tip: "Vær helt præcis med adresse og vej ind – nye kvarterer er svære at finde, og første indtryk betyder meget.",
        },
        {
          name: "Aarhus N",
          area: "Risskov, Skejby, Trøjborg og Lystrup",
          search: "VVS Risskov eller tømrer Lystrup",
          who: "Familier og pendlere i villakvartererne. Håndværkere bliver spurgt på tværs af kvarterer, så anbefalinger tæller.",
          tip: "Nævn de kvarterer, du kører til, og vis arbejde fra området – det får folk til at tænke 'han kender min gade'.",
        },
        {
          name: "Viby J",
          area: "Viby, Hasselager og Skæring",
          search: "autoværksted Viby J eller frisør Hasselager",
          who: "Folk, der vil have noget i nærheden og helst slippe for midtbyen. De vælger ofte den, der er nemmest at nå.",
          tip: "Fortæl, hvor let man kommer til dig, og om der er parkering. Det afgør mere, end man skulle tro.",
        },
        {
          name: "Højbjerg",
          area: "Marselisborg, Moesgaard og Højbjerg",
          search: "fysioterapeut Højbjerg eller maler Marselisborg",
          who: "Boligejere med store huse og høje forventninger. De læser anmeldelser, før de ringer.",
          tip: "Anmeldelser og referencer fra området er guld her. Vis dem tydeligt, ikke gemt nederst på siden.",
        },
        {
          name: "Brabrand og Aarhus V",
          area: "Brabrand, Åbyhøj, Gellerup og Tilst",
          search: "mekaniker Brabrand eller revisor Aarhus V",
          who: "En blandet del af byen med mange små erhverv og meget handel. Her kigger folk først på pris og åbningstid.",
          tip: "Pris og åbningstid skal stå, før man scroller. Korte tekster og et telefonnummer, der kan trykkes på.",
        },
      ],
    },

    // 4. Det aarhusianerne tjekker
    checks: {
      title: ["Fire ting tjekker aarhusianerne,", "før de ringer til dig"],
      lead: "Jeg bygger din side, så den består alle fire tests i løbet af de første sekunder.",
      items: [
        { title: "Ligger du i mit kvarter?", text: "Bydelen står i første linje. Ikke 'Aarhus' i det hele, men Risskov, Viby eller Aarhus C – præcis dér, hvor kunden søger." },
        { title: "Kan jeg se prisen?", text: "I en by med mange valg dropper folk den, de ikke kan regne på. Priser eller 'fra'-priser står, hvor man leder efter dem." },
        { title: "Hvad siger de andre?", text: "Anmeldelser og billeder af dit arbejde er din bedste sælger. De hentes ind på siden og holdes opdateret." },
        { title: "Virker det på mobilen?", text: "Mange søger i Letbanen, på cyklen eller i bybussen. Siden skal indlæses hurtigt og kunne bruges med én hånd." },
      ],
    },

    // 5. Brancher
    industries: {
      title: ["Aarhus-brancher,", "jeg bygger til"],
      lead: "Samme by, helt forskellige kunder. Derfor får hver branche sin egen tilgang.",
      items: [
        { title: "Caféer og restauranter", text: "Latinerkvarteret og Aarhus Ø er fulde af spisesteder. Din side skal vise menu, stemning og booking med det samme – og give gæsterne en grund til at bestille direkte hos dig.", href: "/hjemmeside-til-restauranter", cta: "Se restaurantløsningen" },
        { title: "Håndværkere", text: "Aarhus bygges og renoveres hele tiden. Kunderne googler 'tømrer' eller 'VVS' og vælger den, der svarer hurtigt og viser sit arbejde. Jeg bygger til opkald og tilbud.", href: "/hjemmeside-til-haandvaerkere", cta: "Se håndværkerløsningen" },
        { title: "Klinikker og saloner", text: "Fysioterapeuter, frisører og kosmetologer lever af tillid og faste tider. Online booking, tydelige priser og rigtige billeder gør det let at vælge dig.", href: "/hjemmeside-til-saloner", cta: "Se salonløsningen" },
        { title: "Kreative, IT og start-ups", text: "Katrinebjerg og Navitas er fulde af dygtige virksomheder. Din side skal vise, at I er seriøse – også over for dem, I gerne vil rekruttere.", href: "/skraeddersyede-hjemmesider", cta: "Se skræddersyede sider" },
      ],
    },

    // 6. Samarbejde Horsens ↔ Aarhus
    collab: {
      title: ["Fra Horsens til Aarhus –", "sådan foregår samarbejdet"],
      lead: "Jeg sidder i Horsens, men du mærker det ikke som afstand. Det meste klares på video, og ellers tager jeg gerne toget til Aarhus H.",
      steps: [
        { when: "Dag 0", title: "Første snak", text: "Video fra din stol – eller en kop kaffe i Aarhus C, hvis du hellere vil. Ingen forpligtelser." },
        { when: "Dag 2", title: "Dit designudkast", text: "Du ser noget konkret efter 48 timer. Passer det ikke, betaler du 0 kr for designet." },
        { when: "Dag 5–10", title: "Din side går live", text: "Tests på mobil og computer, lokal SEO sat op og klar til de første kunder." },
        { when: "Bagefter", title: "Jeg er stadig tæt på", text: "30 dages support er med, og jeg er 45 minutter væk, hvis noget skal ses på stedet." },
      ],
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
        { topic: "Lokal viden", agency: "Standardløsninger til mange kunder på samme tid.", me: "Tekster om dine bydele, dine søgninger og dine konkurrenter i Aarhus." },
        { topic: "Hvem svarer?", agency: "Sælger, projektleder og så udvikleren.", me: "Mig – den, der bygger din side. Svar samme dag." },
      ],
    },

    // 8. Lokal SEO
    seo: {
      title: ["Sådan bliver du fundet", "i Aarhus"],
      lead: "En flot side hjælper ikke, hvis ingen finder den. Det her gør jeg, så Google forstår, at du hører til i Aarhus.",
      items: [
        { n: "01", title: "Din bydel først", text: "Hver side fortæller, hvilke kvarterer du dækker – Aarhus C, N, V, Viby og Højbjerg – med egne ord, ikke kopieret tekst." },
        { n: "02", title: "Google Virksomhedsprofil", text: "Rigtig kategori, serviceområder, billeder og svar på anmeldelser. Det er det første, mange aarhusianere ser." },
        { n: "03", title: "Én side pr. ydelse og bydel", text: "Hvor det giver mening, får hver ydelse sin egen side med eget indhold. Det er sådan, du slår de store." },
        { n: "04", title: "Omtaler og anmeldelser", text: "En enkel rutine, der giver dig nye anmeldelser løbende – de holder dig synlig i en by med hård konkurrence." },
      ],
      cta: { href: "/seo-horsens", label: "Læs mere om lokal SEO" },
    },

    formTitle: "Skal din virksomhed i Aarhus have en hjemmeside, der virker?",
    formDescription: "Skriv til mig, så får du et fast tilbud inden for 24 timer – og et konkret bud på, hvordan du kan blive set i netop dit kvarter.",
    breadcrumb: "Webbureau Aarhus",
  },
};

export const getCity = (key) => cities[key] || null;
