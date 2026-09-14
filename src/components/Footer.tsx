import { FiArrowUp, FiGithub, FiLinkedin } from "react-icons/fi";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span>© {new Date().getFullYear()} Matt.</span>
        <div className="footer-links">
          <a
            href="https://github.com/Matth-eo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Matt on GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/matt-theodore-manamtam-452595336/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Matt on LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a href="#home">
            Back to top <FiArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
