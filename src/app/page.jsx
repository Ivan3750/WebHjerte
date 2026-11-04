import Link from "next/link";
import HomeHero from "./components/home/HomeHero";
import ScrollStatement from "./components/home/ScrollStatement";
import BuildStory from "./components/home/BuildStory";
import TilbydeSection from "./components/home/TilbydeSection";
import AboutBlock from "./components/home/AboutBlock";
import HomeCases from "./components/home/HomeCases";
import Questions from "./components/Questions";
import QuickLeadForm from "./components/ui/QuickLeadForm";
import StickyCallButton from "./components/ui/StickyCallButton";
import ScrollProgress from "./components/ui/ScrollProgress";
import TrustStrip from "./components/home/TrustStrip";
import GuaranteesBlock from "./components/home/GuaranteesBlock";
import TimelineChart from "./components/home/TimelineChart";
import { FadeUp, RevealLines } from "./components/home/fx/Reveal";
import SpotlightCard from "./components/home/fx/SpotlightCard";

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

const localLinks = [
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
];

const nicheLinks = [
  { href: "/hjemmeside-til-haandvaerkere", label: "Håndværkere" },
  { href: "/hjemmeside-til-restauranter", label: "Restauranter" },
  { href: "/hjemmeside-til-saloner", label: "Saloner" },
  { href: "/hjemmeside-til-vvs", label: "VVS" },
  { href: "/hjemmeside-til-elektriker", label: "Elektrikere" },
  { href: "/hjemmeside-til-tomrer", label: "Tømrere" },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />

      <HomeHero />
      <TrustStrip />
      <ScrollStatement />
      <BuildStory />
      <TilbydeSection />
      <GuaranteesBlock />
      <TimelineChart />
      <HomeCases />
      <AboutBlock />

      {/* Lokalt webbureau – indhold til søgninger som "webbureau Horsens" */}
      <section className="scene bg-[#f7f6f6] border-t border-[#e8e6e6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <FadeUp as="p" className="text-[11px] uppercase tracking-[0.18em] text-[#8a8a8a] mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-[#00a8e8]" />
                Dit lokale webbureau
              </FadeUp>
              <RevealLines
                lines={["Webbureau i Horsens, der", "leverer kunder – ikke", "bare et design"]}
                className="text-[#1c1e1e] font-semibold tracking-tight leading-[1.12] text-[clamp(24px,3.2vw,40px)] mb-6"
              />
              <FadeUp as="p" delay={0.1} className="text-[14px] text-[#5f5f5f] leading-[1.85] mb-4">
                Som webbureau i Horsens hjælper jeg lokale virksomheder med at blive fundet på Google og omsætte
                besøgende til henvendelser. Du får en hurtig, mobilvenlig hjemmeside med SEO bygget ind fra første dag –
                til en fast pris, så du ved præcis, hvad det koster.
              </FadeUp>
              <FadeUp as="p" delay={0.15} className="text-[14px] text-[#5f5f5f] leading-[1.85]">
                Jeg er baseret i Horsens og arbejder med virksomheder i hele Midtjylland og Danmark. Du har én
                kontaktperson fra første samtale til lancering – ingen mellemled, ingen overraskelser.
              </FadeUp>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 content-start">
              {localLinks.map((item, i) => (
                <FadeUp key={item.href} delay={i * 0.07}>
                  <Link href={item.href} className="block h-full">
                    <SpotlightCard dark={false} className="h-full rounded-2xl bg-white border border-[#e8e6e6] hover:border-[#00a8e8]/40 transition-colors">
                      <div className="p-5 flex flex-col gap-2 h-full">
                        <p className="flex items-center justify-between text-[14px] font-medium text-[#1c1e1e] group-hover:text-[#00a8e8] transition-colors">
                          {item.title}
                          <span className="text-[#b8b6b6] transition-all duration-300 group-hover:text-[#00a8e8] group-hover:translate-x-1">→</span>
                        </p>
                        <p className="text-[12px] text-[#6a6a6a] leading-relaxed">{item.desc}</p>
                      </div>
                    </SpotlightCard>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>

          <FadeUp className="mt-12 pt-8 border-t border-[#e4e2e2] flex flex-wrap items-center gap-3">
            <span className="text-[12px] text-[#5a5a5a]">Hjemmesider til din branche:</span>
            {nicheLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[12px] text-[#3a3a3a] bg-white border border-[#e4e2e2] rounded-full px-4 py-1.5 hover:border-[#00a8e8] hover:text-[#00a8e8] hover:-translate-y-0.5 transition-all"
              >
                {l.label}
              </Link>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* Quick lead form */}
      <section className="scene relative overflow-hidden bg-[#1c1e1e]">
        <div className="relative max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-24 sm:py-32 grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <FadeUp as="p" className="text-[11px] uppercase tracking-[0.18em] text-[#7a8787] mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#00a8e8]" />
              Kom i gang
            </FadeUp>
            <RevealLines
              lines={["Få et gratis", "tilbud"]}
              className="text-white font-semibold tracking-tight leading-[1.08] text-[clamp(30px,4.4vw,58px)] mb-5"
            />
            <FadeUp as="p" delay={0.1} className="text-[14px] text-[#8795a0] leading-[1.8] max-w-md mb-10">
              Har du allerede en hjemmeside, der trænger til et løft, eller starter du helt forfra? Skriv det i
              formularen — jeg svarer inden for 24 timer.
            </FadeUp>

            <FadeUp delay={0.15} className="glass rounded-2xl overflow-hidden divide-y divide-white/10">
              {[
                { label: "Svartid", value: "Inden for 24 timer" },
                { label: "Første samtale", value: "Gratis & uforpligtende" },
                { label: "Arbejdsområde", value: "Hele Danmark" },
                { label: "Baseret i", value: "Horsens, Midtjylland" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between px-5 py-4">
                  <span className="text-[12px] text-[#6f7c7c]">{label}</span>
                  <span className="text-[12px] font-medium text-[#e8ecec]">{value}</span>
                </div>
              ))}
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <div className="relative rounded-3xl p-[1px] bg-[#00a8e8]/40">
              <div className="rounded-[calc(1.5rem-1px)] bg-[#242828] p-6 sm:p-8">
                <QuickLeadForm />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Questions />

      <StickyCallButton />
    </>
  );
}
