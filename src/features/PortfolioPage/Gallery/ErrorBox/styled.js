import styled from "styled-components";

export const Wrapper = styled.article`
    margin: 96px 0px;
    display: grid;
    justify-items: center;
    grid-gap: 32px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};

    @media (max-width: ${({ theme }) => theme.breakpoints.moblie}px){
        margin: 48px 0;
        grid-gap: 24px;
    }
`

export const Header = styled.header`
    font-weight: 700;
    font-size: 1.5em;
`

export const Paragraph = styled.p`
    margin: 0;
    line-height: 1.4;
`