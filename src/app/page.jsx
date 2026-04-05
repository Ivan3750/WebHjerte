import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";
import AnimatedInView from "./components/AnimatedInView";
import TilbydeSection from "./components/home/TilbydeSection";
import InfoBlock from "./components/home/InfoBlock";
import CasesCarousel from "./components/home/CasesCarousel";
import HorsensSection from "./components/home/HorsensSection";
import ProcessBlock from "./components/home/ProcessBlock";
import FeedBackPeople from "./components/FeedBackPeople";
import Questions from "./components/Questions";
import SocialProof from "./components/home/SocialProof";
import Wfront from "../../public/WFront.jpg";
import CasesSection from "./components/home/CasesSection";
import AboutBlock from "./components/home/AboutBlock";
import CTABlock from "./components/home/CTABlock";
 

export const metadata = {
  title: "Webbureau Horsens – Flere Kunder på 90 Dage | WebHjerte",
  description: "Jeg bygger enkle, hurtige hjemmesider til lokale virksomheder i Horsens og Midtjylland. Direkte kontakt – ingen mellemled. Gratis første samtale.",
  keywords: "webbureau horsens, webdesign horsens, hjemmeside horsens, webudvikler horsens, webbureau midtjylland, billig hjemmeside horsens",
  openGraph: {
    title: "Webbureau i Horsens – Hjemmesider der skaffer flere kunder | WebHjerte",
    description: "Lokal webudvikler i Horsens. Enkle, hurtige hjemmesider til små virksomheder i Midtjylland. Levering på 14 dage. Start med en gratis samtale.",
    url: "https://www.webhjerte.dk",
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webbureau i Horsens – Hjemmesider der virker | WebHjerte",
    description: "Lokal webudvikler i Horsens. Enkle hjemmesider til små virksomheder i Midtjylland. Direkte kontakt, levering på 14 dage.",
  },
  alternates: {
    canonical: "https://www.webhjerte.dk",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "WebHjerte",
      description: "Lokal webudvikler i Horsens – hjemmesider til små virksomheder i Midtjylland",
      url: "https://www.webhjerte.dk",
       areaServed: ["Horsens", "Midtjylland", "Danmark"],
      serviceType: "Webdesign og webudvikling",
      priceRange: "$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      founder: {
        "@type": "Person",
        name: "Ivan Kohan",
      },
      sameAs: ["https://www.linkedin.com/company/webhjerte"],
    }),
  },
};

const stats = [
  { num: "48t", label: "Første udkast" },
  { num: "10+", label: "Projekter" },
  { num: "100%", label: "Lokal support" },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100dvh-68px)] flex items-center px-5 sm:px-10 lg:px-20 overflow-hidden bg-[#111313]">
 
        <div className="relative z-10 w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center py-20">
          <div className="flex flex-col">
            <AnimatedInView
              as="div"
              className="inline-flex items-center gap-2 border border-[#2a3a3a] rounded-full px-3 py-1 text-xs text-[#9a9a9a] w-fit mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a8e8]" />
              Horsens & Midtjylland
            </AnimatedInView>

            <AnimatedInView as="h1" className="maintitle text-md text-white !leading-tight mb-4">
              Hjemmesider der skaffer{" "}
              <span className="text-[#00a8e8]">flere kunder</span>
            </AnimatedInView>

            <AnimatedInView as="p" className="subtitle text-[#8a8a8a] !text-[15px] max-w-md mb-8">
              Enkle, hurtige hjemmesider til lokale virksomheder i Horsens og
              Midtjylland. Direkte kontakt - ingen mellemled.
            </AnimatedInView>

            <AnimatedInView as="div" className="flex items-center gap-3 flex-wrap">
              <Link href="/services">
                <Button name="Se priser" />
              </Link>
            
            </AnimatedInView>

            <div className="flex gap-8 mt-10 pt-8 border-t border-[#1e2020]">
              {stats.map(({ num, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-xl font-medium text-white">{num}</span>
                  <span className="text-xs text-[#5a5a5a]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-[#1c1e1e] border border-[#2a2d2d] rounded-2xl p-5 flex flex-col gap-4">
              <div className="flex gap-1.5 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>

              <div className="bg-[#242828] rounded-xl p-4">
                <p className="text-[10px] text-[#5a5a5a] mb-1">Din hjemmeside</p>
                <p className="text-sm font-medium text-[#e0e0e0]">
                  WebHjerte - Webbureau i Horsens
                </p>
                <p className="text-xs text-[#6a6a6a] mt-1">
                  Moderne · Mobil · SEO-optimeret
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#242828] rounded-xl p-3">
                  <p className="text-lg font-medium text-white">
                    <span className="text-[#00a8e8]">↑</span> 3.2x
                  </p>
                  <p className="text-[10px] text-[#5a5a5a] mt-1">Flere besøgende</p>
                </div>
                <div className="bg-[#242828] rounded-xl p-3">
                  <p className="text-lg font-medium text-white">
                    4.9<span className="text-[#00a8e8]">★</span>
                  </p>
                  <p className="text-[10px] text-[#5a5a5a] mt-1">Kundetilfredshed</p>
                </div>
              </div>

              <hr className="border-[#1e2020]" />

              <div className="flex flex-col gap-2.5">
                {[
                  { label: "SEO", val: 88 },
                  { label: "Hastighed", val: 95 },
                  { label: "Mobil", val: 100 },
                ].map(({ label, val }) => (
                  <div key={label} className="flex items-center gap-3 text-[11px] text-[#6a6a6a]">
                    <span className="w-16 shrink-0">{label}</span>
                    <div className="flex-1 h-1 bg-[#1a1d1d] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#00a8e8] rounded-full"
                        style={{ width: `${val}%` }}
                      />
                    </div>
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
<SocialProof />
<TilbydeSection />
<CasesSection />
<AboutBlock />
       <ProcessBlock />
       <CTABlock></CTABlock>
        <Questions />
    </>
  );
}