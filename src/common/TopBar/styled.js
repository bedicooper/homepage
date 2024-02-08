import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    margin: auto;
    max-width: 1872px;
    height: 32px; 
    display: flex;
    justify-content: right;
    padding: 6px 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        height: auto;
        padding: 0;
    }

    @media 
        (max-width: ${({ theme }) => theme.breakpoints.laptop}px) 
        and 
        (min-height: ${({ theme }) => theme.breakpoints.laptop}px) {
            height: auto;
            padding: 0;
    }
`

export const LogoContainer = styled.div`
    position: absolute;
    top: 6px;
    left: 0;
    color: ${({ theme }) => theme.colors.accent};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: none;
    }

    @media 
        (max-width: ${({ theme }) => theme.breakpoints.laptop}px) 
        and 
        (min-height: ${({ theme }) => theme.breakpoints.laptop}px) {
            display: none;
    }
`