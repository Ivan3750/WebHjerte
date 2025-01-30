import Image from "next/image";
import s from "../styles/industries.module.css"


const Industry = ({title, img, categories}) => {
    return ( <div className={s.Industry}>
        <p className={s.IndustryTitle}>{title}</p>
        <div className={s.IndustryBox}>
            {categories.map((category, index) => (
                <p className={s.industrycategory} key={index}>{category}</p>
            ))}
        </div>
            <Image className={s.industryImage} alt={title} src={img} width={1000}  height={1000}/>
    </div>);
}
 
export default Industry;