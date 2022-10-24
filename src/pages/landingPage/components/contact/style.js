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

	@media ${deviceSize.size_1130} {
		/*Display stuff*/
		grid-template-columns: 1fr;
		/*Miscellaneous*/
		gap: 2rem;
		margin-bottom: 10rem;
	}

	@media ${deviceSize.size_600} {
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
	/*Positioning stuff*/
	position: relative;
	/*Box model stuff*/
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 1rem;
	border: var(--border) solid var(--color-primary);
	border-radius: var(--border-radius-primary);
	background: var(--color-bg-variant);
	/*Typography stuff*/
	text-align: center;
	z-index: 0;
	/*Manipulations stuff*/
	transition: var(--transition);

	&:hover {
		/*Box model stuff*/
		border-color: var(--color-primary-variant);
		backdrop-filter: blur(5px);
		background: transparent;
		cursor: pointer;

		& h5 {
			scale: 1.2;
		}
	}

	& .icon {
		/*Box model stuff*/
		/* margin-bottom: 0.5rem; */
		color: var(--color-white);

		/*Typography stuff*/
		font-size: 1.5rem;
	}

	& a {
		/*Display stuff*/
		display: inline-block;
		/*Box model stuff*/
		margin-top: 0.7rem;
		/*Typography stuff*/
		font-size: 0.8rem;
	}

	& h4 {
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
		color: var(--color-bg);
		/*Manipulations stuff*/
		transform: translate(-50%, -50%);
		/* transform: translateY(-50%); */
		transition: var(--transition);
		opacity: 0;

		&.active {
			/*Manipulations stuff*/
			opacity: 1;
		}
	}
`;

export const ContactOptionHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;

	@media ${deviceSize.size_600} {
		flex-direction: row;
		gap: 1rem;
		justify-content: center;

		& h4 {
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

		backdrop-filter: blur(2px);
		/*Typography stuff*/
		font-size: 1rem;
		color: var(--color-white);
		/*Miscellaneous*/
		resize: none;
		transition: var(--transition);

		&:focus {
			border-color: var(--color-primary);
		}
	}
`;