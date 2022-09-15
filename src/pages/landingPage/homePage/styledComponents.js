import styled from "styled-components";
import { deviceSize } from "../../../components/deviceSize";

export const HeadlineContainer = styled.main`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	/*Box model stuff*/
	width: 275px;
	margin-top: 35vh;
	/*Miscellaneous*/
	margin-inline: auto;
	gap: 10px;

	@media ${deviceSize.mobileL} {
		width: fit-content;
	}
`;

export const HeadlineH1 = styled.h1`
	font-size: 36px;

	@media ${deviceSize.mobileL} {
		/*Typography stuff*/
		font-size: 70px;
	}
`;

export const HeadlineH2 = styled.h2`
	font-size: 18px;

	@media ${deviceSize.mobileL} {
		/*Typography stuff*/
		font-size: 28px;
	}
`;

export const HeadlineH3 = styled.h3`
	font-size: 14px;

	@media ${deviceSize.mobileL} {
		/*Typography stuff*/
		font-size: 20px;
	}
`;
