import PageHero, { PrimaryLink, GhostLink } from "../../components/ui/PageHero";
import SectionHead from "../../components/ui/SectionHead";
import FormToLead from "../../components/ui/FormToLead";
import { FadeUp } from "../../components/home/fx/Reveal";
import { breadcrumbLd, orgRef, SITE_URL } from "../../lib/seo";
import Countdown from "../../components/ui/Countdown";
import { BLACK_FRIDAY, BF_PACKAGES, BF_AI_PACKAGES, bfPrice, kr, isBlackFridayLive } from "../../data/campaign";

const ALL_PACKAGES = [...BF_PACKAGES, ...BF_AI_PACKAGES];

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
      itemListElement: ALL_PACKAGES.map((p) => ({
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

function HeroAside() {
  const max = Math.max(...ALL_PACKAGES.map((p) => p.price - bfPrice(p.price)));
  return (
    <FadeUp delay={0.2} className="rounded-3xl bg-white/[0.04] border border-white/10 p-6 sm:p-8">
      <Countdown />
      <div className="mt-7 pt-6 border-t border-white/10">
        <p className="text-[13px] text-[#8a9696]">Du kan spare op til</p>
        <p className="text-[clamp(30px,3.4vw,42px)] font-semibold text-white leading-tight">{kr(max)}</p>
        <p className="text-[13px] text-[#8a9696] mt-1">Skriv senest {BLACK_FRIDAY.endLabel}, så er prisen låst.</p>
      </div>
    </FadeUp>
  );
}

function PackageCard({ p, live, i, className = "" }) {
  const sale = bfPrice(p.price);
  return (
    <FadeUp delay={i * 0.06} className={`h-full ${className}`}>
      <div className={`relative h-full rounded-3xl p-7 sm:p-8 flex flex-col border ${p.popular ? "bg-[#1c1e1e] border-[#00a8e8]/50 text-white" : "bg-white border-[#e8e6e6] text-[#1c1e1e]"}`}>
        {p.popular && (
          <span className="absolute -top-3 left-7 text-[11px] font-semibold px-3 py-1 rounded-full bg-[#00a8e8] text-white">Mest valgt</span>
        )}
        <h3 className="text-[19px] font-semibold tracking-tight">{p.name}</h3>
        <p className={`mt-2 text-[14px] leading-[1.7] ${p.popular ? "text-[#b4bdbd]" : "text-[#5f5f5f]"}`}>{p.tagline}</p>

        <div className="mt-6">
          {live ? (
            <>
              <p className={`text-[13px] line-through ${p.popular ? "text-[#8a9696]" : "text-[#8a8a8a]"}`}>
                {p.prefix ? `${p.prefix} ` : ""}{kr(p.price)}
              </p>
              <p className="text-[clamp(28px,3vw,36px)] font-semibold tracking-tight leading-tight text-[#00a8e8]">
                {p.prefix ? `${p.prefix} ` : ""}{kr(sale)}
              </p>
              <p className="mt-2 inline-block text-[12.5px] font-semibold px-2.5 py-1 rounded-full bg-[#00a8e8]/15 text-[#00a8e8]">
                Du sparer {kr(p.price - sale)}
              </p>
            </>
          ) : (
            <p className="text-[clamp(28px,3vw,36px)] font-semibold tracking-tight leading-tight">
              {p.prefix ? `${p.prefix} ` : "Fra "}{kr(p.price)}
            </p>
          )}
          <p className={`mt-2 text-[12.5px] ${p.popular ? "text-[#8a9696]" : "text-[#8a8a8a]"}`}>inkl. moms · levering {p.delivery}</p>
        </div>

        <ul className={`mt-6 flex flex-col gap-3 ${p.features.length > 5 ? "sm:grid sm:grid-cols-2 sm:gap-x-6" : ""}`}>
          {p.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 mt-[1px] bg-[#00a8e8]/15">
                <svg width="9" height="9" viewBox="0 0 8 8" fill="none" aria-hidden>
                  <path d="M1.5 4l2 2 3-3" stroke="#00a8e8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className={`text-[14px] leading-snug ${p.popular ? "text-[#c9d3d3]" : "text-[#4a4a4a]"}`}>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          <PrimaryLink href="#kontakt">{live ? `Lås ${d}% rabat` : "Få et tilbud"}</PrimaryLink>
        </div>
      </div>
    </FadeUp>
  );
}

export default function BlackFridayPage() {
  const live = isBlackFridayLive();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(live)) }} />
      <PageHero
        breadcrumbs={[{ label: "Forside", href: "/" }, { label: "Black Friday" }]}
        titleLines={live ? ["Black Friday:", `${d}% rabat på din`, "nye hjemmeside"] : ["Black Friday-tilbuddet", "er slut for i år"]}
        lead={
          live
            ? `Hjemmesider, webshops og SEO til fast pris fra WebHjerte i Horsens – nu med ${d}% rabat til og med ${BLACK_FRIDAY.endLabel}. Du ser første design på 48 timer og betaler 0 kr, hvis det ikke passer.`
            : "Tilbuddet er udløbet, men du kan stadig få en hjemmeside til fast pris, og første design er klar på 48 timer. Se priserne eller skriv til mig for et uforpligtende tilbud."
        }
        aside={live ? <HeroAside /> : null}
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
            lines={live ? ["Hjemmesider med", `${d}% Black Friday-rabat`] : ["Priser på hjemmesider"]}
            lead="Alle priser er i danske kroner inkl. moms og er faste: Du ved præcis, hvad det koster, før vi går i gang. Valgte du den forkerte pakke? Vi finder den rigtige sammen på første samtale."
            maxW="max-w-[34ch]"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {BF_PACKAGES.map((p, i) => (
              <PackageCard key={p.id} p={p} live={live} i={i} className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"} />
            ))}
          </div>
        </div>
      </section>

      <section className="scene bg-[#e4f0f7]" id="ai-seo">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
          <SectionHead
            lines={live ? ["AI SEO – bliv fundet i Google", `og ChatGPT, nu med ${d}% rabat`] : ["AI SEO – bliv fundet i Google og ChatGPT"]}
            lead="Når dine kunder spørger Google eller ChatGPT om en leverandør som dig, skal det være dit navn, der kommer frem. Alle priser er inkl. moms."
            maxW="max-w-[34ch]"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {BF_AI_PACKAGES.map((p, i) => (
              <PackageCard key={p.id} p={p} live={live} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="scene bg-[#1c1e1e]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
          <SectionHead dark lines={["Du løber ingen risiko –", "det gælder også på Black Friday"]} />
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

      {live && (
        <section className="scene bg-[#f7f6f6]">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
            <SectionHead lines={["Sådan låser du rabatten", "i tre skridt"]} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                ["01", `Skriv inden ${BLACK_FRIDAY.endLabel}`, "Udfyld formularen nedenfor og skriv, hvilken pakke du er interesseret i. Det tager to minutter."],
                ["02", "Vi tager en uforpligtende snak", "Jeg svarer inden for 24 timer og finder sammen med dig den pakke, der passer. Du får en fast pris på skrift – med rabatten."],
                ["03", "Du ser designet, før du betaler", "Første udkast kommer inden for 48 timer. Passer det ikke, betaler du 0 kr for det."],
              ].map(([n, t, x], i) => (
                <FadeUp key={n} delay={i * 0.08} className="h-full">
                  <div className="h-full rounded-3xl bg-white border border-[#e8e6e6] p-7 flex flex-col gap-3">
                    <span className="text-[12px] tabular-nums text-[#00a8e8]">{n}</span>
                    <p className="text-[17px] font-semibold text-[#1c1e1e]">{t}</p>
                    <p className="text-[15px] text-[#5f5f5f] leading-[1.75]">{x}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {live && (
        <section className="bg-[#1c1e1e] border-t border-white/10 px-5 sm:px-10 lg:px-16 pt-14">
          <div className="max-w-6xl mx-auto">
            <Countdown />
          </div>
        </section>
      )}

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
