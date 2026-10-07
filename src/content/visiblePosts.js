import {posts} from "./blog";

/**
 * Drafts are visible while developing so an author can preview
 * `http://localhost:3000/blog/<slug>` before flipping `status`.
 * Production builds and the static route generator only see
 * `status: "published"`.
 */
export function visiblePosts() {
  if (process.env.NODE_ENV !== "production") return posts;
  return posts.filter(post => post.status === "published");
}
