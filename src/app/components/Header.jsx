"use client";
import Link from "next/link";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import W from "../../../public/W.png";
import Button from "./Button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    console.log("change");
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <header className="flex items-center justify-between px-4 py-3 bg-transparent md:px-6 lg:px-10 relative ">
      <Link href="/" aria-label="Go to homepage">
        <div className="flex items-center gap-4">
          <Image src={W} width={50} height={50} alt="Logo" priority />
          <p className="text-white text-lg font-bold ">
            Web<span className="text-[#00a8e8]">Hjerte</span>
          </p>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 bg-[#101213] rounded-2xl px-6 py-2 border border-[#424242]">
          <Link
            className="text-white text-sm font-normal px-3 py-1 rounded-2xl transition hover:border hover:border-white"
            href="/"
          >
            Forside
          </Link>
          <Link
            className="text-white text-sm font-normal px-3 py-1 rounded-2xl transition hover:border hover:border-white"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="text-white text-sm font-normal px-3 py-1 rounded-2xl transition hover:border hover:border-white"
            href="/om-os"
          >
            Om os
          </Link>
          <Link
            className="text-white text-sm font-normal px-3 py-1 rounded-2xl transition hover:border hover:border-white"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="text-white text-sm font-normal px-3 py-1 rounded-2xl transition hover:border hover:border-white"
            href="/kontakt"
          >
            Kontakt
          </Link>
      </nav>

      <Link href="/track" className="md:block hidden">
        <Button name="Spor projektet"></Button>
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        className="block md:hidden text-white text-2xl"
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 z-[500] w-full h-screen bg-[#101213] flex flex-col items-center justify-center gap-6 transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full hidden"
        } md:hidden`}
      >
        <button
          className="text-white text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Close menu"
        >
          <IoClose />
        </button>


        <Link
            className="text-white text-sm font-normal px-3 py-1 rounded-2xl transition hover:border hover:border-white"
            href="/"
          >
            Forside
          </Link>
          <Link
            className="text-white text-sm font-normal px-3 py-1 rounded-2xl transition hover:border hover:border-white"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="text-white text-sm font-normal px-3 py-1 rounded-2xl transition hover:border hover:border-white"
            href="/om-os"
          >
            Om os
          </Link>
          <Link
            className="text-white text-sm font-normal px-3 py-1 rounded-2xl transition hover:border hover:border-white"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="text-white text-sm font-normal px-3 py-1 rounded-2xl transition hover:border hover:border-white"
            href="/kontakt"
          >
            Kontakt
          </Link>

        <Link href="/track">
        <Button name="Spor projektet"></Button>
      </Link>
      </div>
    </header>
  );
};

export default Header;
