import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

export const HeadlineContainer = styled.main`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	/*Box model stuff*/
	width: fit-content;
	margin-top: 35vh;
	/*Miscellaneous*/
	margin-inline: auto;
	gap: 10px;
`;

export const HeadlineH1 = styled.h1`
	/*Typography stuff*/
	font-size: 36px;

	@media ${deviceSize.laptop} {
		/*Typography stuff*/
		font-size: 70px;
	}
`;

export const HeadlineH2 = styled.h2`
	/*Typography stuff*/
	font-size: 18px;

	@media ${deviceSize.laptop} {
		/*Typography stuff*/
		font-size: 28px;
	}
`;

export const HeadlineH3 = styled.h3`
	/*Box model stuff*/
	margin-left: 4px;
	/*Typography stuff*/
	font-size: 14px;

	@media ${deviceSize.laptop} {
		/*Typography stuff*/
		font-size: 20px;
	}
`;
