const repoNamesToFilterOut = [
  "homepage",
  "bedicooper",
]

const filterOutByName = (data, values) => data.filter(
  ({ name }) => !values.includes(name)
);

export const processGitHubData = (data) => filterOutByName(data, repoNamesToFilterOut);