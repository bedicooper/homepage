{
    const themeButton = document.querySelector(".js-themeButton");

    const changeTheme = () => {
        const body = document.querySelector(".js-body");
        const main = document.querySelector(".js-main");
        const header = document.querySelector(".js-header");
        const navigationLink1 = document.querySelector(".js-navigation__link1");
        const navigationLink2 = document.querySelector(".js-navigation__link2");
        const navigationLink3 = document.querySelector(".js-navigation__link3");
        const navigationLink4 = document.querySelector(".js-navigation__link4");

        body.classList.toggle("body--lightMode");
        main.classList.toggle("main--lightMode");
        header.classList.toggle("header--lightMode")
        navigationLink1.classList.toggle("navigation__link--lightMode");
        navigationLink2.classList.toggle("navigation__link--lightMode");
        navigationLink3.classList.toggle("navigation__link--lightMode");
        navigationLink4.classList.toggle("navigation__link--lightMode");
        themeButton.classList.toggle("themeButton--lightMode");
    }


    const onThemeButtonClick = () => {
        changeTheme();
      
        themeButton.innerHTML = themeButton.classList.contains("themeButton--lightMode") 
        ? "<span><span class=\"boldText\">light</span> | dark</span>" : "<span>light | <span class=\"boldText\">dark</span></span>";  

    };

    const init = () => {


        themeButton.addEventListener("click", onThemeButtonClick);
    };

    init();
}
