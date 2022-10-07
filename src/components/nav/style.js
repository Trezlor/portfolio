import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

export const Nav = styled.nav`
	background: rgba(0, 0, 0, 0.3);
	width: max-content;
	display: block;
	padding: 0.7rem 1.7rem;
	z-index: 2;
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	bottom: 2rem;
	display: flex;
	gap: 0.8rem;
	border-radius: 3rem;
	backdrop-filter: blur(15px);

	@media ${deviceSize.medium} {
	}

	@media ${deviceSize.small} {
	}
`;

export const Nav_Li = styled.li`
	> * {
		background: transparent;
		padding: 0.9rem;
		border-radius: 50%;
		display: flex;
		color: var(--color-light);
		font-size: 1.1rem;
		cursor: pointer;
	}
	> :hover {
		background: rgba(0, 0, 0, 0.2);
	}
	> .active {
		background: var(--color-bg);
		color: var(--color-white);
	}

	@media ${deviceSize.medium} {
	}

	@media ${deviceSize.small} {
	}
`;
export const Nav_A = styled.a`
	background: transparent;
	padding: 0.9rem;
	border-radius: 50%;
	display: flex;
	color: var(--color-light);
	font-size: 1.1rem;

	&:hover {
		background: rgba(0, 0, 0, 0.2);
	}

	&.active {
		background: var(--color-bg);
		color: var(--color-white);
	}

	@media ${deviceSize.medium} {
	}

	@media ${deviceSize.small} {
	}
`;

// SOCIALS
export const Div_Socials = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.8rem;
	position: absolute;
	left: 2rem;
	bottom: 3rem;
	font-size: 1.5rem;

	&:after {
		content: "";
		width: 1px;
		height: 2rem;
		background: var(--color-primary);
	}

	@media ${deviceSize.small} {
		display: none;
	}
`;

// SCROLL DOWN
export const ScrollDown = styled.a`
	position: absolute;
	right: -1rem;
	bottom: 6rem;
	transform: rotate(90deg);
	font-weight: 300;
	font-size: 1.5rem;

	@media ${deviceSize.small} {
		display: none;
	}
`;
