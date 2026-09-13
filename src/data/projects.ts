export type Project = {
  title: string;
  role: string;
  summary: string;
  architecture: string[];
  featured?: boolean;
  category: string;
  purpose: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  sourceAvailable?: boolean;
  demo?: string;
  preview: "applyflow" | "tracebit" | "likhamat" | "clicklens" | "cloudrop" | "evolv";
  images: string[];
};

export const projects: Project[] = [
  {
    title: "Likhamat",
    summary: "A community for recycled art and creative reuse.",
    architecture: [
      "Next.js interface backed by Node.js and MongoDB.",
      "Craft submissions, community voting, and charitable participation in one platform.",
    ],
    featured: true,
    role: "Full-Stack Development / Capstone Team",
    category: "01 / Featured capstone",
    purpose: "A second life for materials. A place for creativity.",
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
  {
    title: "Cloudrop",
    summary: "Private file sharing, powered by AWS.",
    architecture: [
      "Files travel directly to private S3 storage using presigned URLs.",
      "DynamoDB stores metadata; Cognito protects accounts and upload access.",
      "A separate Lambda handles expired-file cleanup.",
    ],
    role: "Full-Stack Development",
    category: "02 / AWS & serverless",
    purpose: "Upload a file. Share a link. Set its lifetime.",
    description:
      "A file-sharing application built with an AWS serverless architecture: S3 for files, DynamoDB for metadata, Cognito for identity, and Lambda for expired-file cleanup. Signed-in users upload directly to S3 and share download links that expire when their chosen lifetime ends.",
    tech: [
      "Next.js",
      "TypeScript",
      "AWS S3",
      "DynamoDB",
      "Cognito",
      "AWS Lambda",
    ],
    features: [
      "Direct-to-S3 uploads with progress & validation",
      "Expiring share links & signed downloads",
      "Cognito accounts & a personal upload library",
    ],
    github: "https://github.com/Matth-eo/cloudrop",
    preview: "cloudrop",
    images: [],
  },
  {
    title: "ApplyFlow",
    summary: "A clearer way to manage your job search.",
    architecture: [
      "Next.js server workflows with Prisma and PostgreSQL persistence.",
      "Auth.js sessions and database-backed role checks protect personal and admin workspaces.",
    ],
    role: "Full-Stack Development",
    category: "03 / Job application management",
    purpose: "A little clarity in the job search.",
    description:
      "A private workspace for keeping applications, interview progress, and next steps together. A searchable application library and dashboard make the job search easier to follow.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Auth.js"],
    features: [
      "Private accounts & role-based admin access",
      "Searchable applications & six workflow statuses",
      "Dashboard statistics & application insights",
    ],
    github: "https://github.com/Matth-eo/applyflow",
    preview: "applyflow",
    images: [],
  },
  {
    title: "Tracebit",
    summary: "Projects, priorities, and issues in one workspace.",
    architecture: [
      "Prisma queries keep projects and issues scoped to the authenticated owner.",
      "Database sessions protect mutations; combined filters run in PostgreSQL.",
    ],
    role: "Full-Stack Development",
    category: "04 / Project & issue tracking",
    purpose: "A focused workspace for the work behind a release.",
    description:
      "A private project and issue tracker for organizing bugs, features, and tasks. Keep priorities visible, move issues forward, and follow progress across projects.",
    tech: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"],
    features: [
      "Project & issue creation, editing, and deletion",
      "Combined status, priority & type filters",
      "Owner-scoped data & progress dashboards",
    ],
    github: "https://github.com/Matth-eo/tracebit",
    preview: "tracebit",
    images: [],
  },
  {
    title: "ClickLens",
    summary: "Short links with a story behind every click.",
    architecture: [
      "Public redirects record click timestamps and referrer origins in PostgreSQL.",
      "Prisma queries power owner-scoped analytics and a searchable link library.",
    ],
    role: "Full-Stack Development",
    category: "05 / URL shortening & analytics",
    purpose: "Short links. A clearer view of every click.",
    description:
      "A private workspace for creating short URLs, managing a link library, and understanding click activity. Explore date-range charts and referrer insights for individual links.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Recharts"],
    features: [
      "Custom short URLs & searchable link management",
      "Click tracking, date-range charts & referrers",
      "Database sessions & owner-scoped analytics",
    ],
    github: "https://github.com/Matth-eo/clicklens",
    preview: "clicklens",
    images: [
      "/images/clicklens/analytics.png",
      "/images/clicklens/landing.png",
    ],
  },
  {
    title: "Evolv",
    summary: "Goals, habits, and a clearer view of your progress.",
    architecture: [
      "Next.js and TypeScript power the personal development interface.",
      "Prisma connects application data to PostgreSQL; Auth.js handles authentication.",
    ],
    role: "Full-Stack Development",
    category: "06 / Personal development",
    purpose: "Small steps. Meaningful progress.",
    description:
      "Personal development platform for goals, milestones, habits, streaks, and progress tracking.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Auth.js"],
    features: [
      "Goals and milestones to organize personal development",
      "Habit and streak tracking to build consistency",
      "Progress tracking across personal goals",
    ],
    github: "https://github.com/Matth-eo/evolv",
    preview: "evolv",
    images: [],
  },
];

export const archived = [
  {
    title: "Portfolio",
    description: "My developer portfolio, project showcase, and experience.",
    tech: "Next.js / TypeScript / Tailwind CSS",
    github: "https://github.com/Matth-eo/portfolio",
    images: [],
  },
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
