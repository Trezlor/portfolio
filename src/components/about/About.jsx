import * as s from "./style";

const About = () => {
	return (
		<section id="about">
			<h5>Get to know</h5>
			<h2>About Me</h2>

			<div
				className="container"
				style={{
					display: "flex",
					gap: "1rem",
					alignItems: "center",
					justifyContent: "space-around",
					border: "1px solid red",
				}}
			>
				<s.Image
					src={require("../../assets/images/about-me.jpg")}
					alt="minion"
					className="largeImg"
				/>
				<s.Image
					src={require("../../assets/images/about-me2.jpg")}
					alt="minion"
					className="mediumImg"
				/>
				<s.Grid>
					<s.H3 style={{ gridArea: "coding" }} className="active">
						Coding
					</s.H3>
					<s.H3 style={{ gridArea: "hobbies" }}>Hobbies</s.H3>
					<s.H3 style={{ gridArea: "job", className: "job" }}>Previous Job</s.H3>
					{/* <s.P>
						I have a big fascination with programming, and have been learning how to
						code for about 6 months! I love a challenge and strive to learn new coding skills.
						My current skills involves HTML, CSS, Javascript & React.
					</s.P> */}
					<s.P>
						My biggest hobby is gaming, and has been ever since i was a kid. Some of the
						games are League of Legends, Apex, Overwatch and Valorant. Gaming has taught
						me many things, such as risk-taking, patience, problem solving,
						concentration, critical thinking and the value of working together with
						others.
					</s.P>
				</s.Grid>
			</div>
		</section>
	);
};

export default About;

// 							In my latest job i was a certified telecommunication technician working
// 							mainly with fiber optics, both out in the field and installations in
// 							homes.
