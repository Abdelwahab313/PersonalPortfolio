import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div
                className={
                  isDark
                    ? "experience-cards-div experience-timeline-dark"
                    : "experience-cards-div"
                }
              >
                {workExperiences.experience.map((card, i) => {
                  return <ExperienceCard key={i} cardInfo={card} />;
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
