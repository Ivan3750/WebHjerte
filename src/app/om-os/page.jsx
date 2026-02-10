import Image from "next/image";
import Questions from "../components/Questions";
import Eko from "../../../public/eko.png";
import Kvalitet from "../../../public/kvalitet.png";
import Transparens from "../../../public/transparens.png";
import WorkProcess from "../components/WorkProcess";
import AnimatedInView from "../components/AnimatedInView";
import Logo from "../../../public/W.png";
export const metadata = {
  title: "Om WebHjerte – Webbureau i Horsens | Webdesign & SEO Eksperter",
  description:
    "WebHjerte er et lokalt webbureau i Horsens siden 2025. Vi specialiserer os i webdesign, SEO og hjemmesider til små virksomheder i Midtjylland. Læs vores historie.",
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.webhjerte.dk/om-os",
  },
  
  openGraph: {
    title: "Om WebHjerte – Webbureau i Horsens | Webdesign & SEO",
    description:
      "Lær WebHjerte at kende – et lokalt webbureau i Horsens dedikeret til kvalitet, gennemsigtighed og resultater for små virksomheder.",
    url: "https://www.webhjerte.dk/om-os",
    image: Logo.src,
    type: "website",
    locale: "da_DK",
    siteName: "WebHjerte",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Om WebHjerte – Webbureau i Horsens",
    description:
      "Et webbureau i Horsens med fokus på webdesign, SEO og resultater for lokale virksomheder.",
    image: Logo.src,
    creator: "@webhjerte",
  },
};

const OmOs = () => {
  return (
    <>
      <section className="px-4">
        <AnimatedInView as="h1" className="maintitle text-center mt-[75px]">
          Om WebHjerte – Webbureau i Horsens
        </AnimatedInView>

        <AnimatedInView as="h2" className="text-center text-lg subtitle">
          Vi er et moderne webbureau fra Horsens, der specialiserer sig i 
          professionelt webdesign og SEO for små virksomheder i Midtjylland. 
          Vi kombinerer kvalitet, kreativt design og innovative løsninger, 
          der hjælper vores kunder med at få flere kunder online.
        </AnimatedInView>
      </section>

      <section className="bg-[#F7F6F6] flex flex-col md:flex-row gap-10 items-center px-4 py-12">
        <div className="max-w-[1200px] m-auto">
          <h2 className="title">Vores historie som webbureau i Horsens</h2>
          <p className="text">
            WebHjerte blev etableret i 2025 i Horsens med målet om at hjælpe 
            små og mellemstore virksomheder i Midtjylland med moderne, 
            SEO-optimerede hjemmesider. Som lokalt <strong>webbureau i Horsens</strong> 
            forstår vi de udfordringer, lokale virksomheder står overfor, når 
            de skal konkurrere online.
            <br /><br />
            Vores <strong>webbureau</strong> bygger på en kombination af kreativitet, 
            teknisk ekspertise inden for <strong>webdesign</strong> og et stærkt fokus på 
            resultater. Vi tror ikke på flotte hjemmesider, der ikke konverterer – 
            vi tror på <strong>webdesign i Horsens</strong>, der skaffer flere kunder 
            til vores klienter.
            <br /><br />
            Visionen bag WebHjerte er enkel: at levere digitale løsninger med 
            både professionelt webdesign og effektiv SEO, der har reel værdi for 
            virksomheder i hverdagen. Hvert projekt bliver udviklet med omtanke, 
            struktur og passion – uanset om det er en mindre lokal virksomhed 
            eller et større brand i Horsens og omegn.
            <br /><br />
            WebHjerte er mere end et webbureau i Horsens. Det er digitalt håndværk 
            skabt med hjerte, ansvarlighed og et stærkt ønske om at bidrage 
            positivt til både lokale virksomheder og fremtidens digitale landskab 
            i Midtjylland.
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
