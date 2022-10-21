import styled from 'styled-components';
import { deviceSize } from '../../../../utils/deviceSize';

export const Title = styled.h3`
	/*Box model stuff*/
	margin-bottom: 2rem;
	/*Typography stuff*/
	text-align: center;

	@media ${deviceSize.size_600} {
		/*Box model stuff*/
		margin-bottom: 0.8rem;
	}
`;

export const Image = styled.img`
	/*Box model stuff*/
	width: 85%;
	margin: 2rem auto 1rem;
	border-radius: var(--border-radius-primary);
`;

export const ProjectInfoContainer = styled.div`
	/*Box model stuff*/
	width: fit-content;
	margin: 0 auto 3rem;
	padding: 2rem 4rem;
	border: var(--border) solid var(--color-primary);
	border-radius: var(--border-radius-primary);
	background: var(--color-bg-variant);
	backdrop-filter: blur(5px);

	&:hover {
		cursor: initial;
	}

	@media ${deviceSize.size_600} {
		/*Box model stuff*/
		padding: 1rem 2rem;
	}
`;

export const LinkContainer = styled.div`
	/*Display stuff*/
	display: flex;
	justify-content: center;
	/*Miscellaneous*/
	gap: 50px;

	@media ${deviceSize.size_600} {
		/*Miscellaneous*/
		gap: 30px;
	}
`;

export const SwiperWrapper = styled.div`
	display: flex;

	& .container {
		/*Box model stuff*/
		width: 60rem;
		height: fit-content;
		/*Miscellaneous*/
		overflow: hidden;

		@media ${deviceSize.size_1130} {
			/*Box model stuff*/
			width: 35rem;
		}
	}
`;
