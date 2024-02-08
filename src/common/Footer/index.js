import { ForthHeading } from "../../app/styled";
import {
    StyledFooter,
    FooterAdress,
    FooterAdnotation,
    FooterEmail,
    EmailLink,
    Container,
} from "./styled";
import { SocialIcons } from "./SocialIcons";
import email from "../../utils/email";

export const Footer = () => (
    <StyledFooter>
            <ForthHeading>
                LET'S TALK!
            </ForthHeading>
           
            <Container>
                <SocialIcons />
                <FooterAdress>
                    <FooterEmail>
                        <EmailLink href={`mailto:${email}`}>
                            {email}
                        </EmailLink>
                    </FooterEmail>
                    <FooterAdnotation>
                        I'm eager to help You build Your web app,
                        so&nbsp;feel&nbsp;free&nbsp;to&nbsp;reach&nbsp;out!
                    </FooterAdnotation>
                </FooterAdress>
            </Container>
    </StyledFooter>
);