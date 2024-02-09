import {
    ThirdHeading,
    ForthHeading
} from "../../../app/styled";
import { Bullet, Container, Article } from "../styled";
import { interests } from "./interestData";

export const Interest = () => (
    <Article>
        <ThirdHeading>My Other Interest</ThirdHeading>
        <Container>
            {interests.map(interest => (
                <li key={interest}>
                    <ForthHeading>
                        <Bullet />
                        {interest}
                    </ForthHeading>
                </li>
            ))}
        </Container>
    </Article >
);