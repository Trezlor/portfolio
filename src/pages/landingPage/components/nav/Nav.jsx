import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';

import React from 'react';
import { Link } from 'react-scroll';
import Socials from './components/Socials';
import * as style from './style';

const Navbar = () => {
	return (
		<>
			<Socials />

			<style.NavMobile>
				<Link
					to='home'
					spy={true}
					smooth={true}
					offset={0}
					duration={400}
				>
					<AiOutlineHome />
				</Link>

				<Link
					to='about'
					spy={true}
					smooth={true}
					offset={0}
					duration={400}
				>
					<AiOutlineUser />
				</Link>

				<Link
					to='projects'
					spy={true}
					smooth={true}
					offset={0}
					duration={400}
				>
					<BsPencil />
				</Link>

				<Link
					to='contact'
					spy={true}
					smooth={true}
					offset={0}
					duration={400}
				>
					<BiMessageDetail />
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
						<AiOutlineHome />
						<p>Hjem</p>
					</Link>

					<Link
						to='about'
						spy={true}
						smooth={true}
						offset={0}
						duration={400}
					>
						<AiOutlineUser />
						<p>Om Meg</p>
					</Link>

					<Link
						to='projects'
						spy={true}
						smooth={true}
						offset={0}
						duration={400}
					>
						<BsPencil />
						<p>Prosjekter</p>
					</Link>

					<Link
						to='contact'
						spy={true}
						smooth={true}
						offset={0}
						duration={400}
					>
						<BiMessageDetail />
						<p>Kontakt Meg</p>
					</Link>
				</style.LinkContainer>
			</style.NavDesktop>
		</>
	);
};

export default Navbar;
