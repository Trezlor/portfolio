import CV from "../../assets/cv.pdf";
import * as style from "./style";

const CTA = () => {
	return (
		<>
			<style.Div_CTA>
				<a href={CV} download className="btn">
					{/* Download CV */}
					Last ned CV
				</a>
				<a href="#contact" className="btn btn-primary">
					{/* Let's Talk */}
					Send en melding
				</a>
			</style.Div_CTA>
		</>
	);
};

export default CTA;
