import styled, { keyframes } from "styled-components";
import { ReactComponent as SpinnerSVG } from "../../../../assets/icons/icon-spinner.svg";

const rotate = keyframes`   
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`

export const LoadingIcon = styled(SpinnerSVG)`
	margin: auto;
    width: 91px;
	height: 91px;
    pointer-events: none;
    animation: ${rotate} infinite 800ms linear;
    color: ${({ theme }) => theme.colors.accent};

    @media (max-width: ${({ theme }) => theme.breakpoints.moblie}px) {
        width: 35px;
	    height: 35px;
	}
`

export const Wrapper = styled.div`
    margin: 96px 0;
    display: grid;
    justify-items: center;
    grid-gap: 32px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};

    @media (max-width: ${({ theme }) => theme.breakpoints.moblieMax}px){
        margin: 48px 0;
        grid-gap: 24px;
    }
`