import React, { useRef, useState } from 'react';
import { Link } from 'react-scroll';
import ThemeToggleButton from './components/ThemeToggleButton';
import * as style from './style';

const Navbar = () => {
	const [navState, setNavState] = useState('closed');

	const menu = useRef(null);

	const closeMenu = (e) => {
		if (menu.current && navState === 'open' && !menu.current.contains(e.target)) {
			setNavState('closed');
		}
	};

	document.addEventListener('mousedown', closeMenu);

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

			<style.menu
				className={navState}
				ref={menu}
			>
				<ThemeToggleButton />

				<ul>
					<li>
						<Link
							to='home'
							spy={true}
							smooth={true}
							offset={0}
							duration={400}
							onClick={() => {
								setNavState('closed');
							}}
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
							onClick={() => setNavState('closed')}
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
							onClick={() => setNavState('closed')}
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
							onClick={() => setNavState('closed')}
						>
							Kom i Kontakt
						</Link>
					</li>
				</ul>
			</style.menu>
		</>
	);
};

export default Navbar;
