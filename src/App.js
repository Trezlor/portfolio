import { HashRouter, Route, Routes } from "react-router-dom";
import "./assets/global.css";
import GlassEffect from "./layouts/glass-effect/GlassEffect";
import Sidebar from "./layouts/Navbars/side-nav/index";
import Navbar from "./layouts/Navbars/top-nav/index";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";

export default function App() {
	return (
		<HashRouter>
			<div className="App">
				<>
					<Navbar />
					<Sidebar />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/projects" element={<ProjectsPage />} />
						<Route path="/contact" element={<ContactPage />} />
					</Routes>
					<GlassEffect />
				</>
			</div>
		</HashRouter>
	);
}
