import styled from "styled-components";
import { deviceSize } from "../../../utils/deviceSize";

export const Aside = styled.aside`
	/*Display stuff*/
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
	display: none;
	z-index: 2;

	@media ${deviceSize.laptop} {
		display: flex;
	}

	@media ${deviceSize.custom} {
		display: none;
	}
`;

export const ImgContainer = styled.div`
	/*Box model stuff*/
	width: 250px;
	height: 250px;
	margin: 50px auto 20px;
	border-radius: 12px;
	/*Miscellaneous*/
	box-shadow: 5px 5px 20px black;
`;

export const Img = styled.img`
	/*Box model stuff*/
	width: auto;
	height: 100%;
	border-radius: inherit;
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
