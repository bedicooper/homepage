import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        margin: auto;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    } 

    body {
        margin: auto;
        padding: 24px;
        padding-bottom: 64px;
        background-color: ${({ theme }) => theme.colors.primary};
        font-family: Lato, sans-serif;
        font-size: 16px;
        letter-spacing: 0.04em;
        color: ${({ theme }) => theme.colors.text};
        word-break: break-word;
        overflow-wrap: break-word;
        overflow-y: scroll;
        transition: 
            color ${({ theme }) => theme.transitions.themeChange}, 
            background-color ${({ theme }) => theme.transitions.themeChange};

        @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
            padding: 18px;
            padding-bottom: 64px;
            font-size: 14px;
        }

        @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            padding: 12px;
            padding-bottom: 48px;
            font-size: 12px;
        }
    }
`;