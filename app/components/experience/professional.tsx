"use client";

import { motion } from "framer-motion";
import { Building2Icon, BriefcaseIcon, FlaskConicalIcon, HammerIcon } from "lucide-react";

export default function ExperienceShowcase() {
  const experiences = [
    {
      icon: <BriefcaseIcon className="text-green-400 w-6 h-6" />, // Default briefcase
      place: "Massachusetts General Hospital (MGH)",
      role: "Work Control Associate",
      period: "2022–Present"
    },
    {
      icon: <Building2Icon className="text-green-400 w-6 h-6 animate-pulse" />, // Pulsing building
      place: "Hope Initiative",
      role: "Hope Ambassador, Math Gateway Specialist",
      period: "2022–2024"
    },
    {
      icon: (
        <motion.div
          className="w-6 h-6 text-green-400"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <FlaskConicalIcon />
        </motion.div>
      ),
      place: "Northeastern University (REU)",
      role: "Intern, Urban Air Quality Research",
      period: "2023"
    },
    {
      icon: (
        <motion.div
          className="text-green-400"
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <HammerIcon className="w-6 h-6" />
        </motion.div>
      ),
      place: "Suffolk Construction",
      role: "Project Admin Intern",
      period: "2022"
    }
  ];

  return (
    <section className="w-full px-6 py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-2xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500"
      >
        🏢 Professional Experience
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-700 hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center gap-4 mb-2">
              {exp.icon}
              <h3 className="text-xl font-semibold text-white">{exp.place}</h3>
            </div>
            <p className="text-sm text-teal-400 italic mb-1">{exp.role}</p>
            <p className="text-xs text-gray-400">{exp.period}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
