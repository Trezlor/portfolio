import styled from "styled-components";
import { deviceSize } from "../../components/deviceSize";

export const Glass = styled.div`
	/*Positioning stuff*/
	position: absolute;
	left: 250px;
	z-index: -1;
	/*Box model stuff*/
	margin: auto;
	border: 1px solid rgba(255, 255, 255, 0.3);
	border-radius: 16px;
	background: rgba(255, 255, 255, 0.14);
	/*Miscellaneous*/
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	display: none;

	@media ${deviceSize.laptop} {
		display: block;
	}
`;
