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

const namedColors = {
    white: "FAFAFA",
    offWhite: "#F3F5F0",
    lightGray: "#8C8C8C",
    gray: "#383838",
    darkGray: "#262626",
    green: "#70C270",
    darkGreen: "#2B642B",
}

export const darkTheme = {
    ...commonThemes,
    colors: {
        primary: namedColors.darkGray,
        secondary: namedColors.gray,
        text: namedColors.offWhite,
        accent: namedColors.green,
        shadow: 'hsl(0, 0%, 8%)',
    },
};

export const lightTheme = {
    ...commonThemes,
    colors: {
        primary: namedColors.offWhite,
        secondary: namedColors.white,
        text: namedColors.darkGray,
        accent: namedColors.darkGreen,
        shadow: 'hsl(0, 0%, 55%)',
    },
};