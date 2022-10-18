import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

export const Container = styled.div`
	/*Display stuff*/
	display: grid;
	grid-template-columns: 30% 58%;
	/*Box model stuff*/
	width: 58%;
	/*Miscellaneous*/
	gap: 12%;

	@media ${deviceSize.medium} {
		/*Display stuff*/
		grid-template-columns: 1fr;
		/*Miscellaneous*/
		gap: 2rem;
	}

	@media ${deviceSize.small} {
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
	padding: 1.2rem;
	border: var(--border) solid var(--color-primary);
	border-radius: 1.2rem;
	background-color: var(--color-bg-variant);
	/*Typography stuff*/
	text-align: center;
	/*Manipulations stuff*/
	transition: var(--transition);

	&:hover {
		/*Box model stuff*/
		border-color: var(--color-primary-variant);
		background-color: transparent;
	}

	& .icon {
		/*Box model stuff*/
		margin-bottom: 0.5rem;
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

	& h5 {
		/*Box model stuff*/
		margin-top: 0.7rem;
		/*Typography stuff*/
		font-size: 0.8rem;
		color: var(--color-primary);
		/*Manipulations stuff*/
		transition: var(--transition);

		&:hover {
			/*Typography stuff*/
			color: var(--color-white);
			/*Miscellaneous*/
			cursor: pointer;
		}
	}

	& p {
		/*Positioning stuff*/
		position: absolute;
		left: 50%;
		z-index: 1;
		/*Box model stuff*/
		width: fit-content;
		margin-top: 10px;
		padding: 0.5rem 1rem;
		border-radius: 0.25rem;
		background-color: var(--color-primary);
		color: var(--color-bg);
		/*Manipulations stuff*/
		transform: translateX(-50%);
		transition: var(--transition);
		opacity: 0;

		&.active {
			/*Manipulations stuff*/
			opacity: 1;
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
		border-radius: 0.5rem;
		background-color: transparent;
		/*Typography stuff*/
		font-size: 1rem;
		color: var(--color-white);
		/*Miscellaneous*/
		resize: none;
	}
`;
