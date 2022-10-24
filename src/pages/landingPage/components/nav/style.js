import styled from 'styled-components';
import { deviceSize } from '../../../../utils/deviceSize';

export const Nav_Mobile = styled.nav`
	/*Display stuff*/
	display: none;
	/*Positioning stuff*/
	position: fixed;
	left: 50%;
	bottom: 1rem;
	z-index: 1;
	/*Box model stuff*/
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
		/*Typography stuff*/
		font-size: 1.1rem;
	}

	& .active {
		/*Typography stuff*/
		color: var(--color-white);
		/*Miscellaneous*/
		box-shadow: 0px 0px 10px 2px var(--color-primary);
	}

	@media ${deviceSize.size_1130} {
		/*Display stuff*/
		display: flex;
	}
`;

export const Nav_Desktop = styled.nav`
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

	@media ${deviceSize.size_1130} {
		/*Display stuff*/
		display: none;
	}
`;

export const Link_Container = styled.div`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	/*Box model stuff*/
	padding: 0.7rem 0.5rem;
	border-radius: 0.8rem;
	background: rgba(0, 0, 0, 0.3);
	/*Miscellaneous*/
	gap: 0.8rem;

	&:hover {
		& .link {
			& p {
				/*Positioning stuff*/
				left: 4rem;
				/*Manipulations stuff*/
				opacity: 1;
			}
		}
	}

	& .link {
		/*Display stuff*/
		display: flex;
		align-items: center;
		/*Positioning stuff*/
		position: relative;
		/*Box model stuff*/
		padding: 0.9rem;
		border-radius: 0.8rem;
		/*Typography stuff*/
		font-size: 1.1rem;
		/*Miscellaneous*/
		gap: 0.8rem;
		cursor: pointer;

		&.active {
			/*Typography stuff*/
			color: var(--color-white);
			/*Miscellaneous*/
			box-shadow: 0px 0px 10px 2px var(--color-primary);
		}

		& p {
			/*Positioning stuff*/
			position: absolute;
			left: 6rem;
			/*Typography stuff*/
			font-size: 1rem;
			/*Manipulations stuff*/
			transition: var(--transition);
			opacity: 0;
			/*Miscellaneous*/
			white-space: nowrap;
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

	@media ${deviceSize.size_1130} {
		/*Display stuff*/
		display: none;
	}
`;
