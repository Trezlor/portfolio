import styled, { keyframes } from 'styled-components';
import { deviceSize } from '../../../../utils/deviceSize';

////////////////////////////////////////////////////////////////////////////////////////////
//
//    KEYFRAMES
//
////////////////////////////////////////////////////////////////////////////////////////////
const extendHtml = keyframes`
0% {
	width: 0%;
}
100% {
	width: calc(40% - 2px);
}
`;

const extendCss = keyframes`
0% {
	width: 0%;
}
100% {
	width: calc(55% - 2px);
}
`;

const extendJs = keyframes`
0% {
	width: 0%;
}
100% {
	width: calc(30% - 2px);
}
`;

const extendReact = keyframes`
0% {
	width: 0%;
}
100% {
	width: calc(50% - 2px);
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
	grid-template-columns: 35% 1fr;

	@media ${deviceSize.tablet} {
		gap: 0;
		grid-template-columns: 1fr;
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

		& h5 {
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

	& small {
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

		&.text__active {
			display: flex;
			flex-direction: column;
		}

		@media ${deviceSize.tablet} {
			margin: 1rem 0 1.5rem;
		}

		@media ${deviceSize.mobile} {
			margin: 1.5rem 0;
		}
	}

	> div {
		backdrop-filter: none;
	}

	@media ${deviceSize.tablet} {
		text-align: center;
	}
`;

export const AboutMeSkills = styled.div`
	.skill_scale {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0;
		margin-left: 2.5rem;
		width: 80%;

		> p {
			backdrop-filter: blur(2px);
		}
	}

	.skill {
		align-items: center;
		display: flex;
		gap: 1rem;
		margin-bottom: 1rem;

		.icon {
			font-size: 1.5rem;

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
		}

		.skill_bar_bg {
			align-items: center;
			background: var(--color-bg-variant);
			border-radius: 0.25rem;
			display: flex;
			height: 0.8rem;
			width: 80%;

			.skill_bar_html {
				animation: ${extendHtml} 1s;
				background: linear-gradient(90deg, #e44d26, #fb9344);
				border-radius: inherit;
				height: calc(100% - 2px);
				margin-left: 1px;
				width: calc(40% - 2px);
			}

			.skill_bar_css {
				animation: ${extendCss} 1s;
				background: linear-gradient(90deg, #2965f1, #59c8ff);
				border-radius: inherit;
				height: calc(100% - 2px);
				margin-left: 1px;
				width: calc(55% - 2px);
			}

			.skill_bar_js {
				animation: ${extendJs} 1s;
				background: linear-gradient(90deg, #f7df1e, #ffef79);
				border-radius: inherit;
				height: calc(100% - 2px);
				margin-left: 1px;
				width: calc(30% - 2px);
			}

			.skill_bar_react {
				animation: ${extendReact} 1s;
				background: linear-gradient(90deg, #60d8f9, #b6efff);
				border-radius: inherit;
				height: calc(100% - 2px);
				margin-left: 1px;
				width: calc(50% - 2px);
			}
		}
	}

	.skill__react {
		margin-bottom: initial;
	}
`;
