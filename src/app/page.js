import { Check, X } from "lucide-react";
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
        <section className="bg-[#F7F6F6]">
          <h3 className="title text-center ">Vores fordele</h3>
          <div className="flex gap-6 flex-wrap justify-center">
            <div className="flex justify-center items-center flex-col max-w-[400px]">
              <p className="text-[40px] font-bold text-[#000] ">1</p>
              <p className="text-[20px] text-[#000]">Rådgivning og analyse</p>
              <p className="text text-[5px]">
                Vi håndterer hver enkelt del af projektet, der bliver betroet
                vores team, og giver dig detaljerede rapporter om, hvad vi
                arbejder på – sammen med opdateringer fra projektlederen.
              </p>
            </div>
            <div className="flex justify-center items-center flex-col max-w-[400px]">
              <p className="text-[40px] font-bold text-[#000] ">2</p>
              <p className="text-[20px] text-[#000]">Skræddersyede løsninger</p>
              <p className="text text-[5px]">
                Vi tilbyder tilpassede webdesignløsninger, der er skræddersyet
                til din virksomheds behov og mål, og sikrer, at dit websted
                skiller sig ud med både funktionalitet og æstetik.
              </p>
            </div>
            <div className="flex justify-center items-center flex-col max-w-[400px]">
              <p className="text-[40px] font-bold text-[#000] ">3</p>
              <p className="text-[20px] text-[#000]">
                Effektivitet og hastighed
              </p>
              <p className="text text-[5px]">
                Vi arbejder hurtigt og effektivt, uden at gå på kompromis med
                kvaliteten, og leverer løsninger til tiden, så du kan få din
                virksomhed op at køre online hurtigt og problemfrit.
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
