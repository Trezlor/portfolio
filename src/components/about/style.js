import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

export const Content = styled.div`
	& p {
		margin: 2rem 0 2.6rem;
		color: var(--color-light);

		@media ${deviceSize.medium} {
			margin: 1rem 0 1.5rem;
		}

		@media ${deviceSize.small} {
			margin: 1.5rem 0;
		}
	}
	@media ${deviceSize.small} {
		text-align: center;
	}
`;

export const Container = styled.div`
	display: grid;
	grid-template-columns: 35% 50%;
	gap: 15%;

	@media ${deviceSize.medium} {
		grid-template-columns: 1fr;
		gap: 0;
	}
`;

export const AboutMe = styled.div`
	width: 100%;
	aspect-ratio: 1/1;
	border-radius: 2rem;
	background: linear-gradient(45deg, transparent, var(--color-primary), transparent);
	display: grid;
	place-items: center;

	@media ${deviceSize.medium} {
		width: 50%;
		margin: 2rem auto 4rem;
	}

	@media ${deviceSize.small} {
		width: 65%;
		margin: 0 auto 3rem;
	}
`;

export const AboutMeImage = styled.div`
	border-radius: 2rem;
	overflow: hidden;
	transform: rotate(10deg);
	transition: var(--transition);

	&:hover {
		transform: rotate(0);
		box-shadow: 0px 0px 20px var(--color-primary);
	}
`;

export const AboutCards = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.5rem;

	@media ${deviceSize.small} {
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
`;

export const AboutCard = styled.article`
	background-color: var(--color-bg-variant);
	border: 1px solid transparent;
	border-radius: 1rem;
	padding: 2rem;
	text-align: center;
	transition: var(--transition);

	&:hover {
		background-color: var(--color-primary);
		cursor: pointer;

		& .icon {
			transition: var(--transition);
			color: var(--color-bg);
		}
	}

	&.active {
		background-color: transparent;
		border-color: var(--color-primary-variant);
		cursor: initial;

		& .icon {
			color: var(--color-primary);
		}
	}

	& h5 {
		font-size: 0.95rem;
	}

	& small {
		font-size: 0.7rem;
		color: var(--color-light);
	}

	& .icon {
		color: var(--color-primary);
		font-size: 1.4rem;
		margin-bottom: 1rem;
	}
`;
