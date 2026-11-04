"use client";

import { Suspense } from "react";
import Link from "next/link";
import ContactForm from "../../../components/ui/ContactForm";
import { FadeUp, RevealLines } from "../../../components/home/fx/Reveal";

const channels = [
  { label: "Ring til mig", value: "+45 42 76 05 77", href: "tel:+4542760577", hint: "Direkte til mig" },
  { label: "Skriv en e-mail", value: "hej@webhjerte.dk", href: "mailto:hej@webhjerte.dk", hint: "Svar inden for 24 timer" },
];

const facts = [
  { label: "Svartid", value: "Inden for 24 timer" },
  { label: "Første samtale", value: "Gratis & uforpligtende" },
  { label: "Arbejdsområde", value: "Hele Danmark" },
  { label: "Baseret i", value: "Horsens, Midtjylland" },
];

export default function KontaktClient() {
  return (
    <section className="scene relative overflow-hidden bg-[#1c1e1e]">
      <div aria-hidden className="grid-fade absolute inset-0 opacity-60" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pt-6 sm:pt-8 pb-16 sm:pb-24">
        <nav aria-label="Brødkrummer" className="mb-10 sm:mb-14">
          <ol className="flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-[#7a8787]">
            <li className="flex items-center gap-2">
              <Link href="/" className="hover:text-[#00a8e8] transition-colors py-1">Forside</Link>
              <span aria-hidden>/</span>
            </li>
            <li aria-current="page" className="text-[#aeb9b9]">Kontakt</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-start">
          <div>
            <FadeUp as="p" className="text-[11px] uppercase tracking-[0.18em] text-[#7f8c8c] mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-[#00a8e8]" />
              Kontakt
            </FadeUp>
            <RevealLines
              as="h1"
              lines={["Lad os tage en", <span key="s" className="text-[#00a8e8]">snak</span>]}
              className="text-white font-semibold tracking-tight leading-[1.08] text-[clamp(28px,3.6vw,48px)] mb-6"
            />
            <FadeUp as="p" delay={0.12} className="text-[14px] sm:text-[15px] text-[#93a0a0] leading-[1.8] max-w-[44ch] mb-10">
              Fortæl mig hvad du har brug for - jeg vender tilbage inden for 24 timer med et konkret svar.
            </FadeUp>

            <FadeUp delay={0.18} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group rounded-2xl glass p-5 flex flex-col gap-1.5 hover:border-[#00a8e8]/50 transition-colors"
                >
                  <span className="text-[11px] uppercase tracking-[0.14em] text-[#7f8c8c]">{c.label}</span>
                  <span className="text-[15px] font-medium text-white group-hover:text-[#00a8e8] transition-colors break-all">{c.value}</span>
                  <span className="text-[11px] text-[#7a8787]">{c.hint}</span>
                </a>
              ))}
            </FadeUp>

            <FadeUp delay={0.24} className="rounded-2xl glass overflow-hidden divide-y divide-white/10">
              {facts.map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between px-5 py-4 gap-4">
                  <span className="text-[12px] text-[#7f8c8c]">{label}</span>
                  <span className="text-[12px] font-medium text-[#e8ecec] text-right">{value}</span>
                </div>
              ))}
            </FadeUp>
          </div>

          <FadeUp delay={0.12}>
            <div className="rounded-3xl bg-[#242828] border border-white/10 p-6 sm:p-9">
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
