import { NavContainer, Item } from "./styled";

const Navigation = () => (
  <NavContainer>
    <Item href="#about"><strong>about</strong> me</Item>
    <Item href="#skills">my <strong>skills</strong></Item>
    <Item href="#work">my <strong>work</strong></Item>
    <Item href="#contact"><strong>reach</strong> me</Item>
  </NavContainer>
);

export default Navigation