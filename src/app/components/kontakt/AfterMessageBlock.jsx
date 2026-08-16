import AnimatedInView from "../AnimatedInView";

const thread = [
  {
    from: "you",
    n: "01",
    title: "Jeg læser din besked",
    text: "Jeg gennemgår dine behov og ser på din virksomhed.",
    meta: "Sendt",
  },
  {
    from: "ivan",
    n: "02",
    title: "Du hører fra mig",
    text: "Jeg vender tilbage inden for 24 timer.",
    meta: "Ivan · svarer inden for 24t",
  },
  {
    from: "ivan",
    n: "03",
    title: "Vi tager en kort snak",
    text: "Vi taler om dine mål, ønsker og muligheder.",
    meta: "Gratis opkald",
  },
  {
    from: "ivan",
    n: "04",
    title: "Du får en klar anbefaling",
    text: "Jeg fortæller dig, hvilken løsning jeg vil anbefale og hvad den koster.",
    meta: "Konkret tilbud",
  },
  {
    from: "ivan",
    n: "05",
    title: "Vi starter - hvis det giver mening",
    text: "Ingen pres, ingen binding.",
    meta: "Din beslutning",
  },
];

export default function AfterMessageBlock() {
  return (
    <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-14 items-start">
        {/* Left: sticky intro */}
        <div className="flex flex-col lg:sticky lg:top-24">
          <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
            Hvad sker der bagefter?
          </AnimatedInView>
          <AnimatedInView as="h2" className="title text-white !leading-tight !mb-5 max-w-[16ch]">
            Sådan ser det ud, når du trykker send
          </AnimatedInView>
          <AnimatedInView as="p" className="text-[13px] text-[#7a7a7a] leading-[1.85] max-w-[36ch] mb-8">
            Ingen automatiske svar, ingen sælgere i kø. Bare en almindelig
            samtale - fra din første besked til en klar anbefaling.
          </AnimatedInView>
          <AnimatedInView as="div" className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#00a8e8] flex-shrink-0" />
            <span className="text-[12px] text-[#6a6a6a]">
              <span className="text-[#e0e0e0] font-medium">Ivan</span> svarer selv - altid
            </span>
          </AnimatedInView>
        </div>

        {/* Right: chat mockup */}
        <AnimatedInView
          as="div"
          className="rounded-2xl border border-[#2a2d2d] bg-[#171919] overflow-hidden"
        >
          {/* chat header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-[#2a2d2d] bg-[#1c1e1e]">
            <span className="w-8 h-8 rounded-full bg-[#1a2a30] border border-[#0a4a60] flex items-center justify-center text-[11px] text-[#00a8e8] font-medium flex-shrink-0">
              IV
            </span>
            <div className="flex flex-col">
              <span className="text-[12.5px] text-[#e0e0e0] font-medium">Ivan · WebHjerte</span>
              <span className="text-[10.5px] text-[#5a5a5a]">Svarer normalt inden for 24 timer</span>
            </div>
          </div>

          {/* messages */}
          <div className="flex flex-col gap-4 p-5 sm:p-6">
            {thread.map((m) => (
              <AnimatedInView
                key={m.n}
                as="div"
                className={`flex ${m.from === "you" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex flex-col gap-1 max-w-[85%] ${m.from === "you" ? "items-end" : "items-start"}`}>
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      m.from === "you"
                        ? "bg-[#00a8e8] rounded-br-sm"
                        : "bg-[#232525] border border-[#2a2d2d] rounded-bl-sm"
                    }`}
                  >
                    <p
                      className={`text-[12px] font-medium mb-0.5 ${
                        m.from === "you" ? "text-[#062230]" : "text-[#e0e0e0]"
                      }`}
                    >
                      {m.n} · {m.title}
                    </p>
                    <p
                      className={`text-[12.5px] leading-[1.6] ${
                        m.from === "you" ? "text-[#0a2e3d]" : "text-[#9a9a9a]"
                      }`}
                    >
                      {m.text}
                    </p>
                  </div>
                  <span className="text-[10px] text-[#4a4a4a] px-1">{m.meta}</span>
                </div>
              </AnimatedInView>
            ))}
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
}