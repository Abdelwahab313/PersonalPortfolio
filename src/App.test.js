import React from "react";
import {createRoot} from "react-dom/client";
import {act} from "react-dom/test-utils";
import App from "./App";

global.IS_REACT_ACT_ENVIRONMENT = true;

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

it("renders the hero, the case studies with diagrams, the timeline and the products", async () => {
  const container = document.createElement("div");
  const root = createRoot(container);
  await act(async () => {
    root.render(<App />);
  });

  expect(container.textContent).toContain("Hi, I'm Abdelwahab");
  expect(container.textContent).toContain("Case studies");
  expect(container.querySelectorAll("#cases article.case").length).toBe(4);
  expect(container.querySelectorAll("#cases svg").length).toBe(4);
  expect(container.textContent).toContain("Draining, not stopping");
  expect(container.textContent).toContain("7.33M rows per call");
  expect(container.textContent).toContain("OnTheGoSystems");
  expect(container.querySelectorAll("#projects a.project-tag").length).toBe(4);
  expect(container.textContent).toContain("abdelwahabahmed93@gmail.com");

  const more = container.querySelector("button.experience-more");
  expect(more).toBeTruthy();
  expect(container.textContent).not.toContain("ISO 27001");
  await act(async () => {
    more.dispatchEvent(new MouseEvent("click", {bubbles: true}));
  });
  expect(container.textContent).toContain("ISO 27001");

  await act(async () => {
    root.unmount();
  });
});
