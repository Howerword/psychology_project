const menuIcon = document.querySelector(".menu-icon");
const menuBody = document.querySelector(".menu-body");
const menuLinks = document.querySelectorAll(".menu-link");
const btnPrimary = document.querySelector(".btn-primary");


window.addEventListener("scroll", () => {
	const navbar = document.querySelector(".header");
	if (window.scrollY > 50) {
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
});


if (menuIcon) {
	menuIcon.addEventListener("click", () => {
		document.body.classList.toggle("lock");
		menuIcon.classList.toggle("active");
		menuBody.classList.toggle("active");
	});
}

function closeMenu() {
	document.body.classList.toggle("lock", false);
	menuIcon.classList.toggle("active", false);
	menuBody.classList.toggle("active", false);
}


if (menuLinks.length > 0) {
	menuLinks.forEach((menuLink) => {
		menuLink.addEventListener("click", function (e) {
			e.preventDefault();
			const targetId = this.getAttribute("href").substring(1);
			const targetElement = document.getElementById(targetId);

			closeMenu();

			if (targetElement) {
				window.scrollTo({
					top: targetElement.offsetTop - 50,
					behavior: "smooth",
				});
			}
		});
	});
}


if (btnPrimary) {
	btnPrimary.addEventListener("click", function(e) {
		e.preventDefault();
		const targetId = this.getAttribute("href").substring(1);
		const targetElement = document.getElementById(targetId);

		closeMenu(); 

		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop - 50,
				behavior: "smooth",
			});
		}
	});
}