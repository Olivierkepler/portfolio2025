"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Work {
  title: string;
  description: string;
  link?: string;
  image?: string;
}

export default function Works() {
  const [works] = useState<Work[]>([
    {
      title: "Virtual Try-On App",
      description: "Web app using TensorFlow.js and Next.js for real-time clothing overlay.",
      link: "https://your-demo-link.com",
      image: "/images/mobile1.png",
    },
    {
      title: "Budgeting Game",
      description: "Gamified finance tracker with level system built using React + Tailwind.",
      link: "https://your-demo-link.com/budget",
      image: "/images/Dashboard.png",
    },
    {
      title: "AI-Powered Chatbot",
      description: "Chatbot built with Flask and OpenAI API for customer support automation.",
      link: "https://github.com/yourname/chatbot",
      image: "/images/chatbot.png",
    },
    {
      title: "Weather Forecast API",
      description: "Flask API for real-time weather data, styled with Bootstrap and WTForms.",
      link: "https://weather-app-demo.com",
      image: "/images/datascience.png",
    },
    {
      title: "NCLEX Quiz App",
      description: "Quiz app for nursing students using Next.js, MongoDB, and NextAuth.",
      link: "https://nclex-app.com",
      image: "/images/nclex1.png",
    },
    {
      title: "E-commerce Website",
      description: "Modern e-commerce site built with Next.js, Tailwind, and Framer Motion.",
      link: "https://yourportfolio.com",
      image: "/images/ecommerce.png",
    },
  ]);

  return (
    <section className="w-full px-4 py-24 bg-[#0c0c0e]">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7 }}
       className="text-2xl mb-14 text-white text-center tracking-tight pt-2 "
      >
        🚀 Recent Works
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {works.map((work, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, {
            once: false,
            margin: "0px 0px -100px 0px",
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, rotate: [0, 1, -1, 0], transition: { duration: 0.5 } }}
              className="relative rounded-3xl overflow-hidden group shadow-xl bg-gradient-to-br from-[#1a1a1d] to-[#0c0c0e] border border-gray-800 hover:border-emerald-400 backdrop-blur-md transition-all duration-300"
            >
              {work.image && (
                <motion.img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute bottom-0 w-full p-5 bg-black/60 backdrop-blur-md"
              >
                <h3 className="text-xl font-bold text-white mb-1">{work.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{work.description}</p>
                {work.link && (
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 text-sm hover:text-white inline-flex items-center transition"
                  >
                    View Project →
                  </a>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
