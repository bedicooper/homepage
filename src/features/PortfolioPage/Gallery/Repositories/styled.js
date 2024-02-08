import styled from "styled-components";
import α from "color-alpha";

export const List = styled.ul`
    list-style: none;
    margin-top: 1em;
    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(320px, 1fr) );
    padding: 0;
    grid-gap: 1.5em;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        grid-template-columns:  1fr;
        grid-gap: 1em;
    }
`

export const Tile = styled.li`
    padding: 1.25em;
    margin: 0;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadows.boxShadow};
    transition: box-shadow ${({ theme }) => theme.transitions.onHover};

    &:hover {
        box-shadow: ${({ theme }) => theme.shadows.hoverShadow};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        padding: 1em;
    }
`

export const Name = styled.h3`
    font-size: 1.5em;
    color: ${({ theme }) => theme.colors.accent};
    margin: 0;
`

export const Description = styled.p`
    margin-top: 1.5em;
    line-height: 1.4;
`

export const Links = styled.dl`
    margin-top: 1.5em;
    margin-bottom: 0;
    display: grid;
    grid-gap: 8px;
    line-height: 1.6;
`

export const LinksRow = styled.div`
    display: grid;
    grid-template-columns: 4em 1fr;
`

export const LinksValue = styled.dd`
    margin: 0;
`

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.accent};
    border-bottom: 1px solid ${({ theme }) => α(theme.colors.accent, 0.3)};
    padding-bottom: 1px;

    &:hover {
        border-color: unset;
    }
`