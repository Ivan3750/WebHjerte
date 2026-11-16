import Link from "next/link";
import dynamic from "next/dynamic";
import HomeHero from "./components/home/HomeHero";
import ScrollStatement from "./components/home/ScrollStatement";
import AboutBlock from "./components/home/AboutBlock";
import QuickLeadForm from "./components/ui/QuickLeadForm";
import ScrollProgress from "./components/ui/ScrollProgress";
import AiFocus from "./components/home/AiFocus";
import GuaranteesBlock from "./components/home/GuaranteesBlock";
import { FadeUp, RevealLines } from "./components/home/fx/Reveal";
import { Panel, VisualSite, VisualDashboard, VisualMapPin, VisualPrice } from "./components/illustrations/Visuals";
import { isHiddenHref } from "./data/hidden";

// Sektioner under første skærm kodesplittes, så den første hydrering på mobil bliver kortere (lavere TBT)
const BuildStory = dynamic(() => import("./components/home/BuildStory"));
const TilbydeSection = dynamic(() => import("./components/home/TilbydeSection"));
const HomeCases = dynamic(() => import("./components/home/HomeCases"));
const StickyCallButton = dynamic(() => import("./components/ui/StickyCallButton"));

export const metadata = {
  title: "Webbureau Horsens – hjemmesider, SEO & AI | WebHjerte",
  description:
    "Webbureau i Horsens: hjemmesider i WordPress, Shopify eller kode fra 2.500 kr – plus AI-chatbot og SEO. Design på 48 timer, 0 kr hvis det ikke passer.",
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
  "@type": "WebPage",
  "@id": "https://www.webhjerte.dk/#webpage",
  url: "https://www.webhjerte.dk/",
  name: "Webbureau Horsens – hjemmesider fra 2.500 kr | WebHjerte",
  inLanguage: "da-DK",
  isPartOf: { "@id": "https://www.webhjerte.dk/#website" },
  about: { "@id": "https://www.webhjerte.dk/#organization" },
  primaryImageOfPage: "https://www.webhjerte.dk/W.png",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["[data-speakable]"] },
};

const localLinks = [
  {
    href: "/seo-horsens",
    title: "SEO Horsens",
    visual: <VisualDashboard />,
    desc: "Bliv fundet af kunder, der søger efter dig lokalt på Google.",
  },
  {
    href: "/webbureau-midtjylland",
    title: "Webbureau Midtjylland",
    visual: <VisualMapPin />,
    desc: "Hjemmesider til virksomheder i Aarhus, Silkeborg, Vejle og hele regionen.",
  },
  {
    href: "/wordpress-hjemmeside",
    title: "WordPress-hjemmeside",
    visual: <VisualSite />,
    desc: "Professionel side, du selv kan rette i – fra 4.500 kr og klar til Google.",
  },
  {
    href: "/hjemmeside-pris",
    title: "Hjemmeside priser",
    visual: <VisualPrice />,
    desc: "Faste priser fra 2.500 kr inkl. moms og prisberegner – ingen skjulte gebyrer.",
  },
].filter((l) => !isHiddenHref(l.href));

export default function Home() {
  return (
    <>
      <span className="is-home hidden" aria-hidden />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />

      <HomeHero />
      <ScrollStatement />
      <BuildStory />
      <TilbydeSection />
      <AiFocus />
      <GuaranteesBlock />
      <HomeCases />
      <AboutBlock />

      {/* Lokalt webbureau – indhold til søgninger som "webbureau Horsens" */}
      <section className="scene bg-[#f7f6f6] border-t border-[#e8e6e6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <RevealLines
                lines={["Webbureau i Horsens, der", "leverer kunder – ikke", "bare et design"]}
                className="text-[#1c1e1e] font-semibold tracking-tight leading-[1.12] text-[clamp(24px,2.6vw,34px)] mb-6"
              />
              <FadeUp as="p" data-speakable delay={0.1} className="text-[15px] text-[#5f5f5f] leading-[1.85] mb-4">
                WebHjerte er et webbureau i Horsens, der bygger hjemmesider fra 2.500 kr (inkl. moms) med levering på 2–10 dage. Som webbureau i Horsens hjælper jeg lokale virksomheder med at blive fundet på Google og omsætte
                besøgende til henvendelser. Du får en hurtig, mobilvenlig hjemmeside med SEO bygget ind fra første dag –
                til en fast pris, så du ved præcis, hvad det koster.
              </FadeUp>
              <FadeUp as="p" delay={0.15} className="text-[15px] text-[#5f5f5f] leading-[1.85]">
                Jeg er baseret i Horsens og arbejder med virksomheder i hele Midtjylland og Danmark. Du har én
                kontaktperson fra første samtale til lancering – ingen mellemled, ingen overraskelser.
              </FadeUp>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
              {localLinks.map((item, i) => (
                <FadeUp key={item.href} delay={i * 0.07} className="h-full">
                  <Link
                    href={item.href}
                    className="group h-full flex flex-col rounded-3xl bg-white border border-[#e8e6e6] hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="m-2">
                      <Panel h="h-[130px]">{item.visual}</Panel>
                    </div>
                    <div className="px-4 pt-2 pb-5 flex flex-col gap-1.5">
                      <p className="text-[15px] font-semibold text-[#1c1e1e] group-hover:text-[#00a8e8] transition-colors">{item.title}</p>
                      <p className="text-[12.5px] text-[#6a6a6a] leading-relaxed">{item.desc}</p>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick lead form */}
      <section className="scene relative overflow-hidden bg-[#1c1e1e]">
        <div className="relative max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <RevealLines
              lines={["Få et gratis", "tilbud"]}
              className="text-white font-semibold tracking-tight leading-[1.08] text-[clamp(24px,2.6vw,34px)] mb-5"
            />
            <FadeUp as="p" delay={0.1} className="text-[15px] text-[#b4bdbd] leading-[1.8] max-w-md mb-10">
              Har du allerede en hjemmeside, der trænger til et løft, eller starter du helt forfra? Skriv det i
              formularen — jeg svarer inden for 24 timer.
            </FadeUp>

            <FadeUp delay={0.15} className="grid grid-cols-2 gap-3">
              {[
                { label: "Svartid", value: "Inden for 24 timer" },
                { label: "Første samtale", value: "Gratis & uforpligtende" },
                { label: "Arbejdsområde", value: "Hele Danmark" },
                { label: "Baseret i", value: "Horsens, Midtjylland" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-2xl bg-[#242828] border border-white/10 p-4 sm:p-5">
                <p className="text-[13px] text-[#8a9696] mb-1.5">{label}</p>
                <p className="text-[15px] font-semibold text-white leading-snug">{value}</p>
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

      <StickyCallButton />
    </>
  );
}
