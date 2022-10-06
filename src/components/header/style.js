import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

// HEADER
export const Header = styled.main`
	min-height: 100vh;
	padding-top: 7rem;
	overflow: hidden;

	@media ${deviceSize.small} {
		padding-top: 1rem;
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

// ME
export const Div_Me = styled.div`
	background: linear-gradient(var(--color-primary), transparent);
	width: min(22rem, 100%);
	height: min(30rem, auto);
	margin-inline: auto;
	margin-top: 4rem;
	border-radius: 6rem 6rem 0 0;
	overflow: hidden;
	padding: 3rem 1.5rem 1.5rem 1.5rem;

	& img {
		mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7));
	}
`;
