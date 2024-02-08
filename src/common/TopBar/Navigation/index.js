import { toAbout, toSkills, toWork } from '../../../app/routes';
import { NavContainer, StyledNavLink } from './styled';

export const Navigation = () => (
	<NavContainer>
		<StyledNavLink to={toAbout()}>
			<strong>about</strong> me
		</StyledNavLink>
		<StyledNavLink to={toSkills()}>
			my <strong>skills</strong>
		</StyledNavLink>
		<StyledNavLink to={toWork()}>
			my <strong>work</strong>
		</StyledNavLink>
	</NavContainer>
);