const commonThemes = {
    breakpoints: {
        mobileMin: 319,
        mobile: 567,
        mobileMax: 1023,
        laptop: 1280,
        bigDisplay: 1921,
    },
    transitions: {
        themeChange: "0.2s ease-in",
    },
};

export const darkTheme = {
    ...commonThemes,
    color: {
        primary: "#262626",      //darkGray
        secondary: "#383838",    //gray
        text: "#F3F5F0",         //offWhite
        accent: "#70C270",       //green
        shadow: 'hsl(0, 0%, 8%)',
    },
};

export const lightTheme = {
    ...commonThemes,
    color: {
        primary: "#F3F5F0",      //offWhite
        secondary: "FAFAFA",     //white
        text: "#262626",         //darkGray
        accent: "#2B642B",       //darkGreen
        shadow: 'hsl(0, 0%, 55%)',
    },
};

/* 
    white: "FAFAFA",
    offWhite: "#F3F5F0",
    gray: "#383838",
    darkGray: "#262626",
    green: "#70C270",
    darkGreen: "#2B642B",
*/