  "use client";
  import Link from "next/link";
  import Image from "next/image";
  import { IoMenu, IoClose } from "react-icons/io5";
  import { useState, useEffect } from "react";
  import W from "../../../public/W.png";
  import Button from "./Button";

  const NavigationLinks = ({ closeMenu }) => (
    <>
     { <Link
        className="text-white text-sm font-normal px-3 py-1 rounded-2xl transition hover:border hover:border-white logo-web" 
        href="/"
        onClick={closeMenu}
      >
        Forside
      </Link>}
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

     const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

     const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
    };

     useEffect(() => {
      if (isMobileMenuOpen) {
        document.body.style.overflow = "hidden";  
      } else {
        document.body.style.overflow = "auto"; 
      }

      return () => {
        document.body.style.overflow = "auto";  
      };
    }, [isMobileMenuOpen]);

    return (
      <header className="flex items-center justify-between px-4 py-3  md:px-6 lg:px-10 sticky top-0 left-0 border-b-2 border-[#404242] bg-[#1c1e1e] z-50">
        <Link href="/" aria-label="Go to homepage">
          <div className="flex items-center gap-4">
            <Image src={W} width={50} height={50} alt="Logo" priority />
            <p className="text-white text-lg font-bold  logo-web">
    Web<span className="text-[#00a8e8]">Hjerte</span>
  </p>

          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-2 bg-[#101213] rounded-2xl px-2 py-2 border border-[#424242]">
          <NavigationLinks closeMenu={closeMobileMenu} />
        </nav>

        <Link href="/track" className="md:block hidden" >
          <Button name="Spor projektet" />
        </Link>
        <button
          className="block md:hidden text-white text-2xl"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
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
