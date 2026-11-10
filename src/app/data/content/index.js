import { aiPages } from "./ai.js";
import { localPages } from "./local.js";
import { servicePages } from "./services.js";
import { hubPages } from "./hubs.js";
import { platformPages } from "./platforms.js";
import { articles } from "./articles.js";
import { nichePages } from "./niches.js";

export const contentPages = [...platformPages, ...servicePages, ...localPages, ...nichePages, ...aiPages, ...hubPages];
export { articles };

export const SITE_URL = "https://www.webhjerte.dk";

export const pagePath = (p) => `/${p.slug}`;
export const articlePath = (a) => `/blog/${a.slug}`;

export function pageMetadata(item, path, type = "website") {
  const url = `${SITE_URL}${path}`;
  return {
    title: item.title,
    description: item.description,
    keywords: item.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: item.title.replace(/ \| WebHjerte$/, ""),
      description: item.description,
      url,
      siteName: "WebHjerte",
      locale: "da_DK",
      type,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "WebHjerte – webbureau i Horsens" }],
      ...(type === "article" ? { publishedTime: item.published, modifiedTime: item.updated, authors: ["Ivan Kohan"] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: item.title.replace(/ \| WebHjerte$/, ""),
      description: item.description,
      images: ["/opengraph-image"],
    },
  };
}
