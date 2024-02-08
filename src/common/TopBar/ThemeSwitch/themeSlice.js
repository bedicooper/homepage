import { createSlice } from "@reduxjs/toolkit"

const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("lightTheme");
    return storedTheme ? JSON.parse(storedTheme) : false;
  };

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isLightTheme: getInitialTheme(),
    },
    reducers: {
        toggleTheme: state => {
            state.isLightTheme = !state.isLightTheme;
            localStorage.setItem("lightTheme", JSON.stringify(state.isLightTheme));
        },
    },
});

export const {
    toggleTheme,
} = themeSlice.actions;

const selectThemeState = state => state.theme;

export const selectIsLightTheme = state => selectThemeState(state).isLightTheme;

export default themeSlice.reducer;