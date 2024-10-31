document
	.getElementById("feedbackForm")
	.addEventListener("submit", function (e) {
		e.preventDefault(); // Зупиняємо стандартну поведінку відправлення форми

		const formData = new FormData(this);

		fetch("https://formspree.io/f/mbljgodo", {
			method: "POST",
			body: formData,
			headers: {
				Accept: "application/json",
			},
		})
			.then((response) => {
				if (response.ok) {
					alert(
						"Повідомлення надіслано успішно! Дякуємо за зворотній зв'язок. Очікуйте відповіді від нашого спеціаліста."
					);
					document.getElementById("feedbackForm").reset(); // Очищаємо форму після успішної відправки
				} else {
					alert("Щось пішло не так. Спробуйте ще раз пізніше.");
				}
			})
			.catch((error) => {
				alert("Сталася помилка при відправленні форми. Спробуйте ще раз.");
				console.error("Помилка:", error);
			});
	});
