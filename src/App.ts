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
      .tryGetVersionInfoAsync("drumath2237", "k4a-vfx", "master")
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
