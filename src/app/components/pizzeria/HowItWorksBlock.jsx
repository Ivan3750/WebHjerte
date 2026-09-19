export default function HowItWorksBlock() {
  const steps = [
    {
      number: "01",
      title: "Gratis konsultation",
      desc: "Vi kigger sammen på, hvor meget du reelt betaler i gebyrer i dag, og hvad du kan spare med din egen bestillingsside.",
      color: "#00a8e8",
    },
    {
      number: "02",
      title: "Design, menu & betaling",
      desc: "Jeg bygger din side med dit menukort, billeder og branding — og sætter MobilePay/kort op, så pengene går direkte til dig.",
      color: "#3ddc97",
    },
    {
      number: "03",
      title: "Klar til lancering",
      desc: "Din side er live og klar til at tage imod bestillinger — typisk inden for 7-14 dage, afhængig af omfang.",
      color: "#f0a63a",
    },
    {
      number: "04",
      title: "Support & opdateringer",
      desc: "Skal menukortet opdateres, eller opstår der spørgsmål? Jeg er let at få fat i — ikke en anonym supportkø.",
      color: "#e0678a",
    },
  ];

  return (
    <section className="bg-white px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
          Processen
        </p>
        <h2 className="title text-[#1a1a1a] !leading-tight !mb-4 max-w-[24ch]">
          Sådan kommer vi i gang
        </h2>
        <p className="text-[14px] text-[#5a5a5a] leading-[1.85] max-w-[60ch] mb-14">
          Fra første samtale til din side er live — enkel proces, ingen
          overraskelser undervejs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={s.number} className="relative">
              <div className="rounded-2xl bg-[#f7f6f6] border-2 border-[#f7f6f6] px-6 py-7 flex flex-col gap-4 h-full">
                <div className="flex items-center gap-3">
                  <span
                    className="text-[13px] font-medium px-2.5 py-1 rounded-full"
                    style={{
                      color: s.color,
                      backgroundColor: `${s.color}1a`,
                    }}
                  >
                    {s.number}
                  </span>
                </div>
                <h3 className="text-[15px] font-medium text-[#1a1a1a]">
                  {s.title}
                </h3>
                <p className="text-[13px] text-[#5a5a5a] leading-[1.7]">
                  {s.desc}
                </p>
              </div>

              {/* Connector line (desktop only, not on last item) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-[2px] bg-[#e8e8e8] -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}