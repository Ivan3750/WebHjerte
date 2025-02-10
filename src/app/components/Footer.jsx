import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F6D55C] px-10 py-5">
        <p className="text-[#1F2122] text-center font-normal text-[15px] p-4">
          WebHjerte 2025
        </p>
        <div>
          <h3 className="text-[#1D1F20] font-semibold text-[30px]">
            Din hjemmeside — vores hjerte!
          </h3>
        </div>
        <div className="flex gap-5 py-5">
          <Link className="text-black text-sm font-normal" href="/">
            Forside
          </Link>
          <Link className="text-black text-sm font-normal" href="/services">
            Services
          </Link>
          <Link className="text-black text-sm font-normal" href="/om-os">
            Om os
          </Link>
          <Link className="text-black text-sm font-normal" href="/portefolje">
            Portefølje
          </Link>
          <Link className="text-black text-sm font-normal" href="/blog">
            Blog
          </Link>
          <Link className="text-black text-sm font-normal" href="/kontakt">
            Kontakt
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
