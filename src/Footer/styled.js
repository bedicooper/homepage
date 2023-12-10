import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: grid;
    grid-template-columns: 2fr 32px 6fr;
    grid-template-rows: 24px 76px;
`

export const StyledForthHeading = styled.h4`
    font-weight: 200;
`

export const FooterTitleContainer = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    text-align: right;
    height: fit-content;
    padding-right: 6px;
`

export const FooterSocialsContainer = styled.div`
    grid-column: 2 / 3;
    grid-row: 2 / 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const FooterContentContainer = styled.div`
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 12px;
`

export const FooterContent = styled.p`
    font-size: 1.5rem;
    font-weight: 900;
    margin: 0;
`

export const FooterAdnotation = styled.p`
    font-size: 0.75rem;
    margin: 6px 0;
`