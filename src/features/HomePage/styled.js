import styled from "styled-components";
import { ButtonLink } from "../../common/ButtonLink";
import { ReactComponent as MessageIcon } from "../../assets/icons/Message.svg";
import { StyledSection } from "../styled";

export const HomeSection = styled(StyledSection)`
    margin: auto;
`

export const HomeArticle = styled.article`
    max-width: 24em;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        position: inherit;
    }
`

export const FirstHeadingAccent = styled.span`
    color: ${({ theme }) => theme.colors.accent};
`

export const Message = styled.p`
    margin: 1.5em 0;
    line-height: 1.5;
    font-size: 1.25em;
`

export const StyledButtonLink = styled(ButtonLink)`
    display: inline-flex;
    align-items: center;
    font-size: 1.25em;
    margin-bottom: 1em;
`

export const ButtonIcon = styled(MessageIcon)`
    margin-right: 0.75em;
    vertical-align: middle;
    height: auto;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 18px;
    }
`