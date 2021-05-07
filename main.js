var slideIndex = 1;
function showSlides() {
	var slides = document.getElementsByClassName("mySlides");
	if (slideIndex > slides.length) {slideIndex = 1;}
	if (slideIndex < 1) {slideIndex = slides.length;}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";
 }
function plusSlides(n) {
	slideIndex += n;
	showSlides();
}
function currentSlide(n) {
	slideIndex = n;
	showSlides();
}
window.onload = showSlides;
