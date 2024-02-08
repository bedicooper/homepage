import { useDispatch, useSelector } from "react-redux";
import { selectIsLightTheme, toggleTheme } from "./themeSlice.js";
import { Button, Pill } from "./styled";

export const ThemeSwitch = () => {
    const dispatch = useDispatch();
    const isLightTheme = useSelector(selectIsLightTheme);

    return (
        <Button
            onClick={() => dispatch(toggleTheme())}
            title={isLightTheme ? "turn off the lights" : "turn on the lights"}
        >
            <Pill $isLightTheme={isLightTheme} />
        </Button>
    );
};