const btnFeedback = document.getElementById("btn-feedback");

btnFeedback.addEventListener("click", () => {
	const feedbackFirst = document.getElementById("feedback-first");
	const feedbackSecond = document.getElementById("feedback-second");

	if (feedbackSecond.style.display === "block") {
		feedbackSecond.style.display = "none";
		btnFeedback.innerHTML = "Більше...";
	} else {
		feedbackSecond.style.display = "block";
		btnFeedback.innerHTML = "Менше...";
	}
});
