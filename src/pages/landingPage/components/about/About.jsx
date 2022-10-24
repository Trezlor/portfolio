import { useState } from 'react';
import { GiConsoleController } from 'react-icons/gi';
import { ImCss3, ImHtmlFive } from 'react-icons/im';
import { IoMdBriefcase } from 'react-icons/io';
import { RiCodeBoxFill } from 'react-icons/ri';
import { SiJavascript, SiReact } from 'react-icons/si';
import ME from '../../../../assets/images/about-me2.png';
import * as style from './style';

const About = () => {
	const [activeTab, setActiveTab] = useState('coding');
	const [activeText, setActiveText] = useState('codingText');

	return (
		<section id='about'>
			<h5>
				{/* Get to know */}
				Finn ut mer
			</h5>
			<h2>
				{/* About Me */}
				Om Meg
			</h2>

			<style.Container className='container'>
				<style.AboutMe>
					<style.AboutMeImage>
						<img src={ME} alt='minion' />
					</style.AboutMeImage>
				</style.AboutMe>

				<style.Content>
					<style.AboutCards>
						<style.AboutCard
							className={
								activeTab === 'coding'
									? 'active'
									: ''
							}
							onClick={() => {
								setActiveTab('coding');
								setActiveText('codingText');
							}}
						>
							<style.AboutCardHeader className='card__header'>
								<RiCodeBoxFill className='icon' />
								<h5>
									Koding
									{/* Coding */}
								</h5>
							</style.AboutCardHeader>
							<small>
								Interesse
								{/* Interest */}
							</small>
						</style.AboutCard>

						<style.AboutCard
							className={
								activeTab === 'skills'
									? 'active'
									: ''
							}
							onClick={() => {
								setActiveTab('skills');
								setActiveText('skillsText');
							}}
						>
							<style.AboutCardHeader className='card__header'>
								<IoMdBriefcase className='icon' />
								<h5>
									Ferdigheter
									{/* Skills */}
								</h5>
							</style.AboutCardHeader>
							<small>
								Språk
								{/* Languages */}
							</small>
						</style.AboutCard>

						<style.AboutCard
							className={
								activeTab === 'hobbies'
									? 'active'
									: ''
							}
							onClick={() => {
								setActiveTab('hobbies');
								setActiveText('hobbiesText');
							}}
						>
							<style.AboutCardHeader className='card__header'>
								<GiConsoleController className='icon' />
								<h5>
									Hobby
									{/* Hobbies */}
								</h5>
							</style.AboutCardHeader>
							<small>Gaming</small>
						</style.AboutCard>
					</style.AboutCards>
					<p
						className={
							activeText === 'codingText'
								? 'activeText skills coding'
								: 'skills coding'
						}
					>
						{/* I have a big fascination with programming, and have been learning how to
						code for about 6 months! I love a challenge and strive to learn new coding
						skills. My current skills involves HTML, CSS, Javascript & React. */}
						Jeg har stor fascinasjon for frontend
						programmering, det å realisere koden man
						skriver er veldig artig. Er lærevillig og
						tar en utfordring på strak arm. Jeg er
						for det meste glad i css styling og å
						jobbe med javascript, og syns alltid det
						er gøy å lære nye lettere måter å jobbe
						på.
					</p>

					<p
						className={
							activeText === 'hobbiesText'
								? 'activeText skills hobbies'
								: 'skills hobbies'
						}
					>
						{/* My biggest hobby is gaming, and has been ever since i was a kid. Some of the
						games are League of Legends, Apex, Overwatch and Valorant. Gaming has taught
						me many things, such as risk-taking, patience, problem solving,
						concentration, critical thinking and the value of working together with
						others. */}
						På fritiden liker jeg å game, og har
						holdt på med det så lenge jeg kan huske.
						Et par av spillene jeg liker å holde på
						med er League of Legends, Overwatch og
						Valorant. Er også glad i hjernetrim og
						skrekk-spill.
						<br style={{ marginBottom: '1rem' }} />
						Jeg har lært mye fra gaming, som
						risikotagning, tålmodighet,
						problemløsning, være konsentrert, ha
						kritisk tenkning og forståelse for hvor
						bra det kan være å jobbe som et team.
					</p>

					<div
						className={
							activeText === 'skillsText'
								? 'activeText skills language'
								: 'skills language'
						}
					>
						<div className='skill_scale'>
							<p>
								{/* Novice */}
								Nybegynner
							</p>
							<p>
								{/* Expert */}
								Ekspert
							</p>
						</div>
						<div className='skill'>
							<ImHtmlFive className='icon html' />
							<div className='skill_bar_bg active'>
								<div className='skill_bar_html'></div>
							</div>
						</div>
						<div className='skill'>
							<ImCss3 className='icon css' />
							<div className='skill_bar_bg'>
								<div className='skill_bar_css'></div>
							</div>
						</div>
						<div className='skill'>
							<SiJavascript className='icon js' />
							<div className='skill_bar_bg'>
								<div className='skill_bar_js'></div>
							</div>
						</div>
						<div className='skill skill__react'>
							<SiReact className='icon react' />
							<div className='skill_bar_bg'>
								<div className='skill_bar_react'></div>
							</div>
						</div>
					</div>

					<a
						href='#contact'
						className='btn btn-primary'
					>
						{/* Let's Talk */}
						Kom i kontakt
					</a>
				</style.Content>
			</style.Container>
		</section>
	);
};

export default About;
