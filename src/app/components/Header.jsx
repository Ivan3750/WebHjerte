import Link from "next/link";



const Header = () => {

  
    return (
      <header className="flex items-center justify-between p-2 bg-transparent">
        <p className="text-white text-lg font-bold">WebStudio</p>
        <nav className="flex items-center justify-between w-[550px] h-[50px] bg-[#101213] rounded-2xl px-5">
          <Link className="text-white text-sm font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/">Forside</Link>
          <Link className="text-white text-sm font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/services">Services</Link>
          <Link className="text-white text-sm font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/om-os">Om os</Link>
          <Link className="text-white text-sm font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/portefolje">Portefølje</Link>
          <Link className="text-white text-sm font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/blog">Blog</Link>
          <Link className="text-white text-sm font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/kontakt">Kontakt</Link>
        </nav>
        <Link href={"/track"} className="text-white text-lg font-normal text-center px-5 py-3 rounded-2xl bg-[#0af] transition-transform duration-300 hover:scale-105">Følg projektet</Link>
      </header>
    );
  };
  
  export default Header;