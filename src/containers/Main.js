import React from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import WorkExperience from "./workExperience/WorkExperience";
import StartupProject from "./StartupProjects/StartupProject";
import Skills from "./skills/Skills";
import Education from "./education/Education";
import Contact from "./contact/Contact";
import BlogIndex from "./blog/BlogIndex";
import PostPage from "./blog/PostPage";
import NotFound from "./blog/NotFound";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {RouterProvider, useRouter} from "../router/Router";
import {GoogleAnalytics} from "../services/logging";
import "./Main.scss";

function Home() {
  return (
    <>
      <Greeting />
      <WorkExperience />
      <StartupProject />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}

function Routes() {
  const {route} = useRouter();

  if (route.name === "blog") return <BlogIndex />;
  if (route.name === "post") return <PostPage slug={route.params.slug} />;
  if (route.name === "not-found") return <NotFound />;
  return <Home />;
}

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <RouterProvider onNavigate={path => GoogleAnalytics.pageview(path)}>
      <div className={isDark ? "dark-mode" : ""}>
        <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
          <Header />
          <main>
            <Routes />
          </main>
          <Footer />
          <Top />
        </StyleProvider>
      </div>
    </RouterProvider>
  );
};

export default Main;
