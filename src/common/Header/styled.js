import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: auto;
`

export const StyledHeader = styled.header`
    width: 100%;
    grid-area: H;
    margin: auto;
`

export const MobileHeader = styled.header`
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
    grid-area: H;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        flex-direction: column;
        justify-content: space-around;
        row-gap: 12px;
    }

    @media(max-height: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: -12px; //body padding
        min-height: 100vh;
        min-height: 100svh;
    }
`

export const StyledImage = styled.img`
    display: flex;
    flex: 1;
    width: 100%;
    justify-self: right;
`