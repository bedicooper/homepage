import styled from "styled-components";

export const StyledFooter = styled.footer`
    margin: auto;
    display: flex;
    gap: 12px;
`

export const FooterTitleContainer = styled.div`
    width: 100%;
    text-align: left;
    height: fit-content;
    padding-right: 6px;
`

export const FooterSocialsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
`

export const FooterContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    justify-content: space-between;
`

export const FooterContent = styled.p`
    font-size: 1.25rem;
    font-weight: 900;
    line-height: 2rem;
    margin: 0;
`

export const FooterAdnotation = styled.p`
    font-size: 0.75rem;
    margin: 6px 0;
`