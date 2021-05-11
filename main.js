let slideIndex = 1;
function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
function plusSlides(n) {
  slideIndex += n;
  showSlides();
}
function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

let testimonialSlideIndex = 1;
function showTestimonialSlides() {
  let slides = document.getElementsByClassName("myTestimonialSlides");
  if (testimonialSlideIndex > slides.length) {
    testimonialSlideIndex = 1;
  }
  if (testimonialSlideIndex < 1) {
    testimonialSlideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[testimonialSlideIndex - 1].style.display = "block";
}
function plusTestimonialSlides(n) {
  testimonialSlideIndex += n;
  showTestimonialSlides();
}
function currentTestimonialSlide(n) {
  testimonialSlideIndex = n;
  showTestimonialSlides();
}

function showAllSlides() {
  showSlides();
  showTestimonialSlides();
}

window.onload = showAllSlides();
