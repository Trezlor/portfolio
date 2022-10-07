import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

export const Nav = styled.nav`
	/*Display stuff*/
	display: block;
	display: flex;
	/*Positioning stuff*/
	position: fixed;
	left: 50%;
	bottom: 2rem;
	z-index: 2;
	/*Box model stuff*/
	width: max-content;
	padding: 0.7rem 1.7rem;
	border-radius: 3rem;
	background: rgba(0, 0, 0, 0.3);
	/*Manipulations stuff*/
	transform: translateX(-50%);
	/*Miscellaneous*/
	gap: 0.8rem;
	backdrop-filter: blur(15px);
`;

export const Nav_Li = styled.li`
	> * {
		/*Display stuff*/
		display: flex;
		/*Box model stuff*/
		padding: 0.9rem;
		border-radius: 50%;
		background: transparent;
		/*Typography stuff*/
		font-size: 1.1rem;
		color: var(--color-light);
		/*Miscellaneous*/
		cursor: pointer;
	}
	> :hover {
		/*Box model stuff*/
		background: rgba(0, 0, 0, 0.2);
	}
	> .active {
		/*Box model stuff*/
		background: var(--color-bg);
		/*Typography stuff*/
		color: var(--color-white);
	}
`;

export const Nav_A = styled.a`
	/*Display stuff*/
	display: flex;
	/*Box model stuff*/
	padding: 0.9rem;
	border-radius: 50%;
	background: transparent;
	/*Typography stuff*/
	font-size: 1.1rem;
	color: var(--color-light);

	&:hover {
		/*Box model stuff*/
		background: rgba(0, 0, 0, 0.2);
	}

	&.active {
		/*Box model stuff*/
		background: var(--color-bg);
		/*Typography stuff*/
		color: var(--color-white);
	}
`;

// SOCIALS
export const Div_Socials = styled.div`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	align-items: center;
	/*Positioning stuff*/
	position: absolute;
	left: 2rem;
	bottom: 3rem;
	/*Typography stuff*/
	font-size: 1.5rem;
	/*Miscellaneous*/
	gap: 0.8rem;

	&:after {
		/*Display stuff*/
		content: "";
		/*Box model stuff*/
		width: 1px;
		height: 2rem;
		background: var(--color-primary);
	}

	@media ${deviceSize.small} {
		/*Display stuff*/
		display: none;
	}
`;

// SCROLL DOWN
export const ScrollDown = styled.a`
	/*Positioning stuff*/
	position: absolute;
	right: -1rem;
	bottom: 6rem;
	/*Typography stuff*/
	font-size: 1.5rem;
	font-weight: 300;
	/*Manipulations stuff*/
	transform: rotate(90deg);

	@media ${deviceSize.small} {
		/*Display stuff*/
		display: none;
	}
`;
