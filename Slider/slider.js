// Get Slider Items | Array.from[ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

//Get Number of Slides 
var slidesCount=sliderImages.length;

//set current slide
var currentSlide=1;

//Slide Number Element
var SlideNumberElement = document.getElementById('slide-number');

//previous and Next
var nextButton =document.getElementById('next');
var prevButton= document.getElementById('prev');

//Handle Click on previous and Next Buttons
nextButton.onclick= nextSLide;
prevButton.onclick= prevSlide;

//Next Slide funciton
function nextSLide(){
    console.log('Next');
}

//previous Slide function
function prevSlide(){
    console.log('Previous');
}

//Create The main UL Element 
var paginationElement= document.createElement('ul');

//set ID on Created UL Element 
paginationElement.setAttribute('id','pagination-ul');

//Create List Items Based on Slides Count 
for(var i=1; i<=slidesCount; i++){
    
    //Create the Li
    var paginationItem= document.createElement('li');

    //Set Custom Attribute
    paginationItem.setAttribute('data-index',i);

    //set Item Content
    paginationItem.appendChild(document.createTextNode(i));

    //Append Items in the Main UL List
    paginationElement.appendChild(paginationItem);
}

//Add the Created UL Element to the page
document.getElementById('indicators').appendChild(paginationElement);