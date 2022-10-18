import CV from "../../assets/cv.pdf";
import * as s from "./style";

const CTA = () => {
	return (
		<>
			<s.Div_CTA>
				<a href={CV} download className="btn">
					{/* Download CV */}
					Last ned CV
				</a>
				<a href="#contact" className="btn btn-primary">
					{/* Let's Talk */}
					Send en melding
				</a>
			</s.Div_CTA>
		</>
	);
};

export default CTA;
