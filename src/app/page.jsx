import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Palette,
  Monitor,
  Megaphone,
  BarChart3,
  PenTool,
} from "lucide-react";

import Button from "./components/Button";
import AnimatedInView from "./components/AnimatedInView";
import TilbydeSection from "./components/home/TilbydeSection";
import Wfront from "../../public/WFront.jpg";
import InfoBlock from "./components/home/InfoBlock";
import CasesCarousel from "./components/home/CasesCarousel";
import ProcessBlock from "./components/home/ProcessBlock";
import FeedBackPeople from "./components/FeedBackPeople";
import Questions from "./components/Questions";
export const metadata = {
  title:
    "Webbureau i Horsens – Professionelt webdesign og SEO-optimerede hjemmesider | WebHjerte",
  description:
    "WebHjerte er et lokalt webbureau i Horsens og Midtjylland. Vi skaber moderne, hurtige og SEO-optimerede hjemmesider for små og mellemstore virksomheder, der ønsker flere kunder online.",
  keywords:
    "webbureau horsens, webdesign horsens, SEO horsens, webbureau midtjylland, responsive hjemmesider, webhjerte",
  openGraph: {
    title:
      "Webbureau i Horsens – Professionelt webdesign og SEO | WebHjerte",
    description:
      "Få en moderne, hurtig og SEO-optimeret hjemmeside til din virksomhed. WebHjerte hjælper små og mellemstore virksomheder i Horsens og Midtjylland med digital vækst.",
    url: "https://www.webhjerte.dk",
    siteName: "WebHjerte",
    
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Webbureau i Horsens – Professionelt webdesign og SEO | WebHjerte",
    description:
      "Få en moderne og SEO-optimeret hjemmeside til din virksomhed. Vi hjælper små og mellemstore virksomheder i Horsens og Midtjylland med online succes.",
     creator: "@webhjerte",
  },
  alternates: {
    canonical: "https://www.webhjerte.dk",
  },
};

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100dvh-100px)] flex items-center px-5 sm:px-10 lg:px-20 overflow-hidden">
        {/* <video
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/web-design-background.mp4" type="video/mp4" />
        </video> */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <AnimatedInView as="h1" className="maintitle !text-[40px] text-white">
                Vi skaffer flere kunder til små virksomheder
              </AnimatedInView>

              <AnimatedInView
                as="p"
                className="subtitle !text-[16px] max-w-xl text-gray-200"
              >
                Vi designer hurtige, enkle og mobilvenlige hjemmesider, der
                hjælper små virksomheder med at få flere kunder online.
              </AnimatedInView>

              <div className="flex items-center gap-4">
                <Link href="/services">
                  <Button name="Se priser" />
                </Link>

                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <MapPin size={16} />
                  Horsens & Midtjylland
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <Image
                src={Wfront}
                alt="Webdesign preview fra WebHjerte"
                width={900}
                height={600}
                className="rounded-3xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <InfoBlock />
      <TilbydeSection />
      <ProcessBlock />
      <CasesCarousel />
      <FeedBackPeople></FeedBackPeople>
      <Questions />
    </>
  );
}
