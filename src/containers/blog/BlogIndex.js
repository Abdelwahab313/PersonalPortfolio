import React from "react";
import "./blog.scss";
import {Link} from "../../router/Router";
import {visiblePosts} from "../../content/visiblePosts";

const TITLE = "Blog";
const SUBTITLE =
  "Four systems from the last two years, plus whatever comes next. What was there, what I decided, what it cost, and what changed.";

const KIND_LABEL = {"case-study": "Case study", note: "Note"};

export default function BlogIndex() {
  const list = visiblePosts();

  return (
    <section className="blog-main" id="blog">
      <div className="blog-heading">
        <h1 className="blog-title">{TITLE}</h1>
        <p className="blog-subtitle">{SUBTITLE}</p>
      </div>

      <ul className="post-list">
        {list.map(post => (
          <li className="post-row" key={post.slug}>
            <div className="post-meta">
              <time dateTime={post.date}>{post.date}</time>
              <span className="post-kind">{KIND_LABEL[post.kind]}</span>
              {post.status === "draft" && (
                <span className="post-draft">Draft</span>
              )}
            </div>
            <Link className="post-row-title" to={`/blog/${post.slug}`}>
              {post.title}
            </Link>
            <p className="post-lede">{post.lede}</p>
            {post.tags && post.tags.length > 0 && (
              <ul className="post-tags">
                {post.tags.map(tag => (
                  <li className="post-tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
