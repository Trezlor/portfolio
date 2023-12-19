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

	@media ${deviceSize.tablet_1130} {
		gap: 4rem;
		grid-template-columns: 1fr;
		margin-top: 2rem;
		place-items: center;
		text-align: center;
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    IMG
//
////////////////////////////////////////////////////////////////////////////////////////////
export const MeImgContainer = styled.div`
	aspect-ratio: 1/1;
	background: linear-gradient(-45deg, transparent, var(--color-primary-variant), transparent);
	border-radius: 0.5rem;
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
		@media ${deviceSize.tablet_1130} {
			transform: rotate(-4deg);
		}
	}

	@media ${deviceSize.tablet_1130} {
		width: 50%;
	}
	@media ${deviceSize.mobile_600} {
		width: 65%;
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    INFO CARDS/CONTENT
//
////////////////////////////////////////////////////////////////////////////////////////////
export const CardsContainer = styled.div`
	display: flex;
	gap: 1.5rem;
	justify-content: center;

	@media ${deviceSize.pc_1500} {
		gap: 1rem;
	}
	@media ${deviceSize.mobile_600} {
		flex-direction: column;
	}
`;

export const Card = styled.article`
	background: var(--color-bg-variant);
	border-radius: var(--border-radius);
	border: var(--border) solid var(--color-primary-variant);
	padding-block: 2rem;
	text-align: center;
	transition: var(--transition);
	width: 200px;

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

		@media ${deviceSize.mobile_600} {
			scale: 1.05;
		}
	}

	.card__icon {
		color: var(--color-primary);
		font-size: 1.4rem;
		margin-bottom: 1rem;
		vertical-align: middle;

		@media ${deviceSize.pc_1500} {
			margin-bottom: 0;
		}
	}
	> h5 {
		font-size: 0.95rem;

		@media ${deviceSize.mobile_600} {
			margin: 0 30px 0 0;
		}
	}

	@media ${deviceSize.pc_1500} {
		width: 150px;
	}
	@media ${deviceSize.mobile_600} {
		align-items: center;
		display: flex;
		gap: 0.5rem;
		justify-content: center;
		padding-block: 1rem;
		width: initial;
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

		@media ${deviceSize.tablet_1130} {
			margin: 1rem 0 1.5rem;
		}

		@media ${deviceSize.mobile_600} {
			margin: 1.5rem 0 1.5rem;
		}
	}

	> div {
		backdrop-filter: none;
	}
`;

export const SkillsInfo = styled.div`
	justify-content: space-between;
	padding: 0 1rem;

	.icon {
		margin-top: 1rem;
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

		@media ${deviceSize.pc_1500} {
			font-size: 2.5rem;
		}
		@media ${deviceSize.mobile_600} {
			margin-top: 0;
		}
	}
	img {
		margin-top: 1rem;
		height: 4rem;
		object-fit: contain;
		width: auto;

		@media ${deviceSize.pc_1500} {
			height: 2.5rem;
		}
		@media ${deviceSize.mobile_600} {
			margin-top: 0;
		}
	}

	@media ${deviceSize.tablet_1130} {
		justify-content: center;
	}
`;
