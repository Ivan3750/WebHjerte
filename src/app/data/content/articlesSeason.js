// Sæsonartikler: jul, nytår og 2027. Hver artikel bliver til /blog/<slug>.
// Skrevet i første person (Ivan). Ingen kronebeløb (priser står kun på /services, /ai-seo og /hosting-og-vedligeholdelse),
// ingen garantier for placeringer og ingen opdigtede tal. Eksempler er markeret som eksempler.

const base = { published: "2026-11-27", updated: "2026-11-27" };

export const seasonArticles = [
  /* ───────────────────────────── 1. Hjemmesiden klar til jul ───────────────────────────── */
  {
    ...base,
    slug: "hjemmeside-klar-til-jul-tjekliste",
    title: "Hjemmeside klar til jul? Tjekliste til december | WebHjerte",
    description:
      "Tjekliste til din hjemmeside før julen: åbningstider, kontaktformular, betaling, levering, Google-profil og hastighed. 12 ting, du kan nå på en aften.",
    keywords: ["hjemmeside jul", "hjemmeside tjekliste december", "julehandel hjemmeside", "åbningstider jul hjemmeside", "webshop jul tjekliste", "lokal virksomhed jul"],
    name: "Hjemmeside klar til jul: tjekliste",
    category: "Jul",
    h1: "Er din hjemmeside klar til jul? 12 ting at tjekke i december",
    intro:
      "December er den måned, hvor flest kunder leder efter åbningstider, leveringsfrister og et nummer, de kan ringe til. Her er tolv ting, jeg tjekker på mine kunders hjemmesider, før julen går i gang.",
    summary:
      "Før jul skal din hjemmeside kunne svare på tre ting uden at kunden skal ringe: hvornår har I åbent, hvor længe kan jeg nå at bestille, og hvordan kommer jeg i kontakt med jer. Tjek åbningstider (også i Google), kontaktformular, betaling, levering og hastighed på mobil, og lad være med at lave store ændringer midt i julesalget. De fleste punkter tager under en time hver.",
    readMinutes: 9,
    sections: [
      {
        h2: "Hvorfor december er særlig for en hjemmeside",
        paragraphs: [
          "Resten af året besøger folk din hjemmeside, fordi de har et behov. I december kommer de også fordi de har travlt. De skal have en gave på plads, booke en tid inden jul, finde en håndværker, der kan nå det før nytår, eller bare finde ud af, om I har åbent mellem jul og nytår. En kunde med travlt giver sjældent en hjemmeside to chancer.",
          "Samtidig er det den måned, hvor din egen tid er mest knap. Derfor er det klogt at gøre de små ting nu, mens der stadig er ro: Det er billigere at rette en forkert åbningstid i november end at miste en kunde den 23. december.",
          "Det her er ikke en guide til at ændre hele din hjemmeside. Det er en kort liste over de ting, der oftest går galt i julemåneden, og som du selv kan nå på en aften eller to.",
        ],
        quote: "I december er en hjemmeside ikke en brochure. Den er din åbne dør, også når du selv har lukket.",
      },
      {
        h2: "De 12 ting, jeg tjekker først",
        paragraphs: ["Listen er sorteret efter, hvor tit det går galt. Start oppefra, og stop, når du løber tør for tid."],
        subs: [
          {
            h3: "1. Åbningstider for hele december",
            paragraphs: [
              "Det er nummer ét. Mange har åbningstider, der står på hjemmesiden som “Man–fre 8–16”, og så glemmer de at skrive, at de holder lukket 24. december, mellem jul og nytår eller 2. januar. Skriv de særlige datoer ud, så kunden ser dem med det samme, ikke først efter tre klik.",
              "Hvis du selv skal huske at ændre det hvert år, så gør det til en fast opgave. Det er en af de ting, vi kan lave, så det bliver nemt at rette.",
            ],
          },
          {
            h3: "2. Telefonnummer og e-mail virker",
            paragraphs: [
              "Ring til dit eget nummer fra hjemmesiden. Send en mail til din egen adresse. Det lyder banalt, men jeg har set hjemmesider, hvor telefonnummeret var skrevet uden mellemrum og ikke kunne klikkes på mobilen, eller hvor mailen gik til en adresse, ingen kiggede i længere.",
            ],
          },
          {
            h3: "3. Kontaktformularen leverer – og kunden får en kvittering",
            paragraphs: [
              "Send en testbesked. Kommer den frem? Får kunden et svar på skærmen eller i mailen? I december er det en god idé at skrive i kvitteringen, hvornår du svarer, fx “Vi svarer senest 2. januar, hvis du skriver efter den 22. december.” Så ved kunden, hvad de kan forvente, og du undgår ti irriterede opfølgninger.",
            ],
          },
          {
            h3: "4. Forsiden siger noget om julen",
            paragraphs: [
              "En lille, tydelig besked øverst på forsiden gør forskellen: sidste bestilling til levering inden jul, sidste dag med tider inden jul, eller “vi holder lukket mellem jul og nytår”. Det behøver ikke være et julebanner med sne. Én linje er nok.",
            ],
          },
          {
            h3: "5. Betaling og kasse i webshoppen",
            paragraphs: [
              "Gennemfør et rigtigt testkøb på mobil, ikke kun på computeren. Fungerer kortbetaling og MobilePay? Kommer ordrebekræftelsen? Er der en forkert fragtpris på et produkt? Hvis du sælger gavekort eller digitale varer, så tjek også, at kunden får det, de har købt, med det samme.",
            ],
          },
          {
            h3: "6. Levering og returnering er skrevet i klart sprog",
            paragraphs: [
              "Kunderne vil vide: Hvornår kommer pakken, og hvad hvis den ikke passer? Skriv leveringsfristen for julegaver ud på produktsiden og i kassen. Tjek fragtfirmaets seneste datoer, og skriv dem, i stedet for at gætte. Kender du reglerne om fortrydelsesret og bytte efter jul, kan du formulere dem kort og venligt. Er du i tvivl, så brug Forbrugerombudsmandens vejledninger som udgangspunkt.",
            ],
          },
          {
            h3: "7. Lagerstatus og udsolgte varer",
            paragraphs: [
              "Intet er mere frustrerende end at lægge en gave i kurven og få at vide bagefter, at den er udsolgt. Fjern udsolgte produkter fra forsiden og tilbudssiderne, eller skriv “forventet på lager igen” med en dato, du kan holde.",
            ],
          },
          {
            h3: "8. Google Virksomhedsprofil",
            paragraphs: [
              "Mange finder dig i Google, ikke på din hjemmeside. Opdatér særlige åbningstider for juledagene direkte i profilen, tjek telefonnummer og adresse, og svar på de seneste anmeldelser. Det er ofte her, kunden ser dine åbningstider første gang.",
            ],
            cta: { href: "/blog/aabningstider-i-julen-google-hjemmeside-facebook", label: "Guide: åbningstider i julen" },
          },
          {
            h3: "9. Hastighed og mobil",
            paragraphs: [
              "I december kommer der flere besøgende fra mobilen, ofte på mobilnet og ofte mens de står i kø eller sidder i toget. Åbn din hjemmeside på telefonen uden wifi. Er den hurtig? Kan du trykke på knapperne uden at ramme forkert? Hvis ikke, er det værd at få set på.",
            ],
            cta: { href: "/gratis-seo-tjek-horsens", label: "Få et gratis tjek af din side" },
          },
          {
            h3: "10. Opdateringer og sikkerhed",
            paragraphs: [
              "Kør de nødvendige opdateringer og tag en backup, før julesalget går i gang, ikke midt i det. Ændringer i plugins, tema eller betalingsløsning er netop de ting, der kan gå galt, når du har mest trafik og mindst tid til at rette det.",
            ],
          },
          {
            h3: "11. Cookiebanner og samtykke",
            paragraphs: [
              "Tjek, at cookiebanneret stadig virker, og at det ikke dækker kontaktknappen på mobilen. Et banner, der fylder halvdelen af skærmen, koster henvendelser.",
            ],
          },
          {
            h3: "12. Hosting kan klare travlheden",
            paragraphs: [
              "Hvis du sender nyhedsbrev, kører annoncer eller har et stort tilbud, kommer der pludselig mange besøgende på én gang. Spørg din hosting-udbyder, om løsningen kan klare det, og lav gerne en test, inden du trykker send.",
            ],
            cta: { href: "/hosting-og-vedligeholdelse", label: "Hosting og vedligeholdelse" },
          },
        ],
      },
      {
        h2: "Hvornår skal du gøre hvad?",
        paragraphs: ["Det behøver ikke ligge på én dag. Her er en fornuftig rækkefølge:"],
        table: {
          head: ["Hvornår", "Hvad", "Hvorfor"],
          rows: [
            ["Nu og til første december", "Åbningstider, kontaktformular, betaling, Google-profil", "Kunderne begynder at planlægge, og mange spørger allerede, hvad der er åbent"],
            ["Første halvdel af december", "Hastighed, mobil, forsidebesked, lagerstatus", "Her er trafikken størst, og du kan stadig nå at rette"],
            ["Ugen før jul", "Kun små rettelser. Ingen store ændringer", "Der er ikke tid til at rette fejl, hvis noget går i stykker"],
            ["Mellem jul og nytår", "Tjek beskeder, og se hvad kunderne spurgte om", "Du får brugbar viden til januar"],
          ],
        },
      },
      {
        h2: "Det virker – og det skader",
        paragraphs: ["Små detaljer afgør, om en travl kunde bliver, eller klikker videre til en konkurrent."],
        compare: {
          good: {
            title: "Det virker",
            items: [
              "Én tydelig linje om julens åbningstider og sidste bestilling øverst på forsiden",
              "Telefon og mail kan klikkes på mobilen",
              "En kvittering, der fortæller, hvornår kunden får svar",
              "Udsolgte varer er skjult, eller har en dato for genopfyldning",
              "Opdateret Google-profil med særlige åbningstider",
            ],
          },
          bad: {
            title: "Det skader",
            items: [
              "Åbningstider fra sidste år står stadig på siden",
              "Et stort julebanner, der fylder skærmen og skjuler knapperne",
              "Nye plugins og store ændringer i ugen før jul",
              "Kontaktformularer, der sender til en mail, ingen læser",
              "Leveringstider, som du ikke kan overholde",
            ],
          },
        },
      },
      {
        h2: "Én aften: sådan når du det hele",
        callout: {
          tone: "warning",
          title: "Undgå store ændringer midt i julesalget",
          text: "Er der noget, du gerne vil have lavet om, er det bedst at gøre det nu eller vente til januar. En ny hjemmeside, et nyt tema eller en ny betalingsløsning midt i december er en risiko, du sjældent behøver at tage.",
        },
        steps: [
          { title: "20 minutter: åbningstider", text: "Opdatér hjemmesiden, Google-profilen og Facebook. Brug samme formulering overalt." },
          { title: "20 minutter: kontakt og formular", text: "Ring og skriv til dig selv. Ret kvitteringen, så den siger, hvornår du svarer." },
          { title: "30 minutter: køb og betaling", text: "Lav et testkøb på mobil. Skriv leveringsfrister og returnering ud i klart sprog." },
          { title: "20 minutter: hastighed og backup", text: "Åbn siden på telefonen. Tag en backup, og vent med store opdateringer til januar." },
        ],
      },
      {
        h2: "Brug for hjælp før jul?",
        paragraphs: [
          "Hvis du ikke selv har tid, eller hvis du opdager, at noget ikke virker, kan jeg se på din hjemmeside og give dig en ærlig liste over, hvad der haster, og hvad der kan vente til januar. Du får altid en fast pris, før jeg går i gang, og jeg skriver ærligt, hvis du ikke har brug for mig.",
        ],
        cta: { href: "/kontakt", label: "Skriv til mig" },
      },
    ],
    faqs: [
      { q: "Hvornår skal min hjemmeside være klar til jul?", a: "Helst inden 1. december, fordi mange begynder at planlægge og købe gaver tidligt. Små rettelser som åbningstider kan du nå indtil få dage før jul, men store ændringer bør vente til januar." },
      { q: "Skal jeg have et julebanner på min hjemmeside?", a: "Det er ikke nødvendigt. En kort, tydelig besked om åbningstider og sidste bestilling gør mere nytte end pynt, og den fylder mindre på mobilen." },
      { q: "Kan jeg rette åbningstider selv?", a: "Ja, hvis din hjemmeside er sat op til det. Hvis den ikke er, kan det aftales, så det bliver nemt at rette uden at kontakte en udvikler hver gang." },
      { q: "Er det for sent at gøre noget nu?", a: "Nej. De vigtigste ting, som åbningstider, kontaktformular og Google-profil, kan du nå på en enkelt aften." },
    ],
    related: [
      { href: "/blog/aabningstider-i-julen-google-hjemmeside-facebook", title: "Åbningstider i julen", desc: "Opdatér Google, hjemmeside og Facebook." },
      { href: "/blog/gavekort-juletilbud-lokal-virksomhed", title: "Gavekort og juletilbud", desc: "Sælg mere i december som lokal virksomhed." },
      { href: "/gratis-seo-tjek-horsens", title: "Gratis SEO-tjek", desc: "Se hvad din hjemmeside mangler." },
    ],
  },

  /* ───────────────────────────── 2. Gavekort og juletilbud ───────────────────────────── */
  {
    ...base,
    slug: "gavekort-juletilbud-lokal-virksomhed",
    title: "Gavekort og juletilbud: sælg mere i december | WebHjerte",
    description:
      "Sådan bruger en lokal virksomhed sin hjemmeside til julesalg: gavekort, juletilbud, sidste bestilling og en forside, der konverterer. Praktiske eksempler.",
    keywords: ["gavekort hjemmeside", "juletilbud hjemmeside", "julesalg lokal virksomhed", "sælge gavekort online", "julegave tilbud", "julekampagne lille virksomhed"],
    name: "Gavekort og juletilbud til lokale virksomheder",
    category: "Jul",
    h1: "Gavekort, juletilbud og sidste bestilling: sådan sælger du mere i december",
    intro:
      "En hjemmeside kan gøre mere i december end at vise åbningstider. Den kan sælge gavekort, tage imod julebestillinger og fylde kalenderen i januar, hvor mange virksomheder ellers er stille.",
    summary:
      "De mest effektive julegreb for en lokal virksomhed er gavekort, et enkelt tilbud med en tydelig slutdato og en forside, der fortæller, hvad man skal gøre nu. Du behøver ikke en stor kampagne. Vælg én ting, gør den let at købe og let at forstå, og følg op i januar.",
    readMinutes: 9,
    sections: [
      {
        h2: "Julen handler om gaver, ikke om laveste pris",
        paragraphs: [
          "Når jeg taler med frisører, klinikker, restauranter og håndværkere, handler julen ofte om rabatter. Det er forståeligt. Men for en lokal virksomhed er december oftere en måned, hvor folk leder efter gaveidéer, end hvor de leder efter det billigste.",
          "Det betyder, at du har en fordel, hvis du gør det nemt at give din ydelse væk. Et gavekort til en klipning, en middag, en time hos fysioterapeuten eller en rengøring til svigermor er en gave, som folk selv ville ønske sig, men sjældent køber til sig selv.",
          "En hjemmeside er det oplagte sted at sælge den gave. Kunden behøver ikke at ringe eller komme forbi. De kan købe søndag aften, når de endelig har tid, og få gavekortet sendt direkte til modtageren.",
        ],
      },
      {
        h2: "Tre julegreb, der virker for små virksomheder",
        subs: [
          {
            h3: "Gavekort, der kan købes uden besvær",
            paragraphs: [
              "Et gavekort skal kunne købes på under to minutter fra en telefon. Det kræver en tydelig knap på forsiden, få valg (fx en ydelse eller et beløb) og en måde at få kortet leveret på: som PDF på mail, som SMS eller som fysisk kort, der kan hentes eller sendes.",
              "Tænk også på, hvordan gavekortet bruges, når modtageren kommer. Har du et system til at spore det? Står der en gyldighedsperiode? Gavekort er reguleret, så tjek Forbrugerombudsmandens vejledning for gavekort, herunder hvor længe de skal kunne bruges, inden du skriver betingelserne.",
            ],
          },
          {
            h3: "Ét tilbud med en tydelig slutdato",
            paragraphs: [
              "Ti forskellige tilbud skaber forvirring. Ét tilbud skaber handling. Vælg det, der passer til din virksomhed: et julepakke-tilbud, et gratis ekstra, når man køber før en bestemt dato, eller en tid, der kun er til salg i december.",
              "Skriv slutdatoen med bogstaver (“til og med 18. december”), ikke kun “begrænset tid”. Og undlad at love noget, du ikke kan holde, hvis det bliver populært. En kalender, der er fuld, er bedre end en kalender, der er overbooket.",
            ],
          },
          {
            h3: "Sidste bestilling og sidste tid før jul",
            paragraphs: [
              "Travle kunder vil gerne vide, hvornår det er for sent. Skriv sidste dag for levering inden jul, sidste dag med ledige tider, eller sidste dag, du kan nå en opgave inden nytår. Det skaber en naturlig frist og får de tøvende til at beslutte sig.",
            ],
          },
        ],
      },
      {
        h2: "Hvad virker i din branche?",
        paragraphs: ["Eksemplerne herunder er idéer, ikke resultater. De viser, hvordan samme princip kan se ud forskellige steder."],
        table: {
          head: ["Branche", "Julegreb (eksempel)", "Det skal hjemmesiden kunne"],
          rows: [
            ["Frisør / skønhed", "Gavekort på en behandling, eller en julepakke med klipning og pleje", "Sælge gavekort, vise ledige tider i januar"],
            ["Restaurant / café", "Gavekort til en middag, eller julefrokost for firmaer og venner", "Tage imod forespørgsler, vise menu og åbningstider i julen"],
            ["Klinik / behandler", "Gavekort på en behandling eller et forløb", "Vise ydelser tydeligt, og lade nogen booke til januar"],
            ["Håndværker / service", "“Bestil inden 15. december, så kommer vi i januar”", "Tage imod forespørgsler med billeder, skrive frister og dækningsområde"],
            ["Webshop / butik", "Fast leveringsfrist, gaveindpakning og enkel returnering", "Vise leveringsfrister, kasse der virker på mobil"],
          ],
        },
        after: ["Alle eksempler er markeret som eksempler. Tilpas dem til din virksomhed, og hold dig til det, du kan levere."],
      },
      {
        h2: "Sådan ser en god julebesked ud på forsiden",
        paragraphs: [
          "En julebesked skal være kort, tydelig og have en handling. Den skal fortælle, hvad kunden kan gøre, og hvornår det skal ske. Det er det.",
        ],
        compare: {
          good: {
            title: "Tydelig",
            items: [
              "“Gavekort til en klipning – kan købes her og sendes som SMS eller mail”",
              "“Bestil inden 15. december, så er vi hos dig inden jul”",
              "“Lukket 24. december – 1. januar. Åbner igen 2. januar”",
            ],
          },
          bad: {
            title: "Utydelig",
            items: [
              "“Glædelig jul fra os alle sammen!” uden at sige, hvad man kan gøre",
              "“Se vores fantastiske tilbud” uden at sige, hvilket eller hvornår",
              "Et banner, der fylder hele skærmen på telefonen",
            ],
          },
        },
      },
      {
        h2: "Sådan sætter du et gavekort op i praksis",
        paragraphs: [
          "Et gavekort lyder enkelt, men det er en lille proces med flere led. Går du den igennem fra start til slut, før du lancerer, undgår du de fleste problemer.",
        ],
        steps: [
          { title: "Bestem, hvad der kan købes", text: "Et bestemt beløb, en bestemt ydelse eller begge dele? Færre valg giver flere køb. Start med to eller tre." },
          { title: "Bestem, hvordan det leveres", text: "PDF på mail, SMS-kode eller et fysisk kort. Vælg det, du faktisk kan håndtere i den travle uge før jul." },
          { title: "Skriv betingelserne i klart sprog", text: "Hvor længe kan kortet bruges, kan det byttes, og hvordan bestiller man tid? Tjek reglerne hos Forbrugerombudsmanden." },
          { title: "Aftal, hvordan det bruges", text: "Hvem noterer, at kortet er brugt? Hvordan undgår du, at det bruges to gange? Det kan være en kode, du krydser af i et ark." },
          { title: "Test hele forløbet på mobil", text: "Køb et gavekort selv, få det leveret, og brug det. Gør det, før du fortæller om det." },
        ],
      },
      {
        h2: "Tekster, der får folk til at klikke",
        paragraphs: [
          "Der er ikke brug for smarte slogans. Kunden skal vide, hvad gaven er, og hvordan de køber den. Her er tre eksempler på, hvordan en knap og en overskrift kan formuleres.",
        ],
        table: {
          head: ["Mindre klar", "Mere klar (eksempel)"],
          rows: [
            ["Spoil nogen i julen", "Giv en klipning væk – kan købes her og sendes på mail eller SMS"],
            ["Julens bedste tilbud", "Bestil en rengøring inden 15. december til levering i januar"],
            ["Læs mere", "Køb gavekort"],
          ],
        },
        after: ["Eksemplerne er opdigtede. Brug dine egne ord, og skriv, hvad du faktisk tilbyder."],
      },
      {
        h2: "Fejl, jeg ofte ser",
        bullets: [
          "Gavekortet kan kun købes ved at ringe: De fleste køber ikke, hvis de skal ringe uden for åbningstid",
          "Ingen tydelig slutdato: Kunderne udskyder, og tilbuddet mister sin kraft",
          "For mange valgmuligheder: Ti varianter af gavekort gør det sværere at beslutte sig",
          "Intet svar i januar: Gavekortet er solgt, men der er ingen ledige tider, og modtageren bliver skuffet",
          "Betingelserne er skjult: Er de uklare, kan det give utilfredse kunder og dårlige anmeldelser",
        ],
      },
      {
        h2: "Et eksempel fra en lille salon (opdigtet)",
        paragraphs: [
          "Tænk dig en lille frisørsalon i en provinsby. I stedet for at lave en stor kampagne vælger ejeren tre gavekort på forsiden: klipning, farve og en pakke. Hver har en tydelig knap, og siden fortæller, at kortet kan sendes på mail samme dag. Sidste dag for køb er 22. december, og i den uge er der en SMS til de faste kunder med et link.",
          "Resultatet kan jeg ikke love, og det kan heller ingen andre. Men princippet er klart: Der er ét sted at købe, det er let at forstå, og der er en frist. Så behøver ejeren ikke at forklare det i telefonen hver gang.",
        ],
      },
      {
        h2: "Efter jul: fyld januar",
        paragraphs: [
          "For mange lokale virksomheder er januar en stille måned. Det er her, julesalget kan betale sig to gange. Gavekort bliver brugt, nytårsforsæt får folk til at booke tid, og de kunder, der har fået dit navn i julen, kommer tilbage, hvis du gør det let for dem.",
          "Sørg for, at hjemmesiden også er klar til januar: ledige tider i kalenderen, en tydelig besked til dem, der har fået et gavekort, og en kontaktformular, der virker. Hvis du har en nyhedsmail eller et SMS-system, så send en kort besked 2. januar.",
        ],
        bullets: [
          "En side til gavekortmodtagere: “Du har fået et gavekort. Sådan bruger du det”",
          "Ledige tider i januar, som kan bookes direkte",
          "Et kort tak til dem, der har købt, og en opfordring til at skrive en Google-anmeldelse",
          "En besked om, hvad du har af nyt i det nye år",
        ],
      },
      {
        h2: "Skal du have en hjemmeside, der kan mere?",
        paragraphs: [
          "Hvis din nuværende hjemmeside ikke kan sælge gavekort, tage imod bookinger eller vise julens åbningstider tydeligt, behøver du ikke at bygge alt om i december. Vi kan se på, hvad der er realistisk at nå, og hvad der passer bedst til januar. Du får altid en fast pris, før jeg går i gang.",
        ],
        cta: { href: "/kontakt", label: "Fortæl mig, hvad du vil sælge" },
      },
    ],
    faqs: [
      { q: "Kan jeg sælge gavekort uden en webshop?", a: "Ja. Der findes enkle løsninger, hvor kunden køber et gavekort via et link eller en knap på din hjemmeside. Hvad der passer bedst, afhænger af, hvordan du i forvejen tager imod betaling og bookinger." },
      { q: "Hvor længe skal et gavekort kunne bruges?", a: "Der gælder regler for gavekort. Tjek Forbrugerombudsmandens vejledning, inden du skriver dine betingelser, så du ikke lover noget, der strider mod reglerne." },
      { q: "Skal jeg give rabat for at sælge mere i december?", a: "Ikke nødvendigvis. Mange sælger bedre med en tydelig gaveidé, en klar frist og en let købsproces end med en rabat. Vælg den løsning, der passer til din økonomi og dine kunder." },
      { q: "Hvad hvis jeg ikke når at lave noget til i år?", a: "Så brug december til at samle information, og planlæg en kampagne til januar og næste jul. Du kan stadig få en tydelig julebesked og opdaterede åbningstider på plads på en enkelt aften." },
    ],
    related: [
      { href: "/blog/hjemmeside-klar-til-jul-tjekliste", title: "Tjekliste til jul", desc: "12 ting at tjekke på din hjemmeside i december." },
      { href: "/webshop-hjemmeside", title: "Webshop-hjemmeside", desc: "Når du vil sælge online hele året." },
      { href: "/kontakt", title: "Kontakt", desc: "Få svar inden for 24 timer." },
    ],
  },

  /* ───────────────────────────── 3. Åbningstider i julen ───────────────────────────── */
  {
    ...base,
    slug: "aabningstider-i-julen-google-hjemmeside-facebook",
    title: "Åbningstider i julen: Google og hjemmeside | WebHjerte",
    description:
      "Sådan opdaterer du julens åbningstider ét sted ad gangen: Google Virksomhedsprofil, hjemmesiden og Facebook. Undgå forkerte tider og tabte kunder.",
    keywords: ["åbningstider jul google", "særlige åbningstider google", "åbningstider jul hjemmeside", "google virksomhedsprofil jul", "lokal seo jul"],
    name: "Åbningstider i julen: opdatér Google, hjemmeside og Facebook",
    category: "Lokal SEO",
    h1: "Åbningstider i julen: sådan opdaterer du Google, hjemmesiden og Facebook",
    intro:
      "Forkerte åbningstider er en af de mest irriterende fejl for en kunde. Og de opstår som regel fordi tiderne står tre steder, men kun er rettet ét. Her er en enkel måde at få det til at passe.",
    summary:
      "Opdatér julens åbningstider tre steder: Google Virksomhedsprofil (særlige åbningstider), din hjemmeside og Facebook, og brug samme formulering alle steder. Gør det i starten af december, og tjek igen, når du åbner efter nytår. Det tager under en time, og det forhindrer, at kunder står foran en lukket dør.",
    readMinutes: 7,
    sections: [
      {
        h2: "Hvorfor åbningstider betyder mere end du tror",
        paragraphs: [
          "Når en kunde søger efter din virksomhed, ser de ofte dine åbningstider, før de ser din hjemmeside. De står i Google-resultatet, på kortet og i profilen på telefonen. Og de fleste stoler på dem uden at dobbelttjekke.",
          "Hvis tiden er forkert, mister du ikke bare en kunde. Du mister tilliden, og kunden husker det næste gang. Det gælder især i julen, hvor tiderne er anderledes end resten af året, og hvor kunderne har mindre tålmodighed.",
        ],
      },
      {
        h2: "Første skridt: beslut dine tider én gang",
        paragraphs: [
          "Før du retter noget som helst, så skriv julens tider ned på ét sted. Det kan være en note på telefonen. Brug samme formulering alle steder, så kunden ikke ser “lukket 24.–26.” et sted og “åbent til kl. 12 den 24.” et andet.",
        ],
        bullets: [
          "De dage, I holder helt lukket (fx 24., 25., 26. december og 1. januar)",
          "De dage, I har forkortet åbningstid, og hvornår de lukker",
          "Dagene mellem jul og nytår: åbent, lukket eller kun efter aftale",
          "Hvornår I åbner igen, og hvem man kan kontakte i mellemtiden",
        ],
      },
      {
        h2: "Google Virksomhedsprofil: særlige åbningstider",
        paragraphs: [
          "Google Virksomhedsprofil har en funktion til særlige åbningstider. Her kan du angive tider for bestemte datoer, uden at ændre dine almindelige åbningstider. Når datoen er forbi, går profilen automatisk tilbage til de normale tider.",
          "Det er den vigtigste, du opdaterer, fordi den vises i søgeresultater, på kortet og i Google-assistenten. Derfor er det også dér, kunderne oftest ser dine tider.",
        ],
        steps: [
          { title: "Log ind på din profil", text: "Søg efter dit virksomhedsnavn, mens du er logget ind med den konto, der administrerer profilen." },
          { title: "Find åbningstider", text: "Vælg at redigere profilen, og find afsnittet med åbningstider." },
          { title: "Tilføj særlige åbningstider", text: "Vælg de datoer, hvor tiderne er anderledes, og angiv enten lukket eller de nye tider." },
          { title: "Gem og tjek", text: "Søg på dit virksomhedsnavn igen, og se, om tiderne vises rigtigt, også på telefonen." },
        ],
        callout: {
          tone: "tip",
          title: "Tjek, hvem der har adgang",
          text: "Hvis du ikke kan finde ud af at logge ind, er det typisk fordi profilen blev oprettet af en tidligere medarbejder eller en ekstern. Find ud af det nu, ikke 23. december.",
        },
      },
      {
        h2: "Hjemmesiden: skriv det, hvor kunden ser det",
        paragraphs: [
          "På hjemmesiden skal de særlige tider stå flere steder, ikke kun på kontaktsiden. En kort besked øverst på forsiden, en opdateret kontaktside og eventuelt i bunden af siden, hvis du har åbningstider i footeren.",
          "Hvis du bruger en kontaktformular, så skriv i kvitteringen, hvornår kunden får svar. Og hvis du har online booking, så luk for tider, du ikke kan tage.",
        ],
        compare: {
          good: {
            title: "Skriv det sådan",
            items: [
              "“24. december: lukket. 27.–30. december: åbent 10–14. 31. december – 1. januar: lukket”",
              "Datoer med bogstaver, ikke kun ugedage",
              "Samme formulering som i Google og på Facebook",
            ],
          },
          bad: {
            title: "Undgå",
            items: [
              "“Holder lukket i julen” uden datoer",
              "Gamle tider fra sidste år, der stadig står i footeren",
              "Tider i et billede, så de ikke kan læses af søgemaskiner og skærmlæsere",
            ],
          },
        },
      },
      {
        h2: "Facebook og andre profiler",
        paragraphs: [
          "Hvis du har en virksomhedsside på Facebook eller Instagram, så opdatér tiderne her også. Mange lokale kunder tjekker Facebook først, især hvis de allerede følger dig. Et kort opslag med julens tider og et link til hjemmesiden gør, at du ikke skal svare på de samme beskeder igen og igen.",
          "Husk også de små steder: Krak, De Gule Sider, bookingplatforme og anmeldelsessider, hvis din virksomhed står der. De er ikke lige vigtige, men forkerte tider på dem kan stadig give utilfredse kunder.",
        ],
      },
      {
        h2: "Hvem svarer, når I har lukket?",
        paragraphs: [
          "For nogle virksomheder er det ikke nok at skrive, at man har lukket. En VVS-installatør, en låsesmed eller en klinik kan have kunder, der har en akut situation midt i julen. Beslut på forhånd, hvad kunderne skal gøre, og skriv det tydeligt.",
        ],
        bullets: [
          "Akut hjælp: Skriv et nødnummer eller en anden vej, kunden kan bruge, hvis du tilbyder vagt",
          "Telefonsvarer: Indtal en besked med lukkedage og hvornår du ringer tilbage",
          "Autosvar på mail: Skriv, hvornår kunden kan forvente svar, så de ikke sender det samme tre gange",
          "Kontaktformular: Lad kvitteringen sige, hvornår du svarer, og hvad man skal gøre, hvis det haster",
          "Booking: Luk for tider, du ikke kan tage, så kunden ikke bestiller noget, du ikke kan levere",
        ],
        callout: {
          tone: "example",
          title: "Eksempel på en autosvar-tekst",
          text: "“Tak for din besked. Vi holder lukket fra 24. december til og med 1. januar og svarer igen 2. januar. Hvis det haster, kan du ringe til vagttelefonen på nummeret herunder.” Eksemplet er opdigtet, tilpas det til din virksomhed.",
        },
      },
      {
        h2: "Fælder, der går igen hvert år",
        paragraphs: ["Når jeg hjælper kunder med deres tider, er det ofte de samme små ting, der går galt:"],
        compare: {
          good: {
            title: "Gør sådan",
            items: [
              "Skriv datoer med bogstaver, så ingen er i tvivl",
              "Skriv de samme tider i Google, på hjemmesiden og på Facebook",
              "Sæt en kalenderpåmindelse til 2. januar for at rydde op",
              "Bed en kollega eller ven tjekke, om det er til at forstå",
            ],
          },
          bad: {
            title: "Undgå",
            items: [
              "At rette ét sted og glemme de to andre",
              "At skrive “lukket i julen” uden at sige, hvornår I åbner igen",
              "At lade julens tider stå resten af vinteren",
              "At lægge åbningstider i et billede, så søgemaskiner og skærmlæsere ikke kan læse dem",
            ],
          },
        },
      },
      {
        h2: "Hvad hvis jeg har flere afdelinger eller lokationer?",
        paragraphs: [
          "Har du flere adresser, skal hver af dem have sine egne tider i Google og på hjemmesiden. Det er en af de steder, hvor det let går galt, fordi man retter hovedafdelingen og glemmer resten. Lav en lille liste, hvor hver lokation står for sig, og tjek dem én ad gangen.",
          "Det samme gælder, hvis du har forskellige åbningstider for forskellige ydelser, fx butik, værksted og telefon. Skriv dem hver for sig, så kunden ikke skal gætte.",
        ],
      },
      {
        h2: "Når du åbner igen",
        paragraphs: [
          "Glem ikke at tjekke efter nytår. Særlige åbningstider i Google rydder sig selv op, men beskeden på forsiden og opslaget på Facebook gør ikke. Fjern dem, når de ikke længere er gældende, så du ikke har en besked om “lukket i julen” stående midt i februar.",
        ],
        bullets: [
          "Fjern julebeskeden fra forsiden",
          "Opdatér kontaktsidens tider, hvis du har skrevet særlige datoer ind",
          "Tjek, at online booking er åben igen",
          "Slet gamle opslag på Facebook, eller fastgør et nyt",
        ],
      },
      {
        h2: "Vil du slippe for at huske det hver gang?",
        paragraphs: [
          "Hvis du synes, det er besværligt at rette tiderne flere steder, kan vi sætte hjemmesiden op, så åbningstider og særlige dage styres ét sted. Det gør det nemmere at holde det rigtigt, uden at du behøver at have fat i mig hver gang.",
        ],
        cta: { href: "/kontakt", label: "Spørg mig, hvad der passer dig" },
      },
    ],
    faqs: [
      { q: "Kan jeg planlægge særlige åbningstider i Google?", a: "Ja. I din Google Virksomhedsprofil kan du tilføje særlige åbningstider for bestemte datoer, og profilen vender automatisk tilbage til de almindelige tider bagefter." },
      { q: "Hvor tidligt skal jeg opdatere åbningstiderne?", a: "I starten af december, så kunderne kan planlægge. Opdatér igen, hvis noget ændrer sig." },
      { q: "Hvad hvis nogen står foran en lukket dør alligevel?", a: "Det sker, også med de bedste intentioner. Et skilt på døren, et opslag på Facebook og en tydelig besked på hjemmesiden gør, at færre rammes." },
      { q: "Er det nok at skrive åbningstiderne på Facebook?", a: "Nej. Mange finder dig i Google eller på din hjemmeside. Opdatér de tre steder med samme formulering." },
    ],
    related: [
      { href: "/blog/hjemmeside-klar-til-jul-tjekliste", title: "Tjekliste til jul", desc: "12 ting at tjekke på din hjemmeside i december." },
      { href: "/blog/seo-tjekliste-lokale-virksomheder", title: "SEO-tjekliste til lokale virksomheder", desc: "Google-profil, anmeldelser og lokale søgninger." },
      { href: "/seo-horsens", title: "SEO i Horsens", desc: "Bliv fundet af kunder i dit område." },
    ],
  },

  /* ───────────────────────────── 4. Nytårstjek ───────────────────────────── */
  {
    ...base,
    slug: "nytaarstjek-hjemmeside-2027",
    title: "Nytårstjek af din hjemmeside: 15 ting i januar | WebHjerte",
    description:
      "Nytårstjek af din hjemmeside: årstal, kontaktoplysninger, domæne, backup, Search Console, hastighed og tilgængelighed. En praktisk liste til januar 2027.",
    keywords: ["tjek hjemmeside nytår", "hjemmeside tjekliste 2027", "nytårstjek hjemmeside", "hjemmeside januar", "vedligeholdelse hjemmeside", "domæne fornyelse"],
    name: "Nytårstjek af hjemmesiden 2027",
    category: "Nytår",
    h1: "Nytårstjek af din hjemmeside: 15 ting, du gør i januar",
    intro:
      "Mange rydder op i økonomi og kalender omkring nytår, men glemmer hjemmesiden. Her er en enkel liste, så du kan starte 2027 med en hjemmeside, der er opdateret, hurtig og klar til nye kunder.",
    summary:
      "Brug en eftermiddag i begyndelsen af januar på at tjekke fem områder: indholdet (årstal, priser, kontaktoplysninger), teknikken (opdateringer, backup, hastighed), det juridiske (cookies, privatlivspolitik, tilgængelighed), din synlighed (Search Console, Google-profil, anmeldelser) og dine mål for året. Det er billigt, kedeligt og værdifuldt.",
    readMinutes: 10,
    sections: [
      {
        h2: "Hvorfor januar er det rigtige tidspunkt",
        paragraphs: [
          "Efter jul er der en kort periode, hvor mange virksomheder har lidt mere ro, og hvor folk begynder at søge efter nye ting: en ny frisør, en træningstid, en håndværker til forårets projekter, en revisor. Det er også tidspunktet, hvor du kan se tilbage på året og se, hvad din hjemmeside faktisk har leveret.",
          "Et nytårstjek er ikke et redesign. Det er den samme rutine, som du ville have for en bil: kig under motorhjelmen, skift det, der er slidt, og find ud af, om du skal have noget større lavet i løbet af året.",
        ],
        quote: "En hjemmeside, der ikke bliver ofret opmærksomhed, ældes hurtigere end én, der får fem minutters pleje hver måned.",
      },
      {
        h2: "Indhold: det kunden ser først",
        subs: [
          {
            h3: "1. Årstal og datoer",
            paragraphs: ["Står der “© 2025” i bunden? Er der en kampagne fra sidste år, der stadig ligger på forsiden? Gamle årstal får en hjemmeside til at se forladt ud, også selv om alt andet virker."],
          },
          {
            h3: "2. Ydelser og priser",
            paragraphs: ["Gennemgå dine ydelser. Tilbyder du dem stadig? Har du nye? Er beskrivelserne stadig rigtige? Står der priser eller timer, så tjek, at de passer til det, du ønsker i 2027."],
          },
          {
            h3: "3. Kontaktoplysninger og åbningstider",
            paragraphs: ["Telefon, mail, adresse og åbningstider skal være ens på hjemmesiden, i Google og på sociale medier. Fjern julens beskeder, hvis de stadig står der."],
          },
          {
            h3: "4. Billeder og eksempler på dit arbejde",
            paragraphs: ["Få et par nye billeder af dit arbejde, dit team eller din butik. Ægte billeder slår stockfotos, og de viser kunden, at du stadig er aktiv."],
          },
          {
            h3: "5. Anmeldelser og referencer",
            paragraphs: ["Tilføj nye anmeldelser og kundeudtalelser, og fjern dem, der er meget gamle eller ikke længere passer. Brug kun anmeldelser, du har tilladelse til at vise."],
          },
        ],
      },
      {
        h2: "Teknik: det kunden ikke ser, men mærker",
        subs: [
          {
            h3: "6. Opdateringer",
            paragraphs: ["Kører din hjemmeside på WordPress eller et lignende system, skal tema, plugins og kerne opdateres. Tag en backup først, og gør det på et roligt tidspunkt, ikke midt i en travl uge."],
          },
          {
            h3: "7. Backup",
            paragraphs: ["Spørg dig selv: Hvis siden gik ned i morgen, hvor hurtigt kunne den være oppe igen? Har du en backup, og har du prøvet at gendanne den? En backup, du aldrig har testet, er en antagelse."],
          },
          {
            h3: "8. Domæne og hosting",
            paragraphs: ["Tjek, hvornår dit domæne og din hosting udløber, og hvem der betaler. Flere virksomheder har mistet deres domæne, fordi en mail med påmindelsen gik til en gammel adresse. For .dk-domæner er det Punktum dk, der står bag."],
            cta: { href: "/hosting-og-vedligeholdelse", label: "Hosting og vedligeholdelse" },
          },
          {
            h3: "9. Hastighed og mobil",
            paragraphs: ["Test siden på en rigtig telefon. Er den hurtig? Kan du trykke på knapperne? Er teksten stor nok? Det er mobilbrugerne, der oftest giver op først."],
          },
          {
            h3: "10. Døde links og fejl",
            paragraphs: ["Klik rundt på dine vigtigste sider. Er der links, der ender i en fejlside? Har du kampagnesider, der er udløbet? Ret dem eller fjern dem, så kunden ikke hænger fast."],
          },
        ],
      },
      {
        h2: "Regler og tryghed",
        subs: [
          {
            h3: "11. Cookies og privatlivspolitik",
            paragraphs: ["Tjek, at dit cookiebanner fungerer, og at din privatlivspolitik passer til det, du faktisk gør (fx om du bruger analyseværktøjer, annoncer eller nyhedsbreve). Du bør ikke indsamle data, du ikke har samtykke til."],
          },
          {
            h3: "12. Tilgængelighed",
            paragraphs: [
              "Flere regler om tilgængelighed er kommet de seneste år, især for webshops og andre digitale tjenester. Meget små virksomheder er i vidt omfang undtaget, men det er stadig god praksis at have tilstrækkelig kontrast, læsbar tekst og billeder med beskrivelser. Er du i tvivl om, om reglerne gælder for dig, så spørg en rådgiver eller tjek hos myndighederne.",
            ],
          },
        ],
      },
      {
        h2: "Synlighed: bliver du fundet?",
        subs: [
          {
            h3: "13. Google Search Console",
            paragraphs: ["Her kan du se, hvilke søgninger din hjemmeside vises på, og hvilke sider der får klik. Se på de seneste måneder: er der søgninger, du ikke vidste om? Er der sider, der slet ikke bliver fundet?"],
          },
          {
            h3: "14. Google Virksomhedsprofil",
            paragraphs: ["Opdatér beskrivelse, billeder og åbningstider, og svar på anmeldelser, du ikke har svaret på. Profilen er for mange lokale virksomheder den vigtigste kilde til nye kunder."],
            cta: { href: "/blog/seo-tjekliste-lokale-virksomheder", label: "SEO-tjekliste til lokale virksomheder" },
          },
          {
            h3: "15. Mål for 2027",
            paragraphs: ["Skriv ned, hvad hjemmesiden skal hjælpe med i år: flere henvendelser, flere bookinger, færre spørgsmål i telefonen eller bedre synlighed i AI-søgning. Uden et mål ved du ikke, om den virker."],
          },
        ],
      },
      {
        h2: "Et 60-minutters forløb",
        paragraphs: [
          "Hvis det virker uoverskueligt, så del det op. Her er en rækkefølge, jeg selv bruger, når jeg gennemgår en hjemmeside for første gang. Den er lavet, så du kan stoppe efter hvert trin og stadig have gjort noget nyttigt.",
        ],
        steps: [
          { title: "10 minutter: kig som en kunde", text: "Åbn siden på din telefon. Hvad ser du først? Kan du finde telefonnummer, adresse og åbningstider på under ti sekunder?" },
          { title: "15 minutter: ret det, du kan se", text: "Gamle årstal, forkerte tider, udløbne tilbud, forældede billeder og døde links." },
          { title: "15 minutter: tjek tallene", text: "Se i Search Console og Analytics, hvad der skete i 2026: Hvilke sider blev besøgt? Hvor mange kontaktede dig?" },
          { title: "10 minutter: tjek teknikken", text: "Hvornår udløber domænet, hvem har adgang, og hvornår blev der sidst taget backup?" },
          { title: "10 minutter: skriv tre ting ned", text: "De tre vigtigste ting, du vil forbedre i år. Mere end tre bliver sjældent gjort." },
        ],
      },
      {
        h2: "En lille rutine hele året",
        paragraphs: [
          "Et årligt tjek er godt, men en kort månedlig rutine er bedre. Den tager under en halv time og forhindrer, at små fejl vokser sig store.",
        ],
        table: {
          head: ["Hvornår", "Hvad", "Tid"],
          rows: [
            ["Hver måned", "Test kontaktformularen, se på nye henvendelser, kig efter fejl", "Ca. 15 minutter"],
            ["Hvert kvartal", "Opdateringer, backup, hastighed og ny tekst eller nye billeder", "Ca. 1 time"],
            ["Hvert halve år", "Gennemgå ydelser, kontaktoplysninger og Google-profil", "Ca. 1 time"],
            ["Hvert år", "Nytårstjek, domæne og hosting, mål for hjemmesiden", "Ca. 2 timer"],
          ],
        },
        after: ["Tiderne er et skøn, ikke en garanti. Har du en stor eller kompliceret hjemmeside, tager det længere."],
      },
      {
        h2: "Det oversete: hvem har adgang til hvad?",
        paragraphs: [
          "En af de mest almindelige årsager til, at en hjemmeside går i stå, er ikke en teknisk fejl. Det er, at ingen ved, hvem der har loginet. Domænet er oprettet af en tidligere medarbejder, hosting betales med et kort, der er udløbet, eller mailen med påmindelser går til en adresse, ingen læser.",
          "Brug nytåret til at lave en lille liste: hvem ejer domænet, hvor ligger hjemmesiden, hvem kan logge ind, og hvem får mails om fornyelser. Gem listen et sted, flere kan finde den. Det tager ti minutter og kan spare dig for en meget dyr dag i fremtiden.",
        ],
        callout: {
          tone: "warning",
          title: "Domænet tilhører dig",
          text: "Domænet skal stå i dit eller din virksomheds navn, ikke i en udvikler eller et bureaus. Hos mig tilhører både domæne og kode kunden. Tjek, at det samme gælder dig, hvis du har fået bygget en hjemmeside af andre.",
        },
      },
      {
        h2: "Hvad skal du gøre med resultatet?",
        paragraphs: [
          "Når du har gået listen igennem, så sortér det, du fandt, i tre bunker. Det, der kan rettes straks. Det, der kræver hjælp. Og det, der kan vente til resten af året. Det giver dig et realistisk overblik, i stedet for en uendelig to do-liste.",
        ],
        table: {
          head: ["Bunke", "Eksempel", "Hvad gør du"],
          rows: [
            ["Ret nu", "Gamle årstal, forkert telefonnummer, udløbet kampagne", "Gør det selv i løbet af en time"],
            ["Få hjælp", "Opdateringer, backup, langsom side, Search Console", "Aftal med din udvikler eller bureau"],
            ["Planlæg", "Nyt design, nyt indhold, ny struktur", "Sæt det ind i et kvartal, og beslut budget"],
          ],
        },
      },
      {
        h2: "Vil du have et ærligt blik?",
        paragraphs: [
          "Hvis du vil, kan jeg gå din hjemmeside igennem og sende dig en kort liste over, hvad der haster, og hvad der kan vente. Du får et ærligt svar, også hvis det er, at du ikke behøver at gøre noget.",
        ],
        cta: { href: "/gratis-seo-tjek-horsens", label: "Få et gratis tjek" },
      },
    ],
    faqs: [
      { q: "Hvor ofte skal jeg tjekke min hjemmeside?", a: "En grundig gennemgang én gang om året, som nytårstjekket her, og en hurtig kigger hver måned på åbningstider, kontaktformular og opdateringer." },
      { q: "Hvad hvis jeg ikke ved, om min hjemmeside har en backup?", a: "Spørg din hosting-udbyder eller den, der har bygget siden. Hvis ingen kan svare, er det et tegn på, at du bør få styr på det." },
      { q: "Er et nytårstjek det samme som et redesign?", a: "Nej. Et tjek handler om at finde fejl og forældet indhold. Et redesign er en større ændring, som du først skal overveje, når du har set, hvad tjekket viser." },
      { q: "Kan I gøre det for mig?", a: "Ja. Jeg kan gennemgå hjemmesiden og give dig en liste over, hvad der bør rettes, og hvad der kan vente. Du får en fast pris, før jeg går i gang." },
    ],
    related: [
      { href: "/blog/hjemmesideplan-2027-kvartal-for-kvartal", title: "Hjemmesideplan for 2027", desc: "Kvartal for kvartal." },
      { href: "/blog/ny-hjemmeside-i-det-nye-aar", title: "Skal du have ny hjemmeside?", desc: "Sådan afgør du det." },
      { href: "/hosting-og-vedligeholdelse", title: "Hosting og vedligeholdelse", desc: "Backup og opdateringer." },
    ],
  },

  /* ───────────────────────────── 5. Hjemmesideplan 2027 ───────────────────────────── */
  {
    ...base,
    slug: "hjemmesideplan-2027-kvartal-for-kvartal",
    title: "Hjemmesideplan 2027: kvartal for kvartal | WebHjerte",
    description:
      "En enkel plan for din hjemmeside i 2027: mål, indhold, SEO, AI-synlighed og vedligehold i fire kvartaler. Til små virksomheder uden marketingafdeling.",
    keywords: ["hjemmesideplan 2027", "webstrategi lille virksomhed", "marketingplan lille virksomhed", "nytårsforsæt virksomhed hjemmeside", "SEO plan 2027", "indholdsplan hjemmeside"],
    name: "Hjemmesideplan for 2027",
    category: "Nytår",
    h1: "Din hjemmesideplan for 2027: kvartal for kvartal",
    intro:
      "De fleste små virksomheder arbejder med deres hjemmeside, når der er tid. Det betyder, at den ofte ikke bliver rørt i månedsvis. En lille plan, delt op i fire kvartaler, gør, at den bliver bedre hele året, uden at det bliver et fuldtidsjob.",
    summary:
      "Sæt ét mål for hjemmesiden i 2027, og del arbejdet op i fire kvartaler: Q1 fundament og mål, Q2 indhold og lokal synlighed, Q3 AI-synlighed og kvalitet, Q4 salg og forberedelse til næste jul. Hvert kvartal skal have højst tre opgaver. Det er bedre at gøre få ting rigtigt end mange halvt.",
    readMinutes: 10,
    sections: [
      {
        h2: "Start med ét mål",
        paragraphs: [
          "En plan uden mål bliver til en to do-liste. Før du tænker på indhold, design eller værktøjer, så beslut, hvad hjemmesiden skal hjælpe dig med i 2027. Vælg ét hovedmål, så du ved, hvad du skal vurdere resten ud fra.",
        ],
        bullets: [
          "Flere henvendelser: “Jeg vil have flere, der kontakter mig om nye opgaver.”",
          "Flere bookinger: “Jeg vil have flere, der selv booker en tid.”",
          "Mere salg online: “Jeg vil have flere køb i webshoppen.”",
          "Færre gentagne spørgsmål: “Jeg vil spare tid i telefonen.”",
          "Bedre synlighed: “Jeg vil blive fundet af flere i mit område, også i AI-søgning.”",
        ],
        callout: {
          tone: "tip",
          title: "Mål, du kan se",
          text: "Vælg et mål, du kan følge uden avancerede værktøjer. Antal henvendelser, antal bookinger eller antal opkald er fint. Skriv startpunktet ned nu, så du i december kan se, om noget har rykket sig.",
        },
      },
      {
        h2: "Første kvartal: fundament",
        paragraphs: [
          "Januar til marts handler om at få det grundlæggende i orden. Det er ikke spændende, men det er det, alt andet bygger på.",
        ],
        bullets: [
          "Nytårstjek: gennemgå indhold, teknik og regler (se guiden)",
          "Sæt analyse og Search Console op, så du kan måle det, du har sat som mål",
          "Opdatér Google Virksomhedsprofil med nye billeder, tider og beskrivelse",
          "Skriv ned, hvem dine kunder er, og hvad de spørger om oftest",
        ],
        cta: { href: "/blog/nytaarstjek-hjemmeside-2027", label: "Guide: nytårstjek af hjemmesiden" },
      },
      {
        h2: "Andet kvartal: indhold og lokal synlighed",
        paragraphs: [
          "April til juni er et godt tidspunkt til at skrive. Du har data fra første kvartal, og mange virksomheder er i gang med forårets travlhed, hvor der er nye kunder at vinde.",
        ],
        bullets: [
          "Lav en side for hver af dine vigtigste ydelser, med konkrete svar og eksempler",
          "Skriv en lille FAQ med de spørgsmål, du faktisk får",
          "Bed dine tilfredse kunder om en Google-anmeldelse, og svar på dem alle",
          "Tilføj billeder fra rigtige opgaver, og skriv hvor de er lavet",
        ],
        cta: { href: "/seo-horsens", label: "Lokal SEO i Horsens" },
      },
      {
        h2: "Tredje kvartal: kvalitet og AI-synlighed",
        paragraphs: [
          "Juli til september er ofte stille for mange. Brug det på at gøre hjemmesiden stærkere, ikke bare større. Kunderne spørger i stigende grad en AI-assistent, og de fleste vurderinger peger på, at det bliver mere almindeligt. Det betyder ikke, at du skal gøre alt om, men at dine svar skal være klare og lette at citere.",
        ],
        bullets: [
          "Gennemgå dine vigtigste sider: svarer første sætning på spørgsmålet?",
          "Sørg for, at navn, adresse, telefon og beskrivelse er ens overalt",
          "Tilføj struktureret data, hvor det giver mening",
          "Test hastighed og mobil igen, og ret det, der er langsomt",
        ],
        cta: { href: "/blog/saadan-bliver-du-nevnt-af-chatgpt-og-google-ai", label: "Guide: bliv nævnt af ChatGPT og Google AI" },
      },
      {
        h2: "Fjerde kvartal: salg og forberedelse til jul 2027",
        paragraphs: [
          "Oktober til december er travlt, så det er her, du høster det, du har lavet resten af året. Det er også her, du skal passe på ikke at ændre for meget.",
        ],
        bullets: [
          "Planlæg julens tilbud, gavekort og åbningstider i september eller oktober",
          "Gennemgå betaling, levering og returnering i god tid",
          "Frys større ændringer fra midten af november",
          "Gem det, du har lært, så du kan bruge det næste år",
        ],
        cta: { href: "/blog/hjemmeside-klar-til-jul-tjekliste", label: "Tjekliste til jul" },
      },
      {
        h2: "Overblik i én tabel",
        table: {
          head: ["Kvartal", "Fokus", "Resultat"],
          rows: [
            ["Q1: jan–mar", "Fundament, mål og måling", "En ren, hurtig hjemmeside, du kan måle på"],
            ["Q2: apr–jun", "Indhold og lokal synlighed", "Flere sider, der svarer på kundernes spørgsmål"],
            ["Q3: jul–sep", "Kvalitet og AI-synlighed", "Klare, citérbare svar og ens oplysninger overalt"],
            ["Q4: okt–dec", "Salg og julen 2027", "En hjemmeside, der er klar til travlheden"],
          ],
        },
        after: ["Planen er en skabelon, ikke en regel. Flyt rundt, så den passer til din branche. En havearkitekt har travlt om foråret, en revisor omkring årsskiftet."],
      },
      {
        h2: "Sådan prioriterer du, når tiden er knap",
        paragraphs: [
          "Du får ikke tid til det hele, og det er fint. Det vigtigste er at vælge de opgaver, der har størst betydning for dit mål, og springe resten over uden dårlig samvittighed. Brug de her tre spørgsmål, når du er i tvivl.",
        ],
        subs: [
          { h3: "Hjælper det mit mål?", paragraphs: ["Hvis målet er flere henvendelser, er en ny side om din vigtigste ydelse mere værd end et nyt billede på forsiden. Tjek altid opgaven mod det, du har skrevet ned."] },
          { h3: "Kan jeg gøre det på under en time?", paragraphs: ["Små opgaver, der giver synlig forskel, skal gøres først: opdatér åbningstider, ret et link, svar på en anmeldelse. Større opgaver kan planlægges ind i et kvartal."] },
          { h3: "Skal jeg bruge hjælp?", paragraphs: ["Hvis opgaven kræver teknik, som du ikke har lyst til eller tid til at lære, så få hjælp. Det er ofte billigere end den tid, du bruger på at finde ud af det selv."] },
        ],
      },
      {
        h2: "Et eksempel: plan for en lokal håndværker (opdigtet)",
        paragraphs: [
          "Forestil dig en tømrer i Horsens med en enkel hjemmeside og en Google-profil, der ikke er blevet opdateret i lang tid. Hans mål er flere henvendelser om tilbygninger og terrasser. Hans plan kunne se sådan ud:",
        ],
        bullets: [
          "Q1: Ryd op i Google-profilen, tilføj billeder fra de seneste projekter, opsæt måling af opkald og henvendelser",
          "Q2: Skriv to sider, én om terrasser og én om tilbygninger, med billeder, hvad der typisk indgår, og hvordan en henvendelse foregår",
          "Q3: Bed de seneste kunder om anmeldelser, og gennemgå hjemmesiden for hastighed og klare svar",
          "Q4: Planlæg lukkedage og besked om bestilling til foråret, så julen ikke bliver en travl periode med uklare tider",
        ],
        after: ["Eksemplet er opdigtet og skal ikke læses som et resultat. Det viser blot, hvordan en plan kan holdes enkel, så den faktisk bliver gjort."],
      },
      {
        h2: "Det plejer at gå galt",
        bullets: [
          "For mange opgaver: En plan med tyve punkter bliver ikke gennemført. Vælg højst tre pr. kvartal",
          "Ingen måling: Uden et startpunkt ved du ikke, om noget har virket",
          "Det hele skal være perfekt: Det er bedre at udgive en god side nu end en perfekt side i oktober",
          "Planen ligger i en skuffe: Sæt en kalenderpåmindelse til hvert kvartal, hvor du tjekker, hvad der er sket",
          "Alt udsættes til december: Det er den travleste måned, og her bør du ikke lave store ændringer",
        ],
      },
      {
        h2: "Hvad hvis du ikke selv har tid?",
        paragraphs: [
          "Det er normalt. De fleste små virksomheder har ikke en marketingafdeling, og det er helt fint. Vælg de opgaver, der betyder mest for dit mål, og få hjælp til resten. Jeg kan lave planen sammen med dig og tage de tekniske dele, så du kan koncentrere dig om det, du er bedst til. Du får altid en fast pris, før jeg går i gang.",
        ],
        cta: { href: "/kontakt", label: "Lad os lave din plan" },
      },
    ],
    faqs: [
      { q: "Hvor mange timer skal jeg bruge på hjemmesiden om måneden?", a: "Det afhænger af dit mål. For mange små virksomheder er et par timer om måneden nok til at holde den opdateret og skrive lidt nyt. Det vigtigste er, at det sker regelmæssigt." },
      { q: "Skal jeg skrive blogindlæg?", a: "Ikke nødvendigvis. Skriv sider og svar, der hjælper dine kunder. Hvis du har noget at fortælle, kan et blogindlæg være en god måde at gøre det på, men det er ikke et krav." },
      { q: "Hvornår kan jeg forvente resultater af SEO?", a: "Det varierer, og ingen kan love placeringer i Google. Typisk tager det flere måneder at se en tydelig effekt, så planlæg efter et helt år, ikke en måned." },
      { q: "Kan jeg ændre planen undervejs?", a: "Ja, og det bør du. Planen er et udgangspunkt. Se på tallene hvert kvartal, og tilpas den ud fra det, der virker." },
    ],
    related: [
      { href: "/blog/nytaarstjek-hjemmeside-2027", title: "Nytårstjek", desc: "15 ting at gøre i januar." },
      { href: "/blog/webstrategi", title: "Webstrategi", desc: "Når hjemmesiden skal arbejde for dig." },
      { href: "/ai-seo", title: "AI SEO", desc: "Bliv fundet i Google og AI-søgning." },
    ],
  },

  /* ───────────────────────────── 6. Ny hjemmeside i det nye år ───────────────────────────── */
  {
    ...base,
    slug: "ny-hjemmeside-i-det-nye-aar",
    title: "Ny hjemmeside i 2027? Sådan afgør du det | WebHjerte",
    description:
      "Ny hjemmeside eller opfriskning? 9 tegn på, at det er tid, hvad du kan nøjes med at rette, og hvordan du forbereder dig, så du er klar i foråret 2027.",
    keywords: ["ny hjemmeside 2027", "redesign hjemmeside", "skal jeg have ny hjemmeside", "opdatere hjemmeside eller ny", "hjemmeside tegn på gammel", "ny hjemmeside lille virksomhed"],
    name: "Skal du have ny hjemmeside i 2027?",
    category: "Nytår",
    h1: "Skal du have ny hjemmeside i 2027? Sådan afgør du det",
    intro:
      "Mange tænker på en ny hjemmeside omkring nytår, men udskyder det, fordi det virker stort. Her er en enkel måde at finde ud af, om du skal bygge nyt, rette det eksisterende eller bare lade det være.",
    summary:
      "Du har sandsynligvis brug for en ny hjemmeside, hvis den ikke virker ordentligt på mobil, er langsom, ikke kan rettes af dig, ikke længere passer til din virksomhed eller ikke giver henvendelser. Er det kun indholdet, der er forældet, behøver du ikke en ny. Start med et tjek, og bed om en fast pris, før du beslutter.",
    readMinutes: 10,
    sections: [
      {
        h2: "Det store spørgsmål",
        paragraphs: [
          "Når jeg møder en ny kunde, er det første, jeg spørger om: “Hvad vil du have, at hjemmesiden skal gøre?” Svaret afgør, om der er brug for en ny. Nogle gange er det klogere at rette tre ting end at bygge hele siden om. Andre gange er det spild at lappe på noget, der aldrig kommer til at fungere.",
          "Her er de tegn, jeg ser oftest, og hvad de betyder.",
        ],
      },
      {
        h2: "9 tegn på, at det er tid",
        subs: [
          { h3: "1. Den virker ikke godt på mobil", paragraphs: ["Hvis du skal zoome, vandret scrolle eller ramme små knapper, mister du kunder. De fleste besøger hjemmesider fra telefonen."] },
          { h3: "2. Den er langsom", paragraphs: ["Når en side tager lang tid at åbne, forlader folk den. Hastighed kan ofte forbedres, men er platformen forældet, kan det være billigere at bygge nyt end at lappe."] },
          { h3: "3. Du kan ikke rette den selv, eller du er bange for at røre den", paragraphs: ["Hvis hver ændring kræver en udvikler, eller du er bange for at ødelægge noget, er det et tegn på, at systemet ikke passer til dig."] },
          { h3: "4. Den passer ikke længere til din virksomhed", paragraphs: ["Hvis du har nye ydelser, et nyt navn, en ny målgruppe eller et nyt område, og siden stadig fortæller en gammel historie, er det værd at overveje."] },
          { h3: "5. Den giver ikke henvendelser", paragraphs: ["Hvis hjemmesiden får besøg, men ingen kontakter dig, kan der være noget galt med budskabet, strukturen eller knapperne. Det kan ofte rettes uden at bygge alt om, men ikke altid."] },
          { h3: "6. Den ser forældet ud", paragraphs: ["Design alene er sjældent grund nok, men en side, der ser ud, som om den er fra 2012, kan få kunder til at tvivle på, om du stadig er aktiv."] },
          { h3: "7. Den har sikkerhedsproblemer eller mange fejl", paragraphs: ["Hvis siden er blevet hacket, eller der hele tiden dukker nye fejl op, er det dyrt i tid og tillid. Her kan en ny og enkel løsning være billigere."] },
          { h3: "8. Du betaler for meget til drift og abonnementer", paragraphs: ["Regn det samlede beløb for domæne, hosting, plugins og vedligehold sammen. Nogle gange er en enklere løsning mere økonomisk."] },
          { h3: "9. Du kan ikke måle noget", paragraphs: ["Hvis du ikke ved, hvor mange der kontakter dig fra hjemmesiden, eller hvad de kigger på, er det svært at forbedre noget."] },
        ],
      },
      {
        h2: "Nyt, opfriskning eller ingenting?",
        paragraphs: ["Brug oversigten som udgangspunkt, ikke som facit. Jeg kigger altid på den konkrete side, før jeg anbefaler noget."],
        table: {
          head: ["Situation", "Typisk vej", "Hvorfor"],
          rows: [
            ["Gammelt indhold, men siden virker", "Opfriskning", "Rettelser af tekst, billeder og kontaktoplysninger er nok"],
            ["Godt indhold, men langsom eller dårlig på mobil", "Teknisk oprydning, evt. ny løsning", "Afhænger af, hvad der gør den langsom"],
            ["Virksomheden har ændret sig meget", "Ny hjemmeside", "Struktur og budskab skal passe til det nye"],
            ["Intet er galt, og du får henvendelser", "Lad den være, og hold den vedlige", "Skift ikke noget, der virker"],
            ["Siden er hacket eller platformen er forældet", "Ny hjemmeside", "Det er ofte billigere end at lappe videre"],
          ],
        },
      },
      {
        h2: "Hvad en ny hjemmeside skal kunne i 2027",
        paragraphs: [
          "Beslutter du at bygge nyt, så sæt kravene, før du ser på design. En god hjemmeside til en lille virksomhed skal i mine øjne kunne fire ting.",
        ],
        bullets: [
          "Svare tydeligt: Hvad laver du, for hvem, hvor, og hvordan kommer jeg i kontakt? Det skal stå øverst, ikke gemt.",
          "Være hurtig og let at bruge på mobil: Kunden skal ikke vente eller zoome.",
          "Være nem at holde ved lige: Du eller din udvikler skal kunne rette tekst, åbningstider og billeder uden besvær.",
          "Kunne findes: Både i Google og i AI-søgning. Det kræver klare svar, ens oplysninger og en teknisk korrekt side.",
        ],
        cta: { href: "/blog/wordpress-eller-skraeddersyet", label: "WordPress eller skræddersyet?" },
      },
      {
        h2: "Sådan forbereder du dig i januar",
        paragraphs: ["Det vigtigste, du kan gøre, før du kontakter nogen, er at samle det, de skal bruge. Så går det hurtigere, og du undgår misforståelser."],
        steps: [
          { title: "Skriv dit mål ned", text: "Hvad skal hjemmesiden hjælpe dig med? Flere henvendelser, flere bookinger, mere salg?" },
          { title: "Saml tekster og billeder", text: "De ydelser, du tilbyder, kontaktoplysninger, 10–20 gode billeder og et par kundeudtalelser." },
          { title: "Find dine adgange", text: "Login til domæne, hosting og eventuelle abonnementer, så en flytning ikke bliver forsinket." },
          { title: "Vælg én beslutningstager", text: "Det sparer ofte flere dage, at én person har det sidste ord." },
        ],
        callout: {
          tone: "fact",
          title: "Tid og tidsplan",
          text: "Hvor lang tid det tager, afhænger af størrelsen. Små hjemmesider kan typisk blive klar på få dage, større løsninger tager længere. Se tidsplanen i guiden om, hvor lang tid det tager at lave en hjemmeside.",
        },
        cta: { href: "/blog/hvor-lang-tid-tager-det-at-lave-en-hjemmeside", label: "Guide: hvor lang tid tager det?" },
      },
      {
        h2: "Redesign, ny hjemmeside eller relancering?",
        paragraphs: [
          "Ordene bruges lidt i flæng, så her er min forklaring. Det er vigtigt, fordi det påvirker både tid, budget og risiko.",
        ],
        subs: [
          { h3: "Opfriskning", paragraphs: ["Du beholder strukturen og systemet, men retter tekst, billeder, farver og detaljer. Det er hurtigt, og det er ofte nok, hvis grundlaget er godt."] },
          { h3: "Redesign", paragraphs: ["Det visuelle udtryk og layoutet skiftes, men indholdet og strukturen bevares i store træk. Det kan lade sig gøre, hvis systemet bagved stadig fungerer."] },
          { h3: "Ny hjemmeside", paragraphs: ["Du starter forfra: nyt design, ny struktur og ofte nyt system. Det giver friheden til at rette alt, men kræver, at du planlægger flytning af indhold og gamle adresser."] },
        ],
      },
      {
        h2: "Pas på ved flytning: bevar det, Google kender",
        paragraphs: [
          "Hvis din hjemmeside allerede bliver fundet i Google, er der en risiko ved at bygge en ny. Skifter sider adresse uden at blive videresendt, mister du synlighed og besøgende, der klikker på gamle links, ender på en fejlside. Det er ikke svært at undgå, men det skal planlægges fra start.",
        ],
        bullets: [
          "Lav en liste over de vigtigste sider og adresser, før du bygger noget",
          "Aftal, at gamle adresser videresendes til de nye (301-omdirigering)",
          "Behold tekst, der klarer sig godt, og forbedr den frem for at starte forfra",
          "Tjek i Search Console efter lanceringen, om der opstår fejl",
          "Giv det tid: Det tager typisk uger for Google at forstå en ny struktur, og ingen kan love placeringer",
        ],
      },
      {
        h2: "Spørgsmål, du kan stille til den, der bygger siden",
        paragraphs: ["Uanset hvem du vælger, bør du kunne få klare svar på disse spørgsmål, før du siger ja."],
        bullets: [
          "Hvem ejer domæne og kode? Svaret bør være: dig",
          "Hvad indgår i prisen, og hvad koster det ekstra? Få det skriftligt",
          "Hvordan flyttes mit nuværende indhold og mine gamle adresser?",
          "Hvordan retter jeg selv tekst og billeder bagefter?",
          "Hvad sker der, hvis noget går i stykker efter lanceringen?",
        ],
        cta: { href: "/blog/vaelg-webbureau-10-spoergsmaal", label: "Guide: vælg webbureau, 10 spørgsmål" },
      },
      {
        h2: "Hvordan jeg arbejder",
        paragraphs: [
          "Jeg viser dig et designudkast hurtigt, typisk inden for 48 timer efter vores samtale. Passer det ikke, betaler du ikke for designet. Intet bygges, før du har godkendt det, og domæne og kode tilhører dig. Prisen står klart, før jeg går i gang, så du ikke får en overraskelse bagefter. Pakker og priser finder du under Services.",
        ],
        cta: { href: "/services", label: "Se pakker og beregn din pris" },
      },
      {
        h2: "Vil du vide, hvad din side har brug for?",
        paragraphs: [
          "Skriv til mig med et link til din nuværende hjemmeside. Jeg kigger på den og giver dig et ærligt svar: ny, opfrisket eller lad den være. Hvis du ikke har brug for mig, så siger jeg det.",
        ],
        cta: { href: "/kontakt", label: "Få et ærligt svar" },
      },
    ],
    faqs: [
      { q: "Hvordan ved jeg, om jeg har brug for en ny hjemmeside?", a: "Hvis den ikke virker på mobil, er langsom, ikke giver henvendelser, eller ikke længere passer til din virksomhed, er det et godt tegn. Er det kun indholdet, der er forældet, kan en opfriskning være nok." },
      { q: "Hvornår er det bedst at få en ny hjemmeside?", a: "Januar og februar er et godt tidspunkt, fordi du kan være klar til foråret og slippe for at ændre noget i julen. Men det rigtige tidspunkt er, når du har tid til at give tekster og billeder, og ikke midt i din travleste periode." },
      { q: "Mister jeg min placering i Google ved en ny hjemmeside?", a: "Ikke nødvendigvis, men det kræver, at gamle adresser videresendes korrekt, og at indholdet ikke forsvinder. Det er noget, man planlægger fra starten." },
      { q: "Hvad koster en ny hjemmeside?", a: "Det afhænger af, hvor stor den skal være, og hvad den skal kunne. Du kan se pakker og beregne din pris under Services, og du får altid en fast pris, før jeg går i gang." },
    ],
    related: [
      { href: "/blog/nytaarstjek-hjemmeside-2027", title: "Nytårstjek", desc: "Se først, hvad der faktisk er galt." },
      { href: "/blog/vaelg-webbureau-10-spoergsmaal", title: "Vælg webbureau", desc: "10 spørgsmål at stille." },
      { href: "/webdesign-horsens", title: "Webdesign i Horsens", desc: "Hjemmesider til små virksomheder." },
    ],
  },

  /* ───────────────────────────── 7. Trends 2027 ───────────────────────────── */
  {
    ...base,
    slug: "hjemmeside-trends-2027-smaa-virksomheder",
    title: "Hjemmeside-trends 2027 for små virksomheder | WebHjerte",
    description:
      "Hjemmeside-trends 2027 for små virksomheder: AI-søgning, lokal SEO, hastighed, mobil og tillid. Hvad der betyder noget, og hvad du roligt kan ignorere.",
    keywords: ["hjemmeside trends 2027", "webdesign trends 2027", "AI søgning hjemmeside", "lokal SEO 2027", "hjemmeside små virksomheder 2027", "webdesign tendenser"],
    name: "Hjemmeside-trends 2027 for små virksomheder",
    category: "Trends",
    h1: "Hjemmeside-trends 2027: det betyder noget for en lille virksomhed",
    intro:
      "Hver december bliver der skrevet lister over “årets webdesign-trends”. De fleste handler om udseende. Men for en lille virksomhed er det ikke farverne, der afgør, om kunderne ringer. Her er, hvad jeg tror betyder noget i 2027, og hvad du roligt kan lade ligge.",
    summary:
      "De trends, der betyder mest for små virksomheder i 2027, er de samme, som har gjort det de seneste år: hurtig og tydelig på mobil, lokal synlighed, tillid gennem rigtige billeder og anmeldelser, og klare svar, som både mennesker og AI kan bruge. Visuelle effekter, animationer og dark mode er valgfrie. Alle fremtidige forudsigelser er forventninger, ikke fakta.",
    readMinutes: 9,
    sections: [
      {
        h2: "Et ærligt forbehold først",
        paragraphs: [
          "Ingen ved, hvordan 2027 kommer til at se ud. Det jeg skriver her, er en vurdering baseret på det, jeg ser hos mine kunder, og på det, flere brancheguides peger på. Jeg bruger ord som “typisk” og “sandsynligvis”, fordi det er ærligt. Hvis nogen lover dig, at en trend giver dig flere kunder, så vær skeptisk.",
          "Til gengæld er det ret stabilt, hvad der betyder noget, når en kunde besøger en hjemmeside. De vil hurtigt se, om de er det rette sted, om du er troværdig, og hvordan de kontakter dig. Det er det, trends skal hjælpe med.",
        ],
      },
      {
        h2: "Trends, der betyder noget",
        subs: [
          {
            h3: "Hjemmesiden som svar, ikke brochure",
            paragraphs: [
              "Flere og flere stiller deres spørgsmål til en AI-assistent eller læser et AI-resumé i søgeresultatet i stedet for at klikke på ti sider. Det betyder, at færre besøger din hjemmeside, men at dem, der kommer, ofte er mere interesserede. For dig betyder det, at dine sider skal give klare, konkrete svar, ikke fyld.",
              "Skriv spørgsmålet i overskriften, og svar i første sætning. Det gør siden nemmere for både mennesker og AI at bruge, og det er det, jeg anbefaler til alle mine kunder.",
            ],
            cta: { href: "/blog/saadan-bliver-du-nevnt-af-chatgpt-og-google-ai", label: "Sådan bliver du nævnt af ChatGPT" },
          },
          {
            h3: "Lokal synlighed vægter højere",
            paragraphs: [
              "For lokale virksomheder er det stadig kombinationen af Google Virksomhedsprofil, anmeldelser og en hjemmeside med tydelige lokale oplysninger, der gør forskellen. Mange vurderer, at lokale søgninger fortsat bliver en vigtig kilde til henvendelser. Sørg for, at navn, adresse og telefon er ens overalt.",
            ],
            cta: { href: "/seo-horsens", label: "SEO i Horsens" },
          },
          {
            h3: "Hastighed og mobil som grundvilkår",
            paragraphs: [
              "Det er ikke en trend længere, det er et krav. En side, der er langsom eller svær at bruge på telefonen, taber kunder, uanset hvor flot den er. Hold siden enkel, brug billeder i passende størrelser, og undgå tunge effekter, der ikke tilfører noget.",
            ],
          },
          {
            h3: "Tillid frem for effekt",
            paragraphs: [
              "Rigtige billeder af dig og dit arbejde, rigtige anmeldelser, tydelig kontaktinformation og en side om, hvem der står bag. Kunderne bliver bedre til at gennemskue anonyme, polerede sider. Det, der virker, er det ægte.",
            ],
          },
          {
            h3: "Små, nyttige værktøjer",
            paragraphs: [
              "En lille prisberegner, en tidsbestilling, en tjekliste eller et spørgsmålsværktøj kan gøre en hjemmeside mere brugbar end ti sider tekst. Men kun hvis det løser et konkret problem for kunden, og ikke bare er pynt.",
            ],
          },
          {
            h3: "Tilgængelighed",
            paragraphs: [
              "God kontrast, læsbar tekst, tydelige knapper og beskrivelser til billeder hjælper alle, ikke kun brugere med handicap. Der er også kommet flere regler på området, så det er klogt at have det med fra start.",
            ],
          },
        ],
      },
      {
        h2: "Trends, du roligt kan ignorere",
        paragraphs: ["Det er fint at lege med nye ting, men lad ikke effekter komme foran det, kunden skal bruge."],
        compare: {
          good: {
            title: "Brug tid på",
            items: [
              "Tydelige svar og en klar første skærm",
              "Rigtige billeder og anmeldelser",
              "Hurtig og enkel mobiloplevelse",
              "Ens oplysninger i Google og på hjemmesiden",
              "Måling af henvendelser og bookinger",
            ],
          },
          bad: {
            title: "Spild ikke tid på",
            items: [
              "Tunge animationer og effekter, der gør siden langsom",
              "AI-genererede billeder, der ikke ligner dig eller dit arbejde",
              "En chatbot uden formål og uden de rigtige svar",
              "Dark mode, hvis det ikke passer til dit brand",
              "At kopiere en konkurrents design uden at tænke over, hvad din kunde har brug for",
            ],
          },
        },
      },
      {
        h2: "Sådan ændrer AI-søgning, hvad en hjemmeside skal gøre",
        paragraphs: [
          "Det mest interessante skifte i de seneste år er ikke et nyt design, men en ny måde at finde ting på. Når kunder spørger en AI-assistent, får de ofte et samlet svar, hvor kilderne nævnes, men ikke altid bliver klikket på. Det betyder, at hjemmesiden bliver en kilde, ikke bare en destination.",
          "For en lille virksomhed er konsekvensen praktisk, ikke dramatisk. Din hjemmeside skal stadig være pæn og nem at bruge for mennesker. Men den skal også være skrevet, så en maskine hurtigt kan forstå, hvem du er, hvad du tilbyder, hvor du holder til, og hvad man gør for at kontakte dig.",
        ],
        table: {
          head: ["Uklar side", "Klar side (eksempel)"],
          rows: [
            ["“Vi leverer kvalitetsløsninger til alle”", "“Vi bygger hjemmesider til små virksomheder i Horsens og omegn”"],
            ["Kontaktinfo gemt i et billede", "Telefon, mail og adresse som tekst, så de kan læses og klikkes"],
            ["Én lang side med alt", "Én side per ydelse med spørgsmål i overskriften og svar i første sætning"],
            ["Ingen oplysninger om, hvem der står bag", "En side om dig, din erfaring og dit område"],
          ],
        },
        after: ["Eksemplerne er opdigtede. Pointen er, at klare, konkrete oplysninger er nemmere at bruge for både kunder og AI."],
      },
      {
        h2: "Spørgsmål, du bør stille, før du køber noget nyt",
        paragraphs: [
          "Hver gang et nyt værktøj eller en ny funktion bliver populær, er der nogen, der prøver at sælge den til alle. Brug de her spørgsmål, før du siger ja.",
        ],
        bullets: [
          "Hvilket problem løser det for mine kunder? Kan jeg forklare det i én sætning?",
          "Hvordan vil jeg se, om det virker? Hvilket tal bør ændre sig?",
          "Hvad koster det at drive og vedligeholde, ikke kun at bygge?",
          "Hvad sker der, hvis jeg stopper om et år? Kan jeg tage mit indhold med?",
          "Er det lovet resultater, ingen kan garantere? Så vær på vagt",
        ],
      },
      {
        h2: "Forbehold og kilder",
        paragraphs: [
          "Teksten her bygger på mine egne erfaringer med små virksomheder i Horsens og på almindeligt tilgængelige oversigter over webdesign og søgemaskineoptimering. Forudsigelser om 2027 er netop det, forudsigelser. Hvis en artikel lover dig præcise tal for, hvor meget trafik du mister eller vinder på grund af AI, så vær kritisk: Ingen ved det med sikkerhed endnu.",
          "Jeg opdaterer artiklen, når der kommer ny viden, der ændrer min vurdering.",
        ],
      },
      {
        h2: "Hvad betyder det for dig i praksis?",
        paragraphs: ["Her er en konkret tjekliste. Du kan nå de fleste af punkterne uden at bygge en ny hjemmeside."],
        steps: [
          { title: "Tjek første skærm", text: "Kan en ny besøgende på 5 sekunder se, hvad du laver, hvor, og hvordan de kontakter dig?" },
          { title: "Tjek dine svar", text: "Har du sider, der besvarer de spørgsmål, kunderne faktisk stiller? Står svaret i første sætning?" },
          { title: "Tjek tilliden", text: "Har du rigtige billeder, anmeldelser og en side om dig? Er de aktuelle?" },
          { title: "Tjek hastighed og mobil", text: "Åbn siden på en telefon uden wifi. Er den hurtig og nem at bruge?" },
        ],
        callout: {
          tone: "fact",
          title: "Bliv fundet, selv om der kommer færre klik",
          text: "Hvis AI-resuméer gør, at færre klikker sig ind på hjemmesider, bliver det vigtigere, at de, der gør, bliver ved. Det kræver en side, der er nem at forstå, og som gør det let at tage kontakt.",
        },
      },
      {
        h2: "Skal du gøre noget nu?",
        paragraphs: [
          "Sandsynligvis ikke noget stort. Start med nytårstjekket, og se, hvad det viser. Er der noget, der kræver hjælp, kan vi tale om det. Er alt i orden, så bliv ved med at give dine kunder det, de har brug for.",
        ],
        cta: { href: "/blog/nytaarstjek-hjemmeside-2027", label: "Nytårstjek af din hjemmeside" },
      },
      {
        h2: "Vil du vide, hvor din hjemmeside står?",
        paragraphs: [
          "Jeg kan se på din hjemmeside og fortælle dig ærligt, hvad der betyder noget for din virksomhed i 2027, og hvad du kan lade ligge. Ingen forpligtelser.",
        ],
        cta: { href: "/kontakt", label: "Skriv til mig" },
      },
    ],
    faqs: [
      { q: "Hvilke hjemmeside-trends er vigtigst for små virksomheder i 2027?", a: "Klare svar til både mennesker og AI, lokal synlighed, hurtighed og mobilvenlighed, tillid gennem rigtige billeder og anmeldelser samt tilgængelighed. Visuelle trends er valgfrie." },
      { q: "Skal jeg have en AI-chatbot på min hjemmeside?", a: "Kun hvis du har et konkret problem, den kan løse, fx mange gentagne spørgsmål. Uden et klart formål og de rigtige svar gør den mere skade end gavn." },
      { q: "Betyder AI-søgning, at SEO er død?", a: "Nej. AI-assistenter finder deres svar på nettet, så almindelig SEO er stadig grundlaget. Det, der ændrer sig, er, at dine sider skal være lette at forstå og citere." },
      { q: "Kan du love mig flere kunder med de her trends?", a: "Nej. Ingen kan love placeringer, klik eller kunder. Men du kan gøre det nemmere at finde, forstå og kontakte dig, og det er det, der giver bedst grundlag." },
    ],
    related: [
      { href: "/blog/saadan-bliver-du-nevnt-af-chatgpt-og-google-ai", title: "Bliv nævnt af ChatGPT", desc: "Sådan gør du din virksomhed synlig i AI." },
      { href: "/blog/hjemmesideplan-2027-kvartal-for-kvartal", title: "Hjemmesideplan 2027", desc: "Kvartal for kvartal." },
      { href: "/ai-seo", title: "AI SEO", desc: "Synlighed i Google og AI-søgning." },
    ],
  },
];
