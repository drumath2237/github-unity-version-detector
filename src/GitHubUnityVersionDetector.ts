import { GitHubRepoInfo } from "./GitHubRepoInfo";
import { detectionResult, IVersionDetector } from "./IVersionDetector";

class GitHubUnityVersionDetector implements IVersionDetector {
  public async tryGetVersionInfoAsync(
    repoInfo: GitHubRepoInfo
  ): Promise<detectionResult> {
    const { username, branch, repo, path } = repoInfo;

    const rawTextPath = `https://raw.githubusercontent.com/${username}/${repo}/${branch}${
      path ? `/${path}` : ""
    }/ProjectSettings/ProjectVersion.txt`;

    console.log(rawTextPath);

    const rawRequestResult = await fetch(rawTextPath, { method: "GET" });
    if (!rawRequestResult.ok) {
      return {
        result: false,
        version: "",
      };
    }

    const resultText = await rawRequestResult.text();

    const versionRegexp = /m_EditorVersion: ((\d|\.)+.\d+)/;
    const m = versionRegexp.exec(resultText);

    if (!m || m[1] === null) {
      return {
        result: false,
        version: "",
      };
    }

    return {
      result: true,
      version: m[1],
    };
  }
}

export { GitHubUnityVersionDetector };
