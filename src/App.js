import { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme } from "./GlobalStyle";
import { useChangeTheme } from "./useChangeTheme";
import { Container } from "./Container/styled";
import { TopBar, StyledButton } from "./TopBar/styled";
import Header from "./Header";
import Section from "./Section";
import Gallery from "./Section/Gallery";
import Form from "./Section/Form";
import { StyledFooter } from './Section/Footer/styled';

function App() {
  const { isDarkTheme, toggleTheme } = useChangeTheme();
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
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
        <Section
          id="about"
          title="who I am"
          body={
            <p>I am an Architect with over a dacade of professional experience.
              I am a creative yet precise and conscientious person.
              I know how to work within a team and I know how to manage team members and thier workflow.
            </p>
          }
        />
        <Section
          id="skills"
          title="how I can help You"
          body={
            <p>
              I can assist You on any and all phases in building process.
              I have experience on all design and construction stages of a project,
              as well as realation with a client and subcontractors along the way.
            </p>
          }
        />
        <Section
          id="work"
          title="projects I worked on"
          body={
            <p>
              Science 2013 I have worked with studioKOSMOS and GRUPA 5 Architekci
              on variuos designs form conceptual work through construction and commissioning."
            </p>
          }
          additionalContent={<Gallery />}
        />
        <Section
          id="contact"
          title="how can You reach me"
          body="Please contact me via email or through the form below (once it works)"
          additionalContent={<Form />}
        />
        <Section
          id="footer"
          body={<StyledFooter>footnote/links</StyledFooter>}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;