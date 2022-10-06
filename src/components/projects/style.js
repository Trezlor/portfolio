import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

export const Title = styled.h3`
	text-align: center;
	margin-bottom: 2rem;

	@media ${deviceSize.small} {
		margin-bottom: 0.8rem;
	}
`;

export const Image = styled.img`
	width: 85%;
	margin: 0 auto 1rem;
	border: var(--border) solid var(--color-primary);
	border-radius: 0.5rem;
`;

export const ProjectInfoContainer = styled.div`
	background-color: var(--color-bg-variant);
	padding: 2rem 4rem;
	border-radius: 1rem;
	width: fit-content;
	margin: 0 auto 3rem;
	border: var(--border) solid var(--color-primary);

	@media ${deviceSize.small} {
		padding: 1rem 2rem;
	}
`;

export const LinkContainer = styled.div`
	display: flex;
	gap: 50px;
	justify-content: center;

	@media ${deviceSize.small} {
		gap: 30px;
	}
`;

export const SwiperWrapper = styled.div`
	& .container {
		width: 60rem;

		@media ${deviceSize.medium} {
			width: 35rem;
		}

		@media ${deviceSize.small} {
			width: min(20rem, 100%);
		}
	}
`;
