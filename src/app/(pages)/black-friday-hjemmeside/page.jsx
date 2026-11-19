import PageHero, { PrimaryLink, GhostLink } from "../../components/ui/PageHero";
import SectionHead from "../../components/ui/SectionHead";
import FormToLead from "../../components/ui/FormToLead";
import { FadeUp } from "../../components/home/fx/Reveal";
import { breadcrumbLd, orgRef, SITE_URL } from "../../lib/seo";
import { BLACK_FRIDAY, BF_PACKAGES, bfPrice, kr, isBlackFridayLive } from "../../data/campaign";

// Siden gen-genereres hver time, så tilbuddet forsvinder fra HTML og skema, når kampagnen er slut
export const revalidate = 3600;

const url = `${SITE_URL}${BLACK_FRIDAY.pageHref}`;
const d = BLACK_FRIDAY.discount;

export const metadata = {
  title: `Black Friday ${d}% rabat på hjemmeside og SEO | WebHjerte`,
  description: `Black Friday-tilbud: ${d}% rabat på hjemmesider, webshops og SEO fra WebHjerte i Horsens. Fast pris, første design på 48 timer – 0 kr, hvis det ikke passer. Gælder til og med ${BLACK_FRIDAY.endLabel}.`,
  keywords: ["black friday hjemmeside", "black friday webdesign", "black friday tilbud hjemmeside", "hjemmeside tilbud", "cyber monday webbureau", "webbureau Horsens tilbud", "SEO tilbud"],
  alternates: { canonical: url },
  openGraph: {
    title: `Black Friday: ${d}% rabat på din nye hjemmeside`,
    description: `Fast pris, første design på 48 timer og ${d}% rabat til og med ${BLACK_FRIDAY.endLabel}.`,
    url,
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "website",
  },
};

const faqs = [
  {
    q: "Hvad får jeg i rabat på Black Friday?",
    a: `${d}% rabat på prisen for nye hjemmesideprojekter, webshops og SEO hos WebHjerte. Rabatten trækkes fra den faste pris, så du ser det endelige beløb, før du siger ja.`,
  },
  {
    q: "Hvor længe gælder Black Friday-tilbuddet?",
    a: `Til og med mandag ${BLACK_FRIDAY.endLabel} 2026 (Cyber Monday). Skriv til mig inden da, så er tilbuddet låst, også selvom projektet først starter senere.`,
  },
  {
    q: "Betaler jeg noget, før jeg har set designet?",
    a: "Nej. Første designudkast kommer inden for 48 timer efter vores samtale, og er du ikke tilfreds med det, betaler du 0 kr for designet. Intet bygges, før du har godkendt det.",
  },
  {
    q: "Kan rabatten kombineres med andre tilbud?",
    a: "Rabatten gælder som den er og lægges ikke oven i andre tilbud. Skriv til mig, hvis du er i tvivl om, hvad der passer bedst til dit projekt.",
  },
  {
    q: "Hvem er WebHjerte?",
    a: "WebHjerte er et lokalt webbureau i Horsens drevet af webudvikler Ivan Kohan. Du har direkte kontakt med udvikleren – ingen mellemled.",
  },
];

function buildJsonLd(live) {
  const graph = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: `Black Friday: ${d}% rabat på hjemmeside og SEO`,
      inLanguage: "da-DK",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: orgRef,
    },
    breadcrumbLd([
      { name: "Forside", path: "/" },
      { name: "Black Friday", path: BLACK_FRIDAY.pageHref },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
  if (live) {
    graph.push({
      "@type": "OfferCatalog",
      "@id": `${url}#offers`,
      name: `Black Friday-tilbud ${d}% rabat`,
      itemListElement: BF_PACKAGES.map((p) => ({
        "@type": "Offer",
        name: p.name,
        description: p.desc,
        price: bfPrice(p.price),
        priceCurrency: "DKK",
        priceValidUntil: BLACK_FRIDAY.endsAt.slice(0, 10),
        availability: "https://schema.org/InStock",
        url,
        seller: orgRef,
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

export default function BlackFridayPage() {
  const live = isBlackFridayLive();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(live)) }} />
      <PageHero
        breadcrumbs={[{ label: "Forside", href: "/" }, { label: "Black Friday" }]}
        titleLines={live ? [`Black Friday: ${d}% rabat`, "på din nye hjemmeside"] : ["Black Friday-tilbuddet", "er slut for i år"]}
        lead={
          live
            ? `Hjemmesider, webshops og SEO til fast pris fra WebHjerte i Horsens – nu med ${d}% rabat til og med ${BLACK_FRIDAY.endLabel}. Du ser første design på 48 timer og betaler 0 kr, hvis det ikke passer.`
            : "Tilbuddet er udløbet, men du kan stadig få en hjemmeside til fast pris, og første design er klar på 48 timer. Se priserne eller skriv til mig for et uforpligtende tilbud."
        }
        actions={
          <>
            <PrimaryLink href="#kontakt">{live ? "Få tilbud med rabat" : "Få et gratis tilbud"}</PrimaryLink>
            <GhostLink href="/services#priser">Se alle priser</GhostLink>
          </>
        }
        facts={[
          { num: live ? `-${d}%` : "Fast pris", label: live ? `til og med ${BLACK_FRIDAY.endLabel}` : "fra 2.500 kr" },
          { num: "48 timer", label: "til første design" },
          { num: "0 kr", label: "hvis designet ikke passer" },
        ]}
      />

      <section className="scene bg-[#f7f6f6]" id="priser">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
          <SectionHead
            lines={live ? ["Priser med Black Friday-rabat"] : ["Priser på hjemmesider og SEO"]}
            lead="Alle priser er i danske kroner inkl. moms. Den endelige pris aftales skriftligt, før vi går i gang."
            maxW="max-w-[34ch]"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BF_PACKAGES.map((p, i) => (
              <FadeUp key={p.name} delay={i * 0.05} className="h-full">
                <div className="h-full rounded-3xl bg-white border border-[#e8e6e6] p-7 flex flex-col gap-3">
                  <h3 className="text-[17px] font-semibold text-[#1c1e1e]">{p.name}</h3>
                  <p className="text-[14px] text-[#5f5f5f] leading-[1.7]">{p.desc}</p>
                  <div className="mt-auto pt-4">
                    {live ? (
                      <>
                        <p className="text-[13px] text-[#8a8a8a] line-through">Fra {kr(p.price)}</p>
                        <p className="text-[26px] font-semibold text-[#00a8e8] leading-tight">Fra {kr(bfPrice(p.price))}</p>
                      </>
                    ) : (
                      <p className="text-[26px] font-semibold text-[#1c1e1e] leading-tight">Fra {kr(p.price)}</p>
                    )}
                    <p className="text-[12.5px] text-[#8a8a8a] mt-1">Levering {p.days}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="scene bg-[#1c1e1e]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
          <SectionHead dark lines={["Derfor er Black Friday", "uden risiko hos WebHjerte"]} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              ["Design først", "Du ser første udkast inden for 48 timer. Intet bygges, før du har godkendt det."],
              ["0 kr, hvis det ikke passer", "Er du ikke tilfreds med designet, betaler du ikke for det."],
              ["Domæne og kode er dine", "Du er ikke bundet til os eller en bestemt platform, og siden leveres typisk på 2–10 dage."],
            ].map(([t, x], i) => (
              <FadeUp key={t} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-3xl glass p-7 flex flex-col gap-3">
                  <p className="text-[17px] font-semibold text-white">{t}</p>
                  <p className="text-[15px] text-[#b4bdbd] leading-[1.75]">{x}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="scene bg-[#f7f6f6]">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
          <SectionHead lines={["Ofte stillede spørgsmål", "om Black Friday-tilbuddet"]} />
          <div className="flex flex-col gap-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white border border-[#e8e6e6] px-6 py-5">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-[16px] font-semibold text-[#1c1e1e]">
                  {f.q}
                  <span aria-hidden className="text-[#00a8e8] transition-transform group-open:rotate-45 text-[22px] leading-none">+</span>
                </summary>
                <p className="mt-4 text-[15px] text-[#5f5f5f] leading-[1.8]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div id="kontakt" className="scroll-mt-[68px]">
        <FormToLead
          eyebrow="Black Friday"
          titleLine={live ? `Få dit tilbud med ${d}% rabat` : "Få et gratis tilbud"}
          description={
            live
              ? `Skriv kort, hvad du har brug for, og nævn Black Friday. Jeg svarer inden for 24 timer, og rabatten er låst, hvis du skriver senest ${BLACK_FRIDAY.endLabel}.`
              : "Skriv kort, hvad du har brug for. Jeg svarer inden for 24 timer."
          }
          defaultPakke="black-friday"
        />
      </div>
    </>
  );
}
