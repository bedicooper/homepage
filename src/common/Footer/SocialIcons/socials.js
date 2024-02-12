import { ReactComponent as GitHubIcon } from "../../../assets/icons/GitHubIcon.svg";
import { ReactComponent as LinkedInIcon } from "../../../assets/icons/LinkedInIcon.svg";
import githubUsername from "../../../utils/githubUsername";
import { styledIcon } from "./styled";

export const socials = [
    {
        name: "GitHub",
        url: `https://github.com/${githubUsername}`,
        Icon: styledIcon(GitHubIcon),
    },
    {
        name: "LinkedIn",
        url: `https://linkedin.com/in/mateusz-bednarz-software/`,
        Icon: styledIcon(LinkedInIcon),
    },
];