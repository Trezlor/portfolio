import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";

import React from "react";
import { Link } from "react-scroll";
import HeaderSocials from "./Socials";
import * as s from "./style";

const Navbar = () => {
	return (
		<>
			<s.Nav>
				<s.Nav_Li>
					<Link to="home" spy={true} smooth={true} offset={0} duration={400}>
						<AiOutlineHome />
					</Link>
				</s.Nav_Li>

				<s.Nav_Li>
					<Link to="about" spy={true} smooth={true} offset={0} duration={400}>
						<AiOutlineUser />
					</Link>
				</s.Nav_Li>

				<s.Nav_Li>
					<Link to="projects" spy={true} smooth={true} offset={0} duration={400}>
						<BsPencil />
					</Link>
				</s.Nav_Li>

				<s.Nav_Li>
					<Link to="contact" spy={true} smooth={true} offset={0} duration={400}>
						<BiMessageDetail />
					</Link>
				</s.Nav_Li>
			</s.Nav>
			<HeaderSocials />
			<s.ScrollDown href="#contact">
				{/* Scroll Down */}
				Scroll Ned
			</s.ScrollDown>
		</>
	);
};

export default Navbar;
