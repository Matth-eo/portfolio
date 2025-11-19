"use client";

import Image from "next/image";
import { DotPattern } from "./DotPattern";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import TextType from "./TextType";

export default function HeroSection() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center py-12 md:py-20 overflow-hidden">
      {/* Dot Pattern Background */}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        )}
      />

      <div className="relative z-10 grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 lg:pl-12">
        {/* Left Side - Profile Picture */}
        <motion.div
          className="relative flex w-full justify-center lg:justify-center lg:pl-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-blue-600 shadow-2xl dark:border-blue-500">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-white dark:bg-neutral-900">
              <Image
                src="/images/profile-pic.png"
                alt="Matt Manamtam"
                fill
                className="object-cover object-center"
                style={{ objectPosition: "center 30%" }}
                priority
                sizes="(max-width: 768px) 288px, 288px"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side - About Me */}
        <motion.div
          className="flex flex-col space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div>
            <h1 className="mb-3 text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              <TextType
                text={["Hi, I'm Matt"]}
                as="span"
                typingSpeed={100}
                pauseDuration={2000}
                showCursor={false}
                cursorCharacter="|"
                loop={false}
                className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl"
              />
            </h1>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
              <TextType
                text={["4th-year BSIT student"]}
                as="span"
                typingSpeed={80}
                initialDelay={1400}
                pauseDuration={2000}
                showCursor={false}
                cursorCharacter="|"
                loop={false}
                className="text-lg font-medium"
              />
            </p>
          </div>

          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"></div>

          <div className="min-h-[120px]">
            <p className="text-justify text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              <TextType
                text={[
                  "An aspiring web developer focused on System Development and modern web technologies. I build responsive web applications using MERN stack, Next.js, and Laravel. Always eager to learn and contribute to real-world projects.",
                ]}
                as="span"
                typingSpeed={30}
                initialDelay={2800}
                pauseDuration={2000}
                showCursor={false}
                cursorCharacter="|"
                loop={false}
                className="text-lg leading-relaxed"
              />
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "#projects")}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <span>See my work</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-600 bg-transparent px-8 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-600 hover:text-white dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white cursor-pointer"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
