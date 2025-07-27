"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Globe, Sparkles } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/olivierkepler",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/olivierkepler",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "mailto:sameold61@gmail.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "https://olivierportfolio.com",
    icon: Globe,
    label: "Portfolio",
  },
];

export default function Header() {
  return (
    <section className="w-full bg-gradient-to-b from-black via-[#0e0e10] to-black text-white pb-12 border border-zinc-800 rounded-sm shadow-2xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 relative">
        {/* Banner */}
        <motion.div
          whileInView={{ scale: [1.05, 1] }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-[150px] sm:h-[200px] relative rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/me4.jpeg"
            alt="Header Banner"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Profile and Info */}
        <motion.div
          whileInView={{ opacity: [0, 1], y: [30, 0] }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-10 mt-[-48px] sm:mt-[-80px] relative z-10 px-6"
        >
          {/* Profile Pic */}
          <motion.div
            whileHover={{ rotate: [0, 3, -3, 0], transition: { duration: 0.6 } }}
            className="relative text-center sm:text-left"
          >
            {/* <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-[5px]  border-emerald-400 overflow-hidden shadow-xl bg-white">
              <Image
                src="/images/me3.jpeg"
                alt="Olivier Kepler François"
                width={160}
                height={160}
                className="object-cover"
              />
            </div> */}


<motion.div
      className="flex justify-center items-center cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      // onClick={() => setClicked(!clicked)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="relative w-40 h-40 sm:w-48 sm:h-48">
        {/* Dashed Pulse Animation */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-400"
          animate={{
            scale: [1, 0.9, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Dotted Ripple Animation */}
        <motion.div
          className="absolute inset-1 rounded-full border-2 border-dotted border-emerald-700"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Profile Image with glow on hover */}
        <motion.div
          className="absolute inset-[6px] rounded-full overflow-hidden bg-white shadow-2xl"
          whileHover={{ boxShadow: "0 0 20px rgba(0, 255, 170, 0.6)" }}
        >
          <Image
            src="/images/me3.jpeg"
            alt="Olivier Kepler François"
            fill
            className="object-cover rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>


            <motion.span
              whileInView={{ opacity: [0, 1] }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white w-full text-center block mt-3 text-base font-semibold tracking-tight"
            >
              Olivier K Francois
            </motion.span>
          </motion.div>

          {/* Info & Socials */}
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-6">
            <motion.div
              whileInView={{ opacity: [0, 1], x: [-20, 0] }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center sm:text-left"
            >
              <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 mb-1">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="text-sm tracking-wide font-medium uppercase">
                  Open to opportunities
                </span>
              </div>
              <p className="text-sm sm:text-base text-zinc-300">
                Administrateur de Projet (chez Suffolk), Ingénieur civil (étude en cours)
              </p>
              <p className="text-sm text-zinc-400 mt-1">
                Quincy, Massachusetts, États-Unis
              </p>
              <p className="text-sm text-blue-400 mt-1">72 relations</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: [0, 1], x: [20, 0] }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex gap-4 justify-center md:justify-end"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.25, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-zinc-400 hover:text-emerald-400 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
