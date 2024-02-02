import { Button, FirstHeading, HeadingGreeting } from "../../styled";
import { Container } from "../styled";
import { HomeArticle, FirstHeadingAccent, Message } from "./styled";

const HomePage = () => (
    <Container>
        <HomeArticle>
            <HeadingGreeting>Hi,</HeadingGreeting>
            <FirstHeading> I'm <FirstHeadingAccent>Matthew</FirstHeadingAccent></FirstHeading>
            <Message>a Front-end Developer based in Warsaw determined to turn your ideas into visually stunning and user-centric digital realities.</Message>
            <Button>✉ Hire me</Button>
        </HomeArticle>
    </Container>
);

export default HomePage;