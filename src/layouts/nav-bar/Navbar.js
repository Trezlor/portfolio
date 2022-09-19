import { useRef, useState } from "react";
import { Data } from "../components/data";
import * as S from "./style";

export default function Navbar() {
	const [showNav, setShowNav] = useState(false);

	const ToggleMenu = () => {
		setShowNav(!showNav);
	};

	const autoClose = () => {
		setShowNav(false);
	};

	const menu = useRef(null);

	const closeMenu = (e) => {
		if (menu.current && showNav && !menu.current.contains(e.target)) {
			setShowNav(false);
		}
	};

	document.addEventListener("mousedown", closeMenu);

	return (
		<>
			<S.Nav showNav={showNav} ref={menu}>
				<S.Flex>
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
				</S.Flex>
				<S.CopyrightContainer>
					<S.CopyrightIcon className="fa-regular fa-copyright"></S.CopyrightIcon>
					<S.YearName>2022 - Sondre Halvorsen</S.YearName>
				</S.CopyrightContainer>
				<S.DropDown showNav={showNav} onClick={ToggleMenu}>
					<span className="lines line--1"></span>
					<span className="lines line--2"></span>
				</S.DropDown>
			</S.Nav>
		</>
	);
}
