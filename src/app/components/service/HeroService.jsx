import Link from "next/link";
import AnimatedInView from "../../utils/AnimatedInView";
import Button from "../../utils/Button";

const nodes = [
  { label: "Hjemmesider", pos: "top-[4%] left-[10%]", color: "#00a8e8" },
  { label: "Webshops", pos: "top-[10%] right-[2%]", color: "#3ddc97" },
  { label: "SEO", pos: "bottom-[16%] left-[0%]", color: "#f0a63a" },
  { label: "Vedligeholdelse", pos: "bottom-[2%] right-[10%]", color: "#8a8ff0" },
];

export default function HeroServices() {
  return (
    <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 pt-24 pb-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
        {/* Left: text, left-aligned */}
        <div className="flex flex-col items-start text-left">
          <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-5">
            Vores services
          </AnimatedInView>

          <AnimatedInView as="h1" className="maintitle text-white !leading-tight mb-6">
            Hjemmesider bygget til din virksomhed
          </AnimatedInView>

          <AnimatedInView as="p" className="text-[14px] text-[#7a7a7a] leading-[1.85] max-w-[46ch] mb-10">
            Fra professionelt webdesign til SEO, webshops og integrationer —
            vi bygger digitale løsninger, der gør det nemmere for dine kunder
            at finde, forstå og vælge din virksomhed.
          </AnimatedInView>
 
        </div>

        {/* Right: simplified visual */}
        <AnimatedInView as="div" className="relative aspect-square w-full max-w-[400px] mx-auto">
          {/* single soft ring */}
          <div className="absolute inset-[16%] rounded-full border border-[#2a2d2d]" />

          {/* center core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-[104px] h-[104px] rounded-full bg-[#1c1e1e] border border-[#2a2d2d]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00a8e8] shadow-[0_0_14px_3px_rgba(0,168,232,0.4)] mb-2" />
            <span className="text-[10px] text-[#7a7a7a] text-center leading-tight px-3">
              Din
              <br />
              virksomhed
            </span>
          </div>

          {/* floating service nodes, each with its own soft accent color */}
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
          `}</style>
        </AnimatedInView>
      </div>
    </section>
  );
}