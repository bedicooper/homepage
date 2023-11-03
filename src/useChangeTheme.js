import { useState, useEffect } from "react";


export const useChangeTheme = () => {
    const getInitialState = () => {
        const localStorageState = localStorage.getItem("theme");
        if (localStorageState === null) {
            return "dark";
        }
        return JSON.parse(localStorageState);
    };

    const [theme, setTheme] = useState(getInitialState);

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);

    const isDarkTheme = theme === "dark";
    const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

    return { isDarkTheme, toggleTheme };
};
