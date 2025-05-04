// components/TechIconGrid.tsx
import { motion } from "framer-motion";

export default function TechIconGrid({ techStack }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
    >
      {techStack.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
        >
          <tech.icon size={40} color={tech.color} className="mb-2" />
          <span className="text-sm font-medium text-gray-700">
            {tech.name}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
