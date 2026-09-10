from pathlib import Path
p=Path("src/components/TechStack.tsx")
s=p.read_text(encoding="utf-8")
s='"use client";\n\nimport { useState } from "react";\nimport { FiPause, FiPlay } from "react-icons/fi";\n'+s
start=s.index("export default function TechStack()")
s=s[:start]+'''const technologies = groups.flatMap(group => group.items);
const rows = [technologies.slice(0, 12), technologies.slice(12)];

export default function TechStack() {
  const [paused, setPaused] = useState(false);
  return (
    <section id="tech" className="section" aria-labelledby="stack-title">
      <div className="section-heading">
        <div><p className="eyebrow">02 / Technical skills</p><h2 id="stack-title">Across the stack.</h2></div>
        <p>The technologies I use to take an application from its first component to a working product.</p>
      </div>
      <div className="skills-marquee" data-paused={paused}>
        {rows.map((row, index) => (
          <div className={`skills-lane ${index ? "reverse" : ""}`} key={index}>
            {[false, true].map(duplicate => (
              <ul className="skills-track" key={String(duplicate)} aria-hidden={duplicate ? true : undefined} aria-label={duplicate ? undefined : index === 0 ? "Application development technologies" : "Data and development tools"}>
                {row.map(name => <li key={name}><TechIcon name={name} /></li>)}
              </ul>
            ))}
          </div>
        ))}
      </div>
      <div className="skills-motion-controls">
        <button className="text-link" aria-controls="tech" aria-pressed={paused} onClick={() => setPaused(value => !value)}>
          {paused ? <FiPlay aria-hidden="true" /> : <FiPause aria-hidden="true" />}
          {paused ? "Resume motion" : "Pause motion"}
        </button>
      </div>
    </section>
  );
}
'''
p.write_text(s,encoding="utf-8")
