import styled, { keyframes } from 'styled-components';
import { deviceSize } from '../../../../utils/deviceSize';

////////////////////////////////////////////////////////////////////////////////////////////
//
//    KEYFRAMES ANIMATIONS
//
////////////////////////////////////////////////////////////////////////////////////////////
const tiltShaking = keyframes`
0% {
	transform: translate(0, 0) rotate(0deg);
	scale: 1;
}
25% {
	transform: translate(5px, -8px) rotate(5deg);
	scale: 1.2;
}
50% {
	scale: 1.4;
}
75% {
	transform: translate(-5px, -8px) rotate(-5deg);
	scale: 1.2;
}
100% {
	transform: translate(0, 0) rotate(0deg);
	scale: 1;
}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    MAIN
//
////////////////////////////////////////////////////////////////////////////////////////////
export const Main = styled.main`
	min-height: 100vh;
	padding-top: 7rem;

	@media ${deviceSize.mobile} {
		padding-top: 2rem;
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    HOVER EFFECT
//
////////////////////////////////////////////////////////////////////////////////////////////
export const HoverCard = styled.div`
	border-radius: 0.5rem;
	border: var(--border) solid var(--color-primary);
	box-shadow: 0px 0px 10px var(--color-primary);
	font-size: 0.8rem;
	left: -3.6rem;
	padding: 0.5em;
	position: absolute;
	top: 0.3rem;
	transform: rotate(-25deg);

	@media ${deviceSize.tablet} {
		display: none;
	}
`;

export const LetterEffect = styled.span`
	cursor: default;
	display: inline-block;
	transition: all 500ms ease;

	&.hovered {
		animation: ${tiltShaking} 0.49s;
		color: var(--color-primary);
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    CTA BUTTONS
//
////////////////////////////////////////////////////////////////////////////////////////////
export const CTAButtons = styled.div`
	display: flex;
	gap: 1.2rem;
	justify-content: center;
	margin-top: 2.5rem;
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    IMG
//
////////////////////////////////////////////////////////////////////////////////////////////
export const MeImg = styled.div`
	background: linear-gradient(var(--color-primary), transparent);
	border-radius: 0 10rem 0 0;
	height: min(30rem, auto);
	margin-inline: auto;
	margin-top: 4rem;
	overflow: hidden;
	padding: 3rem 1.5rem 0 1.5rem;
	width: min(26rem, 100%);

	img {
		mask-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 0.3)
		);
	}
`;
