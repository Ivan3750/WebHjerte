import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Linkedin, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F6D55C] px-4 py-2 md:px-10 md:py-5">
        <p className="text-[#1F2122] text-center font-normal  text-[15px] p-4">
          WebHjerte 2026
        </p>
      
        <div>
          <h3 className="text-[#1D1F20] ml-5 font-semibold text-[20px] md:text-[30px]">
            Din hjemmeside — vores hjerte!
          </h3>
            {/* <h2 className="text-[#1F2122]  font-medium  text-[18px] p-4 hover:text-[#0af] transition-all cursor-pointer">
          hej@webhjerte.dk
        </h2> */}
        </div>
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex gap-2 py-3 md:gap-5 md:py-5 flex-row flex-wrap">
            <Link
              className="text-black w-fit text-[12px] md:text-sm ml-5 font-normal"
              href="/"
            >
              Forside
            </Link>
            <Link
              className="text-black w-fit text-[12px] md:text-sm ml-5 font-normal"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="text-black w-fit text-[12px] md:text-sm ml-5 font-normal"
              href="/om-os"
            >
              Om os
            </Link>
            <Link
              className="text-black w-fit text-[12px] md:text-sm ml-5 font-normal"
              href="/portefolje"
            >
              Portefølje
            </Link>

            <Link
              className="text-black w-fit text-[12px] md:text-sm ml-5 font-normal"
              href="/kontakt"
            >
              Kontakt
            </Link>
            <Link
              className="text-black w-fit text-[12px] md:text-sm ml-5 font-normal"
              href="/privacy"
            >
              Privatlivspolitik
            </Link>
            <Link
              className="text-black w-fit text-[12px] md:text-sm ml-5 font-normal"
              href="/terms"
            >
              Handelsbetingelser
            </Link>
          </div>
          <div className="flex">
            <Link href="https://www.instagram.com/webhjerte/" target="_blank">
              <Instagram className="text-black w-fit text-[25px] md:text-[30px] ml-5 font-normal hover:scale-[0.9] transition-all"></Instagram>
            </Link>
            <Link href="https://www.facebook.com/WebHjerte/" target="_blank">
              <Facebook className="text-black w-fit text-[25px] md:text-[30px] ml-5 font-normal hover:scale-[0.9] transition-all" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/webhjerte/"
              target="_blank"
            >
              <Linkedin className="text-black w-fit text-[25px] md:text-[30px] ml-5 font-normal hover:scale-[0.9] transition-all" />
            </Link>
            <Link href="mailto:hej@webhjerte.dk" target="_blank">
              <Mail className="text-black w-fit text-[25px] md:text-[30px] ml-5 font-normal hover:scale-[0.9] transition-all" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
