import styled from "styled-components";

export const StyledSidebarNameH2 = styled.h2`
	font-family: "Inter", sans-serif;
	font-size: 32px;
	text-shadow: 0px 3px 3px black;
`;

export const StyledSidebarAside = styled.aside`
	position: fixed;
	left: 0;
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
	/*Typography stuff*/
	color: rgb(255, 255, 255);
	/*Miscellaneous*/
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const StyledSidebarImg = styled.img`
	height: 100%;
	width: auto;
	border-radius: inherit;
	/* transform: rotate(10deg); */
`;
