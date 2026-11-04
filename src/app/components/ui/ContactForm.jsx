"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const packages = [
  { value: "", label: "Vælg pakke (valgfrit)" },
  { value: "Ved ikke endnu", label: "Ved ikke endnu" },
  { value: "landingside", label: "Landingside – 2.500 DKK" },
  { value: "basis", label: "Basis – 4.500 DKK" },
  { value: "standard", label: "Standard – 7.500 DKK" },
  { value: "skraeddersyet", label: "Skræddersyet – fra 14.000 DKK" },
];

const fieldClass =
  "w-full bg-[#1c1e1e] text-[14px] text-white placeholder:text-[#7a8787] border border-white/10 rounded-xl px-4 py-3.5 outline-none transition-colors focus:border-[#00a8e8] focus-visible:ring-2 focus-visible:ring-[#00a8e8]/30";

const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block text-[12px] text-[#8795a0] mb-1.5">
    {children}
  </label>
);

const ContactForm = () => {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({ name: "", email: "", phone: "", pakke: "", message: "", website: "" });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const pakke = searchParams.get("pakke") ?? "";
    if (pakke && packages.some((p) => p.value === pakke)) setForm((f) => ({ ...f, pakke }));
  }, [searchParams]);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "contact_form_success" });
        setStatus("success");
      } else {
        setStatus(res.status === 429 ? "ratelimit" : "error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-center justify-center text-center py-14 gap-4">
        <div className="w-14 h-14 rounded-full bg-[#00a8e8]/10 border border-[#00a8e8]/40 flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 18 18" fill="none" aria-hidden>
            <path d="M4 9l3.5 3.5 6.5-7" stroke="#00a8e8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-[20px] font-semibold text-white">Tak for din besked</p>
        <p className="text-[14px] text-[#93a0a0] max-w-[32ch]">Jeg vender tilbage inden for 24 timer.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate={false}>
      <div>
        <p className="text-[18px] font-semibold text-white tracking-tight">Send en besked</p>
        <p className="text-[12px] text-[#7f8c8c] mt-1">Felter med * skal udfyldes.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="cf-name">Dit navn *</Label>
          <input id="cf-name" name="name" type="text" autoComplete="name" required placeholder="Fornavn Efternavn" value={form.name} onChange={set("name")} className={fieldClass} />
        </div>
        <div>
          <Label htmlFor="cf-email">Din e-mail *</Label>
          <input id="cf-email" name="email" type="email" autoComplete="email" inputMode="email" required placeholder="navn@firma.dk" value={form.email} onChange={set("email")} className={fieldClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="cf-phone">Telefon (valgfrit)</Label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+45 12 34 56 78" value={form.phone} onChange={set("phone")} className={fieldClass} />
        </div>
        <div>
          <Label htmlFor="cf-pakke">Pakke</Label>
          <select id="cf-pakke" name="pakke" value={form.pakke} onChange={set("pakke")} className={fieldClass}>
            {packages.map(({ value, label }) => (
              <option key={value} value={value} className="bg-[#1c1e1e]">
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="cf-message">Hvad handler det om?</Label>
        <textarea id="cf-message" name="message" placeholder="Fortæl kort om din virksomhed og hvad du har brug for" rows={5} value={form.message} onChange={set("message")} className={`${fieldClass} resize-none`} />
      </div>

      {/* Honeypot – skjult for rigtige brugere */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={set("website")} className="hidden" />

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-[#00a8e8] hover:bg-white hover:text-[#1c1e1e] disabled:opacity-50 transition-colors text-white text-[14px] font-semibold px-5 py-4 rounded-full w-full"
      >
        {status === "loading" ? "Sender..." : "Send besked"}
      </button>

      {(status === "error" || status === "ratelimit") && (
        <p role="alert" className="text-[12.5px] text-[#ff8a8a] text-center">
          {status === "ratelimit" ? "For mange forsøg. Prøv igen om lidt, eller skriv til " : "Noget gik galt. Prøv igen eller skriv til "}
          <a href="mailto:hej@webhjerte.dk" className="underline">
            hej@webhjerte.dk
          </a>
        </p>
      )}

      <p className="text-[11.5px] text-[#6f7c7c] text-center">
        Ingen spam. Ingen binding. <span className="text-[#00a8e8]">Svar inden for 24 timer.</span>
      </p>
    </form>
  );
};

export default ContactForm;
