import type { Metadata } from "next";
import { PortfolioPage } from "../portfolio-page";

export const metadata: Metadata = {
  title: "Jamie — 人工智能、机器人与数字文化遗产",
  description: "Jamie 专注于人工智能、机器人与博物馆数字化，探索技术与现实的交汇。",
  alternates: {
    canonical: "/zh",
    languages: {
      en: "/",
      "zh-CN": "/zh",
    },
  },
  openGraph: {
    title: "Jamie — 人工智能、机器人与数字文化遗产",
    description: "构建智能，连接物理世界与文化世界。",
    locale: "zh_CN",
  },
};

export default function ChineseHome() {
  return <PortfolioPage locale="zh" />;
}
