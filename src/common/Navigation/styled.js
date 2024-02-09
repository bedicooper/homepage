import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
	display: flex;
	justify-content: space-around;
    width: auto;

	@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		display: none;
	}
	
    @media 
        (max-width: ${({ theme }) => theme.breakpoints.laptop}px) 
        and 
        (min-height: ${({ theme }) => theme.breakpoints.laptop}px) {
            display: none;
    }
`

export const NavContainerMobile = styled.nav`
    display: none;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		margin: 1em 0;
		display: flex;
		justify-content: space-around;
		width: 100%;
	}

	@media 
		(max-width: ${({ theme }) => theme.breakpoints.laptop}px) 
		and 
		(min-height: ${({ theme }) => theme.breakpoints.laptop}px) {
			display: flex;
			justify-content: space-around;
			width: 100%;
	}
`

export const Link = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.text};
	padding-bottom: 1px;
	text-align: center;
	font-size: 1.25em;

	&:hover {
		border-bottom: 1px solid;
	}
`

const activeClassName = 'link-active';

export const StyledNavLink = styled(NavLink).attrs(() => ({
	activeClassName,
}))`
	color: ${({ theme }) => theme.colors.text};
	text-decoration: none;
	font-family: 'Merriweather', serif;
    margin: 0 12px;
	padding-bottom: 1px;
	text-align: center;

	&.${activeClassName} {
		color: ${({ theme }) => theme.colors.accent};
	}

	&:hover {
		border-bottom: 1px solid;
	}

	&:last-child {
		margin-right: 56px;
	}
`;

