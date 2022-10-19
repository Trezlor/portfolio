import styled, { keyframes } from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

const tiltShaking = keyframes`
		0% {
			transform: translate(0, 0) rotate(0deg);
		}
		25% {
			transform: translate(5px, 5px) rotate(5deg);
		}
		50% {
			transform: translate(0, 0) rotate(0eg);
		}
		75% {
			transform: translate(-5px, 5px) rotate(-5deg);
		}
		100% {
			transform: translate(0, 0) rotate(0deg);
		}
	`;

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

export const Letter_Effect = styled.span`
	/* position: relative; */
	transition: all 200ms ease;

	&.hovered {
		color: var(--color-primary);
		cursor: pointer;
		display: inline-block;
		animation: ${tiltShaking} 0.5s;
	}
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
