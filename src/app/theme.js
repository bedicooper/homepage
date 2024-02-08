const namedColors = {
    white: "#FAFAFA",
    offWhite: "#F3F5F0",
    lightGray: "#8C8C8C",
    gray: "#383838",
    darkGray: "#262626",
    green: "#70C270",
    darkGreen: "#2B642B",
}

const commonThemes = {
    breakpoints: {
        mobileMin: 319,
        mobile: 567,
        tablet: 766,
        mobileMax: 1023,
        laptop: 1280,
        bigDisplay: 1921,
    },
    transitions: {
        themeChange: "200ms ease-in",
        onHover: "300ms"
    },
    borderRadius: "6px",
    shadows: {
        boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 8px 0px",
        hoverShadow: "rgba(0, 0, 0, 0.6) 0px 2px 12px 4px",
    },
    themeSwitch: {
        color: namedColors.lightGray,
    }
};

export const darkTheme = {
    ...commonThemes,
    colors: {
        primary: namedColors.darkGray,
        secondary: namedColors.gray,
        text: namedColors.offWhite,
        accent: namedColors.green,
        // shadow: 'hsl(0, 0%, 8%)',
    },
    buttonLink: {
        text: namedColors.darkGray,
    },
    headerLine: namedColors.offWhite,

};

export const lightTheme = {
    ...commonThemes,
    colors: {
        primary: namedColors.offWhite,
        secondary: namedColors.white,
        text: namedColors.darkGray,
        accent: namedColors.darkGreen,
        // shadow: 'hsl(0, 0%, 55%)',
    },
    buttonLink: {
        text: namedColors.white,
    },
    headerLine: namedColors.darkGray,
    tile: {
        header: namedColors.green,
    }
};