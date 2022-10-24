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

			<style.MobileNav>
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
			</style.MobileNav>

			<style.DesktopNav>
				<style.LinkWrapper>
					<div className='link__category'>
						<p>Hjem</p>
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
					</div>

					<div className='link__category'>
						<p>Om Meg</p>
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
					</div>

					<div className='link__category'>
						<p>Prosjekter</p>
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
					</div>

					<div className='link__category'>
						<p>Kontakt Meg</p>
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
					</div>
				</style.LinkWrapper>
			</style.DesktopNav>
		</>
	);
};

export default Navbar;
