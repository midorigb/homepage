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
  assert.match(html, /Technology &amp;/);
  assert.match(html, /Digital resources/);
  assert.match(html, /Knowledge systems/);
  assert.match(html, /Interactive applications/);
  assert.match(html, /Applied intelligence/);
  assert.match(html, /Digital resource standards &amp; platform/);
  assert.match(html, /Knowledge graph &amp; data applications/);
  assert.match(html, /AR &amp; spatial applications/);
  assert.match(html, /Current R&amp;D/);
  assert.match(html, /Selected work/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("server-renders the Chinese capability portfolio", async () => {
  const response = await render("/zh");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Jamie — 技术与产品架构师/);
  assert.match(html, /技术与产品/);
  assert.match(html, /数字资源/);
  assert.match(html, /知识系统/);
  assert.match(html, /交互应用/);
  assert.match(html, /应用智能/);
  assert.match(html, /数字资源标准与管理平台/);
  assert.match(html, /知识图谱与数据应用/);
  assert.match(html, /AR 与空间应用/);
  assert.match(html, /当前研发/);
  assert.match(html, /href="\/"[^>]*>EN</);
});
