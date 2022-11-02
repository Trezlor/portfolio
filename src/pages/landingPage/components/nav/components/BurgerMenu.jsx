import React, { useState } from 'react';
import * as style from '../style';

const BurgerMenu = () => {
	const [navState, setNavState] = useState('closed');

	return (
		<>
			<style.burgerMenuContainer
				onClick={() => {
					if (navState === 'closed' ? setNavState('open') : setNavState('closed'));
				}}
			>
				<style.line1 className={navState} />
				<style.line2 className={navState} />
				<style.line3 className={navState} />
			</style.burgerMenuContainer>
			<style.menu className={navState}>content</style.menu>
		</>
	);
};

export default BurgerMenu;
