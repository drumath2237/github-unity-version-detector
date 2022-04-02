import { GitHubRepoInfo } from "./GitHubRepoInfo";

type detectionResult = { result: boolean; version: string };

interface IVersionDetector {
  tryGetVersionInfoAsync(repoInfo: GitHubRepoInfo): Promise<detectionResult>;
}

export { detectionResult, IVersionDetector };
