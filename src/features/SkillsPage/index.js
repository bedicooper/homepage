import { SecondHeading } from "../../app/styled";
import { StyledSection, Paragraph } from "../styled";
import { SkillList } from "./SkillList";
import { skills, nextSkills } from "./skillsData"

export default () => (
    <StyledSection id="skills">
        <SecondHeading>
            how I can help You
        </SecondHeading>
        <Paragraph>
            I specialize in frontend development in JavaScript, primarily working within React framework with Router and Redux Toolkit.
            I am actively expanding my skillset by learning TypeScript and have initiated my journey into Angular development.
            I'm also eager to explore more backend oriented frameworks like Node.js
            <br/>
            With a growing skill set in frontend development, I prioritize clean code and seamless user experiences. 
            I collaborate effectively and have experience in utilization of agile methodologies like 
            Scrum and tools such as Trello for efficient project management. 
            Additionally, my familiarity with Git and GitHub facilitates smooth version control and collaboration.
        </Paragraph>
        <Paragraph>
            In my previous role as an architect, I thrived in collaborating within multidisciplinary teams to deliver complex projects.
            I consistently took on significant responsibilities, contributing to the successful completion of various large-scale projects.
        </Paragraph>

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