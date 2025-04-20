"use client";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anders Kristensen",
    initial: "A",
    rating: 5,
    feedback:
      "Fantastisk service og moderne design! Min hjemmeside blev udviklet hurtigt, og den ser professionel ud på alle enheder. Kan varmt anbefales!",
  },
  {
    name: "Mette Larsen",
    initial: "M",
    rating: 4,
    feedback:
      "Meget tilfreds med samarbejdet. De forstod vores behov og leverede en brugervenlig og SEO-optimeret løsning. Super dygtigt team!",
  },
  {
    name: "Jesper Hansen",
    initial: "J",
    rating: 5,
    feedback:
      "Hurtig respons, flot design og god support. Jeg fik præcis det, jeg ønskede, og min hjemmeside kører perfekt. Tak for et godt samarbejde!",
  },
  {
    name: "Sofie Nielsen",
    initial: "S",
    rating: 5,
    feedback:
      "Vi fik en skræddersyet løsning, der passer perfekt til vores virksomhed. Kommunikationen var klar, og alt blev leveret til tiden. Stor ros til teamet!",
  },
  {
    name: "Lars Mortensen",
    initial: "L",
    rating: 4,
    feedback:
      "De leverede hurtigere end forventet og med høj kvalitet. Meget professionelt team med god kundeservice.",
  },
  {
    name: "Camilla Jensen",
    initial: "C",
    rating: 5,
    feedback:
      "Virkelig imponerende arbejde! Designet er moderne og responsivt, og supporten var hurtig og hjælpsom. Jeg vil helt sikkert bruge dem igen.",
  },
];


const FeedBackPeople = () => {
  return (
    <section className="mb-10">
      <h3 className="maintitle mb-10">Hvad siger folk om os?</h3>
      <div className="flex flex-wrap justify-between gap-10 sm:justify-center">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="border border-[#404242] p-6 rounded-3xl max-w-[625px] shadow-xl text-white"
          >
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#252727] flex items-center justify-center border-[#404242] border">
                <p className="text-white font-medium">{t.initial}</p>
              </div>
              <p className="font-light">{t.name}</p>
            </div>
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < t.rating ? "#facc15" : "none"}
                  stroke={i < t.rating ? "#facc15" : "#d1d5db"}
                />
              ))}
            </div>
            <p className="my-5 font-normal">{t.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedBackPeople;
