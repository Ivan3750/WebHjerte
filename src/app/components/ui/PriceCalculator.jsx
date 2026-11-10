"use client";

import { useState } from "react";

// Kun WebHjertes faste, offentliggjorte priser (ekskl. moms) – ingen opfundne tillæg
const PACKAGES = [
  { id: "landing", name: "Landingside", price: 2500, from: false, desc: "1 side · klar på ca. 2 dage" },
  { id: "basis", name: "Basis", price: 4500, from: false, desc: "3–5 sider · klar på ca. 5 dage" },
  { id: "standard", name: "Standard", price: 7500, from: false, desc: "Op til 8 sider · SEO, booking, analytics" },
  { id: "custom", name: "Webshop / skræddersyet", price: 14000, from: true, desc: "Webshop, kundeportal, AI-chatbot m.m." },
];

const PLATFORMS = [
  { id: "kode", name: "Kodet (Next.js)", desc: "Hurtigst og billigst at drive" },
  { id: "wordpress", name: "WordPress", desc: "Du redigerer selv" },
  { id: "shopify", name: "Shopify", desc: "Til webshops" },
  { id: "ved-ikke", name: "Ved ikke", desc: "Jeg anbefaler det rigtige" },
];

const SUPPORT = [
  { id: "none", name: "Ingen aftale", monthly: 0 },
  { id: "basic", name: "Vedligeholdelse", monthly: 195 },
  { id: "plus", name: "Vedligeholdelse+", monthly: 395 },
];

const DOMAIN_PER_YEAR = 150; // typisk .dk-domæne

const fmt = (n) => n.toLocaleString("da-DK");

export default function PriceCalculator({ dark = false }) {
  const [pkg, setPkg] = useState("basis");
  const [platform, setPlatform] = useState("ved-ikke");
  const [support, setSupport] = useState("basic");
  const [form, setForm] = useState({ name: "", contact: "", website: "" });
  const [status, setStatus] = useState("idle");

  const p = PACKAGES.find((x) => x.id === pkg);
  const s = SUPPORT.find((x) => x.id === support);
  const pl = PLATFORMS.find((x) => x.id === platform);
  const firstYear = p.price + s.monthly * 12 + DOMAIN_PER_YEAR;

  const estimate = `${p.name}${p.from ? " (fra)" : ""} ${fmt(p.price)} kr · Platform: ${pl.name} · ${s.name}${
    s.monthly ? ` ${s.monthly} kr/md` : ""
  } · 1. år ca. ${fmt(firstYear)} kr ekskl. moms`;

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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
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
    ? { wrap: "bg-[#242828] border-white/10", text: "text-white", muted: "text-[#9aa5a5]", card: "border-white/10 bg-[#1c1e1e]", input: "bg-[#1c1e1e] border-white/10 text-white placeholder:text-[#6a7575]" }
    : { wrap: "bg-white border-[#e8e6e6]", text: "text-[#1c1e1e]", muted: "text-[#666]", card: "border-[#e8e6e6] bg-[#fbfafa]", input: "bg-white border-[#e0dede] text-[#1c1e1e] placeholder:text-[#8a8a8a]" };

  const option = (active) =>
    `text-left rounded-xl border px-4 py-3 transition-colors cursor-pointer ${
      active ? "border-[#00a8e8] ring-1 ring-[#00a8e8] bg-[#00a8e8]/[0.06]" : c.card + " hover:border-[#00a8e8]/50"
    }`;

  return (
    <div id="prisberegner" className={`scroll-mt-24 rounded-2xl border ${c.wrap} p-5 sm:p-8`}>
      <p className="text-[11px] uppercase tracking-[0.1em] text-[#8a8a8a] mb-3">Prisberegner</p>
      <h2 className={`${dark ? "text-white" : "text-[#1c1e1e]"} font-semibold tracking-tight text-[clamp(22px,2.6vw,30px)] leading-[1.2] mb-3`}>
        Beregn prisen på din hjemmeside
      </h2>
      <p className={`text-[13px] ${c.muted} leading-[1.8] mb-7`}>
        Vælg det, der passer bedst. Du ser prisen med det samme – og kan få et præcist, fast tilbud inden for 24 timer.
      </p>

      <fieldset className="mb-6">
        <legend className={`text-[13px] font-medium ${c.text} mb-3`}>1. Hvor stor skal siden være?</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {PACKAGES.map((x) => (
            <button type="button" key={x.id} aria-pressed={pkg === x.id} onClick={() => { setPkg(x.id); track("price_calculator_change", { field: "pakke", value: x.id }); }} className={option(pkg === x.id)}>
              <span className={`flex justify-between gap-3 text-[14px] font-medium ${c.text}`}>
                {x.name}
                <span className="whitespace-nowrap">{x.from ? "fra " : ""}{fmt(x.price)} kr</span>
              </span>
              <span className={`block text-[12px] ${c.muted} mt-1`}>{x.desc}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mb-6">
        <legend className={`text-[13px] font-medium ${c.text} mb-3`}>2. Hvilken platform?</legend>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
          {PLATFORMS.map((x) => (
            <button type="button" key={x.id} aria-pressed={platform === x.id} onClick={() => setPlatform(x.id)} className={option(platform === x.id)}>
              <span className={`block text-[13px] font-medium ${c.text}`}>{x.name}</span>
              <span className={`block text-[12px] ${c.muted} mt-1 leading-snug`}>{x.desc}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mb-7">
        <legend className={`text-[13px] font-medium ${c.text} mb-3`}>3. Hjælp efter lancering?</legend>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {SUPPORT.map((x) => (
            <button type="button" key={x.id} aria-pressed={support === x.id} onClick={() => setSupport(x.id)} className={option(support === x.id)}>
              <span className={`block text-[13px] font-medium ${c.text}`}>{x.name}</span>
              <span className={`block text-[12px] ${c.muted} mt-1`}>{x.monthly ? `${x.monthly} kr/md` : "Betal kun ved behov"}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <div aria-live="polite" className="rounded-2xl bg-[#1c1e1e] text-white p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.12em] text-[#8a9595]">Engangspris</p>
          <p className="text-[24px] font-semibold mt-1">{p.from ? "fra " : ""}{fmt(p.price)} kr</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.12em] text-[#8a9595]">Løbende</p>
          <p className="text-[24px] font-semibold mt-1">{s.monthly ? `${s.monthly} kr/md` : "0 kr/md"}</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.12em] text-[#8a9595]">1. år i alt ca.</p>
          <p className="text-[24px] font-semibold mt-1 text-[#00a8e8]">{p.from ? "fra " : ""}{fmt(firstYear)} kr</p>
        </div>
        <p className="sm:col-span-3 text-[12.5px] text-[#8a9595] leading-relaxed">
          Alle beløb ekskl. moms. 1. år inkluderer et typisk .dk-domæne (ca. {DOMAIN_PER_YEAR} kr). Første designudkast på 48 timer – 0 kr, hvis det ikke passer.
        </p>
      </div>

      {status === "success" ? (
        <p className={`text-[14px] ${c.text} rounded-2xl border border-[#00a8e8]/40 bg-[#00a8e8]/[0.06] px-5 py-4`}>
          Tak! Jeg vender tilbage med et fast tilbud inden for 24 timer.
        </p>
      ) : (
        <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-2.5">
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
            className="bg-[#00a8e8] hover:opacity-90 disabled:opacity-50 transition-opacity text-[#1c1e1e] text-[13px] font-semibold px-6 py-3 rounded-xl whitespace-nowrap"
          >
            {status === "loading" ? "Sender..." : "Få fast tilbud"}
          </button>
          {status === "error" && (
            <p className="sm:col-span-3 text-[12px] text-red-500">Noget gik galt. Prøv igen eller ring på +45 42 76 05 77.</p>
          )}
          <p className={`sm:col-span-3 text-[12.5px] ${c.muted}`}>Gratis og uforpligtende. Ingen spam – kun dit tilbud.</p>
        </form>
      )}
    </div>
  );
}
