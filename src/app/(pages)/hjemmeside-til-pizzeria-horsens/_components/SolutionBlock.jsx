export default function SolutionBlock() {
  const features = [
    { title: "Egen hjemmeside", desc: "Skræddersyet design til din pizzeria, ikke en skabelon", color: "#00a8e8" },
    { title: "Digitalt menukort", desc: "Nem at opdatere selv — priser, retter, tilbud", color: "#3ddc97" },
    { title: "Online bestilling", desc: "Kunder bestiller direkte, ingen tredjepart imellem", color: "#f0a63a" },
    { title: "Betaling indbygget", desc: "MobilePay og kort — pengene går direkte til dig", color: "#8a8ff0" },
    { title: "Ingen kommission", desc: "Fast pris pr. måned, uanset hvor meget du sælger", color: "#e0678a" },
    { title: "Din egen kundedata", desc: "Telefon og e-mail bliver hos dig, ikke hos platformen", color: "#00c2a8" },
  ];

  const comparison = [
    { label: "Kommission pr. ordre", wolt: "Op til 30%", own: "0 kr" },
    { label: "Kontrol over kundedata", wolt: "Nej", own: "Ja, fuld ejerskab" },
    { label: "Opdatere menukort", wolt: "Kræver godkendelse", own: "Med det samme, selv" },
    { label: "Branding", wolt: "Woltens design", own: "Dit eget udseende" },
    { label: "Afhængighed", wolt: "Platformen bestemmer vilkår", own: "Du bestemmer selv" },
  ];

  return (
    <section className="bg-white px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
          Løsningen
        </p>
        <h2 className="title text-[#1a1a1a] !leading-tight !mb-4 max-w-[26ch]">
          Din egen bestillingsside — samlet i én løsning
        </h2>
        <p className="text-[14px] text-[#5a5a5a] leading-[1.85] max-w-[60ch] mb-14">
          Alt du behøver for at tage imod bestillinger direkte fra dine kunder
          — uden at aflevere en tredjedel af din omsætning til en platform.
        </p>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-[#f7f6f6] border-2 border-[#f7f6f6] px-6 py-6 flex flex-col gap-3"
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: f.color, boxShadow: `0 0 14px 2px ${f.color}66` }}
              />
              <h3 className="text-[15px] font-medium text-[#1a1a1a]">{f.title}</h3>
              <p className="text-[13px] text-[#5a5a5a] leading-[1.7]">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl border-2 border-[#e8e8e8] overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-[#f7f6f6]">
            <div className="px-5 py-5" />
            <div className="px-5 py-5 border-l border-[#e8e8e8]">
              <p className="text-[13px] font-medium text-[#8a8a8a]">Med Wolt</p>
            </div>
            <div className="px-5 py-5 border-l border-[#e8e8e8] bg-[#00a8e8]/[0.06]">
              <p className="text-[13px] font-medium text-[#00a8e8]">Med egen side</p>
            </div>
          </div>

          {/* Rows */}
          {comparison.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 ${i % 2 === 1 ? "bg-white" : "bg-[#fbfbfb]"}`}
            >
              <div className="px-5 py-5 border-t border-[#e8e8e8]">
                <p className="text-[13px] font-medium text-[#5a5a5a]">{row.label}</p>
              </div>
              <div className="px-5 py-5 border-t border-l border-[#e8e8e8]">
                <p className="text-[13px] text-[#8a8a8a]">{row.wolt}</p>
              </div>
              <div className="px-5 py-5 border-t border-l border-[#e8e8e8] bg-[#00a8e8]/[0.04]">
                <p className="text-[13px] font-medium text-[#1a1a1a]">{row.own}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}