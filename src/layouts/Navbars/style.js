import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

const loadPage = keyframes`
0% {opacity: 0; transform: translateY(-10px) skewY(5deg) skewX(5deg); filter: blur(5px);}
100% {opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg); filter: blur(0px);}
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
			rgba(0, 0, 0, 0),
			rgba(150, 150, 150, 0.2),
			rgba(0, 0, 0, 0)
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
			rgba(0, 0, 0, 0),
			rgba(150, 150, 150, 0.2),
			rgba(0, 0, 0, 0)
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

export const CategoryIcon = styled.li`
	/*Display stuff*/
	display: grid;
	flex: 35%;
	/*Typography stuff*/
	font-size: 20px;
	/*Miscellaneous*/
	place-items: end;
	margin-right: 20px;
`;

export const CategoryTitle = styled.li`
	/*Display stuff*/
	display: flex;
	flex: 65%;
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

	@media ${deviceSize.laptop} {
		/*Box model stuff*/
		margin-block: 0 20px;
		bottom: 0;
	}
`;

export const CopyrightIcon = styled.i`
	/*Box model stuff*/
	margin-right: 10px;
	margin-top: 1px;
	/*Typography stuff*/
	font-size: 14px;
`;

export const CopyrightYearName = styled.h4`
	font-weight: inherit;
`;
