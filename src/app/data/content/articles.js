import { aiArticles } from "./ai.js";

// Blogartikler og guides. Hver artikel bliver til /blog/<slug>.
// Skrevet i første person (Ivan), med konkrete eksempler og tal – ikke generiske punktlister.

const base = { published: "2026-11-06", updated: "2026-11-10" };

const own = [
  {
    ...base,
    slug: "ai-i-smaa-virksomheder-10-eksempler",
    title: "AI i små virksomheder: 10 eksempler, der virker | WebHjerte",
    description:
      "10 praktiske eksempler på AI i små virksomheder: chatbot, booking, tilbud, opfølgning og anmeldelser – og hvor du bør starte.",
    keywords: ["AI små virksomheder", "AI eksempler virksomhed", "AI chatbot", "AI automatisering", "kunstig intelligens virksomhed"],
    name: "AI i små virksomheder: 10 eksempler",
    category: "AI",
    h1: "AI i små virksomheder: 10 konkrete eksempler, der virker",
    intro:
      "Ingen buzzwords, ingen robotter, der overtager firmaet. Bare ti måder, hvorpå en lokal virksomhed kan spare tid og vinde flere kunder med AI allerede i dag.",
    summary:
      "De fleste små virksomheder har ikke brug for “en AI-strategi”. De har brug for at slippe for de samme fem spørgsmål i telefonen hver dag, at følge op på tilbud uden at glemme det, og at blive fundet, når kunder spørger ChatGPT. Her er ti eksempler, jeg selv ville starte med – og hvordan du undgår de typiske fejl.",
    readMinutes: 9,
    sections: [
      {
        h2: "Først: hvad AI faktisk er godt til",
        paragraphs: [
          "Når jeg taler med håndværkere, frisører og butiksejere i Horsens, er den første reaktion på AI ofte skepsis. Og det er sundt. AI er ikke magi, og den skal ikke drive din forretning. Men den er rigtig god til én ting: opgaver, der gentager sig, og som følger nogenlunde de samme regler hver gang.",
          "Tænk på det sådan her: hvis du kan forklare en opgave til en ny elev på fem minutter, kan AI sandsynligvis også lære den. Hvis opgaven kræver erfaring, dømmekraft eller et godt øje for kunden, skal du stadig gøre den selv.",
        ],
        quote: "Start aldrig med teknologien. Start med den opgave, der stjæler mest af din tid.",
      },
      {
        h2: "De 10 eksempler",
        paragraphs: ["Eksemplerne er sorteret efter, hvor hurtigt de typisk giver en mærkbar forskel for en lille virksomhed."],
        subs: [
          { h3: "Chatbot til de mest stillede spørgsmål", paragraphs: ["Hvad koster det? Har I tid på fredag? Kører I også til Hedensted? En chatbot på hjemmesiden svarer med det samme – også klokken 22, når kunden faktisk sidder og overvejer. Du får færre afbrydelser og flere henvendelser, der allerede kender prisen."] },
          { h3: "Online booking med påmindelser", paragraphs: ["Kunden vælger selv en ledig tid, kalenderen opdateres automatisk, og der sendes en SMS dagen før. For frisører og klinikker betyder det typisk færre udeblivelser og mindre tid i telefonen."] },
          { h3: "Kvalificering af henvendelser", paragraphs: ["I stedet for en tom kontaktformular stiller AI et par opfølgende spørgsmål: hvad skal laves, hvornår, og hvad er budgettet? Du får en færdig oversigt og kan prioritere de opgaver, der passer dig."] },
          { h3: "Første udkast til tilbud og mails", paragraphs: ["AI skriver udkastet ud fra dine egne skabeloner og kundens oplysninger. Du læser igennem, retter og sender. Det, der før tog en halv time om aftenen, tager fem minutter."] },
          { h3: "Automatisk opfølgning på tilbud", paragraphs: ["Mange tilbud dør, fordi ingen følger op. En venlig påmindelse efter tre dage – sendt automatisk – er en af de billigste måder at vinde flere opgaver på."] },
          { h3: "Anmodning om Google-anmeldelser", paragraphs: ["Når opgaven er færdig, får kunden en kort besked med et direkte link til din Google-profil. Flere anmeldelser er et af de stærkeste signaler i lokal SEO."] },
          { h3: "Hjælp til tekster og opslag", paragraphs: ["AI er god til at komme i gang med et blogindlæg, en ydelsestekst eller et Facebook-opslag. Men tilføj altid dine egne erfaringer og eksempler – det er dem, kunderne (og Google) reagerer på."] },
          { h3: "Produkttekster i webshoppen", paragraphs: ["Har du 200 produkter, er AI en stor hjælp til at skrive ensartede beskrivelser og forslag til relaterede varer. Du kontrollerer, at mål og materialer er korrekte."] },
          { h3: "Kundeservice på flere sprog", paragraphs: ["Tyske turister, ukrainske tilflyttere eller engelsktalende kunder: AI kan svare på deres sprog, så du ikke mister dem, bare fordi hjemmesiden kun er på dansk."] },
          { h3: "Synlighed i ChatGPT og Google AI", paragraphs: ["Flere og flere spørger ChatGPT “hvem kan lave X i Horsens?”. Med klare svar på din hjemmeside, struktureret data og en opdateret Google-profil øger du chancen for at blive nævnt."], cta: { href: "/geo-ai-synlighed", label: "Læs om AI-synlighed" } },
        ],
      },
      {
        h2: "Hvad koster det?",
        paragraphs: [
          "Det overrasker mange, hvor lidt det kan koste. Selve AI-tjenesterne koster ofte under 100–300 kr om måneden for en lille virksomhed. Den egentlige udgift er opsætningen: at tilpasse chatbotten til dine priser og ydelser, koble booking til din kalender eller sætte opfølgningen op, så den lyder som dig.",
          "Hos mig indgår AI-funktioner i skræddersyede løsninger fra 14.000 kr, og mindre opsætninger aftales til en fast pris efter en kort snak. Du får altid prisen, før jeg går i gang.",
        ],
      },
      {
        h2: "Sådan kommer du i gang – uden at det bliver et stort projekt",
        steps: [
          { title: "Find tidsslugeren", text: "Skriv i en uge ned, hvad du bruger tid på, som ikke direkte tjener penge. Typisk vinder telefonen, mails og tilbud." },
          { title: "Bestem rammerne", text: "Hvad må AI gøre selv, og hvad skal du godkende? En chatbot må gerne fortælle priser, men ikke love en dato, du ikke kan holde." },
          { title: "Start småt", text: "Tag de 20 spørgsmål, du oftest får, eller én proces. Det er nok til at se, om det virker." },
          { title: "Se på resultatet", text: "Efter en måned kigger vi på, hvad kunderne spurgte om, og hvor svarene kan blive bedre." },
        ],
      },
      {
        h2: "Det skal du passe på",
        paragraphs: ["AI er et værktøj, ikke en medarbejder, du kan glemme. De fire ting, jeg altid sætter op med kunderne:"],
        bullets: [
          "Kritiske ting – priser på store opgaver, aftaler, reklamationer – skal altid forbi et menneske.",
          "GDPR: kunden skal vide, hvad der sker med deres oplysninger, og data skal behandles i EU, hvor det er muligt.",
          "Vær ærlig: skriv, at kunden taler med en AI-assistent, og gør det nemt at få fat i dig.",
          "Hold oplysningerne opdaterede. En chatbot med sidste års priser gør mere skade end gavn.",
        ],
      },
      {
        h2: "Vil du have hjælp?",
        paragraphs: [
          "Jeg bygger AI-chatbots, booking, lead-kvalificering og små automatiseringer til virksomheder i Horsens og resten af Danmark. Fortæl mig, hvad der stjæler mest af din tid, så siger jeg ærligt, om AI kan hjælpe – og hvad det koster.",
        ],
        cta: { href: "/ai-loesninger", label: "Se AI-løsninger" },
      },
    ],
    faqs: [
      { q: "Er AI dyrt for små virksomheder?", a: "Nej, ikke nødvendigvis. Selve AI-tjenesterne koster ofte under 100–300 kr om måneden. Den største udgift er opsætningen, som hos WebHjerte aftales til fast pris." },
      { q: "Hvor skal jeg starte med AI?", a: "Med den opgave, der koster mest tid eller giver flest tabte kunder – typisk kundespørgsmål, booking eller opfølgning på tilbud." },
      { q: "Mister jeg kontrollen, hvis AI svarer kunderne?", a: "Nej, hvis løsningen er sat rigtigt op. Du bestemmer, hvad AI må svare på, og vigtige sager sendes altid videre til dig." },
      { q: "Kan AI erstatte en medarbejder?", a: "Sjældent helt. Men den kan fjerne de gentagne opgaver, så du og dine medarbejdere får tid til det arbejde, kunderne betaler for." },
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
    title: "Hvad koster en hjemmeside om året? | WebHjerte",
    description:
      "Ærligt overblik over de årlige udgifter: domæne, hosting, vedligeholdelse og værktøjer – med tre regneeksempler og tips til at spare.",
    keywords: ["hvad koster en hjemmeside om året", "hosting pris", "domæne pris", "hjemmeside abonnement", "hvad koster det at have en hjemmeside", "vedligeholdelse af hjemmeside"],
    name: "Hvad koster en hjemmeside om året?",
    category: "Priser",
    h1: "Hvad koster en hjemmeside om året?",
    intro:
      "Prisen på selve hjemmesiden er kun starten. Her er de løbende udgifter, du skal regne med – og hvor mange betaler alt for meget.",
    summary:
      "For en lille virksomhed koster en hjemmeside typisk 2.500–6.000 kr om året at have kørende: ca. 100–200 kr for et .dk-domæne, 0–500 kr om måneden for hosting og 195–395 kr om måneden, hvis du vil have nogen til at holde den opdateret. Det dyreste er sjældent teknikken – det er de abonnementer, man har glemt, man betaler for.",
    readMinutes: 7,
    sections: [
      {
        h2: "Hvorfor det er værd at regne efter",
        paragraphs: [
          "Når jeg kigger på nye kunders eksisterende hjemmesider, finder jeg næsten altid noget, de betaler for uden at vide det. Et premium-tema, der fornyes automatisk. Et backup-plugin, der aldrig er brugt. Et hostingabonnement til 400 kr om måneden for en side med 300 besøgende.",
          "Det er ikke store beløb hver for sig. Men over fem år bliver det let til 15.000–25.000 kr – mere, end mange har betalt for selve hjemmesiden.",
        ],
      },
      {
        h2: "De fire løbende udgifter",
        table: {
          head: ["Udgift", "Typisk beløb", "Det skal du vide"],
          rows: [
            ["Domæne", "100–200 kr/år", ".dk er billigst. Sørg for, at domænet står i dit navn – ikke bureauets."],
            ["Hosting", "0–500 kr/md", "Kodede sider kan ligge meget billigt. WordPress og webshops kræver mere."],
            ["Vedligeholdelse", "195–395 kr/md hos WebHjerte", "Opdateringer, sikkerhed, backup og små rettelser. Frivilligt."],
            ["Værktøjer", "0–300 kr/md", "Booking, nyhedsbrev, betalingsløsning eller premium-plugins."],
          ],
        },
      },
      {
        h2: "Tre regneeksempler",
        paragraphs: ["Her er tre typiske situationer, jeg ser hos små virksomheder. Alle beløb er inkl. moms og vejledende."],
        subs: [
          { h3: "Håndværker med 5 sider", paragraphs: ["En kodet hjemmeside uden løbende redigering. Domæne ca. 150 kr, hosting ca. 0–600 kr om året og ingen fast aftale – rettelser betales, når der er brug for dem."], bullets: ["Ca. 150–750 kr om året"] },
          { h3: "Frisør med WordPress og booking", paragraphs: ["WordPress, så salonen selv kan skifte priser og billeder, plus et bookingsystem. Hosting ca. 100 kr/md, booking ca. 200 kr/md og vedligeholdelse 195 kr/md."], bullets: ["Ca. 6.000 kr om året"] },
          { h3: "Lille webshop", paragraphs: ["En webshop med 100 varer kræver mere: Shopify-abonnement eller kraftigere hosting, betalingsløsning og jævnlige opdateringer. Vedligeholdelse 395 kr/md."], bullets: ["Ca. 8.000–12.000 kr om året + transaktionsgebyrer"] },
        ],
      },
      {
        h2: "Hvad får du for vedligeholdelse?",
        paragraphs: [
          "En hjemmeside er ikke en brochure, du trykker én gang. Software skal opdateres, sikkerhedshuller lukkes, og der skal tages backup. Især WordPress-sider, der ikke bliver opdateret, er et af de mest almindelige mål for hackere.",
          "Hos mig koster vedligeholdelse 195 eller 395 kr om måneden. Det dækker opdateringer, overvågning, backup og små rettelser – og du skriver direkte til mig, ikke til en supportkø. Du kan opsige fra måned til måned.",
        ],
        cta: { href: "/hosting-og-vedligeholdelse", label: "Se hosting og vedligeholdelse" },
      },
      {
        h2: "Sådan undgår du at betale for meget",
        bullets: [
          "Gå dine kontoudtog igennem og find alle abonnementer, der har med hjemmesiden at gøre.",
          "Tjek, at domæne og hosting står i dit eget navn, så du altid kan skifte leverandør.",
          "Spørg, om din side overhovedet har brug for WordPress. Mange små sider gør ikke.",
          "Vælg vedligeholdelse, der kan opsiges løbende – ikke en 36-måneders binding.",
          "Fjern plugins og værktøjer, du ikke bruger. Det sparer penge og gør siden hurtigere.",
        ],
      },
      {
        h2: "Hvad med hjemmesidebyggere?",
        paragraphs: [
          "Wix, Squarespace og lignende ser billige ud, fordi der ikke er nogen engangspris. Men du betaler typisk 100–400 kr om måneden, så længe siden findes – og du ejer den ikke. Stopper du betalingen, forsvinder hjemmesiden. Over tre år koster det ofte mere end en professionel side, du ejer selv.",
        ],
        cta: { href: "/blog/hvad-koster-en-hjemmeside-2026", label: "Se hvad en ny hjemmeside koster" },
      },
    ],
    faqs: [
      { q: "Hvad koster det at have en hjemmeside om året?", a: "For en lille virksomhed typisk 2.500–6.000 kr om året inkl. domæne, hosting og vedligeholdelse. En simpel kodet side uden fast aftale kan koste under 1.000 kr om året." },
      { q: "Hvad koster et .dk-domæne?", a: "Typisk 100–200 kr om året inkl. moms, afhængigt af udbyder." },
      { q: "Skal jeg have en vedligeholdelsesaftale?", a: "Det er ikke et krav, men anbefales til WordPress og webshops. Hos WebHjerte koster det 195–395 kr om måneden uden binding." },
      { q: "Hvad sker der, hvis jeg stopper med at betale for hosting?", a: "Hjemmesiden går offline. Derfor er det vigtigt, at du ejer domænet og har en kopi af siden, så den kan flyttes til en anden udbyder." },
    ],
    related: [
      { href: "/blog/hvad-koster-en-hjemmeside-2026", title: "Hvad koster en hjemmeside i 2026?", desc: "Priser på selve hjemmesiden." },
      { href: "/hosting-og-vedligeholdelse", title: "Hosting og vedligeholdelse", desc: "Fra 195 kr/md uden binding." },
      { href: "/hjemmeside-pris", title: "Hjemmeside priser", desc: "Faste pakker og prisberegner." },
    ],
  },
  {
    ...base,
    slug: "seo-tjekliste-lokale-virksomheder",
    title: "SEO-tjekliste for lokale virksomheder: 25 punkter | WebHjerte",
    description:
      "SEO-tjekliste til lokale virksomheder: teknik, indhold, Google Virksomhedsprofil og lokale signaler. Lav dit eget webtjek på en time.",
    keywords: ["seo tjekliste", "lokal seo", "seo tjek af hjemmeside", "seo horsens", "webtjek", "gratis seo tjek"],
    name: "SEO-tjekliste for lokale virksomheder",
    category: "SEO",
    h1: "SEO-tjekliste for lokale virksomheder: 25 punkter, du kan tjekke i dag",
    intro:
      "Det samme webtjek, jeg selv laver, når en ny kunde spørger, hvorfor de ikke kan findes på Google. Du skal bare bruge en mobil, en kop kaffe og en time.",
    summary:
      "Lokal SEO er mindre mystisk, end det lyder. Google vil vise den virksomhed, der tydeligst svarer på kundens søgning, ligger tæt på og ser troværdig ud. I praksis betyder det: en hurtig, mobilvenlig hjemmeside, én side pr. ydelse, en opdateret Google Virksomhedsprofil, ens kontaktoplysninger overalt og anmeldelser. Her er de 25 punkter, jeg går igennem.",
    readMinutes: 11,
    sections: [
      {
        h2: "Før du starter: søg på dig selv",
        paragraphs: [
          "Tag din mobil, åbn et privat vindue og søg på det, dine kunder ville søge på. Ikke dit firmanavn – det finder du altid. Søg på “tømrer Horsens”, “frisør Hedensted” eller “VVS Brædstrup”. Hvor ligger du? Ligger du i kortet? Hvad står der under dit navn?",
          "Skriv resultatet ned. Det er dit udgangspunkt, og det gør det meget nemmere at se, om dine ændringer virker om to måneder.",
        ],
      },
      {
        h2: "1. Teknik – fundamentet",
        paragraphs: ["Teknikken er ikke det sjoveste, men hvis den ikke er i orden, hjælper resten ikke. Det gode er, at det meste kun skal ordnes én gang."],
        bullets: [
          "Siden bruger https og har et gyldigt SSL-certifikat (hængelåsen i browseren).",
          "Den indlæses på under 2–3 sekunder på mobil. Test den gratis på PageSpeed Insights.",
          "Der findes kun én version af siden – www eller uden www – og den anden omdirigerer.",
          "Der er et sitemap, og det er indsendt i Google Search Console.",
          "robots.txt blokerer ikke vigtige sider, CSS eller scripts.",
          "Hver side har en canonical-tag, så Google ved, hvilken adresse der er den rigtige.",
          "Der er ingen døde links eller sider, der viser fejl 404.",
          "Siden virker på både iPhone og Android og i Safari og Chrome.",
        ],
      },
      {
        h2: "2. Indhold – det, Google faktisk læser",
        paragraphs: [
          "Den mest almindelige fejl, jeg ser, er én side, der hedder “Ydelser”, med ti ydelser i en liste. Google kan ikke se, at du laver tagrenovering i Horsens, hvis det kun står som ét ord i en punktopstilling. Hver vigtig ydelse fortjener sin egen side.",
        ],
        bullets: [
          "Hver ydelse har sin egen side med en tydelig overskrift (H1), fx “Tagrenovering i Horsens”.",
          "Sidens titel er ca. 50–60 tegn og indeholder ydelse + by.",
          "Meta-beskrivelsen er ca. 140–160 tegn og giver en grund til at klikke (pris, garanti, hurtig levering).",
          "Overskrifterne følger en logisk rækkefølge: H1 → H2 → H3.",
          "Teksten svarer på de spørgsmål, kunderne stiller dig i telefonen.",
          "Der er en FAQ med 5–10 rigtige spørgsmål.",
          "Billeder har beskrivende filnavne og alt-tekst – ikke “IMG_4021.jpg”.",
          "Siderne linker til hinanden, hvor det giver mening.",
          "Priser eller prisintervaller står tydeligt. Det giver flere klik og bedre henvendelser.",
        ],
      },
      {
        h2: "3. Lokale signaler – det, der får dig i kortet",
        paragraphs: [
          "Kortet øverst i Google (“local pack”) er der, hvor de fleste lokale kunder klikker. Her betyder din Google Virksomhedsprofil mere end selve hjemmesiden.",
        ],
        bullets: [
          "Din Google Virksomhedsprofil er oprettet, verificeret og udfyldt 100 %.",
          "Den rigtige hovedkategori er valgt – og relevante underkategorier.",
          "Navn, adresse og telefon (NAP) er skrevet præcis ens på hjemmesiden, i Google, på Facebook og i kataloger.",
          "Du beder aktivt om anmeldelser – og svarer på dem alle, også de dårlige.",
          "Hjemmesiden nævner naturligt de byer og områder, du arbejder i.",
          "Der er struktureret data (LocalBusiness) med adresse, telefon og åbningstider.",
          "Du er nævnt i relevante lokale kataloger og brancheforeninger.",
        ],
        quote: "Ti ærlige anmeldelser fra lokale kunder slår næsten altid et dyrt SEO-abonnement.",
      },
      {
        h2: "4. Måling og AI-synlighed",
        bullets: [
          "Google Search Console er sat op, og du kigger på søgninger og klik en gang om måneden.",
          "Du måler henvendelser (opkald, formularer) – ikke kun besøg.",
          "robots.txt tillader AI-crawlere, hvis du vil kunne nævnes i ChatGPT og Google AI.",
          "Dine vigtigste sider har et kort, klart svar øverst og en FAQ.",
        ],
      },
      {
        h2: "Sådan prioriterer du",
        paragraphs: [
          "Du behøver ikke gøre det hele på én gang. Hvis jeg skulle vælge rækkefølgen for en lille virksomhed, ville det være sådan her:",
        ],
        steps: [
          { title: "Google Virksomhedsprofil", text: "Udfyld den helt, tilføj billeder og bed dine fem seneste kunder om en anmeldelse. Det er gratis og giver ofte den hurtigste effekt." },
          { title: "Teknikken", text: "Https, hastighed og mobil. Kan du ikke selv rette det, er det her, en udvikler er pengene værd." },
          { title: "Dine tre vigtigste ydelser", text: "Giv dem hver sin side med by i titlen og svar på kundernes spørgsmål." },
          { title: "Mål og justér", text: "Efter 6–8 uger: kig i Search Console og se, hvilke søgninger der begynder at komme." },
        ],
      },
      {
        h2: "Vil du hellere have, at jeg gør det?",
        paragraphs: [
          "Har du ikke tid, gennemgår jeg gerne listen for dig. Du får et gratis SEO-tjek af din hjemmeside med de tre ting, der vil gøre størst forskel – skrevet på almindeligt dansk, ikke en 40-siders rapport.",
        ],
        cta: { href: "/gratis-seo-tjek-horsens", label: "Få et gratis SEO-tjek" },
      },
    ],
    faqs: [
      { q: "Hvor lang tid tager det at se effekt af SEO?", a: "Tekniske rettelser og en opdateret Google-profil kan give effekt på få uger. Gode placeringer på konkurrenceprægede søgninger tager typisk 2–6 måneder." },
      { q: "Hvad er det vigtigste i lokal SEO?", a: "En udfyldt Google Virksomhedsprofil, anmeldelser, ens kontaktoplysninger overalt og en hurtig hjemmeside med én side pr. ydelse." },
      { q: "Kan jeg lave SEO selv?", a: "Ja. De fleste punkter på listen kræver ingen teknisk viden. Teknikken og hastigheden er dér, hvor mange har brug for hjælp." },
      { q: "Hvad koster SEO hos WebHjerte?", a: "SEO-grundlaget er bygget ind i alle nye hjemmesider fra 2.500 kr. Et SEO-tjek af din nuværende side er gratis." },
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
    title: "Vælg webbureau: 10 spørgsmål, du bør stille | WebHjerte",
    description:
      "De 10 spørgsmål, der afslører, om et webbureau eller en freelancer passer til dig: pris, ejerskab, tidsplan, SEO, support – og røde flag.",
    keywords: ["vælg webbureau", "hvornår kan det betale sig at bruge et bureau", "webbureau pris", "freelancer til bureau", "webbureau til små virksomheder", "webbureau horsens"],
    name: "10 spørgsmål til dit webbureau",
    category: "Guides",
    h1: "Sådan vælger du webbureau: 10 spørgsmål, du bør stille",
    intro:
      "Ja, jeg ved godt, at jeg selv er en af dem, du vælger imellem. Derfor er her de spørgsmål, jeg selv ville stille – også selvom svarene ikke altid peger på mig.",
    summary:
      "Den rigtige leverandør er ikke nødvendigvis den største eller den billigste. Det er den, der giver dig en fast pris, lader dig eje din hjemmeside, kan vise lignende projekter og svarer, når du skriver. Stil de ti spørgsmål herunder til alle, du får tilbud fra, og sammenlign svarene side om side.",
    readMinutes: 8,
    sections: [
      {
        h2: "Hvorfor det er svært at sammenligne",
        paragraphs: [
          "Et tilbud på 8.000 kr og et på 45.000 kr kan begge hedde “ny hjemmeside”. Det ene er måske fem sider på et standardtema, det andet inkluderer tekster, SEO og et års support. Det er derfor, jeg altid anbefaler at stille de samme spørgsmål til alle – så sammenligner du æbler med æbler.",
        ],
      },
      {
        h2: "De 10 spørgsmål",
        subs: [
          { h3: "Er prisen fast?", paragraphs: ["Og hvad sker der, hvis du ønsker en ekstra side midt i projektet? En fast pris med et klart omfang beskytter dig mod overraskelser."] },
          { h3: "Hvem ejer domæne, kode og indhold?", paragraphs: ["Svaret skal være: dig. Ellers er du bundet til leverandøren, hvis I en dag går hver til sit."] },
          { h3: "Hvem taler jeg med undervejs?", paragraphs: ["En sælger, en projektleder eller den, der faktisk bygger siden? Jo færre led, jo mindre går tabt."] },
          { h3: "Hvornår er siden færdig?", paragraphs: ["Bed om en konkret tidsplan med datoer – ikke “4–12 uger”. Og spørg, hvad der typisk forsinker projekter."] },
          { h3: "Hvad er inkluderet i SEO?", paragraphs: ["“SEO-venlig” betyder ingenting. Spørg konkret: titler, beskrivelser, sitemap, struktureret data, hastighed og Search Console?"] },
          { h3: "Hvem skriver teksterne?", paragraphs: ["Tekster er ofte det, der forsinker et projekt mest. Find ud af, om de er med i prisen, eller om du selv skal levere dem."] },
          { h3: "Kan jeg selv rette i siden?", paragraphs: ["Hvis du gerne vil skifte priser og billeder selv, skal du have WordPress eller et andet redigeringssystem."] },
          { h3: "Hvad koster det efter lancering?", paragraphs: ["Hosting, vedligeholdelse og rettelser. Og kan aftalen opsiges fra måned til måned?"] },
          { h3: "Kan jeg se lignende projekter?", paragraphs: ["Bed om eksempler fra din branche eller af samme størrelse – og gerne en kunde, du kan ringe til."] },
          { h3: "Hvad hvis jeg ikke kan lide designet?", paragraphs: ["Hos mig får du et designudkast på 48 timer, og passer det ikke, betaler du 0 kr. Spørg andre, hvad deres svar er."] },
        ],
      },
      {
        h2: "Røde flag",
        paragraphs: ["Ser du et af disse, ville jeg tænke mig om en ekstra gang:"],
        bullets: [
          "Domænet bliver registreret i bureauets navn.",
          "Binding på 24–36 måneder for hosting eller “abonnementshjemmeside”.",
          "Ingen skriftlig beskrivelse af, hvad der er med i prisen.",
          "Garantier om “nummer 1 på Google”. Det kan ingen love.",
          "Du kan ikke få at vide, hvem der faktisk laver arbejdet.",
          "Lang svartid allerede i salgsfasen. Det bliver sjældent bedre bagefter.",
        ],
      },
      {
        h2: "Bureau, freelancer eller én udvikler?",
        paragraphs: [
          "Et stort bureau giver mening, når du har mange interessenter, et stort budget og brug for flere specialister på én gang – fx en virksomhed med marketingafdeling, flere sprog og integrationer til ERP. Her betaler du for koordinering, og det er fair nok.",
          "For de fleste små og mellemstore virksomheder er det overkill. Du betaler for projektledere, kontorer og møder, du ikke har brug for. En erfaren freelancer eller et lille bureau som mit giver dig direkte kontakt og en lavere pris – så længe du sikrer dig, at der er en plan, hvis personen bliver syg eller stopper. Spørg om det.",
        ],
        cta: { href: "/freelancer-vs-bureau", label: "Læs: freelancer eller bureau?" },
      },
      {
        h2: "Mine egne svar",
        paragraphs: [
          "For at være fair: Hos WebHjerte er prisen fast (fra 2.500 kr), du ejer domæne og kode, du taler med mig hele vejen, de fleste projekter er klar på 2–10 dage, SEO-grundlaget er med, og vedligeholdelse kan opsiges fra måned til måned. Du kan se mine projekter i porteføljen – og du betaler 0 kr for designet, hvis det ikke passer.",
        ],
        cta: { href: "/portefolje", label: "Se portefølje" },
      },
    ],
    faqs: [
      { q: "Hvornår kan det betale sig at bruge et bureau?", a: "Når projektet er stort, kræver flere specialister samtidig og har mange interessenter. Til en typisk hjemmeside for en lille virksomhed er en erfaren freelancer eller et lille bureau ofte billigere og hurtigere." },
      { q: "Hvad koster et webbureau?", a: "Hos større bureauer koster en hjemmeside typisk 25.000–150.000 kr. Hos WebHjerte starter faste priser fra 2.500 kr." },
      { q: "Hvad skal et tilbud på en hjemmeside indeholde?", a: "Fast pris, præcist omfang (sider og funktioner), tidsplan, hvem der ejer domæne og kode, og hvad det koster efter lancering." },
    ],
    related: [
      { href: "/freelancer-vs-bureau", title: "Freelancer eller bureau?", desc: "Fordele og ulemper." },
      { href: "/blog/hvad-koster-en-hjemmeside-2026", title: "Hvad koster en hjemmeside?", desc: "Priser og prisberegner." },
      { href: "/om-mig", title: "Om mig", desc: "Hvem står bag WebHjerte?" },
    ],
  },
  {
    ...base,
    slug: "wordpress-eller-skraeddersyet",
    title: "WordPress eller skræddersyet hjemmeside? | WebHjerte",
    description:
      "WordPress eller en kodet, skræddersyet hjemmeside? Ærlig sammenligning af pris, hastighed, sikkerhed, redigering og SEO – og hvornår jeg anbefaler hvad.",
    keywords: ["wordpress eller skræddersyet", "wordpress eller kodet hjemmeside", "skræddersyet hjemmeside", "wordpress fordele ulemper", "next.js hjemmeside"],
    name: "WordPress eller skræddersyet?",
    category: "Guides",
    h1: "WordPress eller skræddersyet hjemmeside? Sådan vælger du",
    intro:
      "Jeg bygger begge dele, så jeg har ikke noget at sælge dig her. Spørgsmålet er bare: hvad passer til din virksomhed og den måde, du arbejder på?",
    summary:
      "Vælg WordPress, hvis du selv vil opdatere indhold ofte – nyheder, priser, menukort, produkter. Vælg en skræddersyet, kodet hjemmeside, hvis du vil have den hurtigste og mest sikre løsning med lave driftsudgifter, og indholdet ikke ændrer sig hver uge. Prisen hos WebHjerte er den samme: fra 4.500 kr for en flersidet hjemmeside.",
    readMinutes: 8,
    sections: [
      {
        h2: "Den korte forklaring",
        paragraphs: [
          "WordPress er et redigeringssystem. Du logger ind, retter en tekst og trykker “Opdater”. Det driver en stor del af alle hjemmesider i verden, og der findes tusindvis af udvidelser (plugins) til alt fra booking til webshop.",
          "En skræddersyet hjemmeside er kodet fra bunden – hos mig typisk i Next.js. Der er ingen plugins, ingen database, der kan hackes, og ingen opdateringer, du skal huske. Til gengæld er det mig (eller en anden udvikler), der retter i den, medmindre vi kobler et redigeringssystem på.",
        ],
      },
      {
        h2: "Sammenligning",
        table: {
          head: ["", "WordPress", "Skræddersyet (kode)"],
          rows: [
            ["Redigering", "Du retter selv tekst, billeder og priser", "Udvikleren retter – eller vi kobler et CMS på"],
            ["Hastighed", "God, hvis den er sat rigtigt op", "Typisk den hurtigste løsning"],
            ["Sikkerhed", "Kræver løbende opdateringer", "Meget lille angrebsflade"],
            ["Drift", "Hosting og vedligeholdelse anbefales", "Kan hostes meget billigt"],
            ["Udvidelser", "Tusindvis af plugins", "Bygges præcist efter behov"],
            ["Pris hos WebHjerte", "Fra 4.500 kr", "Fra 2.500 kr (landingside) / 4.500 kr"],
          ],
        },
      },
      {
        h2: "Vælg WordPress, hvis…",
        bullets: [
          "Du vil skrive nyheder, blogindlæg eller opdatere priser hver måned.",
          "Du har en restaurant med menukort, der skifter.",
          "Du skal have en webshop med WooCommerce og selv oprette produkter.",
          "Flere i virksomheden skal kunne redigere.",
          "Du gerne vil kunne skifte udvikler nemt senere.",
        ],
        after: ["Husk bare, at WordPress skal vedligeholdes. En WordPress-side, der ikke er opdateret i to år, er en sikkerhedsrisiko – og ofte langsom."],
      },
      {
        h2: "Vælg skræddersyet, hvis…",
        bullets: [
          "Hastighed og Google-placeringer er det vigtigste for dig.",
          "Indholdet ændrer sig sjældent – det er dine ydelser, priser og kontaktinfo.",
          "Du ikke vil bruge tid på opdateringer og plugins.",
          "Du har brug for en særlig funktion, som et plugin ikke kan løse ordentligt.",
          "Du vil have de laveste driftsudgifter på lang sigt.",
        ],
      },
      {
        h2: "Et eksempel fra Horsens",
        paragraphs: [
          "Da jeg byggede hjemmesiden til en pizzeria i Horsens, var målet klart: kunderne skulle bestille direkte i stedet for via Wolt og JustEat, der tog op mod 30 % i gebyr. Her var hastighed alt – en sulten kunde på mobilen venter ikke på en langsom side. Derfor blev den kodet i Next.js.",
          "En frisørsalon, der skifter priser, kampagner og billeder hver måned, ville jeg derimod bygge i WordPress, så de selv har kontrollen.",
        ],
        cta: { href: "/portefolje/pizzaria", label: "Se pizzeria-projektet" },
      },
      {
        h2: "Min anbefaling",
        paragraphs: [
          "Er du i tvivl, så tænk over ét spørgsmål: hvor ofte vil du selv ændre noget på siden? Er svaret “hver uge”, er WordPress det rigtige. Er svaret “et par gange om året”, får du en hurtigere og billigere side at drive med kode.",
          "Og har du ikke et svar endnu, er det helt fint. Det finder vi ud af på en kort samtale – helt gratis.",
        ],
        cta: { href: "/kontakt", label: "Book en gratis samtale" },
      },
    ],
    faqs: [
      { q: "Er WordPress dårligt for SEO?", a: "Nej. WordPress kan rangere rigtig godt, hvis siden er hurtig, sat rigtigt op og ikke fyldt med unødvendige plugins." },
      { q: "Kan jeg selv redigere en skræddersyet hjemmeside?", a: "Ja, hvis vi kobler et redigeringssystem (CMS) på. Ellers står jeg for rettelser via en vedligeholdelsesaftale fra 195 kr/md." },
      { q: "Hvad er billigst på lang sigt?", a: "En kodet hjemmeside har typisk de laveste driftsudgifter, fordi den ikke kræver løbende opdateringer af plugins og WordPress." },
      { q: "Kan jeg skifte fra WordPress til kode senere?", a: "Ja. Indholdet kan flyttes, og med korrekte omdirigeringer beholder du dine placeringer på Google." },
    ],
    related: [
      { href: "/wordpress-hjemmeside", title: "Professionel WordPress-hjemmeside", desc: "Fra 4.500 kr." },
      { href: "/skraeddersyede-hjemmesider", title: "Skræddersyede hjemmesider", desc: "Unikt design og hurtig kode." },
      { href: "/blog/hvad-koster-en-hjemmeside-2026", title: "Hvad koster en hjemmeside?", desc: "Priser og prisberegner." },
    ],
  },
  {
    ...base,
    slug: "hvor-lang-tid-tager-det-at-lave-en-hjemmeside",
    title: "Hvor lang tid tager det at lave en hjemmeside? | WebHjerte",
    description:
      "Realistiske tidsplaner for landingside, firmahjemmeside og webshop – hvad der forsinker et projekt, og hvordan du får siden hurtigst.",
    keywords: ["hvor lang tid tager det at lave en hjemmeside", "hvor lang tid tager en hjemmeside", "hjemmeside hurtigt", "hjemmeside på en uge"],
    name: "Hvor lang tid tager en hjemmeside?",
    category: "Guides",
    h1: "Hvor lang tid tager det at lave en hjemmeside?",
    intro:
      "Bureauer siger ofte 6–12 uger. Hos mig er de fleste hjemmesider klar på 2–10 dage. Her er forskellen – og hvad der i praksis bestemmer tempoet.",
    summary:
      "En landingside kan være klar på ca. 2 dage, en firmahjemmeside med 3–8 sider på 5–10 dage, og en webshop eller skræddersyet løsning på 2–6 uger. Det, der oftest forsinker et projekt, er ikke udviklingen, men tekster, billeder og godkendelser. Har du dem klar, går det stærkt.",
    readMinutes: 7,
    sections: [
      {
        h2: "Typisk tidsplan",
        table: {
          head: ["Type", "Hos WebHjerte", "Typisk hos bureau"],
          rows: [
            ["Landingside (1 side)", "ca. 2 dage", "1–3 uger"],
            ["Basis (3–5 sider)", "ca. 5 dage", "3–6 uger"],
            ["Standard (op til 8 sider)", "ca. 10 dage", "4–8 uger"],
            ["Webshop / skræddersyet", "2–6 uger", "2–6 måneder"],
          ],
        },
      },
      {
        h2: "Hvorfor går det hurtigere hos mig?",
        paragraphs: [
          "Det handler ikke om at sjuske. Det handler om færre led. Hos et bureau skal projektet typisk igennem en sælger, en projektleder, en designer og en udvikler – og hver overlevering koster dage. Der er interne møder, kalendere, der skal passe, og opgaver, der venter i kø bag andre kunder.",
          "Hos mig er det den samme person, der taler med dig, designer og koder. Når du godkender designet om formiddagen, kan jeg begynde at bygge om eftermiddagen. Og fordi jeg arbejder med få, gennemprøvede byggesten, starter jeg ikke fra nul hver gang.",
        ],
        quote: "Den hurtigste hjemmeside er ikke den, der bygges hurtigst – det er den, hvor ingen venter på hinanden.",
      },
      {
        h2: "Faserne i et projekt",
        steps: [
          { title: "Samtale (dag 1)", text: "Vi taler om din virksomhed, dine kunder og hvad siden skal kunne. Du får en fast pris." },
          { title: "Design (inden for 48 timer)", text: "Du ser et konkret designudkast af forsiden. Passer det ikke, betaler du 0 kr." },
          { title: "Udvikling (2–7 dage)", text: "Når designet er godkendt, bygger jeg resten af siderne og sætter SEO, formularer og tracking op." },
          { title: "Test og rettelser (1–2 dage)", text: "Du får et link og kan klikke rundt. Vi retter det sidste sammen." },
          { title: "Lancering", text: "Siden går live på dit domæne. Du får 30 dages support i alle pakker." },
        ],
      },
      {
        h2: "Hvad kan forsinke projektet?",
        paragraphs: ["I næsten alle projekter, der trækker ud, er det en af de her ting – og ingen af dem handler om koden:"],
        bullets: [
          "Teksterne er ikke klar. Det er den største tidsrøver af dem alle.",
          "Billeder mangler, eller de er taget med en gammel mobil i dårligt lys.",
          "For mange beslutningstagere, der alle skal godkende hver ændring.",
          "Adgang til domæne eller gammel hosting, som ingen kan finde koderne til.",
          "Nye ønsker midt i projektet. Det er helt fint – men det rykker datoen.",
        ],
      },
      {
        h2: "Sådan får du din hjemmeside hurtigst",
        paragraphs: [
          "Vil du have siden ude på en uge, er her de tre ting, der gør den største forskel:",
        ],
        subs: [
          { h3: "Hav teksterne klar", paragraphs: ["Det behøver ikke være perfekt. En liste over dine ydelser, priser og hvad der gør dig anderledes er nok – jeg hjælper med at skrive det færdigt."] },
          { h3: "Find 10–20 gode billeder", paragraphs: ["Billeder af dig, dit team og dit arbejde slår altid stockfotos. Har du ingen, kan vi starte med få og tilføje flere senere."] },
          { h3: "Én beslutningstager", paragraphs: ["Aftal internt, hvem der har det sidste ord. Det kan spare en hel uge."] },
          { h3: "Find dine logins", paragraphs: ["Domæne (fx hos Punktum dk eller dit webhotel) og eventuel gammel hosting. Så kan vi flytte uden ventetid."] },
        ],
      },
      {
        h2: "Kan det gå for hurtigt?",
        paragraphs: [
          "Ja, hvis man springer test over eller lancerer uden at have tænkt over, hvad siden skal opnå. Derfor går jeg aldrig på kompromis med designgodkendelse og test på mobil. Men en firmahjemmeside med 5 sider behøver ikke tage to måneder. Det er ikke kvalitet – det er bare ventetid.",
        ],
        cta: { href: "/kontakt", label: "Få et tilbud og en tidsplan" },
      },
    ],
    faqs: [
      { q: "Hvor lang tid tager det at lave en hjemmeside?", a: "Hos WebHjerte typisk 2–10 dage for en hjemmeside med 1–8 sider. Webshops og skræddersyede løsninger tager 2–6 uger." },
      { q: "Kan jeg få en hjemmeside på en uge?", a: "Ja, en Basis-hjemmeside på 3–5 sider kan være klar på ca. 5 dage, hvis tekster og billeder er klar." },
      { q: "Hvad forsinker typisk et hjemmesideprojekt?", a: "Manglende tekster og billeder, mange beslutningstagere og nye ønsker undervejs – sjældent selve udviklingen." },
      { q: "Hvornår ser jeg det første design?", a: "Inden for 48 timer efter vores samtale. Passer det ikke, betaler du 0 kr for designet." },
    ],
    related: [
      { href: "/hjemmeside-pris", title: "Hjemmeside priser", desc: "Se pakker og leveringstider." },
      { href: "/hjemmeside-til-virksomhed", title: "Hjemmeside til virksomhed", desc: "Hvad en erhvervshjemmeside skal kunne." },
      { href: "/kontakt", title: "Kontakt", desc: "Få et tilbud inden for 24 timer." },
    ],
  },
];

export const articles = [...aiArticles.map((a) => ({ ...a })), ...own];
