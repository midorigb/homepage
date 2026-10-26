type Locale = "en" | "zh";

const content = {
  en: {
    lang: "en",
    navigationLabel: "Primary navigation",
    nav: [["Capabilities", "#method"], ["Work", "#work"], ["R&D", "#focus"]],
    kicker: "Jamie",
    headline: ["Technology &", "Product Architect"],
    intro: "Digital resources, knowledge systems, interactive applications, and applied AI.",
    explore: "Explore selected work",
    signal: ["Digital resources", "Knowledge systems", "Interactive applications", "Applied AI"],
    methodEyebrow: "Capabilities",
    methodHeading: "Technical scope",
    methodIntro: "Four connected layers, from structured resources to intelligent interaction.",
    stages: [
      { number: "01", verb: "Foundation", title: "Digital resources", description: "Standards, metadata, production workflows, governance, and management platforms.", outputs: ["Standards", "Metadata", "Governance", "Platforms"] },
      { number: "02", verb: "Structure", title: "Knowledge systems", description: "Knowledge graphs, data integration, search, discovery, and visualization.", outputs: ["Knowledge graph", "Big data", "Search", "Visualization"] },
      { number: "03", verb: "Application", title: "Interactive applications", description: "AR, digital interpretation, spatial experience, and public-facing products.", outputs: ["AR", "Interaction", "Spatial experience", "Applications"] },
      { number: "04", verb: "Extension", title: "Applied intelligence", description: "LLM evaluation, agents, MCP, multimodal AI, and human–machine interaction.", outputs: ["LLM", "Agents / MCP", "Multimodal AI", "Robotics"] },
    ],
    workEyebrow: "Projects",
    workHeading: "Selected work",
    workIntro: "Three areas of project experience. Public summaries are anonymized.",
    labels: { challenge: "Challenge", approach: "Approach", output: "Output" },
    projects: [
      { number: "01", status: "Delivered", title: "Digital resource standards & platform", challenge: "Standardize fragmented resources, production processes, and management rules.", approach: "Define metadata, quality rules, and workflows, then translate them into platform functions.", output: "Digital resource standards and an operational management platform.", tags: ["Standards", "Metadata", "Workflow", "Platform"] },
      { number: "02", status: "Project work", title: "Knowledge graph & data applications", challenge: "Connect data from different sources and make it easier to retrieve and use.", approach: "Organize entities and relationships, integrate data, and design retrieval and visualization functions.", output: "Knowledge graph and data applications supporting discovery and analysis.", tags: ["Knowledge graph", "Big data", "Search", "Visualization"] },
      { number: "03", status: "Project work", title: "AR & spatial applications", challenge: "Connect digital content with exhibitions and physical environments.", approach: "Design content structure, user flow, and AR interaction for specific spaces.", output: "AR and interactive applications for spatial content access and interpretation.", tags: ["AR", "Interaction", "Spatial computing", "Digital content"] },
    ],
    focusEyebrow: "Current R&D",
    focusHeading: "Current R&D",
    focusIntro: "Extending existing resource, knowledge, and application systems with AI and physical interaction.",
    focusAreas: [
      ["Local model evaluation", "Quality, latency, memory use, and task-specific comparison."],
      ["Agent workflows", "Agents, MCP, tool use, and human review."],
      ["AI-assisted resources", "Classification, extraction, retrieval, and quality control."],
      ["Robotics & HRI", "Sensing, behavior, control, and interaction in physical spaces."],
    ],
    toolkitLabel: "Technology",
    toolkit: ["Digital resource standards", "Metadata", "Product architecture", "Multimodal AI", "LLM evaluation", "Agents", "MCP", "Human-in-the-loop", "Robotics", "HRI"],
    closingEyebrow: "Jamie · Technology & Product Architect",
    closingHeading: "Digital resources · Knowledge systems · Applied AI",
    closingNote: "Selected project work and current R&D.",
    backToTop: "Back to top ↑",
  },
  zh: {
    lang: "zh-CN",
    navigationLabel: "主导航",
    nav: [["能力", "#method"], ["项目", "#work"], ["研发", "#focus"]],
    kicker: "Jamie",
    headline: ["技术与产品", "架构师"],
    intro: "数字资源、知识系统、交互应用与应用 AI。",
    explore: "查看代表项目",
    signal: ["数字资源", "知识系统", "交互应用", "应用 AI"],
    methodEyebrow: "能力",
    methodHeading: "技术范围",
    methodIntro: "从结构化资源到智能交互的四个关联层次。",
    stages: [
      { number: "01", verb: "基础", title: "数字资源", description: "标准规范、元数据、生产流程、资源治理与管理平台。", outputs: ["标准规范", "元数据", "资源治理", "管理平台"] },
      { number: "02", verb: "组织", title: "知识系统", description: "知识图谱、数据整合、检索发现与数据可视化。", outputs: ["知识图谱", "大数据", "检索", "可视化"] },
      { number: "03", verb: "应用", title: "交互应用", description: "AR、数字阐释、空间体验与公众端产品。", outputs: ["AR", "交互", "空间体验", "应用产品"] },
      { number: "04", verb: "延伸", title: "应用智能", description: "大模型评测、Agent、MCP、多模态 AI 与人机交互。", outputs: ["大模型", "Agent / MCP", "多模态 AI", "机器人"] },
    ],
    workEyebrow: "项目",
    workHeading: "代表项目",
    workIntro: "三个项目实践方向。公开内容经过匿名化处理。",
    labels: { challenge: "挑战", approach: "方法", output: "交付" },
    projects: [
      { number: "01", status: "已交付", title: "数字资源标准与管理平台", challenge: "统一分散的数字资源、生产流程与管理规则。", approach: "制定元数据、质量规则和工作流程，再将其转化为平台功能。", output: "数字资源标准规范与投入运行的管理平台。", tags: ["标准规范", "元数据", "工作流程", "平台"] },
      { number: "02", status: "项目实践", title: "知识图谱与数据应用", challenge: "关联不同来源的数据，并提高数据的检索与利用效率。", approach: "组织实体与关系，整合数据，并设计检索和可视化功能。", output: "支持知识发现与分析的知识图谱和数据应用。", tags: ["知识图谱", "大数据", "检索", "可视化"] },
      { number: "03", status: "项目实践", title: "AR 与空间应用", challenge: "将数字内容与展览及实体环境连接起来。", approach: "针对具体空间设计内容结构、用户流程与 AR 交互。", output: "用于空间内容访问与阐释的 AR 和交互应用。", tags: ["AR", "交互", "空间计算", "数字内容"] },
    ],
    focusEyebrow: "当前研发",
    focusHeading: "当前研发",
    focusIntro: "在已有资源、知识和应用系统上，继续扩展 AI 与实体交互能力。",
    focusAreas: [
      ["本地模型评测", "模型效果、响应速度、内存占用与任务表现。"],
      ["Agent 工作流", "Agent、MCP、工具调用与人工审核。"],
      ["AI 辅助资源处理", "分类、信息提取、检索与质量检查。"],
      ["机器人与人机交互", "环境感知、行为、控制与实体空间交互。"],
    ],
    toolkitLabel: "技术",
    toolkit: ["数字资源标准", "元数据", "产品架构", "多模态 AI", "大模型评测", "智能体", "MCP", "人在回路", "机器人", "人机交互"],
    closingEyebrow: "Jamie · 技术与产品架构师",
    closingHeading: "数字资源 · 知识系统 · 应用 AI",
    closingNote: "代表项目与当前研发。",
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
      <section className="section method-section" id="method">
        <div className="section-intro"><p className="eyebrow">{copy.methodEyebrow}</p><div><h2>{copy.methodHeading}</h2><p>{copy.methodIntro}</p></div></div>
        <div className="stage-list">{copy.stages.map((stage) => <article className="stage" key={stage.number}><div className="stage-index"><span>{stage.number}</span><strong>{stage.verb}</strong></div><h3>{stage.title}</h3><p>{stage.description}</p><ul>{stage.outputs.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>
      <section className="section work-section" id="work">
        <div className="section-intro"><p className="eyebrow">{copy.workEyebrow}</p><div><h2>{copy.workHeading}</h2><p>{copy.workIntro}</p></div></div>
        <div className="case-list">{copy.projects.map((project, index) => <article className={`case case-${index + 1}`} key={project.number}><div className="project-visual" aria-hidden="true"><span>{project.number}</span><i /><i /><i /></div><div className="case-content"><div className="case-top"><span>{project.number}</span><span className="status">{project.status}</span></div><h3>{project.title}</h3><dl><div><dt>{copy.labels.challenge}</dt><dd>{project.challenge}</dd></div><div><dt>{copy.labels.approach}</dt><dd>{project.approach}</dd></div><div><dt>{copy.labels.output}</dt><dd>{project.output}</dd></div></dl><ul className="tag-list">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div></article>)}</div>
      </section>
      <section className="section focus-section" id="focus">
        <div className="section-intro"><p className="eyebrow">{copy.focusEyebrow}</p><div><h2>{copy.focusHeading}</h2><p>{copy.focusIntro}</p></div></div>
        <div className="focus-grid">{copy.focusAreas.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        <div className="toolkit"><p>{copy.toolkitLabel}</p><ul>{copy.toolkit.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </section>
      <footer><p className="eyebrow">{copy.closingEyebrow}</p><h2>{copy.closingHeading}</h2><p className="footer-note">{copy.closingNote}</p><div className="footer-bottom"><span>Jamie © 2026</span><a href="#top">{copy.backToTop}</a></div></footer>
    </main>
  );
}
