import { useState } from 'react';
import { GiConsoleController } from 'react-icons/gi';
import { ImCss3, ImHtmlFive } from 'react-icons/im';
import { IoMdBriefcase } from 'react-icons/io';
import { RiCodeBoxFill } from 'react-icons/ri';
import { SiJavascript, SiReact } from 'react-icons/si';
import * as style from './style';

const About = () => {
	const [activeCard, setActiveCard] = useState('coding');
	const [activeText, setActiveText] = useState('codingText');

	return (
		<section id='about'>
			<h5>Finn ut mer</h5>

			<h2>Om Meg</h2>

			<style.Container className='container'>
				<style.AboutMeImg>
					<img
						src='https://ik.imagekit.io/sondre/tr:w-448px/Portfolio/about-me.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667296671962'
						alt='me'
					/>
				</style.AboutMeImg>

				<div className='content__wrapper'>
					<style.AboutMeCards>
						<style.AboutMeCard
							className={activeCard === 'coding' ? 'card__active' : ''}
							onClick={() => {
								setActiveCard('coding');
								setActiveText('codingText');
							}}
						>
							<div className='card__header'>
								<RiCodeBoxFill className='card__icon' />

								<h5>Koding</h5>
							</div>

							<small>Interesse</small>
						</style.AboutMeCard>

						<style.AboutMeCard
							className={activeCard === 'skills' ? 'card__active' : ''}
							onClick={() => {
								setActiveCard('skills');
								setActiveText('skillsText');
							}}
						>
							<div className='card__header'>
								<IoMdBriefcase className='card__icon' />

								<h5>Ferdigheter</h5>
							</div>

							<small>Språk</small>
						</style.AboutMeCard>

						<style.AboutMeCard
							className={activeCard === 'hobbies' ? 'card__active' : ''}
							onClick={() => {
								setActiveCard('hobbies');
								setActiveText('hobbiesText');
							}}
						>
							<div className='card__header'>
								<GiConsoleController className='card__icon' />

								<h5>Hobby</h5>
							</div>

							<small>Gaming</small>
						</style.AboutMeCard>
					</style.AboutMeCards>

					<style.InfoContainer>
						<p className={activeText === 'codingText' ? 'text__active' : ''}>
							Jeg har stor fascinasjon for frontend programmering, det å realisere koden man skriver er veldig artig. Er lærevillig og
							tar en utfordring på strak arm. Jeg er for det meste glad i css styling og å jobbe med javascript, og syns alltid det er
							gøy å lære nye lettere måter å jobbe på.
						</p>

						<style.AboutMeSkills className={activeText === 'skillsText' ? 'text__active' : ''}>
							<ImHtmlFive className='icon html' />
							<ImCss3 className='icon css' />
							<SiJavascript className='icon js' />
							<SiReact className='icon react' />
						</style.AboutMeSkills>

						<p className={activeText === 'hobbiesText' ? 'text__active' : ''}>
							På fritiden liker jeg å trene aktivt, sosialisere meg og game. Synes det er viktig å holde meg i form men og samtidig ha
							det gøy med venner både online og offline.
							<br style={{ marginBottom: '1rem' }} />
							Jeg har lært en del fra gaming, for eksempel å være en lagspiller, løse problemer på en effektiv måte, ha god
							konsentrasjon og kritisk tenkning.
						</p>
					</style.InfoContainer>

					<a
						href='#contact'
						className='btn btn-primary'
					>
						Kom i kontakt
					</a>
				</div>
			</style.Container>
		</section>
	);
};

export default About;
