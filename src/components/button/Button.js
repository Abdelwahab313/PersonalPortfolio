import React from "react";
import "./Button.scss";

export default function Button({text, className, onClick}) {
  return (
    <div className={className}>
      <button className="main-button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
