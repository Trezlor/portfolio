import { useRef, useState } from "react";
import * as S from "../components/navigationStyle";
import { Data } from "../utils/navigationData";

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
			<S.Nav showNav={showNav} ref={Navbar}>
				<ul>
					{Data.map((val, key) => {
						return (
							<div key={key + 1}>
								<S.Category onClick={autoClose} key={key} to={val.link}>
									<S.CategoryIcon key={key + 2} className="icon">
										{val.icon}
									</S.CategoryIcon>
									<S.CategoryTitle key={key + 3} className="title">
										{val.title}
									</S.CategoryTitle>
								</S.Category>
							</div>
						);
					})}
				</ul>
				<S.CopyrightContainer>
					<S.CopyrightIcon className="fa-regular fa-copyright"></S.CopyrightIcon>
					<S.CopyrightYearName>2022 - Sondre Halvorsen</S.CopyrightYearName>
				</S.CopyrightContainer>
				<S.DropDown showNav={showNav} onClick={toggleNavbar}>
					<span className="lines line--1"></span>
					<span className="lines line--2"></span>
				</S.DropDown>
			</S.Nav>
		</>
	);
}
