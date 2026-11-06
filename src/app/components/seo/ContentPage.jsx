import Link from "next/link";
import PageHero, { PrimaryLink, GhostLink } from "../ui/PageHero";
import Questions from "../Questions";
import CtaSearchBlock from "../ui/CTA";
import QuickLeadForm from "../ui/QuickLeadForm";
import { SITE_URL, breadcrumbLd } from "../../lib/seo";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/æ/g, "ae")
    .replace(/ø/g, "oe")
    .replace(/å/g, "aa")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const fmtDate = (iso) =>
  new Date(iso).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" });

const defaultFacts = [
  { num: "Fra 2.500 kr", label: "Fast pris" },
  { num: "2–10 dage", label: "Typisk leveringstid" },
  { num: "48 timer", label: "Til første designudkast" },
];

/**
 * Fælles skabelon til alle indholdssider (tjenester, lokale sider, guides, ordliste, FAQ).
 * Én skabelon = ét visuelt udtryk og ens struktureret data (JSON-LD), som både Google
 * og AI-assistenter (ChatGPT, Gemini, Perplexity m.fl.) kan læse.
 */
export default function ContentPage({
  path,
  type = "service", // "service" | "article" | "page"
  name,
  serviceType,
  eyebrow,
  h1,
  intro,
  summary,
  summaryLabel = "Kort svar",
  sections = [],
  faqs = [],
  related = [],
  breadcrumbs = [],
  published,
  updated,
  facts = defaultFacts,
  withForm = true,
  glossary,
  description,
  extra,
}) {
  const url = `${SITE_URL}${path}`;
  const trail = [{ name: "Forside", path: "/" }, ...breadcrumbs.map((b) => ({ name: b.label, path: b.href })), { name, path }];

  const graph = [
    {
      "@type": type === "article" ? "Article" : "WebPage",
      "@id": `${url}#page`,
      url,
      name,
      headline: type === "article" ? h1 : undefined,
      description: description || intro,
      inLanguage: "da-DK",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      author: type === "article" ? { "@id": `${SITE_URL}/#ivan` } : undefined,
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: type === "article" ? url : undefined,
      datePublished: published,
      dateModified: updated || published,
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["[data-speakable]"],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbLd(trail).itemListElement,
    },
  ];

  if (type === "service") {
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name,
      serviceType: serviceType || name,
      url,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "City", name: "Horsens" },
        { "@type": "AdministrativeArea", name: "Midtjylland" },
        { "@type": "Country", name: "Danmark" },
      ],
      offers: {
        "@type": "Offer",
        priceCurrency: "DKK",
        price: "2500",
        description: "Priser starter fra 2.500 kr (ekskl. moms) for en landingside",
      },
    });
  }

  if (glossary) {
    graph.push({
      "@type": "DefinedTermSet",
      "@id": `${url}#terms`,
      name,
      hasDefinedTerm: glossary.map((g) => ({
        "@type": "DefinedTerm",
        name: g.term,
        description: g.def,
        inDefinedTermSet: `${url}#terms`,
      })),
    });
  }

  const jsonLd = { "@context": "https://schema.org", "@graph": graph.filter(Boolean) };

  const toc = sections.filter((s) => s.h2).map((s) => ({ id: s.id || slugify(s.h2), label: s.h2 }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        breadcrumbs={[{ label: "Forside", href: "/" }, ...breadcrumbs, { label: name }]}
        eyebrow={eyebrow}
        titleLines={[h1]}
        lead={intro}
        size="md"
        actions={
          <>
            <PrimaryLink href="/kontakt">Få et gratis tilbud</PrimaryLink>
            <GhostLink href="/hjemmeside-pris">Se priser</GhostLink>
          </>
        }
        aside={
          withForm ? (
            <div className="rounded-3xl border border-white/10 bg-[#242828] p-6 sm:p-8">
              <QuickLeadForm />
            </div>
          ) : null
        }
      />

      {/* Fakta + kort svar */}
      <section className="sheet bg-[#f7f6f6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pt-14 sm:pt-20">
          {facts?.length > 0 && type === "service" && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
              {facts.map(({ num, label }) => (
                <div key={label} className="rounded-2xl bg-white border border-[#e8e6e6] px-5 py-4">
                  <p className="text-[18px] font-semibold text-[#1c1e1e]">{num}</p>
                  <p className="text-[12px] text-[#6a6a6a] mt-1">{label}</p>
                </div>
              ))}
            </div>
          )}

          {(published || updated) && type === "article" && (
            <p className="text-[12px] text-[#6a6a6a] mb-6">
              Af{" "}
              <Link href="/om-mig" className="text-[#1c1e1e] underline decoration-[#00a8e8]/50 underline-offset-4">
                Ivan Kohan
              </Link>
              {published && <> · Udgivet {fmtDate(published)}</>}
              {updated && updated !== published && <> · Opdateret {fmtDate(updated)}</>}
            </p>
          )}

          {summary && (
            <aside
              data-speakable
              className="rounded-2xl bg-white border border-[#e8e6e6] border-l-4 border-l-[#00a8e8] px-6 py-5 mb-12 max-w-4xl"
            >
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#666] mb-2">{summaryLabel}</p>
              <p className="text-[15px] text-[#1c1e1e] leading-[1.75]">{summary}</p>
            </aside>
          )}
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pb-16 sm:pb-24 grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] gap-10 lg:gap-16">
          {toc.length > 2 ? (
            <nav aria-label="Indhold på siden" className="hidden lg:block">
              <div className="sticky top-24">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#666] mb-4">På denne side</p>
                <ol className="flex flex-col gap-2.5 border-l border-[#dcdada]">
                  {toc.map((t) => (
                    <li key={t.id}>
                      <a
                        href={`#${t.id}`}
                        className="block pl-4 text-[12px] leading-snug text-[#5a5a5a] hover:text-[#00a8e8] transition-colors"
                      >
                        {t.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>
          ) : (
            <span className="hidden lg:block" />
          )}

          <div className="max-w-3xl flex flex-col gap-14">
            {sections.map((section) => (
              <article key={section.h2 || section.paragraphs?.[0]} id={section.id || (section.h2 ? slugify(section.h2) : undefined)} className="scroll-mt-24">
                {section.h2 && (
                  <h2 className="text-[#1c1e1e] font-semibold tracking-tight leading-[1.2] text-[clamp(20px,2.4vw,28px)] mb-5">
                    {section.h2}
                  </h2>
                )}
                {section.paragraphs?.map((text) => (
                  <p key={text.slice(0, 48)} className="text-[14px] text-[#555] leading-[1.95] mb-4">
                    {text}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="flex flex-col gap-2.5 my-4">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3 text-[14px] text-[#555] leading-[1.75]">
                        <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#00a8e8] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.steps && (
                  <ol className="flex flex-col gap-3 my-5">
                    {section.steps.map((step, i) => (
                      <li key={step.title} className="flex gap-4 rounded-2xl bg-white border border-[#e8e6e6] p-5">
                        <span className="text-[12px] font-semibold text-[#00a8e8] pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                        <div>
                          <p className="text-[14px] font-medium text-[#1c1e1e] mb-1">{step.title}</p>
                          <p className="text-[13px] text-[#666] leading-[1.8]">{step.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                )}
                {section.table && (
                  <div className="overflow-x-auto my-5 rounded-2xl border border-[#e8e6e6] bg-white">
                    <table className="w-full text-left text-[13px]">
                      <thead>
                        <tr className="border-b border-[#e8e6e6] bg-[#fbfafa]">
                          {section.table.head.map((h) => (
                            <th key={h} scope="col" className="px-4 py-3 font-medium text-[#1c1e1e] whitespace-nowrap">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row[0]} className="border-b border-[#f0eeee] last:border-0">
                            {row.map((cell, i) => (
                              <td key={i} className={`px-4 py-3 align-top leading-[1.6] ${i === 0 ? "font-medium text-[#1c1e1e]" : "text-[#555]"}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.subs?.map((sub) => (
                  <div key={sub.h3} className="mt-7">
                    <h3 className="text-[16px] font-medium text-[#1c1e1e] mb-3">{sub.h3}</h3>
                    {sub.paragraphs?.map((text) => (
                      <p key={text.slice(0, 48)} className="text-[14px] text-[#555] leading-[1.95] mb-4">
                        {text}
                      </p>
                    ))}
                    {sub.bullets && (
                      <ul className="flex flex-col gap-2.5 my-3">
                        {sub.bullets.map((item) => (
                          <li key={item} className="flex gap-3 text-[14px] text-[#555] leading-[1.75]">
                            <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#00a8e8] flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
                {section.cta && (
                  <p className="mt-5 text-[14px]">
                    <Link href={section.cta.href} className="text-[#007aab] font-medium hover:underline underline-offset-4">
                      {section.cta.label} →
                    </Link>
                  </p>
                )}
              </article>
            ))}

            {glossary && (
              <dl className="flex flex-col gap-4">
                {glossary.map((g) => (
                  <div key={g.term} id={slugify(g.term)} className="scroll-mt-24 rounded-2xl bg-white border border-[#e8e6e6] p-5">
                    <dt className="text-[15px] font-semibold text-[#1c1e1e] mb-2">{g.term}</dt>
                    <dd className="text-[13px] text-[#555] leading-[1.85]">{g.def}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </section>

      {extra}

      {related.length > 0 && (
        <section className="sheet bg-white border-t border-[#e8e6e6]">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-14 sm:py-20">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#666] mb-3 flex items-center gap-3">
              <span className="w-8 h-px bg-[#00a8e8]" />
              Læs også
            </p>
            <h2 className="text-[#1c1e1e] font-semibold tracking-tight leading-[1.15] text-[clamp(22px,2.8vw,34px)] mb-8">
              Mere om hvad jeg kan hjælpe med
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl p-6 flex flex-col gap-2 bg-[#f7f6f6] border border-[#e8e6e6] hover:border-[#00a8e8]/40 transition-colors"
                >
                  <p className="flex items-center justify-between text-[14px] font-medium text-[#1c1e1e] group-hover:text-[#00a8e8] transition-colors">
                    {item.title}
                    <span className="text-[#b8b6b6] group-hover:text-[#00a8e8] transition-all group-hover:translate-x-1">→</span>
                  </p>
                  <p className="text-[12px] text-[#6a6a6a] leading-relaxed">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {faqs.length > 0 && <Questions faqs={faqs} />}
      <CtaSearchBlock />
    </>
  );
}
