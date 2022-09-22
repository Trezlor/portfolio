import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

export const Container = styled.div`
	/* background-color: grey; */
	padding-inline: 40px;
	width: 90%;
	margin-top: 10vh;
	margin-inline: auto;

	@media ${deviceSize.laptop} {
	}
`;

export const Section = styled.section`
	display: flex;
	align-items: center;
	height: 100%;

	justify-content: space-between;
	flex-direction: column;
	@media ${deviceSize.laptop} {
		height: 100%;
	}
`;

export const Title = styled.h1`
	text-align: center;

	@media ${deviceSize.laptop} {
		width: 30%;
	}
`;

export const Image = styled.img`
	height: auto;
	width: 90%;
	margin-block: 10px 20px;

	@media ${deviceSize.laptop} {
		max-height: 500px;
		width: auto;
	}
`;

export const LinkContainer = styled.div`
	display: flex;
	gap: 50px;

	@media ${deviceSize.laptop} {
	}
`;

export const Link = styled.a`
	color: white;
	margin-bottom: 70px;

	@media ${deviceSize.laptop} {
	}
`;
