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
          { "@type": "City", name: "Horsens" },
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
      <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 pt-20 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.1em] text-[#8a8a8a] mb-5">
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
                className="inline-flex items-center rounded-full bg-[#00a8e8] px-6 py-3 text-[13px] font-medium text-[#111313] transition-opacity hover:opacity-90"
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

          <div className="bg-[#1c1e1e] border border-[#2a2d2d] rounded-2xl p-7">
            <QuickLeadForm />
          </div>
        </div>
      </section>

      {/* Indhold */}
      <section className="bg-white px-5 sm:px-10 lg:px-20 py-16">
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          {sections.map((section) => (
            <article key={section.h2}>
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
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00a8e8] flex-shrink-0" />
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
                className="group rounded-2xl p-6 flex flex-col gap-3 bg-[#f7f6f6] border border-[#e8e8e8] hover:border-[#00a8e8]/30 transition-colors"
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
