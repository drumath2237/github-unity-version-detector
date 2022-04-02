import App from "./App";
import { GitHubUnityVersionDetector } from "./GitHubUnityVersionDetector";
import "./style.scss";

window.addEventListener("load", () => {
  const headerTitle = <HTMLSpanElement>document.getElementById("header-title");

  if (!headerTitle) {
    return;
  }

  // chrome.tabs.query(
  //   {
  //     active: true,
  //     currentWindow: true,
  //   },
  //   (tabs) => {
  //     const url = tabs[0].url;
  //     headerTitle.innerText = url ?? "";
  //   }
  // );

  const detector = new GitHubUnityVersionDetector();
  App.main(detector);
});
