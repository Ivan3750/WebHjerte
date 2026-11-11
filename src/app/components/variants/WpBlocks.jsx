"use client";

import { motion } from "framer-motion";
import SectionHead from "../ui/SectionHead";
import { FadeUp } from "../home/fx/Reveal";
import { Panel, VisualEditor, VisualPhone } from "../illustrations/Visuals";

const card = "bg-[var(--v-card)] border border-[var(--v-line)]";

function VisualLogin() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-5">
      <div className={`w-full max-w-[220px] rounded-xl p-3 flex flex-col gap-2 ${card}`}>
        <p className="text-[10px] font-semibold text-[var(--v-ink)] mb-0.5">dinside.dk/wp-admin</p>
        <div className="h-5 rounded-md bg-[var(--v-panel)] px-2 flex items-center text-[9px] text-[var(--v-muted)]">mette@dinside.dk</div>
        <div className="h-5 rounded-md bg-[var(--v-panel)] px-2 flex items-center text-[9px] text-[var(--v-muted)]">••••••••</div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring", stiffness: 260, damping: 16 }}
          className="h-6 rounded-full bg-[#00a8e8] text-white text-[10px] font-semibold flex items-center justify-center"
        >
          Log ind
        </motion.div>
      </div>
    </div>
  );
}

const STEPS = [
  { title: "Log ind", text: "Med din egen mail og kode – fra computer eller mobil.", visual: <VisualLogin /> },
  { title: "Klik og ret", text: "Skriv direkte i teksten, skift et billede eller en pris.", visual: <VisualEditor /> },
  { title: "Gem – så er det live", text: "Ændringen er på siden med det samme. Også på mobilen.", visual: <VisualPhone /> },
];

/** "Du kan selv rette": tre trin med små illustrationer – det, der gør WordPress-siden anderledes. */
export function WpEditDemo() {
  return (
    <section className="scene bg-[#e4f0f7]">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead
          eyebrow="Du bestemmer selv"
          lines={["Ny åbningstid?", "Ret den på ét minut"]}
          lead="Du får en kort video, der viser præcis, hvordan du gør. Ingen grund til at ringe til en udvikler for at ændre en pris."
          className="mb-10 sm:mb-14"
        />
        <div className="grid md:grid-cols-3 gap-4">
          {STEPS.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.1} className="h-full">
              <div className="h-full rounded-3xl bg-white border border-[#d8e6ee] flex flex-col">
                <div className="m-2.5">
                  <Panel h="h-[190px]">{s.visual}</Panel>
                </div>
                <div className="px-5 sm:px-6 pt-2 pb-6">
                  <p className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-full bg-[#00a8e8] text-white text-[12px] font-semibold flex items-center justify-center">{i + 1}</span>
                    <span className="text-[16px] font-semibold text-[#1c1e1e]">{s.title}</span>
                  </p>
                  <p className="text-[14px] text-[#5a5d5d] leading-[1.65]">{s.text}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
