import Link from "next/link";
import Questions from "../Questions";
import CtaSearchBlock from "../ui/CTA";
import ProcessBlock from "../home/ProcessBlock";
import QuickLeadForm from "../ui/QuickLeadForm";

const SITE_URL = "https://www.webhjerte.dk";

const facts = [
  { num: "Fra 2.500 kr", label: "Fast pris" },
  { num: "14 dage", label: "Typisk leveringstid" },
  { num: "48 timer", label: "Til første designudkast" },
];

/**
 * Fælles skabelon til lokale SEO-landingssider (Horsens / Midtjylland).
 * Al tekst leveres af den enkelte side, så hver side har unikt indhold.
 */
export default function LocalLandingPage({
  path,
  name,
  serviceType,
  eyebrow,
  h1,
  intro,
  sections,
  faqs,
  related,
  area = "Horsens",
  highlights,
  visual,
}) {
  const url = `${SITE_URL}${path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name,
        serviceType,
        url,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: [
          { "@type": "City", name: area },
          { "@type": "AdministrativeArea", name: "Midtjylland" },
          { "@type": "Country", name: "Danmark" },
        ],
        offers: {
          "@type": "Offer",
          priceCurrency: "DKK",
          price: "2500",
          description: "Priser starter fra 2.500 kr for en landingside",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Forside", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#111313] px-5 sm:px-10 lg:px-20 pt-16 pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-[#00a8e8]/10 blur-3xl"
        />
        <nav aria-label="Brødkrumme" className="relative max-w-6xl mx-auto mb-10 text-[12px] text-[#7a7a7a]">
          <Link href="/" className="hover:text-white transition-colors">Forside</Link>
          <span className="mx-2">/</span>
          <span className="text-[#c0c0c0]">{name}</span>
        </nav>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-start">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#2a3a3a] px-3 py-1 text-[11px] uppercase tracking-[0.1em] text-[#9a9a9a] mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00a8e8]" />
              {eyebrow}
            </p>
            <h1 className="maintitle text-white !leading-tight mb-6 text-balance">
              {h1}
            </h1>
            <p className="text-[14px] text-[#a0a0a0] leading-[1.85] max-w-[56ch] mb-8">
              {intro}
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/kontakt"
                className="inline-flex items-center rounded-full bg-[#00a8e8] px-6 py-3 text-[13px] font-medium text-[#111313] shadow-lg shadow-[#00a8e8]/20 transition hover:opacity-90 hover:-translate-y-0.5"
              >
                Få et gratis tilbud
              </Link>
              <Link
                href="/hjemmeside-pris"
                className="inline-flex items-center rounded-full border border-[#3a3d3d] px-6 py-3 text-[13px] font-medium text-[#e0e0e0] transition-colors hover:border-[#5a5d5d]"
              >
                Se priser
              </Link>
            </div>
            <div className="flex gap-8 flex-wrap pt-8 border-t border-[#1e2020]">
              {facts.map(({ num, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-lg font-medium text-white">{num}</span>
                  <span className="text-xs text-[#7a7a7a]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1c1e1e] border border-[#2a2d2d] rounded-2xl p-7 shadow-2xl shadow-black/30">
            <QuickLeadForm />
          </div>
        </div>
      </section>

      {visual && (
        <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 pb-20">
          <div className="max-w-6xl mx-auto">{visual}</div>
        </section>
      )}

      {highlights && (
        <section className="bg-white px-5 sm:px-10 lg:px-20 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="title text-[#1a1a1a] !leading-tight !mb-8 text-center">
              {highlights.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {highlights.items.map((it) => (
                <div
                  key={it.title}
                  className="group rounded-2xl border border-[#e8e8e8] bg-[#f7f6f6] p-6 transition hover:-translate-y-1 hover:border-[#00a8e8]/40 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#00a8e8]/10 text-xl transition group-hover:scale-110">
                    <span aria-hidden="true">{it.icon}</span>
                  </div>
                  <p className="mb-2 text-[15px] font-medium text-[#1a1a1a]">{it.title}</p>
                  <p className="text-[13px] leading-relaxed text-[#6a6a6a]">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Indhold */}
      <section className="bg-[#f7f6f6] px-5 sm:px-10 lg:px-20 py-16">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {sections.map((section, i) => (
            <article
              key={section.h2}
              className="rounded-2xl border border-[#e8e8e8] bg-white p-7 sm:p-9 shadow-sm"
            >
              <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#00a8e8]/10 text-[12px] font-medium text-[#0086b8]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="title text-[#1a1a1a] !leading-tight !mb-4">
                {section.h2}
              </h2>
              {section.paragraphs?.map((text) => (
                <p
                  key={text.slice(0, 40)}
                  className="text-[14px] text-[#5a5a5a] leading-[1.9] mb-4"
                >
                  {text}
                </p>
              ))}
              {section.bullets && (
                <ul className="flex flex-col gap-2.5 mt-2">
                  {section.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[14px] text-[#5a5a5a] leading-[1.7]"
                    >
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-1 flex-shrink-0">
                        <circle cx="8" cy="8" r="8" fill="#00a8e8" fillOpacity=".12" />
                        <path d="M4.8 8.2l2 2 4.2-4.4" stroke="#00a8e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <ProcessBlock />

      {/* Relaterede sider */}
      <section className="bg-white px-5 sm:px-10 lg:px-20 py-16 border-t border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
            Læs også
          </p>
          <h2 className="title text-[#1a1a1a] !leading-tight !mb-8">
            Mere om hvad jeg kan hjælpe med
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl p-6 flex flex-col gap-3 bg-[#f7f6f6] border border-[#e8e8e8] hover:border-[#00a8e8]/40 hover:-translate-y-0.5 hover:shadow-md transition"
              >
                <p className="text-[15px] font-medium text-[#5a5a5a] group-hover:text-[#00a8e8] transition-colors">
                  {item.title}
                </p>
                <p className="text-[13px] text-[#6a6a6a] leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Questions faqs={faqs} />
      <CtaSearchBlock />
    </>
  );
}
