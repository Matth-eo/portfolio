import Image from "next/image";
import type { Project } from "@/data/projects";
import ProjectPreview from "./ProjectPreview";

export default function ProjectMedia({
  project,
  imageIndex = 0,
  detail = false,
}: {
  project: Pick<Project, "title" | "images"> & { preview?: Project["preview"] };
  imageIndex?: number;
  detail?: boolean;
}) {
  const mock = project.images.length === 0;
  return (
    <div
      className={`project-media ${detail ? "detail-media" : ""} ${mock ? "is-mock" : ""}`}
    >
      {mock ? (
        <div className="mock-frame">
          <ProjectPreview
            kind={
              project.preview === "cloudrop" ||
              project.preview === "tracebit" ||
              project.preview === "evolv"
                ? project.preview
                : "applyflow"
            }
          />
        </div>
      ) : (
        <Image
          src={project.images[imageIndex]}
          alt={`${project.title} application screenshot ${imageIndex + 1}`}
          fill
          sizes={
            detail
              ? "(max-width: 800px) 94vw, 850px"
              : "(max-width: 640px) 92vw, 560px"
          }
          className={detail ? "object-contain" : "object-cover object-top"}
        />
      )}
      {mock && (
        <span className="mock-label">Interface preview · sample data</span>
      )}
    </div>
  );
}
