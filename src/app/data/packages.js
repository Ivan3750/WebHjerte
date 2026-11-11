// Hjemmesidepakker – ét sted, så priserne er ens overalt (alle priser inkl. moms).
// Én akse: omfang (antal sider / funktioner). Platform (WordPress/kode) er IKKE et valg her —
// det afklares med ét spørgsmål i formularen, se noten under kortene.
export const packages = [
  {
    name: "Landingside",
    price: "2.500",
    popular: false,
    cta: "Kom i gang",
    href: "/kontakt?pakke=landingside",
    timing: "Levering: 2 dage",
    changes: "30 dage",
    features: [
      "1 side (til kampagner/annoncer)",
      "Mobilvenlig",
      "Kontaktformular",
      "Basic SEO",
      "30 dages support",
    ],
  },
  {
    name: "Basis",
    price: "4.500",
    popular: false,
    cta: "Kom i gang",
    href: "/kontakt?pakke=basis",
    timing: "Levering: 5 dage",
    changes: "30 dage",
    features: ["3–5 sider", "Mobilvenlig", "Basic SEO", "Kontaktformular", "Google Maps", "30 dages support"],
  },
  {
    name: "Standard",
    price: "8.500",
    popular: true,
    cta: "Kom i gang",
    href: "/kontakt?pakke=standard",
    timing: "Levering: 10 dage",
    changes: "30 dage",
    features: [
      "Op til 8 sider",
      "SEO + Analytics (se hvor besøgende kommer fra)",
      "Automatisk gem af beskeder fra kontaktformular",
      "Booking & formularer",
      "30 dages support",
    ],
  },
  {
    name: "Skræddersyet",
    price: "14.000",
    prefix: "Fra",
    popular: false,
    cta: "Kontakt mig",
    href: "/kontakt?pakke=skraeddersyet",
    timing: "Aftales individuelt",
    changes: "Efter aftale",
    features: [
      "Ubegrænset antal sider",
      "Webshop (e-commerce)",
      "Kundeportal / dashboard",
      "AI-funktioner (fx chatbot)",
      "Prioriteret support",
    ],
  },
];
