import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
`

export const Paragraph = styled.p`
    margin: 0.5em 0 1em 2em;
    line-height: 1.4;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin-left: 1.25em;
    }
`