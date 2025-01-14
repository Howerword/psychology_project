document.addEventListener("partialsLoaded", async () => {
	try {
		// Завантаження header.js
		console.log("Завантаження header.js...");
		const headerModule = await import("./header.js");
		console.log("header.js завантажено успішно");

		// Завантаження feedback.js
		console.log("Завантаження feedback.js...");
		const feedbackModule = await import("./feedback.js");
		window.feedbackJsLoaded = true;
		console.log("feedback.js завантажено успішно");

		// Завантаження form.js
		console.log("Завантаження form.js...");
		const formModule = await import("./form.js");
		console.log("form.js завантажено успішно");

		// Завантаження carousel.js
		console.log("Завантаження carousel.js...");
		const carouselModule = await import("./carousel.js");
		console.log("carousel.js завантажено успішно");

		// Завантаження footer.js
		console.log("Завантаження footer.js...");
		const footerModule = await import("./footer.js");
		console.log("footer.js завантажено успішно");

		console.log("partialsLoaded — всі файли завантажені успішно.");
	} catch (error) {
		console.error("Помилка при завантаженні модуля:", error);
	}
});
