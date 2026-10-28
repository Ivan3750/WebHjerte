import Image from "next/image";
import Ivan from "../../assets/Ivan.jpg";

const details = [
  { label: "Kontakt", value: "Ivan Kohan" },
  { label: "CVR", value: "46485823" },
  { label: "Adresse", value: "Horsens, Midtjylland" },
  { label: "Telefon", value: "+45 42 76 05 77", href: "tel:+4542760577" },
];

const TrustStrip = () => {
  return (
    <section className="bg-[#111313] border-t border-[#1e2020] px-5 sm:px-10 lg:px-20 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#2a2d2d]">
            <Image
              src={Ivan}
              alt="Ivan Kohan, WebHjerte"
              fill
              sizes="48px"
              className="object-cover object-center"
            />
          </div>
          <p className="text-[13px] text-[#9a9a9a] leading-snug">
            Dit webbureau i Horsens.
            <br />
            <span className="text-white/80">Du taler direkte med mig.</span>
          </p>
        </div>

        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 flex-1">
          {details.map(({ label, value, href }) => (
            <div key={label} className="flex flex-col gap-1">
              <dt className="text-[10px] uppercase tracking-[0.1em] text-[#5a5a5a]">
                {label}
              </dt>
              <dd className="text-[13px] text-[#e0e0e0]">
                {href ? (
                  <a href={href} className="hover:text-[#00a8e8] transition-colors">
                    {value}
                  </a>
                ) : (
                  value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default TrustStrip;
