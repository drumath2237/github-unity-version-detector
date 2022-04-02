type detectionResult = { result: boolean; version: string };

interface IVersionDetector {
  tryGetVersionInfoAsync(
    username: string,
    repo: string,
    branch: string,
    path?: string
  ): Promise<detectionResult>;
}

export { detectionResult, IVersionDetector };
