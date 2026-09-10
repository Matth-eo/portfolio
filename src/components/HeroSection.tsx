import Image from "next/image";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-identity">
          <div className="avatar-halo" aria-hidden="true" />
          <div className="avatar-orbit" aria-hidden="true" />
          <div className="avatar-image">
            <Image
              src="/images/chibi-profile.png"
              alt="Chibi illustration of Matt with a blue circular background"
              fill
              priority
              sizes="(max-width: 640px) 96px, 112px"
            />
          </div>
        </div>
        <div className="hero-copy">
          <p className="hero-label">
            <span className="status-dot" /> Junior Software Engineer
          </p>
          <h1 id="hero-title">
            Hi, I&apos;m <span>Matt.</span>
            <br />I build things for the web
            <span className="hero-period">.</span>
          </h1>
          <p className="hero-description">
            A full-stack developer connecting thoughtful interfaces with the
            systems behind them. Curious by nature. Always building.
          </p>
          <div className="actions">
            <a href="#projects" className="button button-primary">
              Explore projects <FiArrowDown aria-hidden="true" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary"
            >
              View resume <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <span>
          PANGASINAN, PHILIPPINES <span aria-hidden="true">/</span> UTC+08
        </span>
        <a href="#projects">
          A few things I&apos;ve built <FiArrowDown aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
