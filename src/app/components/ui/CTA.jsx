import Link from "next/link";
import { FadeUp, RevealLines } from "../home/fx/Reveal";
import { PrimaryLink, GhostLink } from "./PageHero";

const niches = [
  { href: "/hjemmeside-til-haandvaerkere", label: "Håndværkere" },
  { href: "/hjemmeside-til-restauranter", label: "Restauranter" },
];

export default function CtaSearchBlock() {
  return (
    <section className="scene relative overflow-hidden bg-[#1c1e1e] border-t border-white/[0.06]">
      <div aria-hidden className="grid-fade absolute inset-0 opacity-50" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 sm:px-14 py-14 sm:py-20 text-center">
          <FadeUp as="p" className="text-[11px] uppercase tracking-[0.18em] text-[#7f8c8c] mb-5 inline-flex items-center gap-3">
            <span className="w-8 h-px bg-[#00a8e8]" />
            webhjerte.dk
            <span className="w-8 h-px bg-[#00a8e8]" />
          </FadeUp>
          <RevealLines
            lines={["Klar til at få en hjemmeside,", "der rent faktisk virker?"]}
            className="text-white font-semibold tracking-tight leading-[1.1] text-[clamp(22px,3.2vw,40px)] mb-6"
          />
          <FadeUp as="p" delay={0.1} className="text-[14px] text-[#93a0a0] leading-[1.8] max-w-[54ch] mx-auto mb-9">
            Uanset om du mangler en ny hjemmeside, en webshop eller bare vil have flere kunder online – så lad os tage en snak.
            Det er gratis, uforpligtende, og du får svar inden for 24 timer.
          </FadeUp>
          <FadeUp delay={0.18} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <PrimaryLink href="/kontakt">Lad os komme i gang</PrimaryLink>
            <GhostLink href="/portefolje">Se vores cases</GhostLink>
          </FadeUp>
          <FadeUp delay={0.25} className="mt-12 pt-8 border-t border-white/[0.08]">
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#6c7a7a] mb-4">Hjemmesider til din branche</p>
            <div className="flex flex-wrap justify-center gap-2">
            {niches.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] text-[#9aa5a5] border border-white/10 rounded-full px-4 py-2 hover:border-[#00a8e8] hover:text-[#00a8e8] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
