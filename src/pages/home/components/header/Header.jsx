import ME from "../../../../assets/images/sondre.png";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import * as s from "./style";

export default function Header() {
	return (
		<>
			<s.Header>
				<s.Header_Container className="container">
					<h5>Hi, I'm</h5>
					<h1>Sondre!</h1>
					<h5 className="text-light">Frontend developer student</h5>
					<CTA />
					<HeaderSocials />

					<s.Div_Me>
						<img src={ME} alt="Sondre Halvorsen" />
					</s.Div_Me>

					<s.ScrollDown href="#contact">Scroll Down</s.ScrollDown>
				</s.Header_Container>
			</s.Header>
			{/* <s.Header>
				<s.Header_H1>Hi, i'm Sondre!</s.Header_H1>
				<div style={{ display: "flex" }}>
					<s.Header_H3>-</s.Header_H3>
					<s.Header_H3>
						Frontend developer student
						<br />
						from Norway
					</s.Header_H3>
				</div>
				<s.Header_H2>
					Curious and interested in <br />
					learning new things <span style={{ fontSize: "32px" }}>&#x270A;</span>
				</s.Header_H2>
			</s.Header> */}
		</>
	);
}
