export function save() {
	let checkbox = document.getElementById('themeToggle');
	localStorage.setItem('themeToggle', checkbox.checked);
}

export function load() {
	let checked = JSON.parse(
		localStorage.getItem('themeToggle')
	);
	document.getElementById('themeToggle').checked = checked;
}
