import styled from 'styled-components';
import { deviceSize } from '../../../../utils/deviceSize';

////////////////////////////////////////////////////////////////////////////////////////////
//
//    CONTAINER
//
////////////////////////////////////////////////////////////////////////////////////////////
export const Container = styled.div`
	display: grid;
	gap: 15%;
	grid-template-columns: 35% 1fr 1fr; //added extra 1fr to give icons-container same width as the cards

	@media ${deviceSize.tablet} {
		gap: 0;
		grid-template-columns: 1fr;

		.content__wrapper {
			text-align: center;
		}
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    IMG
//
////////////////////////////////////////////////////////////////////////////////////////////
export const AboutMeImg = styled.div`
	aspect-ratio: 1/1;
	background: linear-gradient(-45deg, transparent, var(--color-primary-variant), transparent);
	border-radius: 1rem;
	border: 1px solid var(--color-primary);
	width: min(28rem, 100%);

	> img {
		background: linear-gradient(-45deg, transparent, var(--color-primary-variant), transparent);
		border-radius: inherit;
		border: 1px solid var(--color-primary-variant);
		overflow: hidden;
		transform: rotate(-8deg);
		transition: var(--transition);

		:hover {
			background: linear-gradient(-45deg, transparent, var(--color-primary), transparent);
			box-shadow: 0px 0px 40px var(--color-primary);
			transform: rotate(0);
		}
	}

	@media ${deviceSize.tablet} {
		margin: 2rem auto 4rem;
		width: 50%;
	}

	@media ${deviceSize.mobile} {
		margin: 0 auto 3rem;
		width: 65%;
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    INFO CARDS/CONTENT
//
////////////////////////////////////////////////////////////////////////////////////////////
export const AboutMeCards = styled.div`
	display: grid;
	gap: 1.5rem;
	grid-template-columns: repeat(3, 200px);

	@media (max-width: 1730px) {
		gap: 1rem;
		grid-template-columns: repeat(3, 130px);
	}

	@media ${deviceSize.tablet} {
		justify-content: center;
	}

	@media (max-width: 470px) {
		gap: 1rem;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(3, 1fr);
	}
`;

export const AboutMeCard = styled.article`
	background: var(--color-bg-variant);
	border-radius: var(--border-radius);
	border: var(--border) solid var(--color-primary-variant);
	padding-block: 2rem;
	text-align: center;
	transition: var(--transition);

	:hover {
		backdrop-filter: blur(2px);
		background: transparent;
		border-color: var(--color-primary);
		cursor: pointer;
	}

	&.card__active {
		backdrop-filter: blur(2px);
		background: var(--color-bg-transparent);
		border-color: var(--color-primary);
		cursor: initial;
		scale: 1.1;

		@media (max-width: 470px) {
			scale: 1.05;
		}
	}

	.card__header {
		.card__icon {
			color: var(--color-primary);
			font-size: 1.4rem;
			margin-bottom: 1rem;
			vertical-align: middle;

			@media (max-width: 1730px) {
				margin-bottom: 0;
			}
		}

		> h5 {
			font-size: 0.95rem;

			@media (max-width: 470px) {
				margin: 0 30px 0 0;
			}
		}

		@media (max-width: 470px) {
			align-items: center;
			display: flex;
			gap: 0.5rem;
			justify-content: center;
		}
	}

	> small {
		color: var(--color-light);
		font-size: 0.7rem;
	}

	@media (max-width: 1730px) {
		padding-block: 1rem;
	}

	@media ${deviceSize.mobile} {
		padding-block: 1rem;
	}
`;

export const InfoContainer = styled.div`
	> * {
		backdrop-filter: blur(2px);
		color: var(--color-light);
		display: none;
		margin: 2rem 0 2.6rem;
		gap: 1.5rem;

		&.text__active {
			display: flex;
		}

		@media ${deviceSize.tablet} {
			margin: 1rem 0 1.5rem;
		}

		@media ${deviceSize.mobile} {
			margin: 1.5rem 0 1.5rem;
		}
	}

	> div {
		backdrop-filter: none;
	}
`;

export const AboutMeSkills = styled.div`
	justify-content: space-between;
	padding: 0 1rem;

	.icon {
		font-size: 4rem;

		&.html {
			color: #e44d26;
		}
		&.css {
			color: #2965f1;
		}
		&.js {
			color: #f7df1e;
		}
		&.react {
			color: #60d8f9;
		}

		@media (max-width: 1730px) {
			font-size: 2.5rem;
		}
	}

	@media ${deviceSize.tablet} {
		justify-content: center;
	}
`;
