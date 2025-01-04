document
	.getElementById("feedbackForm")
	.addEventListener("submit", function (e) {
		e.preventDefault(); 

		const formData = new FormData(this);

		// Перейменовуємо поле "contact" у "email" для FormsFree
		const contact = formData.get("contact");
		if (!contact) {
			alert("Будь ласка, введіть спосіб зв'язку (email, Telegram або інше).");
			return;
		}
		formData.delete("contact");
		formData.append("email", contact); // FormsFree очікує саме поле "email"

		fetch("https://formspree.io/f/mgvezbzl", {
			method: "POST",
			body: formData,
			headers: {
				Accept: "application/json",
			},
		})
			.then((response) => {
				if (response.ok) {
					alert(
						"Повідомлення надіслано успішно! Очікуйте відповіді на Ваш запит."
					);
					document.getElementById("feedbackForm").reset();
				} else {
					alert("Щось пішло не так. Спробуйте ще раз пізніше.");
				}
			})
			.catch((error) => {
				alert("Сталася помилка при відправленні форми. Спробуйте ще раз.");
				console.error("Помилка:", error);
			});
	});
