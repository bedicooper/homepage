import { SecondHeading } from "../../app/styled";
import { StyledSection, Paragraph } from "../styled";
import { SkillList } from "./SkillList";
import { skills, nextSkills, developingSkills } from "./skillsData"

export default () => (
    <StyledSection id="skills">
        <SecondHeading>
            how I can help You
        </SecondHeading>
        <Paragraph>
            I specialize in frontend development in JavaScript, primarily working within React framework with Router and Redux Toolkit.
            I am actively expanding my skillset by learning TypeScript and Unit Testing both with Mocha as well as with React Testing Library and Jest.
            I'm eager to become a well rounded develper so I began exploring Ract Native and more backend oriented frameworks like Node.js and Next.js.
            <br />
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
            title={"My tech stack includes"}
            skills={skills}
        />
        <SkillList
            title={"New skills I'm actively developing"}
            skills={developingSkills}
        />
        <SkillList
            title={"What I want to learn next"}
            skills={nextSkills}
        />
    </StyledSection>
);