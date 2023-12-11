import { NavContainer, Item } from "./styled";

const Navigation = () => (
  <NavContainer>
    <Item href="#about"><strong>about</strong> me</Item>
    <Item href="#skills">my <strong>skills</strong></Item>
    <Item href="#portfolio">my <strong>work</strong></Item>
  </NavContainer>
);

export default Navigation