import { FadeUp, RevealLines } from "../home/fx/Reveal";

// eyebrow-prop bevares for bagudkompatibilitet, men vises ikke længere.
// eslint-disable-next-line no-unused-vars
export default function SectionHead({ eyebrow, lines, lead, dark = false, as = "h2", className = "", maxW = "max-w-[26ch]" }) {
  // Ens afstand under alle sektionsoverskrifter – kald kan ikke længere sætte egne marginer
  const extra = className.replace(/\b(sm:)?mb-\d+\b/g, "").trim();
  return (
    <div className={`mb-10 sm:mb-14 ${extra}`}>
      <RevealLines
        as={as}
        lines={lines}
        className={`font-semibold tracking-tight leading-[1.1] text-[clamp(24px,2.6vw,34px)] ${maxW} ${
          dark ? "text-white" : "text-[#1c1e1e]"
        }`}
      />
      {lead && (
        <FadeUp
          as="p"
          delay={0.12}
          className={`mt-5 text-[15px] sm:text-[15px] leading-[1.8] max-w-[58ch] ${
            dark ? "text-[#b4bdbd]" : "text-[#5f5f5f]"
          }`}
        >
          {lead}
        </FadeUp>
      )}
    </div>
  );
}
