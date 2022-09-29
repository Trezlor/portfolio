import CV from "../../../../assets/cv.pdf";
import * as s from "./style";

export default function CTA() {
	return (
		<>
			<s.Div_CTA>
				<a href={CV} download className="btn">
					Download CV
				</a>
				<a href="#contact" className="btn btn-primary">
					Let's Talk
				</a>
			</s.Div_CTA>
		</>
	);
}
