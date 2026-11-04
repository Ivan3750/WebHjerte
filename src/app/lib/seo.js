export const SITE_URL = "https://www.webhjerte.dk";

/** BreadcrumbList til JSON-LD. items: [{ name, path }] – path uden domæne. */
export function breadcrumbLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export const orgRef = { "@id": `${SITE_URL}/#organization` };
