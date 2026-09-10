import type { IconType } from "react-icons";
import type { CSSProperties } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiLaravel,
  SiMysql,
  SiGithub,
  SiVercel,
  SiVitest,
  SiHtml5,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FiShield, FiBarChart2, FiCode } from "react-icons/fi";

const icons: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  "Tailwind CSS": SiTailwindcss,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Prisma: SiPrisma,
  Git: SiGit,
  Laravel: SiLaravel,
  MySQL: SiMysql,
  GitHub: SiGithub,
  Vercel: SiVercel,
  Vitest: SiVitest,
  "HTML & CSS": SiHtml5,
  AWS: FaAws,
  "AWS S3": FaAws,
  DynamoDB: FaAws,
  Cognito: FaAws,
  "Amazon Cognito": FaAws,
  "AWS Lambda": FaAws,
  "Auth.js": FiShield,
  Recharts: FiBarChart2,
};
export default function TechIcon({
  name,
  compact = false,
  order = 0,
}: {
  name: string;
  compact?: boolean;
  order?: number;
}) {
  const Icon = icons[name] ?? FiCode;
  return (
    <span
      className={compact ? "tech-icon compact" : "tech-icon"}
      title={name}
      style={{ "--tech-order": order } as CSSProperties}
    >
      <Icon aria-hidden="true" />
      <span className={compact ? "sr-only" : undefined}>{name}</span>
    </span>
  );
}
