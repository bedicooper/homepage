const filterOutByName = (data, value) => data.filter(
  ({ name }) => name !== value
);

export const processGitHubData = (data) => filterOutByName(data, "homepage");