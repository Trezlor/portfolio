import { Route, Routes } from "react-router-dom";
import GlassEffect from "../components/GlassEffect";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ContactPage from "./landingPage/ContactPage";
import HomePage from "./landingPage/HomePage";
import ProjectsPage from "./landingPage/ProjectsPage";

export default function LandingPage() {
	return (
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
	);
}
