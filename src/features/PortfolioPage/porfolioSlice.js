import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
        repositories: null,
        status: "initial",
    },
    reducers: {
        fetchRepositories: () => ({
            status: "loading",
            repositories: null,
        }),
        fetchRepositoriesSuccess: (_, { payload: repositories}) => ({
            status: "success",
            repositories,
        }),
        fetchRepositoriesError: () => ({
            status: "error",
            repositories: null,
        }),
    },
});

export const {
    fetchRepositories,
    fetchRepositoriesSuccess,
    fetchRepositoriesError,
} = portfolioSlice.actions;

const selectPortfolioState = state => state.portfolio;

export const selectRepositories = state => selectPortfolioState(state).repositories;
export const selectRepositoriesStatus = state => selectPortfolioState(state).status;

export default portfolioSlice.reducer;