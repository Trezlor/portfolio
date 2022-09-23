import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

export const MainContainer = styled.div`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	/*Positioning stuff*/
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	/*Box model stuff*/
	width: fit-content;
	height: fit-content;
	margin: auto;
	/*Miscellaneous*/
	gap: 20px;

	@media ${deviceSize.laptop} {
		/*Positioning stuff*/
		left: 350px;
		right: 20px;
		/*Box model stuff*/
		width: 575px;
		padding: 30px 0 20px 20px;
		border-left: 1px solid white;
	}
`;

export const ContactContainer = styled.div`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	/*Box model stuff*/
	width: inherit;
`;

export const ContactIcon = styled.i`
	/*Box model stuff*/
	width: 55px;
	margin-right: 20px;
	/*Typography stuff*/
	font-size: 25px;
	text-align: center;
	/*Miscellaneous*/
	vertical-align: middle;

	@media ${deviceSize.laptop} {
		/*Typography stuff*/
		font-size: 45px;
	}
`;

export const ContactInfoH3 = styled.h3`
	/*Box model stuff*/
	padding-bottom: 10px;
	/*Typography stuff*/
	font-size: 20px;
	font-weight: 400;
	/*Miscellaneous*/
	user-select: none;

	@media ${deviceSize.laptop} {
		/*Typography stuff*/
		font-size: 40px;

		/*Manipulations stuff*/
		transition: padding 0.3s;
	}

	&:hover {
		/*Box model stuff*/
		padding-left: 20px;
		/*Typography stuff*/
		text-decoration: underline;
		/*Miscellaneous*/
		cursor: pointer;
	}
`;

export const ContactInfoA = styled.a`
	/*Box model stuff*/
	padding-bottom: 10px;
	/*Typography stuff*/
	font-size: 20px;
	font-weight: 400;
	color: white;
	/*Miscellaneous*/
	user-select: none;

	@media ${deviceSize.laptop} {
		/*Typography stuff*/
		font-size: 40px;
		text-decoration: none;
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
	}
`;
