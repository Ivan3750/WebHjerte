const SupportTariffsBlock = () => {
  return (
    <section className="bg-white px-5 sm:px-10 lg:px-20 py-16 border-t border-[#e8e8e8]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
            Vedligehold efter lancering
          </p>
          <h2 className="title text-[#1a1a1a] !leading-tight !mb-4 max-w-[24ch]">
            Løbende support, når du har brug for det
          </h2>
          <p className="text-[13px] text-[#7a7a7a] leading-[1.85] max-w-[60ch]">
            De første 30 dage efter lancering er support inkluderet i pakken. Derefter kan du
            vælge et vedligeholdelsesabonnement til opdateringer, rettelser og mindre ændringer.
          </p>
        </div>

        <div className="rounded-2xl p-7 bg-[#f7f6f6] border border-[#e8e8e8] flex flex-col gap-2 md:min-w-[260px]">
          <p className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a]">
            Abonnement
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-[28px] font-medium leading-none text-[#1a1a1a]">195–395</span>
            <span className="text-[13px] text-[#5a5a5a]">DKK pr. måned</span>
          </div>
          <p className="text-[12px] text-[#7a7a7a] leading-relaxed mt-2">
            Priser ekskl. moms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupportTariffsBlock;
