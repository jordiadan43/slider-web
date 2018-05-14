var slider = document.getElementById('slider');
var sliderImages = document.getElementsByClassName('slider-img')

var nextButton = document.getElementById('next-btn');
var previousButton

[].forEach.call(sliderImages, function (elementImage) {
  hideImage(elementImage);
  }

});

var index = 0;
//muestra la primera
showImage(sliderImages[index]);


//hide an image
function hideImage(elementImage) {
  elementImage.style.display = "none";
}

//show an image
function showImage(elementImage) {
  elementImage.style.dysplay = "block"
}

//next image
function next() {
  index = (index + 1) % nImage
}
