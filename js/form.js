document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    
    // Отримуємо всі можливі способи зв'язку
    const telegram = formData.get("telegram") || "";
    const facebook = formData.get("facebook") || "";
    const instagram = formData.get("instagram") || "";
    const email = formData.get("email") || "";
    
    // Перевіряємо, чи заповнений хоча б один спосіб зв'язку
    if (!telegram && !facebook && !instagram && !email) {
        alert("Будь ласка, введіть хоча б один спосіб зв'язку (Telegram, Facebook, Instagram або електронну пошту).");
        return;
    }

    // Створюємо об'єкт для відправки
    const dataToSend = {
        _subject: "Нове повідомлення з форми зворотного зв'язку",
        message: formData.get("message") || "",
        name: formData.get("name") || "",
        contacts: {
            telegram: telegram,
            facebook: facebook,
            instagram: instagram,
            email: email
        }
    };

    // Видаляємо порожні контакти
    Object.keys(dataToSend.contacts).forEach(key => {
        if (!dataToSend.contacts[key]) {
            delete dataToSend.contacts[key];
        }
    });

    fetch("https://formspree.io/f/mgvezbzl", {
        method: "POST",
        body: JSON.stringify(dataToSend),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    })
        .then((response) => {
            if (response.ok) {
                alert("Повідомлення надіслано успішно! Очікуйте відповіді на Ваш запит.");
                document.getElementById("feedbackForm").reset();
            } else {
                return response.text().then(text => {
                    throw new Error(`Помилка сервера: ${text}`);
                });
            }
        })
        .catch((error) => {
            alert("Сталася помилка при відправленні форми. Спробуйте ще раз.");
            console.error("Помилка:", error);
        });
});