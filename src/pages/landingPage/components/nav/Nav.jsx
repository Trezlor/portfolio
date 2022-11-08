import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { menuToggleContext } from '../../../../utils/menuToggleContext';
import ThemeToggleButton from './components/ThemeToggleButton';
import * as style from './style';

const Navbar = () => {
	const { navState, setNavState } = useContext(menuToggleContext);

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
