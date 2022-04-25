import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import ReactGA from "react-ga4";
import { GOOGLE_TRACKING_ID } from "./constants";

function App() {
  ReactGA.initialize(GOOGLE_TRACKING_ID);
  ReactGA.send("pageview");

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
