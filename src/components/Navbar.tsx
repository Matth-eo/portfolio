"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 80; // Navbar height offset
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-neutral-900/90 backdrop-blur border-b border-neutral-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg transition-transform group-hover:scale-110">
            <Image
              src="/images/mylogo.png"
              alt="Matt Manamtam Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-lg font-bold text-white">Matt</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-sm font-medium">
          <li>
            <motion.a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "#about")}
              className="relative text-gray-300 transition-colors hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-500"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "#projects")}
              className="relative text-gray-300 transition-colors hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-500"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#tech"
              onClick={(e) => handleSmoothScroll(e, "#tech")}
              className="relative text-gray-300 transition-colors hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Tech
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-500"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="relative text-gray-300 transition-colors hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-500"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
