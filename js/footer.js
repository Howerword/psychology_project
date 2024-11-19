 // Елементи, які потрібно анімувати
    const elementsToAnimate = [
        {
            selector: '.contact h2',
            animationClass: 'animate-fadeInUp'
        },
        {
            selector: '.contact p',
            animationClass: 'animate-fadeInUp'
        },
        {
            selector: '.contact ul li',
            animationClass: 'animate-fadeInUp',
            delay: 0.3 // Затримка у секундах
        },
        {
            selector: '.btn.footer-btn',
            animationClass: 'animate-zoomIn',
            delay: 0.6
        },
        {
            selector: '.social-icons a',
            animationClass: 'animate-fadeIn',
            delay: 0.9
        }
    ];

    // Налаштування для IntersectionObserver
    const observerOptions = {
        threshold: 0.1 // Відсоток видимості елементу, щоб активувати анімацію (10%)
    };

    // Ініціалізація IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Виводимо в консоль інформацію про спостереження за елементом
            

            if (entry.isIntersecting) {
                const element = entry.target;
                const animationClass = element.dataset.animationClass;
                const delay = element.dataset.animationDelay || 0;

                // Виконуємо додавання класу з анімацією з урахуванням затримки
                setTimeout(() => {
                    element.classList.add(animationClass);
                    
                }, delay * 1000);

                // Після активації анімації знімаємо спостерігач
                observer.unobserve(element);
                
            }
        });
    }, observerOptions);

    // Додаємо кожен елемент до спостереження
    elementsToAnimate.forEach(item => {
        const elements = document.querySelectorAll(item.selector);
        elements.forEach(element => {
            // Зберігаємо дані про анімацію та затримку в атрибути елементу
            element.dataset.animationClass = item.animationClass;
            if (item.delay) {
                element.dataset.animationDelay = item.delay;
            }
            // Додаємо елемент до спостереження
            observer.observe(element);
            
        });
    });
