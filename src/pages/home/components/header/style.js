import styled from "styled-components";
import { deviceSize } from "../../../../utils/deviceSize";
// import { deviceSize } from "../../../../utils/deviceSize";

// HEADER
export const Header = styled.main`
	height: 100vh;
	padding-top: 7rem;
	overflow: hidden;

	@media ${deviceSize.medium} {
		height: 68vh;
	}

	@media ${deviceSize.small} {
		height: 100vh;
	}
`;

export const Header_Container = styled.div`
	text-align: center;
	height: 100%;
	position: relative;
`;

// CTA
export const Div_CTA = styled.div`
	margin-top: 2.5rem;
	display: flex;
	gap: 1.2rem;
	justify-content: center;
`;

// SOCIALS
export const Div_Socials = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.8rem;
	position: absolute;
	left: 0;
	bottom: 3rem;

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

// ME
export const Div_Me = styled.div`
	background: linear-gradient(var(--color-primary), transparent);
	width: 22rem;
	height: 30rem;
	position: absolute;
	left: calc(50% - 11rem);
	margin-top: 4rem;
	border-radius: 12rem 12rem 0 0;
	overflow: hidden;
	padding: 5rem 1.5rem 1.5rem 1.5rem;
`;

// SCROLL DOWN
export const ScrollDown = styled.a`
	position: absolute;
	right: 0;
	bottom: 5rem;
	transform: rotate(90deg);
	font-weight: 300;
	font-size: 0.9rem;

	@media ${deviceSize.small} {
		display: none;
	}
`;
