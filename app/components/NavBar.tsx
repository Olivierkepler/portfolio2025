// components/NavBar.tsx
"use client";

import {
  Menu,
  Search,
  X,
  BadgeCheck,
  Briefcase,
  User,
  MessageSquare,
  Users,
  BookText,
  ChevronDown
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SubNav from "./subnav";

export default function NavBar() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = [
    { href: "#skills", label: "Skills", icon: <BadgeCheck size={18} /> },
    { href: "#works", label: "Projects", icon: <Briefcase size={18} /> },
    { href: "#experience", label: "Experience", icon: <User size={18} /> },
    { href: "#testimonials", label: "Testimonials", icon: <MessageSquare size={18} /> },
    { href: "#clients", label: "Clients", icon: <Users size={18} /> },
    { href: "#blog", label: "Blog", icon: <BookText size={18} /> },
  ];

  return (
    <header className="w-full bg-zinc-950 text-white px-10 pt-2 shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-extrabold tracking-tight text-white inline-block"
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
            <Image src="/images/me3.jpeg" alt="logo" width={50} height={50} className="rounded-full" />
              </motion.span>
            
            </motion.span>
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="hidden sm:flex gap-6 text-sm items-center">
          {navLinks.map(({ href, label, icon }) => (
            <Link
              key={label}
              href={href}
              className=" transition  text-white flex items-center gap-1 cursor-pointer"
            >
              <div className="flex flex-col items-center ">
              {icon} {label}
              </div>
            </Link>
          ))}

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-blue-400 transition"
            >
              More <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 right-0 w-40 bg-zinc-800 text-white shadow-lg rounded-md p-2 z-10"
                >
                  <Link href="#about" className="block px-3 py-2 hover:bg-zinc-700 rounded">About Me</Link>
                  <Link href="#contact" className="block px-3 py-2 hover:bg-zinc-700 rounded">Contact</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Search Bar */}
        <div className="relative w-full max-w-sm hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-zinc-400" size={18} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-zinc-400 hover:text-white"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-zinc-900 bg-opacity-95 z-50 flex flex-col p-6 space-y-6"
          >
            <div className="flex justify-between items-center">
              <span className="text-2xl font-extrabold tracking-tight text-blue-400">Olivier<span className="text-white">.</span></span>
              <button onClick={() => setMenuOpen(false)} className="text-zinc-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-lg mt-8">
              {navLinks.map(({ href, label, icon }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-400 transition flex items-center gap-3"
                >
                  {icon} {label}
                </Link>
              ))}
              <Link href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition flex items-center gap-3">About Me</Link>
              <Link href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition flex items-center gap-3">Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <SubNav />
    </header>
  );
}
