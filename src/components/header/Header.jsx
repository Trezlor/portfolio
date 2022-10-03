import ME from "../../assets/images/sondre4.png";
import CTA from "./CTA";
import * as s from "./style";

const Header = () => {
	return (
		<>
			<s.Header id="home">
				<s.Header_Container className="container">
					<h5>Hi, I'm</h5>
					<h1>Sondre!</h1>
					<h5 className="text-light">Frontend developer student</h5>
					<CTA />

					<s.Div_Me>
						<img src={ME} alt="Sondre Halvorsen" />
					</s.Div_Me>
				</s.Header_Container>
			</s.Header>
		</>
	);
};
export default Header;
