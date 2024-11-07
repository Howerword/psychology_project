document.addEventListener("DOMContentLoaded", () => {
	console.log("HTML завантажено повністю");
	// Додаткові дії після завантаження HTML, наприклад ініціалізація подій.
});

document.addEventListener("partialsLoaded", () => {
	import("./header.js");
	import("./feedback.js");
	import("./form.js");

	console.log("partialsLoaded");
});
