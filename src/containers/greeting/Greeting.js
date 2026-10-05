import React from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {greeting} from "../../portfolio";
import {GoogleAnalytics} from "../../services/logging";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  const onClickContact = () => {
    GoogleAnalytics.logContactReached();
    const href = "#contact";
    window.location.href = href;
  };
  const onClickCV = () => {
    GoogleAnalytics.logCVReached();
    const href = greeting.resumeLink;
    window.open(href, "_blank");
  };

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <h1 className="greeting-text">{greeting.title}</h1>
          <p className="greeting-text-p">{greeting.subTitle}</p>
          <SocialMedia />
          <div className="button-greeting-div">
            <Button text="Contact me" onClick={onClickContact} />
            {greeting.resumeLink && (
              <Button text="See my resume" onClick={onClickCV} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
