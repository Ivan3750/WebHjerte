import s from "@/app/styles/header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <p>WebStudio</p>
      <nav className={s.nav}>
        <a className={s.navLink} href="/">Home</a>
        <a className={s.navLink} href="/company">Company</a>
        <a className={s.navLink} href="/project">Project</a>
{/*         <a className={s.navLink} href="#">Blog</a>
 */}        <a className={s.navLink} href="/contact">Contact</a>
      </nav>
      <button className={s.btnTrack}>Track project</button>
    </header>
  );
};

export default Header;
