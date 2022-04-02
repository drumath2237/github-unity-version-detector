import { detectionResult, IVersionDetector } from "./IVersionDetector";

class GitHubUnityVersionDetector implements IVersionDetector {
  public async tryGetVersionInfoAsync(
    username: string,
    repo: string,
    branch: string,
    path?: string
  ): Promise<detectionResult> {
    // TODO: impl
    return {
      result: true,
      version: "aa",
    };
  }
}

export { GitHubUnityVersionDetector };
