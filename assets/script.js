const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let current_slide = 0;
const arrow_left = document.getElementsByClassName('arrow_left');
const arrow_right = document.getElementsByClassName('arrow_right');
const dots = document.getElementsByClassName('dots');
const banner_img = document.getElementsByClassName('banner-img');
const banner_text = document.getElementsByClassName('banner-text');





(function addingDots() {
	var numberOfDots = slides.length;
	for (var counter = 0; counter < slides.length; counter++) {

		if (counter == current_slide) {
			dots[0].innerHTML += "<div class='dot dot_selected'></div>";
		} else {
			dots[0].innerHTML += "<div class='dot'></div>";
		}
	}
})();


arrow_left[0].addEventListener("click", () => {
	changeCurrentSlideNumber(-1);
});

arrow_right[0].addEventListener("click", () => {
	changeCurrentSlideNumber(1);
});


function changeCurrentSlideNumber(number) {

	current_slide += number;

	if (current_slide < 0) {
		current_slide = (slides.length - 1);
	}
	if (current_slide > (slides.length - 1)) {
		current_slide = 0;
	}

	changeSlide(current_slide);
	changeSelectedDot(current_slide);
}


function changeSlide(current_slide) {
	banner_img[0].src = "./assets/images/slideshow/" + slides[current_slide].image;
	banner_text[0].innerHTML = slides[current_slide].tagLine;
}


function changeSelectedDot(current_slide) {

	document.getElementsByClassName("dot_selected")[0].classList.remove("dot_selected");
	document.getElementsByClassName("dot")[current_slide].classList.add("dot_selected");
}