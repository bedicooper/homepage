import { Container } from "./styled";

const Section = ({ id, title, body, additionalContent }) => (
    <Container id={id}>
        <h2>{title}</h2>
        {body}
        {additionalContent}
    </Container>
);

export default Section;


