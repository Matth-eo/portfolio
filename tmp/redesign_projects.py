from pathlib import Path
p=Path("src/components/ProjectsSection.tsx")
s=p.read_text(encoding="utf-8-sig")
s=s.replace('  FiX,','  FiX,\n  FiUploadCloud,')
s=s.replace('  title: string;\n  category:', '  title: string;\n  role: string;\n  category:',1)
s=s.replace('"likhamat" | "clicklens";','"likhamat" | "clicklens" | "cloudrop";')
start=s.index('const projects: Project[] = [')
end=s.index('\nconst archived = [',start)
s=s[:start]+'''const projects: Project[] = [
  {
    title: "Cloudrop",
    role: "Full-Stack Development",
    category: "01 / Cloud file sharing",
    purpose: "Upload a file. Share a link. Set its lifetime.",
    description: "A file-sharing application built around private cloud storage. Signed-in users upload directly to S3 and share download links that expire when their chosen lifetime ends.",
    tech: ["Next.js", "TypeScript", "AWS S3", "DynamoDB", "Cognito"],
    features: [
      "Direct-to-S3 uploads with progress & validation",
      "Expiring share links & signed downloads",
      "Cognito accounts & a personal upload library",
    ],
    github: "https://github.com/Matth-eo/cloudrop",
    sourceAvailable: false,
    preview: "cloudrop",
    images: [],
  },
  {
    title: "Tracebit",
    role: "Full-Stack Development",
    category: "02 / Developer tools",
    purpose: "A focused workspace for the work behind a release.",
    description: "A private project and issue tracker for organizing bugs, features, and tasks. Keep priorities visible, move issues forward, and follow progress across projects.",
    tech: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"],
    features: [
      "Project & issue creation, editing, and deletion",
      "Combined status, priority & type filters",
      "Owner-scoped data & progress dashboards",
    ],
    github: "https://github.com/Matth-eo/tracebit",
    sourceAvailable: false,
    preview: "tracebit",
    images: [],
  },
  {
    title: "ApplyFlow",
    role: "Full-Stack Development",
    category: "03 / Job application management",
    purpose: "A little clarity in the job search.",
    description: "A private workspace for keeping applications, interview progress, and next steps together. A searchable application library and dashboard make the job search easier to follow.",
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
    title: "Likhamat",
    role: "Full-Stack Development / Capstone Team",
    category: "04 / Community platform",
    purpose: "A second life for materials. A place for creativity.",
    description: "A gamified recycled-art platform connecting creative reuse with philanthropy. Users share crafts, vote on creations, and support charitable causes.",
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
''' +s[end:]
s=s.replace('const archived = [','''const archived = [
  {
    title: "ClickLens",
    description: "Custom short URLs, a private link library, and click analytics with date-range charts and referrer insights.",
    tech: "Next.js / TypeScript / PostgreSQL / Prisma / Recharts",
    images: ["/images/clicklens/analytics.png", "/images/clicklens/landing.png"],
  },''')
s=s.replace('function AppPreview({ kind }: { kind: "applyflow" | "tracebit" }) {','''function AppPreview({ kind }: { kind: "applyflow" | "tracebit" | "cloudrop" }) {
  if (kind === "cloudrop") {
    return <div className="cloud-preview" role="img" aria-label="Cloudrop interface mockup showing a file drop zone, upload progress workflow, and expiration options">
      <h4>A simple way to share.</h4><p>Private storage. Links that expire on your terms.</p>
      <div className="cloud-dropzone"><FiUploadCloud aria-hidden="true" /><strong>Drop a file to get started</strong><p>Choose a file up to 25 MB</p></div>
      <div className="cloud-expiry"><span>1 hour</span><span className="selected">24 hours</span><span>7 days</span></div>
      <div className="cloud-upload">Upload & create share link</div>
    </div>;
  }''')
s=s.replace('<p className="eyebrow">Selected work</p>','<p className="eyebrow">01 / Selected projects</p>')
s=s.replace('Ideas, built into applications.','Real problems.<br />Working software.')
s=s.replace('<p className="project-description">{project.description}</p>','<p className="project-description">{project.description}</p>\n              <div className="project-role"><span>Role</span><strong>{project.role}</strong></div>')
s=s.replace('sizes="(max-width: 640px) 90vw, 55vw"','sizes="(max-width: 1000px) 90vw, 750px"')
s=s.replace('Earlier work{" "}', 'More projects{" "}')
s=s.replace('/ 2 projects','/ {archived.length} projects')
p.write_text(s,encoding="utf-8")
