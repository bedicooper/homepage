import {
    ThirdHeading,
    ForthHeading
} from "../../../app/styled";
import { ButtonExpand, Chevron } from "./styled";
import { Bullet, Container, Paragraph, Article } from "../styled";
import { useCollapsable } from "./useCollapsable";

export const Traits = () => {

    const {
        expand,
        toggleFirst,
        toggleSecond,
        toggleThird,
    } = useCollapsable();

    return (
        <Article>
            <ThirdHeading>My Key Traits</ThirdHeading>
            <Container>
                <li>
                    <ForthHeading>
                        <Bullet $expand={expand.first} />
                        Focused and creative
                        <ButtonExpand $expand={expand.first} onClick={toggleFirst} title="expand">
                            <Chevron />
                        </ButtonExpand>
                    </ForthHeading>
                    {
                        expand.first &&
                        <Paragraph>
                            In my approach to work, I bring forth a blend of creativity, scrupulousness, and accuracy.
                            My creative mindset allows me to envision innovative solutions to complex problems,
                            while my meticulous attention to detail ensures that every aspect of my work is executed with precision.
                        </Paragraph>
                    }
                </li>
                <li>
                    <ForthHeading>
                        <Bullet $expand={expand.second} />
                        Teamwork
                        <ButtonExpand $expand={expand.second} onClick={toggleSecond} title="expand">
                            <Chevron />
                        </ButtonExpand>
                    </ForthHeading>
                    {expand.second &&
                        <Paragraph>
                            One of my strongest attributes is my ability to seamlessly integrate into diverse teams,
                            adapting to various working styles and collaborating effectively towards common goals.
                            Whether leading or contributing to a team effort,
                            I prioritize open communication and mutual respect,
                            fostering a positive and inclusive work environment.
                        </Paragraph>
                    }
                </li>
                <li>
                    <ForthHeading>
                        <Bullet $expand={expand.third} />
                        Work under pressure
                        <ButtonExpand $expand={expand.third} onClick={toggleThird} title="expand">
                            <Chevron />
                        </ButtonExpand>
                    </ForthHeading>
                    {expand.third &&
                        <Paragraph>
                            I thrive in high-pressure situations,
                            maintaining composure and focus to deliver results even under tight deadlines.
                            My resilience and adaptability enable me to overcome challenges with determination and resourcefulness,
                            consistently achieving optimal outcomes.
                        </Paragraph>
                    }
                </li>
            </Container>
        </Article>
    )
};


// import NavigationList from "./NavigationList";

// import { MenuButton } from "../styled";
// import { useCollapsableNavigation } from "./useCollapsableNavigation";

// export const NavigationOnDesktop = () => (
//     <StyledNavigationOnDesktop>
//         <NavigationList />
//     </StyledNavigationOnDesktop>
// );

// export const NavigationOnMobile = () => {
//     const {
//         expand,
//         toggleNavigation,
//     } = useCollapsableNavigation();

//     return (
//         <StyledNavigationOnMobile>
//             <MenuButton onClick={toggleNavigation}>MENU ↓</MenuButton>
//             {
//                 expand.navigation && <NavigationList />
//             }
//         </StyledNavigationOnMobile>
//     )
// };