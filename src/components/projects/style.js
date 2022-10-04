import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

export const Title = styled.h3`
	text-align: center;
	margin-bottom: 2rem;
`;

export const Image = styled.img`
	width: 100%;
	margin: 0 auto 1rem;
	border: 0.2rem solid var(--color-primary-variant);
	border-radius: 0.5rem;
`;

export const ProjectInfoContainer = styled.div`
	background-color: var(--color-bg-variant);
	padding: 2rem 4rem;
	border-radius: 1rem;
	width: fit-content;
	margin: 0 auto 3rem;

	@media ${deviceSize.small} {
		padding: 1rem 2rem;
	}
`;

export const LinkContainer = styled.div`
	display: flex;
	gap: 50px;
	justify-content: center;

	@media ${deviceSize.small} {
		gap: 10px;
	}
`;

export const SwiperWrapper = styled.h3`
	> * {
		width: 50rem;

		@media ${deviceSize.medium} {
			width: 35rem;
		}

		@media ${deviceSize.small} {
			width: 20rem;
		}
	}
`;
