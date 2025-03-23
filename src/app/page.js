"use client";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Check, X } from "lucide-react";
import Image from "next/image";
import HeroImg from "../../public/Hero.png";
import Button from "@/app/components/Button";
import Questions from "@/app/components/Questions";
import FeedBackPeople from "@/app/components/FeedBackPeople";

const data = [
  {
    category: "Pris",
    webHjerte: "$",
    fullDev: "$$$$ (Høje Omkostninger)",
    agencies: "$$",
  },
  {
    category: "Erfaring",
    webHjerte: "Erfaring i både Frontend og Backend",
    fullDev: "Begrænset ekspertise",
    agencies: "Varierende kvalitet",
  },
  {
    category: "Udviklingstid",
    webHjerte: "Hurtig levering",
    fullDev: "Kan tage uger",
    agencies: "Langsomt",
  },
  {
    category: "Starttidspunkt",
    webHjerte: "Start med det samme",
    fullDev: "Uger for onboarding",
    agencies: "Dage for godkendelse",
  },
  {
    category: "Revisioner",
    webHjerte: "Ubegrænsede",
    fullDev: "Begrænsede, ekstra gebyrer",
    agencies: "Begrænset og tidskrævende",
  },
  {
    category: "Kundeportal",
    webHjerte: "Ja, nem adgang",
    fullDev: "Varierende systemer",
    agencies: "Ingen portal",
  },
  {
    category: "Skalérbarhed",
    webHjerte: "Let at skalere",
    fullDev: "Muligt med flere udviklere",
    agencies: "Begrænset kapacitet",
  },
  {
    category: "Fleksibilitet",
    webHjerte: "Tilpassede løsninger",
    fullDev: "Låst til fast løn",
    agencies: "Afhængig af struktur",
  },
];

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
export default function Home() {
  return (
    <>
      <div className="">
        <div
          className=" justify-between bg-sq- 
      py-[30px] px-[40px] 
      sm:py-[40px] sm:px-[50px] 
      md:py-[60px] md:px-[70px] 
      lg:py-[75px] lg:px-[85px] 
      xl:py-[70px] xl:px-[90px] 
      
      gap-[25px] "
        >
          {" "}
          {/* absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)] */}
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
          </div>
        </div>
        <section className="flex bg-[#F7F6F6] justify-between gap-[40px]">
          <div className="">
            <h3 className="title">Hvem er vi?</h3>
            <div className="text flex flex-col gap-4">
              <span>
                Historien om WebHjerte Studio begyndte med en simpel idé: at
                gøre moderne webdesign tilgængeligt for alle danske
                virksomheder, uanset størrelse. Vores studie blev grundlagt i
                2024 i Horsens som et svar på de voksende behov hos små og
                mellemstore virksomheder, der krævede hurtige, effektive og
                GDPR-kompatible løsninger af høj kvalitet, men som ofte fandt
                markedets tilbud enten alt for komplekse, dyre eller
                uigennemskuelige. Vi så et behov for en tilgang, der kunne gøre
                webdesign både tilgængeligt og økonomisk forsvarligt, samtidig
                med at vi ikke gik på kompromis med funktionalitet eller design.
              </span>

              <span>
                Hos WebHjerte Studio er vi passionerede omkring at skabe
                løsninger, der hjælper virksomheder med at nå deres mål på
                nettet – fra små startups til etablerede virksomheder, der
                ønsker at optimere deres online tilstedeværelse. Vores vision er
                at tilbyde skræddersyede webdesigns, der kombinerer moderne
                æstetik med brugervenlighed og effektivitet, samtidig med at vi
                holder os til de strengeste GDPR-standarder. Vi ønsker at gøre
                det muligt for danske virksomheder at blomstre i den digitale
                verden uden at blive overvældet af komplekse eller dyre tekniske
                løsninger. Vores tilgang er enkel, men kraftfuld: Vi gør det
                muligt for din virksomhed at få et professionelt og moderne
                webdesign, der er både funktionelt, æstetisk og økonomisk
                overkommeligt.
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
            <div className="flex justify-center items-center flex-col max-w-[400px]">
              <p className="text-[40px] font-bold text-[#000] ">1</p>
              <p className="text-[25px] text-[#000]">Rådgivning og analyse</p>
              <p className="text text-[5px]">
                Vi håndterer hver enkelt del af projektet, der bliver betroet
                vores team, og giver dig detaljerede rapporter om, hvad vi
                arbejder på – sammen med opdateringer fra projektlederen.
              </p>
            </div>
            <div className="flex justify-center items-center flex-col max-w-[400px]">
              <p className="text-[40px] font-bold text-[#000] ">2</p>
              <p className="text-[25px] text-[#000]">Skræddersyede løsninger</p>
              <p className="text text-[5px]">
                Vi tilbyder tilpassede webdesignløsninger, der er skræddersyet
                til din virksomheds behov og mål, og sikrer, at dit websted
                skiller sig ud med både funktionalitet og æstetik.
              </p>
            </div>
            <div className="flex justify-center items-center flex-col max-w-[400px]">
              <p className="text-[40px] font-bold text-[#000] ">3</p>
              <p className="text-[25px] text-[#000]">
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

        <section className="bg-[#F7F6F6] py-10 px-4 md:px-10 lg:px-20 md:block hidden">
          <Table className="min-w-full text-left">
            <TableHeader>
              <TableRow className="border-b">
                <TableHead className="text-gray-500"></TableHead>
                <TableHead className="subtitle !text-[#5e5f5f]">
                  WebHjerte
                </TableHead>
                <TableHead className="subtitle !text-[#5e5f5f]">
                  Fuldtids Udvikler
                </TableHead>
                <TableHead className="subtitle !text-[#5e5f5f]">
                  Andre Bureauer
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index} className="border-t">
                  <TableCell className="text-gray-600 font-medium py-3">
                    {item.category}
                  </TableCell>
                  <TableCell className="py-3 text-green-500 ">
                    <div className="flex">
                      <Check className="mr-2" />
                      <p>{item.webHjerte}</p>
                    </div>
                  </TableCell>
                  <TableCell className="py-3 text-[#393939] ">
                    {" "}
                    {/* text-red-500 */}
                    <div className="flex">
                      <X className="mr-2" />
                      <p>{item.fullDev}</p>
                    </div>
                  </TableCell>
                  <TableCell className="py-3 text-[#393939] ">
                    {" "}
                    {/* text-yellow-500 */}
                    <div className="flex">
                      <Check className="mr-2" />
                      <p>{item.agencies}</p>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {/* Add footer if needed */}
            {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Footer Content</TableCell>
        </TableRow>
      </TableFooter> */}
          </Table>
        </section>

        <FeedBackPeople />
        <Questions />
      </div>
    </>
  );
}
