import Link from "next/link";
import { FadeUp, RevealLines } from "../home/fx/Reveal";
import { SITE_URL, breadcrumbLd } from "../../lib/seo";

/**
 * Fælles dele til de kreative landingssider (SEO Horsens, Midtjylland, AI SEO, AI-chatbot).
 * Hver side har sin egen opbygning; her ligger kun det, der ikke skal variere: skema-data, FAQ og afsluttende bånd.
 */

/** JSON-LD: WebPage + Service + BreadcrumbList + FAQPage. */
export function LandingLd({ path, name, serviceType, description, faqs = [], price = "2500", priceNote, areas }) {
  const url = `${SITE_URL}${path}`;
  const graph = [
    {
      "@type": "WebPage",
      "@id": `${url}#page`,
      url,
      name,
      description,
      inLanguage: "da-DK",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name,
      serviceType: serviceType || name,
      url,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: areas || [
        { "@type": "City", name: "Horsens" },
        { "@type": "AdministrativeArea", name: "Midtjylland" },
        { "@type": "Country", name: "Danmark" },
      ],
      offers: {
        "@type": "Offer",
        priceCurrency: "DKK",
        price,
        priceSpecification: { "@type": "PriceSpecification", price, priceCurrency: "DKK", valueAddedTaxIncluded: true },
        description: priceNote || "Priser starter fra 2.500 kr (inkl. moms) for en landingside",
      },
    },
    { "@type": "BreadcrumbList", itemListElement: breadcrumbLd([{ name: "Forside", path: "/" }, { name, path }]).itemListElement },
  ];
  if (faqs.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}

/** FAQ i to kolonner: overskrift der følger med til venstre, rene <details> til højre (al tekst står i HTML'en). */
export function FaqSplit({ title, lead = null, faqs, dark = false, id = undefined }) {
  return (
    <section id={id} className={`scene ${dark ? "bg-[#1c1e1e]" : "bg-[#f7f6f6]"}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-24">
        <div className="lg:sticky lg:top-28 self-start">
          <RevealLines
            lines={title}
            className={`font-semibold tracking-tight leading-[1.1] text-[clamp(24px,2.6vw,34px)] max-w-[18ch] ${dark ? "text-white" : "text-[#1c1e1e]"}`}
          />
          {lead && (
            <FadeUp as="p" delay={0.1} className={`mt-5 text-[15px] leading-[1.8] max-w-[40ch] ${dark ? "text-[#b4bdbd]" : "text-[#5f5f5f]"}`}>
              {lead}
            </FadeUp>
          )}
        </div>
        <div className={`border-t ${dark ? "border-white/10" : "border-[#dcdada]"}`}>
          {faqs.map((f, i) => (
            <details key={f.q} className={`group border-b ${dark ? "border-white/10" : "border-[#dcdada]"}`} open={i === 0}>
              <summary className="list-none flex items-start justify-between gap-6 py-6 cursor-pointer [&::-webkit-details-marker]:hidden">
                <span className={`text-[17px] sm:text-[18px] font-semibold leading-snug ${dark ? "text-white" : "text-[#1c1e1e]"}`}>{f.q}</span>
                <span
                  aria-hidden
                  className={`mt-1 shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-transform duration-300 group-open:rotate-45 ${
                    dark ? "border-white/25 text-white" : "border-[#1c1e1e]/25 text-[#1c1e1e]"
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className={`pb-7 pr-12 text-[15.5px] leading-[1.8] max-w-[62ch] ${dark ? "text-[#b4bdbd]" : "text-[#4a4a4a]"}`}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Stort blåt bånd med én handling – bruges som pause mellem de tunge sektioner. */
export function CtaBand({ title, text, href, label, secondary }) {
  return (
    <section className="scene bg-[#00a8e8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-14 sm:py-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="max-w-[44ch]">
          <RevealLines lines={title} className="text-white font-semibold tracking-tight leading-[1.1] text-[clamp(26px,3.2vw,42px)]" />
          {text && (
            <FadeUp as="p" delay={0.1} className="mt-4 text-[16px] text-white/95 leading-[1.7]">
              {text}
            </FadeUp>
          )}
        </div>
        <FadeUp delay={0.15} className="flex flex-wrap gap-3 shrink-0">
          <Link
            href={href}
            className="inline-flex items-center justify-center rounded-full bg-[#1c1e1e] px-7 py-3.5 text-[14px] font-semibold text-white hover:bg-black transition-colors"
          >
            {label}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-3.5 text-[14px] font-semibold text-white hover:bg-white/10 transition-colors"
            >
              {secondary.label}
            </Link>
          )}
        </FadeUp>
      </div>
    </section>
  );
}

/** Rolig række af "Læs videre"-links til synlige sider (filtreres af kalderen med visibleLinks). */
export function MoreLinks({ links, title = "Læs videre" }) {
  if (!links.length) return null;
  return (
    <section className="scene bg-[#eceeee]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-12 sm:py-16">
        <p className="text-[13px] font-semibold text-[#5f5f5f] mb-5">{title}</p>
        <div className="flex flex-wrap gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group inline-flex flex-col rounded-2xl bg-white border border-[#e8e6e6] px-5 py-4 hover:-translate-y-0.5 transition-transform min-w-[220px]"
            >
              <span className="text-[15px] font-semibold text-[#1c1e1e] group-hover:text-[#00a8e8] transition-colors">{l.title} →</span>
              <span className="text-[13px] text-[#6a6a6a] mt-1 leading-snug">{l.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Kun FAQPage-skema – til sider, der har deres egne strukturerede data i forvejen. */
export function FaqLd({ faqs }) {
  if (!faqs?.length) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
