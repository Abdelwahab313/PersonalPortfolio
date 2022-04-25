import ReactGA from "react-ga4";

const GOOGLE_TRACKING_ID = "G-PNVK2LGZM4";

export class GoogleAnalytics {
  static initialize() {
    ReactGA.initialize(GOOGLE_TRACKING_ID);
    ReactGA.send("pageview");
  }

  static logCVReached() {
    ReactGA.event({
      category: "Reached",
      action: "cv clicked"
    });
  }

  static logContactReached() {
    ReactGA.event({
      category: "Reached",
      action: "contact clicked"
    });
  }
}
