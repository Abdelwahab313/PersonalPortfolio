import React, {useState} from "react";
import "./ExperienceCard.scss";

const VISIBLE_BULLETS = 3;

export default function ExperienceCard({cardInfo}) {
  const [expanded, setExpanded] = useState(false);
  const bullets = cardInfo.descBullets || [];
  const hiddenCount = bullets.length - VISIBLE_BULLETS;
  const shownBullets =
    expanded || hiddenCount <= 0 ? bullets : bullets.slice(0, VISIBLE_BULLETS);
  const meta = [cardInfo.duration, cardInfo.location].filter(Boolean);

  return (
    <article className="experience-entry">
      <div className="experience-date">
        <time>{cardInfo.date}</time>
        {meta.length > 0 && (
          <>
            {" "}
            <span className="experience-meta">{meta.join(" · ")}</span>
          </>
        )}
      </div>
      <div className="experience-node">
        <span></span>
      </div>
      <div className="experience-body">
        <div className="experience-head">
          <img className="experience-logo" src={cardInfo.companylogo} alt="" />
          <div>
            <h2 className="experience-company">{cardInfo.company}</h2>
            <p className="experience-role">{cardInfo.role}</p>
          </div>
        </div>
        <p className="experience-desc">{cardInfo.desc}</p>
        {shownBullets.length > 0 && (
          <ul className="experience-bullets">
            {shownBullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
        {hiddenCount > 0 && (
          <button
            type="button"
            className="experience-more"
            aria-expanded={expanded}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show less ↑" : `Show ${hiddenCount} more ↓`}
          </button>
        )}
        {cardInfo.tags && cardInfo.tags.length > 0 && (
          <div className="experience-tags">
            {cardInfo.tags.map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
