"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  {
    name: "Massachusetts General Hospital",
    logo: "/images/Logo Finance Élégant et Minimaliste en Gris anthracite et Doré.png",
    link: "https://www.massgeneral.org/",
  },
  {
    name: "Hope Initiative",
    logo: "/images/Black and White Modern Personal Logo.png",
    link: "https://hope4boston.org/",
  },
  {
    name: "Suffolk Construction",
    logo: "/images/delivery1.webp",
    link: "https://www.suffolk.com/",
  },
  {
    name: "Northeastern University",
    logo: "/images/Black and White Vintage Barber Shop Logo.png",
    link: "https://www.northeastern.edu/",
  },
];

export default function CustomersAndClients() {
  return (
    <section className="w-full  py-20 px-6 md:px-20 text-white">
      <h2 className="text-2xl font-extrabold text-center mb-16 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">
        🤝 Customers & Clients
      </h2>
      <div className="w-full max-w-6xl mx-auto h-[1px]  bg-gradient-to-r from-transparent via-slate-500 to-transparent mb-16" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-center max-w-6xl mx-auto">
        {clients.map((client, idx) => (
          <motion.a
            key={client.name}
            href={client.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 rounded-xl bg-dark hover:bg-slate-700 transition border border-slate-700 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={120}
              height={80}
              className="object-contain h-20"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
