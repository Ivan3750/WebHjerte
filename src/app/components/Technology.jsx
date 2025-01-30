"use client";

import { useState } from "react";
import s from "../styles/technology.module.css";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill, RiPhpFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiNginx } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";

const technologies = [
  { name: "React", category: "frontend", icon: <FaReact /> },
  { name: "Next.js", category: "frontend", icon: <RiNextjsFill /> },
  { name: "JavaScript", category: "frontend", icon: <FaJs /> },
  { name: "HTML5", category: "frontend", icon: <FaHtml5 /> },
  { name: "CSS3", category: "frontend", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", category: "frontend", icon: <RiTailwindCssFill /> },
  { name: "Node.js", category: "backend", icon: <FaNodeJs /> },
  { name: "Express.js", category: "backend", icon: <SiExpress /> },
  { name: "PHP", category: "backend", icon: <RiPhpFill /> },
  { name: "MongoDB", category: "database", icon: <SiMongodb /> },
  { name: "PostgreSQL", category: "database", icon: <BiLogoPostgresql /> },
  { name: "SQL", category: "database", icon: <TbSql /> },
  { name: "MySQL", category: "database", icon: <GrMysql /> },
  { name: "Nginx", category: "devops", icon: <SiNginx /> },
  { name: "GitHub", category: "devops", icon: <FaGithub /> },
];

const Technology = () => {
  const [value, setValue] = useState("frontend");

  const handleClick = (type) => {
    setValue(type);
  };

  return (
    <section className={s.sectionTechnology}>
      <p className={s.title}>Technology</p>
      <div className={s.boxfilter}>
        <p
          onClick={() => handleClick("frontend")}
          className={value === "frontend" ? s.techactive : s.tech}
        >
          Front end
        </p>
        <p
          onClick={() => handleClick("backend")}
          className={value === "backend" ? s.techactive : s.tech}
        >
          Back end
        </p>
        <p
          onClick={() => handleClick("devops")}
          className={value === "devops" ? s.techactive : s.tech}
        >
          DevOps
        </p>
        <p
          onClick={() => handleClick("database")}
          className={value === "database" ? s.techactive : s.tech}
        >
          Database
        </p>
      </div>
      <div className={s.techGrid}>
        {technologies
          .filter((tech) => tech.category === value)
          .map((tech) => (
            <div key={tech.name} className={s.cardTech}>
              <div className={s.iconTech}>{tech.icon}</div>
              <p className={s.techName}>{tech.name}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Technology;