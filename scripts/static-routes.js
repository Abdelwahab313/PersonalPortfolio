/**
 * Runs after `react-scripts build` (see the postbuild script).
 *
 * GitHub Pages serves a file only when a path maps to one, so a deep link
 * such as /blog/fargate would 404 on a hard refresh. This writes a real
 * index.html per route, which also lets each page carry its own title,
 * description and og:url.
 *
 *   build/blog/index.html          the index
 *   build/blog/<slug>/index.html   every published post
 *   build/404.html                 unknown paths, rendered by the SPA router
 */

const fs = require("fs");
const path = require("path");

const SITE = "https://abdelwahab.dev";
const BUILD_DIR = path.join(__dirname, "..", "build");
const TEMPLATE = path.join(BUILD_DIR, "index.html");
const BLOG_DIR = path.join(__dirname, "..", "src", "content", "blog");

const BLOG_INDEX = {
  title: "Abdelwahab Mahmoud | Blog",
  description:
    "Case studies and notes. Four systems from the last two years, plus whatever comes next."
};

function publishedPosts() {
  return fs
    .readdirSync(BLOG_DIR)
    .filter(
      name =>
        name.endsWith(".js") &&
        name !== "index.js" &&
        !name.endsWith(".test.js")
    )
    .map(name => require(path.join(BLOG_DIR, name)))
    .filter(post => post.status === "published")
    .sort((a, b) => {
      if (a.date !== b.date) return a.date < b.date ? 1 : -1;
      return (a.order || 0) - (b.order || 0);
    });
}

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function injectMeta(html, {title, description, url}) {
  const t = escapeAttr(title);
  const d = escapeAttr(description);
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/(<meta name="title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(
      /(<meta property="og:url" content=")[^"]*(")/,
      `$1${escapeAttr(url)}$2`
    )
    .replace(/(<meta property="twitter:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(
      /(<meta property="twitter:description" content=")[^"]*(")/,
      `$1${d}$2`
    )
    .replace(
      /(<meta property="twitter:url" content=")[^"]*(")/,
      `$1${escapeAttr(url)}$2`
    );
}

function write(relative, html) {
  const target = path.join(BUILD_DIR, relative);
  fs.mkdirSync(path.dirname(target), {recursive: true});
  fs.writeFileSync(target, html);
}

function main() {
  if (!fs.existsSync(TEMPLATE)) {
    throw new Error(
      `static-routes: ${TEMPLATE} not found. Run react-scripts build first.`
    );
  }

  const template = fs.readFileSync(TEMPLATE, "utf8");
  let count = 0;

  write(
    path.join("blog", "index.html"),
    injectMeta(template, {
      ...BLOG_INDEX,
      url: `${SITE}/blog/`
    })
  );
  count += 1;

  for (const post of publishedPosts()) {
    write(
      path.join("blog", post.slug, "index.html"),
      injectMeta(template, {
        title: `${post.title} | Abdelwahab Mahmoud`,
        description: post.lede,
        url: `${SITE}/blog/${post.slug}/`
      })
    );
    count += 1;
  }

  write(
    "404.html",
    injectMeta(template, {
      title: "Not found | Abdelwahab Mahmoud",
      description: "That page does not exist.",
      url: `${SITE}/`
    })
  );
  count += 1;

  console.log(`static-routes: wrote ${count} route file(s)`);
}

main();
