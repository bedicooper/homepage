import GitHubIcon from "../utils/GitHubIcon";
import LinkedInIcon from "../utils/LinkedInIcon";
import { ForthHeading } from "../styled";
import { StyledFooter, FooterTitleContainer, FooterSocialsContainer, FooterContentContainer, FooterAdnotation, FooterContent } from "./styled";

const Footer = () => (
    <>
        <FooterTitleContainer>
            <ForthHeading>
                LET'S TALK!
            </ForthHeading>
        </FooterTitleContainer>
        <StyledFooter>
            <FooterSocialsContainer>
                <GitHubIcon />
                <LinkedInIcon />
            </FooterSocialsContainer>
            <FooterContentContainer>
                <FooterContent>
                    mateusz@swxmb.com
                </FooterContent>
                <FooterAdnotation>
                    I'm eager to help You build Your web app, so feel free to reach out!
                </FooterAdnotation>
            </FooterContentContainer>
        </StyledFooter>
    </>
);

export default Footer;