import styled from 'styled-components';
import { deviceSize } from '../../../../utils/deviceSize';

////////////////////////////////////////////////////////////////////////////////////////////
//
//    CONTAINER
//
////////////////////////////////////////////////////////////////////////////////////////////
export const Container = styled.div`
	display: grid;
	gap: 12%;
	grid-template-columns: 30% 58%;
	width: 58%;

	@media ${deviceSize.tablet} {
		gap: 2rem;
		grid-template-columns: 1fr;
		margin-bottom: 5rem;
	}

	@media ${deviceSize.mobile} {
		width: var(--container-width-small);
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    CARDS
//
////////////////////////////////////////////////////////////////////////////////////////////
export const ContactOptions = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
`;

export const ContactOption = styled.article`
	background: var(--color-bg-variant);
	border-radius: var(--border-radius);
	border: var(--border) solid var(--color-primary);
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 1rem;
	text-align: center;
	transition: var(--transition);

	.icon {
		color: var(--color-white);
		font-size: 1.5rem;
	}

	> h4 {
		color: var(--color-white);
	}

	> h5 {
		color: var(--color-primary);
		font-size: 0.8rem;
		transition: var(--transition);
	}

	> p {
		background: var(--color-primary);
		border-radius: 0.25rem;
		color: var(--color-bg);
		left: 50%;
		opacity: 0;
		padding: 0.5rem 1rem;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		transition: var(--transition);
		width: fit-content;

		&.active {
			opacity: 1;
		}
	}

	:hover {
		backdrop-filter: blur(5px);
		background: transparent;
		border-color: var(--color-primary-variant);
		cursor: pointer;

		> h5 {
			scale: 1.2;
		}
	}
`;

export const ContactOptionHeader = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	@media ${deviceSize.mobile} {
		flex-direction: row;
		gap: 1rem;
		justify-content: center;

		> h4 {
			margin: 0;
		}
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    FORM
//
////////////////////////////////////////////////////////////////////////////////////////////
export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	margin-bottom: 2rem;

	> input,
	textarea {
		backdrop-filter: blur(2px);
		background: var(--color-bg-transparent);
		border-radius: var(--border-radius);
		border: var(--border) solid var(--color-primary-variant);
		color: var(--color-white);
		font-size: 1rem;
		padding: 1.5rem;
		resize: none;
		transition: var(--transition);
		width: 100%;

		:focus {
			border-color: var(--color-primary);
		}
	}

	> button {
		@media ${deviceSize.tablet} {
			margin: 0 auto;
		}
	}
`;
