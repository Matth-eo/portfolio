import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";
export default function ContactSection() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <p className="eyebrow">Have something in mind?</p>
      <h2 id="contact-title">Let&apos;s build something useful.</h2>
      <p className="mb-4">Matt Theodore Manamtam · Full-Stack Developer</p>
      <p>
        I&apos;m open to junior developer roles, internships, and collaboration.
        If you think I could be a good fit for your team, I&apos;d love to hear
        from you.
      </p>
      <div className="contact-row">
        <a
          className="button button-primary"
          href="mailto:matt.manamtam@gmail.com"
        >
          <FiMail /> Get in touch <FiArrowUpRight />
        </a>
        <a
          className="text-link"
          href="https://github.com/MattManamtam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub /> GitHub
        </a>
        <a
          className="text-link"
          href="https://www.linkedin.com/in/matt-theodore-manamtam-452595336/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin /> LinkedIn
        </a>
        <a className="text-link" href="tel:+639671093172">
          <FiPhone /> +63 967 109 3172
        </a>
      </div>
    </section>
  );
}
