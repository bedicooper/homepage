import {
	ThirdHeading
} from "../../../app/styled";
import {
	Wrapper,
	Row,
	Dates,
	Description,
	Container,
	Box,
	LinksBox,
	Link,
	GitHubIcon,
	CertificateIcon
} from "./styled";
import { Article, Paragraph } from '../styled';
import githubUsername from "../../../utils/githubUsername";

export const CurrentExp = () => (
	<Article>
		<ThirdHeading>Coding Experience</ThirdHeading>
		<Wrapper>
		<Row>
				<Dates>
					<span>FEB.</span>
					<span><strong>2024</strong></span>
				</Dates>
				<Description>
					In February 2024, I began learing TypeScript from followup lessons from YouCode.pl
				</Description>
			</Row>
			<Row>
				<Dates>
					<span><strong>2023</strong></span>
					<span>to</span>
					<span><strong>2024</strong></span>
				</Dates>
				<Description>
					In 2023, I completed an online course on frontend development from YouCode.pl,
					during which I progressively built two web apps: a Currency Converter and a Tasks List Manager.
					What started as a simple HTML pages with some logic in vanilla JS whith each was refactored
					using React, Styled-Components and react-redux.
					The culmination of the course was the development of a larger app, a Movies Browser,
					which was collaboratively built by a team of three course participants and completed in January 2024.
					<Container>
						<Box>
							<span>
								Please feel free to explore my GitHub account,
								where you can find the code and demos for the aforementioned repositories.
							</span>
							<LinksBox>
								<Link
									href={`https://github.com/${githubUsername}`}
									target="_blank"
									rel="noreferrer"
									title="Go to GitHub"
								>
									<GitHubIcon />
								</Link>
							</LinksBox>
						</Box>
						<Box>
							<span>
								Here you will be able to find the course completion certificate
							</span>
							<LinksBox>
								<Link
									href="https://swxmb.com/files/Mateusz_Bednarz_Certificate.pdf"
									target="_blank"
									rel="noreferrer"
									title="Course Certificate"
								>
									<CertificateIcon />
								</Link>
							</LinksBox>
						</Box>
					</Container>
				</Description>
			</Row>
		</Wrapper>
	</Article>
);

export const PreviousExp = () => (
	<Article>
		<ThirdHeading>Other Aplicable Experiences</ThirdHeading>
		<Paragraph>
			My previous professional experience has equipped me
			with transferable soft skills applicable to the IT industry.
			Having managed complex projects within diverse teams,
			I've adeptly worked within team dynamics and workflow while maintaining client and
			subcontractor relations throughout project implementation.
		</Paragraph>
		<Wrapper>
			<Row>
				<Dates>
					<span>since</span>
					<span><strong>2013</strong></span>
				</Dates>
				<Description>
					Collaboration with architectural studios studioKOSMOS&nbsp;and GRUPA&nbsp;5&nbsp;Architekci
					on various projects spanning all phases of the design and construction process.
				</Description>
			</Row>
			<Row>
				<Dates>
					<span>APR.</span>
					<span><strong>2015</strong></span>
				</Dates>
				<Description>
					<span>
						<strong>Citi Mobile Challenge Finalist for EMEA region.</strong>
						<br />
						At CMC 2015, our two-person team submitted a prototype for a mobile banking app.
						Our concept aimed to establish an online banking environment within CitiBank's platform
						where customizable apps could facilitate financial management among groups, such as families.
						Advancing to the finalist phase for our region, we presented our solution onstage during Warsaw Demo Day.
					</span>
				</Description>
			</Row>
			<Row>
				<Dates>
					<span><strong>2014</strong></span>
					<span>to</span>
					<span><strong>2016</strong></span>
				</Dates>
				<Description>
					<span>
						Collaborated with GameCon and Postnuclear S.A startups
						to design functionalities and user interfaces for several mobile applications.
					</span>
				</Description>
			</Row>
		</Wrapper>
	</Article>
);