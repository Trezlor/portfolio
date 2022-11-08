import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import * as style from './nav/style';

const Socials = () => {
	return (
		<style.SocialsLinks>
			<a
				href='https://www.linkedin.com/in/sondre-halvorsen-74a453241/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<BsLinkedin />
			</a>
			<a
				href='https://github.com/SondreHal'
				target='_blank'
				rel='noopener noreferrer'
			>
				<BsGithub />
			</a>
			<a
				href='mailto:sondre-h@hotmail.com'
				target='_blank'
				rel='noopener noreferrer'
			>
				<MdEmail />
			</a>
		</style.SocialsLinks>
	);
};

export default Socials;
