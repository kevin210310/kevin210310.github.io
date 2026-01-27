document.addEventListener('DOMContentLoaded', () => {
    // Carousel Logic
    const initCarousel = () => {
        let currentSlide = 0;

        const dotsContainer = document.querySelector('.carousel-dots');
        const slides = document.querySelectorAll('.carousel-slide');
        const slidesLength = slides.length;
        if (!slidesLength) return;
        let addDot = ``;

        for (let i = 0; i < slides.length; i++) {
            addDot += `<span class="dot ${i === currentSlide ? 'active' : ''}"></span>`;
        }
        dotsContainer.innerHTML = addDot;

        const dots = document.querySelectorAll('.dot');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');


        const showSlide = (index) => {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            console.log({ index, slidesLength });

            if (index >= slidesLength) currentSlide = 0;
            else if (index < 0) currentSlide = slidesLength - 1;
            else currentSlide = index;

            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        };

        nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
        prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });

        setInterval(() => showSlide(currentSlide + 1), 5000);
    };

    initCarousel();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});