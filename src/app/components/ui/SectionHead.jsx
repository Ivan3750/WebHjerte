import { FadeUp, RevealLines } from "../home/fx/Reveal";

export default function SectionHead({ eyebrow, lines, lead, dark = false, as = "h2", className = "mb-12 sm:mb-16", maxW = "max-w-[22ch]" }) {
  return (
    <div className={className}>
      {eyebrow && (
        <FadeUp
          as="p"
          className={`text-[11px] uppercase tracking-[0.18em] mb-4 flex items-center gap-3 ${
            dark ? "text-[#7f8c8c]" : "text-[#8a8a8a]"
          }`}
        >
          <span className="w-8 h-px bg-[#00a8e8]" />
          {eyebrow}
        </FadeUp>
      )}
      <RevealLines
        as={as}
        lines={lines}
        className={`font-semibold tracking-tight leading-[1.1] text-[clamp(26px,3.8vw,48px)] ${maxW} ${
          dark ? "text-white" : "text-[#1c1e1e]"
        }`}
      />
      {lead && (
        <FadeUp
          as="p"
          delay={0.12}
          className={`mt-5 text-[14px] sm:text-[15px] leading-[1.8] max-w-[58ch] ${
            dark ? "text-[#93a0a0]" : "text-[#5f5f5f]"
          }`}
        >
          {lead}
        </FadeUp>
      )}
    </div>
  );
}
