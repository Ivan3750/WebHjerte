import Link from "next/link";
import Button from "../Button";

const CTASection = () => {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-20 bg-[#0af] text-white">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Klar til at komme i gang?
        </h2>
        <p className="text-base sm:text-lg text-white/90 max-w-xl">
          Kontakt WebHjerte i Horsens, og lad os sammen skabe en hjemmeside, der skaffer kunder og vækst i Midtjylland og resten af Danmark.
        </p>
        <Link href="/kontakt">
          <Button name="Book en gratis konsultation" />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
