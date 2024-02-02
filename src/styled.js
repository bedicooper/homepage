import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1872px;
    margin: auto;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-areas:
    "M H"
    "M F"
    "M .";

    @media (max-width: ${({ theme }) => theme.brakepoints.moblieMax}px) {
        display: none;
    }
`

export const WrapperMobile = styled.div`
    display: none;

    @media (max-width: ${({ theme }) => theme.brakepoints.moblieMax}px) {
        display: grid;
        grid-template-areas:
        "H"
        "M"
        "F";
    }
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
    margin: 32px 0px;
    padding: 0 24px;
    min-width: 280px;
    transition: background-color ${({ theme }) => theme.transition}, box-shadow ${({ theme }) => theme.transition};
`

export const StyledFooter = styled.footer`
    grid-area: F;
    display: grid;
    grid-template-columns: 2fr 32px 6fr;
    grid-template-rows: 24px 76px;
`

export const FirstHeading = styled.h1`
    font-family: 'Abril Fatface', serif;
    margin: 0;
    font-size: 2rem;
    text-align: left;
    width: 100%;
    text-indent: 24px;
`

export const HeadingGreeting = styled(FirstHeading)`
    text-indent: 1.5em;
`

export const SecondHeading = styled.h2`
    font-weight: 200;
`

export const ThirdHeading = styled.h3`
    font-weight: 200;
`

export const ForthHeading = styled.h4`
    font-weight: 200;
    margin: 0 0 12px 0;
`

export const LogoContainer = styled.div`
    position: absolute;
    top: 24px;
    left: 24px;
    color: ${({ theme }) => theme.color.accent};
`

export const Button = styled.button`
    width: 120px;
    padding: 12px 16px 12px 16px;
    border: none;
    border-radius: 8px;
    color: #262626;
    font-weight: 700;
    background-color: ${({ theme }) => theme.color.accent};
`