import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F6D55C] px-1 py-2 md:px-10 md:py-5">
        <p className="text-[#1F2122] text-center font-normal text-[15px] p-4">
          WebHjerte 2025
        </p>
        <div>
          <h3 className="text-[#1D1F20] ml-5 font-semibold text-[20px] md:text-[30px]">
            Din hjemmeside — vores hjerte!
          </h3>
        </div>
        <div className="flex gap-2 py-3 md:gap-5 md:py-5  flex-row flex-wrap">
          <Link className="text-black w-fit text-[12px] md:text-sm  ml-5 font-normal" href="/">
            Forside
          </Link>
          <Link className="text-black w-fit  text-[12px] md:text-sm  ml-5 font-normal" href="/services">
            Services
          </Link>
          <Link className="text-black w-fit text-[12px] md:text-sm  ml-5 font-normal" href="/om-os">
            Om os
          </Link>
          <Link className="text-black w-fit text-[12px] md:text-sm ml-5  font-normal" href="/portefolje">
            Portefølje
          </Link>
          <Link className="text-black w-fit text-[12px] md:text-sm  ml-5 font-normal" href="/blog">
            Blog
          </Link>
          <Link className="text-black w-fit text-[12px] md:text-sm  ml-5 font-normal" href="/kontakt">
            Kontakt
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
