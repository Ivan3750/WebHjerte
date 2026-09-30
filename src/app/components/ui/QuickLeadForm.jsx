"use client";

import { useState } from "react";

export default function QuickLeadForm() {
  const [form, setForm] = useState({ name: "", phone: "", url: "" });
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
          name: form.name,
          email: "",
          pakke: "Quick lead",
          message: `Navn: ${form.name}\nTelefon: ${form.phone}\nURL: ${form.url}`,
        }),
      });

      if (res.ok) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "quick_lead_success" });
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
      <div className="flex flex-col items-center justify-center text-center py-8 gap-3">
        <div className="w-10 h-10 rounded-full bg-[#1a2a30] border border-[#0a5a7a] flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 9l3.5 3.5 6.5-7" stroke="#00a8e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-[15px] font-medium text-white">Tak for din besked!</p>
        <p className="text-[13px] text-[#5a5a5a]">Jeg ringer til dig inden for 24 timer.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <p className="text-[13px] font-medium text-[#5a5a5a] mb-1">Få et gratis tilbud</p>

      <input
        name="name"
        type="text"
        required
        placeholder="Dit navn"
        value={form.name}
        onChange={set("name")}
        className="w-full bg-white text-[13px] text-[#5a5a5a] placeholder:text-[#444] border border-[#e8e8e8] rounded-xl px-4 py-3 outline-none transition-colors"
      />
      <input
        name="phone"
        type="tel"
        required
        placeholder="Dit telefonnummer"
        value={form.phone}
        onChange={set("phone")}
        className="w-full bg-white text-[13px] text-[#5a5a5a] placeholder:text-[#444] border border-[#e8e8e8] rounded-xl px-4 py-3 outline-none transition-colors"
      />
      <input
        name="url"
        type="url"
        placeholder="Din hjemmeside (valgfrit)"
        value={form.url}
        onChange={set("url")}
        className="w-full bg-white text-[13px] text-[#5a5a5a] placeholder:text-[#444] border border-[#e8e8e8] rounded-xl px-4 py-3 outline-none transition-colors"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-[#00a8e8] hover:opacity-85 disabled:opacity-50 transition-opacity text-white text-[13px] font-medium px-5 py-3 rounded-xl w-full"
      >
        {status === "loading" ? "Sender..." : "Få gratis tilbud"}
      </button>

      {status === "error" && (
        <p className="text-[12px] text-red-400 text-center">
          Noget gik galt. Prøv igen eller ring til +45 42 76 05 77
        </p>
      )}

      <p className="text-[11px] text-[#3a3d3d] text-center mt-1">
        Ingen spam. Ingen binding.{" "}
        <span className="text-[#00a8e8]">Svar inden for 24 timer.</span>
      </p>
    </form>
  );
}
