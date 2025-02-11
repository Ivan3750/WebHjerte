import Image from "next/image";
import HeroImg from "../../public/Hero.png";
import Button from "@/app/components/Button";
import Questions from "@/app/components/Questions";
import FeedBackPeople from "@/app/components/FeedBackPeople";
export default function Home() {
  return (
    <div>
      <div className="flex justify-between 
      py-[30px] px-[40px] 
      sm:py-[40px] sm:px-[50px] 
      md:py-[60px] md:px-[70px] 
      lg:py-[75px] lg:px-[85px] 
      xl:py-[70px] xl:px-[90px] 
      
      gap-[25px]">
        <div className="flex gap-4 flex-col items-start">
          <h1 className="maintitle">
            Din hjemmeside — vores hjerte!
          </h1>
          <h2 className="subtitle">
            Vi skaber moderne og brugervenlige hjemmesider til danske
            småvirksomheder.
          </h2>
          <Button />
        </div>
        <div className="hidden md:block">
          <div>
            <Image
              src={HeroImg}
              className="max-[500px]:w-[250px] md:w-[500px] rounded-3xl"
              width={500}
              height={500}
              alt="webhjerte"
            ></Image>
          </div>
          <div className="flex gap-5 my-5 justify-between">
            <div className="bg-[#101213] rounded-2xl w-1/2">
              <p className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] text-center font-bold">26+</p>
              <p className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]   text-center">digitalt produkt</p>
            </div>
            <div className="bg-[#101213] rounded-2xl w-1/2">
              <p className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] text-center font-bold">4.7</p>
              <p className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-center">Feedback</p>
            </div>
          </div>
        </div>
      </div>
      <section className="flex bg-[#F7F6F6] justify-between gap-[40px]">
        <div className="">
          <h3 className="title">Hvem er vi?</h3>
          <div className="text flex flex-col gap-4">
            <span>
            Historien om WebHjerte Studio begyndte med en simpel idé: at gøre
            moderne webdesign tilgængeligt for alle danske virksomheder, uanset
            størrelse. Vores studie blev grundlagt i 2024 i Horsens som et svar
            på de voksende behov hos små og mellemstore virksomheder, der
            krævede hurtige, effektive og GDPR-kompatible løsninger af høj
            kvalitet, men som ofte fandt markedets tilbud enten alt for
            komplekse, dyre eller uigennemskuelige. Vi så et behov for en
            tilgang, der kunne gøre webdesign både tilgængeligt og økonomisk
            forsvarligt, samtidig med at vi ikke gik på kompromis med
            funktionalitet eller design.
            </span>  
            
            <span>
            Hos WebHjerte Studio er vi passionerede
            omkring at skabe løsninger, der hjælper virksomheder med at nå deres
            mål på nettet – fra små startups til etablerede virksomheder, der
            ønsker at optimere deres online tilstedeværelse. Vores vision er at
            tilbyde skræddersyede webdesigns, der kombinerer moderne æstetik med
            brugervenlighed og effektivitet, samtidig med at vi holder os til de
            strengeste GDPR-standarder. Vi ønsker at gøre det muligt for danske
            virksomheder at blomstre i den digitale verden uden at blive
            overvældet af komplekse eller dyre tekniske løsninger. Vores tilgang
            er enkel, men kraftfuld: Vi gør det muligt for din virksomhed at få
            et professionelt og moderne webdesign, der er både funktionelt,
            æstetisk og økonomisk overkommeligt.
            </span>
          </div>
        </div>
        <div>
          <div className=""></div>
        </div>
      </section>
      <section className="bg-[#F7F6F6]">
        <h3 className="title text-center ">Vores fordele</h3>
        <div className="flex gap-10 p-10 flex-wrap">
          <div className="flex justify-center items-center flex-col max-w-[400px]">
            <p className="text-[40px] font-bold text-[#000] ">1</p>
            <p className="text-[25px] text-[#000]">Rådgivning og analyse</p>
            <p className="text text-[5px]">
            Vi håndterer hver enkelt del af projektet, der bliver betroet vores team, og giver dig detaljerede rapporter om, hvad vi arbejder på – sammen med opdateringer fra projektlederen.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col max-w-[400px]">
            <p className="text-[40px] font-bold text-[#000] ">2</p>
            <p className="text-[25px] text-[#000]">Skræddersyede løsninger</p>
            <p className="text text-[5px]">
            Vi tilbyder tilpassede webdesignløsninger, der er skræddersyet til din virksomheds behov og mål, og sikrer, at dit websted skiller sig ud med både funktionalitet og æstetik.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col max-w-[400px]">
            <p className="text-[40px] font-bold text-[#000] ">3</p>
            <p className="text-[25px] text-[#000]">Effektivitet og hastighed</p>
            <p className="text text-[5px]">
            Vi arbejder hurtigt og effektivt, uden at gå på kompromis med kvaliteten, og leverer løsninger til tiden, så du kan få din virksomhed op at køre online hurtigt og problemfrit.


            </p>
          </div>
        </div>
      </section>
      <FeedBackPeople />
      <Questions />
    </div>
  );
}
