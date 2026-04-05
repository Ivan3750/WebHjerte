"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const packages = [
  { value: "", label: "Vælg pakke (valgfrit)" },
  { value: "basis", label: "Basis — 4.500 DKK" },
  { value: "standard", label: "Standard — 7.500 DKK" },
  { value: "skraeddersyet", label: "Skræddersyet — 14.000 DKK" },
  { value: "retainer", label: "Vedligeholdelse — 1.500 DKK/md" },
  { value: "andet", label: "Andet" },
];

const fieldClass =
  "w-full bg-[#111313] border border-[#2a2d2d] focus:border-[#00a8e8] rounded-xl px-4 py-3 text-[13px] text-[#e0e0e0] placeholder-[#444] outline-none transition-colors";

const ContactForm = () => {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({ name: "", email: "", pakke: "", message: "" });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const pakke = searchParams.get("pakke") ?? "";
    if (pakke) setForm((f) => ({ ...f, pakke }));
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
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
        <div className="w-10 h-10 rounded-full bg-[#1a2a30] border border-[#0a5a7a] flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 9l3.5 3.5 6.5-7" stroke="#00a8e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-[15px] font-medium text-white">Tak for din besked</p>
        <p className="text-[13px] text-[#5a5a5a]">Jeg vender tilbage inden for 24 timer.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <p className="text-[13px] font-medium text-[#e0e0e0] mb-1">Send en besked</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="name"
          type="text"
          required
          placeholder="Dit navn"
          value={form.name}
          onChange={set("name")}
          className={fieldClass}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Din email"
          value={form.email}
          onChange={set("email")}
          className={fieldClass}
        />
      </div>

      <select
        name="pakke"
        value={form.pakke}
        onChange={set("pakke")}
        className={fieldClass}
      >
        {packages.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <textarea
        name="message"
        placeholder="Hvad handler det om?"
        rows={5}
        value={form.message}
        onChange={set("message")}
        className={`${fieldClass} resize-none`}
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-[#00a8e8] hover:opacity-85 disabled:opacity-50 transition-opacity text-white text-[13px] font-medium px-5 py-3 rounded-xl w-full"
      >
        {status === "loading" ? "Sender..." : "Send besked →"}
      </button>

      {status === "error" && (
        <p className="text-[12px] text-red-400 text-center">
          Noget gik galt. Prøv igen eller skriv til{" "}
          <a href="mailto:ivan@webhjerte.dk" className="underline">
            ivan@webhjerte.dk
          </a>
        </p>
      )}

      <p className="text-[11px] text-[#3a3d3d] text-center mt-1">
        Ingen spam. Ingen binding.{" "}
        <span className="text-[#00a8e8]">Svar inden for 24 timer.</span>
      </p>
    </form>
  );
};

export default ContactForm;
