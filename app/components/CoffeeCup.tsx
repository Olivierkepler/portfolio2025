"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FancyCoffeeCup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const steamWaves = Array.from({ length: 3 });

  return (
    <div className="flex justify-center items-end h-[400px]">
      <div ref={ref} className="relative flex flex-col items-center">
        {/* STEAM */}
        <div className="absolute -top-24 flex gap-3">
          {steamWaves.map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0 }}
              animate={
                isInView && {
                  opacity: [0, 0.4, 0.7, 0],
                  y: [0, -30, -60],
                }
              }
              transition={{
                repeat: Infinity,
                repeatDelay: i * 0.4,
                duration: 3,
                ease: "easeInOut",
              }}
              className="w-2 h-20 bg-gradient-to-t from-transparent via-white to-white opacity-50 rounded-full"
            />
          ))}
        </div>

        {/* CUP */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView && { y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-32 h-32 bg-gradient-to-b from-amber-600 to-amber-800 rounded-b-[50%] rounded-t-md shadow-lg border-[6px] border-amber-900"
        >
          {/* Inner Coffee Fill */}
          <div className="absolute top-1 left-1 right-1 h-4 bg-gradient-to-b from-amber-900 to-amber-700 rounded-t-md shadow-inner"></div>

          {/* Handle */}
          <div className="absolute right-[-24px] top-6 w-8 h-16 border-[5px] border-amber-900 rounded-full"></div>
        </motion.div>

        {/* SAUCER */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView && { scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-44 h-4 mt-2 bg-gray-700 rounded-full shadow-md"
        />
      </div>
    </div>
  );
}
