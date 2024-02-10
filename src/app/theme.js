const namedColors = {
    white: "#EDF2ED",
    offWhite: "#D9D9D9",
    lightGray: "#8C8C8C",
    gray: "#303030",
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
        hoverShadow: "rgba(0, 0, 0, 0.4) 0px 2px 10px 2px",
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
    },
    buttonLink: {
        text: namedColors.darkGray,
    },
    headerLine: namedColors.lightGray,

};

export const lightTheme = {
    ...commonThemes,
    colors: {
        primary: namedColors.offWhite,
        secondary: namedColors.white,
        text: namedColors.darkGray,
        accent: namedColors.darkGreen,
    },
    buttonLink: {
        text: namedColors.white,
    },
    headerLine: namedColors.lightGray,
    tile: {
        header: namedColors.green,
    }
};