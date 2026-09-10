"use client";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiGithub,
  FiMail,
  FiX,
  FiCheck,
} from "react-icons/fi";
import ProjectMedia from "./ProjectMedia";
import TechIcon from "./TechIcon";

export type DetailProject = Pick<Project, "title" | "images"> &
  Partial<Omit<Project, "title" | "images">>;
export default function ProjectDialog({
  project,
  onClose,
  onPrevious,
  onNext,
}: {
  project: DetailProject;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const scrollArea = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [closing, setClosing] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const element = dialog.current;
    const trigger = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    return () => {
      if (timer.current) clearTimeout(timer.current);
      element?.close();
      document.body.style.overflow = overflow;
      trigger?.focus();
    };
  }, []);
  useEffect(() => {
    setImageIndex(0);
    if (scrollArea.current) scrollArea.current.scrollTop = 0;
  }, [project.title]);
  const close = () => {
    if (closing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onClose();
      return;
    }
    setClosing(true);
    timer.current = setTimeout(onClose, 180);
  };
  const moveImage = (direction: number) =>
    setImageIndex(
      (current) =>
        (current + direction + project.images.length) % project.images.length,
    );
  return (
    <dialog
      ref={dialog}
      className={`project-dialog ${closing ? "closing" : ""}`}
      aria-labelledby="project-detail-title"
      aria-describedby="project-overview"
      onKeyDown={(event) => {
        if (closing || project.images.length < 2) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          moveImage(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        )
          close();
      }}
    >
      <div className="dialog-top">
        <span>
          PROJECT NOTES <span aria-hidden="true">/</span> {project.title}
        </span>
        <button
          ref={closeButton}
          className="icon-button"
          aria-label="Close project details"
          onClick={close}
        >
          <FiX />
        </button>
      </div>
      <div ref={scrollArea} className="dialog-scroll">
        <ProjectMedia
          project={project}
          imageIndex={Math.min(
            imageIndex,
            Math.max(0, project.images.length - 1),
          )}
          detail
        />
        {project.images.length > 0 && (
          <a
            className="full-image-link"
            href={
              project.images[Math.min(imageIndex, project.images.length - 1)]
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Open full-size screenshot <FiArrowUpRight aria-hidden="true" />
          </a>
        )}
        {project.images.length > 1 && (
          <div className="gallery-controls" aria-label="Screenshots">
            <button
              className="icon-button"
              aria-label="Previous screenshot"
              onClick={() => moveImage(-1)}
            >
              <FiArrowLeft />
            </button>
            <span aria-live="polite">
              Screenshot {imageIndex + 1} of {project.images.length}
            </span>
            <button
              className="icon-button"
              aria-label="Next screenshot"
              onClick={() => moveImage(1)}
            >
              <FiArrowRight />
            </button>
          </div>
        )}
        <div className="dialog-content">
          <p className="eyebrow">{project.category ?? "Earlier work"}</p>
          <h2 id="project-detail-title" aria-live="polite">
            {project.title}
          </h2>
          {project.purpose && (
            <p className="dialog-purpose">{project.purpose}</p>
          )}
          <p id="project-overview" className="dialog-overview">
            {project.description}
          </p>
          {project.role && (
            <p className="dialog-role">
              <span>My role</span> {project.role}
            </p>
          )}
          <div className="dialog-columns">
            {project.features && (
              <div>
                <h3>Key features</h3>
                <ul className="feature-list">
                  {project.features.map((feature) => (
                    <li key={feature}>
                      <FiCheck aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.architecture && (
              <div>
                <h3>Behind the interface</h3>
                <ul className="architecture-list">
                  {project.architecture.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {project.tech && (
            <div className="dialog-stack" aria-label="Technology stack">
              {project.tech.map((tech) => (
                <TechIcon key={tech} name={tech} />
              ))}
            </div>
          )}
          <div className="dialog-actions">
            {project.github && (
              <a
                className="button button-secondary"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub aria-hidden="true" /> GitHub{" "}
                <FiArrowUpRight aria-hidden="true" />
              </a>
            )}
            {project.sourceAvailable === false && (
              <a
                className="text-link"
                href={`mailto:matt.manamtam@gmail.com?subject=${encodeURIComponent("Source code request: " + project.title)}`}
              >
                <FiMail aria-hidden="true" /> Request source access
              </a>
            )}
            {project.demo && (
              <a
                className="button button-primary"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo <FiArrowUpRight aria-hidden="true" />
              </a>
            )}
          </div>
          {project.sourceAvailable === false && (
            <p className="source-note">
              The repository may require access. You can request the source by
              email.
            </p>
          )}
        </div>
      </div>
      {(onPrevious || onNext) && (
        <div className="dialog-navigation">
          <button onClick={onPrevious} disabled={closing || !onPrevious}>
            <FiArrowLeft aria-hidden="true" /> Previous project
          </button>
          <button onClick={onNext} disabled={closing || !onNext}>
            Next project <FiArrowRight aria-hidden="true" />
          </button>
        </div>
      )}
    </dialog>
  );
}
