import React, {useContext} from "react";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {Link, useRouter} from "../../router/Router";
import {workExperiences, skillsSection, bigProjects} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const {navigate} = useRouter();
  const viewExperience = workExperiences.display;
  const viewProjects = bigProjects.display;
  const viewSkills = skillsSection.display;

  const goSection = id => event => {
    event.preventDefault();
    navigate(`/#${id}`);
  };

  return (
    <header className={isDark ? "dark-mode header" : "header"}>
      <Link to="/" className="logo">
        <span className="logo-name">abdelwahab.dev</span>
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
      </label>
      <ul className={isDark ? "dark-mode menu" : "menu"}>
        {viewExperience && (
          <li>
            <a href="/#experience" onClick={goSection("experience")}>
              Experience
            </a>
          </li>
        )}
        {viewProjects && (
          <li>
            <a href="/#projects" onClick={goSection("projects")}>
              {bigProjects.title}
            </a>
          </li>
        )}
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        {viewSkills && (
          <li>
            <a href="/#skills" onClick={goSection("skills")}>
              {skillsSection.title}
            </a>
          </li>
        )}
        <li>
          <a href="/#contact" onClick={goSection("contact")}>
            Contact
          </a>
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
