import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

export const Container = styled.div`
	width: 58%;
	display: grid;
	grid-template-columns: 30% 58%;
	gap: 12%;

	@media ${deviceSize.medium} {
		grid-template-columns: 1fr;
		gap: 2rem;
	}

	@media ${deviceSize.small} {
		width: var(--container-width-small);
	}
`;

export const ContactOptions = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
`;

export const ContactOption = styled.article`
	background-color: var(--color-bg-variant);
	padding: 1.2rem;
	border-radius: 1.2rem;
	text-align: center;
	border: 1px solid transparent;
	transition: var(--transition);

	&:hover {
		background-color: transparent;
		border-color: var(--color-primary-variant);
	}

	& .icon {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}

	& a {
		margin-top: 0.7rem;
		display: inline-block;
		font-size: 0.8rem;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;

	& input,
	textarea {
		width: 100%;
		padding: 1.5rem;
		border-radius: 0.5rem;
		background-color: transparent;
		border: 2px solid var(--color-primary-variant);
		resize: none;
		color: var(--color-white);
	}
`;
