import ME from "../../assets/images/sondre4.png";
import CTA from "./CTA";
import * as style from "./style";

const Header = () => {
	return (
		<>
			<style.Header id="home">
				<style.Header_Container className="container">
					<h5>
						{/* Hi, I'm */}
						Hei, mitt nav er
					</h5>
					<h1>Sondre!</h1>
					<h5 className="text-light">
						{/* Frontend developer student from Norway! */}
						Frontend utvikler student fra Norge!
					</h5>
					<CTA />

					<style.Div_Me>
						<img src={ME} alt="Sondre Halvorsen" />
					</style.Div_Me>
				</style.Header_Container>
			</style.Header>
		</>
	);
};
export default Header;
