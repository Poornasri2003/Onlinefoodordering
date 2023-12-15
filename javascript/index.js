
const carouselSlides = document.querySelectorAll(".food-item .carousel-slide");
const slidesToShow = 1;


carouselSlides.forEach(carouselSlide => {
    let counter = 0;
    const slideWidth = 100 / slidesToShow;

    function loopCarousel() {
        counter++;

        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = `translateX(-${slideWidth * counter}%)`;

        const images = carouselSlide.querySelectorAll("img");
        if (counter >= images.length - (slidesToShow - 1)) {
            setTimeout(() => {
                carouselSlide.style.transition = "none";
                carouselSlide.style.transform = `translateX(0%)`;
                counter = 0;
            }, 500); 
        }

        setTimeout(loopCarousel, 5000); 
    }

    loopCarousel();
});

