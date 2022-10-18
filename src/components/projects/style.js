import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

export const Title = styled.h3`
	/*Box model stuff*/
	margin-bottom: 2rem;
	/*Typography stuff*/
	text-align: center;

	@media ${deviceSize.small} {
		/*Box model stuff*/
		margin-bottom: 0.8rem;
	}
`;

export const Image = styled.img`
	/*Box model stuff*/
	width: 85%;
	margin: 2rem auto 1rem;
	border: var(--border) solid var(--color-primary);
	border-radius: 0.5rem;
`;

export const ProjectInfoContainer = styled.div`
	/*Box model stuff*/
	width: fit-content;
	margin: 0 auto 3rem;
	padding: 2rem 4rem;
	border: var(--border) solid var(--color-primary);
	border-radius: 1rem;
	background-color: var(--color-bg-variant);

	@media ${deviceSize.small} {
		/*Box model stuff*/
		padding: 1rem 2rem;
	}
`;

export const LinkContainer = styled.div`
	/*Display stuff*/
	display: flex;
	justify-content: center;
	/*Miscellaneous*/
	gap: 50px;

	@media ${deviceSize.small} {
		/*Miscellaneous*/
		gap: 30px;
	}
`;

export const SwiperWrapper = styled.div`
	display: flex;

	& .container {
		/*Box model stuff*/
		width: 60rem;
		height: fit-content;
		/*Miscellaneous*/
		overflow: hidden;

		@media ${deviceSize.medium} {
			/*Box model stuff*/
			width: 35rem;
		}

		@media ${deviceSize.small} {
			/*Box model stuff*/
			width: min(20rem, 100%);
		}
	}
`;
