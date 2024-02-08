import styled from "styled-components"

export const ButtonLink = styled.a`
    text-decoration: none;
    padding: 0.75em 1em;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme }) => theme.buttonLink.text};
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: box-shadow ${({ theme }) => theme.transitions.onHover};

    &:hover {
        box-shadow: ${({ theme }) => theme.shadows.boxShadow};
    }
`