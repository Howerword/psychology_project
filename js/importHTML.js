// js/importHTML.js
function includeHTML() {
	let elements = document.querySelectorAll("[data-include]");

	elements.forEach(async (el) => {
		let file = el.getAttribute("data-include");
		try {
			let response = await fetch(file);
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			let html = await response.text();
			el.innerHTML = html;
		} catch (error) {
			console.error("Error loading the file:", error);
		}
	});
}

includeHTML();
