import styled from "styled-components";

export const StyledFooter = styled.footer`
    margin: auto;
    margin-top: 32px;
    max-width: 512px;
`

export const Container = styled.div`
    display: flex;
    gap: 18px;
    margin-left: 18px;
    margin-top: 18px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        flex-direction: column-reverse;
        gap: 12px;
        margin-left: 12px;
        margin-top: 12px;
        padding-bottom: 32px;
    }
`

export const FooterAdress = styled.address`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    justify-content: space-between;
    font-style: unset;
`
export const FooterEmail = styled.div`

`
export const EmailLink = styled.a`
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.25em;
    font-weight: 900;
    line-height: 2em;
    margin: 0;
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.onHover};

    &:hover {
        color: ${({ theme }) => theme.colors.accent};
    }
`

export const FooterAdnotation = styled.p`
    font-size: 0.75em;
    margin: 7px 0;
    line-height: 1.5;
`