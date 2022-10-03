import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

// HEADER
export const Header = styled.main`
	height: 100vh;
	padding-top: 7rem;
	overflow: hidden;
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

// ME
export const Div_Me = styled.div`
	background: linear-gradient(var(--color-primary), transparent);
	width: 22rem;
	height: 30rem;
	position: absolute;
	left: calc(50% - 11rem);
	/* bottom: 0; */
	margin-top: 4rem;
	border-radius: 12rem 12rem 0 0;
	overflow: hidden;
	padding: 5rem 1.5rem 1.5rem 1.5rem;

	@media ${deviceSize.medium} {
		/* bottom: unset; */
	}
`;