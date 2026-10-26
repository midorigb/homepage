type Locale = "en" | "zh";

const content = {
  en: {
    lang: "en",
    navigationLabel: "Primary navigation",
    nav: [["Method", "#method"], ["Work", "#work"], ["Focus", "#focus"], ["Principles", "#principles"]],
    kicker: "Technology & Product Architect",
    headline: ["I design digital platforms", "and practical AI products."],
    intro: "I work on digital resource standards, platform design, and AI product prototypes, with a growing focus on robotics and human–machine interaction.",
    explore: "Explore selected work",
    signal: ["Standards", "Platforms", "Agentic AI", "Robotics"],
    methodEyebrow: "How I create value",
    methodHeading: "I define the rules, map the workflow, design the platform, and test the technology.",
    methodIntro: "The exact mix changes by project, but the work usually includes these four parts.",
    stages: [
      { number: "01", verb: "Define", title: "Set the rules before building.", description: "Identify the resources, users, metadata, and quality requirements that the product needs to support.", outputs: ["Standards", "Metadata", "Governance", "Product scope"] },
      { number: "02", verb: "Build", title: "Turn rules into platform features.", description: "Map the working process, design the product structure, and translate requirements into usable tools.", outputs: ["Platforms", "Workflows", "System design", "Delivery"] },
      { number: "03", verb: "Augment", title: "Test where AI actually helps.", description: "Evaluate models and agent workflows against specific tasks, costs, speed, and the need for human review.", outputs: ["LLM systems", "Agents / MCP", "Evaluation", "Human-in-the-loop"] },
      { number: "04", verb: "Connect", title: "Design interaction beyond the screen.", description: "Explore how software, sensors, devices, and robots can respond clearly to people in physical spaces.", outputs: ["Robotics", "HRI", "Spatial interaction", "Experiences"] },
    ],
    workEyebrow: "Selected work",
    workHeading: "Three projects, at three different stages.",
    workIntro: "One delivered platform, one tool in development, and one direction being explored. Public summaries are intentionally anonymized.",
    labels: { challenge: "Challenge", approach: "Approach", output: "Output" },
    projects: [
      { number: "01", status: "Delivered", title: "Museum digital resource system", challenge: "Create consistency across fragmented digital resources and production practices.", approach: "Define resource standards, metadata, quality rules, and operating workflows before shaping the platform.", output: "A standards framework and a working digital resource management platform.", tags: ["Governance", "Metadata", "Platform", "Museums"] },
      { number: "02", status: "In development", title: "Local LLM evaluation workspace", challenge: "Choose local language models using evidence relevant to real tasks rather than generic rankings.", approach: "Compare quality, latency, memory use, and task performance through repeatable evaluation flows.", output: "An evaluation workspace for practical model selection and trade-off analysis.", tags: ["LLM", "Evaluation", "Local AI", "Decision support"] },
      { number: "03", status: "Prototype", title: "Embodied interaction concepts", challenge: "Make agents and robotic systems understandable and useful in physical environments.", approach: "Explore how sensing, agent behavior, and human-centered interaction can work as one product experience.", output: "Interaction concepts and prototypes connecting software intelligence with physical systems.", tags: ["Robotics", "Agents", "HRI", "Physical space"] },
    ],
    focusEyebrow: "Where this work applies",
    focusHeading: "The kinds of problems I currently work on.",
    focusIntro: "My experience starts with cultural institutions and digital resources, then extends into AI products and physical interaction.",
    focusAreas: [
      ["Cultural institutions", "Collections, digital resources, interpretation, and public experience."],
      ["Knowledge organizations", "Complex content, governance, discovery, and operational platforms."],
      ["AI-native products", "Agentic workflows, evaluation, human oversight, and useful automation."],
      ["Physical environments", "Robotics, devices, sensing, and interaction beyond the screen."],
    ],
    toolkitLabel: "Working vocabulary",
    toolkit: ["Digital resource standards", "Metadata", "Product architecture", "Multimodal AI", "LLM evaluation", "Agents", "MCP", "Human-in-the-loop", "Robotics", "HRI"],
    principlesEyebrow: "Working principles",
    principlesHeading: "Three checks before I call the work finished.",
    principles: [
      ["01", "Are the resources organized?", "Names, metadata, ownership, and quality rules should be clear before new features are added."],
      ["02", "Does it fit the actual workflow?", "The product should remove steps or make decisions easier for the people doing the work."],
      ["03", "Can people understand and control it?", "AI and automation need visible limits, reliable feedback, and a clear way for people to intervene."],
    ],
    closingEyebrow: "A connected practice",
    closingHeading: "Standards, platforms, AI prototypes, and interaction design.",
    closingNote: "Selected work and ongoing experiments across digital resources, AI, and robotics.",
    backToTop: "Back to top ↑",
  },
  zh: {
    lang: "zh-CN",
    navigationLabel: "主导航",
    nav: [["方法", "#method"], ["案例", "#work"], ["领域", "#focus"], ["原则", "#principles"]],
    kicker: "技术与产品架构师",
    headline: ["设计数字平台，", "也探索 AI 的实际应用。"],
    intro: "我主要从事数字资源标准、平台设计和 AI 产品原型，也在持续探索机器人与人机交互。",
    explore: "查看代表项目",
    signal: ["标准", "平台", "智能体 AI", "机器人"],
    methodEyebrow: "如何创造价值",
    methodHeading: "制定规则、梳理流程、设计平台，也验证新的技术方案。",
    methodIntro: "每个项目的侧重点不同，但通常会涉及下面四部分工作。",
    stages: [
      { number: "01", verb: "定义", title: "先把建设规则定清楚。", description: "明确资源类型、使用者、元数据字段和质量要求，避免平台建成后再反复补规则。", outputs: ["标准规范", "元数据", "治理体系", "产品范围"] },
      { number: "02", verb: "构建", title: "把规则落实为平台功能。", description: "梳理实际工作流程，设计产品结构，并把业务要求转化为可操作的工具。", outputs: ["平台", "业务流程", "系统设计", "项目交付"] },
      { number: "03", verb: "赋能", title: "验证 AI 到底能帮什么。", description: "围绕具体任务比较模型效果、速度、成本，以及哪些环节仍然需要人工审核。", outputs: ["大模型系统", "Agent / MCP", "模型评测", "人在回路"] },
      { number: "04", verb: "连接", title: "设计屏幕之外的交互。", description: "探索软件、传感器、设备和机器人如何在实体空间中清楚地回应人的操作。", outputs: ["机器人", "人机交互", "空间交互", "体验设计"] },
    ],
    workEyebrow: "代表性案例",
    workHeading: "三个项目，处于三个不同阶段。",
    workIntro: "一个已经交付的平台、一个正在开发的工具，以及一个仍在探索的方向。公开内容经过匿名化处理。",
    labels: { challenge: "挑战", approach: "方法", output: "交付" },
    projects: [
      { number: "01", status: "已交付", title: "博物馆数字资源体系与平台", challenge: "解决数字资源分散、生产方式不一致以及管理规则缺失的问题。", approach: "先制定资源标准、元数据、质量规则和生产流程，再据此规划平台。", output: "一套数字资源标准规范，以及可运行的数字资源管理平台。", tags: ["资源治理", "元数据", "平台", "博物馆"] },
      { number: "02", status: "开发中", title: "本地大模型评测工作台", challenge: "不依赖通用排行榜，而是根据真实任务选择适合本地运行的语言模型。", approach: "以可重复的评测流程比较模型质量、响应速度、内存占用和任务表现。", output: "用于模型选择与权衡分析的本地评测工作台。", tags: ["大语言模型", "模型评测", "本地 AI", "决策支持"] },
      { number: "03", status: "原型", title: "具身交互概念", challenge: "让智能体与机器人系统在物理环境中变得易理解、可控制并真正有用。", approach: "探索环境感知、智能体行为与以人为中心的交互如何形成完整产品体验。", output: "连接软件智能与物理系统的交互方案和原型。", tags: ["机器人", "智能体", "人机交互", "实体空间"] },
    ],
    focusEyebrow: "应用领域",
    focusHeading: "目前主要关注的四类问题。",
    focusIntro: "实践从文化机构和数字资源开始，并逐步延伸到 AI 产品与实体空间交互。",
    focusAreas: [
      ["文化机构", "藏品、数字资源、知识阐释与公众体验。"],
      ["知识型组织", "复杂内容、资源治理、检索发现与运营平台。"],
      ["AI 原生产品", "智能体工作流、模型评测、人工监督与有效自动化。"],
      ["实体环境", "机器人、设备、环境感知与屏幕之外的交互。"],
    ],
    toolkitLabel: "技术与方法",
    toolkit: ["数字资源标准", "元数据", "产品架构", "多模态 AI", "大模型评测", "智能体", "MCP", "人在回路", "机器人", "人机交互"],
    principlesEyebrow: "工作原则",
    principlesHeading: "判断一项工作是否做好的三个问题。",
    principles: [
      ["01", "资源是否整理清楚？", "名称、元数据、责任归属和质量规则，需要在增加新功能之前明确。"],
      ["02", "是否符合实际工作流程？", "产品应该减少操作步骤，或帮助实际使用者更容易地作出判断。"],
      ["03", "人能否理解并控制它？", "AI 与自动化需要明确的边界、可靠的反馈，以及人工介入的方式。"],
    ],
    closingEyebrow: "一体化实践",
    closingHeading: "标准、平台、AI 原型与交互设计。",
    closingNote: "关于数字资源、AI 与机器人的代表性工作和持续实验。",
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
        <div className="hero-summary"><p>{copy.intro}</p><a className="text-link" href="#work">{copy.explore} <span aria-hidden="true">↓</span></a></div>
        <ul className="signal-list" aria-label={isChinese ? "核心方向" : "Core signals"}>{copy.signal.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul>
      </section>
      <section className="section work-section" id="work">
        <div className="section-intro"><p className="eyebrow">{copy.workEyebrow}</p><div><h2>{copy.workHeading}</h2><p>{copy.workIntro}</p></div></div>
        <div className="case-list">{copy.projects.map((project, index) => <article className={`case case-${index + 1}`} key={project.number}><div className="project-visual" aria-hidden="true"><span>{project.number}</span><i /><i /><i /></div><div className="case-content"><div className="case-top"><span>{project.number}</span><span className="status">{project.status}</span></div><h3>{project.title}</h3><dl><div><dt>{copy.labels.challenge}</dt><dd>{project.challenge}</dd></div><div><dt>{copy.labels.approach}</dt><dd>{project.approach}</dd></div><div><dt>{copy.labels.output}</dt><dd>{project.output}</dd></div></dl><ul className="tag-list">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div></article>)}</div>
      </section>
      <section className="section method-section" id="method">
        <div className="section-intro"><p className="eyebrow">{copy.methodEyebrow}</p><div><h2>{copy.methodHeading}</h2><p>{copy.methodIntro}</p></div></div>
        <div className="stage-list">{copy.stages.map((stage) => <article className="stage" key={stage.number}><div className="stage-index"><span>{stage.number}</span><strong>{stage.verb}</strong></div><h3>{stage.title}</h3><p>{stage.description}</p><ul>{stage.outputs.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
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
