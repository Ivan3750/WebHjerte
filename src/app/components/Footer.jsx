import s  from "@/app/styles/footer.module.css"

const Footer = () => {
    return ( <footer className={s.footer}>

        <p className={s.footerTitle}>Explore</p>
        <ul className={s.footerLink}>
            <li>Services</li>
            <li>Company</li>
            <li>Project</li>
            <li>Blog</li>
            <li>Contact us</li>
        </ul>
    </footer>);
}
 
export default Footer;