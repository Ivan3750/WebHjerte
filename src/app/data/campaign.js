// Black Friday-kampagne. Slå fra ved at sætte `active: false` eller lade datoen udløbe.
export const BLACK_FRIDAY = {
  active: true,
  discount: 15,
  // Slutter mandag 30. november 2026 kl. 23.59 dansk tid (Cyber Monday)
  endsAt: "2026-11-30T23:59:59+01:00",
  endLabel: "30. november",
  href: "/kontakt",
  // SEO-landingsside med alle detaljer
  pageHref: "/black-friday-hjemmeside",
};

// Ordinære priser (DKK inkl. moms) og indhold – samme som på /services, /ai-seo og under "Lokal synlighed"
export const BF_PACKAGES = [
  {
    id: "landingside", name: "Landingside", price: 2500, popular: false, delivery: "ca. 2 dage",
    tagline: "Én stærk side til kampagner, annoncer eller en ny idé",
    features: ["1 side, bygget til at give henvendelser", "Mobilvenlig og hurtig", "Kontaktformular", "Basic SEO", "30 dages support efter lancering"],
  },
  {
    id: "basis", name: "Basis-hjemmeside", price: 4500, popular: false, delivery: "ca. 5 dage",
    tagline: "Den solide visitkort-hjemmeside til din virksomhed",
    features: ["3–5 sider", "Mobilvenlig og hurtig", "Basic SEO, så Google kan finde dig", "Kontaktformular og Google Maps", "30 dages support efter lancering"],
  },
  {
    id: "standard", name: "Standard-hjemmeside", price: 8500, popular: true, delivery: "ca. 10 dage",
    tagline: "Til dig, der vil have flere kunder fra din hjemmeside",
    features: ["Op til 8 sider", "SEO og Analytics – se hvor dine besøgende kommer fra", "Booking og formularer", "Beskeder fra kontaktformularen gemmes automatisk", "30 dages support efter lancering"],
  },
  {
    id: "lokal", name: "Lokal synlighed", price: 9500, popular: false, delivery: "ca. 10 dage",
    tagline: "Til håndværkere og lokale servicevirksomheder, der vil have flere opkald",
    features: ["Standard-hjemmeside (op til 8 sider)", "Opsætning af Google Business Profile", "Lokal SEO: sider for dine ydelser og byer", "Anmeldelses-flow: link, QR-kode og SMS-skabelon", "Search Console og Analytics sat op", "3 måneders vedligehold (Standard) inkluderet"],
  },
  {
    id: "skraeddersyet", name: "Skræddersyet", price: 14000, prefix: "Fra", popular: false, delivery: "aftales",
    tagline: "Webshop, kundeportal eller AI-løsning efter dine behov",
    features: ["Ubegrænset antal sider", "Webshop (e-commerce)", "Kundeportal / dashboard", "AI-funktioner, fx chatbot", "Prioriteret support"],
  },
];

export const BF_AI_PACKAGES = [
  {
    id: "ai-basis", name: "AI SEO Basis", price: 3500, popular: false, delivery: "ca. 14 dage",
    tagline: "Kom i gang med at blive fundet i Google og ChatGPT",
    features: ["Nøgleordsanalyse", "Teknisk SEO-grundlag", "Google Business Profile", "Indholdsoptimering: 10 elementer", "30 dages support"],
  },
  {
    id: "ai-standard", name: "AI SEO Standard", price: 6500, popular: true, delivery: "ca. 21 dage",
    tagline: "Til dig, der vil slå konkurrenterne på søgeresultaterne",
    features: ["Alt i Basis", "Indholdsoptimering: 20 elementer", "Konkurrentanalyse", "Månedlig rapportering", "30 dages support"],
  },
  {
    id: "ai-skraeddersyet", name: "AI SEO Skræddersyet", price: 12000, prefix: "Fra", popular: false, delivery: "aftales",
    tagline: "Fuld strategi og løbende optimering",
    features: ["Alt i Standard", "Komplet AI SEO-strategi", "Konverteringsoptimering", "Månedligt strategimøde", "Prioriteret support"],
  },
];

export const bfPrice = (price) => Math.round(price * (1 - BLACK_FRIDAY.discount / 100));
export const kr = (n) => `${n.toLocaleString("da-DK")} kr`;

export const isBlackFridayLive = (now = Date.now()) =>
  BLACK_FRIDAY.active && now <= new Date(BLACK_FRIDAY.endsAt).getTime();
