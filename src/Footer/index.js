import GitHubIcon from "../utils/GitHubIcon";
import LinkedInIcon from "../utils/LinkedInIcon";
import { StyledFooter } from "../styled";
import { StyledForthHeading } from "./styled";
import { FooterTitleContainer, FooterSocialsContainer, FooterContentContainer, FooterAdnotation, FooterContent } from "./styled";

export default () => (
    <StyledFooter>
        <FooterTitleContainer>
            <StyledForthHeading>
                LET'S TALK!
            </StyledForthHeading>
        </FooterTitleContainer>
        <FooterSocialsContainer>
            <GitHubIcon />
            <LinkedInIcon />
        </FooterSocialsContainer>
        <FooterContentContainer>
            <FooterContent>
                bednarz.mateusz@gmail.com
            </FooterContent>
            <FooterAdnotation>
            I'm eager to help You build Your web app, so feel free to reach out!
        </FooterAdnotation>
        </FooterContentContainer>

    </StyledFooter>

);