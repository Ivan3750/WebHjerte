import Link from "next/link";
import AnimatedInView from "../../../components/ui/AnimatedInView";

const nodes = [
  { label: "AI-analyse", pos: "top-[4%] left-[10%]", color: "#00a8e8" },
  { label: "Indholdsoptimering", pos: "top-[10%] right-[2%]", color: "#f0a63a" },
  { label: "Nøgleord", pos: "bottom-[16%] left-[0%]", color: "#8a8ff0" },
  { label: "Rapportering", pos: "bottom-[2%] right-[10%]", color: "#3ddc97" },
];

export default function HeroAiseo() {
  return (
    <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 pt-24 pb-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
        {/* Left: text, left-aligned */}
        <div className="flex flex-col items-start text-left">
          <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#8a8a8a] mb-5">
            AI SEO
          </AnimatedInView>

          <AnimatedInView as="h1" className="maintitle text-white !leading-tight mb-6">
            Få din virksomhed fundet med AI SEO
          </AnimatedInView>

          <AnimatedInView as="p" className="text-[14px] text-[#a0a0a0] leading-[1.85] max-w-[46ch] mb-8">
            Jeg bruger kunstig intelligens til at finde ud af, hvad dine kunder
            søger efter — og sørger for, at din hjemmeside dukker op, når de
            gør. Faste priser fra 3.500 DKK.
          </AnimatedInView>

          {/* CTA-knapper */}
          <AnimatedInView as="div" className="flex flex-wrap gap-3">
            <Link
              href="#priser"
              className="inline-flex items-center rounded-full bg-[#00a8e8] px-6 py-3 text-[13px] font-medium text-[#111313] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Se priser
            </Link>
            <Link
              href="/gratis-seo-tjek-horsens"
              className="inline-flex items-center rounded-full border border-[#3a3d3d] px-6 py-3 text-[13px] font-medium text-[#e0e0e0] transition-colors hover:border-[#5a5d5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Gratis SEO-tjek
            </Link>
          </AnimatedInView>
        </div>

        {/* Right: visual */}
        <AnimatedInView as="div" className="relative aspect-square w-full max-w-[400px] mx-auto">
          <div className="absolute inset-[16%] rounded-full border border-[#2a2d2d]" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-[104px] h-[104px] rounded-full bg-[#1c1e1e] border border-[#2a2d2d]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00a8e8] shadow-[0_0_14px_3px_rgba(0,168,232,0.4)] mb-2" />
            <span className="text-[10px] text-[#a0a0a0] text-center leading-tight px-3">
              Din
              <br />
              virksomhed
            </span>
          </div>

          {nodes.map((n) => (
            <div
              key={n.label}
              className={`absolute ${n.pos} flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1c1e1e] border border-[#2a2d2d] shadow-[0_6px_18px_rgba(0,0,0,0.18)] animate-float`}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: n.color }}
              />
              <span className="text-[11.5px] text-[#e0e0e0] font-medium whitespace-nowrap">
                {n.label}
              </span>
            </div>
          ))}

          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-6px); }
            }
            .animate-float {
              animation: float 6s ease-in-out infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .animate-float { animation: none; }
            }
          `}</style>
        </AnimatedInView>
      </div>
    </section>
  );
}
