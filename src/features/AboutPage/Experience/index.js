import {
  ThirdHeading
} from "../../../app/styled";
import {
  Wrapper,
  Row,
  Dates,
  Description,
  Paragraph,
  Container,
  LinksBox,
  LinkIcon,
  CertificateIcon,
  LinkText
} from "./styled";
import { Article } from '../styled';
import githubUsername from "../../../utils/githubUsername";

export const CurrentExp = () => (
  <Article>
    <ThirdHeading>Coding Experience</ThirdHeading>
    <Wrapper>
      <Row>
        <Dates>
          <span>FEB.</span>
          <span><strong>2024</strong></span>
        </Dates>
        <Description>
          In February 2024, I began learing TypeScript from followup lessons from YouCode.pl
        </Description>
      </Row>

      <Row>
        <Dates>
          <span>FEB.</span>
          <span><strong>2024</strong></span>
        </Dates>
        <Container>
          <Description>
            <Paragraph>
              {`On February 19, 2024, I `}
              <LinkText
                href={`https://www.sololearn.com/en/certificates/CC-A2OX3ERN`}
                target="_blank"
                rel="noreferrer"
                title="Course Certificate Page"
              >
                completed
              </LinkText>
              {
                ` an entry level online course on Angular framework on sololearn.com,
								during wich I learned to create scalable and dynamic web applications using Angular and TypeScript,
								employ components for organized and structured code,
								implement user interaction features, design forms with validation
								and use Angular routing.`
              }
            </Paragraph>
          </Description>
          <LinksBox>
            <div>certificate</div>
            <LinkIcon
              href="https://swxmb.com/files/Mateusz_Bednarz_Angular_Certificate.pdf"
              target="_blank"
              rel="noreferrer"
              title="Course Certificate"
            >
              <CertificateIcon />
            </LinkIcon>
          </LinksBox>
        </Container>
      </Row>

      <Row>
        <Dates>
          <span><strong>2023</strong></span>
          <span>to</span>
          <span><strong>2024</strong></span>
        </Dates>
        <Container>
          <Description>
            <Paragraph>
              {`In 2023, I completed an online course on frontend development from YouCode.pl,
					during which I progressively built two web apps: a `}
              <LinkText
                href={`https://${githubUsername}.github.io/currency-exchange/`}
                target="_blank"
                rel="noreferrer"
              >
                Currency Converter
              </LinkText>
              {` and a `}
              <LinkText
                href={`https://${githubUsername}.github.io/taskList__react/`}
                target="_blank"
                rel="noreferrer"
              >
                Tasks List Manager
              </LinkText>
              {
                `. What started as a simple HTML pages with some logic in vanilla JS whith each was refactored
					      using React, Styled-Components and react-redux.
					      The culmination of the course was the development of a larger app, a `
              }
              <LinkText
                href={`https://${githubUsername}.github.io/movies-browser/`}
                target="_blank"
                rel="noreferrer"
              >
                Movies Browser
              </LinkText>
              {`, which was collaboratively built by a team of three course participants and completed in January 2024.`}
            </Paragraph>
            <Paragraph>
              {`Please feel free to explore my `}
              <LinkText
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </LinkText>
              {` account,	where you can find the code and demos for the aforementioned repositories.`}
            </Paragraph>
          </Description>
          <LinksBox>
            <div>certificate</div>
            <LinkIcon
              href="https://swxmb.com/files/Mateusz_Bednarz_Certificate.pdf"
              target="_blank"
              rel="noreferrer"
              title="Course Certificate"
            >
              <CertificateIcon />
            </LinkIcon>
          </LinksBox>
        </Container>
      </Row>
    </Wrapper>
  </Article >
);

export const PreviousExp = () => (
  <Article>
    <ThirdHeading>Other Aplicable Experiences</ThirdHeading>
    <Paragraph>
      My previous professional experience has equipped me
      with transferable soft skills applicable to the IT industry.
      Having managed complex projects within diverse teams,
      I've adeptly worked within team dynamics and workflow while maintaining client and
      subcontractor relations throughout project implementation.
    </Paragraph>
    <Wrapper>
      <Row>
        <Dates>
          <span>since</span>
          <span><strong>2013</strong></span>
        </Dates>
        <Description>
          Collaboration with architectural studios studioKOSMOS&nbsp;and GRUPA&nbsp;5&nbsp;Architekci
          on various projects spanning all phases of the design and construction process.
        </Description>
      </Row>
      <Row>
        <Dates>
          <span>APR.</span>
          <span><strong>2015</strong></span>
        </Dates>
        <Description>
          <span>
            <strong>Citi Mobile Challenge Finalist for EMEA region.</strong>
            <br />
            At CMC 2015, our two-person team submitted a prototype for a mobile banking app.
            Our concept aimed to establish an online banking environment within CitiBank's platform
            where customizable apps could facilitate financial management among groups, such as families.
            Advancing to the finalist phase for our region, we presented our solution onstage during Warsaw Demo Day.
          </span>
        </Description>
      </Row>
      <Row>
        <Dates>
          <span><strong>2014</strong></span>
          <span>to</span>
          <span><strong>2016</strong></span>
        </Dates>
        <Description>
          <span>
            Collaborated with GameCon and Postnuclear S.A startups
            to design functionalities and user interfaces for several mobile applications.
          </span>
        </Description>
      </Row>
    </Wrapper>
  </Article>
);