"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/**
 * Interaktiv demo: en chatbot, der svarer ud fra en lille "videnbank", og en indbakke, hvor henvendelserne lander.
 * Tre eksempler (frisør, VVS, webshop). Firmaer, priser og tider er opdigtede eksempler.
 */
const presets = [
  {
    id: "salon",
    tab: "Frisør",
    site: "Salon Lys",
    docs: [
      { id: "tider", label: "Åbningstider", text: "Man–fre 9–17 · Lørdag 9–14 · Søndag lukket" },
      { id: "priser", label: "Prisliste", text: "Dameklip fra 495 kr · Herreklip fra 345 kr" },
      { id: "booking", label: "Booking og afbud", text: "Afbud senest 24 timer før" },
    ],
    questions: [
      { q: "Hvad koster en herreklip?", a: "En herreklip koster fra 345 kr, og en dameklip fra 495 kr. Vil du have, at jeg finder en tid til dig?", used: ["priser"] },
      { q: "Har I åbent om lørdagen?", a: "Ja, lørdag har vi åbent kl. 9–14. Søndag er der lukket.", used: ["tider"] },
      {
        q: "Jeg vil gerne have en tid i morgen kl. 10",
        a: "Jeg har ledige tider kl. 10.00 og 11.30 i morgen. Jeg har sendt din forespørgsel til salonen, så får du en bekræftelse.",
        used: ["booking", "tider"],
        lead: { kind: "lead", title: "Ny bookingforespørgsel", rows: [["Ønske", "I morgen kl. 10.00"], ["Navn", "Mette"], ["Telefon", "xx xx xx xx"]] },
      },
      {
        q: "Jeg er utilfreds med min farve",
        a: "Det er jeg ked af at høre. Det skal en af vores frisører tage sig af personligt. Jeg har sendt din besked videre, og salonen kontakter dig hurtigst muligt.",
        used: [],
        lead: { kind: "handoff", title: "Overdraget til et menneske", rows: [["Emne", "Utilfreds med farve"], ["Navn", "Mette"], ["Prioritet", "Ring tilbage"]] },
      },
    ],
  },
  {
    id: "vvs",
    tab: "VVS",
    site: "Hansen VVS",
    docs: [
      { id: "omraade", label: "Serviceområde", text: "Horsens, Brædstrup, Hovedgård og omegn" },
      { id: "udrykning", label: "Udrykning og priser", text: "Udrykning på hverdage fra 695 kr + materialer" },
      { id: "akut", label: "Akutvagt", text: "Akut uden for åbningstid: ring til vagten" },
    ],
    questions: [
      { q: "Kommer I også til Brædstrup?", a: "Ja, vi kører i Horsens, Brædstrup, Hovedgård og omegn.", used: ["omraade"] },
      { q: "Hvad koster en udrykning?", a: "En udrykning på hverdage koster fra 695 kr plus materialer. Uden for åbningstid kan du ringe til vores akutvagt.", used: ["udrykning", "akut"] },
      {
        q: "Jeg vil have tilbud på et nyt badeværelse",
        a: "Gerne! Fortæl mig kort, hvor stort badeværelset er, og hvad du ønsker. Jeg samler det, så får du et tilbud.",
        used: ["omraade"],
        lead: { kind: "lead", title: "Ny tilbudsforespørgsel", rows: [["Opgave", "Nyt badeværelse"], ["Navn", "Jens"], ["By", "Horsens"]] },
      },
      {
        q: "Mit toilet løber, og det vælter ud!",
        a: "Luk straks for vandet ved stophanen. Det er en akut opgave – jeg giver besked til vagten, som ringer til dig med det samme.",
        used: ["akut"],
        lead: { kind: "handoff", title: "Akut – overdraget til vagten", rows: [["Problem", "Løbende toilet"], ["Navn", "Jens"], ["Prioritet", "Akut"]] },
      },
    ],
  },
  {
    id: "shop",
    tab: "Webshop",
    site: "Nordisk Ler",
    docs: [
      { id: "levering", label: "Levering", text: "1–3 hverdage · Gratis over 499 kr" },
      { id: "retur", label: "Returnering", text: "30 dages returret" },
      { id: "pleje", label: "Pleje af keramik", text: "Tåler opvaskemaskine" },
    ],
    questions: [
      { q: "Hvornår får jeg min ordre?", a: "Vi leverer inden for 1–3 hverdage, og forsendelsen er gratis, når du handler for over 499 kr.", used: ["levering"] },
      { q: "Kan jeg returnere en vare?", a: "Ja, du har 30 dages returret. Du kan starte en returnering på siden ‘Returnering’.", used: ["retur"] },
      { q: "Tåler kopperne opvaskemaskine?", a: "Ja, kopperne tåler opvaskemaskine.", used: ["pleje"] },
      {
        q: "Min pakke er ikke kommet frem",
        a: "Det er ikke rart. Det skal vi have undersøgt. Jeg har sendt dit ordrenummer videre til kundeservice, som vender tilbage.",
        used: ["levering"],
        lead: { kind: "handoff", title: "Overdraget til kundeservice", rows: [["Emne", "Pakke ikke modtaget"], ["Ordre", "#1042"], ["Prioritet", "Hurtigt svar"]] },
      },
    ],
  },
];

function Dots() {
  return (
    <span className="inline-flex items-center gap-1 px-1 py-1" aria-label="Skriver">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[#8a9696]"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.16 }}
        />
      ))}
    </span>
  );
}

export default function ChatStudio() {
  const reduce = useReducedMotion();
  const [pi, setPi] = useState(0);
  const p = presets[pi];
  const [msgs, setMsgs] = useState([]);
  const [busy, setBusy] = useState(false);
  const [asked, setAsked] = useState({});
  const [used, setUsed] = useState([]);
  const [inbox, setInbox] = useState([]);
  const timer = useRef(null);
  const box = useRef(null);

  const reset = (i) => {
    clearTimeout(timer.current);
    setPi(i);
    setMsgs([]);
    setAsked({});
    setUsed([]);
    setInbox([]);
    setBusy(false);
  };

  useEffect(() => () => clearTimeout(timer.current), []);
  // Rul kun i selve chatten – ikke hele siden
  useEffect(() => {
    if (box.current) box.current.scrollTo({ top: box.current.scrollHeight, behavior: reduce ? "auto" : "smooth" });
  }, [msgs, busy, reduce]);

  const ask = (i) => {
    if (busy) return;
    const q = p.questions[i];
    setAsked((a) => ({ ...a, [i]: true }));
    setMsgs((m) => [...m, { who: "me", text: q.q }]);
    setBusy(true);
    setUsed([]);
    timer.current = setTimeout(() => {
      setMsgs((m) => [...m, { who: "bot", text: q.a, lead: q.lead }]);
      setUsed(q.used);
      if (q.lead) setInbox((x) => [q.lead, ...x].slice(0, 2));
      setBusy(false);
    }, reduce ? 150 : 1100);
  };

  const left = p.questions.map((q, i) => ({ ...q, i })).filter((q) => !asked[q.i]);

  return (
    <div className="rounded-3xl bg-[#242828] border border-white/10 overflow-hidden text-left shadow-[0_40px_90px_-30px_rgba(0,0,0,0.7)]">
      {/* browserfaner = eksempler */}
      <div className="flex items-end gap-1 px-3 pt-3 bg-[#1f2222] border-b border-white/10 overflow-x-auto" role="tablist" aria-label="Vælg eksempel">
        {presets.map((x, i) => (
          <button
            key={x.id}
            role="tab"
            aria-selected={i === pi}
            onClick={() => reset(i)}
            className={`shrink-0 rounded-t-xl px-5 py-2.5 text-[13.5px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00a8e8] ${
              i === pi ? "bg-[#242828] text-white" : "text-[#8a9696] hover:text-white"
            }`}
          >
            {x.tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr]">
        {/* Hjemmeside + chat */}
        <div className="relative bg-[#eef0f0] lg:min-h-[560px] p-3 sm:p-5">
          {/* skeleton af en hjemmeside bag chatten */}
          <div aria-hidden className="hidden lg:block absolute inset-5 rounded-2xl bg-white overflow-hidden">
            <div className="h-11 border-b border-[#ececec] flex items-center justify-between px-5">
              <span className="text-[14px] font-semibold text-[#1c1e1e]">{p.site}</span>
              <span className="flex gap-4">{[0, 1, 2].map((i) => <span key={i} className="h-2 w-12 rounded-full bg-[#e2e0e0]" />)}</span>
            </div>
            <div className="p-6 flex flex-col gap-3">
              <span className="h-4 w-2/5 rounded-full bg-[#d6d4d4]" />
              <span className="h-2.5 w-3/5 rounded-full bg-[#e8e6e6]" />
              <span className="h-2.5 w-1/2 rounded-full bg-[#e8e6e6]" />
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[0, 1, 2].map((i) => <span key={i} className="h-24 rounded-xl bg-[#f1f0f0]" />)}
              </div>
            </div>
          </div>

          {/* chatvindue */}
          <div className="relative lg:absolute lg:right-9 lg:bottom-9 lg:w-[380px] h-[500px] lg:h-[480px] max-w-full ml-auto rounded-2xl bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)] border border-[#e2e0e0] flex flex-col overflow-hidden">
            <div className="px-4 py-3.5 bg-[#1c1e1e] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#28c840]" aria-hidden />
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-semibold text-white leading-none truncate">{p.site}</p>
                <p className="text-[11.5px] text-[#8a9696] mt-1">Svarer med det samme</p>
              </div>
              <span className="text-[10.5px] font-semibold px-2 py-0.5 rounded-full bg-[#00a8e8] text-white">AI</span>
            </div>

            <div ref={box} className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-[#f7f6f6]" aria-live="polite">
              <div className="self-start max-w-[88%] rounded-2xl rounded-tl-md bg-white border border-[#e8e6e6] px-3.5 py-2.5 text-[14px] text-[#1c1e1e] leading-snug">
                Hej! Jeg er AI-assistenten for {p.site}. Vælg et spørgsmål nedenfor, og se hvordan jeg svarer.
              </div>
              <AnimatePresence initial={false}>
                {msgs.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: reduce ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-[14px] leading-snug ${
                      m.who === "me"
                        ? "self-end rounded-br-md bg-[#00a8e8] text-white"
                        : "self-start rounded-tl-md bg-white border border-[#e8e6e6] text-[#1c1e1e]"
                    }`}
                  >
                    {m.text}
                    {m.lead && (
                      <span className={`mt-2 block rounded-lg px-2.5 py-1.5 text-[12px] font-semibold ${m.lead.kind === "handoff" ? "bg-[#fff3d6] text-[#7a5200]" : "bg-[#dff3fb] text-[#006a96]"}`}>
                        {m.lead.kind === "handoff" ? "↗ Overdraget til et menneske" : "✓ Sendt videre til virksomheden"}
                      </span>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              {busy && (
                <div className="self-start rounded-2xl rounded-tl-md bg-white border border-[#e8e6e6] px-3 py-2">
                  <Dots />
                </div>
              )}
            </div>

            <div className="px-3 pt-3 pb-3 bg-white border-t border-[#ececec]">
              <div className="flex flex-wrap gap-2 min-h-[44px]">
                {left.length ? (
                  left.map((q) => (
                    <button
                      key={q.i}
                      onClick={() => ask(q.i)}
                      disabled={busy}
                      className="rounded-full border border-[#00a8e8]/50 text-[#006a96] bg-white px-3 py-1.5 text-[12.5px] font-semibold text-left hover:bg-[#00a8e8]/10 disabled:opacity-40 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00a8e8]"
                    >
                      {q.q}
                    </button>
                  ))
                ) : (
                  <button onClick={() => reset(pi)} className="rounded-full bg-[#1c1e1e] text-white px-4 py-1.5 text-[12.5px] font-semibold">
                    Prøv forfra
                  </button>
                )}
              </div>
              <p className="mt-2 text-[11px] text-[#8a8a8a] leading-snug">Du taler med en AI-assistent. Eksempel – firma, priser og tider er opdigtede.</p>
            </div>
          </div>
        </div>

        {/* Videnbank + indbakke */}
        <div className="p-5 sm:p-7 flex flex-col gap-7 border-t lg:border-t-0 lg:border-l border-white/10">
          <div>
            <p className="text-[13px] font-semibold text-[#00a8e8] mb-3">Det ved chatbotten</p>
            <p className="text-[13.5px] text-[#8a9696] leading-snug mb-4">Den svarer kun ud fra dine egne oplysninger.</p>
            <ul className="flex flex-col gap-2.5">
              {p.docs.map((d) => {
                const on = used.includes(d.id);
                return (
                  <li
                    key={d.id}
                    className={`rounded-xl border px-4 py-3 transition-colors duration-300 ${
                      on ? "border-[#00a8e8] bg-[#00a8e8]/10" : "border-white/10 bg-[#1c1e1e]"
                    }`}
                  >
                    <p className="text-[14px] font-semibold text-white flex items-center gap-2">
                      <span aria-hidden className={`w-1.5 h-1.5 rounded-full ${on ? "bg-[#00a8e8]" : "bg-[#3a4040]"}`} />
                      {d.label}
                      {on && <span className="ml-auto text-[11px] font-semibold text-[#8fd8f6]">brugt nu</span>}
                    </p>
                    <p className="text-[12.5px] text-[#8a9696] mt-1 leading-snug">{d.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-auto">
            <p className="text-[13px] font-semibold text-[#00a8e8] mb-3">Din indbakke</p>
            {inbox.length === 0 ? (
              <p className="rounded-xl border border-dashed border-white/15 px-4 py-5 text-[13px] text-[#8a9696] leading-snug">
                Henvendelser og overdragelser lander her – og på din mail.
              </p>
            ) : (
              <div className="flex flex-col gap-2.5">
                <AnimatePresence initial={false}>
                  {inbox.map((l, i) => (
                    <motion.div
                      key={l.title + i}
                      initial={{ opacity: 0, y: reduce ? 0 : -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl bg-white text-[#1c1e1e] px-4 py-3"
                    >
                      <p className={`text-[12px] font-semibold mb-1.5 ${l.kind === "handoff" ? "text-[#a86a00]" : "text-[#007aab]"}`}>{l.title}</p>
                      <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-[12.5px]">
                        {l.rows.map(([k, v]) => (
                          <div key={k} className="contents">
                            <dt className="text-[#8a8a8a]">{k}</dt>
                            <dd className="font-medium">{v}</dd>
                          </div>
                        ))}
                      </dl>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
