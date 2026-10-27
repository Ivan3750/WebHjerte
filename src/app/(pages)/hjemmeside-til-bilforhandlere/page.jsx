import LocalLandingPage from "../../components/seo/LocalLandingPage";

const path = "/hjemmeside-til-bilforhandlere";

export const metadata = {
  title: "Hjemmeside til bilforhandlere i Horsens | WebHjerte",
  description:
    "Hjemmeside til bilforhandlere og autohuse: flotte bilannoncer, hurtig søgning og flere henvendelser. Fast pris, første udkast på 48 timer. Få et gratis tilbud.",
  keywords: [
    "hjemmeside til bilforhandler",
    "hjemmeside til autohandler",
    "hjemmeside til brugtbiler",
    "webdesign bilforhandler",
  ],
  alternates: { canonical: `https://www.webhjerte.dk${path}` },
  openGraph: {
    title: "Hjemmeside til bilforhandlere | WebHjerte",
    description:
      "Hjemmeside der sælger dine biler: flotte annoncer, hurtig søgning og nem kontakt. Fast pris og levering på få uger.",
    url: `https://www.webhjerte.dk${path}`,
    type: "website",
  },
};

const faqs = [
  {
    q: "Kan hjemmesiden hente mine biler automatisk fra Bilbasen eller DBA?",
    a: "Ofte ja. Mange forhandlersystemer tilbyder et feed eller en integration, som jeg kan koble på, så nye biler dukker op på din side uden manuelt arbejde. Jeg afklarer mulighederne med dit system, inden jeg giver en fast pris.",
  },
  {
    q: "Kan jeg selv tilføje og fjerne biler?",
    a: "Ja. Jeg sætter en enkel administration op, hvor du uploader billeder, pris, årgang, km og udstyr på få minutter og markerer biler som solgt.",
  },
  {
    q: "Hvad koster en hjemmeside til en bilforhandler?",
    a: "En enkel præsentationsside starter fra 4.500 kr. Med bilkatalog, filtre og administration får du et fast tilbud efter en kort samtale om dit behov.",
  },
  {
    q: "Kan kunderne bestille en prøvetur eller et finansieringstilbud?",
    a: "Ja. Hver bil kan have knapper til prøvetur, ring op og forespørgsel, så henvendelserne lander direkte hos dig.",
  },
  {
    q: "Hvor hurtigt kan siden være klar?",
    a: "Første designudkast får du inden for 48 timer. En side med bilkatalog er typisk klar på 3-5 uger.",
  },
];

const highlights = {
  title: "Alt en bilkøber leder efter – samlet ét sted",
  items: [
    { icon: "🚗", title: "Bilkatalog med filtre", desc: "Søg på mærke, pris, årgang, brændstof og km, så kunden hurtigt finder den rigtige bil." },
    { icon: "📸", title: "Billeder der sælger", desc: "Store gallerier, der fylder skærmen og viser bilen fra de bedste vinkler, også på mobil." },
    { icon: "⚡", title: "Lynhurtig på mobil", desc: "De fleste kigger på biler fra telefonen. Siden indlæses hurtigt, selv med mange billeder." },
    { icon: "📞", title: "Ring og forespørg med ét tryk", desc: "Faste knapper til opkald, prøvetur og finansiering på hver eneste bil." },
    { icon: "📍", title: "Lokal synlighed", desc: "Kom op på Google, når kunder søger efter brugte biler og forhandlere i Horsens og omegn." },
    { icon: "🔄", title: "Nem opdatering", desc: "Tilføj en ny bil, ret en pris eller markér solgt på få minutter uden hjælp." },
  ],
};

function CarListingVisual() {
  const cars = [
    { name: "Volkswagen Golf 1.5 TSI", meta: "2021 · 42.000 km · Benzin", price: "189.900 kr", tag: "Nyhed", color: "from-[#0e3a52] to-[#0b1c26]" },
    { name: "Skoda Octavia Combi", meta: "2020 · 68.000 km · Diesel", price: "174.500 kr", tag: "Pris ned", color: "from-[#243a2c] to-[#101a14]" },
    { name: "Tesla Model 3 Long Range", meta: "2022 · 31.000 km · El", price: "269.000 kr", tag: "Elbil", color: "from-[#3a2a44] to-[#17101c]" },
  ];
  return (
    <div className="rounded-2xl border border-[#2a3a3a] bg-[#161818] p-5 sm:p-7">
      <div className="mb-5 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
        <span className="ml-3 text-[11px] text-[#6a6a6a]">dinbilforhandler.dk/biler</span>
      </div>
      <div className="mb-5 flex flex-wrap gap-2 text-[11px]">
        {["Alle mærker", "Pris", "Årgang", "Brændstof", "Km"].map((f) => (
          <span key={f} className="rounded-full border border-[#2a3a3a] px-3 py-1.5 text-[#9a9a9a]">{f}</span>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {cars.map((c) => (
          <div key={c.name} className="group overflow-hidden rounded-xl border border-[#2a2d2d] bg-[#1c1e1e] transition hover:-translate-y-1 hover:border-[#00a8e8]/50">
            <div className={`relative flex h-32 items-center justify-center bg-gradient-to-br ${c.color}`}>
              <span className="text-5xl transition group-hover:scale-110" aria-hidden="true">🚘</span>
              <span className="absolute left-3 top-3 rounded-full bg-[#00a8e8] px-2.5 py-0.5 text-[10px] font-medium text-[#111313]">{c.tag}</span>
            </div>
            <div className="p-4">
              <p className="text-[13px] font-medium text-white">{c.name}</p>
              <p className="mt-1 text-[11px] text-[#8a8a8a]">{c.meta}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[14px] font-medium text-[#00a8e8]">{c.price}</span>
                <span className="rounded-full border border-[#3a3d3d] px-3 py-1 text-[11px] text-[#e0e0e0]">Book prøvetur</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-[11px] text-[#6a6a6a]">Eksempel på bilkatalog – tilpasses dit brand og dit lager</p>
    </div>
  );
}

const sections = [
  {
    h2: "Din hjemmeside er din vigtigste showroom",
    paragraphs: [
      "Næsten alle bilkøbere starter online. Før de kommer forbi, har de allerede set billeder, sammenlignet priser og dannet sig et indtryk af dig. En hjemmeside, der er hurtig, overskuelig og viser bilerne flot, er derfor ofte afgørende for, om kunden kommer ind ad døren.",
      "Jeg bygger hjemmesider til bilforhandlere og autohuse, der gør det nemt at finde en bil, se alle detaljer og kontakte dig med det samme.",
    ],
  },
  {
    h2: "Det får du med",
    bullets: [
      "Skræddersyet design, der passer til din forhandler og dine mærker",
      "Bilkatalog med filtre og søgning",
      "Mulighed for integration med dit forhandlersystem, hvor det er muligt",
      "Enkel administration til at tilføje, rette og markere biler som solgt",
      "Lokal SEO, så du bliver fundet i Horsens og omegn",
      "Mobilvenligt layout og hurtig indlæsning",
      "30 dages gratis support efter lancering",
    ],
  },
  {
    h2: "Fra første udkast til første henvendelse",
    paragraphs: [
      "Vi starter med en kort snak om dit lager og dine kunder. Du får et designudkast inden for 48 timer, og er du ikke tilfreds, betaler du 0 kr for designet. Derefter bygger jeg siden, tester den på mobil og computer og sætter den i luften.",
    ],
  },
];

const related = [
  { href: "/seo-horsens", title: "SEO Horsens", desc: "Bliv fundet af kunder, der søger biler lokalt." },
  { href: "/hjemmeside-pris", title: "Hjemmeside pris", desc: "Se de faste priser og pakker." },
  { href: "/portefolje", title: "Portefølje", desc: "Se eksempler på tidligere projekter." },
];

export default function HjemmesideBilforhandlerePage() {
  return (
    <LocalLandingPage
      path={path}
      name="Hjemmeside til bilforhandlere"
      serviceType="Webdesign til bilforhandlere"
      eyebrow="Til bilforhandlere"
      h1="Hjemmeside til bilforhandlere – lad dine biler sælge sig selv"
      intro="Flotte bilannoncer, hurtig søgning og knapper til prøvetur og opkald. Jeg bygger hjemmesider, der gør besøgende til kunder i showroomet – til fast pris og med første udkast på 48 timer."
      visual={<CarListingVisual />}
      highlights={highlights}
      sections={sections}
      faqs={faqs}
      related={related}
    />
  );
}
