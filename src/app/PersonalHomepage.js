import {
	HashRouter,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import {
	toAbout,
	toHome,
	toSkills,
	toWork
} from './routes';
import { TopBar } from '../common/TopBar';
import {
	WrapperMobile,
	Wrapper,
	StyledMain,
} from './styled';
import { Header, HeaderMobile } from '../common/Header';
import { Footer } from '../common/Footer';
import HomePage from '../features/HomePage';
import PortfolioPage from '../features/PortfolioPage';
import SkillsPage from '../features/SkillsPage';
import AboutPage from '../features/AboutPage';
import { NavigationMobile } from '../common/Navigation';

export default () => (
	<HashRouter>
		<TopBar />

		<WrapperMobile>
			<HeaderMobile />
			<StyledMain>
				<NavigationMobile />
				<SkillsPage />
				<PortfolioPage />
				<AboutPage />
			</StyledMain>
			<Footer />
		</WrapperMobile>

		<Wrapper>
			<Header />
			<StyledMain>
				<Switch>
					<Route path={toHome()}>
						<HomePage />
					</Route>
					<Route path={toWork()}>
						<PortfolioPage />
					</Route>
					<Route path={toSkills()}>
						<SkillsPage />
					</Route>
					<Route path={toAbout()}>
						<AboutPage />
					</Route>
					<Route path="/">
						<Redirect to={toHome()} />
					</Route>
				</Switch>
			</StyledMain>
			<Footer />
		</Wrapper>

	</HashRouter>
);