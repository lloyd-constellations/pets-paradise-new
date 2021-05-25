const selectElement = (s) => document.querySelector(s);

selectElement(".menu-icon").addEventListener("click", () => {
  selectElement(".nav-items").classList.toggle("active");
});

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

  setTimeout(function() {
    slideIndex++;
    showSlides();
  },4000)
}
// function plusSlides(n) {
//   slideIndex += n;
//   showSlides();
// }
// function currentSlide(n) {
//   slideIndex = n;
//   showSlides();
// }

// Testimonial

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

  let dots = document.getElementsByClassName("slide-dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slide-dot-active", "");
  }
  dots[testimonialSlideIndex - 1].className += " slide-dot-active";
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

// Gallery tabs
// Select elements
const buttons = document.querySelectorAll(".gallery-tab-cta");
const gallery = document.querySelectorAll(".gallery");

// function
function switchTab(button) {
  gallery.forEach((gallery, index) => {
    if (gallery.id === button.id + "Content") {
      gallery.style.display = "grid";
      button.classList.add("active");
      gallery.style.animation = `fadeIn 1s`;
    } else {
      gallery.style.display = "none";
      // note.style.animation = "";
    }
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }
    button.classList.add("active");
  });
}

// add event listeners to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => switchTab(button));
});
