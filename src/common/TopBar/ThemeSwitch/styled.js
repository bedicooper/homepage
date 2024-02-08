import styled, { css } from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: right;
    height: 16px;
    width: 32px;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.themeSwitch.color};
    background: none;
    padding: 2px;
    color: inherit;
    outline-offset: 4px;
    transition: transform ${({ theme }) => theme.transitions.themeChange};
    position: absolute;
    top: 8px;      //topBar padding
    right: 0;
    z-index: 2;
    
    @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        top: 0;
    }

    @media 
        (max-width: ${({ theme }) => theme.breakpoints.laptop}px) 
        and 
        (min-height: ${({ theme }) => theme.breakpoints.laptop}px) {
            top: 0;
    }
`

export const Pill = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.themeSwitch.color};
    background-color: ${({ theme }) => theme.themeSwitch.color};

    ${({ $isLightTheme }) => $isLightTheme && css`
        transform: translateX(-14px);
        background: none;
    `}
`