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
						<StyledSidebarImg src={require(`./images/sondre2.png`)} alt="Sondre" />
					</div>
					<StyledSidebarNameH2 className="profileName">
						Sondre Halvorsen
					</StyledSidebarNameH2>
					<ul className="sidebarList">
						{SidebarData.map((val, key) => {
							return (
								<div key={key + 1}>
									<NavLink key={key} className="row" to={val.link}>
										<li key={key + 2} className="icon">
											{val.icon}
										</li>
										<li key={key + 3} className="title">
											{val.title}
										</li>
									</NavLink>
								</div>
							);
						})}
					</ul>
				</div>
				<div className="copyright">
					<i className="fa-regular fa-copyright"></i>
					<h4>2022 - Sondre Halvorsen</h4>
				</div>
			</StyledSidebarAside>
		</>
	);
}
