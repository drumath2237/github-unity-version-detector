type detectionResult = { result: boolean; version: string };

interface IVersionDetector {
  tryGetVersionInfoAsync(
    username: string,
    repo: string,
    path: string
  ): Promise<detectionResult>;
}

export { detectionResult, IVersionDetector };
