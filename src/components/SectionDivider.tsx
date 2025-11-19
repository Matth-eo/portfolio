"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative my-20 flex items-center justify-center overflow-hidden">
      {/* Animated gradient line */}
      <motion.div
        className="absolute h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      
      {/* Center dot decoration */}
      <motion.div
        className="relative z-10 flex gap-2"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="h-2 w-2 rounded-full bg-blue-600"></div>
        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
      </motion.div>
    </div>
  );
}

