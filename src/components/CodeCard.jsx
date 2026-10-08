import {useState} from "react";

export default function CodeCard({snippets}) {
  const [active, setActive] = useState(0);

  return (
    <div className="code-card">
      <div className="code-card-window">
        <div className="code-card-tabs" role="tablist" aria-label="Languages">
          {snippets.map((snippet, index) => (
            <button
              key={snippet.filename}
              type="button"
              role="tab"
              aria-selected={index === active}
              className={index === active ? "code-tab active" : "code-tab"}
              onClick={() => setActive(index)}
            >
              <span className="code-tab-dot" aria-hidden="true" />
              {snippet.filename}
            </button>
          ))}
        </div>
        <div className="code-card-panels">
          {snippets.map((snippet, index) => (
            <div className="code-card-panel" hidden={index !== active}>
              <span className="code-card-lang">{snippet.label}</span>
              <div
                className="code-card-code"
                aria-live="polite"
                dangerouslySetInnerHTML={{__html: snippet.html}}
              />
            </div>
          ))}
        </div>
        <div className="code-card-status">
          <span>one profile, four languages</span>
          <span>static · shiki at build</span>
        </div>
      </div>
    </div>
  );
}
