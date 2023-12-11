import { TopBar, Container } from "./styled";
import { StyledHeader } from "../styled";
import Navigation from "./Navigation";
import HeaderImage from "./HeaderImage";

const Header = () => (
    <StyledHeader>
        <TopBar>
            <Navigation />
        </TopBar>
        <Container>
            <HeaderImage />
        </Container>
    </StyledHeader >
);

export default Header;