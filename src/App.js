import { ThemeProvider } from 'styled-components';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { GlobalStyle, lightTheme, darkTheme } from "./GlobalStyle";
import { useChangeTheme } from "./useChangeTheme";
import { TopBar, StyledButton } from "./TopBar/styled";
import Header from "./Header";
import { toAbout, toHome, toSkills, toWork } from './routes';
import HomePage from './features/HomePage';
import PortfolioPage from './features/PortfolioPage';
import SkillsPage from './features/SkillsPage';
import AboutPage from './features/AboutPage';
import Footer from './Footer';
import { StyledMain, Wrapper } from './styled';

function App() {
  const { isDarkTheme, toggleTheme } = useChangeTheme();
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <HashRouter>
        <TopBar>
          <div>
            {<span>mateusz <strong>bednarz</strong></span>}
          </div>
          <StyledButton onClick={toggleTheme}>
            {isDarkTheme ? <span>{`light | `}<strong>{`dark`}</strong></span> :
              <span> <strong>{`light `}</strong>{`| dark`}</span>}
          </StyledButton>
        </TopBar>
        <Wrapper>
          <Header />
          <StyledMain >
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
    </ThemeProvider>
  );
}

export default App;