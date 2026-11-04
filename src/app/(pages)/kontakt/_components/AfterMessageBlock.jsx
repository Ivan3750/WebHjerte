import SectionHead from "../../../components/ui/SectionHead";
import { FadeUp } from "../../../components/home/fx/Reveal";

const thread = [
  { from: "you", n: "01", title: "Jeg læser din besked", text: "Jeg gennemgår dine behov og ser på din virksomhed.", meta: "Sendt" },
  { from: "ivan", n: "02", title: "Du hører fra mig", text: "Jeg vender tilbage inden for 24 timer.", meta: "Ivan · svarer inden for 24t" },
  { from: "ivan", n: "03", title: "Vi tager en kort snak", text: "Jeg taler med dig om dine mål, ønsker og muligheder.", meta: "Gratis opkald" },
  { from: "ivan", n: "04", title: "Du får en klar anbefaling", text: "Jeg fortæller dig, hvilken løsning jeg vil anbefale og hvad den koster.", meta: "Konkret tilbud" },
  { from: "ivan", n: "05", title: "Jeg starter - hvis det giver mening", text: "Ingen pres, ingen binding.", meta: "Din beslutning" },
];

export default function AfterMessageBlock() {
  return (
    <section className="scene bg-[#f7f6f6] border-t border-[#eeecec]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHead
            eyebrow="Hvad sker der bagefter?"
            lines={["Sådan ser det ud,", "når du trykker send"]}
            lead="Ingen automatiske svar, ingen sælgere i kø. Bare en almindelig samtale - fra din første besked til en klar anbefaling."
            className="mb-8"
            maxW="max-w-[24ch]"
          />
          <FadeUp className="flex items-center gap-2.5">
            <span className="relative flex w-2.5 h-2.5">
              <span className="pulse-ring absolute inset-0 rounded-full text-[#3ddc97]" />
              <span className="relative w-2.5 h-2.5 rounded-full bg-[#3ddc97]" />
            </span>
            <span className="text-[13px] text-[#5a5a5a]">
              <span className="text-[#111313] font-medium">Ivan</span> svarer selv - altid
            </span>
          </FadeUp>
        </div>

        <FadeUp className="rounded-3xl border border-[#e8e6e6] bg-white overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-[#eeecec]">
            <span className="w-9 h-9 rounded-full bg-[#111313] flex items-center justify-center text-[11px] text-[#00a8e8] font-semibold shrink-0">IV</span>
            <div className="flex flex-col">
              <span className="text-[13px] text-[#111313] font-medium">Ivan · WebHjerte</span>
              <span className="text-[11px] text-[#8a8a8a]">Svarer normalt inden for 24 timer</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 p-5 sm:p-7 bg-[#fbfaf9]">
            {thread.map((m, i) => (
              <FadeUp key={m.n} delay={i * 0.05} className={`flex ${m.from === "you" ? "justify-end" : "justify-start"}`}>
                <div className={`flex flex-col gap-1 max-w-[88%] ${m.from === "you" ? "items-end" : "items-start"}`}>
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      m.from === "you" ? "bg-[#00a8e8] rounded-br-sm" : "bg-white border border-[#e8e6e6] rounded-bl-sm"
                    }`}
                  >
                    <p className={`text-[13px] font-semibold mb-0.5 ${m.from === "you" ? "text-white" : "text-[#111313]"}`}>
                      {m.n} · {m.title}
                    </p>
                    <p className={`text-[13px] leading-[1.6] ${m.from === "you" ? "text-white/90" : "text-[#5a5a5a]"}`}>{m.text}</p>
                  </div>
                  <span className="text-[10.5px] text-[#9a9a9a] px-1">{m.meta}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
