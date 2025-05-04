"use client";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="mb-20 px-4">
      <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
        Hvad siger folk om os?
      </h3>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
            className="bg-[#1e1e1e] border border-[#2c2c2c] rounded-2xl p-6 max-w-sm w-full shadow-lg backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#2f2f2f] flex items-center justify-center border border-[#3a3a3a] text-white font-bold text-lg">
                {t.initial}
              </div>
              <p className="text-white text-sm">{t.name}</p>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill={i < t.rating ? "#facc15" : "none"}
                  stroke={i < t.rating ? "#facc15" : "#6b7280"}
                />
              ))}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{t.feedback}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeedBackPeople;
