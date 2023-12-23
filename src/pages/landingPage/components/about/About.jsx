import { useState } from 'react';
import { GiConsoleController } from 'react-icons/gi';
import { ImCss3, ImHtmlFive } from 'react-icons/im';
import { IoMdBriefcase } from 'react-icons/io';
import { RiCodeBoxFill } from 'react-icons/ri';
import { SiJavascript, SiReact } from 'react-icons/si';
import * as style from './style';
import figmaLogo from '../../../../assets/figma.png';

const About = () => {
	const [activeCard, setActiveCard] = useState('coding');
	const [activeText, setActiveText] = useState('codingText');

	return (
		<section id='about'>
			<h5>Finn ut mer</h5>

			<h2>Om Meg</h2>

			<style.Container className='container'>
				<style.MeImgContainer>
					<img
						src='https://ik.imagekit.io/sondre/tr:w-448px/Portfolio/about-me.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667296671962'
						alt='me'
					/>
				</style.MeImgContainer>

				<div>
					<style.CardsContainer>
						<style.Card
							className={activeCard === 'coding' ? 'card__active' : ''}
							onClick={() => {
								setActiveCard('coding');
								setActiveText('codingText');
							}}
						>
							<RiCodeBoxFill className='card__icon' />

							<h5>Koding</h5>
						</style.Card>

						<style.Card
							className={activeCard === 'skills' ? 'card__active' : ''}
							onClick={() => {
								setActiveCard('skills');
								setActiveText('skillsText');
							}}
						>
							<IoMdBriefcase className='card__icon' />

							<h5>Kodespråk</h5>
						</style.Card>

						<style.Card
							className={activeCard === 'hobbies' ? 'card__active' : ''}
							onClick={() => {
								setActiveCard('hobbies');
								setActiveText('hobbiesText');
							}}
						>
							<GiConsoleController className='card__icon' />

							<h5>Hobbyer</h5>
						</style.Card>
					</style.CardsContainer>

					<style.InfoContainer>
						<p className={activeText === 'codingText' ? 'text__active' : ''}>
							Har holdt på med front-end programmering i litt over et år, og prøver stadig å
							lære nye ting.
							<br style={{ marginBottom: '1rem' }} />
							På fritiden lager jeg nettsider som kan brukes til forskjellige ting jeg er
							interessert i, som oftest er dette for diverse spill og kan også tas i bruk av
							andre.
							<br style={{ marginBottom: '1rem' }} />
							Jobber godt med HTML og Javascript, men er mest dreven i CSS. Bruker for
							øyeblikket rammeverket React, og har nylig begynt å lære meg Typescript for en
							bedre kode.
						</p>

						<style.SkillsInfo className={activeText === 'skillsText' ? 'text__active' : ''}>
							<ImHtmlFive className='icon html' />
							<ImCss3 className='icon css' />
							<SiJavascript className='icon js' />
							<SiReact className='icon react' />
							<img
								src={figmaLogo}
								alt='figma logo'
								className='icon figma'
							/>
						</style.SkillsInfo>

						<p className={activeText === 'hobbiesText' ? 'text__active' : ''}>
							Liker å trene aktivt, game og være sosial. Synes det er viktig å holde meg i form
							men og samtidig ha det gøy med venner både online og offline.
							<br style={{ marginBottom: '1rem' }} />
							Gjennom gaming har jeg lært hvor viktig det kan være å samarbeide, løse problemer
							på en effektiv måte, tenkte kritisk og være tålmodig / observant.
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
