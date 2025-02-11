"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FeedBackPeople = () => {

  useEffect(() => {
    AOS.init({
      duration: 3500, 
      once: false, 
    });
  }, []);

  return (
    <>
      <section>
        <h3 className="maintitle mb-10">Hvad siger folk om os?</h3>
        <div className="flex flex-wrap justify-center gap-10 ">
          <div className="border-2 border-[#404242] p-7 rounded-xl max-w-[600px]" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
            <h4>Frederik J.</h4>
            <p className="my-5 text !text-white !font-medium">
              Hej, alt er virkelig godt. WebHjerte Studio har lavet et
              fantastisk "Pizzeria", hjulpet med hjemmesiden og skrevet
              instruktioner. Jeg kan varmt anbefale dem.
            </p>
          </div>
          <div className="border-2 border-[#404242] p-7 rounded-xl max-w-[600px]" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
            <h4>Egor T.</h4>
            <p className="my-5 text !text-white !font-medium">
              Jeg vil gerne udtrykke min oprigtige taknemmelighed til WebHjerte
              Studio for deres professionelle hjælp i udviklingen af vores
              hjemmeside. De har ikke kun udført alle tekniske opgaver som
              opsætning af DNS-servere og tilslutning af domænet, men har også
              leveret hurtig support på hvert trin af processen. Takket være
              deres erfaring og opmærksomhed på detaljer, er vores hjemmeside
              blevet stabil og klar til at blive brugt. Jeg kan varmt anbefale
              WebHjerte Studio!
            </p>
          </div>
          <div className="border-2 border-[#404242] p-7 rounded-xl max-w-[600px]" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
            <h4>Oleksandr M.</h4>
            <p className="my-5 text !text-white !font-medium">
              Jeg vil gerne fremhæve det høje niveau af arbejde udført af
              WebHjerte Studio, som skabte en kommerciel hjemmeside for os.
              Deres indsats og omhyggelighed kom til udtryk i alle aspekter af
              projektet, især musikspillerens funktionalitet, som fungerer
              perfekt og har et brugervenligt interface. WebHjerte Studio har
              demonstreret både teknisk viden og evnen til at arbejde effektivt
              i et team og tilpasse sig kundens ønsker. Hjemmesiden er stilfuld,
              moderne og brugervenlig, hvilket øger dens værdi som kommercielt
              produkt.
            </p>
          </div>
          <div className="border-2 border-[#404242] p-5 rounded-xl max-w-[600px]" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
            <h4>Mikkel S.</h4>
            <p className="my-5 text !text-white !font-medium">
              Jeg er meget tilfreds med WebHjerte Studio's arbejde på vores
              hjemmeside. De leverede et stilfuldt og funktionelt design, der
              fuldt ud imødekommede vores behov. Kommunikation og support gennem
              hele processen var fremragende. Jeg kan varmt anbefale WebHjerte
              Studio til alle, der søger professionelle webudviklingstjenester.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeedBackPeople;
