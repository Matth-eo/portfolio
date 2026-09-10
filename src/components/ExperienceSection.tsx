export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / Experience & education</p>
          <h2 id="experience-title">Beyond the code.</h2>
        </div>
        <p>
          Practical experience supporting people and the technology they rely
          on.
        </p>
      </div>
      <article className="experience-row">
        <p className="experience-date">DEC 2025 — MAR 2026</p>
        <div>
          <h3>Concentrix</h3>
          <p className="experience-role">
            Technical Staff / On-the-Job Training
          </p>
          <ul>
            <li>
              Assisted with IT support tickets, troubleshooting user concerns
              and following established procedures for issue resolution.
            </li>
            <li>
              Performed hardware diagnostics, computer setup, maintenance, and
              software configuration.
            </li>
          </ul>
        </div>
      </article>
      <article className="experience-row education-row">
        <p className="experience-date">2026</p>
        <div>
          <h3>PHINMA University of Pangasinan</h3>
          <p className="experience-role">BS in Information Technology</p>
          <p className="education-note">
            Academic and capstone work in web development, databases, and
            software applications.
          </p>
        </div>
      </article>
    </section>
  );
}
