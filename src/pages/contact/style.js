import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

export const MainContainer = styled.div`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	/*Positioning stuff*/
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	/*Box model stuff*/
	width: 575px;
	height: fit-content;
	margin: auto;
	padding: 20px 0 10px 20px;
	/*Miscellaneous*/
	gap: 20px;

	@media ${deviceSize.laptop} {
		left: 350px;
		border-left: 1px solid white;
	}
`;

export const ContactContainer = styled.div`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	/*Box model stuff*/
	width: inherit;
	margin: auto;
	/*Miscellaneous*/
`;

export const ContactIcon = styled.i`
	/*Box model stuff*/
	width: 55px;
	margin-right: 20px;
	/*Typography stuff*/
	font-size: 25px;
	text-align: center;

	@media ${deviceSize.laptop} {
		font-size: 45px;
	}
`;

export const ContactInfoH3 = styled.h3`
	/*Box model stuff*/
	margin: 0;
	padding: 0;
	padding-bottom: 10px;
	/*Typography stuff*/
	font-size: 20px;
	font-weight: 400;
	text-decoration: none;
	color: white;
	/*Manipulations stuff*/
	transition: padding 0.3s;

	&:hover {
		/*Box model stuff*/
		padding-left: 20px;
		/*Typography stuff*/
		text-decoration: underline;
		/*Miscellaneous*/
		cursor: pointer;
	}

	@media ${deviceSize.laptop} {
		font-size: 40px;
	}
`;

export const ContactInfoA = styled.a`
	/*Box model stuff*/
	margin: 0;
	padding: 0;
	padding-bottom: 10px;
	/*Typography stuff*/
	font-size: 20px;
	font-weight: 400;
	text-decoration: none;
	color: white;
	/*Manipulations stuff*/
	transition: padding 0.3s;

	&:hover {
		/*Box model stuff*/
		padding-left: 20px;
		/*Typography stuff*/
		text-decoration: underline;
		/*Miscellaneous*/
		cursor: pointer;
	}

	@media ${deviceSize.laptop} {
		font-size: 40px;
	}
`;
