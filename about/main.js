const selectElement = (s) => document.querySelector(s);

selectElement(".menu-icon").addEventListener("click", () => {
  selectElement(".nav-items").classList.toggle("active");
});