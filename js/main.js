document.addEventListener('DOMContentLoaded', () => {
    // Carousel Logic
    const initCarousel = () => {
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.dot');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        if (!slides.length) return;

        let currentSlide = 0;

        const showSlide = (index) => {
            // Remove active class from current
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');

            // Update index
            if (index >= slides.length) currentSlide = 0;
            else if (index < 0) currentSlide = slides.length - 1;
            else currentSlide = index;

            // Add active class to new
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        };

        // Event Listeners
        nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
        prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });

        // Auto play (optional)
        // setInterval(() => showSlide(currentSlide + 1), 5000);
    };

    initCarousel();
});
