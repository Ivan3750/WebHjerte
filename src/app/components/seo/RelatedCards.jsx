import Link from "next/link";
import { FadeUp, RevealLines } from "../home/fx/Reveal";
import SpotlightCard from "../home/fx/SpotlightCard";
import { ArrowBadge } from "../ui/ArrowIcon";

const ACCENTS = ["#00a8e8", "#3ddc97", "#f0a63a", "#8a8ff0", "#e0678a"];

/** Kort kategori-mærkat ud fra linkets sti – så kortene ikke ligner hinanden. */
export const tagFor = (href = "") => {
  if (href.startsWith("/blog") || href.startsWith("/freelancer")) return "Guide";
  if (href.includes("pris")) return "Priser";
  if (href.startsWith("/portefolje")) return "Cases";
  if (href.includes("hjemmeside-til-")) return "Din branche";
  if (/webbureau|digitalt-bureau|webdesign|horsens|jylland|aarhus|vejle/.test(href)) return "Lokalt";
  if (/ai|geo|chatbot/.test(href)) return "AI";
  if (/seo/.test(href)) return "SEO";
  if (/ordliste|spoergsmaal|om-/.test(href)) return "Viden";
  return "Læs videre";
};

/**
 * Mørk, tydelig sektion med store kort til næste side/artikel.
 * Hele kortet er klikbart, har spotlight ved hover og en rund knap, der fyldes blå.
 */
export function ReadMore({ items, eyebrow = "Læs videre", lines = ["Næste skridt", "for dig"] }) {
  if (!items?.length) return null;
  return (
    <section className="scene relative overflow-hidden bg-[#1c1e1e]">
      <div aria-hidden className="grid-fade absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 w-[520px] h-[520px] rounded-full bg-[#00a8e8]/[0.08] blur-[120px]"
      />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="mb-10 sm:mb-14">
          <FadeUp as="p" className="text-[11px] uppercase tracking-[0.18em] text-[#7f8c8c] mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-[#00a8e8]" />
            {eyebrow}
          </FadeUp>
          <RevealLines
            lines={lines}
            className="text-white font-semibold tracking-tight leading-[1.1] text-[clamp(24px,3.2vw,40px)]"
          />
        </div>

        <div className={`grid grid-cols-1 gap-4 ${items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
          {items.map((item, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <FadeUp key={item.href} delay={i * 0.08}>
                <Link href={item.href} className="group block h-full rounded-3xl focus-visible:outline-2 focus-visible:outline-[#00a8e8]">
                  <SpotlightCard
                    color="0,168,232"
                    className="h-full rounded-3xl glass transition-all duration-500 group-hover:border-[#00a8e8]/50 group-hover:-translate-y-1"
                  >
                    <div className="p-6 sm:p-8 flex flex-col h-full min-h-[240px]">
                      <div className="flex items-center justify-between mb-8">
                        <span
                          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] rounded-full px-3 py-1.5 border"
                          style={{ color: accent, borderColor: `${accent}40`, backgroundColor: `${accent}14` }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                          {item.tag || tagFor(item.href)}
                        </span>
                        <span className="text-[13px] tabular-nums text-white/25">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <p className="text-[18px] sm:text-[19px] font-semibold text-white leading-[1.3] mb-3 group-hover:text-[#00a8e8] transition-colors duration-300">
                        {item.title}
                      </p>
                      <p className="readable text-[15px] text-[#a6b1b1] leading-[1.7] mb-8">{item.desc}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-[12px] font-medium text-white/60 group-hover:text-white transition-colors">
                          {item.cta || "Læs mere"}
                        </span>
                        <ArrowBadge tone="dark" />
                      </div>
                    </div>
                  </SpotlightCard>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Lyst kort til oversigter (fx blog-forsiden). `featured` giver et stort, mørkt hovedkort. */
export function PostCard({ href, title, desc, tag, index = 0, featured = false, meta }) {
  const accent = ACCENTS[index % ACCENTS.length];
  if (featured) {
    return (
      <Link href={href} className="group block rounded-3xl overflow-hidden">
        <SpotlightCard className="rounded-3xl bg-[#1c1e1e] border border-white/10 group-hover:border-[#00a8e8]/50 transition-colors duration-500">
          <div className="relative p-7 sm:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div aria-hidden className="grid-fade absolute inset-0 opacity-40" />
            <div className="relative">
              <span
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] rounded-full px-3 py-1.5 border mb-7"
                style={{ color: accent, borderColor: `${accent}40`, backgroundColor: `${accent}14` }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                Udvalgt · {tag}
              </span>
              <p className="text-[clamp(22px,2.8vw,34px)] font-semibold text-white leading-[1.2] tracking-tight max-w-[26ch] mb-4 group-hover:text-[#00a8e8] transition-colors duration-300">
                {title}
              </p>
              <p className="readable text-[16px] text-[#a6b1b1] leading-[1.75] max-w-[58ch]">{desc}</p>
              {meta && <p className="text-[12px] text-[#6c7a7a] mt-6">{meta}</p>}
            </div>
            <div className="relative hidden md:block">
              <ArrowBadge tone="dark" size="lg" />
            </div>
          </div>
        </SpotlightCard>
      </Link>
    );
  }
  return (
    <Link href={href} className="group block h-full rounded-3xl">
      <SpotlightCard
        dark={false}
        className="h-full rounded-3xl bg-white border border-[#e8e6e6] group-hover:border-[#00a8e8]/50 group-hover:-translate-y-1 transition-all duration-500 group-hover:shadow-[0_24px_50px_-28px_rgba(0,100,150,0.35)]"
      >
        <div className="p-6 sm:p-7 flex flex-col h-full min-h-[230px]">
          <div className="flex items-center justify-between mb-6">
            <span
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] rounded-full px-3 py-1.5"
              style={{ color: accent, backgroundColor: `${accent}1a` }}
            >
              {tag}
            </span>
            <span className="text-[12px] tabular-nums text-[#c4c2c2]">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <p className="text-[16.5px] font-semibold text-[#1c1e1e] leading-[1.35] mb-3 group-hover:text-[#00a8e8] transition-colors duration-300">
            {title}
          </p>
          <p className="readable text-[14.5px] text-[#4a4f50] leading-[1.7] mb-5 line-clamp-4">{desc}</p>
          {meta && <p className="text-[12px] text-[#8a8d8d] mb-5">{meta}</p>}
          <div className="mt-auto flex items-center justify-between">
            <span className="text-[12px] font-medium text-[#5a5d5d] group-hover:text-[#00a8e8] transition-colors">Læs guiden</span>
            <ArrowBadge size="sm" />
          </div>
        </div>
      </SpotlightCard>
    </Link>
  );
}
