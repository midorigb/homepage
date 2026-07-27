import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Jamie's portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Jamie — AI, Robotics &amp; Digital Heritage/);
  assert.match(html, /Building intelligence/);
  assert.match(html, /Local LLM Benchmark/);
  assert.match(html, /Museum Intelligence/);
  assert.match(html, /Embodied Interfaces/);
  assert.match(html, /Exploring practical intersections/);
  assert.doesNotMatch(html, /Let(?:&#x27;|&apos;|')s talk|Start a conversation/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("server-renders the Chinese portfolio", async () => {
  const response = await render("/zh");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /构建智能/);
  assert.match(html, /本地大模型评测/);
  assert.match(html, /博物馆智能/);
  assert.match(html, /具身交互/);
  assert.match(html, /技术应当拓展人们理解、创造与体验世界的方式/);
  assert.match(html, /href="\/"[^>]*>EN</);
});
