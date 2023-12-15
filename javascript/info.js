// index.js

// Get references to the carousel elements
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

// Buttons
const prevButton = document.querySelector('#prevBtn');
const nextButton = document.querySelector('#nextBtn');

// Counter to keep track of the current image
let counter = 0;

// Set the width of the carousel slide based on the number of images
carouselSlide.style.width = `${images.length * 100}%`;

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
    if (counter < images.length - 1) {
        counter++;
    } else {
        counter = 0;
    }
    updateSlide();
});

// Event listener for the "Previous" button
prevButton.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
    } else {
        counter = images.length - 1;
    }
    updateSlide();
});

// Function to update the carousel slide position
function updateSlide() {
    carouselSlide.style.transform = `translateX(-${counter * (100 / images.length)}%)`;
}
