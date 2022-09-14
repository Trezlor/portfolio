import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const loadPage = keyframes`
0% {opacity: 0; transform: translateY(-10px) skewY(5deg) skewX(5deg); filter: blur(5px);}
100% {opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg); filter: blur(0px);}
`;

export const Aside = styled.aside`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/*Positioning stuff*/
	position: fixed;
	left: -1px;
	top: 0;
	bottom: 0;
	/*Box model stuff*/
	width: 350px;
	height: 95vh;
	margin: auto;
	border: 1px solid rgba(255, 255, 255, 0.3);
	border-bottom-right-radius: 28px;
	border-top-right-radius: 28px;
	background: linear-gradient(135deg, rgba(94, 94, 94, 0.15), rgba(255, 255, 255, 0.3));
	/*Miscellaneous*/
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
`;

export const ImgContainer = styled.div`
	/*Box model stuff*/
	width: 250px;
	height: 250px;
	margin: 50px auto 40px;
	border-radius: 50%;
	/*Miscellaneous*/
	box-shadow: 5px 5px 20px black;
`;

export const Img = styled.img`
	/*Box model stuff*/
	width: auto;
	height: 100%;
	border-radius: inherit;
	/*Manipulations stuff*/
	transform: rotate(5deg);
`;

export const Name = styled.h2`
	/*Box model stuff*/
	margin-bottom: 50px;
	/*Typography stuff*/
	font-family: "Inter", sans-serif;
	font-size: 32px;
	text-align: center;
	text-shadow: 0px 3px 3px black;
`;

export const Category = styled(NavLink)`
	animation-name: ${loadPage};
	animation-duration: 1.5s;
	animation-fill-mode: forwards;

	/*Display stuff*/
	display: flex;
	flex-direction: row;
	align-items: center;
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

export const CategoryIcon = styled.li`
	/*Display stuff*/
	display: grid;
	flex: 30%;
	/*Typography stuff*/
	font-size: 25px;
	/*Miscellaneous*/
	place-items: center;
`;

export const CategoryTitle = styled.li`
	/*Display stuff*/
	display: flex;
	flex: 70%;
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
	justify-content: center;
	/*Box model stuff*/
	margin-bottom: 20px;
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
