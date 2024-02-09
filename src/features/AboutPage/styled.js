import styled, { css } from "styled-components";
import { ReactComponent as BulletSVG } from "../../assets/icons/list_bullet.svg";
import { ReactComponent as DownloadSVG } from "../../assets/icons/icon-download.svg";

export const Container = styled.ul`
    list-style: none;
    margin: 0;
    margin-left: 1em;
    padding: 0;
    display: flex;
    flex-direction: column;
`

export const Bullet = styled(BulletSVG)`
    color: ${({ theme }) => theme.colors.text};
    margin-right: 1em;
    height: auto;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin-right: 0.75em;
        width: 6px;
    }

    ${({ $expand }) => $expand && css`
        color: ${({ theme }) => theme.colors.accent};
    `};
`

export const Paragraph = styled.p`
    margin: 0.5em 0 1em 2em;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin-left: 1.25em;
    }
`

export const Article = styled.article`
    margin-top: 2em;
`

export const Box = styled.div`
    margin: 2em 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    height: 100%;
    gap: 1em;
`

export const Link = styled.a`
    margin: auto;
    color: ${({ theme }) => theme.colors.text};
    transition: color ${({ theme }) => theme.transitions.onHover};

    &:hover {
        color: ${({ theme }) => theme.colors.accent};
    }
`

export const DownloadIcon = styled(DownloadSVG)`
    height: auto;
    width: 48px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 32px;
    }
`