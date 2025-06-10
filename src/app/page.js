import { Brain, Puzzle, Rocket } from "lucide-react";
import Image from "next/image";
import HeroImg from "../../public/Hero.png";
import Button from "@/app/components/Button";
import Questions from "@/app/components/Questions";
import FeedBackPeople from "@/app/components/FeedBackPeople";
import Wfront from "../../public/WFront.jpg";
import Link from "next/link";
import Team from "../../public/team.png";
import DiscountPage from "./components/DiscountPage";
import AnimatedInView from "./components/AnimatedInView";
import Logo from "../../public/W.png";
import Head from "next/head";
import TechStackSection from "@/app/components/TechStackSection";
import SkabelonerSection from "@/app/components/SkabelonerSection";
import EmailForm from "./components/EmailForm";

export const metadata = {
  title: "🌐 Webbureau i Horsens – Professionel Hjemmeside fra 1.499 kr | WebHjerte",
  description:
    "Få en skræddersyet og mobilvenlig hjemmeside fra et lokalt webbureau i Horsens. SEO-optimeret webdesign – fra kun 1.499 kr.",
  keywords:
    "webbureau horsens, webbureau i jylland, webdesign firma, hjemmeside til små virksomheder, SEO Danmark, SEO tjek af hjemmeside, moderne webdesign, responsivt design, bestil hjemmeside, gratis hjemmeside, rabat på hjemmeside",
  openGraph: {
    title: "Webbureau i Horsens & Jylland – WebHjerte",
    description:
      "Få en moderne og professionel hjemmeside med WebHjerte – dit webbureau i Horsens og Jylland, specialiseret i SEO og webdesign til små virksomheder.",
    url: "https://webhjerte.dk",
    image: Logo,
    type: "website",
  },
  robots: "index, follow",
  twitter: {
    card: "summary_large_image",
    title: "Webbureau i Horsens & Jylland – WebHjerte",
    description:
      "Moderne hjemmeside med SEO fra et lokalt webbureau i Horsens – få mere synlighed og flere kunder online i dag.",
    image: Logo,
  },
};

export default function Home() {
  return (
    <>
     

      <div className="">
        <div
          className="justify-between bg-sq- 
            py-[30px] px-[20px] 
            sm:py-[40px] sm:px-[50px] 
            md:py-[60px] md:px-[70px] 
            lg:py-[75px] lg:px-[85px] 
            xl:py-[70px] xl:px-[90px] 
            gap-[25px] min-h-[calc(100dvh - 100px)]"
        >
          <div className="flex gap-4 flex-col items-center">
            <AnimatedInView as="h1" className="maintitle !text-center">
          Webbureau i Horsens – Professionelle Hjemmesider til Små Virksomheder
            </AnimatedInView>
            <AnimatedInView as="h2" className="subtitle !text-center">
          Få moderne og SEO-optimeret webdesign fra WebHjerte i Jylland
            </AnimatedInView>

            <Link href="/kontakt">
              <Button name="Kontakt" />
            </Link>
          </div>
          <div className="block">
            <Image
              src={Wfront}
              className="max-[1000px]:w-[750px] md:w-[800px] rounded-3xl my-[20px] m-auto shadow-xl"
              width={1000}
              height={1000}
              alt="webhjerte"
            />
          </div> 
        </div>
        <section className="flex bg-[#F7F6F6] justify-between md:gap-[40px]">
          <div className="">
            <h3 className="title">Hvem er vi?</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text w-full space-y-2">
                <p>
                  <strong>WebHjerte Studio</strong> blev skabt for at gøre
                  moderne, brugervenligt webdesign tilgængeligt for alle danske
                  virksomheder – uanset størrelse eller budget.
                </p>
                <p>
                  Vi startede i 2024 i Horsens med fokus på små og mellemstore
                  virksomheder, som ofte mangler tilpassede og prisvenlige
                  webløsninger.
                </p>
                <p>
                  Vi leverer æstetiske, funktionelle og GDPR-venlige hjemmesider
                  med høj ydeevne og nem vedligeholdelse.
                </p>
                <p>
                  Hos WebHjerte får du ikke kun et professionelt websted, men en
                  digital partner, der hjælper din virksomhed med at vokse
                  online.
                </p>
              </div>
             {/*  <div className="w-full">
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={Team}
                    alt="team"
                    objectFit="cover"
                    className="rounded-2xl shadow-md"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <section className="bg-[#F7F6F6] py-24 px-4">
          <h3 className="text-3xl sm:text-4xl font-bold text-center text-[#111] mb-12 tracking-tight">
            Hvorfor vælge os?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* CARD */}
            <div className="group bg-white rounded-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.03]">
              <div className="bg-pink-100 p-4 rounded-full  mb-5 group-hover:rotate-6 transition-transform duration-300">
                <Brain className="text-pink-500" size={40} />
              </div>
              <p className="text-xl font-semibold text-[#111] mb-3">
                Strategisk rådgivning
              </p>
              <p className="text-base text-[#555]">
                Vi analyserer dine forretningsmål og udvikler en skræddersyet
                digital strategi – med fuld gennemsigtighed og løbende
                kommunikation.
              </p>
            </div>

            {/* CARD */}
            <div className="group bg-white rounded-xl  p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.03]">
              <div className="bg-purple-100 p-4 rounded-full  mb-5 group-hover:rotate-6 transition-transform duration-300">
                <Puzzle className="text-purple-600" size={40} />
              </div>
              <p className="text-xl font-semibold text-[#111] mb-3">
                Skræddersyede løsninger
              </p>
              <p className="text-base text-[#555]">
                Hvert design og hver funktion er nøje udformet for at matche
                netop din virksomhed – både visuelt og teknisk.
              </p>
            </div>

            {/* CARD */}
            <div className="group bg-white rounded-xl  p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.03]">
              <div className="bg-yellow-100 p-4 rounded-full  mb-5 group-hover:rotate-6 transition-transform duration-300">
                <Rocket className="text-yellow-500" size={40} />
              </div>
              <p className="text-xl font-semibold text-[#111] mb-3">
                Hurtig og pålidelig levering
              </p>
              <p className="text-base text-[#555]">
                Vi prioriterer effektivitet og kvalitet – med klare deadlines og
                hurtige resultater uden stress.
              </p>
            </div>
          </div>
        </section>
        <TechStackSection />
        <DiscountPage />
        <FeedBackPeople />
        {/*         <SkabelonerSection/>
         */}{" "}
        <Questions />
      </div>
    </>
  );
}
