"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HomeIcon,
  BriefcaseIcon,
  BookOpenIcon,
  UsersIcon,
  StarIcon,
  PenToolIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";

const navItems = [
  { id: "header", label: "Home", icon: HomeIcon },
  { id: "skills", label: "Skills", icon: PenToolIcon },
  { id: "works", label: "Projects", icon: BriefcaseIcon },
  { id: "experience", label: "Experience", icon: StarIcon },
  { id: "testimonials", label: "Testimonials", icon: UsersIcon },
  { id: "clients", label: "Clients", icon: UsersIcon },
  { id: "blog", label: "Blog", icon: BookOpenIcon },
];



export default function SideNav() {
  const [active, setActive] = useState("header");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActive(item.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tooltipVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -5 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed top-1/2 left-6 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 bg-gray-900/80 rounded-2xl p-4 shadow-xl border border-gray-700 backdrop-blur-md">
        {navItems.map((item, i) => (
          <motion.div
            key={item.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { 
                opacity: 1,
                x: 0,
                transition: {
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }
              }
            }}
          >
            <Link
              href={`#${item.id}`}
              className={`group relative flex items-center gap-3 px-2 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-green-700/20 hover:text-white ${
                active === item.id ? "text-green-400" : "text-gray-400"
              }`}
            >
              <item.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <motion.span
                className="whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300 ease-in-out"
                initial="hidden"
                animate="visible"
                variants={tooltipVariants}
              >
                {item.label}
              </motion.span>
              {active === item.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -left-2 top-1/2 -translate-y-1/2 h-6 w-1 rounded bg-green-400"
                />
              )}
            </Link>
          </motion.div>
        ))}
      </aside>

      {/* Mobile Drawer */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 bg-gray-800 rounded-md"
        >
          {isOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -250, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-64 bg-gray-900 border-r border-gray-700 z-40 p-6 md:hidden"
          >
            {navItems.map((item) => (
              <motion.div key={item.id} className="mb-4">
                <Link
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 text-sm px-3 py-2 rounded-lg transition-all duration-300 hover:bg-green-700/20 hover:text-white ${
                    active === item.id ? "text-green-400" : "text-gray-400"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
                
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
