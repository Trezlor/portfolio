import { useRef, useState } from "react";
import * as S from "../style";
import { Data } from "../utils/data";
import * as C from "./style";

/**
 * __function(s):__
 * @toggleNavbar shows/hides Navbar
 * @autoClose closes Navbar when clicking link
 * @closeNavbar closes Navbar when clicking outside of Navbar
 **/

export default function Navbar() {
	const [showNav, setShowNav] = useState(false);

	const toggleNavbar = () => {
		setShowNav(!showNav);
	};

	const autoClose = () => {
		setShowNav(false);
	};

	const Navbar = useRef(null);

	const closeMenu = (e) => {
		if (Navbar.current && showNav && !Navbar.current.contains(e.target)) {
			setShowNav(false);
		}
	};

	document.addEventListener("mousedown", closeMenu);

	return (
		<>
			<C.Nav showNav={showNav} ref={Navbar}>
				<ul>
					{Data.map((val, key) => {
						return (
							<div key={key}>
								<S.Category onClick={autoClose} to={val.link}>
									<S.CategoryIcon className="icon">{val.icon}</S.CategoryIcon>
									<S.CategoryTitle className="title">{val.title}</S.CategoryTitle>
								</S.Category>
							</div>
						);
					})}
				</ul>
				<S.CopyrightContainer>
					<S.CopyrightIcon className="fa-regular fa-copyright"></S.CopyrightIcon>
					<S.CopyrightYearName>2022 - Sondre Halvorsen</S.CopyrightYearName>
				</S.CopyrightContainer>
				<C.DropDown showNav={showNav} onClick={toggleNavbar}>
					<span className="lines line--1"></span>
					<span className="lines line--2"></span>
					<span className="lines line--3"></span>
				</C.DropDown>
			</C.Nav>
		</>
	);
}
