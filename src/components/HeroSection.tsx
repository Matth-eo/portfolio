import {
  FiArrowDown,
  FiArrowUpRight,
  FiGithub,
  FiLayout,
  FiServer,
  FiDatabase,
} from "react-icons/fi";
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
      <ul className="hero-capabilities" aria-label="What I build">
        <li>
          <FiLayout aria-hidden="true" />
          <div>
            <h2>Responsive interfaces</h2>
            <p>Easy to use, on any screen.</p>
          </div>
        </li>
        <li>
          <FiServer aria-hidden="true" />
          <div>
            <h2>Backend logic</h2>
            <p>APIs, authentication, and workflows.</p>
          </div>
        </li>
        <li>
          <FiDatabase aria-hidden="true" />
          <div>
            <h2>Connected data</h2>
            <p>Structured for real application needs.</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
