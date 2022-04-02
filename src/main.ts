import App from "./App";
import { GitHubUnityVersionDetector } from "./GitHubUnityVersionDetector";
import "./style.scss";

window.addEventListener("load", () => {
  const detector = new GitHubUnityVersionDetector();
  App.main(detector);
});
