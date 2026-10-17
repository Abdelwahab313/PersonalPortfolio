import {getCollection} from "astro:content";

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET(context) {
  const posts = await getCollection("blog", ({data}) =>
    import.meta.env.PROD ? data.status === "published" : true
  );
  posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const site = context.site ?? new URL("https://abdelwahab.dev/");
  const updated = posts[0] ? posts[0].data.date : new Date();

  const entries = posts
    .map(post => {
      const url = new URL(`/blog/${post.id}/`, site);
      const iso = post.data.date.toISOString();
      return [
        "  <entry>",
        `    <title>${escapeXml(post.data.title)}</title>`,
        `    <link href="${url}"/>`,
        `    <id>${url}</id>`,
        `    <published>${iso}</published>`,
        `    <updated>${iso}</updated>`,
        `    <summary>${escapeXml(post.data.lede)}</summary>`,
        "  </entry>"
      ].join("\n");
    })
    .join("\n");

  const feedUrl = new URL("/atom.xml", site);
  const blogUrl = new URL("/blog", site);
  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Blog | Abdelwahab Mahmoud</title>
  <subtitle>Case studies and notes from building production systems.</subtitle>
  <id>${feedUrl}</id>
  <link href="${feedUrl}" rel="self"/>
  <link href="${blogUrl}"/>
  <updated>${updated.toISOString()}</updated>
  <author>
    <name>Abdelwahab Mahmoud</name>
  </author>
${entries}
</feed>`;

  return new Response(xml, {
    headers: {"Content-Type": "application/atom+xml; charset=utf-8"}
  });
}
