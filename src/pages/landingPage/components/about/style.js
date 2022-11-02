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
						width: 40%;
					}
`;

const extendCss = keyframes`
0% {
						width: 0%;
					}
					100% {
						width: 55%;
					}
`;

const extendJs = keyframes`
0% {
						width: 0%;
					}
					100% {
						width: 30%;
					}
`;

const extendReact = keyframes`
0% {
						width: 0%;
					}
					100% {
						width: 50%;
					}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    CONTAINER
//
////////////////////////////////////////////////////////////////////////////////////////////
export const Container = styled.div`
	/*Display stuff*/
	display: grid;
	grid-template-columns: 35% 1fr;
	/*Miscellaneous*/
	gap: 15%;

	@media ${deviceSize.tablet} {
		/*Display stuff*/
		grid-template-columns: 1fr;
		/*Miscellaneous*/
		gap: 0;
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    IMG
//
////////////////////////////////////////////////////////////////////////////////////////////
export const AboutMeImg = styled.div`
	/*Box model stuff*/
	width: min(28rem, 100%);
	border: 1px solid var(--color-primary);
	border-radius: 1rem;
	background: linear-gradient(-45deg, transparent, var(--color-primary-variant), transparent);
	/*Miscellaneous*/
	aspect-ratio: 1/1;

	& img {
		/*Box model stuff*/
		border: 1px solid var(--color-primary-variant);
		border-radius: inherit;
		background: linear-gradient(-45deg, transparent, var(--color-primary-variant), transparent);
		/*Manipulations stuff*/
		transform: rotate(-8deg);
		transition: var(--transition);
		/*Miscellaneous*/
		overflow: hidden;

		&:hover {
			/*Box model stuff*/
			background: linear-gradient(-45deg, transparent, var(--color-primary), transparent);
			/*Manipulations stuff*/
			transform: rotate(0);
			/*Miscellaneous*/
			box-shadow: 0px 0px 40px var(--color-primary);
		}
	}

	@media ${deviceSize.tablet} {
		/*Box model stuff*/
		width: 50%;
		margin: 2rem auto 4rem;
	}

	@media ${deviceSize.mobile} {
		/*Box model stuff*/
		width: 65%;
		margin: 0 auto 3rem;
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    INFO CONTAINER
//
////////////////////////////////////////////////////////////////////////////////////////////
export const AboutMeInfoContainer = styled.div`
	& .info {
		/*Display stuff*/
		display: none;
		/*Box model stuff*/
		margin: 2rem 0 2.6rem;
		/*Typography stuff*/
		color: var(--color-light);
		/*Miscellaneous*/
		backdrop-filter: blur(2px);

		&.activeText {
			/*Display stuff*/
			display: flex;
			flex-direction: column;
		}

		@media ${deviceSize.tablet} {
			/*Box model stuff*/
			margin: 1rem 0 1.5rem;
		}

		@media ${deviceSize.mobile} {
			/*Box model stuff*/
			margin: 1.5rem 0;
		}
	}

	@media ${deviceSize.mobile} {
		/*Typography stuff*/
		text-align: center;
	}
`;

export const AboutMeCards = styled.div`
	/*Display stuff*/
	display: grid;
	grid-template-columns: repeat(auto-fit, 200px);
	/*Miscellaneous*/
	gap: 1.5rem;

	@media (max-width: 1730px) {
		/*Display stuff*/
		grid-template-columns: repeat(auto-fit, 130px);
		/*Miscellaneous*/
		gap: 1rem;
	}

	@media ${deviceSize.mobile} {
		/*Display stuff*/
		justify-content: center;
	}

	@media (max-width: 470px) {
		/*Display stuff*/
		grid-template-columns: 1fr;
		grid-template-rows: repeat(auto-fit, 1fr 1fr);
		/*Miscellaneous*/
		gap: 1rem;
	}
`;

export const AboutMeCard = styled.article`
	/*Box model stuff*/
	border: var(--border) solid var(--color-primary-variant);
	border-radius: var(--border-radius);
	background: var(--color-bg-variant);
	/*Typography stuff*/
	text-align: center;
	/*Manipulations stuff*/
	transition: var(--transition);
	/*Miscellaneous*/
	padding-block: 2rem;

	&:hover {
		/*Box model stuff*/
		border-color: var(--color-primary);
		background: transparent;
		/*Miscellaneous*/
		backdrop-filter: blur(2px);
		cursor: pointer;
	}

	&.active {
		/*Box model stuff*/
		border-color: var(--color-primary);
		background: var(--color-bg-transparent);
		/*Miscellaneous*/
		cursor: initial;
		scale: 1.1;
		backdrop-filter: blur(2px);

		@media (max-width: 470px) {
			/*Miscellaneous*/
			scale: 1.05;
		}
	}

	& .card__header {
		& .card__icon {
			/*Box model stuff*/
			margin-bottom: 1rem;
			/*Typography stuff*/
			font-size: 1.4rem;
			color: var(--color-primary);
			/*Miscellaneous*/
			vertical-align: middle;

			@media (max-width: 1730px) {
				/*Box model stuff*/
				margin-bottom: 0;
			}
		}

		& h5 {
			/*Typography stuff*/
			font-size: 0.95rem;

			@media (max-width: 470px) {
				/*Box model stuff*/
				margin: 0 30px 0 0;
			}
		}

		@media (max-width: 470px) {
			/*Display stuff*/
			display: flex;
			justify-content: center;
			/*Miscellaneous*/
			gap: 0.5rem;
		}
	}

	& small {
		/*Typography stuff*/
		font-size: 0.7rem;
		color: var(--color-light);
	}

	@media (max-width: 1730px) {
		/*Miscellaneous*/
		padding-block: 1rem;
	}

	@media ${deviceSize.mobile} {
		/*Miscellaneous*/
		padding-block: 1rem;
	}
`;

export const AboutMeSkills = styled.div`
	& .skill_scale {
		/*Display stuff*/
		display: flex;
		justify-content: space-between;
		/*Box model stuff*/
		width: 80%;
		margin-bottom: 0;
		margin-left: 2.5rem;

		& p {
			/*Miscellaneous*/
			backdrop-filter: blur(2px);
		}
	}

	& .skill {
		/*Display stuff*/
		display: flex;
		align-items: center;
		/*Box model stuff*/
		margin-bottom: 1rem;
		/*Miscellaneous*/
		gap: 1rem;

		& .icon {
			/*Typography stuff*/
			font-size: 1.5rem;

			&.html {
				/*Typography stuff*/
				color: #e44d26;
			}

			&.css {
				/*Typography stuff*/
				color: #2965f1;
			}

			&.js {
				/*Typography stuff*/
				color: #f7df1e;
			}

			&.react {
				/*Typography stuff*/
				color: #60d8f9;
			}
		}

		& .skill_bar_bg {
			/*Box model stuff*/
			width: 80%;
			height: 0.8rem;
			border-radius: 0.25rem;
			background: var(--color-bg-variant);
			display: flex;
			align-items: center;

			& .skill_bar_html {
				/*Box model stuff*/
				width: calc(40% - 2px);
				margin-left: 1px;
				height: calc(100% - 2px);
				border-radius: inherit;
				background: linear-gradient(90deg, #e44d26, #fb9344);
				/*Manipulations stuff*/
				animation: ${extendHtml} 1s;
			}

			& .skill_bar_css {
				/*Box model stuff*/
				width: calc(55% - 2px);
				margin-left: 1px;
				height: calc(100% - 2px);
				border-radius: inherit;
				background: linear-gradient(90deg, #2965f1, #59c8ff);
				/*Manipulations stuff*/
				animation: ${extendCss} 1s;
			}

			& .skill_bar_js {
				/*Box model stuff*/
				width: calc(30% - 2px);
				margin-left: 1px;
				height: calc(100% - 2px);
				border-radius: inherit;
				background: linear-gradient(90deg, #f7df1e, #ffef79);
				/*Manipulations stuff*/
				animation: ${extendJs} 1s;
			}

			& .skill_bar_react {
				/*Box model stuff*/
				width: calc(50% - 2px);
				margin-left: 1px;
				height: calc(100% - 2px);
				border-radius: inherit;
				background: linear-gradient(90deg, #60d8f9, #b6efff);
				/*Manipulations stuff*/
				animation: ${extendReact} 1s;
			}
		}
	}

	& .skill__react {
		/*Box model stuff*/
		margin-bottom: initial;
	}
`;
