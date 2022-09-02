import { SidebarData } from "./sidebar/data";

export default function Sidebar() {
	return (
		<>
			<aside>
				<div className="sidebar">
					<ul className="sidebarList">
						{SidebarData.map((val, key) => {
							return (
								<li
									key={key}
									className="row"
									id={window.location.pathname === val.link ? "active" : ""}
									onClick={() => {
										window.location.pathname = val.link;
									}}
								>
									<div id="icon">{val.icon}</div>
									<div id="title">{val.title}</div>
								</li>
							);
						})}
					</ul>
				</div>
			</aside>
			,
		</>
	);
}
