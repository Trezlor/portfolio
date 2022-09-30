import { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageDetail } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";

import React from "react";
import * as s from "./style";

const Navbar = () => {
	const [activeNav, setActiveNav] = useState("#");
	return (
		<>
			<s.Nav>
				<s.Nav_A
					href="#"
					onClick={() => setActiveNav("#")}
					className={activeNav === "#" ? "active" : ""}
				>
					<AiOutlineHome />
				</s.Nav_A>
				<s.Nav_A
					href="#about"
					onClick={() => setActiveNav("#about")}
					className={activeNav === "#about" ? "active" : ""}
				>
					<AiOutlineUser />
				</s.Nav_A>
				<s.Nav_A
					href="#experience"
					onClick={() => setActiveNav("#experience")}
					className={activeNav === "#experience" ? "active" : ""}
				>
					<BiBook />
				</s.Nav_A>
				<s.Nav_A
					href="#projects"
					onClick={() => setActiveNav("#projects")}
					className={activeNav === "#projects" ? "active" : ""}
				>
					<BsPencil />
				</s.Nav_A>
				<s.Nav_A
					href="#contact"
					onClick={() => setActiveNav("#contact")}
					className={activeNav === "#contact" ? "active" : ""}
				>
					<BiMessageDetail />
				</s.Nav_A>
			</s.Nav>
			<s.ScrollDown href="#contact" onClick={() => setActiveNav("#contact")}>
				Scroll Down
			</s.ScrollDown>
		</>
	);
};

export default Navbar;
