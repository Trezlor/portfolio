import styled from "styled-components";

export const Image = styled.img`
	width: auto;
	height: 25rem;
	border-radius: 1rem;

	&.mediumImg {
		display: none;
	}

	@media (max-width: 1360px) {
		&.mediumImg {
			display: block;
			width: auto;
			height: 33rem;
		}
	}

	@media (max-width: 1024px) {
		&.mediumImg {
			display: none;
		}
	}

	@media (max-width: 1360px) {
		&.largeImg {
			display: none;
		}
	}
`;

export const Grid = styled.div`
	display: grid;

	grid-template-columns: auto max-content max-content max-content auto;
	grid-template-rows: 35.2px max-content;
	grid-template-areas:
		". coding hobbies job ."
		". text text text .";
	text-align: center;
	align-items: center;
	row-gap: 2rem;

	@media (max-width: 1360px) {
		grid-template-columns: max-content max-content;
		grid-template-rows: max-content max-content 1fr;
		grid-template-areas:
			"coding hobbies"
			"job job"
			"text text";
		row-gap: 0.5rem;
	}

	@media (max-width: 1024px) {
		grid-template-columns: auto max-content max-content max-content auto;
		grid-template-rows: 35.2px max-content;
		grid-template-areas:
			". coding hobbies job ."
			". text text text .";
		text-align: center;
		align-items: center;
		row-gap: 2rem;
		column-gap: 0.5rem;
	}
`;

export const H3 = styled.h4`
	background-color: var(--color-primary);
	color: var(--color-bg);
	padding-block: 0.5rem;
	border-radius: 0.5rem;
	width: 9rem;
	height: fit-content;
	margin: 0 auto;

	&.active {
		background-color: var(--color-bg);
		color: var(--color-primary);
		border: 1px solid var(--color-primary);
	}

	&.job {
		@media (max-width: 1360px) {
			margin: 0 auto 0 0;
		}
	}
`;
export const P = styled.p`
	background-color: var(--color-bg-variant);
	grid-area: text;
	width: 450px;
	margin: 0 auto;
	padding: 2rem 4rem;
	line-height: 2;
	border-radius: 1rem;
	height: fit-content;

	&.active {
		background-color: var(--color-primary-variant);
	}

	@media (max-width: 1360px) {
		width: 300px;
		padding: 1rem 2rem;
	}
`;
