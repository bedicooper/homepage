import styled, { css } from "styled-components";
import { ReactComponent as ChevronSVG } from "../../../assets/icons/icon-chevronDown.svg";

export const ButtonExpand = styled.button`
    height: auto;
    padding: 0;
    margin-left: 1em;
    border: none;
    background: none;
    vertical-align: middle;
    outline-offset: 4px;
    color: ${({ theme }) => theme.colors.text};

    ${({ $expand }) => $expand && css`
        transform: rotate(180deg)
    `};

    &:hover {
        color: ${({ theme }) => theme.colors.accent};
    }
`

export const Chevron = styled(ChevronSVG)`
    width: 1.5em;
    height: auto;
`