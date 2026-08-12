import Link from "next/link";
import AnimatedInView from "../AnimatedInView";
import Button from "../Button";

const services = [
  { label: "Hjemmesider", note: "Nye sider fra bunden" },
  { label: "Webshops", note: "Klar til at sælge" },
  { label: "SEO", note: "Findes på Google" },
  { label: "Vedligeholdelse", note: "Opdateret & sikker" },
];

const trust = [
  { value: "4.500 kr.", label: "Fra pris" },
  { value: "2 uger", label: "Til lancering" },
  { value: "100%", label: "Fast pris" },
];

export default function HeroServices() {
  return (
    <section className="bg-[#f7f6f6] px-5 sm:px-10 lg:px-20 pt-24 pb-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-5">
          Vores services
        </AnimatedInView>

        <AnimatedInView as="h1" className="maintitle text-white !leading-tight mb-6 max-w-[18ch]">
          En hjemmeside, der gør din virksomhed lettere at vælge
        </AnimatedInView>

        <AnimatedInView as="p" className="text-[14px] text-[#7a7a7a] leading-[1.85] max-w-[46ch] mb-10">
          Professionelle, hurtige hjemmesider til danske virksomheder — bygget med
          fokus på kunder, mobiloplevelse og synlighed på Google.
        </AnimatedInView>

        <AnimatedInView as="div" className="flex items-center gap-5 flex-wrap justify-center mb-14">
          <Link href="/kontakt">
            <Button name="Book gratis samtale" />
          </Link>
          <Link
            href="#pakker"
            className="text-[13px] text-[#5a5a5a] border-b border-[#2a2d2d] pb-px hover:text-[#9a9a9a] hover:border-[#404040] transition-colors"
          >
            Se priser →
          </Link>
        </AnimatedInView>

        {/* Trust bar */}
        <AnimatedInView
          as="div"
          className="flex items-center gap-8 sm:gap-14 mb-16 pb-16 border-b border-[#2a2d2d] w-full justify-center flex-wrap"
        >
          {trust.map((t) => (
            <div key={t.label} className="flex flex-col items-center gap-1">
              <span className="text-[20px] text-[#e0e0e0] font-medium">{t.value}</span>
              <span className="text-[10px] uppercase tracking-[0.08em] text-[#5a5a5a]">
                {t.label}
              </span>
            </div>
          ))}
        </AnimatedInView>

        {/* Service categories - bridges into pakker section below */}
        <AnimatedInView as="div" className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
          {services.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-start gap-1 text-left border border-[#2a2d2d] rounded-xl px-4 py-4 bg-[#1c1e1e]/40 hover:bg-[#1c1e1e] hover:border-[#3a3d3d] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a8e8] mb-1.5" />
              <span className="text-[13px] text-[#e0e0e0] font-medium">{s.label}</span>
              <span className="text-[11px] text-[#5a5a5a]">{s.note}</span>
            </div>
          ))}
        </AnimatedInView>
      </div>
    </section>
  );
}