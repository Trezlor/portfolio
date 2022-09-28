import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

export const HeadlineContainer = styled.main`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	justify-content: center;
	/*Box model stuff*/
	width: fit-content;
	height: 100vh;
	/* border: 1px solid red; */
	/*Miscellaneous*/
	margin-inline: auto;
	gap: 10px;
`;

export const HeadlineH1 = styled.h1`
	/*Typography stuff*/
	font-size: 2.1rem;

	@media ${deviceSize.laptop} {
		/*Typography stuff*/
		font-size: 4.2rem;
	}
`;

export const HeadlineH2 = styled.h2`
	/*Typography stuff*/
	font-size: 1.1rem;

	@media ${deviceSize.laptop} {
		/*Typography stuff*/
		font-size: 1.8rem;
	}
`;

export const HeadlineH3 = styled.h3`
	/*Box model stuff*/
	margin-left: 4px;
	/*Typography stuff*/
	font-size: 0.9rem;

	@media ${deviceSize.laptop} {
		/*Typography stuff*/
		font-size: 1.3rem;
	}
`;

export const HeadlineSection = styled.section`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	align-items: center;
	/*Box model stuff*/
	padding-block: 20vh 60vh;
	/* border: 1px solid red; */
	/*Miscellaneous*/
	margin-inline: auto;

	h1 {
		margin-bottom: 3rem;
	}

	@media ${deviceSize.laptop} {
	}
`;

export const HeadlineP = styled.p`
	/*Typography stuff*/
	font-size: 14px;
	padding: 0.5rem;
	text-align: center;

	@media ${deviceSize.laptop} {
		/*Typography stuff*/
		font-size: 20px;
	}
`;

export const GridDiv = styled.div`
	display: grid;
	/* border: 2px solid black; */
	margin-inline: 2.5vw;
	grid-gap: 1rem;
	place-items: center;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-areas:
		"experiences"
		"interests"
		"hobbies";

	h2 {
		padding: 0.5rem;
		text-align: center;
	}

	@media ${deviceSize.laptop} {
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr;
		grid-template-areas: "experiences interests hobbies";
	}
`;

export const FlexDiv = styled.div`
	/* background-color: red; */
	/* border: 2px solid black; */

	@media ${deviceSize.laptop} {
	}
`;
