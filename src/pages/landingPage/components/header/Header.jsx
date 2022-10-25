import { useState } from 'react';
import ME from '../../../../assets/images/sondre7.png';
import CTA from './components/CTA';
import letterArray from './components/letterArray';
import * as style from './style';

const Header = () => {
	const [isHovering, setIsHovering] = useState({
		S: false,
		o: false,
		n: false,
		d: false,
		r: false,
		e: false,
		'!': false,
	});

	const handleMouseOver = (e) => {
		let letter = e.target.id;
		setIsHovering((olderValue) => ({
			...olderValue,
			[letter]: true,
		}));

		setTimeout(() => {
			setIsHovering((olderValue) => ({
				...olderValue,
				[letter]: false,
			}));
		}, 500);
	};

	return (
		<>
			<style.Main id='home'>
				<div className='container'>
					<h5>
						{/* Hi, I'm */}
						Hei, mitt navn er
					</h5>

					<h1>
						<style.Hover_Card>
							Hover me!
						</style.Hover_Card>
						{letterArray.map((letter, key) => {
							return (
								<style.Letter_Effect
									key={key}
									className={
										isHovering[letter]
											? 'hovered'
											: ''
									}
									onMouseOver={handleMouseOver}
									id={letter}
								>
									{letter}
								</style.Letter_Effect>
							);
						})}
					</h1>

					<h5 className='text-light'>
						{/* Frontend developer student from Norway! */}
						Frontend utvikler student fra Norge
					</h5>

					<CTA />

					<style.Me_Img>
						<img src={ME} alt='Sondre Halvorsen' />
					</style.Me_Img>
				</div>
			</style.Main>
		</>
	);
};
export default Header;
