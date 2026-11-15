"use client";
import { Suspense } from "react";
import AnimatedInView from "./AnimatedInView";
import ContactForm from "./ContactForm";

const defaultFacts = [
  { label: "Svartid", value: "Inden for 24 timer" },
  { label: "Vurdering af siden", value: "Gratis & uforpligtende" },
  { label: "Arbejdsområde", value: "Hele Danmark" },
  { label: "Baseret i", value: "Horsens, Midtjylland" },
];

export default function FormToLead({
  // eslint-disable-next-line no-unused-vars
  eyebrow = "Kom i gang",
  titleLine = "Klar til en side, der ser proffesional ud?",
  description = "Har du allerede en hjemmeside, der trænger til et løft, eller starter du helt forfra? Skriv det i formularen - jeg svarer inden for 24 timer.",
  facts = defaultFacts,
  defaultPakke = "",
}) {
  return (
    <section className="bg-[#1c1e1e] px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <AnimatedInView
            as="h2"
            className="text-white font-semibold tracking-tight leading-[1.2] text-[clamp(24px,2.6vw,34px)] mb-4"
          >
            {titleLine}
      
          </AnimatedInView>
          <AnimatedInView
            as="p"
            className="text-[15px] text-[#8a9696] leading-[1.75] max-w-md mb-10"
          >
            {description}
          </AnimatedInView>

          <AnimatedInView as="div" className="grid grid-cols-2 gap-3 mb-10">
            {facts.map(({ label, value }) => (
              <div key={label} className="rounded-2xl bg-[#242828] border border-white/10 p-4 sm:p-5">
                <p className="text-[13px] text-[#8a9696] mb-1.5">{label}</p>
                <p className="text-[15px] font-semibold text-white leading-snug">{value}</p>
              </div>
            ))}
          </AnimatedInView>
        </div>
        <div className="rounded-3xl bg-[#242828] border border-white/10 p-6 sm:p-9">
          <Suspense fallback={null}>
            <ContactForm defaultPakke={defaultPakke} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}