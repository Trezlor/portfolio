import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

export const Container = styled.div`
	/* background-color: grey; */
	padding-inline: 40px;
	width: 80%;
	margin-top: 10vh;
	margin-inline: auto;

	@media ${deviceSize.laptop} {
	}
`;

export const Section = styled.section`
	height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	@media ${deviceSize.laptop} {
	}
`;

export const Image = styled.img`
	height: 50%;

	@media ${deviceSize.laptop} {
	}
`;
