import { StyledSection, Paragraph } from "../styled";
import {
    SecondHeading,
} from "../../app/styled";
import { Box, DownloadIcon, Link } from "./styled";
import { CurrentExp, PreviousExp } from "./Experience/index";
import { Traits } from './Traits/index'
import { Interest } from "./Interests";

export default () => (
        <StyledSection id="about">
            <SecondHeading>who I am</SecondHeading>
            <Paragraph>
                Coming from a background in architecture, where I have over a decade of professional experience,
                I'm now embarking on a journey to transition into the software industry.
                Seeking exciting projects where I can apply my skills and knowledge while embracing opportunities for growth,
                I'm eager to expand my skill set and tackle new challenges in this dynamic field.
            </Paragraph>

            <CurrentExp />
            <PreviousExp />
            <Traits />
            <Interest />
            <Box>
                Download above as a CV
                <Link
                    href="https://swxmb.com/files/Mateusz_Bednarz_Developer_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    title="Download my CV"
                >
                    <DownloadIcon />
                </Link>
            </Box>
        </StyledSection>
);