const fs = require("fs");
const path = require("path");

const BLOG_DIR = __dirname;
const DIAGRAMS_FILE = path.join(
  __dirname,
  "..",
  "..",
  "components",
  "diagrams",
  "Diagram.js"
);

const FILES = fs
  .readdirSync(BLOG_DIR)
  .filter(
    name =>
      name.endsWith(".js") && name !== "index.js" && !name.endsWith(".test.js")
  )
  .sort();

const KINDS = ["case-study", "note"];
const STATUSES = ["draft", "published"];
const CASE_PARTS = ["situation", "decision", "tradeoff", "outcome"];

function diagramNames() {
  const source = fs.readFileSync(DIAGRAMS_FILE, "utf8");
  const block = source.match(/const diagrams = \{([\s\S]*?)\};/);
  if (!block) throw new Error("could not find the diagrams map in Diagram.js");
  return [...block[1].matchAll(/^\s*([a-z0-9]+):\s*\w+,?\s*$/gm)].map(
    m => m[1]
  );
}

describe("blog content", () => {
  it("finds at least the four migrated case studies", () => {
    expect(FILES.length).toBeGreaterThanOrEqual(4);
  });

  it("registers every file in the generated index", () => {
    const {posts} = require("./index");
    expect(posts.map(post => post.slug).sort()).toEqual(
      FILES.map(file => file.replace(/\.js$/, ""))
    );
  });

  it("has no duplicate slugs", () => {
    const slugs = FILES.map(file => file.replace(/\.js$/, ""));
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it.each(FILES)("%s is a valid post", file => {
    const post = require(path.join(BLOG_DIR, file));
    const expectedSlug = file.replace(/\.js$/, "");

    expect(post).toEqual(expect.any(Object));
    expect(post.slug).toBe(expectedSlug);
    expect(typeof post.title).toBe("string");
    expect(post.title.trim().length).toBeGreaterThan(0);
    expect(KINDS).toContain(post.kind);
    expect(STATUSES).toContain(post.status);
    expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);

    expect(typeof post.lede).toBe("string");
    expect(post.lede.trim().length).toBeGreaterThan(0);
    expect(post.lede.length).toBeLessThanOrEqual(160);

    if (post.tags !== undefined) {
      expect(Array.isArray(post.tags)).toBe(true);
      post.tags.forEach(tag => expect(typeof tag).toBe("string"));
    }

    if (post.kind === "case-study") {
      CASE_PARTS.forEach(part => {
        expect(typeof post[part]).toBe("string");
        expect(post[part].trim().length).toBeGreaterThan(0);
      });
      if (post.diagram !== undefined) {
        expect(diagramNames()).toContain(post.diagram);
        expect(typeof post.diagramCaption).toBe("string");
        expect(post.diagramCaption.trim().length).toBeGreaterThan(0);
      }
    } else {
      expect(Array.isArray(post.sections)).toBe(true);
      expect(post.sections.length).toBeGreaterThan(0);
      post.sections.forEach(section => {
        expect(typeof section.heading).toBe("string");
        expect(section.heading.trim().length).toBeGreaterThan(0);
        expect(Array.isArray(section.paragraphs)).toBe(true);
        expect(section.paragraphs.length).toBeGreaterThan(0);
      });
      expect(post.situation).toBeUndefined();
    }
  });
});

describe("drafts", () => {
  const withNodeEnv = (value, fn) => {
    const descriptor = Object.getOwnPropertyDescriptor(process, "env");
    Object.defineProperty(process, "env", {
      ...descriptor,
      value: {...process.env, NODE_ENV: value}
    });
    try {
      return fn();
    } finally {
      Object.defineProperty(process, "env", descriptor);
    }
  };

  it("are visible in development and hidden in production", () => {
    const {visiblePosts} = require("../visiblePosts");
    const {posts} = require("./index");

    withNodeEnv("development", () => {
      expect(visiblePosts().length).toBe(posts.length);
    });

    withNodeEnv("production", () => {
      const visible = visiblePosts();
      expect(visible.every(post => post.status === "published")).toBe(true);
      expect(visible.length).toBeLessThanOrEqual(posts.length);
    });
  });
});
