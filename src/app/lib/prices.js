/**
 * Priser vises kun på /services, /ai-seo og /hosting-og-vedligeholdelse (docs/design-regler.md).
 * Andre sider fjerner sætninger med kronebeløb og henviser i stedet til Services.
 * "0 kr" (garantien for designet) er ikke en pris og bliver stående.
 */
const PRICE = /(?:^|[^0-9])(?!0\s*kr)\d[\d.]*(?:–\d[\d.]*)?\s*kr\b/i;

export const hasPrice = (t = "") => PRICE.test(t);

export const withoutPrices = (text = "") =>
  text
    .split(/(?<=[.!?])\s+(?=[A-ZÆØÅ])/)
    .filter((x) => !hasPrice(x))
    .join(" ");

const POINTER = "Du får altid en fast pris, før vi går i gang – se alle pakker under Services.";

/** FAQ uden kronebeløb: spørgsmål med beløb fjernes, svar renses og får en henvisning til Services. */
export const faqsWithoutPrices = (faqs = []) =>
  faqs
    .filter((f) => !hasPrice(f.q))
    .map((f) => {
      if (!hasPrice(f.a)) return f;
      const rest = withoutPrices(f.a);
      return { ...f, a: rest ? `${rest} ${POINTER}` : POINTER };
    });
