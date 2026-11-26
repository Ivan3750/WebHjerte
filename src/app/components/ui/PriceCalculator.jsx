"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { supportPlans } from "../../data/supportPlans";
import useFormToken from "./useFormToken";

// Kun WebHjertes faste, offentliggjorte priser (inkl. moms) – ingen opfundne tillæg
const PACKAGES = [
  { id: "landing", name: "Landingside", price: 2500, from: false, desc: "1 side · klar på ca. 2 dage" },
  { id: "basis", name: "Basis", price: 4500, from: false, desc: "3–5 sider · klar på ca. 5 dage" },
  { id: "standard", name: "Standard", price: 8500, from: false, desc: "Op til 8 sider · SEO, booking, analytics" },
  { id: "lokal", name: "Lokal synlighed", price: 9500, from: true, desc: "Standard + Google-profil, lokal SEO, anmeldelser" },
  { id: "custom", name: "Webshop / skræddersyet", price: 14000, from: true, desc: "Webshop, kundeportal, AI-chatbot m.m." },
];

const SUPPORT = [
  { id: "none", name: "Ingen aftale", monthly: 0 },
  ...supportPlans.map((x) => ({ id: x.id, name: `Vedligehold ${x.name}`, monthly: x.price })),
];

// AI SEO-pakker (samme priser som på /ai-seo), engangsbeløb
const ADDONS = [
  { id: "none", name: "Ingen", price: 0, desc: "Basic SEO er med i alle pakker" },
  { id: "aiseo-basis", name: "AI SEO Basis", price: 3500, desc: "Søgeord, 10 indholdselementer, Google-profil" },
  { id: "aiseo-standard", name: "AI SEO Standard", price: 6500, desc: "Alt i Basis + konkurrentanalyse og rapport" },
];

const DOMAIN_PER_YEAR = 150; // typisk .dk-domæne

const fmt = (n) => n.toLocaleString("da-DK");

/** Lille tegning af, hvor stor siden er – så man kan se forskellen uden at læse. */
function PackageArt({ id, active }) {
  const pages = { landing: 1, basis: 3, standard: 5, lokal: 5, custom: 6 }[id] || 1;
  const stroke = active ? "#00a8e8" : "#9aa5a5";
  return (
    <svg viewBox="0 0 64 40" width="64" height="40" fill="none" aria-hidden className="shrink-0">
      {Array.from({ length: pages }).map((_, i) => {
        const w = pages === 1 ? 20 : pages <= 3 ? 14 : 10;
        const x = pages === 1 ? 22 : 4 + (i * (46 - w)) / Math.max(pages - 1, 1);
        return (
          <g key={i}>
            <rect x={x} y={pages === 1 ? 4 : 8 - (i % 2) * 4} width={w} height={pages === 1 ? 32 : 26} rx="3" fill={active ? "rgba(0,168,232,0.10)" : "rgba(154,165,165,0.10)"} stroke={stroke} strokeWidth="1.4" />
            <path d={`M${x + 3} ${pages === 1 ? 11 : 15 - (i % 2) * 4}h${w - 6}M${x + 3} ${pages === 1 ? 16 : 20 - (i % 2) * 4}h${w - 10}`} stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
          </g>
        );
      })}
      {id === "lokal" && <path d="M54 6a5 5 0 0 1 5 5c0 4-5 9-5 9s-5-5-5-9a5 5 0 0 1 5-5z" fill="#00a8e8" />}
      {id === "custom" && <path d="M48 28h4l1.5 6h8l1.5-9H51" stroke="#00a8e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}
    </svg>
  );
}

export default function PriceCalculator({ dark = false }) {
  const loadToken = useFormToken();
  const [pkg, setPkg] = useState("basis");
    const [support, setSupport] = useState("standard");
  const [form, setForm] = useState({ name: "", contact: "", website: "" });
  const [status, setStatus] = useState("idle");

  const [addon, setAddon] = useState("none");
  const p = PACKAGES.find((x) => x.id === pkg);
  const s = SUPPORT.find((x) => x.id === support);
  const a = ADDONS.find((x) => x.id === addon);
  const firstYear = p.price + a.price + s.monthly * 12 + DOMAIN_PER_YEAR;

  const estimate = `${p.name}${p.from ? " (fra)" : ""} ${fmt(p.price)} kr${a.price ? ` · ${a.name} ${fmt(a.price)} kr` : ""} · ${s.name}${
    s.monthly ? ` ${s.monthly} kr/md` : ""
  } · 1. år ca. ${fmt(firstYear)} kr inkl. moms`;

  const track = (event, extra = {}) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...extra });
  };

  const submit = async (e) => {
    e.preventDefault();
    const contact = form.contact.trim();
    const isEmail = contact.includes("@");
    setStatus("loading");
    try {
      const token = await loadToken();
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          name: form.name,
          email: isEmail ? contact : "",
          phone: isEmail ? "" : contact,
          website: form.website,
          pakke: `Prisberegner: ${p.name}`,
          message: `Prisberegner – ${estimate}`,
        }),
      });
      if (res.ok) {
        track("price_calculator_lead", { pakke: p.name, value: p.price });
        setStatus("success");
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const c = dark
    ? { wrap: "bg-[#242828] border-white/10", text: "text-white", muted: "text-[#b4bdbd]", card: "border-white/10 bg-[#1c1e1e]", input: "bg-[#1c1e1e] border-white/10 text-white placeholder:text-[#8a9696]" }
    : { wrap: "bg-white border-[#e8e6e6]", text: "text-[#1c1e1e]", muted: "text-[#666]", card: "border-[#e8e6e6] bg-[#fbfafa]", input: "bg-white border-[#e0dede] text-[#1c1e1e] placeholder:text-[#8a8a8a]" };

  const option = (active) =>
    `text-left rounded-2xl border px-4 py-3.5 transition-all duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00a8e8] ${
      active ? "border-transparent bg-[#00a8e8]/[0.12]" : c.card + ""
    }`;

  // Hvor går pengene hen første år? (til søjlen)
  const parts = [
    { key: "site", label: "Hjemmesiden (én gang)", value: p.price, color: "#00a8e8" },
    { key: "addon", label: "AI SEO (én gang)", value: a.price, color: "#8a8ff0" },
    { key: "care", label: "Vedligeholdelse (12 mdr.)", value: s.monthly * 12, color: "#3ddc97" },
    { key: "domain", label: "Domæne (pr. år)", value: DOMAIN_PER_YEAR, color: "#f0a63a" },
  ].filter((x) => x.value > 0);

  const legend = `text-[16px] font-semibold ${c.text} mb-4`;
  return (
    <div id="prisberegner" className={`scroll-mt-24 rounded-3xl border ${c.wrap} p-5 sm:p-8 lg:p-10`}>
      <h2 className={`${dark ? "text-white" : "text-[#1c1e1e]"} font-semibold tracking-tight text-[clamp(26px,3vw,40px)] leading-[1.15] mb-3`}>
        Beregn prisen på din hjemmeside
      </h2>
      <p className={`text-[16px] ${c.muted} leading-[1.75] mb-10 max-w-[60ch]`}>
        Vælg pakke, tilvalg og hjælp efter lancering – så ser du med det samme, hvad første år koster. Alle priser er inkl. moms.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-start">
      <div>
      <fieldset className="mb-9">
        <legend className={legend}>Hvor stor skal siden være?</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PACKAGES.map((x) => (
            <button type="button" key={x.id} aria-pressed={pkg === x.id} onClick={() => { setPkg(x.id); track("price_calculator_change", { field: "pakke", value: x.id }); }} className={option(pkg === x.id)}>
              <span className="flex items-center gap-3">
                <PackageArt id={x.id} active={pkg === x.id} />
                <span className="min-w-0">
                  <span className={`block text-[15px] font-semibold ${c.text}`}>{x.name}</span>
                  <span className={`block text-[14px] font-medium ${pkg === x.id ? "text-[#00a8e8]" : c.muted}`}>{x.from ? "fra " : ""}{fmt(x.price)} kr</span>
                </span>
              </span>
              <span className={`block text-[13px] ${c.muted} mt-2.5 leading-snug`}>{x.desc}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mb-9">
        <legend className={legend}>Vil du også findes bedre på Google og i AI?</legend>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {ADDONS.map((x) => (
            <button type="button" key={x.id} aria-pressed={addon === x.id} onClick={() => { setAddon(x.id); track("price_calculator_change", { field: "tilvalg", value: x.id }); }} className={option(addon === x.id)}>
              <span className={`block text-[14.5px] font-semibold ${c.text}`}>{x.name}</span>
              <span className={`block text-[13.5px] ${addon === x.id ? "text-[#00a8e8]" : c.muted} mt-1`}>{x.price ? `${fmt(x.price)} kr` : "0 kr"}</span>
              <span className={`block text-[12.5px] ${c.muted} mt-2 leading-snug`}>{x.desc}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mb-2">
        <legend className={legend}>Vil du have hjælp, når siden er live?</legend>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {SUPPORT.map((x) => (
            <button type="button" key={x.id} aria-pressed={support === x.id} onClick={() => setSupport(x.id)} className={option(support === x.id)}>
              <span className={`block text-[14px] font-semibold ${c.text}`}>{x.name.replace("Vedligehold ", "")}</span>
              <span className={`block text-[13px] ${support === x.id ? "text-[#00a8e8]" : c.muted} mt-1`}>{x.monthly ? `${x.monthly} kr/md` : "Kun ved behov"}</span>
            </button>
          ))}
        </div>
      </fieldset>
      </div>

      <div className="lg:sticky lg:top-28">
      <div aria-live="polite" className="rounded-3xl bg-[#1c1e1e] text-white p-5 sm:p-8 mb-6">
        <p className="text-[13px] text-[#b4bdbd]">Første år i alt, ca.</p>
        <p className="text-[clamp(34px,5vw,52px)] font-semibold leading-none tracking-tight mt-2 text-white">
          {p.from ? <span className="text-[16px] font-normal text-[#b4bdbd] mr-2">fra</span> : null}
          {fmt(firstYear)} <span className="text-[20px] font-normal text-[#b4bdbd]">kr</span>
        </p>

        {/* Søjle: hvor pengene går hen */}
        <div className="mt-7 flex h-4 w-full overflow-hidden rounded-full bg-white/[0.06]" role="img" aria-label={`Fordeling af prisen: ${parts.map((x) => `${x.label} ${fmt(x.value)} kr`).join(", ")}`}>
          {parts.map((x) => (
            <motion.div
              key={x.key}
              className="h-full"
              style={{ backgroundColor: x.color }}
              initial={false}
              animate={{ width: `${(x.value / firstYear) * 100}%` }}
              transition={{ type: "spring", stiffness: 140, damping: 22 }}
            />
          ))}
        </div>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
          {parts.map((x) => (
            <li key={x.key} className="flex items-start gap-2.5">
              <span className="mt-1.5 w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: x.color }} />
              <span className="text-[12.5px] text-[#b4bdbd] leading-snug">
                {x.label}
                <span className="block text-[15px] font-semibold text-white mt-0.5">{fmt(x.value)} kr</span>
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-6 pt-5 border-t border-white/10 text-[15px] text-[#b4bdbd] leading-[1.7]">
          Du betaler <strong className="text-white font-semibold">{p.from ? "fra " : ""}{fmt(p.price + a.price)} kr én gang</strong> for hjemmesiden{a.price ? ` og ${a.name}` : ""}
          {s.monthly ? <> – og derefter <strong className="text-white font-semibold">{s.monthly} kr om måneden</strong>, så længe du vil have hjælp.</> : <>. Uden vedligeholdelse betaler du kun for domænet, og kan altid tilkøbe hjælp senere.</>}
          {" "}Alle beløb er inkl. moms, og første designudkast kommer på 48 timer – 0 kr, hvis det ikke passer.
        </p>
      </div>

      {status === "success" ? (
        <p className={`text-[14px] ${c.text} rounded-2xl bg-[#00a8e8]/[0.06] px-5 py-4`}>
          Tak! Jeg vender tilbage med et fast tilbud inden for 24 timer.
        </p>
      ) : (
        <form onSubmit={submit} onFocus={loadToken} className="grid grid-cols-1 gap-2.5">
          <input
            name="name"
            autoComplete="name"
            aria-label="Dit navn"
            placeholder="Dit navn"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className={`w-full text-[13px] border rounded-xl px-4 py-3 outline-none focus:border-[#00a8e8] ${c.input}`}
          />
          <input
            name="contact"
            required
            aria-label="Telefon eller e-mail"
            placeholder="Telefon eller e-mail"
            value={form.contact}
            onChange={(e) => setForm((f) => ({ ...f, contact: e.target.value }))}
            className={`w-full text-[13px] border rounded-xl px-4 py-3 outline-none focus:border-[#00a8e8] ${c.input}`}
          />
          <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))} className="hidden" />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary"
          >
            {status === "loading" ? "Sender..." : "Få fast tilbud"}
          </button>
          {status === "error" && (
            <p className="text-[12px] text-red-500">Noget gik galt. Prøv igen eller ring på +45 42 76 05 77.</p>
          )}
          <p className={`text-[12.5px] ${c.muted}`}>Gratis og uforpligtende. Ingen spam – kun dit tilbud.</p>
        </form>
      )}
      </div>
      </div>
    </div>
  );
}
