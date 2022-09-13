import { NavLink } from "react-router-dom";
import { SidebarData } from "./sidebar/data";
import {
	StyledSidebarAside,
	StyledSidebarImg,
	StyledSidebarNameH2,
} from "./sidebar/styledComponents";

export default function Sidebar() {
	return (
		<>
			<StyledSidebarAside className="sidebar">
				<div>
					<div className="profilePicture">
						<StyledSidebarImg src={require(`./images/linus.png`)} alt="Sondre" />
					</div>
					<StyledSidebarNameH2 className="profileName">
						Sondre Halvorsen
					</StyledSidebarNameH2>
					<ul className="sidebarList">
						{SidebarData.map((val, key) => {
							return (
								<>
									<NavLink key={key} className="row" to={val.link}>
										<div className="icon">{val.icon}</div>
										<div className="title">{val.title}</div>
									</NavLink>
								</>
							);
						})}
					</ul>
				</div>
				<li className="copyright">
					<i class="fa-regular fa-copyright"></i>
					<h4>2022 - Sondre Halvorsen</h4>
				</li>
			</StyledSidebarAside>
		</>
	);
}
