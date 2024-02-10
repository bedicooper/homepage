import { FirstHeading, HeadingGreeting } from "../../app/styled";
import {
    HomeArticle,
    FirstHeadingAccent,
    Message,
    StyledButtonLink,
    ButtonIcon,
    HomeSection
} from "./styled";
import email from "../../utils/email";

export default () => (
    <HomeSection id="home">
        <HomeArticle>
            <HeadingGreeting>Hi,</HeadingGreeting>
            <FirstHeading>
                I'm <FirstHeadingAccent>Matthew</FirstHeadingAccent>
            </FirstHeading>
            <Message>
                a Front-end Developer
                based&nbsp;in&nbsp;Warsaw
                determined&nbsp;to&nbsp;turn
                your&nbsp;ideas
                into&nbsp;visually&nbsp;stunning&nbsp;and
                <br/>
                user-centric&nbsp;digital&nbsp;realities.
            </Message>
            <StyledButtonLink href={`mailto:${email}`} title={email}>
                <ButtonIcon />
                Hire me
            </StyledButtonLink>
        </HomeArticle>
    </HomeSection>
);