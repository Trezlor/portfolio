import styled from 'styled-components';
import { deviceSize } from '../../../../utils/deviceSize';

export const MobileNav = styled.nav`
	/*Display stuff*/
	display: none;
	/*Positioning stuff*/
	position: fixed;
	left: 50%;
	bottom: 1rem;
	z-index: 2;
	/*Box model stuff*/
	width: max-content;
	padding: 0.7rem 0.8rem;
	border-radius: 0.8rem;
	background: rgba(0, 0, 0, 0.3);
	/*Manipulations stuff*/
	transform: translateX(-50%);
	/*Miscellaneous*/
	gap: 0.8rem;
	backdrop-filter: blur(10px);

	& .link {
		/*Display stuff*/
		display: flex;
		/*Box model stuff*/
		padding: 0.9rem;
		border-radius: 0.8rem;
		background: transparent;
		/*Typography stuff*/
		font-size: 1.1rem;
		color: var(--color-primary);
		/*Miscellaneous*/
		cursor: pointer;
	}

	& :hover {
		color: var(--color-white);
	}

	& .active {
		box-shadow: 0px 0px 10px 2px var(--color-primary);
		/*Typography stuff*/
		color: var(--color-white);
	}

	@media ${deviceSize.size_1130} {
		display: flex;
	}
`;

export const DesktopNav = styled.nav`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	/*Positioning stuff*/
	position: fixed;
	align-items: center;
	right: 1rem;
	bottom: 3rem;
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

	@media ${deviceSize.size_1130} {
		display: none;
	}
`;

export const LinkWrapper = styled.div`
	background: rgba(0, 0, 0, 0.3);
	border-radius: 0.8rem;
	padding: 0.7rem 0.5rem;
	gap: 0.8rem;
	display: flex;
	flex-direction: column;

	& .link__category {
		display: flex;
		align-items: center;
		gap: 1rem;
		justify-content: end;

		& :hover {
			color: var(--color-white);
			& p {
				color: var(--color-white);
			}
		}

		& .link {
			/*Display stuff*/
			display: flex;
			/*Box model stuff*/
			padding: 0.9rem;
			border-radius: 0.8rem;
			background: transparent;
			/*Typography stuff*/
			font-size: 1.1rem;
			color: var(--color-primary);
			/*Miscellaneous*/
			cursor: pointer;
		}

		& p {
			color: var(--color-primary);
		}

		& .active {
			/*Box model stuff*/
			box-shadow: 0px 0px 10px 2px var(--color-primary);

			/* background: var(--color-primary); */
			/*Typography stuff*/
			color: var(--color-white);

			& p {
				color: var(--color-white);
			}
		}
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    SOCIALS
//
////////////////////////////////////////////////////////////////////////////////////////////

export const Socials_Links = styled.div`
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

	@media ${deviceSize.size_1130} {
		/*Display stuff*/
		display: none;
	}
`;
