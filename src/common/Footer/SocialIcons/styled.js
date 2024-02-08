import styled from "styled-components";

export const styledIcon = Icon => styled(Icon)`
    height: auto;
    width: 32px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 24px;
    }
`

export const List = styled.ul`
    margin: 0;
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 12px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        flex-direction: row;
        justify-content: left;
    }
`

export const Item = styled.li`
    line-height: 1;
`

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.text};
    transition: color ${({ theme }) => theme.transitions.onHover};

    &:hover {
        color: ${({ theme }) => theme.colors.accent};
    }
`