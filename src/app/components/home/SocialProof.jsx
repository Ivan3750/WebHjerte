import AnimatedInView from "../../utils/AnimatedInView";

const quotes = [
  {
    text: "Vi kan varmt anbefale Ivan! Han arbejder professionelt og hurtigt, kommer med nyttige anbefalinger og har tålmodighed med vores kaotiske ideer. Nem og behagelig kommunikation.",
    name: "Vasyl",
    company: "VEKA Company",
    website: "veka.center",
    city: null,
  },
];

const SocialProof = () => {
  return (
    <section className="bg-[#111313] py-14 sm:py-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center px-4 sm:px-6">
        <AnimatedInView
          as="p"
          className="text-[10px] sm:text-[11px] title uppercase tracking-[0.2em] text-[#666] mb-6 sm:mb-8"
        >
          Hvad vores kunder siger
        </AnimatedInView>

        <div className="flex flex-col gap-6 sm:gap-10 w-full">
          {quotes.map((quote) => (
            <div
              key={quote.name}
              className="flex flex-col items-center border border-white/10 rounded-xl sm:rounded-2xl px-5 sm:px-8 py-8 sm:py-10 bg-white/[0.02]"
            >
              <span className="text-[#00a8e8] text-4xl sm:text-5xl leading-none mb-2 font-serif">
                &ldquo;
              </span>
              <AnimatedInView
                as="blockquote"
                className="text-[15px] sm:text-[18px] text-white/90 leading-relaxed max-w-xl"
              >
                {quote.text}
              </AnimatedInView>

              <div className="w-8 h-px bg-[#00a8e8]/40 my-5 sm:my-6" />

              <AnimatedInView
                as="div"
                className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] sm:text-xs text-[#888]"
              >
                <span className="text-white/70 font-medium">{quote.name}</span>
                <span className="w-1 h-1 rounded-full bg-[#444]" />
                <span>{quote.company}</span>
                {quote.city && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-[#444]" />
                    <span>{quote.city}</span>
                  </>
                )}
              </AnimatedInView>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;