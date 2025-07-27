"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, Code, Award } from "lucide-react";

const educationData = [
  {
    title: "University of Massachusetts, Boston",
    subtitle: "B.S. in Computer Science, Expected 2025",
    description:
      "Building a strong foundation in algorithms, systems programming, and AI.",
    icon: <GraduationCap size={24} className="text-emerald-400" />,
  },
  {
    title: "Bunker Hill Community College",
    subtitle: "A.S. in Engineering & Computer Science, 2024",
    description:
      "Completed core engineering courses and software development training.",
    icon: <School size={24} className="text-emerald-400" />,
  },
  {
    title: "BE MASS Program",
    subtitle: "Certificate of Excellence in Customer Service",
    description:
      "Honored for exceptional service, leadership, and effective communication.",
    icon: <Award size={24} className="text-emerald-400" />,
  },
  {
    title: "Immigration Family Service Institute",
    subtitle: "Certificate in Web Development",
    description:
      "Trained in responsive design, HTML, CSS, JavaScript, and Git workflows.",
    icon: <Code size={24} className="text-emerald-400" />,
  },
];

export default function Education() {
  return (
    <section className="w-full text-white px-4 sm:px-8 lg:px-12 py-24 bg-[#0e0e10] font-sans">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-extrabold text-center mb-16 tracking-tight text-emerald-400"
        >
          🎓 My Educational Journey
        </motion.h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[4px] h-full bg-zinc-800"></div>
          </div>

          {educationData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: false, amount: 0.4 }}
                whileHover={{ scale: 1.05, rotate: [0, 1.5, -1.5, 0], transition: { duration: 0.5 } }}
                className={`group relative w-full max-w-xl mx-auto p-8 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-lg hover:border-emerald-400 transition-all duration-300 backdrop-blur-md z-10 overflow-hidden ${
                  isLeft ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"
                }`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 2.5, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute top-1/2 left-1/2 w-24 h-24 bg-emerald-500 rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                />

                <span
                  className={`w-5 h-5 rounded-full bg-zinc-900 border-4 border-zinc-800 absolute top-1/2 -translate-y-1/2 z-20 transition-all duration-300 group-hover:bg-emerald-400 hidden md:block ${
                    isLeft ? "-right-[38px]" : "-left-[38px]"
                  }`}
                />

                <span
                  className={`absolute h-[4px] bg-zinc-800 top-1/2 -translate-y-1/2 hidden md:block ${
                    isLeft ? "-right-[80px] w-[42px]" : "-left-[80px] w-[42px]"
                  }`}
                />

                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-400 font-medium">
                  {item.subtitle}
                </p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: false }}
                  className="text-sm text-gray-400 mt-2 leading-relaxed"
                >
                  {item.description}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
