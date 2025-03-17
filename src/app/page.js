"use client"
import Image from "next/image";
import HeroImg from "../../public/Hero.png";
import Button from "@/app/components/Button";
import Questions from "@/app/components/Questions";
import FeedBackPeople from "@/app/components/FeedBackPeople";





export default function Home() {


  return (
    <>
    <div className="">
      <div className=" justify-between bg-sq- 
      py-[30px] px-[40px] 
      sm:py-[40px] sm:px-[50px] 
      md:py-[60px] md:px-[70px] 
      lg:py-[75px] lg:px-[85px] 
      xl:py-[70px] xl:px-[90px] 
      
      gap-[25px] "> {/* absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)] */}
        <div className=" flex gap-4 flex-col items-center">
          <h1 className="maintitle !text-center">
            Din hjemmeside - vores hjerte!
          </h1>
          <h2 className="subtitle !text-center">
            Vi skaber moderne og brugervenlige hjemmesider til danske
            småvirksomheder.
          </h2>
          <Button name="Kontakt" />
        </div>
        <div className="hidden md:block ">
          <div>
            <Image
              src={HeroImg}
              className="max-[1000px]:w-[750px] md:w-[800px] rounded-3xl my-[20px] m-auto"
              width={1000}
              height={1000}
              alt="webhjerte"
            ></Image>
          </div>
         {/*  <div className="flex gap-5 my-5 justify-between">
            <div className="bg-[#101213] rounded-3xl w-1/2 p-4 box-border">
              <p className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[55px] xl:text-[60px] text-center font-bold">26+</p>
              <p className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]   text-center">Produkter</p>
            </div>
            <div className="bg-[#101213] rounded-3xl w-1/2 p-4 box-border">
              <p className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[55px] xl:text-[60px] text-center font-bold">4.7</p>
              <p className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-center">Feedback</p>
            </div>
          </div> */}
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
        <div className="flex gap-10 p-10 flex-wrap justify-center">
          <div className="flex justify-center items-center flex-col max-w-[400px]" >
            <p className="text-[40px] font-bold text-[#000] ">1</p>
            <p className="text-[25px] text-[#000]">Rådgivning og analyse</p>
            <p className="text text-[5px]">
            Vi håndterer hver enkelt del af projektet, der bliver betroet vores team, og giver dig detaljerede rapporter om, hvad vi arbejder på – sammen med opdateringer fra projektlederen.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col max-w-[400px]" >
            <p className="text-[40px] font-bold text-[#000] ">2</p>
            <p className="text-[25px] text-[#000]">Skræddersyede løsninger</p>
            <p className="text text-[5px]">
            Vi tilbyder tilpassede webdesignløsninger, der er skræddersyet til din virksomheds behov og mål, og sikrer, at dit websted skiller sig ud med både funktionalitet og æstetik.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col max-w-[400px]" >
            <p className="text-[40px] font-bold text-[#000] ">3</p>
            <p className="text-[25px] text-[#000]">Effektivitet og hastighed</p>
            <p className="text text-[5px]">
            Vi arbejder hurtigt og effektivt, uden at gå på kompromis med kvaliteten, og leverer løsninger til tiden, så du kan få din virksomhed op at køre online hurtigt og problemfrit.


            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-[#F7F6F6]">
    <div className="rounded-[50px] shadow-lg bg-[#F7F6F6] p-6 w-full max-[1200px] m-auto block">
        
        <table className=" min-w-full border-collapse rounded-3xl">
            <thead className="text-left ">
                <tr className="rounded-3xl bg-transperant">
                    <th className="py-3 px-4 text-gray-500 font-medium"> </th>
                    <th className="py-3 px-4 text-gray-900 font-bold">WebHjerte</th>
                    <th className="py-3 px-4 text-gray-900 font-bold">Fuldtids Udvikler</th>
                    <th className="py-3 px-4 text-gray-900 font-bold">Andre Bureauer</th>
                </tr>
            </thead>
            <tbody className="bg-white">
                <tr className="border-t">
                    <td className="py-3 px-4 font-medium text-gray-500">Pris</td>
                    <td className="py-3 font-light px-4 text-green-500"><i className="fas fa-check"></i> $</td>
                    <td className="py-3 font-light px-4 text-red-500"><i className="fas fa-times"></i> $$$$ (Høje Omkostninger)</td>
                    <td className="py-3 font-light px-4 text-yellow-500"><i className="fas fa-check"></i> $$</td>
                </tr>
                <tr className="border-t">
                    <td className="py-3 px-4 font-medium text-gray-500">Erfaring med Udvikling</td>
                    <td className="py-3 font-light px-4 text-green-500"><i className="fas fa-check"></i> Erfaring i både Frontend og Backend</td>
                    <td className="py-3 font-light px-4 text-yellow-500"><i className="fas fa-times"></i> Begrænset ekspertise afhængig af udvikler</td>
                    <td className="py-3 font-light px-4 text-yellow-500"><i className="fas fa-times"></i> Varierer mellem udviklere</td>
                </tr>
                <tr className="border-t">
                    <td className="py-3 px-4 font-medium text-gray-500">Udviklingstid</td>
                    <td className="py-3 font-light px-4 text-green-500"><i className="fas fa-check"></i> Hurtig levering, fleksibel tidsplan</td>
                    <td className="py-3 font-light px-4 text-red-500"><i className="fas fa-times"></i> Kan tage uger afhængigt af projektets kompleksitet</td>
                    <td className="py-3 font-light px-4 text-red-500"><i className="fas fa-times"></i> Langsomt på grund af flere projekter samtidigt</td>
                </tr>
                <tr className="border-t">
                    <td className="py-3 px-4 font-medium text-gray-500">Starttidspunkt</td>
                    <td className="py-3 font-light px-4 text-green-500"><i className="fas fa-check"></i> Start med det samme</td>
                    <td className="py-3 font-light px-4 text-red-500"><i className="fas fa-times"></i> Uger for onboarding og planlægning</td>
                    <td className="py-3 font-light px-4 text-red-500"><i className="fas fa-times"></i> Dage for at afslutte aftaler</td>
                </tr>
                <tr className="border-t">
                    <td className="py-3 px-4 font-medium text-gray-500">Ubegrænsede Revisioner</td>
                    <td className="py-3 font-light px-4 text-green-500"><i className="fas fa-check"></i> Ja, vi arbejder, indtil du er tilfreds</td>
                    <td className="py-3 font-light px-4 text-red-500"><i className="fas fa-times"></i> Begrænsede, med ekstra gebyrer</td>
                    <td className="py-3 font-light px-4 text-red-500"><i className="fas fa-times"></i> Begrænset og tidskrævende</td>
                </tr>
                <tr className="border-t">
                    <td className="py-3 px-4 font-medium text-gray-500">Kundeportal</td>
                    <td className="py-3 font-light px-4 text-green-500"><i className="fas fa-check"></i> Ja, nem adgang til status og opdateringer</td>
                    <td className="py-3 font-light px-4 text-red-500"><i className="fas fa-times"></i> Varierende systemer, ikke altid gennemsigtige</td>
                    <td className="py-3 font-light px-4 text-red-500"><i className="fas fa-times"></i> Ingen standardiseret portal</td>
                </tr>
                <tr className="border-t">
                    <td className="py-3 px-4 font-medium text-gray-500">Skalérbarhed</td>
                    <td className="py-3 font-light px-4 text-green-500"><i className="fas fa-check"></i> Let at skalere efter behov</td>
                    <td className="py-3 font-light px-4 text-yellow-500"><i className="fas fa-check"></i> Muligt at udvide med ekstra udviklere</td>
                    <td className="py-3 font-light px-4 text-red-500"><i className="fas fa-times"></i> Begrænset af enkeltudviklerkapacitet</td>
                </tr>
                <tr className="border-t">
                    <td className="py-3 px-4 font-medium  text-gray-500">Fleksibilitet</td>
                    <td className="py-3 font-light px-4 text-green-500"><i className="fas fa-check"></i> Fleksible løsninger tilpasset dine behov</td>
                    <td className="py-3 font-light px-4 text-red-500"><i className="fas fa-times"></i> Låst til fast løn og arbejdstider</td>
                    <td className="py-3 font-light px-4 text-red-500"><i className="fas fa-times"></i> Ufleksibel, afhængig af projektets struktur</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>
<FeedBackPeople />
      <Questions />
    </div>
  
    </>
  );
}
