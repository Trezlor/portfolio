import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

export const Title = styled.h3`
	text-align: center;
	margin-top: 50px;

	@media ${deviceSize.laptop} {
		margin-top: 0;
	}
`;

export const Image = styled.img`
	width: 40%;
	margin: 0 auto 1rem;

	@media ${deviceSize.medium} {
		width: 60%;
	}

	@media ${deviceSize.small} {
		width: 80%;
	}
`;

export const LinkContainer = styled.div`
	display: flex;
	gap: 50px;
	margin-bottom: 3rem;
	justify-content: center;
`;
