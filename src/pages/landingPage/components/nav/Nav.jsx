import { useEffect } from 'react';
import { AiFillHome } from 'react-icons/ai';
import {
	BsFillPersonLinesFill,
	BsFillSunFill,
	BsFillTelephoneFill,
} from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { ImCogs } from 'react-icons/im';
import { Link } from 'react-scroll';
import Socials from './components/Socials';
import * as style from './style';

const Navbar = () => {
	// LOCAL STORAGE FOR CHECKBOX
	function save() {
		let checkbox = document.getElementById('themeToggle');
		localStorage.setItem('themeToggle', checkbox.checked);
	}

	function load() {
		let checked = JSON.parse(
			localStorage.getItem('themeToggle')
		);
		document.getElementById('themeToggle').checked = checked;
	}

	useEffect(() => {
		load();
	});

	// LOCAL STORAGE FOR COLOR THEME
	function isLight() {
		return localStorage.getItem('light-mode');
	}

	function toggleRootClass() {
		document
			.querySelector(':root')
			.classList.toggle('light');
	}

	function toggleLocalStorageItem() {
		if (isLight()) {
			localStorage.removeItem('light-mode');
		} else {
			localStorage.setItem('light-mode', 'set');
		}
	}

	if (isLight()) {
		toggleRootClass();
	}

	return (
		<>
			<style.ThemeToggleButton>
				<input
					type='checkbox'
					id='themeToggle'
					style={{ display: 'none' }}
					onClick={() => {
						toggleLocalStorageItem();
						toggleRootClass();
						save();
					}}
				/>
				<label for='themeToggle'>
					<span>
						<BsFillSunFill className='sun' />
						<FaMoon className='moon' />
					</span>
				</label>
			</style.ThemeToggleButton>

			<Socials />

			<style.NavMobile>
				<Link
					to='home'
					spy={true}
					smooth={true}
					offset={0}
					duration={400}
				>
					<AiFillHome />
				</Link>

				<Link
					to='about'
					spy={true}
					smooth={true}
					offset={0}
					duration={400}
				>
					<BsFillPersonLinesFill />
				</Link>

				<Link
					to='projects'
					spy={true}
					smooth={true}
					offset={0}
					duration={400}
				>
					<ImCogs />
				</Link>

				<Link
					to='contact'
					spy={true}
					smooth={true}
					offset={0}
					duration={400}
				>
					<BsFillTelephoneFill />
				</Link>
			</style.NavMobile>

			<style.NavDesktop>
				<style.LinkContainer>
					<Link
						to='home'
						spy={true}
						smooth={true}
						offset={0}
						duration={400}
					>
						<AiFillHome />
						<p>Hjem</p>
					</Link>

					<Link
						to='about'
						spy={true}
						smooth={true}
						offset={0}
						duration={400}
					>
						<BsFillPersonLinesFill />
						<p>Om Meg</p>
					</Link>

					<Link
						to='projects'
						spy={true}
						smooth={true}
						offset={0}
						duration={400}
					>
						<ImCogs />
						<p>Prosjekter</p>
					</Link>

					<Link
						to='contact'
						spy={true}
						smooth={true}
						offset={0}
						duration={400}
					>
						<BsFillTelephoneFill />
						<p>Kontakt Meg</p>
					</Link>
				</style.LinkContainer>
			</style.NavDesktop>
		</>
	);
};

export default Navbar;
