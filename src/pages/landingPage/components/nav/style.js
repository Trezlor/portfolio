import styled from 'styled-components';
import { deviceSize } from '../../../../utils/deviceSize';

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
	background: rgba(0, 0, 0, 0.2);
	/*Miscellaneous*/
	gap: 0.8rem;

	& a {
		/*Display stuff*/
		display: flex;
		align-items: center;
		/*Box model stuff*/
		padding: 0.9rem;
		border-radius: 2rem;
		/*Typography stuff*/
		font-size: 1.1rem;
		/*Miscellaneous*/
		gap: 0.8rem;
		cursor: pointer;

		&:hover {
			background: var(--color-bg-light);
			& p {
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
			left: 4rem;
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
