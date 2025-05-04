"use client"

import TechIconGrid from "./TechIconGrid";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiPhp, SiNodedotjs,
  SiWebflow, SiVercel, SiTailwindcss, SiMongodb, SiMysql, SiPostgresql,
  SiGithub, SiGit, SiFigma, SiNotion, SiFirebase, SiFramer
} from "react-icons/si";

const techStack = [
  { icon: SiJavascript, name: "JavaScript", color: "#f7df1e" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178c6" },
  { icon: SiReact, name: "React", color: "#61dafb" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000" },
  { icon: SiPhp, name: "PHP", color: "#8892BF" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38bdf8" },
  { icon: SiWebflow, name: "Webflow", color: "#4353FF" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  { icon: SiMysql, name: "MySQL", color: "#00758F" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { icon: SiGithub, name: "GitHub", color: "#000" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiVercel, name: "Vercel", color: "#000" },
  { icon: SiFramer, name: "Framer Motion", color: "#e94ef4" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { icon: SiNotion, name: "Notion", color: "#000" },
];



export default function TechStackSection() {
  return (
    <section className="bg-[#f9f9f9] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-800">
          Vi arbejder med de nyeste teknologier
        </h3>
        <TechIconGrid techStack={techStack} />
      </div>
    </section>
  );
}
