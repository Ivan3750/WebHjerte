import Link from "next/link";
import Button from "./components/ui/Button";
import AnimatedInView from "./components/ui/AnimatedInView";
import TilbydeSection from "./components/home/TilbydeSection";
import AboutBlock from "./components/home/AboutBlock";
import ProcessBlock from "./components/home/ProcessBlock";
import Questions from "./components/Questions";
import SocialProof from "./components/home/SocialProof";
import CasesCarousel from "./components/home/CasesCarousel";
import QuickLeadForm from "./components/ui/QuickLeadForm";
import StickyCallButton from "./components/ui/StickyCallButton";

export const metadata = {
  title: "Webbureau Horsens | Webdesign til lokale virksomheder | WebHjerte",
  description:
    "Lokalt webbureau i Horsens: hjemmesider fra 2.500 kr, live på 14 dage. Direkte kontakt med udvikleren. Få et gratis tilbud inden for 24 timer.",
  keywords: [
    "webbureau Horsens",
    "webdesign Horsens",
    "hjemmeside Horsens",
    "webudvikler Horsens",
    "webbureau Midtjylland",
    "webdesigner Horsens",
    "SEO Horsens",
    "hjemmeside til virksomhed",
    "webdesign til virksomheder",
  ],
  alternates: {
    canonical: "https://www.webhjerte.dk/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Webbureau i Horsens | WebHjerte",
    description:
      "Professionelle og hurtige hjemmesider til virksomheder i Horsens og Midtjylland. Direkte kontakt med udvikleren – ingen mellemled.",
    url: "https://www.webhjerte.dk/",
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webbureau i Horsens | WebHjerte",
    description:
      "Professionelle hjemmesider til virksomheder i Horsens og Midtjylland. Direkte kontakt med udvikleren – ingen mellemled.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  "@id": "https://www.webhjerte.dk/#organization",
  name: "WebHjerte",
  url: "https://www.webhjerte.dk/",
  description:
    "Webbureau i Horsens, der bygger professionelle hjemmesider til virksomheder i Horsens og Midtjylland.",
  areaServed: [
    { "@type": "City", name: "Horsens" },
    { "@type": "AdministrativeArea", name: "Midtjylland" },
    { "@type": "Country", name: "Danmark" },
  ],
  serviceType: ["Webdesign", "Webudvikling", "Hjemmesider", "SEO"],
  founder: { "@type": "Person", name: "Ivan Kohan" },
  telephone: "+45 42 76 05 77",
  email: "hej@webhjerte.dk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Horsens",
    postalCode: "8700",
    addressCountry: "DK",
  },
  priceRange: "$$",
  sameAs: [
    "https://www.linkedin.com/company/webhjerte",
    "https://www.facebook.com/profile.php?id=61575549052729",
    "https://www.instagram.com/webhjerte",
  ],
};

const facts = [
  { num: "Fra 2.500 kr", label: "Fast pris" },
  { num: "Ca. 14 dage", label: "Leveringstid" },
  { num: "1 person", label: "Du taler direkte med mig" },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[calc(100dvh-68px)] flex items-center px-5 sm:px-10 lg:px-20 overflow-hidden bg-[#111313]">
        <div className="relative z-10 w-full mx-auto grid md:grid-cols-2 gap-16 items-center py-20">
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 border border-[#2a3a3a] rounded-full px-3 py-1 text-xs text-[#9a9a9a] w-fit mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a8e8]" />
              Horsens & Midtjylland
            </div>

            <h1 className="maintitle text-md text-white text-balance !leading-tight mb-4">
              Webbureau i Horsens – hjemmesider med fast pris, live på 14 dage
            </h1>

            <p className="subtitle text-[#8a8a8a] !text-[15px] max-w-md mb-8">
              WebHjerte er dit lokale webbureau i Horsens. Jeg bygger enkle, hurtige hjemmesider
              til virksomheder i Horsens, Midtjylland og resten af Danmark. Du taler direkte med mig, ikke med et mellemled. Jeg
              bruger AI til at gå hurtigere, så du betaler for resultatet, ikke
              for timer.
            </p>

            {/* Guarantee badge */}
            <div className="inline-flex items-center gap-2 border border-[#00a8e8]/30 bg-[#00a8e8]/5 rounded-xl px-4 py-2.5 mb-8 w-fit">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                <path d="M8 1l2 2 3 .5-.5 3L14 8l-1.5 1.5.5 3-3 .5-2 2-2-2-3-.5.5-3L2 8l1.5-1.5-.5-3 3-.5 2-2z" stroke="#00a8e8" strokeWidth="1.2" strokeLinejoin="round" />
                <path d="M5.5 8l1.5 1.5 3.5-3.5" stroke="#00a8e8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[12px] text-[#c0c0c0]">
                <span className="text-[#00a8e8] font-medium">Første design i 48 timer.</span>{" "}
                Ikke tilfreds? Du betaler 0 kr for designet.
              </span>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <Link href="/services">
                <Button name="Se priser" />
              </Link>
              <Link
                href="/kontakt"
                className="text-sm text-[#c8c8c8] underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00a8e8]"
              >
                Skriv til mig
              </Link>
            </div>

            <div className="flex gap-8 mt-10 pt-8 border-t border-[#1e2020] flex-wrap">
              {facts.map(({ num, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-xl font-medium text-white">{num}</span>
                  <span className="text-xs text-[#7a7a7a]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-md rounded-xl border border-[#2a3a3a] bg-[#161818] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1e2020] bg-[#141616]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3a3a3a]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#3a3a3a]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#3a3a3a]" />
                <div className="ml-3 flex-1 h-5 rounded-md bg-[#1e2020] flex items-center px-2">
                  <span className="text-[10px] text-[#6a6a6a]">dinvirksomhed.dk</span>
                </div>
              </div>

              <div className="p-5 flex flex-col gap-3">
                <div className="h-5 w-2/3 rounded bg-[#232525]" />
                <div className="h-3 w-full rounded bg-[#1e2020]" />
                <div className="h-3 w-5/6 rounded bg-[#1e2020]" />

                <div className="flex gap-3 mt-3">
                  <div className="h-20 flex-1 rounded-lg bg-[#1e2020] border border-[#2a3a3a]" />
                  <div className="h-20 flex-1 rounded-lg bg-[#1e2020] border border-[#2a3a3a]" />
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <span className="text-xs text-[#7a7a7a]">Live på 14 dage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lokalt webbureau – indhold til søgninger som "webbureau Horsens" */}
      <section className="bg-[#f7f6f6] px-5 sm:px-10 lg:px-20 py-16 border-t border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
              Dit lokale webbureau
            </p>
            <h2 className="title text-[#1a1a1a] !leading-tight !mb-4">
              Webbureau i Horsens, der leverer kunder – ikke bare et design
            </h2>
            <p className="text-[14px] text-[#5a5a5a] leading-[1.85] mb-4">
              Som webbureau i Horsens hjælper jeg lokale virksomheder med at blive
              fundet på Google og omsætte besøgende til henvendelser. Du får en
              hurtig, mobilvenlig hjemmeside med SEO bygget ind fra første dag –
              til en fast pris, så du ved præcis, hvad det koster.
            </p>
            <p className="text-[14px] text-[#5a5a5a] leading-[1.85]">
              Jeg er baseret i Horsens og arbejder med virksomheder i hele
              Midtjylland og Danmark. Du har én kontaktperson fra første samtale
              til lancering – ingen mellemled, ingen overraskelser.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 content-start">
            {[
              {
                href: "/webdesign-horsens",
                title: "Webdesign Horsens",
                desc: "Skræddersyet design, der bygger tillid og får besøgende til at handle.",
              },
              {
                href: "/seo-horsens",
                title: "SEO Horsens",
                desc: "Bliv fundet af kunder, der søger efter dig lokalt på Google.",
              },
              {
                href: "/webbureau-midtjylland",
                title: "Webbureau Midtjylland",
                desc: "Hjemmesider til virksomheder i Aarhus, Silkeborg, Vejle og hele regionen.",
              },
              {
                href: "/hjemmeside-pris",
                title: "Hvad koster en hjemmeside?",
                desc: "Se faste priser fra 2.500 kr – ingen skjulte gebyrer.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl p-5 flex flex-col gap-2 bg-white border border-[#e8e8e8] hover:border-[#00a8e8]/30 transition-colors"
              >
                <p className="text-[14px] font-medium text-[#3a3a3a] group-hover:text-[#00a8e8] transition-colors">
                  {item.title}
                </p>
                <p className="text-[12px] text-[#6a6a6a] leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-8 border-t border-[#e8e8e8] flex flex-wrap items-center gap-3">
          <span className="text-[12px] text-[#5a5a5a]">Hjemmesider til din branche:</span>
          {[
            { href: "/hjemmeside-til-haandvaerkere", label: "Håndværkere" },
            { href: "/hjemmeside-til-restauranter", label: "Restauranter" },
            { href: "/hjemmeside-til-saloner", label: "Saloner" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[12px] text-[#3a3a3a] bg-white border border-[#e8e8e8] rounded-full px-3.5 py-1.5 hover:border-[#00a8e8]/40 hover:text-[#00a8e8] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      <TilbydeSection />
      <SocialProof />
      <CasesCarousel />
      <AboutBlock />
      <ProcessBlock />

      {/* Quick lead form */}
      <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <AnimatedInView
              as="p"
              className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3"
            >
              Kom i gang
            </AnimatedInView>
            <AnimatedInView
              as="h2"
              className="maintitle text-white !leading-tight mb-4"
            >
              Få et gratis tilbud
            </AnimatedInView>
            <AnimatedInView
              as="p"
              className="text-[14px] text-[#5a5a5a] leading-[1.75] max-w-md mb-10"
            >
              Har du allerede en hjemmeside, der trænger til et løft, eller
              starter du helt forfra? Skriv det i formularen — jeg svarer inden
              for 24 timer.
            </AnimatedInView>

            <AnimatedInView
              as="div"
              className="flex flex-col gap-px border border-[#2a2d2d] rounded-2xl overflow-hidden"
            >
              {[
                { label: "Svartid", value: "Inden for 24 timer" },
                { label: "Første samtale", value: "Gratis & uforpligtende" },
                { label: "Arbejdsområde", value: "Hele Danmark" },
                { label: "Baseret i", value: "Horsens, Midtjylland" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-center justify-between bg-[#1c1e1e] px-5 py-4"
                >
                  <span className="text-[12px] text-[#5a5a5a]">{label}</span>
                  <span className="text-[12px] font-medium text-[#e0e0e0]">{value}</span>
                </div>
              ))}
            </AnimatedInView>
          </div>
          <AnimatedInView
            as="div"
            className="bg-[#1c1e1e] border border-[#2a2d2d] rounded-2xl p-7"
          >
            <QuickLeadForm />
          </AnimatedInView>
        </div>
      </section>

      <Questions />

      <StickyCallButton />
    </>
  );
}
