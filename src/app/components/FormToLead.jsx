"use client";
import { Suspense } from "react";
import AnimatedInView from "../utils/AnimatedInView";
import ContactForm from "../components/ContactForm";

const defaultFacts = [
  { label: "Svartid", value: "Inden for 24 timer" },
  { label: "Vurdering af siden", value: "Gratis & uforpligtende" },
  { label: "Arbejdsområde", value: "Hele Danmark" },
  { label: "Baseret i", value: "Horsens, Midtjylland" },
];

export default function FormToLead({
  eyebrow = "Kom i gang",
  titleLine = "Klar til en side, der ser proffesional ud?",
  description = "Har du allerede en hjemmeside, der trænger til et løft, eller starter du helt forfra? Skriv det i formularen - jeg svarer inden for 24 timer.",
  facts = defaultFacts,
}) {
  return (
    <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 pt-20 pb-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <AnimatedInView
            as="p"
            className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3"
          >
            {eyebrow}
          </AnimatedInView>
          <AnimatedInView
            as="h2"
            className="maintitle text-white !leading-tight mb-4"
          >
            {titleLine}
      
          </AnimatedInView>
          <AnimatedInView
            as="p"
            className="text-[14px] text-[#5a5a5a] leading-[1.75] max-w-md mb-10"
          >
            {description}
          </AnimatedInView>

          <AnimatedInView
            as="div"
            className="flex flex-col gap-px border border-[#2a2d2d] rounded-2xl overflow-hidden mb-10"
          >
            {facts.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center justify-between bg-[#1c1e1e] px-5 py-4"
              >
                <span className="text-[12px] text-[#5a5a5a]">{label}</span>
                <span className="text-[12px] font-medium text-[#e0e0e0]">
                  {value}
                </span>
              </div>
            ))}
          </AnimatedInView>
        </div>
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </div>
    </section>
  );
}