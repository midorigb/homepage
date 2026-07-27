const projects = [
  {
    number: "01",
    title: "Local LLM Benchmark",
    type: "AI Systems",
    status: "In development",
    description:
      "A practical evaluation workspace for comparing local language models across quality, speed, memory use, and real-world tasks.",
    tags: ["LLM", "Evaluation", "Local AI"],
  },
  {
    number: "02",
    title: "Museum Intelligence",
    type: "Digital Heritage",
    status: "Research",
    description:
      "Exploring how multimodal AI can support collections, interpretation, and new ways for people to discover cultural knowledge.",
    tags: ["Multimodal AI", "Museums", "Knowledge"],
  },
  {
    number: "03",
    title: "Embodied Interfaces",
    type: "Robotics",
    status: "Prototype",
    description:
      "Human-centered interaction concepts that connect agents, sensors, and robotic systems in physical environments.",
    tags: ["Robotics", "Agents", "HRI"],
  },
];

const capabilities = [
  ["01", "AI & Agents", "Local models, evaluation systems, MCP workflows, and useful AI products."],
  ["02", "Robotics", "Embodied intelligence, interaction design, sensing, and product concepts."],
  ["03", "Digital Heritage", "Museum digitization, collection intelligence, and cultural storytelling."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Jamie, back to top">
          JD<span className="brand-dot">.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#practice">Practice</a>
          <a href="#about">About</a>
        </nav>
        <a className="contact-link" href="#contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker">
          <span className="signal" />
          Independent technologist · Shanghai / Global
        </div>
        <h1>
          Building intelligence
          <span>for the physical</span>
          <span className="outline">and cultural world.</span>
        </h1>
        <div className="hero-footer">
          <p>
            I&apos;m Jamie — working across artificial intelligence,
            robotics, and museum digitalization to make complex technology
            useful, tangible, and human.
          </p>
          <a className="circle-link" href="#work" aria-label="Explore selected work">
            <span>Explore</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-rail" aria-hidden="true">
          <span>AI</span>
          <i />
          <span>ROBOTICS</span>
          <i />
          <span>DIGITAL HERITAGE</span>
        </div>
      </section>

      <section className="section projects-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work / 2026</p>
          <h2>Projects and ongoing experiments.</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-meta">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>
              <div className="project-body">
                <div>
                  <p className="project-status">{project.status}</p>
                  <h3>{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="tag-list" aria-label={`${project.title} topics`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section practice-section" id="practice">
        <div className="section-heading">
          <p className="eyebrow">Field of practice</p>
          <h2>Three disciplines. One connected point of view.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map(([number, title, description]) => (
            <article className="capability" key={number}>
              <span>{number}</span>
              <div className="capability-mark" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <p className="eyebrow">About</p>
        <div className="about-grid">
          <h2>
            Technology should expand what people can understand, create, and
            experience.
          </h2>
          <div className="about-copy">
            <p>
              My work sits between engineering, product thinking, and cultural
              practice. I&apos;m interested in systems that move beyond the
              screen: agents that act, machines that collaborate, and digital
              collections that become genuinely explorable.
            </p>
            <p>
              This site is a living record of prototypes, research notes, and
              open-source work.
            </p>
          </div>
        </div>
      </section>

      <footer id="contact">
        <p className="eyebrow">Start a conversation</p>
        <h2>Have an ambitious idea?</h2>
        <p className="footer-note">
          I&apos;m open to conversations around AI systems, robotics products,
          and digital heritage.
        </p>
        <div className="footer-bottom">
          <span>Jamie © 2026</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
