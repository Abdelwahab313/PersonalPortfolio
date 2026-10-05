import React from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import CaseStudies from "./caseStudies/CaseStudies";
import WorkExperience from "./workExperience/WorkExperience";
import StartupProject from "./StartupProjects/StartupProject";
import Skills from "./skills/Skills";
import Education from "./education/Education";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : ""}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <main>
          <Greeting />
          <CaseStudies />
          <WorkExperience />
          <StartupProject />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
        <Top />
      </StyleProvider>
    </div>
  );
};

export default Main;
