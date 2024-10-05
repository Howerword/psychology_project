document.addEventListener("partialLoaded", () => {});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar-links");

hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("active");
});
