import rss from "@astrojs/rss";
import {getCollection} from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog", ({data}) =>
    import.meta.env.PROD ? data.status === "published" : true
  );
  posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: "Blog | Abdelwahab Mahmoud",
    description: "Case studies and notes from building production systems.",
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.lede,
      link: `/blog/${post.id}/`
    }))
  });
}
