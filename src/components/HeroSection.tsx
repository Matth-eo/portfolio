import { FiArrowDown, FiArrowUpRight, FiGithub } from "react-icons/fi";
export default function HeroSection() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-label">
        <span className="status-dot" /> Full-Stack Developer
      </div>
      <h1 id="hero-title">
        Hi, I&apos;m <span>Matt.</span>
      </h1>
      <p className="hero-description">
        I build modern web applications, from responsive interfaces to the
        systems behind them.{" "}
        <strong>Turning real problems into software that works.</strong>
      </p>
      <div className="actions">
        <a href="#projects" className="button button-primary">
          View Projects <FiArrowDown />
        </a>
        <a
          href="https://github.com/MattManamtam"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          <FiGithub /> GitHub <FiArrowUpRight />
        </a>
      </div>
      <div className="hero-bottom">
        <span>FROM INTERFACE TO DATABASE</span>
        <div className="hero-stack">
          <span>React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>PostgreSQL</span>
        </div>
      </div>
    </section>
  );
}
