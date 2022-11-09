import styled from 'styled-components';
import { deviceSize } from '../../../../utils/deviceSize';

////////////////////////////////////////////////////////////////////////////////////////////
//
//    CONTAINER
//
////////////////////////////////////////////////////////////////////////////////////////////
export const Container = styled.div`
	@media ${deviceSize.tablet} {
		width: min(35rem, 100%);
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    IMG
//
////////////////////////////////////////////////////////////////////////////////////////////
export const ProjectImage = styled.img`
	border-radius: var(--border-radius);
	margin: 0 auto 1rem;
	width: 85%;

	@media ${deviceSize.tablet} {
		width: 100%;
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    INFO CONTAINER
//
////////////////////////////////////////////////////////////////////////////////////////////
export const ProjectInfoContainer = styled.div`
	backdrop-filter: blur(5px);
	background: var(--color-bg-variant);
	border-radius: var(--border-radius);
	border: var(--border) solid var(--color-primary);
	margin: 0 auto 3rem;
	padding: 2rem 4rem;
	width: fit-content;

	> h3 {
		margin-bottom: 2rem;
		text-align: center;

		@media ${deviceSize.mobile} {
			margin-bottom: 0.8rem;
		}
	}

	:hover {
		cursor: initial;
	}

	@media ${deviceSize.mobile} {
		padding: 1rem 2rem;
	}
`;

export const ProjectLinks = styled.div`
	display: flex;
	gap: 50px;
	justify-content: center;

	@media ${deviceSize.mobile} {
		gap: 30px;
	}
`;
