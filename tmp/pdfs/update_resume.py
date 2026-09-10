from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
import pymupdf

out = Path("output/pdf")
out.mkdir(parents=True, exist_ok=True)
target = out / "Matt_Theodore_Manamtam_Resume_Updated.pdf"
styles = {
 "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=22, leading=26, spaceAfter=5),
 "role": ParagraphStyle("role", fontName="Helvetica", fontSize=12, leading=15, spaceAfter=5),
 "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=9, leading=12, spaceAfter=7),
 "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=10.5, leading=13, spaceBefore=10, spaceAfter=4),
 "body": ParagraphStyle("body", fontName="Helvetica", fontSize=9.5, leading=12.5, spaceAfter=3),
 "project": ParagraphStyle("project", fontName="Helvetica-Bold", fontSize=10, leading=13, spaceBefore=7, spaceAfter=2),
 "meta": ParagraphStyle("meta", fontName="Helvetica", fontSize=9, leading=12, spaceAfter=3, textColor=HexColor("#414141")),
 "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=9.5, leading=12.5, leftIndent=10, firstLineIndent=-8, spaceAfter=2),
}
story=[]
def p(text, style="body"):
 story.append(Paragraph(text, styles[style]))
def section(text):
 p(text,"section")
 story.append(HRFlowable(width="100%", thickness=.55, color=HexColor("#dca94f"), spaceAfter=5))
def bullet(text):
 p("&#8226; "+text,"bullet")
def project(title, stack, bullets, role=None):
 p(title,"project")
 if role: p(role,"meta")
 p(stack,"meta")
 for text in bullets: bullet(text)
p("MATT THEODORE MANAMTAM","name")
p("WEB DEVELOPER","role")
p('Bugallon, Pangasinan | <link href="mailto:matt.manamtam@gmail.com">matt.manamtam@gmail.com</link> | <link href="https://mattmanamtam-portfolio.vercel.app/">mattmanamtam-portfolio.vercel.app</link>',"contact")
story.append(HRFlowable(width="100%", thickness=1.6, color=HexColor("#dca94f")))
section("SUMMARY")
p("BS Information Technology graduate with hands-on experience building web and mobile applications through academic, capstone, and personal projects. Works with Next.js, TypeScript, Node.js, Laravel, and relational databases. Seeking a web development role to contribute practical skills and continue growing as a software developer.")
section("TECHNICAL SKILLS")
p("<b>Languages:</b> JavaScript, TypeScript, PHP, HTML, CSS")
p("<b>Frameworks:</b> React, Next.js, Laravel, Flutter, Tailwind CSS")
p("<b>Backend &amp; data:</b> Node.js, REST APIs, PostgreSQL, MongoDB, MySQL, Prisma")
p("<b>Tools &amp; practices:</b> Git, GitHub, Postman, Responsive Web Design, Database Management")
section("PROJECTS")
project("CLICKLENS - URL Shortener &amp; Click Analytics",
 "Next.js | TypeScript | PostgreSQL | Prisma | Tailwind CSS | Recharts",
 ["Built a private link-management workspace with custom short URLs, public redirects, and searchable, paginated link management.",
  "Implemented click tracking, date-range charts, and referrer analytics with database sessions and owner-scoped access."])
project("TRACEBIT - Project &amp; Issue Tracker",
 "Next.js | React | TypeScript | PostgreSQL | Prisma | Tailwind CSS",
 ["Built project and issue workflows with create, edit, and delete actions, status updates, and priority/type filters.",
  "Implemented authenticated, owner-scoped database queries and dashboards summarizing open, active, and completed issues."])
project("LIKHAMAT - Content Sharing for Crafters",
 "Next.js | Node.js | MongoDB | Tailwind CSS",
 ["Developed frontend and backend features for an eco-friendly craft-sharing platform; managed development and collaborated with team members."],
 "Full-Stack Developer | 2024 - 2025")
project("HELP ISKO!",
 "Flutter | Laravel",
 ["Developed backend functionality for duty postings and student requests on a mobile platform connecting students and professors."],
 "Backend Developer | 2024")
section("EXPERIENCE")
p("CONCENTRIX","project")
p("Technical Staff / OJT | December 2025 - March 2026","meta")
bullet("Assisted with IT support tickets, troubleshooting user concerns and following established procedures for issue resolution.")
bullet("Performed hardware diagnostics, computer setup, maintenance, and software configuration.")
section("EDUCATION")
p("PHINMA UNIVERSITY OF PANGASINAN","project")
p("Bachelor of Science in Information Technology | 2026")
doc=SimpleDocTemplate(str(target),pagesize=(595.5,842.25),rightMargin=36,leftMargin=36,topMargin=30,bottomMargin=30,title="Matt Theodore Manamtam - Resume",author="Matt Theodore Manamtam")
doc.build(story)
pdf=pymupdf.open(target)
print("Output:",target.resolve(),"Pages:",len(pdf))
for i,page in enumerate(pdf):
 page.get_pixmap(matrix=pymupdf.Matrix(1.6,1.6)).save(f"tmp/pdfs/updated-{i+1}.png")
 text=page.get_text()
 print("Page",i+1,"text bounds",page.get_text("blocks")[-1][:4])
assert len(pdf)==1, "Resume must fit one page"
text="".join(page.get_text() for page in pdf)
assert all(term in text for term in ["CLICKLENS","TRACEBIT","LIKHAMAT","HELP ISKO!","CONCENTRIX","2026"])
