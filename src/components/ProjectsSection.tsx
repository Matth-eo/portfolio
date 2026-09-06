"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiGithub,
  FiMaximize2,
  FiX,
} from "react-icons/fi";

type Project = {
  title: string;
  category: string;
  purpose: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  sourceAvailable?: boolean;
  demo?: string;
  preview: "applyflow" | "tracebit" | "likhamat";
  images: string[];
};

const projects: Project[] = [
  {
    title: "ApplyFlow",
    category: "01 / Job application management",
    purpose: "A little clarity in the job search.",
    description:
      "A private workspace for keeping applications, interview progress, and next steps in one place, with a dashboard that makes the search easier to follow.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Auth.js"],
    features: [
      "Private accounts & role-based admin access",
      "Searchable applications & six workflow statuses",
      "Dashboard statistics & application insights",
    ],
    github: "https://github.com/Matth-eo/applyflow",
    sourceAvailable: false,
    preview: "applyflow",
    images: [],
  },
  {
    title: "Bug Tracker",
    category: "02 / Developer tools",
    purpose: "From reported issue to resolved.",
    description:
      "Tracebit is a focused issue tracker for organizing projects and the work within them. Track bugs, features, and tasks without losing the context.",
    tech: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"],
    features: [
      "Projects with owner-scoped issue access",
      "Issue status, priority & type filters",
      "Authenticated workflows & progress summaries",
    ],
    github: "https://github.com/Matth-eo/tracebit",
    sourceAvailable: false,
    preview: "tracebit",
    images: [],
  },
  {
    title: "Likhamat",
    category: "03 / Capstone project",
    purpose: "Creativity with a second purpose.",
    description:
      "A gamified recycled-art platform connecting creative reuse with philanthropy. Users share crafts, vote on creations, and support charitable causes.",
    tech: ["Next.js", "MongoDB", "Node.js"],
    features: [
      "Recycled-art submissions & community voting",
      "Gamified creative participation",
      "Charitable giving through sustainability",
    ],
    github: "https://github.com/Coco10130/likhamat",
    preview: "likhamat",
    images: [
      "/images/likhamat-landing.png",
      "/images/likhamat/lik-1.png",
      "/images/likhamat/lik-2.png",
      "/images/likhamat/lik-3.png",
      "/images/likhamat/lik-4.png",
    ],
  },
];

const archived = [
  {
    title: "SwiftDrive",
    description: "Vehicle browsing, booking, and rental management.",
    tech: "Laravel / Android",
    images: [
      "/images/swiftdrive.png",
      "/images/swiftdrive/drive-1.jpg",
      "/images/swiftdrive/drive-2.jpg",
    ],
  },
  {
    title: "Help Isko!",
    description:
      "Duty postings and requests connecting students and professors.",
    tech: "Flutter / Laravel",
    images: [
      "/images/helpisko.png",
      "/images/helpisko/isko-1.jpg",
      "/images/helpisko/isko-2.jpg",
      "/images/helpisko/isko-3.jpg",
      "/images/helpisko/isko-4.jpg",
    ],
  },
];

function AppPreview({ kind }: { kind: "applyflow" | "tracebit" }) {
  const apply = kind === "applyflow";
  const stats = apply
    ? [
        ["Applications", "24"],
        ["Interviews", "06"],
        ["Offers", "02"],
      ]
    : [
        ["Open issues", "12"],
        ["In progress", "04"],
        ["Completed", "18"],
      ];
  const rows = apply
    ? [
        ["Acme Studio", "Frontend Developer", "Interview"],
        ["Northstar", "Software Engineer", "Applied"],
        ["Orbit Labs", "Full-Stack Developer", "Offer"],
      ]
    : [
        ["Fix session redirect", "BUG · HIGH", "In Progress"],
        ["Add project filters", "FEATURE · MEDIUM", "Todo"],
        ["Validate issue form", "TASK · LOW", "Done"],
      ];
  return (
    <div
      className="mock-app"
      role="img"
      aria-label={
        apply
          ? "ApplyFlow dashboard mockup with sample application statistics and job application statuses"
          : "Tracebit issue tracker mockup with sample issues, priorities, and progress"
      }
    >
      <div className="mock-sidebar">
        <span className="mock-logo">
          {apply ? "↗ ApplyFlow" : "◈ Tracebit"}
        </span>
        <p className="active">Overview</p>
        <p>{apply ? "Applications" : "Projects"}</p>
        {!apply && <p>Issues</p>}
      </div>
      <div className="mock-content">
        <div className="mock-heading">
          {apply ? "Your next chapter." : "Workspace overview"}
        </div>
        <p className="mock-sub">
          {apply
            ? "A clearer view of your job search."
            : "Every issue. A step closer to shipped."}
        </p>
        <div className="mock-stats">
          {stats.map(([label, value]) => (
            <div className="mock-stat" key={label}>
              {label}
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <div className="mock-table-title">
          {apply ? "Recent applications" : "Recent issues"}
        </div>
        {rows.map(([name, detail, status], i) => (
          <div className="mock-row" key={name}>
            <span>{name}</span>
            <small>{detail}</small>
            <span className={`mock-status ${i === 2 ? "green" : ""}`}>
              {status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [gallery, setGallery] = useState<{
    title: string;
    images: string[];
  } | null>(null);
  const [index, setIndex] = useState(0);
  const trigger = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!gallery) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
      trigger.current?.focus();
    };
  }, [gallery]);

  const openGallery = (project: { title: string; images: string[] }) => {
    trigger.current = document.activeElement as HTMLElement;
    setIndex(0);
    setGallery(project);
  };
  const move = (direction: number) => {
    if (gallery)
      setIndex(
        (current) =>
          (current + direction + gallery.images.length) % gallery.images.length,
      );
  };

  return (
    <>
      <section
        id="projects"
        className="section"
        aria-labelledby="projects-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="projects-title">Ideas, built into applications.</h2>
          </div>
          <p>
            A closer look at the products I&apos;m building and the problems
            they solve.
          </p>
        </div>
        {projects.map((project, i) => (
          <article
            key={project.title}
            className={`project ${i % 2 ? "reverse" : ""}`}
          >
            <div className="project-copy">
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-purpose">{project.purpose}</p>
              <p className="project-description">{project.description}</p>
              <ul className="feature-list">
                {project.features.map((feature) => (
                  <li key={feature}>
                    <FiCheck aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="tech-tags" aria-label="Technology stack">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  className="text-link"
                  href={
                    project.sourceAvailable === false
                      ? `mailto:matt.manamtam@gmail.com?subject=${encodeURIComponent(`Source code request: ${project.title}`)}`
                      : project.github
                  }
                  target={
                    project.sourceAvailable === false ? undefined : "_blank"
                  }
                  rel={
                    project.sourceAvailable === false
                      ? undefined
                      : "noopener noreferrer"
                  }
                >
                  <FiGithub />{" "}
                  {project.sourceAvailable === false
                    ? "Request source"
                    : "GitHub"}{" "}
                  <FiArrowUpRight />
                </a>
                {project.demo && (
                  <a
                    className="text-link"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo <FiArrowUpRight />
                  </a>
                )}
                {project.images.length > 0 && (
                  <button
                    className="text-link"
                    onClick={() => openGallery(project)}
                  >
                    View gallery <FiMaximize2 />
                  </button>
                )}
              </div>
            </div>
            <div
              className={`project-visual ${i === 1 ? "blue" : i === 2 ? "green" : ""}`}
            >
              <div className="preview-window">
                <div className="window-bar" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <span>
                    {project.preview === "tracebit"
                      ? "Tracebit / Workspace"
                      : project.title}
                  </span>
                </div>
                {project.preview === "likhamat" ? (
                  <button
                    className="screenshot-button"
                    aria-label="Open Likhamat screenshot gallery"
                    onClick={() => openGallery(project)}
                  >
                    <div className="screenshot">
                      <Image
                        src="/images/likhamat-landing.png"
                        alt="Likhamat recycled-art platform landing page"
                        fill
                        sizes="(max-width: 640px) 90vw, 55vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </button>
                ) : (
                  <AppPreview kind={project.preview} />
                )}
              </div>
              <div className="preview-caption">
                <span>
                  {project.preview === "likhamat"
                    ? "Community & sustainability"
                    : "Private workspace"}
                </span>
                <span>
                  {project.preview === "likhamat"
                    ? "Application screenshot"
                    : "Interface mockup · Sample data"}
                </span>
              </div>
            </div>
          </article>
        ))}
        <details className="archive">
          <summary>
            Earlier work{" "}
            <span className="ml-2 text-neutral-500">/ 2 projects</span>
          </summary>
          <div className="archive-grid">
            {archived.map((project) => (
              <article key={project.title} className="archive-item">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p>{project.tech}</p>
                </div>
                <button
                  className="text-link"
                  onClick={() => openGallery(project)}
                >
                  View gallery <FiArrowUpRight />
                </button>
              </article>
            ))}
          </div>
        </details>
      </section>
      <dialog
        ref={dialog}
        className="gallery"
        aria-labelledby="gallery-title"
        onCancel={() => setGallery(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const bounds = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < bounds.left ||
              event.clientX > bounds.right ||
              event.clientY < bounds.top ||
              event.clientY > bounds.bottom
            )
              setGallery(null);
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
        }}
      >
        {gallery && (
          <>
            <div className="gallery-header">
              <h3 id="gallery-title">{gallery.title}</h3>
              <button
                aria-label="Close gallery"
                onClick={() => setGallery(null)}
              >
                <FiX />
              </button>
            </div>
            <div className="gallery-image">
              <Image
                src={gallery.images[index]}
                alt={`${gallery.title} screenshot ${index + 1}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <div className="gallery-controls">
              <button onClick={() => move(-1)} aria-label="Previous image">
                <FiArrowLeft />
              </button>
              <span aria-live="polite">
                {index + 1} / {gallery.images.length}
              </span>
              <button onClick={() => move(1)} aria-label="Next image">
                <FiArrowRight />
              </button>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
