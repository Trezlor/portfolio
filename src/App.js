import { useState } from 'react';
import './assets/global.css';
import LandingPage from './pages/LandingPage';
import { menuToggleContext } from './utils/menuToggleContext';

export default function App() {
	const [navState, setNavState] = useState('closed');

	return (
		<div className='App'>
			<>
				<menuToggleContext.Provider value={{ navState, setNavState }}>
					<LandingPage />
				</menuToggleContext.Provider>
			</>
		</div>
	);
}
