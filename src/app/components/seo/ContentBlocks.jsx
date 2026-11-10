import Link from "next/link";
import { FadeUp } from "../home/fx/Reveal";
import SpotlightCard from "../home/fx/SpotlightCard";
import { ArrowBadge } from "../ui/ArrowIcon";
import ScrollTimeline from "./ScrollTimeline";
import StatValue from "./StatValue";
import ArticleVisual from "./ArticleVisuals";

export const COLORS = ["#00a8e8", "#3ddc97", "#f0a63a", "#8a8ff0", "#e0678a", "#00a8e8"];

export const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/æ/g, "ae")
    .replace(/ø/g, "oe")
    .replace(/å/g, "aa")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/* ───────────────────────── Små byggeklodser ───────────────────────── */

function P({ children, dark }) {
  return (
    <p className={`text-[15.5px] leading-[1.9] mb-5 last:mb-0 ${dark ? "text-[#a3b2b2]" : "text-[#4a4d4d]"}`}>{children}</p>
  );
}

function Check({ tone = "good", dark }) {
  if (tone === "bad") {
    return (
      <span className="mt-[3px] w-[20px] h-[20px] rounded-full bg-[#e0678a]/15 flex items-center justify-center flex-shrink-0">
        <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden>
          <path d="M2.4 2.4l5.2 5.2M7.6 2.4L2.4 7.6" stroke="#e0678a" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
    );
  }
  return (
    <span className={`mt-[3px] w-[20px] h-[20px] rounded-full flex items-center justify-center flex-shrink-0 ${dark ? "bg-[#00a8e8]/20" : "bg-[#00a8e8]/15"}`}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
        <path d="M2 5.2l2 2L8 3" stroke="#00a8e8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function Bullets({ items, dark = false, tone = "good" }) {
  return (
    <ul className={`my-6 border-t ${dark ? "border-white/10" : "border-[#e6e4e4]"}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-3.5 py-3.5 border-b text-[14.5px] leading-[1.75] ${
            dark ? "border-white/10 text-[#b7c4c4]" : "border-[#e6e4e4] text-[#3f4242]"
          }`}
        >
          <Check tone={tone} dark={dark} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Knap-link til en anden side. Rigtig knap med ikon – ikke en tekst-pil. */
export function MoreLink({ cta, dark = false }) {
  return (
    <p className="mt-7">
      <Link
        href={cta.href}
        className={`group inline-flex items-center gap-4 rounded-full border pl-6 pr-2 py-2 text-[13px] font-medium transition-colors duration-300 ${
          dark
            ? "border-white/15 text-white hover:border-[#00a8e8]"
            : "border-[#d9d7d7] bg-white text-[#1c1e1e] hover:border-[#00a8e8] hover:text-[#00a8e8]"
        }`}
      >
        {cta.label}
        <ArrowBadge size="sm" tone={dark ? "dark" : "light"} />
      </Link>
    </p>
  );
}

const CALLOUT = {
  tip: { label: "Tip", color: "#00a8e8", icon: "M12 3a6 6 0 00-3.6 10.8c.4.3.6.8.6 1.2V16h6v-1c0-.4.2-.9.6-1.2A6 6 0 0012 3zM9.5 19h5M10.5 21.5h3" },
  warning: { label: "Pas på", color: "#f0a63a", icon: "M12 4l9 16H3L12 4zM12 10v4M12 17.2v.1" },
  fact: { label: "Godt at vide", color: "#3ddc97", icon: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 11v5M12 8v.1" },
  example: { label: "Eksempel", color: "#8a8ff0", icon: "M5 5h14v14H5zM9 9h6M9 13h4" },
};

export function Callout({ data, dark = false }) {
  const t = CALLOUT[data.tone || "tip"] || CALLOUT.tip;
  return (
    <FadeUp className="my-8">
      <aside
        className="relative overflow-hidden rounded-3xl p-6 sm:p-7"
        style={{ backgroundColor: dark ? "rgba(255,255,255,0.05)" : `${t.color}12` }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl"
          style={{ backgroundColor: `${t.color}22` }}
        />
        <div className="relative flex gap-4">
          <span
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: t.color, color: "#10181a" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d={t.icon} />
            </svg>
          </span>
          <div className="min-w-0 pt-0.5">
            <p className="text-[11px] uppercase tracking-[0.16em] mb-1.5 font-semibold" style={{ color: t.color }}>
              {data.title || t.label}
            </p>
            <p className={`text-[15px] leading-[1.8] ${dark ? "text-[#b7c4c4]" : "text-[#2f3333]"}`}>{data.text}</p>
          </div>
        </div>
      </aside>
    </FadeUp>
  );
}

export function Stats({ items, dark = false }) {
  return (
    <div className={`grid gap-3 my-8 ${items.length === 2 ? "sm:grid-cols-2" : items.length === 4 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
      {items.map((it, i) => (
        <FadeUp key={it.label} delay={i * 0.07}>
          <SpotlightCard
            dark={dark}
            className={`h-full rounded-2xl ${dark ? "glass" : "bg-white border border-[#e8e6e6]"}`}
          >
            <div className="p-5 sm:p-6 flex flex-col gap-3 h-full">
              <p
                className={`text-[clamp(26px,3vw,36px)] font-semibold tracking-tight leading-none whitespace-nowrap ${
                  dark ? "text-[#00a8e8]" : "text-[#1c1e1e]"
                }`}
              >
                <StatValue value={it.value} />
              </p>
              <div className={`h-px w-full ${dark ? "bg-white/10" : "bg-[#ece9e9]"}`} />
              <p className={`text-[14px] font-medium ${dark ? "text-[#eef2f2]" : "text-[#1c1e1e]"}`}>{it.label}</p>
              {it.note && <p className={`text-[12.5px] leading-[1.7] ${dark ? "text-[#8795a0]" : "text-[#6a6a6a]"}`}>{it.note}</p>}
            </div>
          </SpotlightCard>
        </FadeUp>
      ))}
    </div>
  );
}

export function Compare({ data }) {
  const cols = [
    { ...data.good, tone: "good", color: "#3ddc97", fallback: "Det virker" },
    { ...data.bad, tone: "bad", color: "#e0678a", fallback: "Det skader" },
  ];
  return (
    <div className="grid sm:grid-cols-2 gap-3 my-8">
      {cols.map((c, i) => (
        <FadeUp key={c.tone} delay={i * 0.08}>
          <div className="h-full rounded-3xl bg-white border border-[#e8e6e6] p-5 sm:p-6">
            <p
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-semibold mb-3 rounded-full px-3 py-1.5"
              style={{ color: c.color, backgroundColor: `${c.color}1a` }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: c.color }} />
              {c.title || c.fallback}
            </p>
            <ul>
              {c.items.map((item) => (
                <li key={item} className="flex gap-3 py-2.5 text-[14px] leading-[1.7] text-[#3f4242] border-b border-[#f0eeee] last:border-0">
                  <Check tone={c.tone} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      ))}
    </div>
  );
}

export function Steps({ items }) {
  return (
    <FadeUp className="my-9">
      <div className="relative overflow-hidden rounded-3xl bg-[#1c1e1e] px-5 sm:px-9 py-7 sm:py-10">
        <div aria-hidden className="grid-fade absolute inset-0 opacity-30" />
        <div aria-hidden className="pointer-events-none absolute -top-24 -right-16 w-72 h-72 rounded-full bg-[#00a8e8]/[0.10] blur-[90px]" />
        <div className="relative">
          <ScrollTimeline items={items} />
        </div>
      </div>
    </FadeUp>
  );
}

export function Cards({ items }) {
  return (
    <div className={`grid grid-cols-1 ${items.length > 1 ? "sm:grid-cols-2" : ""} gap-3 mt-7`}>
      {items.map((c, i) => {
        const color = COLORS[i % COLORS.length];
        const inner = (
          <SpotlightCard dark={false} className="h-full rounded-2xl bg-white border border-[#e8e6e6] group-hover:border-[#00a8e8]/50 transition-colors duration-500">
            <div className="p-6 flex flex-col gap-3 h-full">
              <div className="flex items-center justify-between">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-medium"
                  style={{ backgroundColor: `${color}1a`, color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {c.tag && <span className="text-[11px] uppercase tracking-[0.1em] text-[#9a9a9a]">{c.tag}</span>}
              </div>
              <p className="text-[15.5px] font-semibold text-[#1c1e1e] leading-snug">{c.title}</p>
              <p className="text-[13.5px] text-[#5f6262] leading-[1.8]">{c.text}</p>
              {c.href && (
                <div className="mt-auto pt-3 flex items-center justify-between">
                  <span className="text-[12px] font-medium text-[#5a5d5d] group-hover:text-[#00a8e8] transition-colors">{c.cta || "Læs mere"}</span>
                  <ArrowBadge size="sm" />
                </div>
              )}
            </div>
          </SpotlightCard>
        );
        return (
          <FadeUp key={c.title} delay={(i % 2) * 0.07}>
            {c.href ? (
              <Link href={c.href} className="group block h-full rounded-2xl">
                {inner}
              </Link>
            ) : (
              <div className="group h-full">{inner}</div>
            )}
          </FadeUp>
        );
      })}
    </div>
  );
}

export function DataTable({ table }) {
  return (
    <>
      <FadeUp className="hidden sm:block overflow-hidden my-7 rounded-2xl border border-[#e8e6e6] bg-white">
        <table className="w-full text-left text-[13.5px]">
          <thead>
            <tr className="bg-[#f3f2f2] border-b border-[#e8e6e6]">
              {table.head.map((h, i) => (
                <th key={h || i} scope="col" className="px-5 py-4 text-[11px] uppercase tracking-[0.1em] font-medium text-[#7a7d7d]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row[0]} className="border-b border-[#f0eeee] last:border-0 transition-colors hover:bg-[#f9fbfc]">
                {row.map((cell, i) => (
                  <td key={i} className={`px-5 py-4 align-top leading-[1.7] ${i === 0 ? "font-semibold text-[#1c1e1e]" : "text-[#5a5d5d]"}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </FadeUp>
      <div className="sm:hidden flex flex-col gap-3 my-6">
        {table.rows.map((row) => (
          <div key={row[0]} className="rounded-2xl bg-white border border-[#e8e6e6] p-5">
            <p className="text-[15px] font-semibold text-[#1c1e1e] mb-3">{row[0]}</p>
            <dl className="flex flex-col gap-2.5">
              {row.slice(1).map((cell, i) => (
                <div key={i} className="flex flex-col">
                  {table.head[i + 1] && <dt className="text-[10.5px] uppercase tracking-[0.1em] text-[#9a9a9a]">{table.head[i + 1]}</dt>}
                  <dd className="text-[13.5px] text-[#555858] leading-[1.65]">{cell}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </>
  );
}

/** Spørgsmål/svar-lister (FAQ-hubben) læses bedre som en rolig liste end som kort. */
const isQA = (subs) => subs.length >= 3 && subs.every((s) => s.h3.trim().endsWith("?") && s.paragraphs?.length === 1 && !s.bullets && !s.cta);

export function Subs({ items }) {
  if (isQA(items)) {
    return (
      <dl className="border-t border-[#e0dede] mt-6">
        {items.map((sub) => (
          <FadeUp key={sub.h3}>
            <div className="py-6 border-b border-[#e0dede]">
              <dt className="text-[16px] font-semibold text-[#1c1e1e] leading-snug mb-2.5">{sub.h3}</dt>
              <dd className="text-[14.5px] text-[#555858] leading-[1.85]">{sub.paragraphs[0]}</dd>
            </div>
          </FadeUp>
        ))}
      </dl>
    );
  }
  return (
    <div className={`grid grid-cols-1 ${items.length > 1 ? "sm:grid-cols-2" : ""} gap-3 mt-7`}>
      {items.map((sub, i) => {
        const color = COLORS[i % COLORS.length];
        return (
          <FadeUp key={sub.h3} delay={(i % 2) * 0.07}>
            <SpotlightCard dark={false} className="h-full rounded-2xl bg-white border border-[#e8e6e6] hover:border-[#cfe9f5] transition-colors duration-500">
              <div className="p-6 sm:p-7 flex flex-col gap-4 h-full">
                <div className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-medium flex-shrink-0"
                    style={{ backgroundColor: `${color}1a`, color }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[15.5px] font-semibold text-[#1c1e1e] leading-snug">{sub.h3}</h3>
                </div>
                {sub.paragraphs?.map((text) => (
                  <p key={text.slice(0, 48)} className="text-[14px] text-[#5a5d5d] leading-[1.8]">
                    {text}
                  </p>
                ))}
                {sub.bullets && <Bullets items={sub.bullets} />}
                {sub.cta && <MoreLink cta={sub.cta} />}
              </div>
            </SpotlightCard>
          </FadeUp>
        );
      })}
    </div>
  );
}

const AUTO = [
  [/pris|koster|betal/i, "price"],
  [/tid|dage|hurtig|forløb|kom i gang/i, "clock"],
  [/google|synlig|søg|seo|fundet/i, "seo"],
  [/book|kalender|bestil/i, "booking"],
  [/chat|\bai\b|automat/i, "chat"],
  [/kontakt|formular|henvendelse/i, "form"],
  [/mobil/i, "phone"],
  [/vedligehold|support|hosting|drift|sikker/i, "uptime"],
  [/ejer|kode|domæne/i, "ownership"],
  [/design|hjemmeside|side/i, "site"],
];
const heavy = (s) => !!(s.steps || s.table || s.compare || s.cards || s.stats || (s.subs && s.subs.length > 2));

/** Vælger en illustration ud fra overskriften, hvis sektionen er let nok til at have en – hver anden sektion. */
export function autoVisual(section, idx) {
  if (section.visual === false) return null;
  if (section.visual) return section.visual;
  if (!section.h2 || heavy(section) || idx % 2 === 1) return null;
  const hit = AUTO.find(([re]) => re.test(section.h2));
  return hit ? hit[1] : null;
}

/** Selve sektionens indhold i en fast, læsevenlig rækkefølge. */
export default function SectionBody({ section, dark = false, idx = 0 }) {
  const vis = autoVisual(section, idx);
  const visual = vis ? (
    <ArticleVisual name={typeof vis === "string" ? vis : vis.name} caption={vis.caption} queries={vis.queries} />
  ) : null;
  const [first, ...rest] = section.paragraphs || [];
  return (
    <>
      {first && (
        <P key={first.slice(0, 48)} dark={dark}>
          {first}
        </P>
      )}
      {visual}
      {rest.map((text) => (
        <P key={text.slice(0, 48)} dark={dark}>
          {text}
        </P>
      ))}
      {section.stats && <Stats items={section.stats} dark={dark} />}
      {section.quote && (
        <blockquote className="relative my-10 px-2 sm:px-6 text-[clamp(18px,2vw,22px)] font-medium text-[#1c1e1e] leading-[1.55] tracking-tight">
          <span aria-hidden className="absolute -top-6 left-0 text-[64px] leading-none text-[#00a8e8]/30 font-serif">“</span>
          {section.quote}
        </blockquote>
      )}
      {section.callout && <Callout data={section.callout} dark={dark} />}
      {section.bullets && <Bullets items={section.bullets} dark={dark} />}
      {section.compare && <Compare data={section.compare} />}
      {section.after?.map((text) => (
        <P key={text.slice(0, 48)} dark={dark}>
          {text}
        </P>
      ))}
      {section.steps && <Steps items={section.steps} />}
      {section.cards && <Cards items={section.cards} />}
      {section.table && <DataTable table={section.table} />}
      {section.subs && <Subs items={section.subs} />}
      {section.callout2 && <Callout data={section.callout2} dark={dark} />}
      {section.cta && <MoreLink cta={section.cta} dark={dark} />}
    </>
  );
}
