import React from "react";
import "./blog.scss";
import {Link} from "../../router/Router";
import {visiblePosts} from "../../content/visiblePosts";
import Diagram from "../../components/diagrams/Diagram";
import NotFound from "./NotFound";

const KIND_LABEL = {"case-study": "Case study", note: "Note"};

const CASE_PARTS = [
  {key: "situation", label: "Situation"},
  {key: "decision", label: "Decision"},
  {key: "tradeoff", label: "Trade-off"},
  {key: "outcome", label: "Outcome"}
];

function CaseStudyBody({post}) {
  return (
    <>
      <figure className="case-figure">
        <Diagram name={post.diagram} />
        <figcaption className="case-figure-caption">
          {post.diagramCaption}
        </figcaption>
      </figure>
      <dl className="case-parts">
        {CASE_PARTS.map(part => (
          <div className="case-part" key={part.key}>
            <dt className="case-part-label">{part.label}</dt>
            <dd className="case-part-text">{post[part.key]}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}

function NoteBody({post}) {
  return (
    <div className="post-body">
      {post.sections.map(section => (
        <section className="post-section" key={section.heading}>
          <h2 className="post-section-title">{section.heading}</h2>
          {section.paragraphs.map(paragraph => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </section>
      ))}
    </div>
  );
}

export default function PostPage({slug}) {
  const list = visiblePosts();
  const post = list.find(item => item.slug === slug);

  if (!post) return <NotFound />;

  const index = list.indexOf(post);
  const previous = list[index - 1];
  const next = list[index + 1];

  return (
    <article className="post">
      <Link className="post-back" to="/blog">
        &larr; All posts
      </Link>

      <header className="post-head">
        <div className="post-meta">
          <time dateTime={post.date}>{post.date}</time>
          <span className="post-kind">{KIND_LABEL[post.kind]}</span>
          {post.status === "draft" && <span className="post-draft">Draft</span>}
        </div>
        <h1 className="post-title">{post.title}</h1>
        {post.product && post.link && (
          <a
            className="post-product"
            href={post.link}
            target="_blank"
            rel="noreferrer"
          >
            {post.product} &#8599;
          </a>
        )}
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
      </header>

      <div className="post-body">
        {post.kind === "case-study" ? (
          <CaseStudyBody post={post} />
        ) : (
          <NoteBody post={post} />
        )}
      </div>

      <nav className="post-nav">
        {previous ? (
          <Link
            className="post-nav-prev"
            to={`/blog/${previous.slug}`}
            rel="prev"
          >
            &larr; {previous.title}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link className="post-nav-next" to={`/blog/${next.slug}`} rel="next">
            {next.title} &rarr;
          </Link>
        )}
      </nav>
    </article>
  );
}
