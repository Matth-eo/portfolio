export default function AboutSection() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div>
        <p className="eyebrow">04 / About</p>
        <h2 id="about-title">
          Always curious.
          <br />
          Still building.
        </h2>
      </div>
      <div className="about-copy">
        <p>
          I&apos;m Matt, a junior full-stack developer focused on building
          practical web applications. I enjoy connecting the pieces: the
          interface people use, the logic behind it, and the data that makes it
          useful.
        </p>
        <p>
          My projects are where I put that into practice, working with React,
          Next.js, and Laravel while growing my skills in authentication,
          database design, and maintainable code.
        </p>
        <p>
          Outside of coding, I unwind with games, comics, and books. I&apos;m
          looking to learn from an engineering team and contribute to meaningful
          software.
        </p>
      </div>
    </section>
  );
}
