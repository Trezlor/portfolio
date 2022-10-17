import { useState } from "react";
import { GiConsoleController } from "react-icons/gi";
import { ImCss3, ImHtmlFive } from "react-icons/im";
import { IoMdBriefcase } from "react-icons/io";
import { RiCodeBoxFill } from "react-icons/ri";
import { SiJavascript, SiReact } from "react-icons/si";
import MINION from "../../assets/images/about-me.jpg";
import * as s from "./style";

const About = () => {
	const [activeTab, setActiveTab] = useState("coding");
	const [activeText, setActiveText] = useState("codingText");

	return (
		<section id="about">
			<h5>Get to know</h5>
			<h2>About Me</h2>

			<s.Container className="container">
				<s.AboutMe>
					<s.AboutMeImage>
						<img src={MINION} alt="minion" />
					</s.AboutMeImage>
				</s.AboutMe>

				<s.Content>
					<s.AboutCards>
						<s.AboutCard
							className={activeTab === "coding" ? "active" : ""}
							onClick={() => {
								setActiveTab("coding");
								setActiveText("codingText");
							}}
						>
							<RiCodeBoxFill className="icon" />
							<h5>Coding</h5>
							<small>Interest</small>
						</s.AboutCard>

						<s.AboutCard
							className={activeTab === "hobbies" ? "active" : ""}
							onClick={() => {
								setActiveTab("hobbies");
								setActiveText("hobbiesText");
							}}
						>
							<GiConsoleController className="icon" />
							<h5>Hobbies</h5>
							<small>Gaming</small>
						</s.AboutCard>

						<s.AboutCard
							className={activeTab === "skills" ? "active" : ""}
							onClick={() => {
								setActiveTab("skills");
								setActiveText("skillsText");
							}}
						>
							<IoMdBriefcase className="icon" />
							<h5>Skills</h5>
							<small>Languages</small>
						</s.AboutCard>
					</s.AboutCards>
					<p className={activeText === "codingText" ? "activeText" : ""}>
						I have a big fascination with programming, and have been learning how to
						code for about 6 months! I love a challenge and strive to learn new coding
						skills. My current skills involves HTML, CSS, Javascript & React.
					</p>
					<p className={activeText === "hobbiesText" ? "activeText" : ""}>
						My biggest hobby is gaming, and has been ever since i was a kid. Some of the
						games are League of Legends, Apex, Overwatch and Valorant. Gaming has taught
						me many things, such as risk-taking, patience, problem solving,
						concentration, critical thinking and the value of working together with
						others.
					</p>
					<div className={activeText === "skillsText" ? "activeText skills" : "skills"}>
						<div className="icons">
							<ImHtmlFive className="icon html" />
							<ImCss3 className="icon css" />
							<SiJavascript className="icon js" />
							<SiReact className="icon react" />
						</div>
						<p className={activeText === "skillsText" ? "activeText skills" : "skills"}>
							Hallo?
						</p>
					</div>

					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</s.Content>
			</s.Container>
		</section>
	);
};

export default About;

// 							In my latest job i was a certified telecommunication technician working
// 							mainly with fiber optics, both out in the field and installations in
// 							homes.
