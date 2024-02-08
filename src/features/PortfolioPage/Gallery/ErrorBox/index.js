import { ButtonLink } from "../../../../common/ButtonLink";
import githubUsername from "../../../../utils/githubUsername";
import { Wrapper, Header, Paragraph } from "./styled";
import { ReactComponent as ErrorIcon } from "../../../../assets/icons/icon-error.svg";

export const ErrorBox = () => (
    <Wrapper>
        <ErrorIcon />
        <Header>Ooops! Something went&nbsp;wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github&nbsp;projects.
            You can check them directly&nbsp;on&nbsp;Github.
        </Paragraph>
        <ButtonLink
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noreferrer"
        >
            Go to GitHub
        </ButtonLink>
    </Wrapper>
);