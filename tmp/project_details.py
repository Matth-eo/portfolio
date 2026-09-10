from pathlib import Path
p=Path("src/data/projects.ts")
s=p.read_text(encoding="utf-8")
s=s.replace('  role: string;', '  role: string;\n  summary: string;\n  architecture: string[];')
details={
"Likhamat":("A community for recycled art and creative reuse.",["Next.js interface backed by Node.js and MongoDB.", "Craft submissions, community voting, and charitable participation in one platform."]),
"Cloudrop":("Private file sharing, powered by AWS.",["Files travel directly to private S3 storage using presigned URLs.", "DynamoDB stores metadata; Cognito protects accounts and upload access.", "A separate Lambda handles expired-file cleanup."]),
"ApplyFlow":("A clearer way to manage your job search.",["Next.js server workflows with Prisma and PostgreSQL persistence.", "Auth.js sessions and database-backed role checks protect personal and admin workspaces."]),
"Tracebit":("Projects, priorities, and issues in one workspace.",["Prisma queries keep projects and issues scoped to the authenticated owner.", "Database sessions protect mutations; combined filters run in PostgreSQL."]),
"ClickLens":("Short links with a story behind every click.",["Public redirects record click timestamps and referrer origins in PostgreSQL.", "Prisma queries power owner-scoped analytics and a searchable link library."]),
}
import json
for name,(summary,architecture) in details.items():
 old=f'    title: "{name}",'
 new=old+'\n    summary: '+json.dumps(summary)+',\n    architecture: '+json.dumps(architecture)+','
 s=s.replace(old,new,1)
p.write_text(s,encoding="utf-8")
