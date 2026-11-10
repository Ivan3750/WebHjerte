import Link from "next/link";
import PageHero, { PrimaryLink, GhostLink } from "../ui/PageHero";
import Questions from "../Questions";
import CtaSearchBlock from "../ui/CTA";
import QuickLeadForm from "../ui/QuickLeadForm";
import { SITE_URL, breadcrumbLd } from "../../lib/seo";
import Image from "next/image";

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
  afterSummary,
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

  const colors = ["#00a8e8", "#3ddc97", "#f0a63a", "#8a8ff0", "#e0678a", "#00a8e8"];
  const midIndex = sections.length >= 4 ? Math.floor(sections.length / 2) : -1;

  const P = ({ children }) => <p className="text-[14.5px] text-[#6a6a6a] leading-[1.95] mb-5 last:mb-0">{children}</p>;

  const Bullets = ({ items }) => (
    <ul className="flex flex-col gap-3 my-6">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[14px] text-[#5a5a5a] leading-[1.75]">
          <span className="mt-[3px] w-[18px] h-[18px] rounded-full bg-[#00a8e8]/15 flex items-center justify-center flex-shrink-0">
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden>
              <path d="M2 5.2l2 2L8 3" stroke="#00a8e8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  const MoreLink = ({ cta }) => (
    <p className="mt-6">
      <Link
        href={cta.href}
        className="text-[13px] font-medium text-[#5a5a5a] border-b border-[#5a5a5a] pb-px hover:text-[#00a8e8] hover:border-[#00a8e8] transition-colors"
      >
        {cta.label} →
      </Link>
    </p>
  );

  const MidCta = () => (
    <aside className="rounded-2xl bg-[#1c1e1e] p-7 sm:p-10 my-4">
      <p className="text-[11px] uppercase tracking-[0.1em] text-[#8a8a8a] mb-3">Fast pris · svar inden for 24 timer</p>
      <p className="font-[Unbounded] font-semibold text-[#00a8e8] text-[clamp(20px,2.4vw,26px)] leading-[1.25] mb-4 max-w-[24ch]">
        Vil du vide, hvad det koster for dig?
      </p>
      <p className="text-[14px] text-[#a0a0a0] leading-[1.85] mb-7 max-w-[52ch]">
        Skriv kort, hvad du har brug for. Så ringer jeg dig op, og du får en fast pris – og et første designudkast på 48 timer. Passer det ikke, betaler du 0 kr.
      </p>
      <div className="flex flex-wrap gap-3">
        <PrimaryLink href="/kontakt">Få et gratis tilbud</PrimaryLink>
        <GhostLink href="tel:+4542760577">Ring 42 76 05 77</GhostLink>
      </div>
    </aside>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow={eyebrow}
        titleLines={[h1]}
        lead={intro}
        size="md"
        facts={type === "service" ? facts : null}
        actions={
          <>
            <PrimaryLink href="/kontakt">Få et gratis tilbud</PrimaryLink>
            <GhostLink href="/hjemmeside-pris">Se priser</GhostLink>
          </>
        }
        aside={
          withForm ? (
            <div className="rounded-2xl border border-[#2a2d2d] bg-[#242828] p-6 sm:p-8">
              <QuickLeadForm />
            </div>
          ) : null
        }
      />

      <section className="bg-[#f7f6f6] px-5 sm:px-10 lg:px-20 pt-16 sm:pt-20 pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto">
          {type === "article" && (
            <div className="flex items-center gap-4 pb-8 mb-10 border-b border-[#e8e8e8]">
              <Image src="/ivan-kohan.jpg" alt="Ivan Kohan" width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="text-[13px] font-medium text-[#3a3a3a]">
                  Skrevet af{" "}
                  <Link href="/om-mig" className="border-b border-[#3a3a3a]/40 hover:border-[#00a8e8] hover:text-[#00a8e8] transition-colors">
                    Ivan Kohan
                  </Link>
                </p>
                <p className="text-[12px] text-[#8a8a8a] mt-0.5">
                  Webudvikler i Horsens
                  {updated ? <> · Opdateret {fmtDate(updated)}</> : published ? <> · {fmtDate(published)}</> : null}
                </p>
              </div>
            </div>
          )}

          {summary && (
            <p data-speakable className="text-[16px] sm:text-[17px] font-medium text-[#3a3a3a] leading-[1.8] mb-14">
              {summary}
            </p>
          )}

          {afterSummary && <div className="mb-16">{afterSummary}</div>}

          <div className="flex flex-col gap-16 sm:gap-20">
            {sections.map((section, idx) => (
              <div key={section.h2 || section.paragraphs?.[0]} className="contents">
                {idx === midIndex && <MidCta />}
                <article id={section.id || (section.h2 ? slugify(section.h2) : undefined)} className="scroll-mt-24">
                  {section.eyebrow && (
                    <p className="text-[11px] uppercase tracking-[0.1em] text-[#8a8a8a] mb-3">{section.eyebrow}</p>
                  )}
                  {section.h2 && (
                    <h2 className="title !text-[clamp(22px,2.6vw,30px)] !leading-[1.2] !mb-6 max-w-[26ch]">{section.h2}</h2>
                  )}
                  {section.paragraphs?.map((text) => <P key={text.slice(0, 48)}>{text}</P>)}
                  {section.quote && (
                    <blockquote className="border-l-2 border-[#00a8e8] pl-5 my-8 text-[15px] italic text-[#5a5a5a] leading-[1.8]">
                      “{section.quote}”
                    </blockquote>
                  )}
                  {section.bullets && <Bullets items={section.bullets} />}
                  {section.after?.map((text) => <P key={text.slice(0, 48)}>{text}</P>)}

                  {section.steps && (
                    <ol className="border-t border-[#e0dede] mt-6">
                      {section.steps.map((step, i) => (
                        <li key={step.title} className="flex items-start gap-5 sm:gap-8 py-7 border-b border-[#e0dede]">
                          <span className="text-[38px] sm:text-[48px] font-light leading-none tabular-nums flex-shrink-0 w-[56px] sm:w-[72px] text-[#d8d6d6]">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="min-w-0">
                            <p className="text-[16px] font-medium text-[#111313] flex items-center gap-3 mb-2">
                              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: colors[i % colors.length] }} />
                              {step.title}
                            </p>
                            <p className="text-[14px] text-[#6a6a6a] leading-[1.75]">{step.text}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  )}

                  {section.table && (
                    <>
                      <div className="hidden sm:block overflow-hidden my-7 rounded-2xl border border-[#e8e8e8] bg-white">
                        <table className="w-full text-left text-[13px]">
                          <thead>
                            <tr className="border-b border-[#e8e8e8]">
                              {section.table.head.map((h, i) => (
                                <th key={h || i} scope="col" className="px-5 py-4 text-[11px] uppercase tracking-[0.08em] font-medium text-[#8a8a8a]">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row) => (
                              <tr key={row[0]} className="border-b border-[#f0eeee] last:border-0">
                                {row.map((cell, i) => (
                                  <td key={i} className={`px-5 py-4 align-top leading-[1.65] ${i === 0 ? "font-medium text-[#3a3a3a]" : "text-[#6a6a6a]"}`}>
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="sm:hidden flex flex-col gap-3 my-6">
                        {section.table.rows.map((row) => (
                          <div key={row[0]} className="rounded-2xl bg-white border border-[#e8e8e8] p-5">
                            <p className="text-[14px] font-medium text-[#3a3a3a] mb-3">{row[0]}</p>
                            <dl className="flex flex-col gap-2">
                              {row.slice(1).map((cell, i) => (
                                <div key={i} className="flex flex-col">
                                  {section.table.head[i + 1] && (
                                    <dt className="text-[10.5px] uppercase tracking-[0.08em] text-[#9a9a9a]">{section.table.head[i + 1]}</dt>
                                  )}
                                  <dd className="text-[13px] text-[#6a6a6a] leading-[1.6]">{cell}</dd>
                                </div>
                              ))}
                            </dl>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {section.subs && (
                    <div className={`grid grid-cols-1 ${section.subs.length > 1 ? "sm:grid-cols-2" : ""} gap-3 mt-7`}>
                      {section.subs.map((sub, i) => (
                        <div key={sub.h3} className="rounded-2xl p-6 sm:p-7 flex flex-col gap-4 bg-white border border-[#e8e8e8]">
                          <div className="flex items-center gap-3">
                            <span
                              className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-medium flex-shrink-0"
                              style={{ backgroundColor: `${colors[i % colors.length]}1a`, color: colors[i % colors.length] }}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <h3 className="text-[15px] font-medium text-[#3a3a3a] leading-snug">{sub.h3}</h3>
                          </div>
                          {sub.paragraphs?.map((text) => (
                            <p key={text.slice(0, 48)} className="text-[13.5px] text-[#6a6a6a] leading-[1.8]">
                              {text}
                            </p>
                          ))}
                          {sub.bullets && <Bullets items={sub.bullets} />}
                          {sub.cta && <MoreLink cta={sub.cta} />}
                        </div>
                      ))}
                    </div>
                  )}

                  {section.cta && <MoreLink cta={section.cta} />}
                </article>
              </div>
            ))}

            {glossary && (
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {glossary.map((g) => (
                  <div key={g.term} id={slugify(g.term)} className="scroll-mt-24 rounded-2xl bg-white border border-[#e8e8e8] p-6">
                    <dt className="text-[15px] font-medium text-[#3a3a3a] mb-2">{g.term}</dt>
                    <dd className="text-[13.5px] text-[#6a6a6a] leading-[1.8]">{g.def}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </section>

      {extra}

      {related.length > 0 && (
        <section className="bg-white px-5 sm:px-10 lg:px-20 py-20">
          <div className="max-w-6xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.1em] text-[#8a8a8a] mb-3">Læs også</p>
            <h2 className="title !leading-tight !mb-10 max-w-[24ch]">Mere, der kan hjælpe dig videre</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl p-6 flex flex-col gap-2 bg-[#f7f6f6] border border-[#e8e8e8] hover:border-[#00a8e8]/40 transition-colors"
                >
                  <p className="flex items-center justify-between gap-3 text-[14px] font-medium text-[#5a5a5a] group-hover:text-[#00a8e8] transition-colors">
                    {item.title}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </p>
                  <p className="text-[12.5px] text-[#7a7a7a] leading-relaxed">{item.desc}</p>
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
