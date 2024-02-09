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

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: none;
    }

    @media 
        (max-width: ${({ theme }) => theme.breakpoints.laptop}px) 
        and 
        (min-height: ${({ theme }) => theme.breakpoints.laptop}px) {
            display: none;
    }
`

export const WrapperMobile = styled.div`
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: grid;
        grid-template-areas:
        "H"
        "M"
        "F";
    }

    @media 
        (max-width: ${({ theme }) => theme.breakpoints.laptop}px) 
        and 
        (min-height: ${({ theme }) => theme.breakpoints.laptop}px) {
            display: grid;
            grid-template-areas:
            "H"
            "M"
            "F";
    }
`

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    grid-area: M;
    background-color: ${({ theme }) => theme.primary};
    margin: 0;
    padding: 0 1.5em;
    min-width: 280px;

    @media (max-width: ${({ theme }) => theme.breakpoints.moblieMax}px) {
		padding: 0
	}

    @media 
        (max-width: ${({ theme }) => theme.breakpoints.laptop}px) 
        and 
        (min-height: ${({ theme }) => theme.breakpoints.laptop}px) {
            padding: 0
    }
`

export const FirstHeading = styled.h1`
    font-family: 'Abril Fatface', serif;
    margin: 0;
    font-size: 2.5em;
    text-align: left;
    width: 100%;
    text-indent: 24px;
    letter-spacing: initial;
`

export const HeadingGreeting = styled(FirstHeading)`
    text-indent: 1.5em;
`

export const SecondHeading = styled.h2`
    font-weight: 600;
    margin: 1.5em 0 1em;
    padding-bottom: 0.5em;
    border-bottom: 1px solid ${({ theme }) => theme.colors.accent};

    @media (max-width: ${({ theme }) => theme.breakpoints.moblieMax}px) {
		margin-top: 2em;
	}

    @media 
        (max-width: ${({ theme }) => theme.breakpoints.laptop}px) 
        and 
        (min-height: ${({ theme }) => theme.breakpoints.laptop}px) {
            margin-top: 2em;
    }
`

export const ThirdHeading = styled.h3`
    font-weight: 500;
    margin: 0;
    margin-bottom: 1em;
`

export const ForthHeading = styled.h4`
    display: inline-flex;
    font-weight: 200;
    margin: 0.25em 0;
    text-transform: uppercase;
    letter-spacing: initial;
    line-height: 1.5em;
`