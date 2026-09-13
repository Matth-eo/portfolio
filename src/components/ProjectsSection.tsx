"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects, archived } from "@/data/projects";
import ProjectMedia from "./ProjectMedia";
import type { DetailProject } from "./ProjectDialog";
import TechIcon from "./TechIcon";
const ProjectDialog = dynamic(() => import("./ProjectDialog"));

export default function ProjectsSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const [olderProject, setOlderProject] = useState<DetailProject | null>(null);
  const close = () => {
    setSelected(null);
    setOlderProject(null);
  };
  return (
    <section
      id="projects"
      className="section projects-section"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / Selected work</p>
          <h2 id="projects-title">
            Built with purpose<span>.</span>
          </h2>
        </div>
        <p>
          A few projects, from community platforms to cloud-backed tools. Open
          one for the details.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`project-card project-tile ${project.featured ? "featured" : ""}`}
            data-project={project.preview}
          >
            <div className="project-cover">
              <div className="project-cover-label">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>
                  {project.featured ? "Featured capstone" : "Selected project"}
                </span>
              </div>
              <ProjectMedia project={project} />
            </div>
            <div className="project-card-copy">
              <p className="project-category">
                {project.featured
                  ? "Featured capstone"
                  : project.category.split(" / ")[1]}
              </p>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <div className="project-card-bottom">
                <div className="project-tech" aria-label="Main technologies">
                  {project.tech.slice(0, 4).map((tech) => (
                    <TechIcon key={tech} name={tech} compact />
                  ))}
                </div>
                <div className="project-card-actions">
                  {project.github && project.sourceAvailable !== false && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github"
                      aria-label={`View ${project.title} on GitHub`}
                      title={`View ${project.title} on GitHub`}
                    >
                      <FiGithub aria-hidden="true" /> GitHub
                    </a>
                  )}
                  <button
                    className="project-open"
                    aria-label={`View ${project.title} project details`}
                    onClick={() => setSelected(index)}
                  >
                    View Project <FiArrowUpRight aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <details className="archive">
        <summary>
          Earlier explorations <span>/ {archived.length} projects</span>
        </summary>
        <div className="archive-grid">
          {archived.map((project) => (
            <article className="archive-item" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.tech}</p>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FiGithub aria-hidden="true" /> GitHub
                </a>
              )}
              {project.images.length > 0 && (
                <button
                  className="text-link"
                  onClick={() =>
                    setOlderProject({
                      ...project,
                      tech: project.tech.split(" / "),
                    })
                  }
                >
                  View gallery <FiArrowUpRight aria-hidden="true" />
                </button>
              )}
            </article>
          ))}
        </div>
      </details>
      {(selected !== null || olderProject) && (
        <ProjectDialog
          project={selected !== null ? projects[selected] : olderProject!}
          onClose={close}
          onPrevious={
            selected !== null
              ? () =>
                  setSelected(
                    (current) =>
                      (current! - 1 + projects.length) % projects.length,
                  )
              : undefined
          }
          onNext={
            selected !== null
              ? () => setSelected((current) => (current! + 1) % projects.length)
              : undefined
          }
        />
      )}
    </section>
  );
}
