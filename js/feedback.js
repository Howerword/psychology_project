const initSwiper = async () => {
        try {
            // Add loading state
            const feedbackSection = document.querySelector('.feedback-section');
            if (feedbackSection) {
                feedbackSection.classList.add('loading');
            }

            const swiperConfig = {
                loop: true,
                speed: 800,
                spaceBetween: 30,
                grabCursor: true,
                effect: 'slide',
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    dynamicBullets: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '" role="button" aria-label="Go to slide ' + (index + 1) + '"></span>';
                    }
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    hideOnClick: true
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                },
                a11y: {
                    prevSlideMessage: 'Previous slide',
                    nextSlideMessage: 'Next slide',
                    firstSlideMessage: 'This is the first slide',
                    lastSlideMessage: 'This is the last slide',
                    paginationBulletMessage: 'Go to slide {{index}}'
                },
                on: {
                    init: function () {
                        feedbackSection?.classList.remove('loading');
                    },
                    slideChangeTransitionStart: function () {
                        // Add fade effect to text
                        document.querySelectorAll('.feedback-text').forEach(text => {
                            text.style.opacity = '0.5';
                            text.style.transform = 'translateY(20px)';
                        });
                    },
                    slideChangeTransitionEnd: function () {
                        // Fade in text
                        document.querySelectorAll('.feedback-text').forEach(text => {
                            text.style.opacity = '1';
                            text.style.transform = 'translateY(0)';
                            text.style.transition = 'all 0.5s ease';
                        });
                    }
                }
            };

            // Initialize Swiper
            const swiperEl = document.querySelector('.swiper');
            if (swiperEl) {
                const swiper = new Swiper(swiperEl, swiperConfig);

                // Add keyboard navigation
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowLeft') swiper.slidePrev();
                    if (e.key === 'ArrowRight') swiper.slideNext();
                });

                // Pause autoplay when page is not visible
                document.addEventListener('visibilitychange', () => {
                    if (document.hidden) {
                        swiper.autoplay.stop();
                    } else {
                        swiper.autoplay.start();
                    }
                });
            }
        } catch (error) {
            console.error("Error initializing Swiper:", error);
            // Remove loading state if error occurs
            document.querySelector('.feedback-section')?.classList.remove('loading');
        }
    };

    initSwiper();
