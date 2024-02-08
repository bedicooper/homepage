import styled from "styled-components";
import { ReactComponent as BulletSVG } from "../../../assets/icons/list_bullet.svg";

export const Article = styled.article`
    padding: 32px;
    margin-top: 24px;
    background: ${({theme}) => theme.colors.secondary};
    border-radius: ${({theme}) => theme.borderRadius};
    box-shadow: ${({theme})=> theme.shadows.boxShadow};

    @media(max-width: ${({theme})=> theme.breakpoints.mobileMax}px) {
        margin-top: 12px;
        padding: 16px;
    }
`

export const List = styled.ul`
    list-style: none;
    margin-top: 1em;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px 32px;

    @media(max-width: ${({theme})=> theme.breakpoints.laptop}px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: ${({theme})=> theme.breakpoints.mobile}px) {
        margin-top: 12px;
        grid-template-columns: 1fr;
    }
`

export const Item = styled.li`
    display: flex;
    line-height: 1.4;

    @media(max-width: ${({theme})=> theme.breakpoints.mobile}px) {
        line-height: 1.2;
    }
`

export const Bullet = styled(BulletSVG)`
    color: ${({theme}) => theme.colors.accent};
    margin-right: 1em;
    height: auto;

    @media(max-width: ${({theme})=> theme.breakpoints.mobile}px) {
        margin-right: 0.75em;
        width: 6px;
    }
`