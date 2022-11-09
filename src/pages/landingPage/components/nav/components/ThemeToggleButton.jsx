import React, { useEffect } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import * as style from '../style';
import { load, save } from '../utils/localStorage/checkBox';
import { isLight, toggleLocalStorageItem, toggleRootClass } from '../utils/localStorage/themeColor';

const ThemeToggleButton = () => {
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
			<style.ThemeToggleButton>
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
				<label htmlFor='themeToggle'>
					<BsMoonStars className='moon' />
					<BsSun className='sun' />
				</label>
			</style.ThemeToggleButton>
		</>
	);
};

export default ThemeToggleButton;
