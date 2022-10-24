import styled, { keyframes } from 'styled-components';
import { deviceSize } from '../../../../utils/deviceSize';

const tiltShaking = keyframes`
		0% {
			transform: translate(0, 0) rotate(0deg);
			scale: 1;
		}
		25% {
			transform: translate(10px, -10px) rotate(5deg);
			scale: 1.2;

		}
		50% {
			scale: 1.4;
		}
		75% {
			transform: translate(-10px, -10px) rotate(-5deg);
			scale: 1.2;
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

	@media ${deviceSize.size_600} {
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
	color: var(--color-white);
	position: absolute;
	font-size: 0.8rem;
	padding: 0.5em;
	border: var(--border) solid var(--color-primary);
	background: var(--color-bg-transparent);
	border-radius: 5px;
	top: 0.3rem;
	left: -3.6rem;
	transform: rotate(-25deg);
	box-shadow: 0px 0px 10px var(--color-primary);

	@media ${deviceSize.size_1130} {
		display: none;
	}
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
	width: min(26rem, 100%);
	height: min(30rem, auto);
	margin-top: 4rem;
	padding: 3rem 1.5rem 0 1.5rem;
	border-radius: 0 10rem 0 0;
	background: linear-gradient(
		var(--color-primary),
		transparent
	);
	/*Miscellaneous*/
	margin-inline: auto;
	overflow: hidden;

	& img {
		/*Miscellaneous*/
		/* mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7)); */
	}
`;
