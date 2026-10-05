import React, {useContext} from "react";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  workExperiences,
  skillsSection,
  bigProjects,
  caseStudies
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewProjects = bigProjects.display;
  const viewSkills = skillsSection.display;

  return (
    <header className={isDark ? "dark-mode header" : "header"}>
      <a href="/" className="logo">
        <span className="logo-name">abdelwahab.dev</span>
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
      </label>
      <ul className={isDark ? "dark-mode menu" : "menu"}>
        <li>
          <a href="#cases">{caseStudies.title}</a>
        </li>
        {viewExperience && (
          <li>
            <a href="#experience">Experience</a>
          </li>
        )}
        {viewProjects && (
          <li>
            <a href="#projects">{bigProjects.title}</a>
          </li>
        )}
        {viewSkills && (
          <li>
            <a href="#skills">{skillsSection.title}</a>
          </li>
        )}
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <ToggleSwitch />
          </a>
        </li>
      </ul>
    </header>
  );
}
export default Header;
