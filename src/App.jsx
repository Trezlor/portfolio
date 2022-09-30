import "./assets/global.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Nav";
import Projects from "./components/projects/Projects";

export default function App() {
	return (
		<div className="App">
			<>
				<Header />
				<Navbar />
				<About />
				<Experience />
				<Projects />
				<Contact />
			</>
		</div>
	);
}
