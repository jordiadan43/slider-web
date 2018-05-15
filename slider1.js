var slider = document.getElementById('imagenes');
var sliderImages = slider.getElementsByClassName('slider-img');
var nextButton = document.getElementById('next-btn');
var previousButton = document.getElementById('previous-btn');

nextButton.addEventListener("click", next);
previousButton.addEventListener("click", previous);

// Ocultar todas las imágenes
[].forEach.call(sliderImages, function (elementImage) {
  hideImage(elementImage);
});

var index = 0; // First image to be shown
var nImages = sliderImages.length;

// Muestra la primera imagen (elemento con index 0)
showImage(sliderImages[index]);

// Hide an image
function hideImage(elementImage) { elementImage.style.display = "none"; }

// Show an image
function showImage(elementImage) { elementImage.style.display = "block"; }

// Next image
function next() {
  hideImage(sliderImages[index]);
  index = (index + 1) % nImages;
  showImage(sliderImages[index]);
}

// Previous image
function previous() {
  hideImage(sliderImages[index]);

  if (index == 0) {
    index = nImages - 1;
  } else {
    index = (index - 1);
  }

  showImage(sliderImages[index]);
}
