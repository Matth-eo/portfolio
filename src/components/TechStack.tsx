"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiGit,
  SiVercel,
  SiLaravel,
  SiMysql,
} from "react-icons/si";

export default function TechStack() {
  const techItems = [
    { icon: <SiHtml5 size={40} className="text-orange-500" />, label: "HTML5" },
    { icon: <SiCss3 size={40} className="text-blue-500" />, label: "CSS3" },
    {
      icon: <SiJavascript size={40} className="text-yellow-400" />,
      label: "JavaScript",
    },
    {
      icon: <SiReact size={40} className="text-cyan-400" />,
      label: "React.js",
    },
    {
      icon: <SiTailwindcss size={40} className="text-cyan-500" />,
      label: "Tailwind CSS",
    },
    {
      icon: <SiMongodb size={40} className="text-green-500" />,
      label: "MongoDB",
    },
    {
      icon: (
        <SiExpress size={40} className="text-gray-600 dark:text-gray-300" />
      ),
      label: "Express.js",
    },
    {
      icon: <SiNodedotjs size={40} className="text-green-600" />,
      label: "Node.js",
    },
    {
      icon: <SiLaravel size={40} className="text-red-500" />,
      label: "Laravel",
    },
    { icon: <SiMysql size={40} className="text-blue-600" />, label: "MySQL" },
    { icon: <SiGit size={40} className="text-orange-600" />, label: "Git" },
    {
      icon: <SiVercel size={40} className="text-gray-800 dark:text-white" />,
      label: "Vercel",
    },
  ];

  return (
    <section id="tech" className="my-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="rounded-3xl border-2 border-neutral-200 bg-white/50 p-6 shadow-xl backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-900/50 md:p-12">
          <motion.h2
            className="mb-8 text-left text-3xl font-bold md:mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technologies
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {techItems.map((tech, index) => (
              <motion.div
                key={tech.label}
                className="flex flex-col items-center gap-3 rounded-2xl border-2 border-neutral-300 bg-white p-4 shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="flex h-16 w-16 items-center justify-center">
                  {tech.icon}
                </div>
                <span className="text-center text-xs font-medium text-gray-700 dark:text-gray-300 sm:text-sm">
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
