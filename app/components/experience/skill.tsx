"use client";

import { motion } from "framer-motion";
import { Code2Icon, WrenchIcon, LanguagesIcon } from "lucide-react";

export default function SkillShowcase() {
  const skills = [
    {
      icon: <Code2Icon className="text-green-400 w-6 h-6" />,
      category: "Programming Languages & Frameworks",
      details: ["Python", "Java", "C/C++", "JavaScript", "HTML", "CSS", "React.js", "MySQL"]
    },
    {
      icon: <WrenchIcon className="text-green-400 w-6 h-6" />,
      category: "Tools & Platforms",
      details: ["MATLAB", "AWS Amplify", "AutoCAD", "Fusion 360"]
    },
    {
      icon: <LanguagesIcon className="text-green-400 w-6 h-6" />,
      category: "Spoken Languages",
      details: ["English (Proficient)", "French (Advanced)", "Haitian Creole (Advanced)"]
    }
  ];

  return (
    <section className="w-full px-6 py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-2xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500"
      >
        🛠️ Skill Set Overview
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-700 hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center gap-4 mb-4">
              {skill.icon}
              <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
            </div>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              {skill.details.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
