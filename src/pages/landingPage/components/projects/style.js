import styled from 'styled-components';
import { deviceSize } from '../../../../utils/deviceSize';

////////////////////////////////////////////////////////////////////////////////////////////
//
//    CONTAINER
//
////////////////////////////////////////////////////////////////////////////////////////////
export const Container = styled.div`
	/*Display stuff*/
	display: flex;

	& .container {
		/*Box model stuff*/
		width: 60rem;

		@media ${deviceSize.tablet} {
			/*Box model stuff*/
			width: 35rem;
		}
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    IMG
//
////////////////////////////////////////////////////////////////////////////////////////////
export const ProjectImage = styled.img`
	/*Box model stuff*/
	width: 85%;
	margin: 0 auto 1rem;
	border-radius: var(--border-radius-primary);
`;

////////////////////////////////////////////////////////////////////////////////////////////
//
//    INFO CONTAINER
//
////////////////////////////////////////////////////////////////////////////////////////////
export const ProjectInfoContainer = styled.div`
	/*Box model stuff*/
	width: fit-content;
	margin: 0 auto 3rem;
	padding: 2rem 4rem;
	border: var(--border) solid var(--color-primary);
	border-radius: var(--border-radius-primary);
	background: var(--color-bg-variant);
	/*Miscellaneous*/
	backdrop-filter: blur(5px);

	& h3 {
		/*Box model stuff*/
		margin-bottom: 2rem;
		/*Typography stuff*/
		text-align: center;

		@media ${deviceSize.mobile} {
			/*Box model stuff*/
			margin-bottom: 0.8rem;
		}
	}

	&:hover {
		/*Miscellaneous*/
		cursor: initial;
	}

	@media ${deviceSize.mobile} {
		/*Box model stuff*/
		padding: 1rem 2rem;
	}
`;

export const ProjectLinks = styled.div`
	/*Display stuff*/
	display: flex;
	justify-content: center;
	/*Miscellaneous*/
	gap: 50px;

	@media ${deviceSize.mobile} {
		/*Miscellaneous*/
		gap: 30px;
	}
`;
