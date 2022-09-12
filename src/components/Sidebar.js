import { NavLink } from "react-router-dom";
import { SidebarData } from "./sidebar/data";

export default function Sidebar() {
	return (
		<>
			<aside>
				<div className="sidebar">
					<div className="profilePicture"></div>
					<h2 className="profileName">Sondre Halvorsen</h2>
					<ul className="sidebarList">
						{SidebarData.map((val, key) => {
							return (
								<>
									<NavLink key={key} className="row" to={val.link}>
										<div id="icon">{val.icon}</div>
										<div id="title">{val.title}</div>
									</NavLink>
								</>
							);
						})}
					</ul>
				</div>
			</aside>
		</>
	);
}
