import "./style.css";

const Button = () => (
    <button className="themeButton js-themeButton">
        <span>light |
            <span className="header__topBar--boldText">
                dark
            </span>
        </span>
    </button>
);

export default Button