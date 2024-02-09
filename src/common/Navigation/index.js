import {
	toAbout,
	toSkills,
	toWork
} from '../../app/routes';
import {
	NavContainer,
	StyledNavLink,
	NavContainerMobile,
	Link
} from './styled';

export const Navigation = () => (
	<NavContainer>
		<StyledNavLink to={toSkills()}>
			my <strong>skills</strong>
		</StyledNavLink>
		<StyledNavLink to={toWork()}>
			my <strong>work</strong>
		</StyledNavLink>
		<StyledNavLink to={toAbout()}>
			<strong>about</strong> me
		</StyledNavLink>
	</NavContainer>
);

export const NavigationMobile = () => (
	<NavContainerMobile>
		<Link href="#skills">
			my <strong>skills</strong>
		</Link>
		<Link href="#work">
			my <strong>work</strong>
		</Link>
		<Link href="#about">
			<strong>about</strong> me
		</Link>
	</NavContainerMobile>
);