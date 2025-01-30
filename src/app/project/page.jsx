"use client"

import People from "../components/People";
import Contact from "../components/Contact";
import Image from "next/image";
import s from "../styles/projects.module.css"

const ProjectsPage = () => {
    return ( <>
    <div className={s.titleBlock}>
        <h2 className={s.title}>Our projects</h2>
    </div>
    <div className={s.projectBox}>
{        <Image ></Image>
}        <div>
            <h3 className={s.projectTitle}>Social Media</h3>
                <p  className={s.projectInfo}>Website development process encompasses several key stages. We leverage expert development, rigorous
                testing, and seamless.Website development process encompasses several key stages. We leverage expert development, rigorousWebsite development process encompasses several key stages. We leverage expert development, rigorous
                testing, and seamless.Website development process encompasses several key stages. We leverage expert development, rigorous
                testing, and seamless.
                testing, and seamless.
                </p>
            <div>

            </div>
        </div>
    </div>
    <People></People>
    <Contact></Contact>
    </> );
}
 
export default ProjectsPage;