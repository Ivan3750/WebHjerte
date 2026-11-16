/**
 * Ekstra indhold og SEO-titler til indholdssiderne – samlet ét sted.
 *
 * - seo: titler og beskrivelser skrevet ud fra de søgninger, siderne faktisk vises på i Google Search Console
 *   (fx "hjemmeside med webshop", "professionel hjemmeside", "webbureau vejle"). Søgeordet står først,
 *   og der er et konkret løfte (pris, tid, hvad man får) – ingen overdrivelser.
 * - more: ekstra afsnit og FAQ, der lægges efter sidens egne afsnit.
 * - related: erstatter "Læs videre"-links, der pegede på sider, som nu er slået sammen (301).
 */

export const seo = {
  "webshop-hjemmeside": {
    title: "Hjemmeside med webshop fra 14.000 kr – fast pris | WebHjerte",
    description:
      "Få lavet en hjemmeside med webshop i WooCommerce, Shopify eller kode. MobilePay, fragt og SEO er med. Fast pris fra 14.000 kr inkl. moms.",
  },
  "shopify-hjemmeside": {
    title: "Shopify webshop – opsætning, design og flytning | WebHjerte",
    description:
      "Shopify-webshop sat op til danske kunder: tema, MobilePay, fragt, SEO og flytning uden at miste placeringer. Ærlig vurdering af Shopify vs. WooCommerce.",
  },
  "hjemmeside-til-virksomhed": {
    title: "Professionel hjemmeside til virksomhed – fra 2.500 kr",
    description:
      "Hvilke sider skal din virksomhed have, og hvad koster det? Professionel hjemmeside til fast pris fra 2.500 kr – første design på 48 timer.",
  },
  "skraeddersyede-hjemmesider": {
    title: "Skræddersyede hjemmesider – unikt design, fast pris",
    description:
      "Hjemmeside bygget til din virksomhed – ikke en skabelon. Hurtig, SEO-klar og din egen kode. Se forskellen på skræddersyet og skabelon, og hvad det koster.",
  },
  "alle-typer-hjemmesider": {
    title: "WordPress, Shopify, Webflow eller kode? Vælg platform",
    description:
      "Hvilken platform passer til din hjemmeside? Ærlig sammenligning af WordPress, Shopify, Webflow, Wix og kode – og hjælp til den side, du har.",
  },
  "hosting-og-vedligeholdelse": {
    title: "Hosting og vedligeholdelse af hjemmeside fra 249 kr/md",
    description:
      "Hvad koster det at have en hjemmeside kørende? Hosting, domæne, backup og opdateringer forklaret – og vedligeholdelse fra 249 kr/md uden binding.",
  },
  "webbureau-vejle": {
    title: "Webbureau i Vejle – hjemmeside fra 2.500 kr | WebHjerte",
    description:
      "Hjemmesider til virksomheder i Vejle og trekantsområdet: fast pris fra 2.500 kr, første design på 48 timer og direkte kontakt med udvikleren.",
  },
  "hjemmeside-til-haandvaerkere": {
    title: "Hjemmeside til håndværkere – flere opkald fra Google",
    description:
      "Hvad kunderne leder efter, opbygningen der giver opkald, og fejlene der koster henvendelser. Hjemmeside til håndværkere – Lokal synlighed fra 9.500 kr.",
  },
  "hjemmeside-til-vvs": {
    title: "Hjemmeside til VVS-firma – akutte opkald og tilbud",
    description:
      "Hjemmeside til VVS: én vej til den akutte kunde og én til badeværelsesprojektet. Lokal SEO i Horsens og omegn og fast pris.",
  },
  "hjemmeside-til-elektriker": {
    title: "Hjemmeside til elektriker – tillid og flere opgaver",
    description:
      "Hjemmeside til elektrikere: vis autorisation, priser og elbil-ladere, så kunden vælger dig. Lokal SEO, fast pris og første design på 48 timer.",
  },
  "hjemmeside-til-tomrer": {
    title: "Hjemmeside til tømrer – vis projekterne, få opgaverne",
    description:
      "Hjemmeside til tømrere: projektgalleri, før/efter og en enkel tilbudsformular, der giver bedre opgaver. Lokal SEO og fast pris.",
  },
};

const PRICE_NOTE = "Alle priser er inkl. moms. Du får et skriftligt tilbud med fast pris, før jeg går i gang.";

export const more = {
  "webshop-hjemmeside": {
    sections: [
      {
        h2: "Hjemmeside med webshop – eller en ren webshop?",
        paragraphs: [
          "Mange virksomheder har brug for begge dele: en hjemmeside, der fortæller, hvem I er, og en webshop, der sælger. Det behøver ikke være to systemer. I WooCommerce og Shopify kan forside, om os, blog og kontakt ligge i samme løsning som produkterne – med ét login, ét design og én adresse, der samler alle signaler i Google.",
          "Sælger du kun få produkter ved siden af en ydelse (fx gavekort, en bog eller et kursus), er en fuld webshop ofte for meget. Så kan en enkel betalingsknap på en almindelig hjemmeside være nok – og billigere at drive. Jeg siger det, hvis det er tilfældet.",
        ],
        table: {
          head: ["", "Ren webshop", "Hjemmeside med webshop"],
          rows: [
            ["Fokus", "Produkter, kurv og kasse", "Både hvem I er, og hvad I sælger"],
            ["Passer til", "Butikker med mange varer", "Virksomheder med både ydelser og varer"],
            ["I hverdagen", "Løbende arbejde med produkter", "Ét system, ét login og ét design"],
          ],
        },
      },
      {
        h2: "Hvad koster en hjemmeside med webshop?",
        paragraphs: [
          "Hos mig starter en hjemmeside med webshop fra 14.000 kr inkl. moms. Prisen afhænger især af tre ting: hvor mange produkter der skal lægges ind, hvilke betalings- og fragtløsninger du vil have, og om webshoppen skal tale sammen med andre systemer (fx lager eller regnskab).",
          "Derudover er der løbende udgifter, som du betaler direkte til udbyderne: gebyrer til betalingsløsningen, eventuelt et Shopify-abonnement og hosting. Dem gennemgår jeg med dig, før du vælger platform, så der ikke kommer overraskelser.",
        ],
        table: {
          head: ["Det påvirker prisen", "Billigere", "Dyrere"],
          rows: [
            ["Produkter", "Under 30 produkter, du selv lægger ind", "Hundredvis af produkter med varianter"],
            ["Betaling og fragt", "MobilePay, kort og én fragtform", "Flere fragtfirmaer, afhentning og fri fragt-regler"],
            ["Integrationer", "Ingen", "Lager, regnskab eller ERP"],
            ["Design", "Tilpasset tema", "Helt eget design"],
          ],
        },
        after: [PRICE_NOTE],
      },
      {
        h2: "Sådan får du lavet din webshop",
        steps: [
          { title: "Kort samtale", text: "Du fortæller, hvad du sælger, til hvem, og hvordan du leverer. Jeg anbefaler en platform – ærligt." },
          { title: "Fast pris og design", text: "Du får en fast pris og et første designudkast inden for 48 timer. Intet bygges, før du har sagt ja." },
          { title: "Opsætning", text: "Produkter, betaling, fragt, handelsbetingelser og SEO sættes op. Du ser webshoppen undervejs." },
          { title: "Test og lancering", text: "Vi tester køb, betaling og mails, før webshoppen åbner. Du lærer at oprette produkter og ordrer." },
        ],
      },
      {
        h2: "Det skal du selv have klar",
        paragraphs: ["En webshop bliver hurtigere færdig, når de her ting er på plads. Jeg hjælper gerne med resten."],
        bullets: [
          "Produktliste: navne, priser, varianter og gerne et regneark",
          "Produktbilleder: lyse, ens billeder sælger bedre end flotte, men forskellige",
          "Fragt: hvem leverer, hvad koster det, og hvornår er der fri fragt",
          "Betaling: aftale med betalingsudbyder (jeg hjælper med opsætningen)",
          "Handelsbetingelser: returret, levering og reklamation",
          "CVR-nummer og kontaktoplysninger, der skal stå på siden",
        ],
      },
      {
        h2: "Efter lanceringen",
        paragraphs: [
          "En webshop skal holdes opdateret: platform, plugins og sikkerhed. Med en vedligeholdelsesaftale fra 249 kr/md sørger jeg for opdateringer, backup og overvågning, så du kan bruge tiden på at sælge. Der er ingen binding – du kan opsige med 30 dages varsel.",
        ],
        cta: { href: "/hosting-og-vedligeholdelse", label: "Se vedligeholdelse og drift" },
      },
    ],
    faqs: [
      { q: "Kan jeg få en hjemmeside med webshop billigere end 14.000 kr?", a: "Sælger du kun få varer, kan en enkel betalingsknap på en almindelig hjemmeside være nok – og billigere. Skriv, hvad du vil sælge, så får du et ærligt svar og en fast pris." },
      { q: "Hvor lang tid tager det at få lavet en webshop?", a: "Typisk 2–4 uger. Det afhænger mest af, hvor hurtigt produkter, billeder og tekster er klar." },
      { q: "Kan I flytte min eksisterende webshop?", a: "Ja. Jeg flytter produkter, kunder og ordrer og sætter omdirigeringer op, så du ikke mister dine placeringer i Google." },
    ],
    related: [
      { href: "/shopify-hjemmeside", title: "Shopify webshop", desc: "Hurtig start og mange apps." },
      { href: "/wordpress-hjemmeside", title: "WordPress og WooCommerce", desc: "Fleksibelt og uden platformsafgift." },
      { href: "/hjemmeside-pris", title: "Hjemmeside pris", desc: "Alle pakker og prisberegner." },
    ],
  },

  "shopify-hjemmeside": {
    sections: [
      {
        h2: "Flyt til Shopify uden at miste placeringer",
        paragraphs: [
          "Den største risiko ved at skifte webshop er ikke designet – det er Google. Ændrer produkt- og kategoriadresserne sig, uden at de gamle sender videre, mister du de placeringer, du har brugt år på at opbygge.",
          "Derfor laver jeg en liste over alle vigtige adresser før flytningen, sætter 301-omdirigeringer op og tjekker i Google Search Console bagefter. Produkter, kunder og ordrehistorik flyttes med, så du kan fortsætte, hvor du slap.",
        ],
        steps: [
          { title: "Kortlægning", text: "Alle sider, der giver trafik eller salg, bliver noteret." },
          { title: "Flytning", text: "Produkter, kunder og ordrer importeres og kontrolleres." },
          { title: "Omdirigeringer", text: "Gamle adresser sender videre til de nye." },
          { title: "Opfølgning", text: "Jeg følger med i Search Console de første uger og retter fejl." },
        ],
      },
      {
        h2: "Shopify på dansk – det glemmer mange",
        bullets: [
          "Danske tekster i kurv, kasse og mails – ikke halvt engelsk",
          "MobilePay og danske fragtløsninger i kassen",
          "Priser vist inkl. moms og korrekte handelsbetingelser",
          "Produkt- og kategoritekster skrevet til danske søgninger",
          "Cookie-samtykke, der følger reglerne",
        ],
      },
    ],
    faqs: [
      { q: "Hvad koster Shopify om måneden?", a: "Shopify har et månedligt abonnement og transaktionsgebyrer, som afhænger af den plan, du vælger. Dem betaler du direkte til Shopify. Jeg gennemgår planerne med dig, før du vælger." },
    ],
  },

  "hjemmeside-til-virksomhed": {
    sections: [
      {
        h2: "Hvad er en professionel hjemmeside?",
        paragraphs: [
          "En professionel hjemmeside er ikke den med flest animationer. Det er den, hvor en ny kunde på få sekunder forstår, hvad du laver, hvor du arbejder, og hvordan man kontakter dig – og som Google kan finde og forstå.",
          "I praksis betyder det tre ting: et tydeligt budskab øverst, sider der svarer på kundernes spørgsmål, og en teknisk sund side, der er hurtig på mobilen. Alt andet er pynt, der kun giver mening, når det fundamentale er på plads.",
        ],
        callout: { tone: "tip", title: "Tommelfingerregel", text: "Kan en fremmed svare på “hvad laver de, og hvordan kontakter jeg dem?” efter fem sekunder, er siden på rette vej." },
      },
      {
        h2: "Fra første samtale til færdig hjemmeside",
        steps: [
          { title: "Samtale", text: "Vi taler om din virksomhed, dine kunder og hvad siden skal kunne. Det er gratis." },
          { title: "Design på 48 timer", text: "Du ser første designudkast efter 48 timer. Passer det ikke, betaler du 0 kr." },
          { title: "Bygning", text: "Siden bygges med tekster, billeder, SEO og kontaktformular." },
          { title: "Live", text: "Typisk på 2–10 dage. Domæne og kode er dine fra start." },
        ],
      },
      {
        h2: "Hvad koster en hjemmeside til en virksomhed?",
        paragraphs: [
          "Det afhænger af, hvor mange sider du har brug for. En landingside til én ydelse koster 2.500 kr, en Basis-hjemmeside med 3–5 sider 4.500 kr og Standard med op til 8 sider, SEO og booking 8.500 kr. Har du særlige behov – webshop, kundelogin eller integrationer – starter skræddersyede løsninger fra 14.000 kr.",
          PRICE_NOTE,
        ],
        cta: { href: "/hjemmeside-pris", label: "Beregn din pris" },
      },
    ],
    faqs: [
      { q: "Skal jeg have en hjemmeside, når jeg har Facebook?", a: "Facebook er godt til at holde kontakt, men du ejer ikke siden, og den bliver sjældent fundet, når nye kunder søger på Google. En hjemmeside er din egen adresse, som du styrer." },
      { q: "Kan jeg selv rette tekster og billeder bagefter?", a: "Ja. Vælger du WordPress, kan du selv rette alt. På kodede sider kan små rettelser være med i en vedligeholdelsesaftale fra 449 kr/md." },
    ],
    related: [
      { href: "/wordpress-hjemmeside", title: "WordPress-hjemmeside", desc: "Professionel side, du selv kan rette i." },
      { href: "/skraeddersyede-hjemmesider", title: "Skræddersyede hjemmesider", desc: "Unikt design og din egen kode." },
      { href: "/hjemmeside-pris", title: "Hjemmeside pris", desc: "Pakker og prisberegner." },
    ],
  },

  "skraeddersyede-hjemmesider": {
    sections: [
      {
        h2: "Hvornår giver skræddersyet mening?",
        paragraphs: [
          "Ikke altid. Har du brug for en enkel side med få sider, du selv vil redigere, er WordPress ofte det fornuftige valg. Skræddersyet kode giver mest værdi, når hastighed, et helt eget udtryk eller særlige funktioner betyder noget for din forretning.",
        ],
        table: {
          head: ["", "Skabelon", "Skræddersyet"],
          rows: [
            ["Udtryk", "Ligner mange andre sider", "Dit eget design"],
            ["Hastighed", "Ofte tung af ubrugt kode", "Kun den kode, siden skal bruge"],
            ["Funktioner", "Det, temaet kan", "Booking, login og integrationer efter behov"],
            ["Passer, når", "Du selv vil bygge og rette alt", "Siden skal skille sig ud og være hurtig"],
          ],
        },
      },
      {
        h2: "Hurtig side = bedre for Google og kunderne",
        paragraphs: [
          "En skræddersyet side indeholder kun den kode, den har brug for. Det gør den hurtig – også på en mobil med dårlig forbindelse. Hastighed er en del af det, Google vurderer, og en langsom side mister besøgende, før den overhovedet er vist.",
          "Kodede sider kræver heller ikke de mange plugins og opdateringer, som en tung WordPress-side gør, og kan ofte hostes billigt.",
        ],
      },
    ],
    related: [
      { href: "/hjemmeside-til-virksomhed", title: "Hjemmeside til virksomhed", desc: "Hvilke sider du skal have." },
      { href: "/wordpress-hjemmeside", title: "WordPress-hjemmeside", desc: "Når du selv vil redigere alt." },
      { href: "/portefolje", title: "Portefølje", desc: "Se færdige hjemmesider." },
    ],
  },

  "alle-typer-hjemmesider": {
    related: [
      { href: "/wordpress-hjemmeside", title: "WordPress-hjemmeside", desc: "Du redigerer selv." },
      { href: "/shopify-hjemmeside", title: "Shopify", desc: "Webshop med hurtig start." },
      { href: "/ai-chatbot-til-hjemmeside", title: "AI-chatbot", desc: "Kan sættes på alle platforme." },
    ],
  },

  "webbureau-vejle": {
    related: [
      { href: "/webbureau-midtjylland", title: "Webbureau Midtjylland", desc: "Hele regionen fra Horsens." },
      { href: "/webbureau-aarhus", title: "Webbureau Aarhus", desc: "Hjemmesider til Aarhus-virksomheder." },
      { href: "/hjemmeside-til-haandvaerkere", title: "Hjemmeside til håndværkere", desc: "Flere opkald fra lokale kunder." },
    ],
  },
};

/** Lægger ekstra afsnit, FAQ og SEO-titler oven i en indholdsside. */
export function enrich(page) {
  const s = seo[page.slug];
  const m = more[page.slug];
  if (!s && !m) return page;
  return {
    ...page,
    ...(s || {}),
    sections: [...(page.sections || []), ...(m?.sections || [])],
    faqs: [...(page.faqs || []), ...(m?.faqs || [])],
    related: m?.related || page.related,
  };
}
