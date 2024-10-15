const btnFeedback = document.getElementById("btn-feedback");

btnFeedback.addEventListener("click", () => {
	const feedbackSecond = document.getElementById("feedback-second");
	btnFeedback.style.color = "var(--color-white)";

	if (feedbackSecond.classList.contains("open")) {
		// Згортаємо блок
		feedbackSecond.classList.remove("open");
		btnFeedback.innerHTML = "<p>Більше...</p>";
	} else {
		// Розгортаємо блок
		feedbackSecond.classList.add("open");
		btnFeedback.innerHTML = "<p>Менше...</p>";
	}
});
