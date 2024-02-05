import styled, { css } from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: right;
    height: 16px;
    width: 32px;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.text};;
    background: none;
    padding: 2px;
    color: inherit;
    outline-offset: 4px;
    transition: transform ${({ theme }) => theme.transitions.themeChange};
    position: absolute;
    top: 32px;      //body and topBar padding
    right: 24px;    //body padding

    @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        top: 12px;
        right: 12px;
    }
`

export const Pill = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.text};;
    background-color: ${({ theme }) => theme.colors.text};;

    ${({ isLightTheme }) => isLightTheme && css`
        transform: translateX(-14px);
        background: none;
    `}
`