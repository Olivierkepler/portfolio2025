"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const dropdownData = [
  {
    title: "Projects",
    tabs: ["Frontend", "Backend", "Fullstack"],
  },
  {
    title: "Experience",
    tabs: ["Jobs", "Internships", "Freelance"],
  },
  {
    title: "More",
    tabs: ["Blog", "Clients", "Testimonials"],
  },
];

export default function SubNav() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show SubNav when scrolling down and past the NavBar height (76px)
      if (currentScrollY > 76 && currentScrollY > lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY <= 76 || currentScrollY < lastScrollY) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full flex justify-center py-4 bg-black text-white z-40 fixed top-[60px]"
        >
          <ul className="flex gap-10 relative">
            {dropdownData.map((menu, index) => (
              <li
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setOpenDropdown(index as any)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="flex items-center gap-1">
                  {menu.title}
                  <ChevronDown size={16} />
                </div>
                <AnimatePresence>
                  {openDropdown === index && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-8 left-0 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 shadow-xl"
                    >
                      {menu.tabs.map((tab, tabIndex) => (
                        <li
                          key={tabIndex}
                          className={`px-3 py-1.5 text-sm rounded hover:bg-green-700/30 transition-all cursor-pointer ${
                            activeTab === tab ? "text-green-400" : "text-white"
                          }`}
                          onClick={() => setActiveTab(tab as any)}
                        >
                          {tab}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
