import styled from "styled-components";

export const HomeArticle = styled.article`
    position: relative;
    top: 33%;
    max-width: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FirstHeadingAccent = styled.span`
    color: ${({ theme }) => theme.color.accent};
`

export const Message = styled.p`
    margin: 2rem 0;
`