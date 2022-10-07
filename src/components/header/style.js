import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

// HEADER
export const Header = styled.main`
	/*Box model stuff*/
	min-height: 100vh;
	padding-top: 7rem;
	/*Miscellaneous*/
	overflow: hidden;

	@media ${deviceSize.small} {
		/*Box model stuff*/
		padding-top: 1rem;
	}
`;

export const Header_Container = styled.div`
	/*Positioning stuff*/
	position: relative;
	/*Box model stuff*/
	height: 100%;
	/*Typography stuff*/
	text-align: center;
`;

// CTA
export const Div_CTA = styled.div`
	/*Display stuff*/
	display: flex;
	justify-content: center;
	/*Box model stuff*/
	margin-top: 2.5rem;
	/*Miscellaneous*/
	gap: 1.2rem;
`;

// ME
export const Div_Me = styled.div`
	/*Box model stuff*/
	width: min(22rem, 100%);
	height: min(30rem, auto);
	margin-top: 4rem;
	padding: 3rem 1.5rem 1.5rem 1.5rem;
	border-radius: 0 10rem 0 0;
	background: linear-gradient(var(--color-primary), transparent);
	/*Miscellaneous*/
	margin-inline: auto;
	overflow: hidden;

	& img {
		/*Miscellaneous*/
		/* mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7)); */
	}
`;
