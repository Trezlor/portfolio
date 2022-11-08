import React, { useContext, useEffect } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { menuToggleContext } from '../../../../../utils/menuToggleContext';
import * as style from '../style';
import { load, save } from './localStorage/checkBox';
import { isLight, toggleLocalStorageItem, toggleRootClass } from './localStorage/themeColor';

const ThemeToggleButton = () => {
	const { navState } = useContext(menuToggleContext);

	// LOADS LOCAL STORAGE FOR CHECKBOX ON PAGE LOAD
	useEffect(() => {
		load();

		// IF LOCAL STORAGE HAS LIGHT MODE COLOR THEME, SETS COLOR THEME TO LIGHT MODE
		if (isLight()) {
			toggleRootClass();
		}
	}, []);

	return (
		<>
			<style.ThemeToggleButton className={navState}>
				<input
					type='checkbox'
					id='themeToggle'
					style={{ display: 'none' }}
					onClick={() => {
						toggleLocalStorageItem();
						toggleRootClass();
						save();
					}}
				/>
				<label for='themeToggle'>
					<span>
						<BsFillSunFill className='sun' />
						<FaMoon className='moon' />
					</span>
				</label>
			</style.ThemeToggleButton>
		</>
	);
};

export default ThemeToggleButton;
