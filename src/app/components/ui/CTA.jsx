import Link from "next/link";
import { FadeUp, RevealLines } from "../home/fx/Reveal";

const niches = [
  { href: "/hjemmeside-til-haandvaerkere", label: "Håndværkere" },
  { href: "/hjemmeside-til-restauranter", label: "Restauranter" },
  { href: "/hjemmeside-til-saloner", label: "Saloner" },
  { href: "/hjemmeside-til-vvs", label: "VVS" },
  { href: "/hjemmeside-til-elektriker", label: "Elektrikere" },
  { href: "/hjemmeside-til-tomrer", label: "Tømrere" },
];

export default function CtaSearchBlock() {
  return (
    <section className="scene relative overflow-hidden bg-[#1c1e1e] border-t border-white/[0.06]">
      <div aria-hidden className="grid-fade absolute inset-0 opacity-50" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-20 sm:py-28">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 sm:px-14 py-14 sm:py-20 text-center">
          <FadeUp as="p" className="text-[11px] uppercase tracking-[0.18em] text-[#7f8c8c] mb-5 inline-flex items-center gap-3">
            <span className="w-8 h-px bg-[#00a8e8]" />
            webhjerte.dk
            <span className="w-8 h-px bg-[#00a8e8]" />
          </FadeUp>
          <RevealLines
            lines={["Klar til at få en hjemmeside,", "der rent faktisk virker?"]}
            className="text-white font-semibold tracking-tight leading-[1.1] text-[clamp(24px,3.8vw,48px)] mb-6"
          />
          <FadeUp as="p" delay={0.1} className="text-[14px] text-[#93a0a0] leading-[1.8] max-w-[54ch] mx-auto mb-9">
            Uanset om du mangler en ny hjemmeside, en webshop eller bare vil have flere kunder online – så lad os tage en snak.
            Det er gratis, uforpligtende, og du får svar inden for 24 timer.
          </FadeUp>
          <FadeUp delay={0.18} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-white bg-[#00a8e8] hover:bg-white hover:text-[#1c1e1e] rounded-full px-8 py-3.5 transition-colors group"
            >
              Lad os komme i gang
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
            </Link>
            <a
              href="tel:+4542760577"
              className="inline-flex items-center text-[14px] text-white border border-white/15 hover:border-white/40 rounded-full px-8 py-3.5 transition-colors"
            >
              +45 42 76 05 77
            </a>
          </FadeUp>
          <FadeUp delay={0.25} className="flex flex-wrap justify-center gap-2 mt-10">
            {niches.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] text-[#9aa5a5] border border-white/10 rounded-full px-4 py-2 hover:border-[#00a8e8] hover:text-[#00a8e8] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
