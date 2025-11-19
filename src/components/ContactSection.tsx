"use client";

import { FiMail, FiGithub, FiLinkedin, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      label: "Email",
      value: "matt.manamtam@gmail.com",
      href: "mailto:matt.manamtam@gmail.com",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: <FiGithub size={24} />,
      label: "GitHub",
      value: "github.com/MattManamtam",
      href: "https://github.com/MattManamtam",
      color: "text-gray-800 dark:text-gray-200",
    },
    {
      icon: <FiLinkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/matt-theodore-manamtam",
      href: "https://www.linkedin.com/in/matt-theodore-manamtam-452595336/",
      color: "text-blue-700 dark:text-blue-300",
    },
    {
      icon: <FiPhone size={24} />,
      label: "Phone",
      value: "+63 967 109 3172",
      href: "tel:+639671093172",
      color: "text-green-600 dark:text-green-400",
    },
  ];

  return (
    <section id="contact" className="my-24">
      <motion.h2
        className="mb-12 text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>

      <div className="mx-auto max-w-3xl">
        {/* Contact Card */}
        <motion.div
          className="rounded-2xl border-2 border-neutral-300 bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-lg dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-8 text-center text-lg text-gray-600 dark:text-gray-300">
            Feel free to reach out for collaboration, internships, or just to
            say hi! I'm always open to discussing new projects and
            opportunities.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4 transition-all hover:scale-105 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-200 dark:bg-neutral-700 dark:group-hover:bg-neutral-600 ${contact.color}`}
                >
                  {contact.icon}
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {contact.label}
                  </p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
