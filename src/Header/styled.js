import styled from "styled-components";
import background from "../img/0-mbednarz.jpg";

export const StyledHeader = styled.section`
    max-width: 960px;
    border-bottom: 4px solid ${({ theme }) => theme.secondary};
    transition: border-bottom ${({ theme }) => theme.transition};
`;

export const TitleContainer = styled.div`
    width: 100%;
    background-image: url('${background}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
`;

export const Title = styled.span`
    display: inline-block;
    margin: 40% 0% 4% 10%;
    font-family: 'Merriweather', serif;
    color: rgb(29, 29, 29);
    font-size: xx-large;
    font-weight: 900;
    text-align: left;
    text-indent: 24px;
`;