// Додаємо слухача подій на скрол сторінки
window.addEventListener("scroll", () => {
	const navbar = document.querySelector(".header");
	if (window.scrollY > 50) {
		navbar.classList.add("scrolled"); // Додаємо клас при прокручуванні вниз
	} else {
		navbar.classList.remove("scrolled"); // Видаляємо клас, якщо сторінка повертається вверх
	}
});

// burger menu
const menuIcon = document.querySelector(".menu-icon");
const menuBody = document.querySelector(".menu-body");

if (menuIcon) {
	menuIcon.addEventListener("click", () => {
		document.body.classList.toggle("lock");
		menuIcon.classList.toggle("active");
		menuBody.classList.toggle("active");
	});
}
