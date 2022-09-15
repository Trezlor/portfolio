import { NavbarData } from "./navbar/data";
import * as S from "./navbar/styledComponents";
import { Nav } from "./navbar/styledComponents";

export default function Navbar() {
	return (
		<Nav className="this">
			<S.Flex>
				<ul>
					{NavbarData.map((val, key) => {
						return (
							<div key={key + 1}>
								<S.Category key={key} to={val.link}>
									<S.CategoryIcon key={key + 2} className="icon">
										{val.icon}
									</S.CategoryIcon>
									<S.CategoryTitle key={key + 3} className="title">
										{val.title}
									</S.CategoryTitle>
								</S.Category>
							</div>
						);
					})}
				</ul>
			</S.Flex>
			<S.CopyrightContainer>
				<S.CopyrightIcon className="fa-regular fa-copyright"></S.CopyrightIcon>
				<S.YearName>2022 - Sondre Halvorsen</S.YearName>
			</S.CopyrightContainer>
		</Nav>
	);
}
