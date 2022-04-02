import { parseUrl2PossibleRepoInfos } from "./GitHubRepoInfo";
import { IVersionDetector } from "./IVersionDetector";

class App {
  public static main(detector: IVersionDetector) {
    const resultText = <HTMLSpanElement>document.getElementById("result");
    const resultIndicator = <HTMLDivElement>(
      document.getElementById("detection-indicator")
    );

    if (!resultText || !resultIndicator) {
      return;
    }

    chrome.tabs.query(
      {
        active: true,
        currentWindow: true,
        lastFocusedWindow: true,
      },
      async (tabs) => {
        const currentURL = tabs[0].url;
        if (!currentURL) {
          return;
        }

        const repoInfos = parseUrl2PossibleRepoInfos(currentURL);

        for (let info of repoInfos) {
          const res = await detector.tryGetVersionInfoAsync(info);

          if (!res.result) {
            resultText.innerText = "cannot detect";
            resultIndicator.classList.add("not-detected-status");
            continue;
          }

          resultText.innerText = res.version;
          resultIndicator.classList.add("detect-status");
          resultIndicator.classList.remove("not-detected-status");

          return;
        }

        resultText.innerText = "cannot detect";
        resultIndicator.classList.add("not-detected-status");
      }
    );
  }
}

export default App;
