import styled from 'styled-components';
import { deviceSize } from '../../../../utils/deviceSize';

////////////////////////////////////////////////////////////////////////////////////////////
//
//    SOCIALS
//
////////////////////////////////////////////////////////////////////////////////////////////
export const SocialsLinks = styled.div`
	align-items: center;
	bottom: 3rem;
	display: flex;
	flex-direction: column;
	font-size: 1.5rem;
	gap: 0.8rem;
	left: 2rem;
	position: fixed;

	:before {
		background: var(--color-primary);
		content: '';
		height: 2rem;
		width: 1px;
	}

	:after {
		background: var(--color-primary);
		content: '';
		height: 2rem;
		width: 1px;
	}

	@media ${deviceSize.tablet} {
		display: none;
	}
`;
