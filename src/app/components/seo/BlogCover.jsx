"use client";

import {
  Panel,
  VisualPrice,
  VisualReport,
  VisualSeo,
  VisualDirectChat,
  VisualCode,
  VisualClock,
  VisualFlow,
  VisualAiAnswer,
  VisualSite,
  VisualUptime,
  VisualChat,
  VisualDashboard,
  VisualOwnership,
} from "../illustrations/Visuals";

// Hver guide har sin egen illustration, så oversigten ikke er en væg af tekst.
const BY_SLUG = [
  ["hvad-koster-en-hjemmeside-2026", () => <VisualPrice />],
  ["hvad-koster-en-hjemmeside-om-aaret", () => <VisualReport />],
  ["seo-tjekliste", () => <VisualSeo />],
  ["vaelg-webbureau", () => <VisualOwnership />],
  ["freelancer-vs-bureau", () => <VisualDirectChat />],
  ["wordpress-eller-skraeddersyet", () => <VisualCode />],
  ["hvor-lang-tid", () => <VisualClock />],
  ["ai-i-smaa-virksomheder", () => <VisualFlow />],
  ["nevnt-af-chatgpt", () => <VisualAiAnswer q="Hvem laver hjemmesider i Horsens?" />],
  ["webstrategi", () => <VisualDashboard />],
  ["baeredygtigt", () => <VisualUptime />],
  ["ofte-stillede", () => <VisualChat a="Hvem ejer min hjemmeside?" b="Det gør du – domæne, kode og indhold." />],
];

const BY_CATEGORY = {
  Priser: () => <VisualPrice />,
  SEO: () => <VisualSeo />,
  AI: () => <VisualFlow />,
  "AI-synlighed": () => <VisualAiAnswer />,
  FAQ: () => <VisualChat />,
};

export default function BlogCover({ href = "", category, dark = false, h = "h-[170px]" }) {
  const hit = BY_SLUG.find(([key]) => href.includes(key));
  const make = hit ? hit[1] : BY_CATEGORY[category] || (() => <VisualSite />);
  return (
    <Panel dark={dark} h={h}>
      {make()}
    </Panel>
  );
}
