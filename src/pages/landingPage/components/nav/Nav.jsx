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

			<style.Nav_Mobile>
				<Link
					className='link'
					to='home'
					spy={true}
					smooth={true}
					offset={0}
					duration={400}
				>
					<AiOutlineHome />
				</Link>

				<Link
					className='link'
					to='about'
					spy={true}
					smooth={true}
					offset={0}
					duration={400}
				>
					<AiOutlineUser />
				</Link>

				<Link
					className='link'
					to='projects'
					spy={true}
					smooth={true}
					offset={0}
					duration={400}
				>
					<BsPencil />
				</Link>

				<Link
					className='link'
					to='contact'
					spy={true}
					smooth={true}
					offset={0}
					duration={400}
				>
					<BiMessageDetail />
				</Link>
			</style.Nav_Mobile>

			<style.Nav_Desktop>
				<style.Link_Container>
					<Link
						className='link'
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
						className='link'
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
						className='link'
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
						className='link'
						to='contact'
						spy={true}
						smooth={true}
						offset={0}
						duration={400}
					>
						<BiMessageDetail />
						<p>Kontakt Meg</p>
					</Link>
				</style.Link_Container>
			</style.Nav_Desktop>
		</>
	);
};

export default Navbar;
