import Image from "next/image";
import Questions from "../components/Questions";
import Eko from "../../../public/eko.png";
import Kvalitet from "../../../public/kvalitet.png";
import Transparens from "../../../public/transparens.png";
import WorkProcess from "@/app/components/WorkProcess";
import AnimatedInView from "../components/AnimatedInView";
import Logo from "../../../public/W.png";

export const metadata = {
  title: "Om WebHjerte – Lokalt Webstudio i Horsens med Fokus på Kvalitet",
  description:
    "WebHjerte er et moderne webstudio i Horsens, der hjælper små og mellemstore virksomheder i Danmark med moderne, brugervenlige og mobile hjemmesider – hurtigt og til en fair pris.",
  keywords:
    "webstudio Horsens, webdesign Danmark, webudvikling, moderne hjemmesider, lokale virksomheder, webbureau",
  robots: "index, follow",
  openGraph: {
    title: "Om WebHjerte – Lokalt Webstudio i Horsens med Fokus på Kvalitet",
    description:
      "Lær WebHjerte at kende – et digitalt studio dedikeret til kvalitet, gennemsigtighed og bæredygtige webløsninger.",
    url: "https://webhjerte.dk/om-os",
    image: Logo.src,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om WebHjerte – Lokalt Webstudio i Horsens",
    description:
      "Et webstudio med fokus på kvalitet, innovation og gennemsigtighed. Lær WebHjerte at kende.",
    image: Logo.src,
  },
};

const OmOs = () => {
  return (
    <>
 
      <section className="px-4">
        <AnimatedInView as="h1" className="maintitle text-center mt-[75px]">
          Hvem er WebHjerte Studio?
        </AnimatedInView>

        <AnimatedInView as="h2" className="text-center text-lg">
          Et moderne webstudio fra Horsens med fokus på kvalitet, design og innovation.
        </AnimatedInView>
      </section>

       <section className="bg-[#F7F6F6] flex flex-col md:flex-row gap-10 items-center px-4 py-12">
        <div className="max-w-[1200px] m-auto">
          <h2 className="title">Vores historie</h2>
          <p className="text">
            WebHjerte blev etableret i 2025 i Horsens med målet om at skabe moderne,
            funktionelle og brugervenlige hjemmesider til små og mellemstore virksomheder.
            Studiet bygger på en kombination af kreativitet, teknisk ekspertise og et
            stærkt fokus på kvalitet.
            <br /><br />
            Visionen bag WebHjerte er enkel: at levere digitale løsninger, der ikke blot
            ser professionelle ud, men også har reel værdi for virksomheder i hverdagen.
            Hvert projekt bliver udviklet med omtanke, struktur og passion – uanset om det
            er en mindre virksomhed eller et større brand.
            <br /><br />
            WebHjerte er mere end et webstudio. Det er digitalt håndværk skabt med hjerte,
            ansvarlighed og et stærkt ønske om at bidrage positivt til både lokale
            virksomheder og fremtidens digitale landskab.
          </p>
        </div>
      </section>

       <WorkProcess />

       <section className="bg-[#F7F6F6] py-12">
        <h2 className="title mb-16">Vores værdier</h2>

        <div className="flex flex-col gap-[75px] items-center">

           <AnimatedInView
            as="div"
            className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1300px] rounded-3xl border border-[#b8b9b9] p-6 gap-6"
          >
            <Image
              src={Kvalitet}
              width={500}
              height={400}
              alt="kvalitet"
              className="rounded-2xl w-full max-w-[500px] h-auto"
            />
            <div className="text-center lg:text-left max-w-[550px]">
              <h3 className="title">Kvalitet</h3>
              <h4 className="text-[24px] md:text-[30px] font-bold text-[#5E5F5F]">
                Professionelt håndværk – hver gang
              </h4>
              <p className="text">
                Hos WebHjerte er kvalitet altid i centrum. Hver hjemmeside bliver
                skræddersyet efter kundens behov med fokus på performance,
                funktionalitet og et solidt design. Målet er, at hver løsning skal
                føles både professionel, gennemført og langtidsholdbar.
              </p>
            </div>
          </AnimatedInView>

           <AnimatedInView
            as="div"
            className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1300px] rounded-3xl border border-[#b8b9b9] p-6 gap-6"
          >
            <div className="text-center lg:text-left max-w-[550px]">
              <h3 className="title">Transparens</h3>
              <h4 className="text-[24px] md:text-[30px] font-bold text-[#5E5F5F]">
                Ingen skjulte gebyrer – ingen overraskelser
              </h4>
              <p className="text">
                WebHjerte arbejder med fuld gennemsigtighed. Priser, processer og
                tidsrammer er altid klare og letforståelige. Kunden ved præcis, hvad der
                bliver leveret – og til hvilken pris. Et samarbejde skal være trygt og
                ærligt fra start til slut.
              </p>
            </div>
            <Image
              src={Transparens}
              width={500}
              height={400}
              alt="transparens"
              className="rounded-2xl w-full max-w-[500px] h-auto"
            />
          </AnimatedInView>

           <AnimatedInView
            as="div"
            className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1300px] rounded-3xl border border-[#b8b9b9] p-6 gap-6"
          >
            <Image
              src={Eko}
              width={500}
              height={400}
              alt="bæredygtighed"
              className="rounded-2xl w-full max-w-[500px] h-auto"
            />
            <div className="text-center lg:text-left max-w-[550px]">
              <h3 className="title">Bæredygtighed</h3>
              <h4 className="text-[24px] md:text-[30px] font-bold text-[#5E5F5F]">
                5% af overskuddet går til miljøprojekter
              </h4>
              <p className="text">
                WebHjerte tror på, at digital udvikling kan gå hånd i hånd med et ansvar
                for miljøet. Derfor går 5% af overskuddet til projekter, der arbejder for
                en grønnere og mere bæredygtig fremtid. Små handlinger gør en stor
                forskel – både lokalt og globalt.
              </p>
            </div>
          </AnimatedInView>
        </div>
      </section>
    </>
  );
};

export default OmOs;
