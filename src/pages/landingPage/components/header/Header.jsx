import { useState } from 'react';
import ME from '../../../../assets/images/sondre4.png';
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
			<style.Header id='home'>
				<style.Header_Container className='container'>
					<h5>
						{/* Hi, I'm */}
						Hei, mitt navn er
					</h5>
					<h1 style={{ position: 'relative' }}>
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

					<style.Div_Me>
						{/* <img src={ME} alt='Sondre Halvorsen' /> */}
					</style.Div_Me>
				</style.Header_Container>
			</style.Header>
		</>
	);
};
export default Header;
