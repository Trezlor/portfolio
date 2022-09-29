import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

// Header

export const Header = styled.main`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	justify-content: center;
	/*Box model stuff*/
	width: fit-content;
	font-family: "Roboto Mono", monospace;
	height: 100vh;
	/* border: 1px solid red; */
	/*Miscellaneous*/
	margin-inline: auto;
	gap: 10px;
`;

export const Header_H1 = styled.h1`
	/*Typography stuff*/
	font-size: 2.1rem;

	@media ${deviceSize.laptop} {
		/*Typography stuff*/
		font-size: 4.2rem;
	}
`;

export const Header_H2 = styled.h2`
	/*Typography stuff*/
	font-size: 1.1rem;

	@media ${deviceSize.laptop} {
		/*Typography stuff*/
		font-size: 1.8rem;
	}
`;

export const Header_H3 = styled.h3`
	/*Box model stuff*/
	margin-left: 4px;
	/*Typography stuff*/
	font-size: 0.9rem;

	@media ${deviceSize.laptop} {
		/*Typography stuff*/
		font-size: 1.3rem;
	}
`;

export const Section = styled.section`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	align-items: center;
	/*Box model stuff*/
	/* border: 1px solid red; */
	/*Miscellaneous*/
	margin-inline: 8rem auto 0;

	div > div > h2,
	div > div > h5 {
		text-align: center;
		color: var(--color-light);
	}

	@media ${deviceSize.laptop} {
	}
`;

export const Paragraph = styled.p`
	/*Typography stuff*/
	font-size: 14px;
	padding: 0.5rem;
	text-align: center;

	@media ${deviceSize.laptop} {
		/*Typography stuff*/
		font-size: 20px;
	}
`;

export const Grid_Div = styled.div`
	display: grid;
	/* border: 2px solid black; */
	margin-inline: 2.5vw;
	grid-gap: 1rem;
	place-items: top;
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

export const Flex_Div = styled.div`
	/* background-color: red; */
	/* border: 2px solid black; */

	@media ${deviceSize.laptop} {
	}
`;
