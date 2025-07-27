"use client";

import { motion } from "framer-motion";
import { Code, Layers, Wrench, Sparkles, Sparkle } from "lucide-react"; 


const skills = [
  {
    title: "Languages",
    icon: Code,
    items: ["JavaScript", "TypeScript", "Python", "Java", "C/C++"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    items: ["Next.js", "React", "Tailwind CSS", "Flask", "Express"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "VS Code", "Postman", "MongoDB", "Firebase", "MySQL"],
  },
  {
    title: "Other",
    icon: Sparkle,
    items: ["REST APIs", "Responsive Design", "Data Structures", "Agile", "Framer Motion"],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Skills() {
  return (
    <section className="w-full px-6 bg-gradient-to-b from-[#0e0e10] via-black to-[#0e0e10] text-white">
    <h2 className="text-2xl mb-14 text-white text-center tracking-tight pt-2">
        🧠 Skills & Expertise
      </h2>
    

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {skills.map((skillSet, index) => (
          <motion.div
            key={skillSet.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: "easeOut"
                }
              }
            }}
            className="relative bg-[#1a1a1d] border border-zinc-800 cursor-pointer rounded-2xl p-6 shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 group overflow-hidden"
          >
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-emerald-500  opacity-10 blur-2xl rounded-full" />
            <div className="flex items-center gap-3 mb-6">
              <skillSet.icon className="text-emerald-400 w-6 h-6" />
              <h3 className="text-xl font-semibold text-emerald-300 tracking-wide">
                {skillSet.title}
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              {skillSet.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 group-hover:translate-x-1 transition-all duration-300"
                >
                  <span className="text-emerald-400">▸</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
