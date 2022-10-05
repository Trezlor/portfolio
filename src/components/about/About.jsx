import { useState } from "react";
import { GiConsoleController } from "react-icons/gi";
import { IoMdBriefcase } from "react-icons/io";
import { RiCodeBoxFill } from "react-icons/ri";
import MINION from "../../assets/images/about-me.jpg";
import * as s from "./style";

const About = () => {
	const [active, setActive] = useState("coding");

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
							className={active === "coding" ? "active" : ""}
							onClick={() => setActive("coding")}
						>
							{/* <s.IconWrapper className="icon"> */}
							<RiCodeBoxFill className="icon" />
							{/* </s.IconWrapper> */}
							<h5>Coding</h5>
							<small>1+ Year</small>
						</s.AboutCard>

						<s.AboutCard
							className={active === "hobbies" ? "active" : ""}
							onClick={() => setActive("hobbies")}
						>
							<GiConsoleController className="icon" />
							<h5>Hobbies</h5>
							<small>1+ Year</small>
						</s.AboutCard>

						<s.AboutCard
							className={active === "job" ? "active" : ""}
							onClick={() => setActive("job")}
						>
							<IoMdBriefcase className="icon" />
							<h5>Previous Job</h5>
							<small>1+ Year</small>
						</s.AboutCard>
					</s.AboutCards>
					<p>
						I have a big fascination with programming, and have been learning how to
						code for about 6 months! I love a challenge and strive to learn new coding
						skills. My current skills involves HTML, CSS, Javascript & React.
					</p>
					{/* <p>
						My biggest hobby is gaming, and has been ever since i was a kid. Some of the
						games are League of Legends, Apex, Overwatch and Valorant. Gaming has taught
						me many things, such as risk-taking, patience, problem solving,
						concentration, critical thinking and the value of working together with
						others.
					</p> */}

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
