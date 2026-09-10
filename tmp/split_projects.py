from pathlib import Path
p=Path("src/components/ProjectsSection.tsx")
s=p.read_text(encoding="utf-8")
start=s.index("type Project = {")
end=s.index("function AppPreview",start)
data=s[start:end].replace("type Project =", "export type Project =",1).replace("const projects:","export const projects:",1).replace("const archived =", "export const archived =",1)
Path("src/data").mkdir(exist_ok=True)
Path("src/data/projects.ts").write_text(data,encoding="utf-8")
pstart=end
pend=s.index("export default function ProjectsSection()",pstart)
preview=s[pstart:pend].replace("function AppPreview", "export default function ProjectPreview",1)
Path("src/components/ProjectPreview.tsx").write_text('import { FiUploadCloud } from "react-icons/fi";\n\n'+preview,encoding="utf-8")
s=s[:start]+s[pend:]
s=s.replace('  FiUploadCloud,\n','')
s=s.replace('import Image from "next/image";','import Image from "next/image";\nimport { projects, archived } from "@/data/projects";\nimport ProjectPreview from "./ProjectPreview";')
s=s.replace('<AppPreview kind=', '<ProjectPreview kind=')
p.write_text(s,encoding="utf-8")
