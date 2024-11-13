Promise.all([
	import("./header.js"),
	import("./feedback.js"),
	import("./form.js"),
])
	.then(() => {
		console.log("Всі файли завантажені, ініціалізуємо Swiper");
		const swiper = new Swiper(".swiper-container", {
			loop: true,
			spaceBetween: 30,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
			},
		});
		console.log("Swiper ініціалізовано успішно");
	})
	.catch((err) => {
		console.error(
			"Помилка при завантаженні файлів або ініціалізації Swiper",
			err
		);
	});
