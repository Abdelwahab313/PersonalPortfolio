import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import {GoogleAnalytics} from "./services/logging";

function App() {
  GoogleAnalytics.initialize();

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
