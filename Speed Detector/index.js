const form = document.querySelector('form');
const pointsDisplay = document.querySelector('#points');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const speed = parseInt(document.querySelector('#speed').value);
	let points = 0;

	if (speed < 70) {
		pointsDisplay.textContent = 'Ok';
	} else {
		points = Math.floor((speed - 70) / 5);
		if (points > 12) {
			pointsDisplay.textContent = 'License suspended';
		} else {
			pointsDisplay.textContent = `Points: ${points}`;
		}
	}
});