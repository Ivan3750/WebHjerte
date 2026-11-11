// Vedligeholdelsesabonnementer – ét sted, så priser og indhold er ens på hele sitet.
// Alle priser er inkl. moms. Løbende måned, 30 dages opsigelse, ingen binding.

export const supportPlans = [
  {
    id: "basis",
    name: "Basis",
    price: 249,
    popular: false,
    tagline: "Siden kører – sikkert og hurtigt",
    features: [
      "Hosting og SSL-certifikat",
      "Daglig backup",
      "Opdateringer og sikkerhed",
      "Overvågning af oppetid",
      "Fornyelse af domæne",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: 449,
    popular: true,
    tagline: "Til dig, der løbende retter tekster og priser",
    features: [
      "Alt i Basis",
      "Op til 30 min. ændringer pr. måned",
      "Månedlig statusrapport",
      "Svar inden for 1 hverdag",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 799,
    popular: false,
    tagline: "Til dig, der vil vokse på Google",
    features: [
      "Alt i Standard",
      "Op til 2 timers ændringer pr. måned",
      "SEO-rapport fra Search Console",
      "Indsamling af Google-anmeldelser",
      "Løbende opdatering af Google Business Profile",
    ],
  },
];

export const supportTerms = [
  "Alle priser er inkl. moms. De første 30 dage efter lancering er support gratis.",
  "Løbende måned med 30 dages opsigelse – ingen binding.",
  "Ubrugte minutter overføres ikke til næste måned.",
  "Større opgaver uden for abonnementet aftales til fast pris, før jeg går i gang.",
];

export const supportPriceRange = `${supportPlans[0].price}–${supportPlans[supportPlans.length - 1].price}`;
