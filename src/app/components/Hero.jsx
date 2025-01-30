import s from "@/app/styles/hero.module.css"
const Hero = () => {
    return ( 
        <div className={s.hero}>
        <div className={s.herobox}>
        <div className={s.titlebox}>
            <span>Web development</span>
            <span>that brings</span>
            <span>your ideas</span>
            <span>into business</span>
            <button className={s.button}>Let's start</button>
        </div>
            <div className={s.template}></div>
        </div>
        </div> 
    )
}
 
export default Hero;