import styled from "styled-components";
import { deviceSize } from "../../utils/deviceSize";

export const Container = styled.div`
	width: 20%;
	margin: 20px 200px;
	height: 300px;

	@media ${deviceSize.laptop} {
	}
`;

export const Carousel = styled.div`
	width: 100%;
	height: 100%;
	border: 2px solid orange;
	border-radius: 5px;
	display: flex;
	justify-content: flex-start;
	position: relative;

	@media ${deviceSize.laptop} {
	}
`;

export const Slider = styled.div`
	border: 2px solid white;
	display: flex;
	height: 100%;
	width: 500%;
	flex-shrink: 0;
	transition: all 0.5s;

	@media ${deviceSize.laptop} {
	}
`;

export const Section = styled.section`
	flex-basis: 20%;
	width: 20%;
	flex-shrink: 0;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;

	@media ${deviceSize.laptop} {
	}
`;

export const Controls = styled.div`
	.arrow-left {
		position: absolute;
		top: 10px;
		left: 10px;
		cursor: pointer;
	}

	.arrow-right {
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
	}
`;
