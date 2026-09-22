import Link from "next/link";
import Button from "./components/ui/Button";
import AnimatedInView from "./components/ui/AnimatedInView";
import TilbydeSection from "./components/home/TilbydeSection";
import AboutBlock from "./components/home/AboutBlock";
import ProcessBlock from "./components/home/ProcessBlock";
import CtaSearchBlock from "./components/ui/CTA";
 import Questions from "./components/Questions";
import SocialProof from "./components/home/SocialProof";
import CasesCarousel from "./components/home/CasesCarousel";
  

export const metadata  = {
  title: "Webbureau Horsens | Webdesign til lokale virksomheder | WebHjerte",
  description:
    "WebHjerte bygger hurtige og professionelle hjemmesider til virksomheder i Horsens og Midtjylland. Direkte kontakt, ingen mellemled og fokus på synlighed i Google.",

  keywords: [
    "webbureau Horsens",
    "webdesign Horsens",
    "hjemmeside Horsens",
    "webudvikler Horsens",
    "webbureau Midtjylland",
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
  "@type": "ProfessionalService",
  "@id": "https://www.webhjerte.dk/#organization",
  name: "WebHjerte",
  url: "https://www.webhjerte.dk/",
  description:
    "Webbureau i Horsens, der bygger professionelle hjemmesider til virksomheder i Horsens og Midtjylland.",
  areaServed: [
    {
      "@type": "City",
      name: "Horsens",
    },
    {
      "@type": "AdministrativeArea",
      name: "Midtjylland",
    },
    {
      "@type": "Country",
      name: "Danmark",
    },
  ],
  serviceType: [
    "Webdesign",
    "Webudvikling",
    "Hjemmesider",
    "SEO",
  ],
  founder: {
    "@type": "Person",
    name: "Ivan Kohan",
  },
  sameAs: [
    "https://www.linkedin.com/company/webhjerte",
  ],
};

 
const facts = [
  { num: "Fra 2.500 kr", label: "Fast pris" },
  { num: "Ca. 14 dage", label: "Leveringstid" },
  { num: "1 person", label: "Du taler direkte med mig" },
];
export default function Home() {
  return (
    <>  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
        <section className="relative  min-h-[calc(100dvh-68px)] flex items-center px-5 sm:px-10 lg:px-20 overflow-hidden bg-[#111313]">
          <div className="relative z-10 w-full  mx-auto grid md:grid-cols-2 gap-16 items-center py-20">
            <div className="flex flex-col">
              <AnimatedInView
                as="div"
                className="inline-flex items-center gap-2 border border-[#2a3a3a] rounded-full px-3 py-1 text-xs text-[#9a9a9a] w-fit mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00a8e8]" />
                Horsens & Midtjylland
              </AnimatedInView>

              <AnimatedInView
                as="h1"
                className="maintitle text-md text-white text-balance !leading-tight mb-4"
              >
                Hjemmeside til din virksomhed - til fast pris
              </AnimatedInView>

              <AnimatedInView
                as="p"
                className="subtitle text-[#8a8a8a] !text-[15px] max-w-md mb-8"
              >
                Jeg bygger enkle, hurtige hjemmesider til virksomheder i
                Danmark. Du taler direkte med mig, ikke med et mellemled.
              </AnimatedInView>

              <AnimatedInView
                as="div"
                className="flex items-center gap-3 flex-wrap"
              >
                <Link href="/services">
                  <Button name="Se priser" />
                </Link>
                <Link
                  href="/kontakt"
                  className="text-sm text-[#c8c8c8] underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00a8e8]"
                >
                  Skriv til mig
                </Link>
              </AnimatedInView>

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
  
  <div
    as="div"
    className="relative w-full max-w-md rounded-xl border border-[#2a3a3a] bg-[#161818]   overflow-hidden"
  >
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
        <span className="text-xs text-[#7a7a7a]">Live på 2 uger</span>
      </div>
    </div>
  </div>
</div>
          </div>
        </section>

      <TilbydeSection />
      <SocialProof></SocialProof>
      <CasesCarousel />
      <AboutBlock />
      <ProcessBlock />
      <CtaSearchBlock></CtaSearchBlock>
      <Questions />
 
    </>
  );
}
