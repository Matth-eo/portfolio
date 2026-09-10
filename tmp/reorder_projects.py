from pathlib import Path
import re
p=Path("src/data/projects.ts")
s=p.read_text(encoding="utf-8")
s=s.replace('  role: string;', '  role: string;\n  featured?: boolean;')
a=s.index("export const projects:")
b=s.index("export const archived")
main=s[a:b]
entries=re.findall(r'  \{\n.*?\n  \},', main, re.S)
byname={re.search(r'title: "([^"]+)"',x).group(1):x for x in entries}
byname["Likhamat"]=byname["Likhamat"].replace('title: "Likhamat",','title: "Likhamat",\n    featured: true,').replace('04 / Community platform','01 / Featured capstone')
byname["Cloudrop"]=byname["Cloudrop"].replace('01 / Cloud file sharing','02 / AWS & serverless').replace('"Cognito"],','"Cognito", "AWS Lambda"],').replace('A file-sharing application built around private cloud storage.', 'A file-sharing application built with an AWS serverless architecture: S3 for files, DynamoDB for metadata, Cognito for identity, and Lambda for expired-file cleanup.')
byname["Tracebit"]=byname["Tracebit"].replace('02 / Developer tools','04 / Project & issue tracking')
click='''  {
    title: "ClickLens",
    role: "Full-Stack Development",
    category: "05 / URL shortening & analytics",
    purpose: "Short links. A clearer view of every click.",
    description: "A private workspace for creating short URLs, managing a link library, and understanding click activity. Explore date-range charts and referrer insights for individual links.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Recharts"],
    features: [
      "Custom short URLs & searchable link management",
      "Click tracking, date-range charts & referrers",
      "Database sessions & owner-scoped analytics",
    ],
    github: "https://github.com/Matth-eo/clicklens",
    sourceAvailable: false,
    preview: "clicklens",
    images: ["/images/clicklens/analytics.png", "/images/clicklens/landing.png"],
  },'''
new='export const projects: Project[] = [\n'+'\n'.join([byname[n] for n in ["Likhamat","Cloudrop","ApplyFlow","Tracebit"]]+[click])+'\n];\n\n'
archive=s[b:]
archive=re.sub(r'  \{\n    title: "ClickLens",.*?\n  \},\n','',archive, count=1,flags=re.S)
p.write_text(s[:a]+new+archive,encoding="utf-8")
