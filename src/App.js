import { ThemeProvider } from 'styled-components';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { GlobalStyle, lightTheme, darkTheme } from "./GlobalStyle";
import { useChangeTheme } from "./useChangeTheme";
import { Container } from "./Container/styled";
import { TopBar, StyledButton } from "./TopBar/styled";
import Header from "./Header";
import Section from "./Section";
import Form from "./Section/Form";

import { toAbout, toHome, toSkills, toWork } from './routes';
import HomePage from './features/HomePage';
import PortfolioPage from './features/PortfolioPage';
import SkillsPage from './features/SkillsPage';
import AboutPage from './features/AboutPage';
import Footer from './Footer';


function App() {
  const { isDarkTheme, toggleTheme } = useChangeTheme();
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <HashRouter>
        <Container >
          <TopBar>
            <div>
              {<span>mateusz <strong>bednarz</strong></span>}
            </div>
            <StyledButton onClick={toggleTheme}>
              {isDarkTheme ? <span>{`light | `}<strong>{`dark`}</strong></span> :
                <span> <strong>{`light `}</strong>{`| dark`}</span>}
            </StyledButton>
          </TopBar>
          <Header />
          <div>
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
          </div>
          <Section
            id="contact"
            title="how can You reach me"
            body="Please contact me via email or through the form below (once it works)"
            additionalContent={<Form />}
          />
          <Footer />
        </Container>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;