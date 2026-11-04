import { FadeUp } from "../../../components/home/fx/Reveal";

const SupportTariffsBlock = () => {
  return (
    <section className="scene bg-[#1c1e1e]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pb-20 sm:pb-28">
        <FadeUp className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-12 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#7f8c8c] mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#00a8e8]" />
              Vedligehold efter lancering
            </p>
            <h2 className="text-white font-semibold tracking-tight leading-[1.15] text-[clamp(22px,2.8vw,34px)] mb-4 max-w-[24ch]">
              Løbende support, når du har brug for det
            </h2>
            <p className="text-[14px] text-[#93a0a0] leading-[1.85] max-w-[60ch]">
              De første 30 dage efter lancering er support inkluderet i pakken. Derefter kan du vælge et
              vedligeholdelsesabonnement til opdateringer, rettelser og mindre ændringer.
            </p>
          </div>

          <div className="rounded-2xl p-7 bg-[#00a8e8] text-white flex flex-col gap-2 md:min-w-[280px]">
            <p className="text-[11px] uppercase tracking-[0.14em] text-white/80">Abonnement</p>
            <div className="flex items-baseline gap-2">
              <span className="text-[clamp(28px,4vw,34px)] font-semibold leading-none tracking-tight whitespace-nowrap">195–395</span>
              <span className="text-[13px] text-white/85 whitespace-nowrap">DKK pr. måned</span>
            </div>
            <p className="text-[12px] text-white/80 mt-2">Priser ekskl. moms.</p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default SupportTariffsBlock;
