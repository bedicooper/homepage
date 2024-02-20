import styled from "styled-components"
import α from "color-alpha";
import { ReactComponent as CertificateSVG } from "../../../assets/icons/icon-fileCheckMark.svg";
import { ReactComponent as SealSVG } from "../../../assets/icons/icon-certified-seal.svg";

export const Wrapper = styled.div`
    margin-top: 1.5em;
    margin-bottom: 0;
    padding: 0 1.5em;
    display: grid;
    grid-gap: 8px;
    line-height: 1.6;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 0 0.5em;
    }
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: 6em 1fr;
    padding-bottom: 6px;

    &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.headerLine};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 4em 1fr;
    } 
`

export const Dates = styled.div`
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1em 3em;
    margin: 1em 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    } 
`

export const Description = styled.span`
    margin: 0;
`

export const Paragraph = styled.p`
    margin: 0;

    &:not(:last-child) {
        margin-bottom: 1em;
    }
`

export const LinksBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.5em;
`

export const LinkIcon = styled.a`
    color: ${({ theme }) => theme.colors.text};
    transition: color ${({ theme }) => theme.transitions.onHover};

    &:hover {
        color: ${({ theme }) => theme.colors.accent};
    }
`

export const LinkText = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.accent};
    border-bottom: 1px solid ${({ theme }) => α(theme.colors.accent, 0.3)};
    padding-bottom: 1px;

    &:hover {
        border-color: unset;
    }
`

export const CertificateIcon = styled(CertificateSVG)`
    height: auto;
    width: 48px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 32px;
    }
`

export const SealIcon = styled(SealSVG)`
    height: auto;
    width: 48px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 32px;
    }
`