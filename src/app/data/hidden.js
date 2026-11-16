/**
 * Skjulte sider. Siderne findes stadig i koden – de er bare ikke tilgængelige, ikke linket til
 * og ikke i sitemap, før de er færdige.
 *
 * Vis dem igen (fx på en preview): sæt miljøvariablen NEXT_PUBLIC_SHOW_HIDDEN_PAGES=1.
 * Vis dem for altid: tøm de tre lister herunder.
 */
export const HIDDEN = {
  // AI-sider
  ai: [
    "ai-loesninger",
    "ai-automatisering-virksomhed",
    "geo-ai-synlighed",
  ],
  // Lokale sider (by/område)
  local: [
    "webbureau-jylland",
    "wordpress-horsens",
    "digitalt-bureau-horsens",
    "webdesign-horsens",
  ],
  // Sider til forskellige brancher
  business: [
    "hjemmeside-til-restauranter",
    "hjemmeside-til-saloner",
  ],
};

export const SHOW_HIDDEN = process.env.NEXT_PUBLIC_SHOW_HIDDEN_PAGES === "1";

export const HIDDEN_SLUGS = SHOW_HIDDEN ? [] : Object.values(HIDDEN).flat();
export const HIDDEN_PATHS = HIDDEN_SLUGS.map((s) => `/${s}`);

const clean = (href = "") => href.split("#")[0].split("?")[0].replace(/\/$/, "");

/** Er det her link/slug en skjult side? */
export const isHiddenHref = (href) => typeof href === "string" && HIDDEN_PATHS.includes(clean(href));
export const isHiddenSlug = (slug) => HIDDEN_SLUGS.includes(slug);

/** Filtrér en liste af links ({ href }) og fjern skjulte. */
export const visibleLinks = (links = []) => links.filter((l) => !isHiddenHref(l.href));

/** Fjern links til skjulte sider fra et indholdsafsnit (cta, kort og underafsnit), uden at miste teksten. */
export function cleanSection(section) {
  if (!section) return section;
  const s = { ...section };
  if (s.cta && isHiddenHref(s.cta.href)) delete s.cta;
  if (s.cards) s.cards = s.cards.map((c) => (isHiddenHref(c.href) ? { ...c, href: undefined, cta: undefined } : c));
  if (s.subs) s.subs = s.subs.map(cleanSection);
  return s;
}
