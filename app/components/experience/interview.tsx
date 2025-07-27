"use client";

import { motion } from "framer-motion";
import { RocketIcon, PhoneCallIcon, DatabaseIcon, SearchIcon, ActivityIcon } from "lucide-react";

export default function InterviewHighlights() {
  const items = [
    {
      icon: <RocketIcon className="text-green-400 w-6 h-6" />,
      title: "Leadership in Action",
      desc: "Led peer tutoring initiatives and served as ambassador, uplifting fellow students."
    },
    {
      icon: <PhoneCallIcon className="text-green-400 w-6 h-6" />,
      title: "Operational Agility",
      desc: "Managed 200+ calls at MGH—adept in fast-paced, high-pressure environments."
    },
    {
      icon: <DatabaseIcon className="text-green-400 w-6 h-6" />,
      title: "Full-Stack Fluency",
      desc: "Confident with backend APIs and frontend interfaces using React & Tailwind."
    },
    {
      icon: <SearchIcon className="text-green-400 w-6 h-6" />,
      title: "Research Ready",
      desc: "REU experience honed critical thinking, documentation, and problem solving."
    },
    {
      icon: <ActivityIcon className="text-green-400 w-6 h-6" />,
      title: "Quick Learner",
      desc: "Eager to contribute immediately and adapt to new tools and workflows."
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
        💼 Interview Highlights
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-700 hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center gap-4 mb-4">
              {item.icon}
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
