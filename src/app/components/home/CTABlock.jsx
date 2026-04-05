"use client";
import { useState } from "react";
import AnimatedInView from "../AnimatedInView";

const CTABlock = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(e.target));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-[#111313] border-t border-[#1e2020] px-5 sm:px-10 lg:px-20 py-24">
      <div className="max-w-xl mx-auto">
        <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] text-center mb-4">
          Kom i gang
        </AnimatedInView>

        <AnimatedInView as="h2" className="title text-white text-center !leading-tight mb-4">
          Klar til en hjemmeside{" "}
          <span className="text-[#00a8e8]">der virker?</span>
        </AnimatedInView>

        <AnimatedInView as="p" className="text-[14px] text-[#6a6a6a] text-center leading-[1.7] mb-10">
          Første samtale er gratis og uforpligtende.
          <br />
          <span className="text-[#9a9a9a]">Du hører fra mig inden for 24 timer.</span>
        </AnimatedInView>

        {status === "success" ? (
          <AnimatedInView
            as="div"
            className="bg-[#1c1e1e] border border-[#2a2d2d] rounded-2xl px-8 py-10 text-center"
          >
            <p className="text-[#00a8e8] text-lg font-medium mb-2">Tak for din besked</p>
            <p className="text-[13px] text-[#6a6a6a]">Jeg vender tilbage inden for 24 timer.</p>
          </AnimatedInView>
        ) : (
          <AnimatedInView as="form" onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                name="name"
                type="text"
                required
                placeholder="Dit navn"
                className="bg-[#1c1e1e] border border-[#2a2d2d] focus:border-[#00a8e8] rounded-xl px-4 py-3 text-[13px] text-[#e0e0e0] placeholder-[#444] outline-none transition-colors w-full"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Din email"
                className="bg-[#1c1e1e] border border-[#2a2d2d] focus:border-[#00a8e8] rounded-xl px-4 py-3 text-[13px] text-[#e0e0e0] placeholder-[#444] outline-none transition-colors w-full"
              />
            </div>

            <textarea
              name="message"
              placeholder="Hvad handler det om? (valgfrit)"
              rows={4}
              className="bg-[#1c1e1e] border border-[#2a2d2d] focus:border-[#00a8e8] rounded-xl px-4 py-3 text-[13px] text-[#e0e0e0] placeholder-[#444] outline-none transition-colors resize-none w-full"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#00a8e8] hover:opacity-85 disabled:opacity-50 transition-opacity text-white text-[14px] font-medium rounded-xl py-3.5 w-full"
            >
              {status === "loading"
                ? "Sender..."
                : "Send besked - det er gratis →"}
            </button>

            {status === "error" && (
              <p className="text-[12px] text-red-400 text-center">
                Noget gik galt. Prøv igen eller skriv direkte til mig.
              </p>
            )}

            <p className="text-[11px] text-[#3a3d3d] text-center mt-1">
              Ingen spam. Ingen binding.{" "}
              <span className="text-[#00a8e8]">Svar inden for 24 timer.</span>
            </p>
          </AnimatedInView>
        )}
      </div>
    </section>
  );
};

export default CTABlock;
