"use client";

import { motion } from "framer-motion";
import {
  FaGamepad,
  FaBook,
  FaGraduationCap,
  FaCode,
  FaBed,
} from "react-icons/fa";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="pb-24">
      <div id="about" className="mx-auto max-w-5xl -mt-20 pt-20">
        <motion.h2
          className="mb-12 text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid gap-8 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Side - Personal Info */}
          <motion.div
            className="grid grid-rows-2 gap-6"
            variants={itemVariants}
          >
            <div className="rounded-2xl border-2 border-neutral-300 bg-white p-6 shadow-lg dark:border-neutral-700 dark:bg-neutral-800 flex flex-col">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100">
                <FaGraduationCap className="text-blue-600" />
                Education
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300 flex-1">
                <p className="font-semibold text-gray-800 dark:text-gray-100">
                  Matt Theodore Manamtam
                </p>
                <p>Bachelor of Science in Information Technology</p>
                <p>Major in System Development</p>
                <p className="text-blue-600 dark:text-blue-400">
                  University of Pangasinan
                </p>
                <p className="text-sm italic">4th Year Student | 2025-2026</p>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-neutral-300 bg-white p-6 shadow-lg dark:border-neutral-700 dark:bg-neutral-800 flex flex-col">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100">
                <FaCode className="text-blue-600" />
                What I Do
              </h3>
              <p className="text-gray-600 dark:text-gray-300 flex-1">
                I&apos;m an aspiring web developer focused on building modern,
                responsive web applications using the MERN stack, Next.js, and
                Laravel. Always eager to learn new technologies and contribute
                to meaningful projects.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Hobbies & Interests */}
          <motion.div
            className="grid grid-rows-2 gap-6"
            variants={itemVariants}
          >
            <div className="rounded-2xl border-2 border-neutral-300 bg-white p-6 shadow-lg dark:border-neutral-700 dark:bg-neutral-800 flex flex-col">
              <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-100">
                When I&apos;m Not Coding
              </h3>
              <div className="space-y-3 flex-1">
                <div className="flex items-start gap-3">
                  <FaGamepad className="mt-1 text-xl text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                      Gaming
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Online games to unwind
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaBook className="mt-1 text-xl text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                      Reading
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Comics and books
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaBed className="mt-1 text-xl text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                      Sleeping
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      My happy pill
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-neutral-300 bg-white p-6 shadow-lg dark:border-neutral-700 dark:bg-neutral-800 flex flex-col">
              <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-100">
                Goals
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>
                    Gain hands-on experience in professional software
                    development
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>
                    Build impactful projects that solve real-world problems
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>
                    Continuously learn and grow as a full-stack developer
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
