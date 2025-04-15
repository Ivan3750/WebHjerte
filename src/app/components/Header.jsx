"use client";
import Link from "next/link";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import W from "../../../public/W.png";
import Button from "./Button";

// Remove the TypeScript annotations here
const NavigationLinks = ({ closeMenu }) => (
  <>
    <Link
      className="text-white text-sm font-normal px-3 py-1 rounded-2xl transition hover:border hover:border-white"
      href="/"
      onClick={closeMenu}
    >
      Forside
    </Link>
    <Link
      className="text-white text-sm font-normal px-3 py-1 rounded-2xl transition hover:border hover:border-white"
      href="/services"
      onClick={closeMenu}
    >
      Services
    </Link>
    <Link
      className="text-white text-sm font-normal px-3 py-1 rounded-2xl transition hover:border hover:border-white"
      href="/om-os"
      onClick={closeMenu}
    >
      Om os
    </Link>
    <Link
      className="text-white text-sm font-normal px-3 py-1 rounded-2xl transition hover:border hover:border-white"
      href="/blog"
      onClick={closeMenu}
    >
      Blog
    </Link>
    <Link
      className="text-white text-sm font-normal px-3 py-1 rounded-2xl transition hover:border hover:border-white"
      href="/portefolje"
      onClick={closeMenu}
    >
      Portefølje
    </Link>
    <Link
      className="text-white text-sm font-normal px-3 py-1 rounded-2xl transition hover:border hover:border-white"
      href="/kontakt"
      onClick={closeMenu}
    >
      Kontakt
    </Link>
    <Link href="/track" className="md:hidden block" onClick={closeMenu}>
        <Button name="Spor projektet" />
      </Link>
  </>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset on cleanup
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-transparent md:px-6 lg:px-10 relative">
      <Link href="/" aria-label="Go to homepage">
        <div className="flex items-center gap-4">
          <Image src={W} width={50} height={50} alt="Logo" priority />
          <p className="text-white text-lg font-bold">
            Web<span className="text-[#00a8e8]">Hjerte</span>
          </p>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-4 bg-[#101213] rounded-2xl px-6 py-2 border border-[#424242]">
        <NavigationLinks closeMenu={closeMobileMenu} />
      </nav>

      <Link href="/track" className="md:block hidden" >
        <Button name="Spor projektet" />
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

        <NavigationLinks closeMenu={closeMobileMenu} />

        <Link href="/track"  className="md:block hidden">
          <Button name="Spor projektet" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
