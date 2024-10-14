document.addEventListener("DOMContentLoaded", () => {
	console.log("HTML завантажено повністю");
	// Додаткові дії після завантаження HTML, наприклад ініціалізація подій.
});

document.addEventListener("partialsLoaded", () => {
	import("./importHTML.js");

	console.log("partialsLoaded");
});
