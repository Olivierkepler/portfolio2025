"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Marc Clairville",
    title: "Professor, Northeastern University",
    message:
      "Olivier is an exceptional student—curious, focused, and incredibly driven. His contributions during the REU program exceeded expectations, especially in data analysis and collaborative teamwork.",
    image: "/images/marc clairvil.jpeg",
  },
  {
    name: "Carla Abate",
    title: "Director, Hope Initiative",
    message:
      "His leadership and empathy as a Math Gateway Specialist impacted countless students. Olivier has a gift for teaching and connecting with people on a human level.",
    image: "/images/carla abate.png",
  },
  {
    name: "Yvette Williams",
    title: "Doctor of Philosophy",
    message:
      "Reliable, quick-thinking, and organized—Olivier handles high-pressure situations with grace. An asset to any team.",
    image: "/images/yevette.jpeg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const { name, title, message, image } = testimonials[index];

  return (
    <section className="w-full px-6 md:px-20 py-24 bg-black text-white">
      <motion.h2
        className="text-2xl md:text-2xl font-black text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500 tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        🌟 What People Say
      </motion.h2>

      <motion.div
        className="relative max-w-5xl mx-auto bg-gradient-to-br from-gray-900/70 to-gray-800/80 backdrop-blur-2xl border border-gray-700 rounded-3xl p-10 md:p-16 shadow-2xl"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Quote className="w-14 h-14 text-green-400 mb-6 animate-bounce" />

        <AnimatePresence mode="wait">
          <motion.p
            key={message}
            className="text-xl md:text-xl text-center text-slate-100 leading-relaxed font-light italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            “{message}”
          </motion.p>
        </AnimatePresence>

        <motion.div
          className="mt-12 flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Image
            src={image}
            alt={name}
            width={96}
            height={96}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-green-500 shadow-xl"
          />
          <div className="text-left">
            <h4 className="text-lg md:text-xl font-semibold text-white">{name}</h4>
            <p className="text-sm md:text-base text-green-300 italic">{title}</p>
          </div>
        </motion.div>

        <div className="mt-12 flex justify-center gap-5">
          <button
            onClick={prev}
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full border border-gray-600 transition text-sm font-medium text-white"
          >
            ← Previous
          </button>
          <button
            onClick={next}
            className="px-6 py-2 bg-green-600 hover:bg-green-500 rounded-full shadow-md transition text-sm font-medium text-white"
          >
            Next →
          </button>
        </div>
      </motion.div>
    </section>
  );
}
