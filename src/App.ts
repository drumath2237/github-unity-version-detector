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

    detector
      .tryGetVersionInfoAsync({
        username: "drumath2237",
        repo: "k4a-vfx",
        branch: "master",
      })
      .then((res) => {
        if (!res || !res.result) {
          resultText.innerText = "cannot detect";
          resultIndicator.classList.add("not-detected-status");
          return;
        }

        resultText.innerText = res.version;
        resultIndicator.classList.add("detect-status");
      });
  }
}

export default App;
