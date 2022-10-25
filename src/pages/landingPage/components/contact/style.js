import styled from 'styled-components';
import { deviceSize } from '../../../../utils/deviceSize';

export const Container = styled.div`
	/*Display stuff*/
	display: grid;
	grid-template-columns: 30% 58%;
	/*Box model stuff*/
	width: 58%;
	/*Miscellaneous*/
	gap: 12%;

	@media ${deviceSize.tablet} {
		/*Display stuff*/
		grid-template-columns: 1fr;
		/*Box model stuff*/
		margin-bottom: 10rem;
		/*Miscellaneous*/
		gap: 2rem;
	}

	@media ${deviceSize.mobile} {
		/*Box model stuff*/
		width: var(--container-width-small);
	}
`;

export const ContactOptions = styled.div`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	/*Miscellaneous*/
	gap: 1.2rem;
`;

export const ContactOption = styled.article`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	/*Box model stuff*/
	padding: 1rem;
	border: var(--border) solid var(--color-primary);
	border-radius: var(--border-radius-primary);
	background: var(--color-bg-variant);
	/*Typography stuff*/
	text-align: center;
	/*Manipulations stuff*/
	transition: var(--transition);
	/*Miscellaneous*/
	gap: 0.5rem;

	& .icon {
		/*Typography stuff*/
		font-size: 1.5rem;
		color: var(--color-white);
	}

	& h4 {
		/*Typography stuff*/
		color: var(--color-white);
	}

	& h5 {
		/*Typography stuff*/
		font-size: 0.8rem;
		color: var(--color-primary);
		/*Manipulations stuff*/
		transition: var(--transition);
	}

	& p {
		/*Positioning stuff*/
		position: absolute;
		left: 50%;
		top: 50%;
		/*Box model stuff*/
		width: fit-content;
		padding: 0.5rem 1rem;
		border-radius: 0.25rem;
		background: var(--color-primary);
		/*Typography stuff*/
		color: var(--color-bg);
		/*Manipulations stuff*/
		transform: translate(-50%, -50%);
		transition: var(--transition);
		opacity: 0;

		&.active {
			/*Manipulations stuff*/
			opacity: 1;
		}
	}

	&:hover {
		/*Box model stuff*/
		border-color: var(--color-primary-variant);
		background: transparent;
		/*Miscellaneous*/
		backdrop-filter: blur(5px);
		cursor: pointer;

		& h5 {
			/*Miscellaneous*/
			scale: 1.2;
		}
	}
`;

export const ContactOptionHeader = styled.div`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	align-items: center;
	/*Miscellaneous*/
	gap: 0.5rem;

	@media ${deviceSize.mobile} {
		/*Display stuff*/
		flex-direction: row;
		justify-content: center;
		/*Miscellaneous*/
		gap: 1rem;

		& h4 {
			/*Box model stuff*/
			margin: 0;
		}
	}
`;

export const Form = styled.form`
	/*Display stuff*/
	display: flex;
	flex-direction: column;
	/*Miscellaneous*/
	gap: 1.2rem;

	& input,
	textarea {
		/*Box model stuff*/
		width: 100%;
		padding: 1.5rem;
		border: var(--border) solid var(--color-primary-variant);
		border-radius: var(--border-radius-primary);
		background: var(--color-bg-transparent);
		/*Typography stuff*/
		font-size: 1rem;
		color: var(--color-white);
		/*Manipulations stuff*/
		transition: var(--transition);
		/*Miscellaneous*/
		backdrop-filter: blur(2px);
		resize: none;

		&:focus {
			/*Box model stuff*/
			border-color: var(--color-primary);
		}
	}
`;
