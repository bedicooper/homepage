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
    font-family: Lato, sans-serif;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.secondary};
    word-break: break-word;
    overflow-wrap: break-word;
    transition: color ${({ theme }) => theme.transition}, background-color ${({ theme }) => theme.transition};
}
`
export const lightTheme = {
    primary: 'hsl(0, 0%, 85%)',
    secondary: 'hsl(0, 0%, 75%)',
    text: 'hsl(0, 0%, 15%)',
    shadow: 'hsl(0, 0%, 55%)',
    transition: '0.2s ease-in',
    active: 'hsl(0, 0%, 50%)'
};

export const darkTheme = {
    primary: 'hsl(0, 0%, 10%)',
    secondary: 'hsl(0, 0%, 15%)',
    text: 'hsl(0, 0%, 55%)',
    shadow: 'hsl(0, 0%, 8%)',
    transition: '0.2s ease-in',
    active: 'hsl(0, 0%, 75%)'
};