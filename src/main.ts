import App from "./App";
import { GitHubUnityVersionDetector } from "./GitHubUnityVersionDetector";
import "./style.scss";

import { parseUrl2PossibleRepoInfos } from "./GitHubRepoInfo";

window.addEventListener("load", () => {
  const headerTitle = <HTMLSpanElement>document.getElementById("header-title");

  if (!headerTitle) {
    return;
  }

  const detector = new GitHubUnityVersionDetector();
  App.main(detector);
});
