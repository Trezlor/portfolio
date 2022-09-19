import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GlassEffect from "./layouts/glass-effect/GlassEffect";
import Navbar from "./layouts/nav-bar/Navbar";
import Sidebar from "./layouts/side-bar/Sidebar";
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
