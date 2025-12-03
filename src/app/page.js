import { Brain, Puzzle, Rocket } from "lucide-react";
import Image from "next/image";
import Button from "@/app/components/Button";
import Questions from "@/app/components/Questions";
import FeedBackPeople from "@/app/components/FeedBackPeople";
import Wfront from "../../public/WFront.jpg";
import Link from "next/link";
import DiscountPage from "./components/DiscountPage";
import AnimatedInView from "./components/AnimatedInView";
import Logo from "../../public/W.png";
import TechStackSection from "@/app/components/TechStackSection";

export const metadata = {
  title: "WebHjerte – Professionelle og innovative hjemmesider | Horsens",
  description: "WebHjerte skaber moderne, SEO-optimerede hjemmesider for små virksomheder – med fokus på kvalitet og resultater.",
  keywords: "webhjerte, webbureau, webdesign, horsens, små virksomheder, SEO, hjemmeside, digital innovation",
  openGraph: {
    title: "WebHjerte – Innovative hjemmesider fra Horsens",
    description: "WebHjerte leverer digitale løsninger, der kombinerer kreativitet, innovation og effektivitet – et professionelt brand dedikeret til små virksomheder.",
    url: "https://webhjerte.dk",
    image: Logo,
    type: "website",
  },
  robots: "index, follow",
  twitter: {
    card: "summary_large_image",
    title: "WebHjerte – Innovative hjemmesider fra Horsens",
    description: "Få en moderne, personlig og SEO-optimeret hjemmeside med WebHjerte – et brand med fokus på resultater og kvalitet.",
    image: Logo,
  },
};

export default function Home() {
  return (
    <div className="">
       <div className="justify-between bg-sq- py-[30px] px-[20px] sm:py-[40px] sm:px-[50px] md:py-[60px] md:px-[70px] lg:py-[75px] lg:px-[85px] xl:py-[70px] xl:px-[90px] gap-[25px] min-h-[calc(100dvh-100px)]">
        <div className="flex gap-4 flex-col items-center">
          <AnimatedInView as="h1" className="maintitle !text-center">
            WebHjerte – Innovative og professionelle hjemmesider
          </AnimatedInView>
          <AnimatedInView as="h2" className="subtitle !text-center">
            WebHjerte kombinerer kreativitet, teknisk ekspertise og passion for at hjælpe små virksomheder med at vokse online.
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
            alt="WebHjerte"
          />
        </div>
      </div>

       <section className="flex bg-[#F7F6F6] justify-between md:gap-[40px] py-24 px-4">
        <div className="w-full max-w-5xl mx-auto">
          <h3 className="title text-center mb-6">Om WebHjerte</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text w-full space-y-4">
              <p>
                <strong>WebHjerte Studio</strong> er et innovativt webbrand fra Horsens, grundlagt for at skabe moderne, brugervenlige og SEO-optimerede hjemmesider til små virksomheder.
              </p>
              <p>
                WebHjerte sikrer, at hvert projekt leveres med høj kvalitet og fokus på resultater.
              </p>
              <p>
                Alt WebHjerte skaber, gøres med passion og præcision – for kunderne og de projekter, der inspirerer os hver dag 
              </p>
            </div>
          </div>
        </div>
      </section>

       <section className="bg-[#F7F6F6] py-24 px-4">
        <h3 className="text-3xl sm:text-4xl font-bold text-center text-[#111] mb-12 tracking-tight">
          Hvorfor vælge WebHjerte?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="group bg-transparent rounded-2xl border-[1px] border-[#b8b9b9] p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.03]">
            <div className="bg-pink-100 p-4 rounded-full mb-5 group-hover:rotate-6 transition-transform duration-300">
              <Brain className="text-pink-500" size={40} />
            </div>
            <p className="blogtitle !text-[20px]">Strategisk rådgivning</p>
            <p className="text-base text-[#555]">
              WebHjerte analyserer dine forretningsmål og skaber en personlig digital strategi med fuld gennemsigtighed.
            </p>
          </div>

          <div className="group bg-transparent rounded-2xl border-[1px] border-[#b8b9b9] p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.03]">
            <div className="bg-purple-100 p-4 rounded-full mb-5 group-hover:rotate-6 transition-transform duration-300">
              <Puzzle className="text-purple-600" size={40} />
            </div>
            <p className="blogtitle !text-[20px]">Skræddersyede løsninger</p>
            <p className="text-base text-[#555]">
              Hvert design og hver funktion er nøje udformet for at matche din virksomheds behov – visuelt og teknisk.
            </p>
          </div>

          <div className="group bg-transparent rounded-2xl border-[1px] border-[#b8b9b9] p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.03]">
            <div className="bg-yellow-100 p-4 rounded-full mb-5 group-hover:rotate-6 transition-transform duration-300">
              <Rocket className="text-yellow-500" size={40} />
            </div>
            <p className="blogtitle !text-[20px]">Hurtig og pålidelig levering</p>
            <p className="text-base text-[#555]">
              WebHjerte prioriterer effektivitet og kvalitet – med klare deadlines og hurtige resultater uden stress.
            </p>
          </div>
        </div>
      </section>

       <TechStackSection />
      <DiscountPage />
      <FeedBackPeople />
      <Questions />
    </div>
  );
}
