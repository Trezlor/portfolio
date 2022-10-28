export function isLight() {
	return localStorage.getItem('light-mode');
}

export function toggleRootClass() {
	document.querySelector(':root').classList.toggle('light');
}

export function toggleLocalStorageItem() {
	if (isLight()) {
		localStorage.removeItem('light-mode');
	} else {
		localStorage.setItem('light-mode', 'set');
	}
}
