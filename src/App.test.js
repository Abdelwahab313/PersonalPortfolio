import React from "react";
import {createRoot} from "react-dom/client";
import {act} from "react-dom/test-utils";
import App from "./App";

global.IS_REACT_ACT_ENVIRONMENT = true;

let root = null;
let container = null;

beforeEach(() => {
  window.matchMedia = query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  });
});

afterEach(async () => {
  if (root) {
    await act(async () => {
      root.unmount();
    });
  }
  root = null;
  container = null;
  window.history.pushState({}, "", "/");
});

async function renderAt(path) {
  window.history.pushState({}, "", path);
  container = document.createElement("div");
  root = createRoot(container);
  await act(async () => {
    root.render(<App />);
  });
  return container;
}

it("renders the hero, the timeline and the products", async () => {
  const node = await renderAt("/");

  expect(node.textContent).toContain("Hi, I'm Abdelwahab");
  expect(node.textContent).toContain("1.5M+ WordPress sites");
  expect(node.textContent).toContain(
    "OnTheGoSystems (WPML — WordPress plugins)"
  );
  expect(node.textContent).toContain("January 2018 – October 2020");
  expect(node.textContent).not.toContain("January 2018 – August 2018");
  expect(node.textContent).toContain("abdelwahabahmed93@gmail.com");
  expect(node.querySelectorAll("#projects a.project-tag").length).toBe(4);

  const more = node.querySelector("button.experience-more");
  expect(more).toBeTruthy();
  expect(node.textContent).not.toContain("GitLab CI/CD pipelines");
  await act(async () => {
    more.dispatchEvent(new MouseEvent("click", {bubbles: true}));
  });
  expect(node.textContent).toContain("GitLab CI/CD pipelines");
});

it("keeps case studies off the home page", async () => {
  const node = await renderAt("/");
  expect(node.querySelector("#cases")).toBeNull();
  expect(node.textContent).not.toContain("Draining, not stopping");
});

it("lists every post under /blog", async () => {
  const node = await renderAt("/blog");

  expect(node.querySelectorAll(".post-row").length).toBe(4);
  expect(node.textContent).toContain("Draining, not stopping");
  expect(node.textContent).toContain("One engine, three providers");
  expect(node.textContent).toContain("7.33M rows per call");
  expect(node.textContent).toContain(
    "The verdict lives in code, not the prompt"
  );
  expect(node.querySelectorAll(".post-row a.post-row-title").length).toBe(4);
});

it("renders a case study with its diagram and the four parts", async () => {
  const node = await renderAt("/blog/fargate");

  expect(node.textContent).toContain("Draining, not stopping");
  expect(node.querySelectorAll("svg").length).toBeGreaterThanOrEqual(1);
  expect(node.textContent).toContain("Situation");
  expect(node.textContent).toContain("Decision");
  expect(node.textContent).toContain("Trade-off");
  expect(node.textContent).toContain("Outcome");
  expect(node.textContent).toContain("90% on Spot");
});

it("renders a not found page for an unknown route", async () => {
  const node = await renderAt("/nope");
  expect(node.textContent).toContain("Not found");
});
