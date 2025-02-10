import Link from "next/link";
import W from "../../../public/W.png"
import Image from "next/image";


const Header = () => {

  
    return (
      <header className="flex items-center justify-between p-2 bg-transparent">
       {/* <div className="flex gap-5 items-center">
      <Image src={W} width={50} height={50}></Image>
        <p className="text-white text-lg font-bold">Web<span className="text-[#00a8e8]">Hjerte</span></p>
        </div>
        <nav className="flex items-center justify-between w-[550px] h-[50px] bg-[#101213] rounded-2xl px-5">
          <Link className="text-white text-sm font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/">Forside</Link>
          <Link className="text-white text-sm font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/services">Services</Link>
          <Link className="text-white text-sm font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/om-os">Om os</Link>
          <Link className="text-white text-sm font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/portefolje">Portefølje</Link>
          <Link className="text-white text-sm font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/blog">Blog</Link>
          <Link className="text-white text-sm font-normal text-center rounded-2xl p-1 w-fit hover:border hover:border-white" href="/kontakt">Kontakt</Link>
        </nav> 
        <Link href={"/track"} className="text-white text-lg font-normal text-center px-5 py-3 rounded-2xl bg-[#0af] transition-transform duration-300 hover:scale-105">Følg projektet</Link>  */}
      </header>
    );
  };
  
  export default Header;