import styled, { keyframes } from 'styled-components';
import { deviceSize } from '../../../../utils/deviceSize';

////////////////////////////////////////////////////////////////////////////////////////////
//
//    KEYFRAMES ANIMATIONS
//
////////////////////////////////////////////////////////////////////////////////////////////
const menuOpenLine1 = keyframes`
0% {
	transform: none;
	width: 100%;
	top: 0;
}
50% {
	transform: none;
	width: 0;
	top: 0.5rem;
}
51% {
	transform: rotate(45deg);
	width: 0;
	top: 0.5rem;
	background: var(--color-bg);
}
100% {
	transform: rotate(45deg);
	width: 100%;
	top: 0.5rem;
	background: var(--color-bg);
}
`;

const menuOpenLine2 = keyframes`
0% {
	width: 100%;
	top: 0.5rem;
}
50% {
	width: 0%;
	top: 0.5rem;
}
100% {
	width: 0%;
	top: 0.5rem;
}
`;

const menuOpenLine3 = keyframes`
0% {
	transform: none;
	width: 100%;
	top: 1rem;
}
50% {
	transform: none;
	width: 0;
	top: 0.5rem;
}
51% {
	transform: rotate(-45deg);
	width: 0;
	top: 0.5rem;
	background: var(--color-bg);
}
100% {
	transform: rotate(-45deg);
	width: 100%;
	top: 0.5rem;
	background: var(--color-bg);
}
`;

const menuCloseLine1 = keyframes`
0%{
	transform: rotate(45deg);
	width: 100%;
	top: 0.5rem;
	background: var(--color-bg);
}
50% {
	transform: rotate(45deg);
	width: 0;
	top: 0.5rem;
	background: var(--color-bg);
}
51% {
	transform: rotate(0);
	width: 0.5rem;
	top: 0.5rem;
}
100% {
	transform: rotate(0);
	width: 100%;
	top: 0;
}
`;

const menuCloseLine2 = keyframes`
0%{
	width: 0;
	top: 0.5rem;
}
50% {
	width: 0;
	top: 0.5rem;
}
51% {
	width: 0;
	top: 0.5rem;
}
100% {
	width: 100%;
	top: 0.5rem;
}
`;

const menuCloseLine3 = keyframes`
0% {
	transform: rotate(-45deg);
	width: 100%;
	top: 0.5rem;
	background: var(--color-bg);
}
50% {
	transform: rotate(-45deg);
	width: 0;
	top: 0.5rem;
	background: var(--color-bg);
}
51% {
	transform: rotate(0);
	width: 0;
	top: 0.5rem;
}
100% {
	transform: rotate(0);
	width: 100%;
	top: 1rem;
}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    HAMBURGER MENU
//
////////////////////////////////////////////////////////////////////////////////////////////
export const burgerMenuContainer = styled.div`
	width: 1.6rem;
	height: 1.2rem;
	position: fixed;
	display: flex;
	top: 2rem;
	left: 2rem;
	justify-content: center;
	z-index: 4;

	&:hover {
		cursor: pointer;
	}
`;

export const line1 = styled.div`
	height: 0.2rem;
	border-radius: 2rem;
	background: white;
	position: absolute;
	background: var(--color-primary);

	&.open {
		animation: ${menuOpenLine1} 0.4s forwards;
	}
	&.closed {
		animation: ${menuCloseLine1} 0.4s forwards;
	}
`;

export const line2 = styled.div`
	height: 0.2rem;
	border-radius: 2rem;
	background: white;
	position: absolute;
	background: var(--color-primary);

	&.open {
		animation: ${menuOpenLine2} 0.4s forwards;
	}
	&.closed {
		animation: ${menuCloseLine2} 0.4s forwards;
	}
`;

export const line3 = styled.div`
	height: 0.2rem;
	border-radius: 2rem;
	background: white;
	position: absolute;
	background: var(--color-primary);

	&.open {
		animation: ${menuOpenLine3} 0.4s forwards;
	}
	&.closed {
		animation: ${menuCloseLine3} 0.4s forwards;
	}
`;

export const menu = styled.nav`
	position: fixed;
	top: 0;
	bottom: 0;
	width: min(600px, 100vw);
	display: flex;
	align-items: center;
	justify-content: center;
	translate: calc(-100%);
	background: var(--color-primary);
	transition: var(--transition);
	z-index: 2;

	&.open {
		translate: initial;
	}

	& ul {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		align-items: center;
	}

	& a {
		color: var(--color-bg);
		font-size: 1.8rem;
		transition: none;

		&:hover {
			cursor: pointer;
			color: var(--color-white);
			text-shadow: var(--text-shadow);
		}
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    LIGHT & DARK THEME TOGGLE BUTTON
//
////////////////////////////////////////////////////////////////////////////////////////////
export const ThemeToggleButton = styled.div`
	/* width: min(600px, 100vw); */
	position: absolute;
	z-index: 3;
	/*Positioning stuff*/
	right: 2rem;
	display: flex;
	justify-content: end;
	top: 1.7rem;
	/* translate: calc(-100%); */
	transition: var(--transition);

	&.open {
		/* translate: initial; */
	}

	& label {
		/*Display stuff*/
		display: flex;
		align-items: center;
		justify-content: space-between;
		/*Box model stuff*/
		/* padding: 15px; */
		/*Miscellaneous*/
		cursor: pointer;

		& .moon {
			color: var(--color-bg);
			transition: var(--transition);
			font-size: 1.8rem;

			&:hover {
				scale: 1.15;
			}
		}
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    SOCIALS
//
////////////////////////////////////////////////////////////////////////////////////////////
export const SocialsLinks = styled.div`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	align-items: center;
	/*Positioning stuff*/
	position: fixed;
	left: 2rem;
	bottom: 3rem;
	/*Typography stuff*/
	font-size: 1.5rem;
	/*Miscellaneous*/
	gap: 0.8rem;

	&:before {
		/*Display stuff*/
		content: '';
		/*Box model stuff*/
		width: 1px;
		height: 2rem;
		background: var(--color-primary);
	}

	&:after {
		/*Display stuff*/
		content: '';
		/*Box model stuff*/
		width: 1px;
		height: 2rem;
		background: var(--color-primary);
	}

	@media ${deviceSize.tablet} {
		/*Display stuff*/
		display: none;
	}
`;
