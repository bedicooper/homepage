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
            I specialize in frontend development in JavaScript, primarily working within React framework with Router and Redux Toolkit.
            I'm also eager to explore other popular frameworks like Vue.js and Angular, as well as more backend oriented frameworks like Node.js
            With a growing skill set in frontend development, I prioritize clean code and seamless user experiences. 
            I collaborate effectively and have experience in utilization of agile methodologies like 
            Scrum and tools such as Trello for efficient project management. 
            Additionally, my familiarity with Git and GitHub facilitates smooth version control and collaboration.
        </p>
        <p>
            In my previous role as an architect, I thrived in collaborating within multidisciplinary teams to deliver complex projects.
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