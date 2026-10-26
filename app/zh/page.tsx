import type { Metadata } from "next";
import { PortfolioPage } from "../portfolio-page";

export const metadata: Metadata = {
  title: "Jamie — 产品、系统与应用智能",
  description: "把复杂资源转化为可运行的系统，并进一步赋予智能与真实世界的交互能力。",
  alternates: {
    canonical: "/zh",
    languages: {
      en: "/",
      "zh-CN": "/zh",
    },
  },
  openGraph: {
    title: "Jamie — 产品、系统与应用智能",
    description: "从可信数字资源到智能产品与真实世界体验。",
    locale: "zh_CN",
  },
};

export default function ChineseHome() {
  return <PortfolioPage locale="zh" />;
}
