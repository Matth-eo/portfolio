import { FiUploadCloud } from "react-icons/fi";

export default function ProjectPreview({
  kind,
}: {
  kind: "applyflow" | "tracebit" | "cloudrop";
}) {
  if (kind === "cloudrop") {
    return (
      <div
        className="cloud-preview"
        role="img"
        aria-label="Cloudrop interface mockup showing a file drop zone, upload progress workflow, and expiration options"
      >
        <h4>A simple way to share.</h4>
        <p>Private storage. Links that expire on your terms.</p>
        <div className="cloud-dropzone">
          <FiUploadCloud aria-hidden="true" />
          <strong>Drop a file to get started</strong>
          <p>Choose a file up to 25 MB</p>
        </div>
        <div className="cloud-expiry">
          <span>1 hour</span>
          <span className="selected">24 hours</span>
          <span>7 days</span>
        </div>
        <div className="cloud-upload">Upload & create share link</div>
      </div>
    );
  }
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
