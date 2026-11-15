import { FadeUp, RevealLines } from "../home/fx/Reveal";

// eyebrow-prop bevares for bagudkompatibilitet, men vises ikke længere.
// eslint-disable-next-line no-unused-vars
export default function SectionHead({ eyebrow, lines, lead, dark = false, as = "h2", className = "mb-12 sm:mb-16", maxW = "max-w-[22ch]" }) {
  return (
    <div className={className}>
      <RevealLines
        as={as}
        lines={lines}
        className={`font-semibold tracking-tight leading-[1.1] text-[clamp(24px,3.3vw,40px)] ${maxW} ${
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
