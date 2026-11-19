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

// Ordinære priser (DKK inkl. moms) – samme tal som på /services
export const BF_PACKAGES = [
  { name: "Landingside", price: 2500, desc: "1 side til kampagner og annoncer", days: "ca. 2 dage" },
  { name: "Basis-hjemmeside", price: 4500, desc: "3–5 sider, klar til Google", days: "ca. 5 dage" },
  { name: "Standard-hjemmeside", price: 8500, desc: "Op til 8 sider, SEO, analytics og booking", days: "ca. 10 dage" },
  { name: "Lokal synlighed", price: 9500, desc: "Hjemmeside + Google Business Profile og lokal SEO", days: "ca. 10 dage" },
  { name: "AI SEO Basis", price: 3500, desc: "Bliv nævnt af ChatGPT og Google AI", days: "aftales" },
  { name: "Skræddersyet", price: 14000, desc: "Webshop, kundeportal og specialløsninger", days: "aftales" },
];

export const bfPrice = (price) => Math.round(price * (1 - BLACK_FRIDAY.discount / 100));
export const kr = (n) => `${n.toLocaleString("da-DK")} kr`;

export const isBlackFridayLive = (now = Date.now()) =>
  BLACK_FRIDAY.active && now <= new Date(BLACK_FRIDAY.endsAt).getTime();
