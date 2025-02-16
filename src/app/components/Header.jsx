"use client"
import Link from "next/link";
import W from "../../../public/W.png";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex items-center justify-between p-2 bg-transparent">
      <div className="flex gap-5 items-center">
        <Image src={W} width={50} height={50} alt="Logo" />
        <p className="text-white text-lg font-bold">Web<span className="text-[#00a8e8]">Hjerte</span></p>
      </div>

      <nav className="hidden items-center justify-between w-[550px] h-[50px] bg-[#101213] rounded-2xl px-5 md:flex">
        <Link className="text-white text-sm font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/">Forside</Link>
        <Link className="text-white text-sm font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/services">Services</Link>
        <Link className="text-white text-sm font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/om-os">Om os</Link>
        <Link className="text-white text-sm font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/portefolje">Portefølje</Link>
        <Link className="text-white text-sm font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/blog">Blog</Link>
        <Link className="text-white text-sm font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/kontakt">Kontakt</Link>
      </nav>

      <Link href={"/track"} className="text-white text-lg font-normal text-center px-5 py-3 rounded-2xl bg-[#0af] transition-transform duration-300 hover:scale-105 md:block hidden">Følg projektet</Link>
      <IoMenu className="block md:hidden text-[30px] cursor-pointer" onClick={toggleMobileMenu} />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute h-screen w-screen top-0 left-0 right-0 bg-[#101213] rounded-lg p-5 md:hidden z-5">
          <Link className="block text-white text-xl font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/">Forside</Link>
          <Link className="block text-white text-xl font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/services">Services</Link>
          <Link className="block text-white text-xl font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/om-os">Om os</Link>
          <Link className="block text-white text-xl font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/portefolje">Portefølje</Link>
          <Link className="block text-white text-xl font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/blog">Blog</Link>
          <Link className="block text-white text-xl font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/kontakt">Kontakt</Link>
          <Link href={"/track"} className="block text-white text-xl font-normal  p-1 w-fit hover:border hover:border-white text-center px-5 py-3 rounded-2xl bg-[#0af]">Spor projektet</Link>

        </div>
      )}
    </header>
  );
};

export default Header;