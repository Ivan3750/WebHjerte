import AnimatedInView from "../AnimatedInView";

const orgs = [
  "Danmarks Naturfredningsforening",
  "Plastic Change",
  "Lokal skovplantning i Midtjylland",
];

const MiljoeBlock = () => {
  return (
    <section className="bg-[#f7f6f6]  px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div>
          <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#aaa] mb-4">
            Vores initiativ
          </AnimatedInView>

          <AnimatedInView as="div" className="inline-flex items-center gap-2 bg-[#edf7ed] border border-[#c5e8c5] rounded-full px-3.5 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#3a9e4a] flex-shrink-0" />
            <span className="text-[12px] text-[#2d7a36] font-medium">5% til miljøet</span>
          </AnimatedInView>

          -<AnimatedInView as="h2" className="title text-[#1c1e1e] !leading-tight mb-6">
            5% af omsætningen går til{" "}
            <span className="text-[#3a9e4a]">grønne projekter</span>
          </AnimatedInView>

          <AnimatedInView as="div" className="flex flex-col gap-4 text-[14px] text-[#777] leading-[1.8]">
            <p>
              For hvert projekt jeg leverer, går 5% af beløbet til
              miljøorganisationer i Danmark. Ikke fordi det er et smart
              marketingtrick - men fordi jeg mener det giver mening.
            </p>
            <p>
              Du betaler det samme. Der er ingen ekstra gebyrer. Det er
              simpelthen en del af måden jeg driver forretning på.
            </p>
          </AnimatedInView>
        </div>

        <AnimatedInView as="div" className="flex flex-col gap-6">
          <div>
            <div className="h-1.5 rounded-full bg-[#e8e8e8] overflow-hidden mb-2">
              <div className="h-full w-[5%] bg-[#3a9e4a] rounded-full" />
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-[#3a9e4a] font-medium">5% af hvert projekt</span>
              <span className="text-[#aaa]">Går direkte til miljøet</span>
            </div>
          </div>

          <div className="bg-white border border-[#e8e8e8] rounded-2xl p-6 flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-[0.08em] text-[#aaa] mb-1">
              Støtter bl.a.
            </p>
            {orgs.map((org) => (
              <div key={org} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3a9e4a] flex-shrink-0" />
                <span className="text-[13px] text-[#777]">{org}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#1c1e1e] border border-[#2a2d2d] rounded-2xl px-5 py-3.5 flex items-center justify-between">
            <p className="text-[14px] font-medium text-white">
              Web<span className="text-[#00a8e8]">Hjerte</span>
            </p>
            <div className="inline-flex items-center gap-2 bg-[#1a2e1a] border border-[#2a5a2a] rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3a9e4a] flex-shrink-0" />
              <span className="text-[11px] text-[#5abf6a] font-medium">5% til miljøet</span>
            </div>
          </div>
        </AnimatedInView>

      </div>
    </section>
  );
};

export default MiljoeBlock;
