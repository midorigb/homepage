import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the English capability portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Jamie — Technology &amp; Product Architect/);
  assert.match(html, /I design useful systems/);
  assert.match(html, /Define/);
  assert.match(html, /Build/);
  assert.match(html, /Augment/);
  assert.match(html, /Connect/);
  assert.match(html, /Museum digital resource system/);
  assert.match(html, /Local LLM evaluation workspace/);
  assert.match(html, /Embodied interaction concepts/);
  assert.match(html, /Selected projects and ongoing experiments/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("server-renders the Chinese capability portfolio", async () => {
  const response = await render("/zh");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Jamie — 技术与产品架构师/);
  assert.match(html, /为复杂世界/);
  assert.match(html, /定义/);
  assert.match(html, /构建/);
  assert.match(html, /赋能/);
  assert.match(html, /连接/);
  assert.match(html, /博物馆数字资源体系与平台/);
  assert.match(html, /本地大模型评测工作台/);
  assert.match(html, /具身交互概念/);
  assert.match(html, /href="\/"[^>]*>EN</);
});
