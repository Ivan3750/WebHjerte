"use client";

import { useState } from "react";

const fieldClass =
  "w-full bg-white text-[14px] text-[#3a3a3a] placeholder:text-[#777] border border-[#e8e8e8] rounded-xl px-4 py-3.5 outline-none focus:border-[#00a8e8] transition-colors";

export default function AnalyseForm() {
  const [form, setForm] = useState({ url: "", email: "", website: "" });
  const [status, setStatus] = useState("idle");

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          website: form.website, // honeypot
          pakke: "Gratis analyse",
          message: `Hjemmeside til analyse: ${form.url}`,
        }),
      });

      if (res.ok) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "gratis_analyse_success" });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center py-6 gap-3" role="status">
        <div className="w-11 h-11 rounded-full bg-[#1a2a30] border border-[#0a5a7a] flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M4 9l3.5 3.5 6.5-7" stroke="#00a8e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-[16px] font-medium text-white">Tak! Jeg er i gang.</p>
        <p className="text-[13px] text-[#8a8a8a]">
          Du hører fra mig på e-mail inden for 24 timer.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3" aria-live="polite">
      <input
        name="url"
        type="text"
        inputMode="url"
        required
        autoComplete="url"
        aria-label="Din hjemmeside"
        placeholder="Din hjemmeside, fx firma.dk"
        value={form.url}
        onChange={set("url")}
        className={fieldClass}
      />
      <input
        name="email"
        type="email"
        required
        autoComplete="email"
        aria-label="Din e-mail"
        placeholder="Din e-mail"
        value={form.email}
        onChange={set("email")}
        className={fieldClass}
      />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={form.website}
        onChange={set("website")}
        className="hidden"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-[#00a8e8] hover:opacity-85 disabled:opacity-50 transition-opacity text-[#111313] text-[14px] font-medium px-5 py-3.5 rounded-xl w-full"
      >
        {status === "loading" ? "Sender..." : "Få min gratis analyse"}
      </button>

      {status === "error" && (
        <p className="text-[12px] text-red-400 text-center" role="alert">
          Noget gik galt. Prøv igen eller skriv til{" "}
          <a href="mailto:hej@webhjerte.dk" className="underline">
            hej@webhjerte.dk
          </a>
        </p>
      )}

      <p className="text-[11px] text-[#7a7a7a] text-center mt-1">
        Ingen spam. Ingen binding.{" "}
        <span className="text-[#00a8e8]">Svar inden for 24 timer.</span>
      </p>
    </form>
  );
}
