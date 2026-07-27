type Locale = "en" | "zh";

const content = {
  en: {
    lang: "en",
    homeLabel: "Jamie, back to top",
    navigationLabel: "Primary navigation",
    nav: ["Work", "Practice", "About"],
    kicker: "Independent technologist · Shanghai / Global",
    headline: ["Building intelligence", "for the physical", "and cultural world."],
    intro:
      "I'm Jamie — working across artificial intelligence, robotics, and museum digitalization to make complex technology useful, tangible, and human.",
    explore: "Explore",
    exploreLabel: "Explore selected work",
    rail: ["AI", "ROBOTICS", "DIGITAL HERITAGE"],
    workEyebrow: "Selected work / 2026",
    workHeading: "Projects and ongoing experiments.",
    projects: [
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
    ],
    practiceEyebrow: "Field of practice",
    practiceHeading: "Three disciplines. One connected point of view.",
    capabilities: [
      ["01", "AI & Agents", "Local models, evaluation systems, MCP workflows, and useful AI products."],
      ["02", "Robotics", "Embodied intelligence, interaction design, sensing, and product concepts."],
      ["03", "Digital Heritage", "Museum digitization, collection intelligence, and cultural storytelling."],
    ],
    aboutEyebrow: "About",
    aboutHeading:
      "Technology should expand what people can understand, create, and experience.",
    aboutParagraphs: [
      "My work sits between engineering, product thinking, and cultural practice. I'm interested in systems that move beyond the screen: agents that act, machines that collaborate, and digital collections that become genuinely explorable.",
      "This site is a living record of prototypes, research notes, and open-source work.",
    ],
    footerEyebrow: "Ongoing practice",
    footerHeading: "Exploring practical intersections.",
    footerNote: "Across artificial intelligence, robotics, and digital heritage.",
    backToTop: "Back to top ↑",
    topics: "topics",
  },
  zh: {
    lang: "zh-CN",
    homeLabel: "Jamie，返回顶部",
    navigationLabel: "主导航",
    nav: ["项目", "方向", "关于"],
    kicker: "独立技术实践者 · 上海 / 全球",
    headline: ["构建智能，", "连接物理世界", "与文化世界。"],
    intro:
      "我是 Jamie，专注于人工智能、机器人与博物馆数字化，让复杂技术变得实用、可感知，并真正服务于人。",
    explore: "探索",
    exploreLabel: "浏览精选项目",
    rail: ["人工智能", "机器人", "数字文化遗产"],
    workEyebrow: "精选项目 / 2026",
    workHeading: "项目与持续进行的实验。",
    projects: [
      {
        number: "01",
        title: "本地大模型评测",
        type: "AI 系统",
        status: "开发中",
        description:
          "一个面向实际应用的评测工作台，从质量、速度、内存占用和真实任务表现等维度比较本地语言模型。",
        tags: ["大语言模型", "模型评测", "本地 AI"],
      },
      {
        number: "02",
        title: "博物馆智能",
        type: "数字文化遗产",
        status: "研究中",
        description:
          "探索多模态人工智能如何支持藏品管理、知识阐释，以及帮助公众以新的方式发现文化知识。",
        tags: ["多模态 AI", "博物馆", "知识系统"],
      },
      {
        number: "03",
        title: "具身交互",
        type: "机器人",
        status: "原型阶段",
        description:
          "以人为中心的交互概念，将智能体、传感器与机器人系统连接到真实的物理环境中。",
        tags: ["机器人", "智能体", "人机交互"],
      },
    ],
    practiceEyebrow: "实践方向",
    practiceHeading: "三个领域，一套彼此连接的方法。",
    capabilities: [
      ["01", "AI 与智能体", "本地模型、评测系统、MCP 工作流，以及真正有用的 AI 产品。"],
      ["02", "机器人", "具身智能、交互设计、环境感知与产品概念。"],
      ["03", "数字文化遗产", "博物馆数字化、藏品智能与文化叙事。"],
    ],
    aboutEyebrow: "关于我",
    aboutHeading: "技术应当拓展人们理解、创造与体验世界的方式。",
    aboutParagraphs: [
      "我的实践位于工程、产品思维与文化工作的交汇处。我关注那些能够走出屏幕的系统：可以行动的智能体、能够协作的机器，以及真正可探索的数字藏品。",
      "这个网站持续记录我的原型、研究笔记与开源实践。",
    ],
    footerEyebrow: "持续实践",
    footerHeading: "探索技术与现实的交汇。",
    footerNote: "人工智能、机器人与数字文化遗产。",
    backToTop: "返回顶部 ↑",
    topics: "主题",
  },
} as const;

export function PortfolioPage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const isChinese = locale === "zh";

  return (
    <main lang={copy.lang}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={copy.homeLabel}>
          JD<span className="brand-dot">.</span>
        </a>
        <nav aria-label={copy.navigationLabel}>
          <a href="#work">{copy.nav[0]}</a>
          <a href="#practice">{copy.nav[1]}</a>
          <a href="#about">{copy.nav[2]}</a>
        </nav>
        <div className="language-switch" aria-label={isChinese ? "选择语言" : "Choose language"}>
          <a href="/" lang="en" aria-current={isChinese ? undefined : "page"}>
            EN
          </a>
          <span aria-hidden="true">/</span>
          <a href="/zh" lang="zh-CN" aria-current={isChinese ? "page" : undefined}>
            中文
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker">
          <span className="signal" />
          {copy.kicker}
        </div>
        <h1>
          {copy.headline[0]}
          <span>{copy.headline[1]}</span>
          <span className="outline">{copy.headline[2]}</span>
        </h1>
        <div className="hero-footer">
          <p>{copy.intro}</p>
          <a className="circle-link" href="#work" aria-label={copy.exploreLabel}>
            <span>{copy.explore}</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-rail" aria-hidden="true">
          <span>{copy.rail[0]}</span>
          <i />
          <span>{copy.rail[1]}</span>
          <i />
          <span>{copy.rail[2]}</span>
        </div>
      </section>

      <section className="section projects-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">{copy.workEyebrow}</p>
          <h2>{copy.workHeading}</h2>
        </div>
        <div className="project-list">
          {copy.projects.map((project) => (
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
                <ul className="tag-list" aria-label={`${project.title} ${copy.topics}`}>
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
          <p className="eyebrow">{copy.practiceEyebrow}</p>
          <h2>{copy.practiceHeading}</h2>
        </div>
        <div className="capability-grid">
          {copy.capabilities.map(([number, title, description]) => (
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
        <p className="eyebrow">{copy.aboutEyebrow}</p>
        <div className="about-grid">
          <h2>{copy.aboutHeading}</h2>
          <div className="about-copy">
            {copy.aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <p className="eyebrow">{copy.footerEyebrow}</p>
        <h2>{copy.footerHeading}</h2>
        <p className="footer-note">{copy.footerNote}</p>
        <div className="footer-bottom">
          <span>Jamie © 2026</span>
          <a href="#top">{copy.backToTop}</a>
        </div>
      </footer>
    </main>
  );
}
