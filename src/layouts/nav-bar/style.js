import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { deviceSize } from "../../components/deviceSize";

const loadPage = keyframes`
0% {opacity: 0; transform: translateY(-10px) skewY(5deg) skewX(5deg); filter: blur(5px);}
100% {opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg); filter: blur(0px);}
`;

export const Nav = styled.nav`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/*Positioning stuff*/
	position: fixed;
	left: 0;
	right: 0;
	top: -1px;
	/* top: -230px; */
	transition: 0.4s;
	transform: translateY(${(props) => (props.showNav ? "0" : "-100%")});
	/*Box model stuff*/
	width: 90vw;
	height: fit-content;
	border: 1px solid rgba(255, 255, 255, 0.3);
	border-radius: 12px;
	margin: auto;
	background: linear-gradient(135deg, rgba(94, 94, 94, 0.15), rgba(255, 255, 255, 0.2));
	/*Miscellaneous*/
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	z-index: 1;

	@media ${deviceSize.laptop} {
		display: none;
	}
`;

export const Category = styled(NavLink)`
	animation-name: ${loadPage};
	animation-duration: 1.5s;
	animation-fill-mode: forwards;

	/*Display stuff*/
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	/*Box model stuff*/
	width: 100%;
	height: 50px;
	margin: 0;
	/*Typography stuff*/
	font-family: sans-serif;
	font-size: 20px;
	text-decoration: none;
	color: inherit;
	/*Manipulations stuff*/
	opacity: 0;
	/*Miscellaneous*/
	list-style-type: none;

	&:hover {
		/*Box model stuff*/
		background: linear-gradient(
			90deg,
			rgba(0, 0, 0, 0.2),
			rgba(150, 150, 150, 0.2),
			rgba(0, 0, 0, 0.2)
		);
		/*Typography stuff*/
		color: rgb(255, 255, 255);
		/*Miscellaneous*/
		cursor: pointer;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
	}

	&.active {
		/*Box model stuff*/
		background: linear-gradient(
			90deg,
			rgba(0, 0, 0, 0.2),
			rgba(150, 150, 150, 0.2),
			rgba(0, 0, 0, 0.2)
		);
		/*Typography stuff*/
		color: rgb(255, 255, 255);
		/*Miscellaneous*/
		/* border: 1px solid rgba(255, 255, 255, 0.3); */
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
	}
`;

export const Flex = styled.div`
	width: 100%;
	margin-inline: auto;
	padding-inline: auto;
`;

export const CategoryIcon = styled.li`
	/*Display stuff*/
	display: grid;
	flex: 40%;
	/*Typography stuff*/
	padding-left: auto;
	font-size: 25px;
	/*Miscellaneous*/
	place-items: center;
`;

export const CategoryTitle = styled.li`
	/*Display stuff*/
	display: flex;
	flex: 60%;
	align-items: center;
	/*Box model stuff*/
	height: 100%;
	/*Manipulations stuff*/
	transition: padding 0.15s;

	&:hover {
		/*Box model stuff*/
		padding-left: 10px;
	}
`;

export const CopyrightContainer = styled.div`
	/*Display stuff*/
	display: flex;
	align-items: center;
	position: relative;
	bottom: -36px;
	justify-content: center;
	/*Box model stuff*/
	margin-block: 50px 20px;
	/*Typography stuff*/
	font-weight: 300;
	/*Miscellaneous*/
	list-style: none;
`;

export const CopyrightIcon = styled.i`
	/*Box model stuff*/
	margin-right: 10px;
	margin-top: 1px;
	/*Typography stuff*/
	font-size: 14px;
`;

export const YearName = styled.h4`
	font-weight: inherit;
`;

export const DropDown = styled.button`
	width: 100px;
	height: 36px;
	position: relative;
	text-align: center;
	display: flex;
	margin-inline: auto;
	left: 0;
	right: 0;
	top: 38px;
	margin: auto;
	transition: 0.4s;
	border: 1px solid rgba(255, 255, 255, 0.3);
	border-radius: 0 0 24px 24px;
	background: linear-gradient(135deg, rgba(94, 94, 94, 0.15), rgba(255, 255, 255, 0.2));
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);

	.lines {
		background: #f0f0f0;
		border-radius: 5px;
		position: absolute;
		transition: 0.4s;
		height: 3px;
		width: 20%;
		bottom: 0;
		top: 0;
		left: 0;
		right: 0;
		margin: auto;
	}

	.line--1 {
		transform: translateX(${(props) => (props.showNav ? "0" : "6px")})
			rotate(${(props) => (props.showNav ? "-135deg" : "-45deg")});
	}

	.line--2 {
		transform: translateX(${(props) => (props.showNav ? "0" : "-6px")})
			rotate(${(props) => (props.showNav ? "135deg" : "45deg")});
	}

	@media ${deviceSize.laptop} {
		display: none;
	}
`;
