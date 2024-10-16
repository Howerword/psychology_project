// Додаємо слухача подій на скрол сторінки
window.addEventListener("scroll", () => {
	const navbar = document.querySelector(".header");
	if (window.scrollY > 50) {
		navbar.classList.add("scrolled"); // Додаємо клас при прокручуванні вниз
	} else {
		navbar.classList.remove("scrolled"); // Видаляємо клас, якщо сторінка повертається вверх
	}
});

// scroll to section
const menuLinks = document.querySelectorAll(".menu-link[data-goto]");
if (menuLinks.length > 0) {
	menuLinks.forEach((menuLink) => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (
			menuLink.dataset.goto &&
			document.querySelector(menuLink.dataset.goto)
		) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue =
				gotoBlock.getBoundingClientRect().top +
				pageYOffset -
				document.querySelector("header").offsetHeight;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth",
			});
			e.preventDefault();
		}
	}
}

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
