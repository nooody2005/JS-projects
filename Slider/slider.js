// Get Slider Items | Array.from[ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

//Get Number of Slides 
var slideCount=sliderImages.length;

//set current slide
var currentSlide=1;

//Slide Number Element
var SlideNumberElement = document.getElementById('slide-number');

//previous and Next
var nextButton =document.getElementById('next');
var prevButton= document.getElementById('prev');

//Handle Click on previous and Next Buttons
nextButton.onclick= nextSLide();
prevButton.onclick= prevSlide();

//Next Slide funciton
function nextSLide(){
    console.log('Next');
}

//previous Slide function
function prevSlide(){
    console.log('Previous');
}