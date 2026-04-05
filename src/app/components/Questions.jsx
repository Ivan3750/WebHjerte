"use client";
import { useState } from "react";
 
const faqs = [
  {
    q: "Hvor lang tid tager det?",
    a: "De fleste projekter er klar inden for 10–18 dage. Du ser et første udkast allerede inden for 3–5 dage efter vores samtale.",
  },
  {
    q: "Hvad hvis jeg ikke er tilfreds?",
    a: "Vi arbejder med godkendelse undervejs - du ser og godkender designet inden vi bygger. Justeringer er inkluderet indtil du er tilfreds.",
  },
  {
    q: "Arbejder du i hele Danmark?",
    a: "Ja. Selvom jeg er baseret i Horsens, arbejder jeg med kunder i hele Danmark. Alt foregår online - video, email og chat.",
  },
  {
    q: "Hvad sker der efter lancering?",
    a: "Du får 30 dages gratis support efter lancering. Herefter tilbyder vi løbende vedligeholdelse og opdateringer - aftales individuelt.",
  },
  {
    q: "Er mine data sikre hos WebHjerte?",
    a: "Ja, datasikkerhed er en høj prioritet hos WebHjerte. Alle løsninger er GDPR-kompatible, og nyeste teknologier og best practices anvendes for at beskytte dine data.",
  },
  {
    q: "Hvilken type virksomheder arbejder WebHjerte med?",
    a: " WebHjerte arbejder primært med små og mellemstore virksomheder, som ønsker moderne, funktionelle og prisvenlige webdesignløsninger. Uanset om du er en startup eller etableret virksomhed, hjælper WebHjerte med at skabe en stærk online tilstedeværelse.",
  },
  {
    q: "Hvordan kan jeg få et tilbud på et webdesignprojekt?",
    a: "Du kan kontakte WebHjerte via hjemmesiden eller e-mail. Herefter aftales et møde for at forstå dine behov og mål, og du modtager et skræddersyet tilbud, der passer til dit budget og dine ønsker.",
  },
];

const PlusIcon = ({ open }) => (
  <span
    className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
      open ? "bg-[#00a8e8] border-[#00a8e8]" : "border-[#e0e0e0]"
    }`}
  >
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className={`transition-transform duration-250 ${open ? "rotate-45" : ""}`}
    >
      <path
        d="M5 1v8M1 5h8"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

const Questions = () => {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="bg-[#f7f6f6] border-t border-[#e8e8e8] px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_640px] gap-14 md:gap-20 items-start">
        <div>
          <p  className="text-[11px] uppercase tracking-[0.1em] text-[#aaa] mb-3">
            Ofte stillede spørgsmål
          </p>
          <h2  className="title text-[#1c1e1e] !leading-tight">
            Har du{" "}
            <span className="text-[#00a8e8]">spørgsmål?</span>
          </h2>
        </div>

        <div  className="border-t border-[#e8e8e8]">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="border-b border-[#e8e8e8]">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-[15px] font-medium text-[#1c1e1e]">{q}</span>
                <PlusIcon open={open === i} />
              </button>

              <div
                className={`text-[13px] text-[#777] leading-[1.75] overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-48 pb-5" : "max-h-0"
                }`}
              >
                {a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
