import React from "react";
import "./CaseStudies.scss";
import Diagram from "../../components/diagrams/Diagram";
import {caseStudies} from "../../portfolio";

const parts = [
  {key: "situation", label: "Situation"},
  {key: "decision", label: "Decision"},
  {key: "tradeoff", label: "Trade-off"},
  {key: "outcome", label: "Outcome"}
];

export default function CaseStudies() {
  return (
    <section className="cases-main" id="cases">
      <div className="cases-heading">
        <h1 className="cases-title">{caseStudies.title}</h1>
        <p className="cases-subtitle">{caseStudies.subtitle}</p>
      </div>
      {caseStudies.cases.map((item, i) => (
        <article className="case" key={item.id}>
          <div className="case-head">
            <span className="case-index">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="case-title">{item.title}</h2>
            {item.link && (
              <a
                className="case-product"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                {item.product} ↗
              </a>
            )}
          </div>
          <figure className="case-figure">
            <Diagram name={item.diagram} />
            <figcaption className="case-figure-caption">
              {item.diagramCaption}
            </figcaption>
          </figure>
          <dl className="case-parts">
            {parts.map(part => (
              <div className="case-part" key={part.key}>
                <dt className="case-part-label">{part.label}</dt>
                <dd className="case-part-text">{item[part.key]}</dd>
              </div>
            ))}
          </dl>
        </article>
      ))}
    </section>
  );
}
