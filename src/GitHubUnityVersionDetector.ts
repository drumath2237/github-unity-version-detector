import { detectionResult, IVersionDetector } from "./IVersionDetector";

class GitHubUnityVersionDetector implements IVersionDetector {
  public async tryGetVersionInfoAsync(
    username: string,
    repo: string,
    branch: string,
    path?: string
  ): Promise<detectionResult> {
    const rawTextPath = `https://raw.githubusercontent.com/${username}/${repo}/${branch}${
      path ? `/${path}` : ""
    }/ProjectSettings/ProjectVersion.txt`;

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
