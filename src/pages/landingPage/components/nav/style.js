import styled from 'styled-components';
import { deviceSize } from '../../../../utils/deviceSize';

////////////////////////////////////////////////////////////////////////////////////////////
//
//    HAMBURGER MENU
//
////////////////////////////////////////////////////////////////////////////////////////////
export const burgerMenuContainer = styled.div`
	width: 2rem;
	aspect-ratio: 1/1;
	position: absolute;
	top: 1rem;
	left: 1rem;
`;
export const burgerMenu = styled.div`
	width: 2rem;
	height: 0.3rem;
	border-radius: 2rem;
	position: absolute;

	&.open {
		&:before,
		:after {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			background: var(--color-white);
		}

		&:before {
			transform: rotate(45deg) scaleX(1) translateZ(0);
		}

		&:after {
			transform: rotate(-45deg) scaleX(1) translateZ(0);
		}
	}

	&.closed {
		background: var(--color-white);

		&:before,
		:after {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			background: var(--color-white);
		}

		&:before {
			bottom: 0.5rem;
			transform: rotate(0) scaleX(1) translateZ(0);
		}

		&:after {
			top: 0.5rem;

			transform: rotate(-0) scaleX(1) translateZ(0);
		}
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    LIGHT & DARK THEME TOGGLE BUTTON
//
////////////////////////////////////////////////////////////////////////////////////////////
export const ThemeToggleButton = styled.div`
	/*Positioning stuff*/
	position: fixed;

	& label {
		/*Display stuff*/
		display: flex;
		align-items: center;
		justify-content: space-between;
		/*Box model stuff*/
		padding: 15px;
		/*Miscellaneous*/
		cursor: pointer;

		& span {
			/*Display stuff*/
			display: flex;
			align-items: center;
			justify-content: space-between;
			/*Positioning stuff*/
			position: relative;
			/*Box model stuff*/
			width: 50px;
			height: 26px;
			border: var(--border) solid var(--color-primary);
			border-radius: 15px;
			/*Manipulations stuff*/
			transition: transform 0.3s;
			/*Miscellaneous*/
			padding-inline: 0.3rem;

			&::before,
			&::after {
				/*Display stuff*/
				content: '';
				/*Positioning stuff*/
				position: absolute;
			}

			&::before {
				/*Positioning stuff*/
				left: 1px;
				top: 1px;
				z-index: 1;
				/*Box model stuff*/
				height: calc(100% - 2px);
				border-radius: 50%;
				background: var(--color-primary);
				/*Manipulations stuff*/
				transition: transform 0.3s;
				/*Miscellaneous*/
				aspect-ratio: 1/1;
			}
		}
	}

	& [type='checkbox']:checked + label span::before {
		/*Manipulations stuff*/
		transform: translateX(24px);
	}

	& [type='checkbox']:checked + label span::after {
		/*Positioning stuff*/
		left: 8px;
		/*Box model stuff*/
		width: 14px;
		height: 14px;
		background-size: 14px 14px;
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
	right: 2rem;
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

////////////////////////////////////////////////////////////////////////////////////////////
//
//    MOBILE
//
////////////////////////////////////////////////////////////////////////////////////////////
export const NavMobile = styled.nav`
	/*Display stuff*/
	display: none;
	/*Positioning stuff*/
	position: fixed;
	left: 50%;
	bottom: 1rem;
	z-index: 1;
	/*Box model stuff*/
	padding: 0.7rem 0.8rem;
	border-radius: 2rem;
	background: rgba(0, 0, 0, 0.3);
	/*Manipulations stuff*/
	transform: translateX(-50%);
	/*Miscellaneous*/
	gap: 0.8rem;
	backdrop-filter: blur(10px);

	& a {
		/*Display stuff*/
		display: flex;
		/*Box model stuff*/
		padding: 0.9rem;
		border-radius: 2rem;
		/*Typography stuff*/
		font-size: 1.1rem;
	}

	& .active {
		/*Box model stuff*/
		background: var(--color-primary-variant);
		/*Typography stuff*/
		color: var(--color-white);
	}

	@media ${deviceSize.tablet} {
		/*Display stuff*/
		display: flex;
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    DESKTOP
//
////////////////////////////////////////////////////////////////////////////////////////////
export const NavDesktop = styled.nav`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	align-items: center;
	/*Positioning stuff*/
	position: fixed;
	left: 1rem;
	bottom: 3rem;
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

export const LinkContainer = styled.div`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	/*Box model stuff*/
	padding: 0.7rem 0.5rem;
	border-radius: 2rem;
	/*Miscellaneous*/
	gap: 0.8rem;
	/* transition: var(--transition); */

	& a {
		/*Display stuff*/
		display: flex;
		align-items: center;
		/*Box model stuff*/
		padding: 0.9rem;
		border-radius: 2rem;
		/*Typography stuff*/
		font-size: 1.3rem;
		/*Manipulations stuff*/
		/*Miscellaneous*/
		gap: 0.8rem;
		cursor: pointer;

		& p {
			/*Display stuff*/
			display: none;
			/*Positioning stuff*/
			position: absolute;
			left: 4rem;
			/*Typography stuff*/
			font-size: 1rem;
			color: var(--color-primary);
			/*Miscellaneous*/
			white-space: nowrap;
			backdrop-filter: blur(5px);
		}

		&:hover {
			/*Box model stuff*/
			background: var(--color-bg-contrast);

			& p {
				/*Display stuff*/
				display: initial;
				/*Typography stuff*/
				color: var(--color-primary);
				/*Manipulations stuff*/
				opacity: 1;
			}
		}

		&.active {
			/*Box model stuff*/
			background: var(--color-primary-variant);
			/*Typography stuff*/
			color: var(--color-white);
		}

		& p {
			/*Positioning stuff*/
			position: absolute;
			left: 4.5rem;
			/*Typography stuff*/
			font-size: 1rem;
			color: var(--color-primary);
			/*Manipulations stuff*/
			transition: var(--transition);
			opacity: 0;
			/*Miscellaneous*/
			white-space: nowrap;
			backdrop-filter: blur(5px);
		}
	}
`;
