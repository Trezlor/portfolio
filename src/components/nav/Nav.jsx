import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";

import React from "react";
import { Link } from "react-scroll";
import HeaderSocials from "./Socials";
import * as style from "./style";

const Navbar = () => {
	return (
		<>
			<style.Nav>
				<style.Nav_Li>
					<Link to="home" spy={true} smooth={true} offset={0} duration={400}>
						<AiOutlineHome />
					</Link>
				</style.Nav_Li>

				<style.Nav_Li>
					<Link to="about" spy={true} smooth={true} offset={0} duration={400}>
						<AiOutlineUser />
					</Link>
				</style.Nav_Li>

				<style.Nav_Li>
					<Link to="projects" spy={true} smooth={true} offset={0} duration={400}>
						<BsPencil />
					</Link>
				</style.Nav_Li>

				<style.Nav_Li>
					<Link to="contact" spy={true} smooth={true} offset={0} duration={400}>
						<BiMessageDetail />
					</Link>
				</style.Nav_Li>
			</style.Nav>
			<HeaderSocials />
			<style.ScrollDown href="#contact">
				{/* Scroll Down */}
				Scroll Ned
			</style.ScrollDown>
		</>
	);
};

export default Navbar;
