import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-areas:
    "M H"
    "M F"
    "M .";
`

export const StyledHeader = styled.header`
    width: 100%;
    grid-area: H;
    display: grid;
    grid-template-rows: 32px 1fr;
    margin-bottom: 12px;
`

export const StyledMain = styled.main`
    grid-area: M;
    background-color: ${({ theme }) => theme.primary};
    box-shadow: 6px 6px 16px -4px ${({ theme }) => theme.shadow};
    margin: 32px 0px;
    min-width: 280px;
    transition: background-color ${({ theme }) => theme.transition}, box-shadow ${({ theme }) => theme.transition};
`

export const StyledFooter = styled.footer`
    grid-area: F;
    display: grid;
    grid-template-columns: 2fr 32px 6fr;
    grid-template-rows: 24px 76px;
`