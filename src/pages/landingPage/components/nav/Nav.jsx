import React, { useState } from 'react';
import { Link } from 'react-scroll';
import NavSocials from './components/NavSocials';
import ThemeToggleButton from './components/ThemeToggleButton';
import * as style from './style';

const Navbar = () => {
	const [navState, setNavState] = useState('closed');

	const closeMenu = () => {
		setNavState('closed');
	};

	const pageSections = document.querySelectorAll('#home, #about, #projects, #contact');
	pageSections.forEach((e) => {
		e.addEventListener('mousedown', closeMenu);
	});

	return (
		<>
			<style.burgerMenuContainer
				onClick={() => {
					if (navState === 'closed' ? setNavState('open') : setNavState('closed'));
				}}
			>
				<style.line1 className={navState} />
				<style.line2 className={navState} />
				<style.line3 className={navState} />
			</style.burgerMenuContainer>

			<style.menu className={navState}>
				<ThemeToggleButton />

				<ul>
					<li>
						<Link
							to='home'
							spy={true}
							smooth={true}
							offset={0}
							duration={400}
							onClick={() => closeMenu()}
						>
							Hjem
						</Link>
					</li>

					<li>
						<Link
							to='about'
							spy={true}
							smooth={true}
							offset={0}
							duration={400}
							onClick={() => closeMenu()}
						>
							Om Meg
						</Link>
					</li>

					<li>
						<Link
							to='projects'
							spy={true}
							smooth={true}
							offset={0}
							duration={400}
							onClick={() => closeMenu()}
						>
							Prosjekter
						</Link>
					</li>

					<li>
						<Link
							to='contact'
							spy={true}
							smooth={true}
							offset={0}
							duration={400}
							onClick={() => closeMenu()}
						>
							Kom i Kontakt
						</Link>
					</li>
				</ul>
				<NavSocials />
			</style.menu>
		</>
	);
};

export default Navbar;
