import { FadeUp, RevealLines } from "../../../components/home/fx/Reveal";
import SpotlightCard from "../../../components/home/fx/SpotlightCard";

const points = [
  { title: "Lokal SEO og Google-synlighed", text: "Fokus på de søgninger, dine kunder i Horsens og omegn faktisk bruger." },
  { title: "Kendskab til Horsens og omegn", text: "Jeg sidder selv i Horsens og kender de lokale markeder." },
  { title: "Både trafik og henvendelser", text: "Flere besøg er kun halvdelen – siden skal også få folk til at tage kontakt." },
  { title: "Gratis og uden binding", text: "Du får en ærlig gennemgang og konkrete råd. Hvad du gør bagefter, er op til dig." },
];

const LocalTrust = () => (
  <section className="scene relative overflow-hidden bg-[#1c1e1e]">
    <div aria-hidden className="grid-fade absolute inset-0 opacity-40" />
    <div className="relative max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
      <FadeUp as="p" className="text-[11px] uppercase tracking-[0.18em] text-[#7f8c8c] mb-4 flex items-center gap-3">
        <span className="w-8 h-px bg-[#00a8e8]" />
        Lokalt i Horsens
      </FadeUp>
      <RevealLines
        lines={["Dit lokale SEO-bureau", "i Horsens"]}
        className="text-white font-semibold tracking-tight leading-[1.1] text-[clamp(24px,3.3vw,40px)] mb-5"
      />
      <FadeUp as="p" delay={0.1} className="readable text-[16px] text-[#a6b1b1] leading-[1.75] max-w-[58ch] mb-10 sm:mb-14">
        WebHjerte hjælper virksomheder i Horsens og Midtjylland med at blive mere synlige på Google gennem ærlig, datadrevet SEO og brugervenlige hjemmesider.
      </FadeUp>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {points.map((p, i) => (
          <FadeUp key={p.title} delay={(i % 2) * 0.08}>
            <SpotlightCard className="h-full rounded-3xl glass">
              <div className="p-6 sm:p-7 flex gap-4">
                <span className="w-9 h-9 rounded-full bg-[#00a8e8] text-[#10181a] flex items-center justify-center flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12l5 5 9-10" />
                  </svg>
                </span>
                <div>
                  <p className="text-[16px] font-semibold text-white mb-1.5">{p.title}</p>
                  <p className="readable text-[15px] text-[#93a0a0] leading-[1.7]">{p.text}</p>
                </div>
              </div>
            </SpotlightCard>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default LocalTrust;
