const groups = [
  {
    name: "01 / Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML & CSS",
    ],
  },
  {
    name: "02 / Backend & data",
    items: [
      "Node.js",
      "Express",
      "Laravel",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Prisma",
    ],
  },
  {
    name: "03 / Tools & workflow",
    items: ["Git", "GitHub", "Vercel", "Auth.js", "Vitest"],
  },
];
export default function TechStack() {
  return (
    <section id="tech" className="section" aria-labelledby="stack-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">My toolkit</p>
          <h2 id="stack-title">Built across the stack.</h2>
        </div>
        <p>
          The technologies I use to take an application from its first component
          to a working product.
        </p>
      </div>
      <div className="stack-grid">
        {groups.map((group) => (
          <div key={group.name} className="stack-group">
            <h3>{group.name}</h3>
            <div className="stack-items">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
