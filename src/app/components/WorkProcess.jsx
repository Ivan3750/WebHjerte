'use client';

import { motion } from 'framer-motion';
import {
  LayoutTemplate,
  Puzzle,
  Palette,
  Code,
  Rocket,
} from 'lucide-react';

const steps = [
  {
    title: 'Struktur',
    icon: <LayoutTemplate className="w-8 h-8 text-blue-600" />,
    description:
      'Vi starter med at afklare dine behov og opstiller en klar struktur for projektet. Du behøver ikke udfylde lange formularer – vi guider dig gennem processen.',
  },
  {
    title: 'Prototype',
    icon: <Puzzle className="w-8 h-8 text-purple-600" />,
    description:
      'Vi bygger en klikbar prototype med de vigtigste funktioner og sider, så du tidligt kan få en fornemmelse af, hvordan din løsning kommer til at se ud.',
  },
  {
    title: 'Design',
    icon: <Palette className="w-8 h-8 text-pink-500" />,
    description:
      'Vi designer et moderne, brugervenligt layout, som matcher din virksomheds identitet og målgruppe.',
  },
  {
    title: 'Udvikling',
    icon: <Code className="w-8 h-8 text-green-600" />,
    description:
      'Vi koder siden i høj kvalitet med responsive funktioner og integrationer. Alt bliver testet grundigt, før lancering.',
  },
  {
    title: 'Lancering',
    icon: <Rocket className="w-8 h-8 text-yellow-500" />,
    description:
      'Når alt er klar, lancerer vi din side. Du får også adgang til en live beta-version og kan følge projektet trin for trin via /track med din unikke kode.',
  },
];

export default function WorkProcess() {
  return (
    <section className="bg-[#F7F6F6]" id="how-we-work">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="title !mb-[30px]"
        >
          🛠 Sådan arbejder vi
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border-[1px] border-[#b8b9b9] p-6"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="blogtitle !text-[20px]">
                {`${index + 1}. ${step.title}`}
              </h3>
              <p className="text">{step.description}</p>
            </motion.div>
          ))}
        </div>
    </section>
  );
}
