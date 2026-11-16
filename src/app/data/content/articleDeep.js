/**
 * Dybere afsnit til blogartiklerne: gennemgåede eksempler, myter og trin-for-trin.
 * Lægges efter afsnittene i articleExtra.js (og før artiklens afsluttende handling).
 * Eksempler med tal er markeret som eksempler og bygger på sitets egne priser.
 */
const articleDeepBase = {
  "saadan-bliver-du-nevnt-af-chatgpt-og-google-ai": [
    {
      h2: "Et gennemgået eksempel: et lille malerfirma",
      paragraphs: [
        "Forestil dig en maler i Hedensted med en hjemmeside på tre sider: forside, “om os” og kontakt. Forsiden siger “Kvalitet til tiden”, priserne står ingen steder, og området nævnes kun i adressen i bunden. Når nogen spørger en AI-assistent om en maler i Hedensted, har den intet konkret at citere.",
        "Efter en eftermiddags arbejde har siden fået en ydelsesside for indvendig og udvendig maling, en sætning om hvilke byer der dækkes, et prisniveau pr. kvadratmeter og svar på fem spørgsmål om tidsplan og forberedelse. Google-profilen er rettet, så navn og telefon er de samme som på siden, og fem tidligere kunder har skrevet en anmeldelse.",
        "Ingen kan love, at assistenten nu nævner maleren. Men forskellen er, at der nu findes en kilde, den kan bruge – og det er præcis de samme ændringer, der gør, at kunderne ringer, når de lander på siden.",
      ],
      callout: { tone: "example", title: "Eksempel", text: "Malerfirmaet er opdigtet, men ændringerne er dem, jeg typisk laver først: konkrete ydelser, område, prisniveau, svar på spørgsmål og ens oplysninger overalt." },
    },
  ],

  "ai-i-smaa-virksomheder-10-eksempler": [
    {
      h2: "Et gennemgået eksempel: en frisørsalon",
      paragraphs: [
        "En salon med tre stole får mange af de samme spørgsmål: Hvad koster en farve? Har I tid lørdag? Kan jeg aflyse? Ejeren svarer mellem kunderne, ofte med våde hænder, og mange beskeder bliver først besvaret om aftenen.",
        "Første skridt er ikke en chatbot, men en prisliste og online booking på hjemmesiden – så forsvinder halvdelen af spørgsmålene. Næste skridt er en chatbot, der svarer ud fra prislisten og åbningstiderne og sender alt andet videre. Tredje skridt er en automatisk påmindelse dagen før, så færre glemmer deres tid.",
        "Rækkefølgen er pointen: Først fjernes årsagen til spørgsmålene, så automatiseres svarene, og til sidst bruges AI til opfølgningen. Hvert skridt kan måles for sig, og man kan stoppe, når gevinsten er hentet.",
      ],
    },
    {
      h2: "Tre myter om AI i små virksomheder",
      subs: [
        { h3: "“Det er kun for store firmaer”", paragraphs: ["De fleste værktøjer koster få hundrede kroner om måneden, og de største gevinster findes ofte i de små, gentagne opgaver, som netop små virksomheder har mange af."] },
        { h3: "“AI erstatter kundekontakten”", paragraphs: ["Godt brugt gør AI det modsatte: den tager de gentagne spørgsmål, så du har mere tid til de samtaler, der kræver dig."] },
        { h3: "“Man skal være teknisk”", paragraphs: ["At bruge en AI-assistent kræver ikke mere end at skrive en mail. Det tekniske – integrationer og opsætning – kan du få hjælp til én gang."] },
      ],
    },
  ],

  "hvad-koster-en-hjemmeside-om-aaret": [
    {
      h2: "Hvornår kan det betale sig at have en vedligeholdelsesaftale?",
      paragraphs: [
        "En vedligeholdelsesaftale er ikke nødvendig for alle. Har du en enkel, kodet hjemmeside, der sjældent ændres, kan du klare dig uden og betale for rettelser, når der er brug for dem. Har du en WordPress-side eller en webshop, er det anderledes: systemet skal opdateres jævnligt, og en glemt opdatering kan i værste fald betyde, at siden bliver hacket eller holder op med at virke.",
        "Tommelfingerreglen er enkel: Hvis du ikke selv vil – eller kan – holde øje med opdateringer, backup og sikkerhed, så er en aftale billigere end at rydde op efter et nedbrud. Hos mig koster Basis 249 kr/md, Standard 449 kr/md og Pro 799 kr/md. Alle kan opsiges med 30 dages varsel.",
      ],
      table: {
        head: ["Din situation", "Mit råd"],
        rows: [
          ["Kodet side, sjældne ændringer", "Ingen aftale – betal for rettelser, når du har brug for dem"],
          ["WordPress, du selv retter i", "Basis: opdateringer, backup og overvågning"],
          ["Du vil have rettelser lavet for dig hver måned", "Standard: op til 30 minutters ændringer om måneden"],
          ["Webshop eller forretningskritisk side", "Standard eller Pro"],
        ],
      },
    },
    {
      h2: "Sådan skærer du i de løbende udgifter",
      paragraphs: [
        "Mange betaler for mere, end de bruger. Det skyldes sjældent, at nogen har snydt dem – men at abonnementer bliver tilføjet over tid og aldrig fjernet igen. En årlig oprydning tager en time og kan spare flere tusinde kroner.",
      ],
      steps: [
        { title: "Lav en liste", text: "Gennemgå kontoudtog og kreditkort for alt, der har med hjemmesiden at gøre: domæne, hosting, mail, plugins, booking, nyhedsbrev." },
        { title: "Find dubletter", text: "Betaler du for backup både hos hostingudbyderen og i et plugin? Har du to mailløsninger?" },
        { title: "Fjern det, du ikke bruger", text: "Plugins og værktøjer, du ikke har åbnet i et halvt år, kan som regel opsiges." },
        { title: "Saml årsbetalinger", text: "Mange udbydere giver rabat ved årlig betaling. Brug det for de ting, du er sikker på at beholde." },
      ],
    },
    {
      h2: "Et gennemgået eksempel: fra 9.000 til 3.000 kr om året",
      paragraphs: [
        "En lille konsulentvirksomhed betalte for en hjemmesidebygger med premium-tema, en separat bookingløsning, to mailkonti og et nyhedsbrevsværktøj, de ikke havde brugt i et år. Tilsammen omkring 9.000 kr om året.",
        "Efter en gennemgang blev nyhedsbrevet opsagt, den ene mailkonto lukket, og hjemmesiden flyttet til en enkel, kodet side med booking indbygget. De løbende udgifter faldt til omkring 3.000 kr om året – og siden blev hurtigere.",
      ],
      callout: { tone: "example", title: "Eksempel", text: "Tallene er afrundede og opdigtede for at vise metoden. Din besparelse afhænger af, hvad du betaler for i dag." },
    },
  ],

  "seo-tjekliste-lokale-virksomheder": [
    {
      h2: "Et gennemgået eksempel: en tømrer i Horsens",
      paragraphs: [
        "En tømrer med én side, der hedder “Forside”, og en liste over alle ydelser i ét afsnit. I Google Search Console kan man se, at siden vises på “tømrer horsens” på side tre – men på intet andet.",
        "Første måned: titlen ændres til “Tømrer i Horsens – terrasser, tagvinduer og tilbygninger”, Google-profilen udfyldes helt, og der bedes om anmeldelser fra de seneste ti kunder. Anden måned: tre ydelsessider for terrasser, tagvinduer og tilbygninger med billeder, prisniveau og svar på spørgsmål. Tredje måned: links fra den lokale fodboldklub og trælasten, der viser deres håndværkere.",
        "Resultatet kan ikke garanteres, men mønstret er typisk: siden begynder at blive vist på flere og mere præcise søgninger, før den stiger på de store. Det er dem, der giver de bedste henvendelser.",
      ],
      callout: { tone: "example", title: "Eksempel", text: "Tømreren er opdigtet. Rækkefølgen – titler og profil først, ydelsessider derefter, omtale til sidst – er den, jeg anbefaler de fleste." },
    },
    {
      h2: "Din månedlige SEO-rutine på 30 minutter",
      steps: [
        { title: "Search Console", text: "Se, hvilke søgninger der er kommet til, og hvilke sider der er faldet. Notér tre ting." },
        { title: "Google-profil", text: "Svar på nye anmeldelser og spørgsmål, og tilføj et par nye billeder." },
        { title: "Én forbedring", text: "Vælg én side, der næsten er på første side, og gør den bedre: mere konkret tekst, et billede, et svar på et spørgsmål." },
        { title: "Bed om anmeldelser", text: "Send beskeden til de kunder, du har afsluttet opgaver for i måneden." },
      ],
    },
  ],

  "vaelg-webbureau-10-spoergsmaal": [
    {
      h2: "Et gennemgået eksempel: tre tilbud på samme opgave",
      paragraphs: [
        "En klinik bad om tilbud på en ny hjemmeside med fem sider og online booking. Tilbud A lød på 6.000 kr, B på 18.000 kr og C på 45.000 kr. Ved første øjekast var A det oplagte valg.",
        "Da tilbuddene blev lagt ved siden af hinanden, viste det sig, at A var en skabelon uden booking, hvor klinikken selv skulle skrive alle tekster og betale for hosting gennem bureauet med 12 måneders binding. B indeholdt design, booking og tekstrådgivning. C indeholdt det samme som B plus fotografering og et års SEO-arbejde.",
        "Pludselig handlede valget ikke om pris, men om behov: Havde klinikken brug for fotograf og løbende SEO, eller kunne de selv tage billederne og vente med SEO? Det er netop den samtale, et godt tilbud skal gøre mulig.",
      ],
      callout: { tone: "example", title: "Eksempel", text: "Tilbuddene er opdigtede, men forskellene er typiske. Spørg altid ind til, hvad der ikke er med." },
    },
    {
      h2: "Samarbejdet efter lanceringen",
      paragraphs: [
        "En hjemmeside er ikke færdig, når den går live. Der kommer rettelser, nye ydelser, ændrede priser og spørgsmål fra Google Search Console. Derfor er det lige så vigtigt at vide, hvordan samarbejdet ser ud efter lanceringen, som før.",
      ],
      bullets: [
        "Hvem kontakter du, når noget skal rettes – og hvor hurtigt får du svar?",
        "Hvad koster små rettelser uden for en aftale?",
        "Kan du selv rette tekster og billeder, eller skal alt gennem bureauet?",
        "Får du en oversigt over logins og adgange?",
        "Hvad sker der, hvis bureauet lukker eller du vil skifte?",
      ],
    },
  ],

  "wordpress-eller-skraeddersyet": [
    {
      h2: "Et gennemgået eksempel: samme opgave, to løsninger",
      paragraphs: [
        "En el-installatør vil have en hjemmeside med seks sider, en side om elbil-ladere og en kontaktformular, hvor kunden kan vedhæfte et billede. Priserne ændres et par gange om året, og nye cases kommer måske en gang i kvartalet.",
        "Med WordPress får installatøren en side, han selv kan opdatere, men som skal holdes opdateret og har lidt flere plugins. Med en skræddersyet side får han en hurtigere side med færre løbende opgaver, men rettelserne går gennem mig – fx via en aftale med 30 minutters ændringer om måneden.",
        "Her ville jeg anbefale skræddersyet: rettelserne er få, hastigheden betyder noget i en konkurrencepræget branche, og formularen med billedupload er enkel at bygge rigtigt. Havde installatøren skrevet nye artikler hver uge, havde svaret været WordPress.",
      ],
      callout: { tone: "example", title: "Eksempel", text: "Installatøren er opdigtet. Pointen er, at det er hverdagen efter lanceringen – ikke teknikken – der afgør valget." },
    },
    {
      h2: "Hvad koster de to løsninger over tre år?",
      paragraphs: [
        "Startprisen er sjældent det, der gør forskellen. Det er driften. Her er et vejledende regnestykke for en side med 3–5 sider.",
      ],
      table: {
        head: ["Over 3 år (vejledende)", "WordPress", "Skræddersyet"],
        rows: [
          ["Start (Basis)", "4.500 kr", "4.500 kr"],
          ["Hosting", "ca. 1.800–18.000 kr", "ca. 0–7.200 kr"],
          ["Opdateringer og sikkerhed", "nødvendigt – selv eller med aftale fra 249 kr/md", "få – backup og overvågning anbefales"],
          ["Rettelser", "du kan selv", "via aftale eller efter behov"],
        ],
      },
      after: ["Hosting-spændet afhænger især af, om du vælger billigt webhotel eller administreret WordPress-hosting med backup og hastighed."],
    },
    {
      h2: "Kan man skifte senere?",
      paragraphs: [
        "Ja, begge veje. Mange starter på WordPress og skifter til en kodet side, når hastighed og design bliver vigtigere. Andre går den modsatte vej, fordi de vil redigere mere selv. Det vigtigste er, at du ejer domænet og indholdet, og at gamle adresser sender videre til de nye, så du ikke mister dine placeringer i Google.",
      ],
    },
  ],

  "hvor-lang-tid-tager-det-at-lave-en-hjemmeside": [
    {
      h2: "En realistisk plan, dag for dag",
      paragraphs: [
        "Her er, hvordan et Basis-projekt på 3–5 sider typisk forløber hos mig, når tekster og billeder er klar. Et Standard-projekt følger samme rytme, men over ca. 10 dage, og en webshop over 2–4 uger.",
      ],
      table: {
        head: ["Dag", "Hvad sker der", "Hvad du gør"],
        rows: [
          ["0", "Samtale om mål, kunder og indhold", "Fortæller om virksomheden og sender materiale"],
          ["1–2", "Første designudkast", "Giver feedback – passer det ikke, betaler du 0 kr"],
          ["2–4", "Siden bygges med tekster, billeder og SEO", "Svarer på spørgsmål undervejs"],
          ["4–5", "Test, rettelser og lancering", "Godkender og får adgang"],
        ],
      },
    },
    {
      h2: "Hvorfor nogle projekter tager måneder",
      paragraphs: [
        "Det er ikke usædvanligt, at hjemmesideprojekter hos større bureauer tager to–tre måneder. Det skyldes sjældent, at selve arbejdet tager så lang tid. Det er ventetiden mellem trinene: møder, der skal planlægges, godkendelser, der skal igennem flere personer, og projekter, der står i kø.",
        "Det er ikke nødvendigvis dårligt – store projekter med mange interessenter har brug for den struktur. Men for en lille virksomhed med én beslutningstager er det spildtid. Jo færre led, jo kortere tid.",
      ],
    },
    {
      h2: "Tjekliste: klar til at starte i morgen",
      bullets: [
        "Jeg ved, hvad hjemmesiden skal få kunderne til at gøre (ringe, skrive, booke, købe)",
        "Jeg har en liste over mine ydelser og priser",
        "Jeg har logo og mindst 10 billeder af mit arbejde",
        "Jeg ved, hvor domænet er købt, og kan logge ind",
        "Jeg har sat tid af til at give feedback inden for et døgn",
        "Én person træffer beslutningerne",
      ],
    },
  ],

  "baeredygtigt-webdesign": [
    {
      h2: "Et gennemgået eksempel: samme side, en tiendedel af vægten",
      paragraphs: [
        "En typisk forside på en ældre virksomhedshjemmeside kan nemt veje flere megabyte: en stor video i toppen, fem billeder i fuld opløsning, tre skrifttyper i mange vægte og en håndfuld sporingskoder.",
        "Uden at ændre budskabet kan videoen erstattes af ét billede, billederne konverteres til moderne formater i den rigtige størrelse, skrifttyperne reduceres til én familie i to vægte, og sporingskoder, ingen bruger, fjernes. Siden ser næsten ens ud – men vejer en brøkdel og indlæses langt hurtigere på en mobil.",
      ],
      callout: { tone: "example", title: "Eksempel", text: "Siden er et typisk eksempel, ikke en bestemt kunde. Mål din egen side før og efter med værktøjerne ovenfor." },
    },
    {
      h2: "Bæredygtighed handler også om levetid",
      paragraphs: [
        "Den grønneste hjemmeside er den, der ikke skal bygges om hvert andet år. En enkel, velstruktureret side med få afhængigheder kan holde i mange år og opdateres løbende i stedet for at blive smidt ud og bygget forfra.",
        "Det gælder også for indholdet. Sider, ingen besøger, og gamle kampagner, der ligger og fylder, kan fjernes eller samles. Det gør siden lettere at vedligeholde og lettere for kunderne at finde rundt i.",
      ],
    },
    {
      h2: "Spørgsmål, du kan stille dit bureau",
      bullets: [
        "Hvor meget vejer forsiden, og hvor hurtigt indlæses den på mobil?",
        "Hvilke billedformater bruger I, og laves billederne i den rigtige størrelse?",
        "Hvor mange tredjeparts-scripts kommer siden til at indlæse?",
        "Hvor ligger siden, og hvilken strøm bruger datacentret?",
        "Hvor længe kan siden holde, før den skal bygges om?",
      ],
    },
  ],

  webstrategi: [
    {
      h2: "En webstrategi på én side",
      paragraphs: [
        "En strategi behøver ikke være et langt dokument. For de fleste små virksomheder kan den stå på én side – og netop derfor bliver den brugt. Udfyld de seks punkter, og hæng den op, hvor du kan se den.",
      ],
      subs: [
        { h3: "1. Mål", paragraphs: ["Hvad skal hjemmesiden få kunderne til at gøre? Fx “få 10 tilbudsforespørgsler om måneden”."] },
        { h3: "2. Kunder", paragraphs: ["Hvem er de vigtigste kunder, og hvilket problem løser du for dem?"] },
        { h3: "3. Budskab", paragraphs: ["Én sætning: hvad du laver, for hvem og hvor – og hvorfor man skal vælge dig."] },
        { h3: "4. Sider", paragraphs: ["Forside, en side pr. ydelse, priser, cases, om og kontakt."] },
        { h3: "5. Kanaler", paragraphs: ["Hvor kommer kunderne fra – og hvilken kanal prioriterer du først?"] },
        { h3: "6. Måling", paragraphs: ["Hvilke tal kigger du på hver måned, og hvornår er du tilfreds?"] },
      ],
    },
    {
      h2: "Et gennemgået eksempel: en fysioterapeut",
      paragraphs: [
        "En nystartet klinik vil have flere bookinger fra nye patienter. Målet bliver derfor “online bookinger fra nye patienter”, ikke “flere besøgende”. Kunderne er især sportsaktive og folk med rygproblemer i lokalområdet, og de vælger klinik efter, hvor hurtigt de kan komme til, og om behandleren virker kompetent.",
        "Derfor står den næste ledige tid og knappen “Book tid” øverst på forsiden, hver behandlingsform får sin egen side, og behandlerne præsenteres med uddannelse og erfaring. Google-profilen prioriteres, fordi de fleste søger “fysioterapeut + by”. Hver måned kigges der på antal online bookinger og på, hvilke søgninger klinikken vises på.",
      ],
      callout: { tone: "example", title: "Eksempel", text: "Klinikken er opdigtet, men strukturen er den samme, jeg bruger, når jeg planlægger en ny hjemmeside." },
    },
    {
      h2: "Typiske fejl i en webstrategi",
      bullets: [
        "Målet er “flere besøgende” i stedet for henvendelser eller salg",
        "Forsiden forsøger at fortælle alt på én gang",
        "Ydelserne står i én lang liste i stedet for på hver sin side",
        "Prisen er skjult, selvom det er det første, kunderne spørger om",
        "Der er ingen, der kigger på tallene efter lanceringen",
        "Strategien bliver lavet én gang og aldrig set på igen",
      ],
    },
  ],
};

// Endnu et afsnit til de kortere guides, så alle kan læses på ca. 10 minutter
const more = {
  "hvad-koster-en-hjemmeside-om-aaret": {
    "h2": "Hvad sker der, hvis du ikke betaler?",
    "paragraphs": [
      "Det er værd at vide, hvad der stopper, hvis en betaling glipper – for konsekvenserne er meget forskellige. Udløber domænet, holder både hjemmesiden og mailen op med at virke, og efter en periode kan andre registrere navnet. Stopper hostingen, forsvinder siden, men domænet er stadig dit, og siden kan sættes op igen, hvis du har en backup.",
      "Opsiger du en vedligeholdelsesaftale, kører siden videre, men ingen holder øje med opdateringer og backup. For en kodet side betyder det sjældent noget på kort sigt. For WordPress og webshops kan det over tid blive en sikkerhedsrisiko.",
      "Sørg derfor for, at domænet fornyes automatisk med et kort, der ikke udløber, at du selv har adgang til hostingen, og at du ved, hvor den seneste backup ligger. Så er du aldrig afhængig af én person eller ét firma."
    ]
  },
  "vaelg-webbureau-10-spoergsmaal": {
    "h2": "Hvis samarbejdet ikke fungerer",
    "paragraphs": [
      "Selv med gode forberedelser kan et samarbejde gå skævt. Det vigtigste er at opdage det tidligt. Hvis første designudkast er langt fra det aftalte, deadlines skrider uden besked, eller du ikke kan få svar, så tag det op med det samme – skriftligt og konkret.",
      "Henvis til aftalen: hvad var lovet, hvad er leveret, og hvad forventer du nu? De fleste problemer kan løses, når forventningerne bliver tydelige. Kan de ikke, er det her, det betaler sig, at domænet står i dit navn, og at du har adgang til koden og hostingen – så kan du skifte uden at starte forfra.",
      "Og husk, at et godt samarbejde også kræver noget af dig: hurtige svar, samlet feedback og én person, der træffer beslutningerne. Det gør projektet både hurtigere og billigere."
    ]
  },
  "wordpress-eller-skraeddersyet": {
    "h2": "Myter om WordPress og kode",
    "subs": [
      {
        "h3": "“WordPress er gratis”",
        "paragraphs": [
          "Selve systemet er gratis, men design, opsætning, hosting, premium-plugins og vedligeholdelse er det ikke. Sammenlign altid den samlede pris."
        ]
      },
      {
        "h3": "“Kodede sider kan ikke redigeres”",
        "paragraphs": [
          "De kan sagtens – enten via en udvikler eller ved at koble et redigeringssystem på. Spørgsmålet er bare, hvor ofte du har brug for det."
        ]
      },
      {
        "h3": "“WordPress er langsomt”",
        "paragraphs": [
          "Det er ikke systemet, men måden det er bygget på. Et let tema, få plugins og god hosting kan give en hurtig WordPress-side."
        ]
      },
      {
        "h3": "“Skræddersyet er altid dyrt”",
        "paragraphs": [
          "Ikke nødvendigvis. Hos mig starter kodede sider på samme pris som WordPress-sider, og driften er ofte billigere."
        ]
      }
    ]
  },
  "hvor-lang-tid-tager-det-at-lave-en-hjemmeside": {
    "h2": "Feedback, der gør projektet hurtigere",
    "paragraphs": [
      "Den måde, du giver feedback på, kan spare dage. Den mest tidskrævende feedback er den, der kommer i mange små portioner fra flere personer – eller den, der beskriver en følelse uden at sige, hvad der skal ændres.",
      "Saml dine kommentarer i én besked, gerne med skærmbilleder, og vær konkret: “Overskriften skal sige, at vi også laver erhverv”, ikke “den føles lidt kedelig”. Er I flere i virksomheden, så aftal internt, før I svarer, så udvikleren ikke får modstridende ønsker.",
      "Og vær ærlig tidligt. Hvis designet ikke rammer, er det langt billigere at sige det efter første udkast end efter, at hele siden er bygget. Det er netop derfor, du hos mig ser et design efter 48 timer, før noget bliver bygget."
    ],
    "bullets": [
      "Saml al feedback i én besked",
      "Brug skærmbilleder og pil på det, du mener",
      "Skriv, hvad der skal ændres – ikke kun hvad du føler",
      "Lad én person træffe den endelige beslutning",
      "Svar inden for et døgn, hvis du kan"
    ]
  },
  "baeredygtigt-webdesign": {
    "h2": "Det kan du gøre selv i dag",
    "paragraphs": [
      "Du behøver ikke en ny hjemmeside for at gøre din nuværende lettere. Mange af forbedringerne kan laves på en eftermiddag – og de gør siden hurtigere på samme tid.",
      "Start med billederne på forsiden: Gem dem i en mindre størrelse (sjældent bredere end 2000 pixels) og i et moderne format, før du lægger dem op igen. Gennemgå derefter dine plugins eller integrationer og fjern dem, du ikke bruger. Til sidst: Slet gamle kampagnesider og PDF'er, som ingen længere har brug for, og sørg for, at de gamle adresser sender videre til en relevant side.",
      "Mål sidens vægt før og efter med PageSpeed Insights. Det er motiverende at se forskellen – og det giver dig et tal, du kan følge over tid."
    ],
    "steps": [
      {
        "title": "Billeder",
        "text": "Gør forsidens billeder mindre og gem dem som WebP eller AVIF."
      },
      {
        "title": "Plugins og scripts",
        "text": "Fjern det, du ikke har brugt det seneste halve år."
      },
      {
        "title": "Gammelt indhold",
        "text": "Slet eller saml sider, ingen besøger, og omdiriger adresserne."
      },
      {
        "title": "Mål",
        "text": "Kør PageSpeed Insights før og efter, og skriv tallene ned."
      }
    ]
  },
  "webstrategi": {
    "h2": "Fra strategi til færdig hjemmeside",
    "paragraphs": [
      "Strategien er ikke et mål i sig selv – den skal gøre det lettere at bygge en hjemmeside, der virker. Når de seks punkter er på plads, bliver de næste beslutninger næsten selvfølgelige: Hvilke sider skal laves først? Hvad skal stå øverst på forsiden? Hvilken knap skal være tydeligst?",
      "I praksis bruger jeg strategien som tjekliste gennem hele projektet. Designet vurderes ud fra, om budskabet står klart på fem sekunder. Teksterne vurderes ud fra, om de svarer på kundernes spørgsmål. Og efter lanceringen vurderes siden ud fra de tal, vi valgte i starten – ikke ud fra, om den er pæn.",
      "Har du allerede en hjemmeside, er strategien også det bedste udgangspunkt for at forbedre den. Ofte viser det sig, at der ikke skal bygges noget nyt – bare skrives tydeligere, flyttes rundt og fjernes noget."
    ],
    "callout": {
      "tone": "tip",
      "title": "Start her",
      "text": "Skriv målet og budskabet ned i dag. Det tager ti minutter og gør alle andre beslutninger om hjemmesiden lettere."
    }
  }
};

export const articleDeep = Object.fromEntries(
  Object.entries(articleDeepBase).map(([k, v]) => [k, more[k] ? [...v, more[k]] : v])
);

/** Ekstra spørgsmål og svar til de kortere guides. */
export const articleDeepFaqs = {
  "vaelg-webbureau-10-spoergsmaal": [
    {
      "q": "Hvor mange tilbud bør jeg indhente?",
      "a": "Tre er som regel nok. Færre gør det svært at sammenligne, og flere giver mest forvirring. Send den samme beskrivelse til alle tre, så tilbuddene kan sammenlignes på lige fod."
    },
    {
      "q": "Er en freelancer mere risikabel end et bureau?",
      "a": "Ikke nødvendigvis. Risikoen handler mest om aftalen: Står domæne og kode i dit navn, har du adgang til hostingen, og er der en plan, hvis personen bliver syg? Med de ting på plads er en freelancer ofte både hurtigere og billigere."
    }
  ],
  "wordpress-eller-skraeddersyet": [
    {
      "q": "Hvad med Wix og Squarespace?",
      "a": "De er gode til at komme hurtigt i gang selv, men du betaler hver måned, så længe siden findes, og du ejer sjældent siden. Til en virksomhed, der vil findes lokalt på Google, er en professionelt bygget side ofte billigere på sigt."
    },
    {
      "q": "Hvilken løsning er bedst til SEO?",
      "a": "Begge kan rangere godt. Det afgørende er indhold, struktur og hastighed – ikke systemet. En kodet side har en lille fordel på hastighed, mens WordPress har mange færdige værktøjer til SEO."
    }
  ],
  "hvor-lang-tid-tager-det-at-lave-en-hjemmeside": [
    {
      "q": "Kan siden gå live, før alle tekster er færdige?",
      "a": "Ja. Det er ofte en god idé at lancere med de vigtigste sider og tilføje resten bagefter. En færdig side med fem gode sider er bedre end en perfekt side, der aldrig bliver færdig."
    },
    {
      "q": "Hvad hvis jeg ikke har tid til projektet lige nu?",
      "a": "Så vent hellere til du har. Et projekt, der står stille i ugevis, bliver dyrere og dårligere for begge parter. Sæt én til to timer af i den uge, projektet kører, så går det hurtigt."
    }
  ],
  "baeredygtigt-webdesign": [
    {
      "q": "Hvad vejer en god hjemmeside?",
      "a": "Der er ingen fast grænse, men en forside på under 1 MB er et godt mål for de fleste små virksomheder. Mange sider vejer langt mere, især på grund af billeder og video."
    },
    {
      "q": "Skal jeg skifte hosting for at blive grønnere?",
      "a": "Det kan være en god idé, hvis din udbyder ikke kan dokumentere grøn strøm. Men start med at gøre selve siden lettere – det giver ofte en større effekt og gør samtidig siden hurtigere."
    }
  ],
  "webstrategi": [
    {
      "q": "Kan jeg lave strategien selv?",
      "a": "Ja. De seks punkter i denne guide er nok til de fleste små virksomheder. Hjælp udefra er mest værdifuld, når du er i tvivl om prioriteringen, eller når du vil have et blik på det, du selv er blevet blind for."
    },
    {
      "q": "Hvad hvis jeg har flere typer kunder?",
      "a": "Vælg den vigtigste som udgangspunkt for forsiden, og lav særskilte sider til de andre. En forside, der prøver at tale til alle, taler ofte ikke til nogen."
    }
  ]
};
