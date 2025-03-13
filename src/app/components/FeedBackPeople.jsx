"use client";
import Image from "next/image";
import People from "../../../public/people.jpg";
const FeedBackPeople = () => {
  return (
    <>
      <section>
        <h3 className="maintitle mb-10">Hvad siger folk om os?</h3>
        <div class="flex flex-wrap justify-center gap-10">
        <div class="border-[1px] border-[#404242] p-[24px] rounded-3xl max-w-[600px] shadow-xl">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#252727] flex items-center justify-center border-[#404242] border-[1px]">
                <p className="">A</p>
              </div>
              <p className="font-light">Anders Kristensen</p>
            </div>
            <p class="my-5 text !text-white !font-normal">
            Fantastisk service og moderne design! Min hjemmeside blev udviklet hurtigt, og den ser professionel ud på alle enheder. Kan varmt anbefales!
            </p>
          </div>
          <div class="border-[1px] border-[#404242] p-[24px] rounded-3xl max-w-[600px] shadow-xl">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#252727] flex items-center justify-center border-[#404242] border-[1px]">
                <p className="">M</p>
              </div>
              <p className="font-light">Mette Larsen</p>
            </div>
            <p class="my-5 text !text-white !font-normal">
            Meget tilfreds med samarbejdet. De forstod vores behov og leverede en brugervenlig og SEO-optimeret løsning. Super dygtigt team!
            </p>
          </div>
          <div class="border-[1px] border-[#404242] p-[24px] rounded-3xl max-w-[600px] shadow-xl">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#252727] flex items-center justify-center border-[#404242] border-[1px]">
                <p className="">J</p>
              </div>
              <p className="font-light">Jesper Hansen</p>
            </div>
            <p class="my-5 text !text-white !font-normal">
            Hurtig respons, flot design og god support. Jeg fik præcis det, jeg ønskede, og min hjemmeside kører perfekt. Tak for et godt samarbejde!
            </p>
          </div>
          <div class="border-[1px] border-[#404242] p-[24px] rounded-3xl max-w-[600px] shadow-xl">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#252727] flex items-center justify-center border-[#404242] border-[1px]">
                <p className="">S</p>
              </div>
              <p className="font-light">Sofie Nielsen</p>
            </div>
            <p class="my-5 text !text-white !font-normal">
            Vi fik en skræddersyet løsning, der passer perfekt til vores virksomhed. Kommunikationen var klar, og alt blev leveret til tiden. Stor ros til teamet!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeedBackPeople;
