import { StyledHeader, TitleContainer, Title } from "./styled";
import Navigation from "./Navigation";

const Header = () => (
    <StyledHeader>
        <TitleContainer
            title="black and white two-third portrait of a white male with glasses and facail hair on a light drape background">
            <Title>
                {`Hi,`}<br />{`I'm Matthew.`}
            </Title>
        </TitleContainer>
        <Navigation />
    </StyledHeader >
);

export default Header;