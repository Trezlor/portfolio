import React from 'react';
import About from './landingPage/components/about/About';
import Contact from './landingPage/components/contact/Contact';
import Header from './landingPage/components/header/Header';
import Navbar from './landingPage/components/nav/Nav';
import Projects from './landingPage/components/projects/Projects';

const LandingPage = () => {
	let columns = Math.floor(document.body.clientWidth / 50),
		rows = Math.floor(document.body.clientHeight / 50);

	let createTiles = columns * rows;

	return (
		<>
			<Navbar />
			<div id='tiles'>
				{Array.from(Array(createTiles), (index, key) => {
					return (
						<div
							className='tile'
							key={key}
						></div>
					);
				})}
			</div>
			<Header />
			<About />
			<Projects />
			<Contact />
		</>
	);
};

export default LandingPage;
