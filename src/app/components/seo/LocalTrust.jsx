import AnimatedInView from "../../components/AnimatedInView";
import { FaCircleCheck } from "react-icons/fa6";

const LocalTrust = () => {
  return (
    <section>

        <AnimatedInView as="h2" className="title">
          Dit lokale SEO-bureau i Horsens
        </AnimatedInView>

        <AnimatedInView as="p"  className="text py-5 max-w-3xl">
          WebHjerte hjælper virksomheder i Horsens og Midtjylland med at forbedre
          deres synlighed på Google gennem ærlig, datadrevet SEO og brugervenlige
          hjemmesider.
        </AnimatedInView>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Specialister i lokal SEO og Google-synlighed",
            "Erfaring med virksomheder i Horsens og omegn",
            "Fokus på både trafik og konverteringer",
            "Gratis SEO-tjek uden binding",
          ].map((item, i) => (
            <AnimatedInView
              key={i}
              className="flex items-center gap-3 bg-[#303030] p-5 rounded-xl shadow-sm"
            >
              <FaCircleCheck className="text-green-500 text-xl flex-shrink-0" />
              <p>{item}</p>
            </AnimatedInView>
          ))}
        </div>

    </section>
  );
};

export default LocalTrust;
