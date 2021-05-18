const selectElement = (s) => document.querySelector(s);

selectElement(".menu-icon").addEventListener("click", () => {
  selectElement(".nav-items").classList.toggle("active");
});

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