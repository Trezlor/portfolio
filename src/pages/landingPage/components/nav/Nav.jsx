import React from 'react';
import BurgerMenu from './components/BurgerMenu';
import ThemeToggleButton from './components/burgerMenuFiles/ThemeToggleButton';
import Socials from './components/Socials';

const Navbar = () => {
	return (
		<>
			<ThemeToggleButton />

			<BurgerMenu />

			<Socials />
		</>
	);
};

export default Navbar;
