import SectionBody, { slugify, autoVisual } from "./ContentBlocks";
import { FadeUp, RevealLines } from "../home/fx/Reveal";
import { CtaBand } from "../landing/shared";

/**
 * Den lange tekst på tjenestesider – vist som rigtige sektioner i stedet for sammenklappede kort.
 * Hver sektion får en opbygning ud fra sit indhold (se docs/design-regler.md):
 *  - "split": overskrift der følger med til venstre, tekst til højre (tekst og punkter)
 *  - "wide":  overskrift øverst og indhold i fuld bredde (tabeller, trin, kort, sammenligninger)
 *  - "dark":  mørk pause med kort tekst, så rytmen skifter
 * Al tekst står i HTML'en, så både Google og AI kan læse den.
 */
const wrap = "max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24";
const LIGHT = ["bg-[#f7f6f6]", "bg-[#eceeee]"];

const isRich = (s) => !!(s.table || s.cards || s.steps || s.compare || (s.subs && s.subs.length > 1));
// Mørk baggrund kun for sektioner, hvis blokke har en mørk udgave
const canBeDark = (s) => !isRich(s) && !s.quote && (s.paragraphs?.length || 0) <= 3;

function plan(sections) {
  let lightIdx = 0;
  let sinceDark = 0;
  return sections.map((s, i) => {
    let layout = isRich(s) ? "wide" : "split";
    if (layout === "split" && canBeDark(s) && sinceDark >= 2 && i > 0) layout = "dark";
    if (layout === "dark") {
      sinceDark = 0;
      return { layout, bg: "bg-[#1c1e1e]" };
    }
    sinceDark += 1;
    const bg = LIGHT[lightIdx++ % 2];
    return { layout, bg };
  });
}

function Num({ n, dark }) {
  return (
    <p className={`text-[13px] font-semibold tabular-nums mb-4 flex items-center gap-3 ${dark ? "text-[#8fd8f6]" : "text-[#007aab]"}`}>
      {String(n).padStart(2, "0")}
      <span className={`w-10 h-px ${dark ? "bg-white/25" : "bg-[#00a8e8]/40"}`} />
    </p>
  );
}

function Section({ section, idx, layout, bg, visual }) {
  const id = section.id || (section.h2 ? slugify(section.h2) : undefined);
  const dark = layout === "dark";
  const size = layout === "wide" ? "text-[clamp(24px,2.6vw,34px)]" : "text-[clamp(22px,2.3vw,30px)]";
  const title = section.h2 ? (
    <RevealLines
      lines={[section.h2]}
      className={`font-semibold tracking-tight leading-[1.15] ${size} [hyphens:auto] [overflow-wrap:break-word] ${dark ? "text-white" : "text-[#1c1e1e]"}`}
    />
  ) : null;

  if (layout === "wide") {
    return (
      <section id={id} className={`scene ${bg} scroll-mt-20`}>
        <div className={wrap}>
          <div className="mb-10 sm:mb-12 max-w-[30ch]">
            <Num n={idx + 1} />
            {title}
          </div>
          <div className="readable max-w-[980px]">
            <SectionBody section={section} idx={idx} visual={null} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className={`scene ${bg} scroll-mt-20`}>
      <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-20`}>
        <div className="lg:sticky lg:top-28 self-start">
          <Num n={idx + 1} dark={dark} />
          <div className="max-w-[26ch]">{title}</div>
        </div>
        <FadeUp className="readable min-w-0 max-w-[720px]">
          <SectionBody section={section} idx={idx} dark={dark} visual={dark ? null : visual} />
        </FadeUp>
      </div>
    </section>
  );
}

export default function ServiceStory({ sections, cta = true }) {
  if (!sections?.length) return null;
  const layout = plan(sections);
  const mid = sections.length >= 4 ? Math.ceil(sections.length / 2) : -1;
  const used = new Set();
  const visuals = sections.map((s, i) => {
    const v = autoVisual(s, i);
    const name = typeof v === "string" ? v : v?.name;
    if (!name || used.has(name)) return null;
    used.add(name);
    return v;
  });

  return (
    <>
      {sections.map((s, i) => (
        <div key={s.h2 || s.paragraphs?.[0] || i} className="contents">
          {cta && i === mid && (
            <CtaBand
              title={["Vil du vide, hvad det", "koster for dig?"]}
              text="Skriv kort, hvad du har brug for. Du får en fast pris og et første designudkast inden for 48 timer – passer det ikke, betaler du 0 kr."
              href="/kontakt"
              label="Få et gratis tilbud"
              secondary={{ href: "/hjemmeside-pris", label: "Se priserne" }}
            />
          )}
          <Section section={s} idx={i} layout={layout[i].layout} bg={layout[i].bg} visual={visuals[i]} />
        </div>
      ))}
    </>
  );
}

/** "Kort fortalt": sidens pointe i ét afsnit – lige under hero. Godt for læseren og let at citere for AI. */
export function ShortAnswer({ text, label = "Kort fortalt" }) {
  if (!text) return null;
  return (
    <section className="scene bg-[#f7f6f6]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-[0.35fr_1.65fr] gap-4 lg:gap-16">
        <p className="text-[13px] font-semibold text-[#007aab] pt-2">{label}</p>
        <FadeUp as="p" data-speakable className="text-[clamp(19px,2vw,25px)] leading-[1.55] font-medium tracking-tight text-[#1c1e1e] max-w-[52ch]">
          {text}
        </FadeUp>
      </div>
    </section>
  );
}
