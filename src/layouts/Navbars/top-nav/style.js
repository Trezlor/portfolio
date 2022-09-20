import styled from "styled-components";
import { deviceSize } from "../../../utils/deviceSize";

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
