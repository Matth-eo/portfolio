// src/components/ProjectsSection.tsx
"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
  galleryImages: string[];
};

const projects: Project[] = [
  {
    title: "SWIFTDRIVE",
    subtitle: "2ND YEAR SECOND SEMESTER",
    description:
      "A mobile app that lets users rent cars and other vehicles quickly and hassle-free. Whether for daily commutes or long trips, users can browse, book, and manage rentals with ease.",
    tech: ["Laravel", "Android"],
    image: "/images/swiftdrive.png",
    galleryImages: ["/images/swiftdrive/drive-1.jpg", "/images/swiftdrive/drive-2.jpg"],
  },
  {
    title: "HELP ISKO!",
    subtitle: "3RD YEAR FIRST SEMESTER",
    description:
      "A mobile app that connects students and professors for duty assignments. Students can request available duties, while professors can upload and manage duty postings, making the process seamless and efficient.",
    tech: ["Flutter", "Laravel"],
    image: "/images/helpisko.png",
    galleryImages: [
      "/images/helpisko/isko-1.jpg",
      "/images/helpisko/isko-2.jpg",
      "/images/helpisko/isko-3.jpg",
      "/images/helpisko/isko-4.jpg",
    ],
  },
  {
    title: "LIKHAMAT",
    subtitle: "CAPSTONE PROJECT | 2025-2026",
    description:
      "Gamified recycled-art platform where users submit crafts, vote, and donate to charity. Promotes sustainability through philanthropy and creative reuse of materials.",
    tech: ["NextJs", "MongoDB", "NodeJs"],
    image: "/images/likhamat-landing.png",
    galleryImages: [
      "/images/likhamat/lik-1.png",
      "/images/likhamat/lik-2.png",
      "/images/likhamat/lik-3.png",
      "/images/likhamat/lik-4.png",
    ],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.galleryImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.galleryImages.length - 1 : prev - 1
      );
    }
  };

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
    <>
    <section id="projects" className="my-24">
      <motion.h2
        className="mb-12 text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-2xl border-2 border-neutral-300 bg-white shadow-lg transition-all hover:border-blue-500 hover:shadow-2xl dark:border-neutral-700 dark:bg-neutral-800"
            variants={itemVariants}
          >
            {/* Project Image */}
            <div 
              className={`relative h-48 w-full overflow-hidden cursor-pointer group/image ${
                project.title === "HELP ISKO!" 
                  ? "bg-white" 
                  : "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-700 dark:to-neutral-800"
              }`}
              onClick={() => openGallery(project)}
            >
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className={`transition-transform duration-300 group-hover:scale-110 ${
                  project.title === "HELP ISKO!" ? "object-contain" : "object-cover"
                }`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-semibold">Click to view pictures</p>
              </div>
            </div>

            {/* Project Content */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-100">
                {project.title}
              </h3>

              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                {project.subtitle}
              </p>

              <p className="mb-4 flex-1 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* Gallery Modal */}
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeGallery}
        >
          <motion.div
            className="relative max-h-[90vh] max-w-[90vw]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute -right-4 -top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg transition-all hover:scale-110 hover:bg-gray-100"
              onClick={closeGallery}
              aria-label="Close modal"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image Container */}
            <div className="relative h-[80vh] w-[80vw]">
              <Image
                src={selectedProject.galleryImages[currentImageIndex]}
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>

            {/* Navigation Buttons */}
            {selectedProject.galleryImages.length > 1 && (
              <>
                {/* Previous Button */}
                <button
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <svg
                    className="h-8 w-8 md:h-10 md:w-10 drop-shadow-lg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Next Button */}
                <button
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <svg
                    className="h-8 w-8 md:h-10 md:w-10 drop-shadow-lg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white">
                  {currentImageIndex + 1} / {selectedProject.galleryImages.length}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
