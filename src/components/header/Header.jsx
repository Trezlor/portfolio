import { useState } from "react";
import ME from "../../assets/images/sondre4.png";
import CTA from "./components/CTA";
import * as style from "./style";

const Header = () => {
	const [isHoveringS, setIsHoveringS] = useState(false);
	const [isHoveringO, setIsHoveringO] = useState(false);
	const [isHoveringN, setIsHoveringN] = useState(false);
	const [isHoveringD, setIsHoveringD] = useState(false);
	const [isHoveringR, setIsHoveringR] = useState(false);
	const [isHoveringE, setIsHoveringE] = useState(false);
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseOver = (e) => {
		let target = e.target.textContent;
		switch (target) {
			case "S":
				setIsHoveringS(true);

				setTimeout(() => {
					setIsHoveringS(false);
				}, 200);
				break;

			case "o":
				setIsHoveringO(true);

				setTimeout(() => {
					setIsHoveringO(false);
				}, 200);
				break;

			case "n":
				setIsHoveringN(true);

				setTimeout(() => {
					setIsHoveringN(false);
				}, 200);
				break;

			case "d":
				setIsHoveringD(true);

				setTimeout(() => {
					setIsHoveringD(false);
				}, 200);
				break;

			case "r":
				setIsHoveringR(true);

				setTimeout(() => {
					setIsHoveringR(false);
				}, 200);
				break;

			case "e":
				setIsHoveringE(true);

				setTimeout(() => {
					setIsHoveringE(false);
				}, 200);
				break;

			case "!":
				setIsHovering(true);

				setTimeout(() => {
					setIsHovering(false);
				}, 200);
				break;

			default:
				break;
		}
	};

	return (
		<>
			<style.Header id="home">
				<style.Header_Container className="container">
					<h5>
						{/* Hi, I'm */}
						Hei, mitt navn er
					</h5>
					<h1>
						<style.Letter_Effect
							className={isHoveringS ? "hovered" : ""}
							onMouseOver={handleMouseOver}
						>
							S
						</style.Letter_Effect>
						<style.Letter_Effect
							className={isHoveringO ? "hovered" : ""}
							onMouseOver={handleMouseOver}
						>
							o
						</style.Letter_Effect>
						<style.Letter_Effect
							className={isHoveringN ? "hovered" : ""}
							onMouseOver={handleMouseOver}
						>
							n
						</style.Letter_Effect>
						<style.Letter_Effect
							className={isHoveringD ? "hovered" : ""}
							onMouseOver={handleMouseOver}
						>
							d
						</style.Letter_Effect>
						<style.Letter_Effect
							className={isHoveringR ? "hovered" : ""}
							onMouseOver={handleMouseOver}
						>
							r
						</style.Letter_Effect>
						<style.Letter_Effect
							className={isHoveringE ? "hovered" : ""}
							onMouseOver={handleMouseOver}
						>
							e
						</style.Letter_Effect>
						<style.Letter_Effect
							className={isHovering ? "hovered" : ""}
							onMouseOver={handleMouseOver}
						>
							!
						</style.Letter_Effect>
					</h1>
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
