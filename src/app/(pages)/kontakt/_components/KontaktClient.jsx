"use client";

import AnimatedInView from "../../../components/ui/AnimatedInView";
import ContactForm from "../../../components/ui/ContactForm";

const facts = [
  { label: "Svartid", value: "Inden for 24 timer" },
  { label: "Første samtale", value: "Gratis & uforpligtende" },
  { label: "Arbejdsområde", value: "Hele Danmark" },
  { label: "Baseret i", value: "Horsens, Midtjylland" },
];

export default function KontaktClient() {
  return (
    <section className="bg-white px-5 sm:px-10 lg:px-20 pt-20 pb-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
            Kontakt
          </AnimatedInView>

          <AnimatedInView as="h1" className="maintitle text-white !leading-tight mb-4">
            Lad os tage en<br />
            <span className="text-[#00a8e8]">snak</span>
          </AnimatedInView>

          <AnimatedInView as="p" className="text-[14px] text-[#5a5a5a] leading-[1.75] max-w-sm mb-10">
            Fortæl mig hvad du har brug for - jeg vender tilbage inden for 24 timer med et konkret svar.
          </AnimatedInView>

          <AnimatedInView
            as="div"
            className="flex flex-col gap-px border border-[#e8e8e8] rounded-2xl overflow-hidden"
          >
            {facts.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center justify-between bg-[#f7f6f6] px-5 py-4"
              >
                <span className="text-[12px] text-[#5a5a5a]">{label}</span>
                <span className="text-[12px] font-medium text-[#5a5a5a]">{value}</span>
              </div>
            ))}
          </AnimatedInView>
        </div>

        <AnimatedInView
          as="div"
          className="bg-[#f7f6f6] border border-[#e8e8e8] rounded-2xl p-7"
        >
          <ContactForm />
        </AnimatedInView>
      </div>
    </section>
  );
}