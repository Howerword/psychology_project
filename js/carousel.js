let activeCard = null;

document.querySelectorAll('.card').forEach(card => {
	card.addEventListener('click', () => {
		if (activeCard && activeCard !== card) {
			activeCard.classList.remove('flipped');
		}
		if (card.classList.contains('flipped')) {
			card.classList.remove('flipped');
			activeCard = null;
		} else {
			card.classList.add('flipped');
			activeCard = card;
		}
	});
});