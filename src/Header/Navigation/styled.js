import styled from "styled-components";

export const NavContainer = styled.nav`
    margin-top: 6px;
    padding: 6px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-basis: 200px;
    z-index: 2;
`;

export const Item = styled.a`
    display: inline-block;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    font-family: 'Merriweather', serif;
`