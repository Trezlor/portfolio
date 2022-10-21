import styled, { keyframes } from "styled-components";
import { deviceSize } from "../../../../utils/deviceSize";

const tiltShaking = keyframes`
		0% {
			transform: translate(0, 0) rotate(0deg);
			scale: 1;
		}
		25% {
			transform: translate(5px, 5px) rotate(5deg);
			scale: 1.1;
		}
		50% {
			transform: translate(0, 0) rotate(0eg);
			scale: 1.2;
		}
		75% {
			transform: translate(-5px, 5px) rotate(-5deg);
			scale: 1.1;
		}
		100% {
			transform: translate(0, 0) rotate(0deg);
			scale: 1;
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

export const Hover_Card = styled.div`
	color: black;
	position: absolute;
	font-size: 1rem;
	padding: 1rem 0.5rem 0.5rem;
	background: var(--color-note);
	border-radius: 5px;
	left: -4rem;
	transform: rotate(-25deg);

	@media ${deviceSize.medium} {
		display: none;
	}
`;

export const Pin = styled.div`
	color: red;
	position: absolute;
	rotate: calc(-50deg);
	top: -1.4rem;
	left: 2.5rem;
	font-size: 1.5rem;
`;

export const Letter_Effect = styled.span`
	/* position: relative; */
	transition: all 500ms ease;

	&:hover {
		cursor: pointer;
	}

	&.hovered {
		color: var(--color-primary);
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
