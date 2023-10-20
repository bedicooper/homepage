import "./style.css";

const Header = ({ themeButton, navigation }) => (
    <section className="header js-header">
        <div className="header__topBar">
            <div className="header__container">
                <span>mateusz <span className="header__topBar--boldText">bednarz</span></span>
            </div>
            <div className="header__container">
                {themeButton}
            </div>
        </div>
        <div className="header__titleContainer"
            title="black and white two-third portrait of a white male with glasses and facail hair on a light drape background">
            <span className="header__titleText">Hi, <br />
                I'm Matthew.</span>
        </div>
        {navigation}
    </section>
);

export default Header;