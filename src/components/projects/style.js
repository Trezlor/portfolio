import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

export const Container = styled.div`
	padding-inline: 10vw;
	margin-top: 20vh;
	margin-inline: auto;
	/* border: 1px solid white; */

	@media ${deviceSize.laptop} {
		padding-inline: 5vw;
		margin-top: 5vh;
		width: auto;
	}
`;

export const Section = styled.section`
	display: flex;
	align-items: center;
	/* border: 1px solid red; */
	height: 100%;
	justify-content: space-between;
	flex-direction: column;
	@media ${deviceSize.laptop} {
		margin-inline: 140px;
		height: 100%;
	}
`;

export const Title = styled.h1`
	text-align: center;
	margin-top: 50px;

	@media ${deviceSize.laptop} {
		font-size: 36px;
		margin-top: 0;
	}
`;

export const Image = styled.img`
	width: 70vw;
	margin-block: 10px 20px;

	@media ${deviceSize.laptop} {
		width: 30vw;
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
	margin-bottom: 50px;

	@media ${deviceSize.laptop} {
		font-size: 24px;
		margin-bottom: 120px;
	}
`;
