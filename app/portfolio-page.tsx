type Locale = "en" | "zh";

const content = {
  en: {
    lang: "en",
    navigationLabel: "Primary navigation",
    nav: [["Method", "#method"], ["Work", "#work"], ["Focus", "#focus"], ["Principles", "#principles"]],
    kicker: "Jamie · Product, systems, and technology",
    headline: ["From complex resources", "to operational systems", "and real-world intelligence."],
    intro: "I connect standards, platforms, AI, and robotics—turning complex technology into systems that can be governed, operated, and experienced.",
    explore: "See how I work",
    signal: ["Standards", "Platforms", "Agentic AI", "Robotics"],
    methodEyebrow: "How I create value",
    methodHeading: "One connected path from ambiguity to experience.",
    methodIntro: "The work is not four unrelated specialties. It is an end-to-end way of structuring complexity, building systems, adding intelligence, and connecting them to people and places.",
    stages: [
      { number: "01", verb: "Define", title: "Make complexity legible.", description: "Clarify the problem, establish standards, shape data models, and define the boundaries of the product.", outputs: ["Standards", "Metadata", "Governance", "Product scope"] },
      { number: "02", verb: "Build", title: "Turn structure into systems.", description: "Translate rules and workflows into platform capabilities, product architecture, and operational tools.", outputs: ["Platforms", "Workflows", "System design", "Delivery"] },
      { number: "03", verb: "Augment", title: "Add useful intelligence.", description: "Apply models, agents, retrieval, and evaluation where they improve decisions and real work—not just demonstrations.", outputs: ["LLM systems", "Agents / MCP", "Evaluation", "Human-in-the-loop"] },
      { number: "04", verb: "Connect", title: "Bring systems into the world.", description: "Extend digital capabilities into robots, devices, cultural spaces, and human interactions.", outputs: ["Robotics", "HRI", "Spatial interaction", "Experiences"] },
    ],
    workEyebrow: "Selected work",
    workHeading: "Evidence, not a list of buzzwords.",
    workIntro: "Public summaries are intentionally anonymized. Each item is labeled by its actual level of maturity.",
    labels: { challenge: "Challenge", approach: "Approach", output: "Output" },
    projects: [
      { number: "01", status: "Delivered", title: "Museum digital resource system", challenge: "Create consistency across fragmented digital resources and production practices.", approach: "Define resource standards, metadata, quality rules, and operating workflows before shaping the platform.", output: "A standards framework and a working digital resource management platform.", tags: ["Governance", "Metadata", "Platform", "Museums"] },
      { number: "02", status: "In development", title: "Local LLM evaluation workspace", challenge: "Choose local language models using evidence relevant to real tasks rather than generic rankings.", approach: "Compare quality, latency, memory use, and task performance through repeatable evaluation flows.", output: "An evaluation workspace for practical model selection and trade-off analysis.", tags: ["LLM", "Evaluation", "Local AI", "Decision support"] },
      { number: "03", status: "Prototype", title: "Embodied interaction concepts", challenge: "Make agents and robotic systems understandable and useful in physical environments.", approach: "Explore how sensing, agent behavior, and human-centered interaction can work as one product experience.", output: "Interaction concepts and prototypes connecting software intelligence with physical systems.", tags: ["Robotics", "Agents", "HRI", "Physical space"] },
    ],
    focusEyebrow: "Where this work applies",
    focusHeading: "A method that travels across domains.",
    focusIntro: "Cultural institutions are a deep area of practice—not a boundary on where the underlying capabilities can create value.",
    focusAreas: [
      ["Cultural institutions", "Collections, digital resources, interpretation, and public experience."],
      ["Knowledge organizations", "Complex content, governance, discovery, and operational platforms."],
      ["AI-native products", "Agentic workflows, evaluation, human oversight, and useful automation."],
      ["Physical environments", "Robotics, devices, sensing, and interaction beyond the screen."],
    ],
    toolkitLabel: "Working vocabulary",
    toolkit: ["Digital resource standards", "Metadata", "Product architecture", "Multimodal AI", "LLM evaluation", "Agents", "MCP", "Human-in-the-loop", "Robotics", "HRI"],
    principlesEyebrow: "Working principles",
    principlesHeading: "Technology earns trust through how it is built.",
    principles: [
      ["01", "Start with trustworthy foundations", "Intelligence is only as useful as the resources, standards, and context beneath it."],
      ["02", "Design around real workflows", "A product should improve how work gets done, not add another isolated demonstration."],
      ["03", "Validate in human contexts", "Technical performance matters, but so do clarity, control, reliability, and experience."],
    ],
    closingEyebrow: "A connected practice",
    closingHeading: "Structure first. Intelligence with purpose. Experience in the real world.",
    closingNote: "Selected work, systems thinking, and ongoing experiments across digital resources, AI, and robotics.",
    backToTop: "Back to top ↑",
  },
  zh: {
    lang: "zh-CN",
    navigationLabel: "主导航",
    nav: [["方法", "#method"], ["案例", "#work"], ["领域", "#focus"], ["原则", "#principles"]],
    kicker: "Jamie · 产品、系统与技术实践",
    headline: ["从复杂资源，", "到可运行的系统，", "再到真实世界的智能。"],
    intro: "我连接标准、平台、AI 与机器人，把复杂技术转化为可治理、可运行、可体验的系统。",
    explore: "了解我的工作方式",
    signal: ["标准", "平台", "智能体 AI", "机器人"],
    methodEyebrow: "如何创造价值",
    methodHeading: "一条从模糊问题走向真实体验的完整路径。",
    methodIntro: "这不是四项彼此无关的技能，而是一套端到端的方法：梳理复杂性、构建系统、赋予智能，并最终连接人与真实空间。",
    stages: [
      { number: "01", verb: "定义", title: "让复杂问题变得清晰。", description: "理解问题与约束，建立标准、数据模型和治理规则，并明确产品边界。", outputs: ["标准规范", "元数据", "治理体系", "产品范围"] },
      { number: "02", verb: "构建", title: "把结构转化为系统。", description: "将规则与流程落实为平台能力、产品架构和可持续运行的工具。", outputs: ["平台", "业务流程", "系统设计", "项目交付"] },
      { number: "03", verb: "赋能", title: "为系统加入有用的智能。", description: "在真正改善决策与工作流程的地方，引入模型、智能体、检索与评测。", outputs: ["大模型系统", "Agent / MCP", "模型评测", "人在回路"] },
      { number: "04", verb: "连接", title: "让系统进入真实世界。", description: "将数字能力延伸到机器人、设备、文化空间以及人与机器的交互中。", outputs: ["机器人", "人机交互", "空间交互", "体验设计"] },
    ],
    workEyebrow: "代表性案例",
    workHeading: "用真实交付证明能力，而不是堆砌关键词。",
    workIntro: "公开内容经过匿名化处理，并按照实际成熟度标注，避免夸大实验与原型。",
    labels: { challenge: "挑战", approach: "方法", output: "交付" },
    projects: [
      { number: "01", status: "已交付", title: "博物馆数字资源体系与平台", challenge: "解决数字资源分散、生产方式不一致以及管理规则缺失的问题。", approach: "先制定资源标准、元数据、质量规则和生产流程，再据此规划平台。", output: "一套数字资源标准规范，以及可运行的数字资源管理平台。", tags: ["资源治理", "元数据", "平台", "博物馆"] },
      { number: "02", status: "开发中", title: "本地大模型评测工作台", challenge: "不依赖通用排行榜，而是根据真实任务选择适合本地运行的语言模型。", approach: "以可重复的评测流程比较模型质量、响应速度、内存占用和任务表现。", output: "用于模型选择与权衡分析的本地评测工作台。", tags: ["大语言模型", "模型评测", "本地 AI", "决策支持"] },
      { number: "03", status: "原型", title: "具身交互概念", challenge: "让智能体与机器人系统在物理环境中变得易理解、可控制并真正有用。", approach: "探索环境感知、智能体行为与以人为中心的交互如何形成完整产品体验。", output: "连接软件智能与物理系统的交互方案和原型。", tags: ["机器人", "智能体", "人机交互", "实体空间"] },
    ],
    focusEyebrow: "应用领域",
    focusHeading: "一套可以跨领域迁移的方法。",
    focusIntro: "文化机构是长期实践的重点，但不是这些底层能力能够创造价值的边界。",
    focusAreas: [
      ["文化机构", "藏品、数字资源、知识阐释与公众体验。"],
      ["知识型组织", "复杂内容、资源治理、检索发现与运营平台。"],
      ["AI 原生产品", "智能体工作流、模型评测、人工监督与有效自动化。"],
      ["实体环境", "机器人、设备、环境感知与屏幕之外的交互。"],
    ],
    toolkitLabel: "技术与方法",
    toolkit: ["数字资源标准", "元数据", "产品架构", "多模态 AI", "大模型评测", "智能体", "MCP", "人在回路", "机器人", "人机交互"],
    principlesEyebrow: "工作原则",
    principlesHeading: "技术通过构建方式赢得信任。",
    principles: [
      ["01", "从可信基础开始", "智能能力的价值，取决于底层资源、标准与上下文是否可靠。"],
      ["02", "围绕真实流程设计", "产品应当改善工作的完成方式，而不是增加一个孤立的演示。"],
      ["03", "在人的场景中验证", "技术性能重要，清晰度、控制感、可靠性与体验同样重要。"],
    ],
    closingEyebrow: "一体化实践",
    closingHeading: "先建立结构，让智能有目的，让体验进入真实世界。",
    closingNote: "关于数字资源、AI 与机器人的代表性工作、系统思考和持续实验。",
    backToTop: "返回顶部 ↑",
  },
} as const;

export function PortfolioPage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const isChinese = locale === "zh";
  return (
    <main lang={copy.lang}>
      <header className="site-header">
        <a className="nameplate" href="#top" aria-label={isChinese ? "Jamie，返回顶部" : "Jamie, back to top"}>Jamie</a>
        <nav aria-label={copy.navigationLabel}>{copy.nav.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
        <div className="language-switch" aria-label={isChinese ? "选择语言" : "Choose language"}>
          <a href="/" lang="en" aria-current={isChinese ? undefined : "page"}>EN</a><span aria-hidden="true">/</span><a href="/zh" lang="zh-CN" aria-current={isChinese ? "page" : undefined}>中文</a>
        </div>
      </header>
      <section className="hero" id="top">
        <p className="kicker"><span className="signal" />{copy.kicker}</p>
        <h1>{copy.headline.map((line, index) => <span className={index === 2 ? "accent-line" : undefined} key={line}>{line}</span>)}</h1>
        <div className="hero-summary"><p>{copy.intro}</p><a className="text-link" href="#method">{copy.explore} <span aria-hidden="true">↓</span></a></div>
        <ul className="signal-list" aria-label={isChinese ? "核心方向" : "Core signals"}>{copy.signal.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul>
      </section>
      <section className="section method-section" id="method">
        <div className="section-intro"><p className="eyebrow">{copy.methodEyebrow}</p><div><h2>{copy.methodHeading}</h2><p>{copy.methodIntro}</p></div></div>
        <div className="stage-list">{copy.stages.map((stage) => <article className="stage" key={stage.number}><div className="stage-index"><span>{stage.number}</span><strong>{stage.verb}</strong></div><h3>{stage.title}</h3><p>{stage.description}</p><ul>{stage.outputs.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>
      <section className="section work-section" id="work">
        <div className="section-intro"><p className="eyebrow">{copy.workEyebrow}</p><div><h2>{copy.workHeading}</h2><p>{copy.workIntro}</p></div></div>
        <div className="case-list">{copy.projects.map((project) => <article className="case" key={project.number}><div className="case-top"><span>{project.number}</span><span className="status">{project.status}</span></div><h3>{project.title}</h3><dl><div><dt>{copy.labels.challenge}</dt><dd>{project.challenge}</dd></div><div><dt>{copy.labels.approach}</dt><dd>{project.approach}</dd></div><div><dt>{copy.labels.output}</dt><dd>{project.output}</dd></div></dl><ul className="tag-list">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
      </section>
      <section className="section focus-section" id="focus">
        <div className="section-intro"><p className="eyebrow">{copy.focusEyebrow}</p><div><h2>{copy.focusHeading}</h2><p>{copy.focusIntro}</p></div></div>
        <div className="focus-grid">{copy.focusAreas.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        <div className="toolkit"><p>{copy.toolkitLabel}</p><ul>{copy.toolkit.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </section>
      <section className="section principles-section" id="principles">
        <div className="section-intro"><p className="eyebrow">{copy.principlesEyebrow}</p><div><h2>{copy.principlesHeading}</h2></div></div>
        <div className="principle-grid">{copy.principles.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>
      <footer><p className="eyebrow">{copy.closingEyebrow}</p><h2>{copy.closingHeading}</h2><p className="footer-note">{copy.closingNote}</p><div className="footer-bottom"><span>Jamie © 2026</span><a href="#top">{copy.backToTop}</a></div></footer>
    </main>
  );
}
