import { ThirdHeading } from "../../../app/styled";
import { Article, List, Item, Bullet } from "./styled";

export const SkillList = ({ title, skills }) => (
    <Article>
        <ThirdHeading>{title}</ThirdHeading>
        <List>
            {skills.map(skill => (
                <Item key={skill}>
                    <Bullet />
                    {skill}
                </Item>
            ))}
        </List>
    </Article>
);