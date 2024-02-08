import { StyledHeader, MobileHeader, Container } from './styled';
import { HeaderImage } from './HeaderImage';
import HomePage from '../features/HomePage';

export const Header = () => (
	<StyledHeader>
		<HeaderImage />
	</StyledHeader>
);

export const HeaderMobile = () => (
	<MobileHeader>
		<Container>
			<HeaderImage />
		</Container>
		<HomePage />
	</MobileHeader>
);