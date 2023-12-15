const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const slidesContainer = document.querySelector(".slides-container");
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;

prevButton.addEventListener("click", () => changeSlide(-1));
nextButton.addEventListener("click", () => changeSlide(1));

function changeSlide(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}
