import styled, { keyframes } from 'styled-components';
import { deviceSize } from '../../../../utils/deviceSize';

////////////////////////////////////////////////////////////////////////////////////////////
//
//    KEYFRAMES
//
////////////////////////////////////////////////////////////////////////////////////////////
const fadeInIcon = keyframes`
0% {
	top: -15px;

}
100% {
	top: 0;
	opacity: 1;
}
`;

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
		@media ${deviceSize.tablet} {
			transform: rotate(-4deg);
		}
	}

	@media ${deviceSize.tablet} {
		width: 50%;
	}
	@media ${deviceSize.mobile} {
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

	@media ${deviceSize.pc} {
		gap: 1rem;
	}
	@media ${deviceSize.mobile} {
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

		@media ${deviceSize.mobile} {
			scale: 1.05;
		}
	}

	.card__icon {
		color: var(--color-primary);
		font-size: 1.4rem;
		margin-bottom: 1rem;
		vertical-align: middle;

		@media ${deviceSize.pc} {
			margin-bottom: 0;
		}
	}
	> h5 {
		font-size: 0.95rem;

		@media ${deviceSize.mobile} {
			margin: 0 30px 0 0;
		}
	}

	@media ${deviceSize.pc} {
		width: 150px;
	}
	@media ${deviceSize.mobile} {
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

export const SkillsInfo = styled.div`
	justify-content: space-between;
	padding: 0 1rem;

	.icon {
		opacity: 0;
		margin-top: 1rem;
		font-size: 4rem;
		position: relative;
		animation: ${fadeInIcon} 1s forwards;

		&.html {
			color: #e44d26;
		}
		&.css {
			color: #2965f1;
			animation-delay: 0.15s;
		}
		&.js {
			color: #f7df1e;
			animation-delay: 0.3s;
		}
		&.react {
			color: #60d8f9;
			animation-delay: 0.45s;
		}
		&.figma {
			height: 4rem;
			object-fit: contain;
			width: auto;
			animation-delay: 0.6s;
		}

		@media ${deviceSize.pc} {
			font-size: 2.5rem;

			&.figma {
				height: 2.5rem;
			}
		}
		@media ${deviceSize.mobile} {
			margin-top: 0;
		}
	}

	@media ${deviceSize.tablet} {
		justify-content: center;
	}
`;
