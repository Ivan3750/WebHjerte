import { Brain, Check, Puzzle, Rocket, X } from "lucide-react";
import Image from "next/image";
import HeroImg from "../../public/Hero.png";
import Button from "@/app/components/Button";
import Questions from "@/app/components/Questions";
import FeedBackPeople from "@/app/components/FeedBackPeople";
import Wfront from "../../public/WFront.jpg";
import Link from "next/link";
import Team from "../../public/team.png";
import DiscountPage from "./components/DiscountPage";

export default function Home() {
  return (
    <>
      <div className="">
        <div
          className=" justify-between bg-sq- 
      py-[30px] px-[20px] 
      sm:py-[40px] sm:px-[50px] 
      md:py-[60px] md:px-[70px] 
      lg:py-[75px] lg:px-[85px] 
      xl:py-[70px] xl:px-[90px] 
      
      gap-[25px] min-h-[calc(100dvh - 100px)]"
        >
          <div className=" flex gap-4 flex-col items-center">
            <h1 className="maintitle !text-center">
              Professionel hjemmeside på 3 dage
            </h1>
            <h2 className="subtitle !text-center">
              Tilpasset små virksomheder – uden forudbetaling!
            </h2>
            <Link href="/kontakt">
              <Button name="Kontakt" />
            </Link>
          </div>
          <div className="block ">
            <div>
              <Image
                src={Wfront}
                className="max-[1000px]:w-[750px] md:w-[800px] rounded-3xl my-[20px] m-auto shadow-xl"
                width={1000}
                height={1000}
                alt="webhjerte"
              ></Image>
            </div>
          </div>
        </div>
        <section className="flex bg-[#F7F6F6] justify-between gap-[40px]">
          <div className="">
            <h3 className="title">Hvem er vi?</h3>
            <div className="flex flex-col md:flex-row  items-center justify-between gap-8">
              {/* Text Section */}
              <div className="text w-full space-y-4">
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

              {/* Image Section */}
              <div className="w-full ">
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={Team}
                    alt="team"
                    objectFit="cover"
                    className="rounded-2xl shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=""></div>
          </div>
        </section>
        <section className="bg-[#F7F6F6] py-12">
          <h3 className="title text-center mb-10">Hvorfor vælge os?</h3>
          <div className="flex gap-10 flex-wrap justify-center">
            <div className="flex justify-center items-center flex-col max-w-[300px] text-center">
              <div className="bg-white p-4 rounded-full shadow-lg mb-4">
                <Brain className="text-pink-500" size={40} />
              </div>
              <p className="text-[20px] font-semibold text-[#000] mb-2">
                Strategisk rådgivning
              </p>
              <p className="text text-[16px] text-[#444]">
                Vi analyserer dine forretningsmål og udvikler en skræddersyet
                digital strategi – med fuld gennemsigtighed og løbende
                kommunikation.
              </p>
            </div>

            <div className="flex justify-center items-center flex-col max-w-[300px] text-center">
              <div className="bg-white p-4 rounded-full shadow-lg mb-4">
                <Puzzle className="text-purple-600" size={40} />
              </div>
              <p className="text-[20px] font-semibold text-[#000] mb-2">
                Skræddersyede løsninger
              </p>
              <p className="text text-[16px] text-[#444]">
                Hvert design og hver funktion er nøje udformet for at matche
                netop din virksomhed – både visuelt og teknisk.
              </p>
            </div>

            <div className="flex justify-center items-center flex-col max-w-[300px] text-center">
              <div className="bg-white p-4 rounded-full shadow-lg mb-4">
                <Rocket className="text-yellow-500" size={40} />
              </div>
              <p className="text-[20px] font-semibold text-[#000] mb-2">
                Hurtig og pålidelig levering
              </p>
              <p className="text text-[16px] text-[#444]">
                Vi prioriterer effektivitet og kvalitet – med klare deadlines og
                hurtige resultater uden stress.
              </p>
            </div>
          </div>
        </section>

        <DiscountPage />
        <FeedBackPeople />
        <Questions />
      </div>
    </>
  );
}
