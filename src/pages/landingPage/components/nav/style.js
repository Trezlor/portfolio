import styled, { keyframes } from 'styled-components';
import { deviceSize } from '../../../../utils/deviceSize';

////////////////////////////////////////////////////////////////////////////////////////////
//
//    KEYFRAMES ANIMATIONS
//
////////////////////////////////////////////////////////////////////////////////////////////
const menuOpenLine1 = keyframes`
0% {
	top: 0;
	transform: none;
	width: 100%;
}
50% {
	top: 0.5rem;
	transform: none;
	width: 0;
}
51% {
	background: var(--color-bg);
	top: 0.5rem;
	transform: rotate(45deg);
	width: 0;
}
100% {
	background: var(--color-bg);
	top: 0.5rem;
	transform: rotate(45deg);
	width: 100%;
}
`;

const menuOpenLine2 = keyframes`
0% {
	top: 0.5rem;
	width: 100%;
}
50% {
	top: 0.5rem;
	width: 0%;
}
100% {
	top: 0.5rem;
	width: 0%;
}
`;

const menuOpenLine3 = keyframes`
0% {
	top: 1rem;
	transform: none;
	width: 100%;
}
50% {
	top: 0.5rem;
	transform: none;
	width: 0;
}
51% {
	background: var(--color-bg);
	top: 0.5rem;
	transform: rotate(-45deg);
	width: 0;
}
100% {
	background: var(--color-bg);
	top: 0.5rem;
	transform: rotate(-45deg);
	width: 100%;
}
`;

const menuCloseLine1 = keyframes`
0%{
	background: var(--color-bg);
	top: 0.5rem;
	transform: rotate(45deg);
	width: 100%;
}
50% {
	background: var(--color-bg);
	top: 0.5rem;
	transform: rotate(45deg);
	width: 0;
}
51% {
	top: 0.5rem;
	transform: rotate(0);
	width: 0.5rem;
}
100% {
	top: 0;
	transform: rotate(0);
	width: 100%;
}
`;

const menuCloseLine2 = keyframes`
0%{
	top: 0.5rem;
	width: 0;
}
50% {
	top: 0.5rem;
	width: 0;
}
51% {
	top: 0.5rem;
	width: 0;
}
100% {
	top: 0.5rem;
	width: 100%;
}
`;

const menuCloseLine3 = keyframes`
0% {
	background: var(--color-bg);
	top: 0.5rem;
	transform: rotate(-45deg);
	width: 100%;
}
50% {
	background: var(--color-bg);
	top: 0.5rem;
	transform: rotate(-45deg);
	width: 0;
}
51% {
	top: 0.5rem;
	transform: rotate(0);
	width: 0;
}
100% {
	top: 1rem;
	transform: rotate(0);
	width: 100%;
}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    HAMBURGER MENU
//
////////////////////////////////////////////////////////////////////////////////////////////
export const burgerMenuContainer = styled.div`
	display: flex;
	height: 1.2rem;
	justify-content: center;
	left: 2rem;
	position: fixed;
	top: 2rem;
	width: 1.6rem;
	z-index: 4;

	:hover {
		cursor: pointer;
	}
`;

export const line1 = styled.div`
	background: var(--color-primary);
	border-radius: 2rem;
	height: 0.2rem;
	position: absolute;

	&.open {
		animation: ${menuOpenLine1} 0.4s forwards;
	}

	&.closed {
		animation: ${menuCloseLine1} 0.4s forwards;
	}
`;

export const line2 = styled.div`
	background: var(--color-primary);
	border-radius: 2rem;
	height: 0.2rem;
	position: absolute;

	&.open {
		animation: ${menuOpenLine2} 0.4s forwards;
	}

	&.closed {
		animation: ${menuCloseLine2} 0.4s forwards;
	}
`;

export const line3 = styled.div`
	background: var(--color-primary);
	border-radius: 2rem;
	height: 0.2rem;
	position: absolute;

	&.open {
		animation: ${menuOpenLine3} 0.4s forwards;
	}

	&.closed {
		animation: ${menuCloseLine3} 0.4s forwards;
	}
`;

export const menu = styled.nav`
	align-items: center;
	background: var(--color-primary);
	bottom: 0;
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0;
	transition: var(--transition);
	translate: calc(-100%);
	width: min(600px, 100vw);
	z-index: 2;

	&.open {
		translate: initial;
	}

	> ul {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		a {
			color: var(--color-bg);
			font-size: 1.8rem;
			transition: none;

			:hover {
				color: var(--color-white);
				cursor: pointer;
				text-shadow: var(--text-shadow);
			}
		}
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    LIGHT & DARK THEME TOGGLE BUTTON
//
////////////////////////////////////////////////////////////////////////////////////////////
export const ThemeToggleButton = styled.div`
	display: flex;
	justify-content: end;
	position: absolute;
	right: 2rem;
	top: 1.7rem;
	transition: var(--transition);
	z-index: 3;

	> label {
		align-items: center;
		cursor: pointer;
		display: flex;
		justify-content: space-between;

		.moon {
			color: var(--color-bg);
			font-size: 1.8rem;
			transition: var(--transition);

			:hover {
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
	align-items: center;
	bottom: 2rem;
	display: flex;
	font-size: 2rem;
	gap: 2rem;
	justify-content: space-between;
	left: 4rem;
	position: absolute;
	right: 4rem;

	> a {
		color: var(--color-bg);
		transition: none;

		:hover {
			color: var(--color-white);
		}

		> * {
			vertical-align: middle;
		}
	}

	:before {
		background: var(--color-bg);
		content: '';
		height: 2px;
		width: 3rem;
	}

	:after {
		background: var(--color-bg);
		content: '';
		height: 2px;
		width: 3rem;
	}

	@media ${deviceSize.mobile} {
		:before {
			width: 2rem;
		}

		:after {
			width: 2rem;
		}
	}

	@media (max-width: 470px) {
		left: 2rem;
		right: 2rem;
	}
`;
