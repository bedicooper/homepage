import { NavLink } from 'react-router-dom';
import { toHome } from '../../app/routes';
import { Wrapper, LogoContainer } from "./styled";
import { ReactComponent as LogoSVG } from "../../assets/icons/pageLogo.svg";
import { ThemeSwitch } from "./ThemeSwitch";
import { Navigation } from "../Navigation";

export const TopBar = () => (
    <Wrapper>
        <LogoContainer as={NavLink} to={toHome()} title='Home Page'>
            <LogoSVG alt='SWxMB' />
        </LogoContainer>  
        <Navigation />
        <ThemeSwitch />
    </Wrapper>
);