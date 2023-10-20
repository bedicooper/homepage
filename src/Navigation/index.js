import "./style.css";

const Navigation = () => (
    <nav className="navigtaion">
    <a href="#about" className="navigation__link js-navigation__link1"><span
      className="navigation__link--boldText">about</span> me</a>
    <a href="#skills" className="navigation__link js-navigation__link2">my <span
      className="navigation__link--boldText">skills</span></a>
    <a href="#work" className="navigation__link js-navigation__link3">my <span
      className="navigation__link--boldText">work</span></a>
    <a href="#contact" className="navigation__link js-navigation__link4"><span
      className="navigation__link--boldText">reach</span> me</a>
  </nav>
);

export default Navigation