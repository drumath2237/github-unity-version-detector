interface GitHubRepoInfo {
  username: string;
  repo: string;
  branch: string;
  path?: string;
}

const parseUrl2PossibleRepoInfos = (url: string): GitHubRepoInfo[] => {
  const notDefaultBranchOrNotRootDirectoryRegexp =
    /https:\/\/github.com\/(.+)\/(.+)\/tree\/([^\/]+)\/(.+)$/;

  const defaultBranchAndRootDirectoryRegexp =
    /https:\/\/github.com\/(.+)\/(.+)/;

  if (notDefaultBranchOrNotRootDirectoryRegexp.test(url)) {
    const m = notDefaultBranchOrNotRootDirectoryRegexp.exec(url);
    console.log(m);
    if (m && m[1] && m[2] && m[3] && m[4]) {
      return [
        {
          username: m[1],
          repo: m[2],
          branch: m[3],
          path: m[4],
        },
      ];
    }
    return [];
  }

  if (defaultBranchAndRootDirectoryRegexp.test(url)) {
    const m = defaultBranchAndRootDirectoryRegexp.exec(url);
    if (m && m[1] && m[2]) {
      return [
        {
          username: m[1],
          repo: m[2],
          branch: "main",
        },
        {
          username: m[1],
          repo: m[2],
          branch: "master",
        },
        {
          username: m[1],
          repo: m[2],
          branch: "develop",
        },
      ];
    }
  }

  return [];
};

export { GitHubRepoInfo, parseUrl2PossibleRepoInfos };
