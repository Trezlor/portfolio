import { SidebarData } from "./sidebar/data";
import * as S from "./sidebar/styledComponents";

export default function Sidebar() {
	return (
		<>
			<S.Aside>
				<div>
					<S.ImgContainer>
						<S.Img src={require(`./images/sondre.png`)} alt="Sondre" />
					</S.ImgContainer>
					<S.Name>Sondre Halvorsen</S.Name>
					<ul>
						{SidebarData.map((val, key) => {
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
				</div>
				<S.CopyrightContainer>
					<S.CopyrightIcon className="fa-regular fa-copyright"></S.CopyrightIcon>
					<S.YearName>2022 - Sondre Halvorsen</S.YearName>
				</S.CopyrightContainer>
			</S.Aside>
		</>
	);
}
