import { SecondHeading } from "../../app/styled";
import { StyledSection } from "../styled";
import { SkillList } from "./SkillList";
import { skills, nextSkills } from "./skillsData"

export default () => (
    <StyledSection id="skills">
        <SecondHeading>
            how I can help You
        </SecondHeading>
        <p>
            I specialize in frontend development, primarily using React with and without Redux, as well as vanilla JavaScript.
            I'm also eager to explore other popular frameworks like Vue.js and Angular.
        </p>
        <p>
            In my previous role as an architect, I excelled in collaborating within multidisciplinary teams to deliver complex projects.
            I consistently took on significant responsibilities, contributing to the successful completion of various large-scale projects.
        </p>

        <SkillList
            title={"My sklillset includes"}
            skills={skills}
        />
        <SkillList
            title={"What I want to learn next"}
            skills={nextSkills}
        />
    </StyledSection>
);