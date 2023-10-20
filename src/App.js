import Container from "./Container";
import Header from "./Header";
import Navigation from "./Navigation";
import Button from "./Button";
import Section from "./Section";
import Gallery from "./Gallery";
import Form from "./Form";

function App() {
  return (
    <Container >
      <Header themeButton={<Button />} navigation={<Navigation />} />
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
        body={<footer className="section js-section section--footer">footnote/links</footer>}
      />
    </Container>
  );
}

export default App;