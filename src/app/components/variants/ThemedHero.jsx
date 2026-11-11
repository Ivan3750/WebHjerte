import Link from "next/link";
import { FadeUp, RevealLines } from "../home/fx/Reveal";

/**
 * Hero med eget tema pr. side: farve, baggrund, mønster og opbygning.
 * Samme typografi og runde former som resten af sitet – men hver side ser sin egen ud.
 *
 * theme:  { accent, ink, bg, light, pattern, glow }
 * layout: "split" | "split-rev" | "center" | "stack"
 */
const PATTERNS = {
  grid: (c) => ({
    backgroundImage: `linear-gradient(to right, ${c} 1px, transparent 1px), linear-gradient(to bottom, ${c} 1px, transparent 1px)`,
    backgroundSize: "64px 64px",
  }),
  dots: (c) => ({ backgroundImage: `radial-gradient(${c} 1.4px, transparent 1.4px)`, backgroundSize: "22px 22px" }),
  lines: (c) => ({ backgroundImage: `repeating-linear-gradient(135deg, ${c} 0 1px, transparent 1px 18px)` }),
  blueprint: (c) => ({
    backgroundImage: `linear-gradient(to right, ${c} 1px, transparent 1px), linear-gradient(to bottom, ${c} 1px, transparent 1px), linear-gradient(to right, ${c} 1px, transparent 1px), linear-gradient(to bottom, ${c} 1px, transparent 1px)`,
    backgroundSize: "120px 120px, 120px 120px, 24px 24px, 24px 24px",
    opacity: 0.7,
  }),
  waves: (c) => ({
    backgroundImage: `radial-gradient(circle at 50% 120%, transparent 38%, ${c} 38.5%, transparent 39.5%), radial-gradient(circle at 50% 120%, transparent 48%, ${c} 48.5%, transparent 49.5%)`,
    backgroundSize: "140px 60px",
  }),
  none: () => ({}),
};

function Btn({ href, children, theme }) {
  return (
    <Link
      href={href}
      style={{ backgroundColor: theme.accent, color: theme.ink || "#10181a" }}
      className="inline-flex items-center gap-2 text-[13px] font-semibold rounded-full pl-6 pr-2 py-2 hover:opacity-90 transition-opacity"
    >
      {children}
      <span className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.light ? "rgba(255,255,255,0.25)" : "rgba(28,30,30,0.18)" }}>
        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" aria-hidden>
          <path d="M2.5 8h10.2M8.6 3.9L12.7 8l-4.1 4.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}

function Ghost({ href, children, theme }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center text-[13px] font-medium rounded-full px-6 py-[13px] border transition-colors ${
        theme.light ? "text-[#1c1e1e] border-black/15 hover:border-black/40" : "text-white border-white/20 hover:border-white/50"
      }`}
    >
      {children}
    </Link>
  );
}

export default function ThemedHero({ theme, layout = "split", eyebrow, h1, lead, facts, visual, cta = "Få et gratis tilbud", ghost = { href: "/portefolje", label: "Se eksempler" } }) {
  const light = theme.light;
  const ink = light ? "#1c1e1e" : "#ffffff";
  const muted = light ? "#5a5a5a" : "#b4bebe";
  const patternColor = light ? "rgba(28,30,30,0.06)" : "rgba(255,255,255,0.05)";
  const center = layout === "center";
  const stack = layout === "stack";

  const text = (
    <div className={`flex flex-col ${center ? "items-center text-center" : "items-start"}`}>
      {eyebrow && (
        <FadeUp as="p" className="text-[11.5px] uppercase tracking-[0.16em] mb-5 flex items-center gap-3" style={{ color: light ? "#8a8a8a" : "#8a9696" }}>
          <span className="w-8 h-px" style={{ backgroundColor: theme.accent }} />
          {eyebrow}
          {center && <span className="w-8 h-px" style={{ backgroundColor: theme.accent }} />}
        </FadeUp>
      )}
      <div style={{ "--ac": theme.title || theme.accent }} className="[&_h1]:![color:var(--ac)]">
        <RevealLines
          as="h1"
          lines={[h1]}
          className={`maintitle !leading-[1.1] !text-[clamp(28px,3.6vw,48px)] mb-6 ${center ? "!text-center max-w-[24ch] mx-auto" : "!text-left max-w-[20ch]"}`}
        />
      </div>
      {lead && (
        <FadeUp as="p" delay={0.15} className={`readable text-[16px] sm:text-[17px] leading-[1.75] max-w-[54ch] mb-8 ${center ? "mx-auto" : ""}`} style={{ color: muted }}>
          {lead}
        </FadeUp>
      )}
      <FadeUp delay={0.25} className={`flex flex-wrap items-center gap-3 ${center ? "justify-center" : ""}`}>
        <Btn href="/kontakt" theme={theme}>
          {cta}
        </Btn>
        {ghost && (
          <Ghost href={ghost.href} theme={theme}>
            {ghost.label}
          </Ghost>
        )}
      </FadeUp>
      {facts?.length > 0 && (
        <FadeUp delay={0.3} className={`mt-10 grid grid-cols-3 gap-2 w-full max-w-[540px] ${center ? "mx-auto" : ""}`}>
          {facts.map(({ num, label }) => (
            <div
              key={label}
              className="rounded-2xl px-3 sm:px-4 py-3 border text-left"
              style={{ borderColor: light ? "rgba(28,30,30,0.08)" : "rgba(255,255,255,0.1)", backgroundColor: light ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.04)" }}
            >
              <p className="text-[15px] sm:text-[17px] font-semibold leading-tight" style={{ color: ink }}>
                {num}
              </p>
              <p className="text-[11px] sm:text-[11.5px] mt-1.5 leading-snug" style={{ color: muted }}>
                {label}
              </p>
            </div>
          ))}
        </FadeUp>
      )}
    </div>
  );

  const vis = visual ? (
    <FadeUp delay={0.15} className="relative min-w-0">
      {visual}
    </FadeUp>
  ) : null;

  return (
    <section className="scene relative overflow-hidden" style={{ backgroundColor: theme.bg }}>
      <div aria-hidden className="absolute inset-0" style={PATTERNS[theme.pattern || "none"](patternColor)} />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 w-[620px] h-[620px] rounded-full blur-[130px]"
        style={{ backgroundColor: theme.glow || theme.accent, opacity: light ? 0.18 : 0.14, [layout === "split-rev" ? "left" : "right"]: "-10%" }}
      />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 pt-16 sm:pt-20 pb-20 sm:pb-24">
        {center ? (
          <>
            {text}
            {vis && <div className="mt-12 sm:mt-14 max-w-4xl mx-auto">{vis}</div>}
          </>
        ) : stack ? (
          <>
            {vis && <div className="mb-10 sm:mb-14">{vis}</div>}
            {text}
          </>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
            <div className={layout === "split-rev" ? "lg:order-2" : ""}>{text}</div>
            <div className={layout === "split-rev" ? "lg:order-1" : ""}>{vis}</div>
          </div>
        )}
      </div>
    </section>
  );
}
